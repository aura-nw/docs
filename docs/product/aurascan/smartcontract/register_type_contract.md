---
sidebar_position: 6
---

# Register type contract

## 1. Contract standard
There are two contract standards that Aura network have supported now, they are:
- CW20 is a specification for fungible tokens based on CosmWasm. The name and design is loosely based on Ethereum's ERC20 standard, but many changes have been made.
- CW721 is a specification for non-fungible tokens based on CosmWasm. The name and design is based on Ethereum's ERC721 standard, but some enhancements.
Contract's creator have to register a type contract for a Code ID.

## 2. How to register type contract
**Step 1:** Connect wallet successfully and choose Register contract.

![Connect wallet](/img/aurascan/connect_wallet.png)
![Choose register contract](/img/aurascan/choose_register_contract.png)

**Step 2:** See the list of Code ID that have been registered. 

![List of Code ID](/img/aurascan/register_type_contract.png)
![List of Code ID](/img/aurascan/register_type_contract_success.png)

:::caution Note:
Code IDs that were registed successfully but waiting until network notify the result have result registration is TBD (to be defined).
Code IDs that were registered true type successfully have result registration is Correct.
Code IDs that were registered wrong type have result registration is Incorrect.
:::

**Step 3:** Choose Register Contract and input Code ID and type contract of Code ID.

![Choose register contract](/img/aurascan/choose_btn_register_contract.png)
![Input data](/img/aurascan/register_type_contract_input_data.png)
![Input data](/img/aurascan/register_type_contract_input.png)

**Step 4:** After choosing register, the result registration is TBD (to be defined). Aura Network will notify the result after registration.

![TBD](/img/aurascan/register_type_contract_tbd.png)
![Correct](/img/aurascan/register_type_contract_success.png)

If Code IDs have CW20 type contract, there are CW20 tokens linked to their contracts.
If Code IDs have CW721 type contract, there are CW721 tokens linked to their contracts.
