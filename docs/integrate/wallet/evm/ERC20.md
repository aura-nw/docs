---
sidebar_position: 4
sidebar_label: Fungible Token
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fungible Token (ERC20) integration for wallet

It is recommend to use Horoscope, the interchain indexer for querying ERC20 data on Aura Network. Other interaction with the ERC20 contract can be executed by sending corresponding EVM transaction to the network.

## 1. Querying ERC20

#### List all ERC20 asset of one address
It can be retrieved from the Horoscope like shown below:

<Tabs groupId="example">
    <TabItem value="serenity" label="euphoria">  

```bash
curl 'https://indexer-v2.staging.aurascan.io/api/v2/graphql' \
  -H 'content-type: application/json' \
  --data-raw '{
    "operationName":"ERC20",
    "variables":{"address":"aura1cg0pqjmq3p2pl0gyz62vrcattj0f60glzgd8s4"},
    "query":"query ERC20($address: String = \"\") { euphoria  { account_balance(where: {account: {address: {_eq: $address}}, denom: {_ilike: \"%0x%\"}}) { denom amount } } }"}'
```
  </TabItem>
</Tabs>

#### Parse output
This is an output of get detail ERC20: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "euphoria": {
      "account_balance": [
        {
          "denom": "0x8537e9cf5020270487579dff450f5431ba97c39f",
          "amount": "56000000000000000000"
        }
      ]
    }
  }
}
```  
