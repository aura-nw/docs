---
sidebar_position: 4
---

# Staking your coin

## I. What is staking?
Staking is the process of locking up a digital asset (Aura in the case of the Aura Network) to provide economic security for a public blockchain that everyone can participate in maintaining.

The purposes of staking are:
- Secure the chain: with Aura, everyone has the superpower to contribute to the security and governance of the Aura Network.
- Earn rewards: select one or more validators of the Aura Network and start earning assets.
- Vote for the future: staking Aura have the right to vote on proposals and make decisions on the future of the network.

Aura holders that do not operate validators themselves also can participate in securing the network by a mechanism called `Delegation`. When Aura holders stake their Aura, they must choose one or more validators to delegate to. Validators are then able to receive rewards but are also be at risk of slashing if the validators they chose misbehave.
Before Aura holders start staking process, they must setup their wallet, transfer Aura to the wallet and then select validators.

## II. Setup your wallet
For more detailed information about Setup your wallet, see [here](./wallet.md)

## III. Select your validators
To select validators, Aura holders have access to a range of information available in Aura network explorers like Aurascan. Review the following information before selecting:
- Validator name (aslo known as the moniker): name of the validator.
- Validator description
- Validator website
- Initial commission rate: the commission rate on rewards to a delegator.
- Minimum self-bonded amount: minimum amount of Aura the validator must have bonded at all time. This parameter exists as a safeguard for delegators. When a validator misbehaves, part of their total stake gets slashed. This stake includes the validator's self-bonded stake and their delegator's stake.

:::info
Delegators should research and learn more about validator's operation, history and security practices to choose a trusted validator to prevent slashing.
:::

## IV. Delegate to a validator
Once AURA holders have identified a validator they trust, they can begin delegating their AURA through delegation transactions (with transaction fees as any other transactions). 
In order to maintain the security and decentralization of the network, it is recommended to delegate AURA to multiple validators instead of just one or a few. 
- Multiple delegations prevent any one validator from having too much voting power, which could pose a risk to the network's integrity. 
- Additionally, delegators should be mindful of the commission rates charged by validators, as higher rates mean fewer rewards for the delegators. 
By spreading their delegation across multiple validators with reasonable commission rates, delegators can maximize their staking rewards while contributing to a more secure and decentralized network.

![Delegate a validator](/img/aurascan/delegate-validator.png)

:::caution
Staking all of your available AURA by clicking the 'Max' button might lead to transaction failure, as different wallets have different ways of choosing the optimal gas fee for transactions. 
Thus, you can use that button if convenient, but always **remember** to leave some AURA for paying the **transaction fee**.
:::

After delegating successully, staking rewards are generated to staked Aura holders in both ways:
- Transaction fees
- Block provisions: the total supply of Aura is inflated to reward stakers. Aura holders that do not stake do not receive rewards.

### Claim rewards 
Staked Aura holders can get their rewards by sending a claim reward transaction, then the rewards will be sent to Aura holder's wallet automatically.

![Claim reward](/img/aurascan/claim-reward.png)

## V. Undelegate a validator
As staking will lock your funds, you will need to undelegate in order for your staked assets to be liquid again. This process will take several days (depending on the network configuration) to complete. Once the unbonding period begins you will:
- not further receive staking rewards
- not be able to cancel the unbonding
- need to wait until the end of unbonding period for the amount to be liquid

![Undelegate a validator](/img/aurascan/new_undelegate.png)

## VI. Redelegate to another validator
After staking to a validator successully, you want to switch to validators, redelegate to instantly stake your assets to another validator.
Step 1: Choose another trusted validator

![Redelegate to another validator](/img/aurascan/redelegate-select-validator.png)

Step 2: Input amount of asset you want to redelegate. You can redelegate all your staked assets or your desired amount.

![Redelegate to another validator](/img/aurascan/redelegate-amount.png)

For more detailed information about staking, see [here](https://docs.aura.network/overview/protocol/staking)




