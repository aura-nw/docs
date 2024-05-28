---
sidebar_position: 2
title: Staking and Voting from the Safe
---

Since a safe could act like any other personal wallet, Safe owners could create multi-sig transactions to do staking and voting. The staking and voting function on Pyxis follow the same flows as on our Aurascan, as well as many other commonly used explorers and wallet apps. Please refer to [this guide](/product/aurascan/) of AuraScan if you still need to become familiar with staking and voting using a personal wallet.

## Staking from the Safe
On the left menu bar, click on the "Staking" function. The Staking interface will allow you to:
- View the staking status of your Safe (staked validators, staked amount, undelegation process, etc.)
- Delegate on a validator
- Redelegate from a validator to another validator
- Undelegate from a validator
- Claim staking rewards from staked validator(s)

![Staking from a Safe](/img/pyxis-safe/staking_1.png)

With each action, a multi-sig transaction will be created and could be executed with enough confirmation.

![Staking from a Safe](/img/pyxis-safe/staking_2.gif)

After a transaction has been successfully executed, your staking information will be updated accordingly.

![Staking from a Safe](/img/pyxis-safe/staking_3.gif)

## Voting from a Safe
With the ability to perform delegation, a Safe also has its voting power and could participate in network governance through voting on proposals. 
On the left menu bar, click on the "Voting" function. The Staking interface will show all the latest proposals and their status. Clicking "Details" will redirect to the corresponding proposal detail page of the blockchain explorer (AuraScan, Mintscan, etc.)

![Staking from a Safe](/img/pyxis-safe/voting_1.png)

Voting on an option (Yes, No, No with Veto, or Abstain) will create a multi-sig transaction that could be executed with enough confirmation. Your vote will be counted if the transaction is executed successfully. 
![Staking from a Safe](/img/pyxis-safe/voting_2.gif)
:::info Note
Remember to execute the vote before the voting period ends. Otherwise, your transaction will be failed.
:::
![Staking from a Safe](/img/pyxis-safe/voting_3.png)

