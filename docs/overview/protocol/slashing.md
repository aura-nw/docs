---
sidebar_position: 5
---

# Slashing

## What is slashing and why it is required in Aura Network

### What is slashing?
Slashing is a characterized mechanism in Proof-of-Stake (PoS) blockchain network. The majority of the PoS blockchains have a reward mechanism for honest and truthful behavior as well as a penalty mechanism for malicious behavior. The purpose of slashing is to penalize validators for their malicious activities that might harm the network and discouraging them to repeat those activities in the futures.

With the nature of staking, the penalty may vary from being charged a fixed amount of tokens, a fixed percentage, complete slashing of the stake and banning the validator from the group for a specified amount of time (or even permanently).

As any other PoS network, slashing is also implemented in Aura Network for similar purpose.

### Types of slashing in Aura Network
The Aura Network implement 2 main types of slashing due to the severity of the malicious behavior that validators might act:
- Liveness (Downtime) Slashing: Validator will be slashed due to not signing enough block in a specified window of time by any reasons.
- Double-sign Slashing: Validator will be slashed due to the dishonest behavior of double-signing. Double-sign slashing will include a concept of Tombstone Caps (explained below).

## The Slashing Mechanism
### Begin-Block
At the beginning of each block, the Slashing module checks for evidence of infractions or downtime of validators, as well as double-signing and other low-level consensus penalties.

### Liveness (Downtime) Tracking and Slashing
At the beginning of each block, we update the `ValidatorSigningInfo` for each validator and check if they've crossed below the liveness threshold over a sliding window. This sliding window is defined by `SignedBlocksWindow` and the index in this window is determined by `IndexOffset` found in the validator's `ValidatorSigningInfo`. For each block processed, the `IndexOffset` is incremented regardless if the validator signed or not. Once the index is determined, the `MissedBlocksBitArray` and MissedBlocksCounter are updated accordingly.

Finally, in order to determine if a validator crosses below the liveness threshold, we fetch the maximum number of blocks missed, `maxMissed`, which is `SignedBlocksWindow - (MinSignedPerWindow * SignedBlocksWindow)` and the minimum height at which we can determine liveness, `minHeight`. If the current block is greater than `minHeight` and the validator's `MissedBlocksCounter` is greater than `maxMissed`, they will be slashed by `SlashFractionDowntime`, will be jailed for `DowntimeJailDuration`, and have the following values reset: `MissedBlocksBitArray`, `MissedBlocksCounter`, and `IndexOffset`.

__Note__: Liveness slashes do __NOT__ lead to a __tombstoning__.

```sh
height := block.Height

for vote in block.LastCommitInfo.Votes {
  signInfo := GetValidatorSigningInfo(vote.Validator.Address)

  // This is a relative index, so we counts blocks the validator SHOULD have
  // signed. We use the 0-value default signing info if not present, except for
  // start height.
  index := signInfo.IndexOffset % SignedBlocksWindow()
  signInfo.IndexOffset++

  // Update MissedBlocksBitArray and MissedBlocksCounter. The MissedBlocksCounter
  // just tracks the sum of MissedBlocksBitArray. That way we avoid needing to
  // read/write the whole array each time.
  missedPrevious := GetValidatorMissedBlockBitArray(vote.Validator.Address, index)
  missed := !signed

  switch {
  case !missedPrevious && missed:
    // array index has changed from not missed to missed, increment counter
    SetValidatorMissedBlockBitArray(vote.Validator.Address, index, true)
    signInfo.MissedBlocksCounter++

  case missedPrevious && !missed:
    // array index has changed from missed to not missed, decrement counter
    SetValidatorMissedBlockBitArray(vote.Validator.Address, index, false)
    signInfo.MissedBlocksCounter--

  default:
    // array index at this index has not changed; no need to update counter
  }

  if missed {
    // emit events...
  }

  minHeight := signInfo.StartHeight + SignedBlocksWindow()
  maxMissed := SignedBlocksWindow() - MinSignedPerWindow()

  // If we are past the minimum height and the validator has missed too many
  // jail and slash them.
  if height > minHeight && signInfo.MissedBlocksCounter > maxMissed {
    validator := ValidatorByConsAddr(vote.Validator.Address)

    // emit events...

    // We need to retrieve the stake distribution which signed the block, so we
    // subtract ValidatorUpdateDelay from the block height, and subtract an
    // additional 1 since this is the LastCommit.
    //
    // Note, that this CAN result in a negative "distributionHeight" up to
    // -ValidatorUpdateDelay-1, i.e. at the end of the pre-genesis block (none) = at the beginning of the genesis block.
    // That's fine since this is just used to filter unbonding delegations & redelegations.
    distributionHeight := height - sdk.ValidatorUpdateDelay - 1

    Slash(vote.Validator.Address, distributionHeight, vote.Validator.Power, SlashFractionDowntime())
    Jail(vote.Validator.Address)

    signInfo.JailedUntil = block.Time.Add(DowntimeJailDuration())

    // We need to reset the counter & array so that the validator won't be
    // immediately slashed for downtime upon rebonding.
    signInfo.MissedBlocksCounter = 0
    signInfo.IndexOffset = 0
    ClearValidatorMissedBlockBitArray(vote.Validator.Address)
  }

  SetValidatorSigningInfo(vote.Validator.Address, signInfo)
}
```
### Unjail after being slashed
When a validator was automatically unbonded due to downtime, it must send a `MsgUnjail` to comeback online. 

