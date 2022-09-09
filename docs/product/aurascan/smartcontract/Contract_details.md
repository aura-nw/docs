---
sidebar_position: 4
---

# Contract details

Choose one contract in [Contracts list](https://docs.aura.network/product/aurascan/smartcontract/contracts_list) to view contract's details information.

![Contracts Details](/img/aurascan/contract_details.png)

## Contract Overview and More Info

`Contract Overview` and `More Info` section show basic information of the contract: Aura balance, Aura value, contract creator and transaction hash that contract was instantiated. 
If this smart contract is token, `token tracker` field will show token name linked to smart contract. Choose the token name to view token's details information.

## Activity

Below `Contract Overview` and `More Info` section is `Activity` section, include tab `Transactions` and tab `Contract`.

### Transactions 

![Transactions](/img/aurascan/contract_details_txn.png)

Tab `Transactions` show 20 lastest transactions of this contract. Choose `View all` to see total transactions.

| Column | Description |
| ------ | ------ |
| Txn Hash | Transaction hash that executes contract, choose txn hash to see transaction details |
| Method | Method to execute contract, is one of the functions in the contract |  
| Block | Block height that transaction hash is stored in, choose block height to see block details |
| Time | Time that transaction is on-chain |
| From | Address sent execute contract transaction, choose address to see account details |
| To | Contract address was executed in this transaction |
| Value | Aura value was transfered in this transaction |
| Txn Fee | Fee of this transaction |

### Contract

![Contracts](/img/aurascan/contract_details_contract.png)

There are 3 tabs in Contract section, they are:
- Code: show all information of contract source code, e.g `Contract Name`, `Compiler Version`, `Link and file contract source code`, all `contract schema` files and `Contract creation code`.
- Read Contract: show all read functions of this contract.

![Read Contract](/img/aurascan/contract_details_contract_read.png)

- Write Contract: show all write functions of this contract.

:::caution Note:
Only verified contracts have `Contract source code` details. 
Unverified contracts only show `Contract creation code`. Contract creator chooses `Verify and Publish` to [verify contract source code](https://docs.aura.network/product/aurascan/smartcontract/verify_contract) of this smart contract.
:::

![Unverified Contract](/img/aurascan/contract_tab.PNG)
