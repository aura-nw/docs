---
sidebar_position: 5
---

# Staking

## Validator
There are three statuses of validators
- `Unbonded`: The validator is not in the active set. They can not commit blocks and earn rewards. But they can receive delegations.
- `Bonded`: The validator receives adequate bonded tokens to be the top `params.MaxValidators`. They can commit blocks, earn rewards and receive further delegations. They can be slashed because of their misbehavior.
- `Unbonding`: The validator leaves the active set because of slashing or not having sufficient bonded tokens, all delegations must wait for the `UnbondingTime` before their tokens are moved to their accounts and `validator.status` is moved from `unbonding` to `unbonded`.
## Delegation 
Aura holders who can not commit blocks may delegate Aura coins to validators and then receive rewards.
`Share per Token = validator.TotalShares() / validator.Tokens()`

`Tokens per Share = validator.Tokens() / validator.TotalShares()`

## Redelegation
The delegators who delegated Aura coins to validators can redelegate their assets to another validator immediately without waiting for the `UnbondingTime`.
The delegator can redelegate from and to the same validator only up to 7 times and must wait for the `UnbondingTime` in order to redelegate from the “To” validator.

## Undelegation
Aura coins delegated to validators can be unbonded, but they may not be sent immediately to the delegator’s account. They must wait for the `UnbondingTime`.
Similar to the redelegation module, the delegator can undelegated from the same validator only up to 7 times.

## Sate transitions
### Validators
The validators’ state can be `Bonded`, `Unbonding`, or `Unbonded`. They can move directly between all the states, except from `Bonded` to `Unbonded`. `Unbonded` and `Unbonding` are called `NotBonded`.

#### NotBonded to Bonded
When a validator’s ranking in the `ValidatorPowerIndex` reaches the `params.MaxValidators`.
- set `validator.status` to `Bonded`
- send the `validator.Tokens` from the `NotBondedTokens` to the `BondedPool` `ModuleAccount`

#### Bonded to Unbonding
When a validator begins the unbonding process:
- send the `validator.Tokens` from `BondedPool` to the `NotBondedTokens` `ModuleAccount`
- set `validator.status` to `Unbonding`

#### Unbonding to Unbonded
A validator’s status moves from unbonding to unbonded when the `ValidatorQueue` object moves from bonded to unbonded.
- set `validator.status` to `Unbonded`

#### Jail/ Unjail
When the validators misbehave, they are jailed:
- set `validator.Jailed` and update object
- If jailed, delete the record from `ValidatorByPowerIndex`
- If unjailed, add the record to `ValidatorByPowerIndex`

### Delegations
#### Delegate
When a delegator delegates to a validator, both the validator and delegator object are updated:
- determine the delegators shares based on delegated tokens and the validator’s exchange rate
- remove tokens from the delegator’s account
- transfer the `delegation.Amount` from the delegator’s account to the `BondedPool` or the `NotBondedPool` `ModuleAccount` depending on the `validator.status`

#### Begin Unbonding
When a delegator undelegated a validator:
- update or remove the delegation if there are no more shares
- update the validator with removed the delegator’s shares and coins
- remove the validator if it is unbonded and there are no more delegation shares

#### Complete Unbonding
Delegators can not receive undelegation’s shares immediately and must wait for `UnbondingTime` before transferring the tokens from the `NotBondedPool` `ModuleAccount` to the delegator Account.

#### Begin Redelegation
The delegator redelegates from source validator to destination validator:
- perform an unbond delegation from the source validator to retrieve the tokens worth of the unbonded shares
- delegate the unbonded tokens to the destination validator
- if the `sourceValidator.status` is `Bonded`, and the `destinationValidator` is `NotBonded`, transfer the delegated tokens from the `BondedPool` to the `NotBondedPool` `ModuleAccount`
- if the `sourceValidator.status` is `NotBonded`, and the `destinationValidator.status` is `Bonded`, transfer the delegated tokens from the `NotBondedPool` to the `BondedPool` `ModuleAccount`

When a redelegation begins until it completes, the delegator is in the state of `pseudo-unbonding`, and can still be slashed for infractions that occurred before the redelegation began.

### Slashing
#### Slash validator
When a validator is slashed due to misbehavior:
- the total `slashAmount` is calculated as the `slashFactor x TokensFromConsesusPower`, the total bonded tokens of the validator at the infraction time
- the infraction occurred before the unbonding or redelegation began from the validator be slashed by the `slashFactor` percentage of the total bonded tokens. This causes the total supply of tokens decreases.

#### Slash Unbonding
When a validator is slashed, all unbonding delegations from the validator that began after the infraction time are slashed by `slashFactor`. The slashed amount is calculated from the `InitialBalance` of the delegations and prevents a negative balance.
Completed unbondings are not slashed.

#### Slash Redelegation
When a validator is slashed, all redelegations from the validator that began after the infraction time are slashed by `slashFactor`. The slashed amount is calculated from the `InitialBalance` of the delegations and prevents a negative balance.
Redelegations that began before the infraction time are not slashed.
Mature redelegations that have completed `pseudo-unbonding` are not slashed.

#### How to calculate shares
Each validator has a number of tokens `T` and a number of shares `S`.

`T = sum of all tokens delegated to the validator + the rewards - the slashes`.

Each delegator `i` has a number of shares `S_i` and delegator `i` delegated `T x S_i/ S` tokens to the validator.

When delegator `j` delegates `T_j` tokens and has `S_j = S x T_j/ T` shares. 

The total number of tokens is now `T+ T_j`, and the total number of shares is `S + S_j`.

`(S + S_j) / S = (T + T_j) / T`

## Parameters
The staking module contains the following parameters:

| Key | Type | Value | Meaning |
| ------ | ------ | ------ | ------ |
| UnbondingTime | string (time ns) | "1814400000000000" | The duration time to complete unbonding and pseudo-unbonding processe |
| MaxValidators | unint16 | "100" | The maximum active validator|
| KeyMaxEntries | unint16 | "7" | The maximum entries of the undelegations and redelegations from and to the same validator|

For more detailed information about Staking, see [here](https://docs.cosmos.network/main/modules/staking/)





