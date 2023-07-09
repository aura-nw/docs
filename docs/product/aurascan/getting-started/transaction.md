---
sidebar_position: 5
title: Transactions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Transactions list

Visit the **_Transactions_** menu to view the Transactions list of Aurascan.

<div id="img-wrapper">
    <img src="/img/aurascan/transaction_list.png" alt="transactions"/>
</div>

## Transaction details

When clicking on each specific transaction, you can view the Transaction details in both summary and json format as shown below.

<div id="img-wrapper">
    <img src="/img/aurascan/transaction_detail.png" alt="transaction-details"/>
</div>

The *Summary* content of Transaction details includes the **Transaction Information** and **Message** details of the transaction:

1. Transaction information: Chain ID, Transaction Hash, Status (Success/Fail), Height of block on which the transaction was validated, Timestamp of Transaction, Fee of Transaction and Gas amount (used/wanted).

2. Message details of Transaction: includes particular content corresponding with each type of Transactions.


<Tabs>
  <TabItem value="delegate" label="Delegate">

|Fields|Description|
|------|------------|
|Delegator Address| Delegator's wallet address|
|Validator Address| Validator's wallet address|
|Amount| Amount that delegator delegated to validator|
|Auto Claim Reward| Total amount of accumulated reward of this delegator still pending at the time of Delegate transaction success|

  </TabItem>
  <TabItem value="redelegate" label="Redelegate">

|Fields|Description|
|------|------------|
|Delegate Address | Delegator's wallet address|
|Source Validator Address | Initial validator's wallet address|
|Destination Validator Address | Redelegated validator's wallet address|
|Amount | Amount that delegator redelegated from Source Validator to Destination Validator|
|Auto Claim Reward | Total amount of accumulated reward of this delegator still pending on Source validator at the time of Redelegate transaction success|

  </TabItem>
  <TabItem value="undelegate" label="Undelegate">

|Fields|Description|
|------|------------|
|Delegator Address | Delegator's wallet address|
|Validator Address | Validator's wallet address|
|Amount | Amount that delegator undelegated from validator|
|Auto Claim Reward | Total amount of accumulated reward of this delegator still pending on this validator at the time of Undedelegate transaction success|

  </TabItem>
  <TabItem value="get-reward" label="Get Reward">

|Fields|Description|
|------|------------|
|Delegator Address | Delegator's wallet address|
|Validator Address | Validator's wallet address|
|Amount | Amount of reward that delegator claimed to validator|

  </TabItem>
  <TabItem value="send" label="Send">

|Fields|Description|
|------|------------|
|From Address | Sender's wallet address|
|To Address | Receiver's wallet address|
|Amount | Sent amount|

  </TabItem>
  <TabItem value="vote" label="Vote">

|Fields|Description|
|------|------------|
|Proposal Id | ID of proposal|
|Voter | Voter's wallet address|
|Option | Option that voter select when voted for this proposal (Yes/No/NoWithVeto/Abstain)|	


  </TabItem>
</Tabs>
