---
sidebar_position: 3
---

# Contracts list

Here is the contracts list on Aurascan.

![Contracts List](/img/aurascan/Advanced_topic_contracts_list.png)

:::caution Note:
+ Only contracts instantiated from **verified** Code ID have green check mark icon beside in smart contract list and corresponding Code ID verified time info. 
+ Unverified contracts do not have green check mark icon. 
+ Each Code ID has to be verified and published source code as well as register code ID type (CW20/CW721/CW4973) beforehand so that others user can be able to interact with the smart contracts that instantiated from this Code ID.
:::

| Column | Description
| ------ | ------ |
| Address | Smart contract address, choose one address to see contract's details information. Only verified contracts have green checkmark icon |
| Contract Name | The name of this smart contract |  
| Code ID | A Code ID has many smart contracts, but a contract has only one Code ID. Contract's creator registers type contract for Code ID that means register type contract for all contracts of this Code ID |
| Type Contract | Standard type of contract, e.g CW20, CW721. Only Code IDs that have been registered type contract correctly show type contract data |
| Version | Compiler version of contract's source code. Only verified contracts show compiler version |
| Verified | Time contract was verified source code. Only verified contracts show time verified |
| Creator | Contract's creator, choose one creator to see account details information |