```sh
// MsgUnjail is an sdk.Msg used for unjailing a jailed validator, thus returning
// them into the bonded validator set, so they can begin receiving provisions
// and rewards again.
message MsgUnjail {
  string validator_addr = 1;
}
```
There are 2 requirement for the validator for a successful unjail:
- The validator is not flagged by the Tombstone Caps.
- The duration of the last downtime slashing was ended.

__Note:__ Due to the nature of downtime slashing and unjailing, a validator cannot be under multiple infraction of downtime slashing.

```sh
unjail(tx MsgUnjail)
    validator = getValidator(tx.ValidatorAddr)
    if validator == nil
      fail with "No validator found"

    if getSelfDelegation(validator) == 0
      fail with "validator must self delegate before unjailing"

    if !validator.Jailed
      fail with "Validator not jailed, cannot unjail"

    info = GetValidatorSigningInfo(operator)
    if info.Tombstoned
      fail with "Tombstoned validator cannot be unjailed"
    if block time < info.JailedUntil
      fail with "Validator still jailed, cannot unjail until period has expired"

    validator.Jailed = false
    setValidator(validator)

    return
```
If the validator has enough stake to be in the top `n = MaximumBondedValidators`, it will be automatically rebonded, and all delegators still delegated to the validator will be rebonded and begin to again collect provisions and rewards.

### The Tombstone Caps and Double-sign Slashing
In order to mitigate the impact of initially likely categories of non-malicious protocol faults, the Aura Network implements for each validator a tombstone cap, which only allows a validator to be slashed once for a double sign fault. For example, if some misconfigiration occurs and a validator double-signs a bunch of old blocks, it will only be punished for the first double-sign (and then immediately tombstoned). Tombstoned validator will not be able to rejoin the validator set.

## Parameters
The slashing module contains the following parameters:

| Key | Type | Value | Meaning
| ------ | ------ | ------ | ------ |
| SignedBlocksWindow | string(int64) | "100" | The length in blocks of the sliding block window used for liveness tracking  
| MinSignedPerWindow | string(dec) | "0.500000000000000000" | The minimum percentage of blocks that validators must sign inside the block window to not be slashed by Liveness Slashing
| DowntimeJailDuration | string(ns) | "600000000000" | The duration which the validator will be jailed after a Liveness Slashing infraction. After this duration, the validator can send the message to unjail themself.
| SlashFractionDoubleSign | string(dec)| "0.050000000000000000" | The percentage of stake that the validator will lose upon a Double-sign Slashing infraction.
| SlashFractionDowntime | string(dec) | "0.010000000000000000" | The percentage of stake that the validator will lose upon a Liveness Slashing infraction.

For more detailed information, see [Module "slashing" in Cosmos Network](https://docs.cosmos.network/master/modules/slashing/).

