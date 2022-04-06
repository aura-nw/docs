---
sidebar_position: 1
---

# Validator Overview

## What is a validator?
Validators are Aura holders, responsible for commiting new blocks in the blockchain and receive revenue in exchange for their work. These validators participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key.
Validators must also participate in governance by voting on proposals. Validators are weighted according to their total stake.
Validators can bond their own Aura and have Aura "delegated", or staked to them by token holders (delegators). Validators and their delegators earn Aura as block provisions and transaction fees through execution of the **Tendermint** consensus protocol. For more information about commission, see [here](https://docs.aura.network/protocol/commission).
If validators double sign, are frequently offline, or do not participate in governance, their staked Aura (including Aura of users that delegated to them) can be slashed. The penalty depends on the severity of the violation. For more information about slashing, see [here](https://docs.aura.network/protocol/slashing).

## How to become a validator?

Aura holders send a `create-validator` transaction and fill out the following parameters to become a validator:
- **`Validator's PubKey`**: The private key associated with this Tendermint PubKey is used to sign prevotes and precommits.
- **`Validator's Address`**: is used to publicly identify the validator. The private key associated with this address is used to delegate, unbond, claim rewards and participate in governance.
- **`Validator's moniker`**: Name of the validator.
- **`Validator's description`**
- **`Validator's website`**
- **`Initial commission rate`**: The commission rate on block provisions and fees charged to delegators.
- **`Maximum commission`**: The maximum commission rate that this validator can charge. This parameter is fixed and cannot be changed after the `create-validator` transaction is processed.
- **`Commission max change rate`**: The maximum daily increase of the validator commission. This parameter is fixed cannot be changed after the `create-validator` transaction is processed.
- **`Minimum self-delegation`**: Minimum amount of Aura the validator requires to have bonded at all time. If the validator's self-delegated stake is less than this limit, their entire staking pool is unbonded.

After a validator is created, Aura holders can delegate Aura to them. The total stake of a validator is the combination of Aura bonded by delegators and Aura self-delegated by the validator.

From all validator candidates, the 125 validators with the most total stake are the designated validators. If a validator's total stake falls below the top 125, then that validator loses their validator privileges. The validator cannot participate in the consensus protocol or receive rewards until the stake is high enough to be in the top 125. Over time, the maximum number of validators may be increased via on-chain governance proposal.

## What are the different states a validator can be in?
After a validator is created with a `create-validator` transaction, the validator is in one of three states:
- `in validator set`: Validator is in the active set, participates in consensus, earns rewards and can be slashed for misbehavior.
- `jailed`: Validator misbehaved and is in jail, i.e. outside of the validator set.
    - If the jailing is due to being offline for too long, the validator can send an `unjail` transaction in order to re-enter the validator set.
    - If the jailing is due to double signing, the validator is tombstoned, cannot unjail.
- `unbonded`: Validator is not in the active set, and therefore not signing blocks. Validator cannot be slashed and does not earn any reward. It is still possible to delegate Aura to an unbonded validator. Undelegating from an unbonded validator is immediate.

## What are the responsibilities of a validator?
Validators have two main responsibilities:
- **Be able to constantly run a correct version of the software**: Validators must ensure that their servers are always online and their private keys are not compromised.
- **Actively participate in governance**: Validators are required to vote on every proposal.

Additionally, validators are expected to be active members of the community. Validators must always be up-to-date with the current state of the ecosystem so that they can easily adapt to any change.

For more detailed information about Validator, see [here](https://hub.cosmos.network/main/validators/overview.html).
