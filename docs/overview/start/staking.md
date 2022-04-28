---
sidebar_position: 3
---

# Staking
## I. What is staking?
Staking is the process of locking up a digital asset (Aura in the case of the Aura Network) to provide economic security for a public blockchain that everyone can participate in maintaining.

The purposes of staking are:
- Secure the chain: with Aura, everyone has the superpower to contribute to the security and governance of the Aura Network.
- Earn rewards: select one or more validators of the Aura Network and start earning assets.
- Vote for the future: staking Aura have the right to vote on proposals and make decisions on the future of the network.

Aura holders that do not operate validators themselves also can participate in securing the network by a mechanism called `Delegation`. When Aura holders stake their Aura, they must choose one or more validators to delegate to. Validators are then able to receive rewards but are also be at risk of slashing if the validators they chose misbehave.
Before Aura holders start staking process, they must setup their wallet, transfer Aura to the wallet and then select validators.

## II. Setup your wallet

## III. Select your validators
To select validators, Aura holders have access to a range of information available in Aura network explorers like Aurascan. Review the following information before selecting:
- Validator name (aslo known as the moniker): name of the validator.
- Validator description
- Validator website
- Initial commission rate: the commission rate on rewards to a delegator.
- Minimum self-bonded amount: minimum amount of Aura the validator must have bonded at all time. This parameter exists as a safeguard for delegators. When a validator misbehaves, part of their total stake gets slashed. This stake includes the validator's self-bonded stake and their delegator's stake.
![Validator information](/img/validator-infor.png)
Delegators should research and learn more about validator's operation, history and security practices to choose a trusted validator to prevent slashing.

## IV. Delegate to a validator
After selecting a trusted validator, Aura holders start delegating with an amount of Aura assets and paying a transaction fee for the delegation transaction.
![Delegate a validator](/img/delegate-validator.png)
After delegating successully, staking rewards are generated and distributed to staked Aura holders in two ways:
- Transaction fees
- Block provisions: the total supply of Aura is inflated to reward stakers. Aura holders that do not stake do not receive rewards.
Staked Aura holders can earn rewards by sending a claim reward transaction, rewards will send to Aura holder's wallet automatically.
![Claim reward](/img/claim-reward.png)

## V. Undelegate a validator
Staking will lock your funds for 21+ days, so you will need to undelegate in order for your staked assets to be liquid again. This process will take 21 days to complete. Once the unbonding period begins you will:
- not receive staking rewards
- not be able to cancel the unbonding
- need to wait 21 days for the amount to be liquid
![Undelegate a validator](/img/undelegate.png)

## VI. Redelegate to another validator
After staking to a validator successully, you want to switch to validators, redelegate to instantly stake your assets to another validator.
Step 1: Choose another trusted validator
![Redelegate to another validator](/img/redelegate-select-validator.png)
Step 2: Input amount of asset want to redelegate. You can redelegate all your staked assets or less.
![Redelegate to another validator](/img/redelegate-amount.png)

For more detailed information about staking, see [here](https://docs.aura.network/overview/protocol/staking)




