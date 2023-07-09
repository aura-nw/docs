---
sidebar_position: 4
title: Contract Details
---

Select a contract in the [Contracts List](https://docs.aura.network/product/aurascan/smartcontract/contracts_list) to view contract's details information.

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_contract_detail.png" alt="contract-details"/>
</div>

## Contract Overview and More Info

**Contract Overview** and **More Info** section show basic information of the contract: Aura balance, Aura value, contract creator and transaction hash that contract was instantiated. 
If this smart contract is token, `token tracker` field will show token name linked to smart contract. Choose the token name to view token's details information.

## Activity

Below **Contract Overview** and **More Info** section is the **Activity** section, which includes **Transactions** and **Contract**.

### Transactions 

<div id="img-wrapper">
    <img src="/img/aurascan/contract_details_txn.png" alt="contracts-details-tx"/>
</div>

Tab **Transactions** show 20 latest transactions of this contract. Choose **View all** to see total transactions.

| Column | Description |
| ------ | ------ |
| Txn Hash | Transaction hash that executes contract, choose txn hash to see transaction details |
| Method | Method to execute contract, is one of the functions in the contract |  
| Block | Block height that transaction hash is stored in, choose block height to see block details |
| Time | Time that transaction is on-chain |
| From | Address sent execute contract transaction, choose address to see account details |
| To | Contract address was executed in this transaction |
| Value | Aura value was transferred in this transaction |
| Txn Fee | Fee of this transaction |

### Contract

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_verified_contract_code.png" alt="contracts-code"/>
</div>

There are 3 tabs in Contract section, they are:
- Code: show all information of contract source code, e.g **Contract Name**, **Compiler Version**, **Link and file contract source code**, all **contract schema** files and **Contract creation code**.
- Read Contract: show all read functions of this contract.

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_verified_contract_read.png" alt="contracts-read"/>
</div>

- Write Contract: show all write functions of this contract.

:::caution Note:
Only verified contracts have **Contract source code** details. 
Unverified contracts only show **Contract creation code**. Contract creator chooses **Verify and Publish** to [verify contract source code](https://docs.aura.network/product/aurascan/smartcontract/verify_contract) of this smart contract.
:::

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_verified_contract_write.png" alt="unverified-contract"/>
</div>
