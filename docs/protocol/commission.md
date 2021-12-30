---
sidebar_position: 2
---

# Commission

## Revenue
Validators and delegators earn revenue in exchange for their services (staking and delegating). This revenue is given in two forms:

- **Block provisions (Auras)**: They are paid in newly created Auras. Block provisions exist to incentivize Aura holders to stake. For more information on Block Provisions, see the [Mint Mechanism](https://docs.aura.network/protocol/mint).
- **Transaction fees**: Each transfer in the Aura Network comes with transactions fees. The initial fee token is the Aura. For more information on Transaction fees, see below.

This total revenue is divided among validators' staking pools according to each validator's weight. Then, within each validator's staking pool the revenue is divided among delegators in proportion to each delegator's stake. A commission on delegators' revenue is applied by the validator before it is distributed.
## What are validator's commission?
Revenue received by a validator's pool is split between the validator and their delegators. 
The validator can apply a commission on the part of the revenue that goes to their delegators. This commission is set as a percentage. Each validator is free to set their `initial commission`, `maximum daily commission change rate`, and `maximum commission`. 
Validators earn proportionally more revenue than their delegators because of **commissions**.
The `maximum commission rate` is fixed and cannot be changed. However, the `commission rate` itself can be changed after the validator is created as long as it does not exceed the maximum commission.

## Validator Commission
Each validator receives revenue based on their total stake. Before this revenue is distributed to delegators, the validator can apply a commission. In other words, delegators have to pay a commission to their validators on the revenue they earn. Let us look at a concrete example: 

A validator whose stake (i.e. self-delegated stake + delegated stake) is 10% of the total stake of all validators. This validator has 20% self-delegated stake and applies a commission of 10%. Now let us consider a block with the following revenue:

- 990 Auras in block provisions.
- 10 Auras in transaction fees.

This amounts to a total of 1000 Auras to be distributed among all staking pools.
Our validator's staking pool represents 10% of the total stake, which means the pool obtains 100 Auras. Now let us look at the internal distribution of revenue:

- Commission = `10% * 80% * 100` = 8 Auras
- Validator's revenue = `20% * 100 + Commission` = 28 Auras
- Delegators' total revenue = `80% * 100 - Commission` = 72 Auras

Then, each delegator in the staking pool can claim their portion of the delegators' total revenue.

## Transaction fees
Transactions in Aura Network need to include a transaction fee to be processed. This fee pays for the gas required to run the transaction. The formula is the following:
`fees = ceil(gas * gasPrices)`
- The `gas` is dependent on the transaction. Different transaction require different amount of gas (`gasWanted`). The gas amount for a transaction is calculated as it is being processed.
- The `gasPrice` is the price of each unit of gas. Each validator sets a `min-gas-price` value, and will only include transactions that have a `gasPrice` greater than their `min-gas-price`.
- The `fees` specifies how much in fees the user is willing to pay in total.

The transaction fees are the product of `gasWanted` and `gasPrice`. As a user, you have to input 2 out of 3. The higher the `gasPrice`/`fees`, the higher the chance that your transaction will get included in a block.
***Note***: If the `gasUsed` beyond `gasWanted` or `gasPrice` is less than `min-gas-price` then the transaction fails and the sender still pays the `fees`.

For more detailed information about Commission, see [here](https://hub.cosmos.network/main/delegators/delegator-faq.html)





