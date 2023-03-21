---
sidebar_position: 5
---

# Transactions

## Transactions list

Visit **_Transactions_** menu to view the Transactions list of Aurascan
![Transactions](/img/main/transaction_list.png)

## Transaction details

When click on each specific transaction line, can view the Transaction details in both summary and json type of content

![Transactions](/img/main/transaction_detail.png)

The *Summary* content of Transaction details include Transaction Information and Message details of Transaction:

1. Transaction information: Chain ID, Transaction Hash, Status (Succcess/Fail), Height of block that the transacsion been validated, Timestamp of Transaction, Fee of Transaction and Gas amount (used/wanted) of Transaction

2. Message details of Transaction: include particular content in corresponding with each type of Transactions
+ Delegate

|Fields|Description|
|------|------------|
|Delegator Address|delegator's wallet address|
|Validator Address|validator's wallet address|
|Amount|Amount that delegator delegated to validator|
|Auto Claim Reward|Total amount of accumulated reward of this delegator still pending on this validator at the time of Delegate transaction success|

+ Redelegate

|Fields|Description|
|------|------------|
|Delegate Address|delegator's wallet address|
|Source Validator Address|initial validator's wallet address|
|Destination Validator Address|redelegated validator's wallet address|
|Amount|Amount that delegator redelegated from Source Validator to Destination Validator|
|Auto Claim Reward|Total amount of accumulated reward of this delegator still pending on Source validator at the time of Redelegate transaction success|

+ Undelegate

|Fields|Description|
|------|------------|
|Delegator Address|delegator's wallet address|
|Validator Address|validator's wallet address|
|Amount|Amount that delegator undelegated from validator|
|Auto Claim Reward|Total amount of accumulated reward of this delegator still pending on this validator at the time of Undedelegate transaction success|

+ Get Reward

|Fields|Description|
|------|------------|
|Delegator Address|delegator's wallet address|
|Validator Address|validator's wallet address|
|Amount|Amount of reward that delegator claimed to validator|

+ Send

|Fields|Description|
|------|------------|
|From Address|Sender's wallet address|
|To Address|Receiver's wallet address|
|Amount|Sent amount|

+ Vote

|Fields|Description|
|------|------------|
|Proposal Id|ID of proposal|
|Voter|voter's wallet address|
|Option|Option that voter select when voted for this proposal (Yes/No/NoWithVeto/Abstain)|	
