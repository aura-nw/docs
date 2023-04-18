---
sidebar_position: 2
---

# Delegator
## What is a delegator?
Delegators are Aura holders who cannot, or do not want to run a validator node, but can still participate in the staking process. Aura holders can delegate Aura to a validator and receive a part of their revenue in exchange.
Delegators share the revenue of their validators, but they also share the risks. 
- In terms of revenue, validators and delegators differ in that validators can apply a commission on the revenue that goes to their delegator before it is distributed. For more information about commission, see [here](https://docs.aura.network/overview/protocol/commission).
- In terms of risk, delegators' Auras can be slashed if their validator misbehaves. For more information about slashing, see [here](https://docs.aura.network/overview/protocol/slashing).

## How to become a delegator?
To become delegators, Aura holders need to send a `Delegate` transaction where they specify how many Auras they want to bond and to which validator. A list of validator candidates will be displayed in Aura Network explorers. See section below to know How to choose a validator? 
Later, if a delegator wants to unbond part or all of their stake, they needs to send an `Unbond` transaction. From there, the delegator will have to wait 3 weeks to retrieve their Auras. Delegators can also send a `Rebond` Transaction to switch from one validator to another, without having to go through the 3 weeks waiting period.

## How to choose a validator?
Delegators choose validators according to their own subjective criteria. Selection criteria includes:
- **Amount of self-delegated Aura**: Number of Aura a validator self-delegated to themselves. A validator with a higher amount of self-delegated Aura indicates that the validator is sharing the risk and experienced consequences for their actions.
- **Amount of delegated Aura**: Total number of Aura delegated to a validator. A high voting power shows that the community trusts this validator. But larger validators also decrease the decentralization of the network.
- **Commission rate**: Commission applied on revenue by validators before the revenue is distributed to their delegators.
- **Track record**: Delegators review the track record of the validators they plan to delegate to. This track record includes seniority, past votes on proposals, historical average uptime and how often the node was compromised.

## What are the responsibilities of a delegator?
Delegators play a critical role in the system. Being a delegator is not a passive role. Here are the main directives of a delegator:
- **Perform careful due diligence on validators before delegating**. If a validator misbehaves, part of their total stake which includes the stake of their delegators, can be slashed. Therefore delegators should carefully select validators they think will behave correctly.
- **Actively monitor their validator after having delegated**. Delegators ensure that the validators they delegated to, behave correctly. Validators should have good uptime, do not double sign or get compromised, and participate in governance. Delegators also monitor the commission rate that is applied. If a delegator is not satisfied with its validator, they can `unbond` or `rebond` (switch) to another validator. 
(***Note***: *Delegators do not have to wait for the unbonding period to switch validators. Rebonding takes effect immediately*).
- **Participate in governance**. Delegators actively participate in governance. A delegator's voting power is proportional to the size of their bonded stake. If a delegator does not vote, they will inherit the vote of their validators. If they do vote, they override the vote of their validators. Delegators therefore act as a counterbalance to their validators.

For more detailed information about Delegator, see [here](https://hub.cosmos.network/main/delegators/delegator-faq.html).
