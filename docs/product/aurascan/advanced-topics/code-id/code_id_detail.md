---
sidebar_position: 2
---

# Code ID details

Choose one Code ID in [Code ID list](https://docs.aura.network/product/aurascan/advanced-topics/code-id/code_id_list) to view code ID's details information.

![Code ID Details](/img/aurascan/Advanced_topic_verified_Code_ID_details.png)

## Information

Specific information of the Code ID

| Row | Description |
| ------ | ------ |
| Code ID | Code ID No |
| Creator | Method to execute contract, is one of the functions in the contract |  
| Tx Hash | Transaction hash of Store Code ID transaction |
| Type |  | Standard type of Code ID, e.g CW20, CW721, CW4973. Only show type of Code IDs with the one that have been registered type correctly | 	
| Instantiate times | Address sent execute contract transaction, choose address to see account details  |
| Created At | Time stamp of the time the Code ID was stored |

## Tab 'Contracts'

List contracts that were instantiated from the Code ID

| Row | Description |
| ------ | ------ |
| Contract Address | Contract account |
| Tx Hash | Transaction hash of Store Code ID transaction |  
| Creator | Account address of Code ID's creator |
| Type |  | Standard type of Smart Contract, e.g CW20, CW721, CW4973. Type of smart contract same with type of Code ID that the smart contract was instantiated from| 	
| Instantiate at | Time stamp of the time the smart contract was instantiated  |
| Verified at | Time stamp of the time the Code ID that the smart contract was instantiated from be verified |

## Tab 'Verify Code ID'
The information shown on this tab is various cause by the status of the Code ID already been verified or not. 

### Code ID that has not yet been verified

![Tab Verify Code ID not yet verified](/img/aurascan/Advanced_topic_tab_verify_Code_ID_not_yet_verified.png)

### Code ID that is currently pending at 'Verify & Publish' process

![Tab Verify Code ID pending verified](/img/aurascan/Advanced_topic_tab_verify_Code_ID_pending_verified.png)

### Code ID that has already been verified successfully

![Tab Verify Code ID success verified](/img/aurascan/Advanced_topic_tab_verify_Code_ID_success_verified.png)

### Code ID that has already been verified fail
Aurascan will show up the information of the last time this Code ID was verified fail with updated status and error message.

![Tab Verify Code ID fail verified](/img/aurascan/Advanced_topic_tab_verify_Code_ID_fail_verified.png)

 



