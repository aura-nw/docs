---
sidebar_position: 2
title: Code ID Details
---

Choose one Code ID in [Code ID list](https://docs.aura.network/product/aurascan/advanced-topics/code-id/code_id_list) to view any Code ID's detailed information.

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_verified_Code_ID_details.png" alt="code-id-details"/>
</div>

## Information

Specific information of the Code ID.

| Row | Description |
| ------ | ------ |
| Code ID | Code ID No |
| Creator | Method to execute contract, is one of the functions in the contract |  
| Tx Hash | Transaction hash of Store Code ID transaction |
| Type |  | Standard type of Code ID, e.g CW20, CW721, CW4973. Only show type of Code IDs with the one that have been registered type correctly | 	
| Instantiate times | Address sent execute contract transaction, choose address to see account details  |
| Created At | Time stamp of the time the Code ID was stored |

## Contracts tab

The **Contracts** tab contains the list of contracts that have been instantiated from the stored code corresponding to that Code ID.

| Row | Description |
| ------ | ------ |
| Contract Address | Contract account |
| Tx Hash | Transaction hash of Store Code ID transaction |  
| Creator | Account address of Code ID's creator |
| Type |  | Standard type of Smart Contract, e.g CW20, CW721, CW4973. Type of smart contract same with type of Code ID that the smart contract was instantiated from| 	
| Instantiate at | Time stamp of the time the smart contract was instantiated  |
| Verified at | Time stamp of the time the Code ID that the smart contract was instantiated from be verified |

## Verify Code ID tab
The **Verify Code ID** tab contains information regarding the status of verification for that Code ID.

### Code ID that has not yet been verified

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_tab_verify_Code_ID_not_yet_verified.png" alt="code-id-unverified"/>
</div>

### Code ID on verification process

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_tab_verify_Code_ID_pending_verified.png" alt="code-id-in-process"/>
</div>

### Verified Code ID

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_tab_verify_Code_ID_success_verified.png" alt="code-id-verified"/>
</div>

### Failed Verification Code ID
Aurascan will show up the information of the last time this Code ID was verified fail with updated status and error message.

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_tab_verify_Code_ID_fail_verified.png" alt="code-id-fail"/>
</div>
