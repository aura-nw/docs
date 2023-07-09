---
sidebar_position: 5
title: FAQs
---

## Voting
### Who can vote on proposals?
Anyone who has staked an amount of $Aura can vote on proposals. This means delegators and validators can vote on a proposals. 

### How many types of proposals are there?
There are 4 types of proposals:
- Software-upgrade
- Cancel-software-upgrade
- Param-change
- Community-pool-spend

### Can delegators vote on a different option than that of their validators?
Yes. 

### Can I change my vote option on a proposal?
Yes, you can change it until the end of the voting period.

## Staking
### What is Staking?
The Aura Network is a public Proof-Of-Stake (PoS) blockchain, meaning that the weight of validators is determined by the amount of staking tokens (Aura) bonded.

Staking is the process of locking up a digital asset (Aura in the case of the Aura Network) to provide economic security for a public blockchain that everyone can participate in maintaining.

The purposes of staking are:
- Secure the chain: with Aura, everyone has the superpower to contribute to the security and governance of the Aura Network.
- Earn rewards: select one or more validators of the Aura Network and start earning assets.
- Vote for the future: staking Aura have the right to vote on proposals and make decisions on the future of the network.

### What is a Aura validator?
The Aura Network is based on Tendermint that relies on a set of validators to secure the network. The role of validators is to run a full node and participate in consensus by broadcasting votes that contains cryptographic signatures signed by the validator's private key. Validators commit new blocks in the blockchain and receive revenue in exchange for their work. Validators must also participate in governance by voting on proposals. Validators are weighted according to their total stake (the total amount of self-bonded and delegators delegated).

### What is self-delegation?
Self-delegation is a delegation of Aura from a validator to themselves. The delegated amount can be increased by sending a `delegate` transaction from your validator's `application` key.

### What is a validator commission?
Awards (block inflation and transaction fees) received by a validator's pool is splitted between the validator and their delegators. The validator can apply a commission on the part of the revenue that pays to their delegators. 

Validators earn proportionally more revenue than their delegators because of the commission they take on the staking rewards from their delegators.

### What will happen with my unclaimed reward from an inactive validator?
Nothing will happen, as the reward has been granted before. You will still be able to claim it.

### When will slashing apply to a validators?
Slashing will apply immediately when a validator is jailed.

### During undelegation period, if my validator has its status from active to inactive, will I get undelegated immediately?
No, you still have to wait until the end of your undelegation period.

### Can I undelegate multiple times from a validator?
The queue length for redelegation and undelegation is currently 7. This means you can do maximum 7 undelegation at a time. After that, you will have to wait until your oldest undelegation finishes to create a new one.

### I partially undelegated from my validator and is waiting for the undelegation period to end. If my validator get jailed, will the penalty calculated base on my undelegated amount?
No. As long as you have undelegated any amount, you will not getting reward based on that amount, and neither is slashing penalty.

### I see my pending reward changed upon redelegation, but not all of them is transferred to my wallet. Why?
Because the amount transferred to your wallet is only related to the two validators of the redelegation transaction. any other reward from other validators will not be auto-claimed.
