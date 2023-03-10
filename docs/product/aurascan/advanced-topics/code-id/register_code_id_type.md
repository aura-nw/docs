---
sidebar_position: 4
---

# Register type Code ID
The type of smart contract will be determined by the type of the Code ID that the contract was instantiated from. 

## 1. Contract standard
There are three contract standards that Aura network have supported now, they are:
- CW20 is a specification for fungible tokens based on CosmWasm. The name and design is loosely based on Ethereum's ERC20 standard, but many changes have been made.
- CW721 is a specification for non-fungible tokens based on CosmWasm. The name and design is based on Ethereum's ERC721 standard, but some enhancements.
- CW4973 is specification for account bound tokens. The name and design is based on Ethereum's ERC4973 standard.
Code ID's owner have to register a type for the Code ID.

## 2. How to register type contract
**Step 1:** Connect wallet successfully and choose Register contract.

![Register type Code ID](/img/aurascan/Advanced_topic_register_type_Code_ID_step_1.png)

**Step 2:** Choose Register Contract and input Code ID and type contract of Code ID.

![Click register](/img/aurascan/Advanced_topic_register_type_Code_ID_step_2_1.png)
![Input data](/img/aurascan/Advanced_topic_register_type_Code_ID_step_2_2.png)

:::caution Note:
- After you register type for the Code ID, the status of Result Registration is TBD (to be defined). Need to wait until network verify the Result Registration is 'Correct' or 'Incorrect'
- When the network verify that the Code ID was registered type exactly, the Result Registration status will turn into 'Correct'.
- In contrast, if the Code ID was registered wrongly, the Result Registration status will turn into "Incorrect"
:::

**Step 3:** View your list of registered Code ID 

![List of Register type Code ID](/img/aurascan/Advanced_topic_register_type_Code_ID_step_3.png)

