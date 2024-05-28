---
sidebar_position: 4
sidebar_label: Transaction History
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integration transaction history for wallet

There are 2 way to query history tx: onchain (by LCD/RPC) or offchain (by Horoscope). It is recommend to use Horoscope to query all tx which involved by address (tx sended, received, smart contract, etc).

## 1. Using Horoscope (recommended)

You can choose indexer server to integrate with the wallet [here](../../../product/horoscope/index.md#environment)

<Tabs groupId="list-tx">
  <TabItem value="euphoria" label="euphoria">

```bash
curl 'https://indexer-v2.staging.aurascan.io/api/v2/graphql' \
  -H 'content-type: application/json' \
  --data-raw $'{
    "operationName":"QueryEvmTxOfAccount",
    "variables":{"limit":10,"address":"0x5606b4ea93f696dd82ca983baf5723d00729f127"},
    "query":"query QueryEvmTxOfAccount($limit: Int = null, $orderId: order_by = desc, $address: String = null) {euphoria { evm_transaction(where: {from: {_eq: $address}}, limit: $limit, order_by: {id: $orderId}) {data from to hash height value }}} "}'
```
  </TabItem>
</Tabs>

Output: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "euphoria": {
      "evm_transaction": [
        {
          "data": "9e847108000000000000000000000000aa0867f382328493b253aa63f6619895253d878000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000001bc16d674ec8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005606b4ea93f696dd82ca983baf5723d00729f1270000000000000000000000000000000000000000000000000000000000000000",
          "from": "0x5606b4ea93f696dd82ca983baf5723d00729f127",
          "to": "0xa371d16ffdf669bb8a5a005d9e3476b41db756b2",
          "hash": "0x4fd5205206d0322dac2888cb07a4ff7536370122960268186dc1e13193870584",
          "height": 10517384,
          "value": "0"
        },
        {
          "data": "9e847108000000000000000000000000aa0867f382328493b253aa63f6619895253d878000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005606b4ea93f696dd82ca983baf5723d00729f1270000000000000000000000000000000000000000000000000000000000000000",
          "from": "0x5606b4ea93f696dd82ca983baf5723d00729f127",
          "to": "0xa371d16ffdf669bb8a5a005d9e3476b41db756b2",
          "hash": "0x2a930b4732ff834a829fa23b016937f0bf50e866662f6995f4ca73cfcd5e8e3d",
          "height": 10517381,
          "value": "0"
        },
        {
          "data": "453681810000000000000000000000005606b4ea93f696dd82ca983baf5723d00729f12700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000080000000000000000000000000f3d63166f0ca56c3c1a3508fce03ff0cf3fb691e00000000000000000000000000000000000000000000000000000000000000001d4da48b799e61a1",
          "from": "0x5606b4ea93f696dd82ca983baf5723d00729f127",
          "to": "0xaa0867f382328493b253aa63f6619895253d8780",
          "hash": "0xef397f1d406f14c4f27679c60e24b6788b3b50ab56d3dbc877fd9466fe210e29",
          "height": 10517376,
          "value": "10000000000000000"
        }
      ]
    }
  }
}
```
