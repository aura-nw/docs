---
sidebar_position: 4
title: Register Code ID
---

The type of smart contract will be determined by the type of the Code ID that the contract was instantiated from.

## 1. Contract standard
There are three contract standards that Aura network have supported now, they are:
- CW20 is a specification for fungible tokens based on CosmWasm. The name and design is loosely based on Ethereum's ERC20 standard, but many changes have been made.
- CW721 is a specification for non-fungible tokens based on CosmWasm. The name and design is based on Ethereum's ERC721 standard, but some enhancements.
- CW4973 is specification for account bound tokens. The name and design is based on Ethereum's ERC4973 standard.
The Code ID's owner have to register a type for the Code ID.

## 2. How to register type contract
**Step 1:** Connect your wallet provider to the interface and click **Register Code ID**.

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_register_type_Code_ID_step_1.png" alt="code-id-register-type"/>
</div>

**Step 2:** Click on **Register** and input the Code ID and type for that Code ID.

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_register_type_Code_ID_step_2_1.png" alt="code-id-click-register"/>
</div>
<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_register_type_Code_ID_step_2_2.png" alt="code-id-input-data"/>
</div>

:::caution Note:
- After you register type for the Code ID, the status of **Result Registration** is **TBD** (to be defined). You will have to wait until the network verifies if the registry you made is `Correct` or `Incorrect`
- When the network verifies that the Code ID was registered correctly, the **Result Registration** status will display `Correct`.
- In contrast, if the Code ID was registered incorrectly, the **Result Registration** status will turn into `Incorrect`
:::

**Step 3:** View your list of registered Code ID 

<div id="img-wrapper">
    <img src="/img/aurascan/Advanced_topic_register_type_Code_ID_step_3.png" alt="code-id-register-type"/>
</div>
