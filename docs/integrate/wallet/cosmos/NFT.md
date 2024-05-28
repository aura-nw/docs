---
sidebar_position: 2
sidebar_label: Non-fungible Token
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Aura NFT integration for wallet

It is recommend to use Horoscope, the interchain indexer for querying NFT data on Aura Network. Other interaction with the NFT contract can be executed by sending corresponding CosmWasm transaction to the network.

## 1. Querying NFT

### Chose your API

You can choose indexer server to integrate with the wallet [here](../../../product/horoscope/index.md#environment)

#### List all CW721 asset of one address
It can be retrieved from the Horoscope like shown below:

<Tabs groupId="list-cw721">
  <TabItem value="euphoria" label="euphoria">

```bash
curl -L -X POST 'https://indexer-v2.staging.aurascan.io/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $offset: Int = null) { euphoria { cw721_token( limit: $limit offset: $offset order_by: {last_updated_height: desc} where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}} ) { id media_info owner token_id } } }",
  "variables": {
    "limit": 10,
  	"offset": null,
    "tokenId": null,
    "owner": "aura1crh5z8cy0znnj8u48jlttr5h4as8n336jj0gxr"
  }
}'
```
  </TabItem>
  <TabItem value="xstaxy" label="xstaxy">
  

```bash
curl -L -X POST 'https://horoscope.aura.network/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $offset: Int = null) { xstaxy { cw721_token( limit: $limit offset: $offset order_by: {last_updated_height: desc} where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}} ) { id media_info owner token_id } } }",
  "variables": {
    "limit": 10,
  	"offset": null,
    "tokenId": null,
    "owner": "aura1crh5z8cy0znnj8u48jlttr5h4as8n336jj0gxr"
  }
}'
```
</TabItem>
  <TabItem value="serenity" label="serenity">
  

```bash
curl -L -X POST 'https://indexer-v2.dev.aurascan.io/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $offset: Int = null) { serenity { cw721_token( limit: $limit offset: $offset order_by: {last_updated_height: desc} where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}} ) { id media_info owner token_id } } }",
  "variables": {
    "limit": 10,
  	"offset": null,
    "tokenId": null,
    "owner": "aura1crh5z8cy0znnj8u48jlttr5h4as8n336jj0gxr"
  }
}'
```
  </TabItem>
</Tabs>

#### Detail of one CW721 (NFT)
Input:

- Selected chain: xstaxy/euphoria/serenity
- contractAddress (return from list all)
- tokenID (return from list all)

<Tabs groupId="detail-cw721">
  <TabItem value="euphoria" label="euphoria">

```bash
curl -L -X POST 'https://indexer-v2.staging.aurascan.io/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $contractAddress: String = null) { euphoria { cw721_token(limit: $limit, order_by: {id: desc}, where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}, cw721_contract: {smart_contract: {address: {_eq: $contractAddress}}}}) { id media_info owner token_id cw721_contract{ smart_contract{ address } } } } }",
  "variables": {
    "contractAddress": "aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58",
    "tokenId": "65a1435d2e2d092f9722813cb12d3b5aecc2487fab62a4b5398db7826bc19c93"
  }
}'
```

  </TabItem>
  <TabItem value="xstaxy" label="xstaxy">

```bash
curl -L -X POST 'https://horoscope.aura.network/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $contractAddress: String = null) { xstaxy { cw721_token(limit: $limit, order_by: {id: desc}, where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}, cw721_contract: {smart_contract: {address: {_eq: $contractAddress}}}}) { id media_info owner token_id cw721_contract{ smart_contract{ address } } } } }",
  "variables": {
    "contractAddress": "aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58",
    "tokenId": "65a1435d2e2d092f9722813cb12d3b5aecc2487fab62a4b5398db7826bc19c93"
  }
}'
```

  </TabItem>
  <TabItem value="serenity" label="serenity">

```bash
curl -L -X POST 'https://indexer-v2.dev.aurascan.io/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $contractAddress: String = null) { serenity { cw721_token(limit: $limit, order_by: {id: desc}, where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}, cw721_contract: {smart_contract: {address: {_eq: $contractAddress}}}}) { id media_info owner token_id cw721_contract{ smart_contract{ address } } } } }",
  "variables": {
    "contractAddress": "aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58",
    "tokenId": "65a1435d2e2d092f9722813cb12d3b5aecc2487fab62a4b5398db7826bc19c93"
  }
}'
```
  </TabItem>
</Tabs>


#### Parse output
This is an output of get detail CW721: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "euphoria": {
      "cw721_token": [
        {
          "id": 13436,
          "media_info": {
            "onchain": {
              "metadata": {
                "name": "ABT IMA SVG 22062023",
                "image": "ipfs://QmV3A9XGRErR5DwX58C9SBsK4dbhZihJUmeXkPA94zEXBu",
                "attributes": [
                  {
                    "value": "Red Hong Yi GIF 01",
                    "trait_type": "Artist GIF 01"
                  },
                  {
                    "value": "Single GIF 02",
                    "trait_type": "Edition GIF 02"
                  },
                  {
                    "value": "White GIF 03",
                    "trait_type": "Border GIF 03"
                  },
                  {
                    "value": "Build a Better Future. GIF 04",
                    "trait_type": "Drop GIF 04"
                  },
                  {
                    "value": "Red Hong Yi GIF 05",
                    "trait_type": "Artist GIF 05"
                  },
                  {
                    "value": "Single GIF 06",
                    "trait_type": "Edition GIF 06"
                  },
                  {
                    "value": "White GIF 07",
                    "trait_type": "Border GIF 07"
                  }
                ],
                "description": null,
                "animation_url": null
              },
              "token_uri": "ipfs://QmeELQC6VCrs5V2d96YhReDv8B7FZizK3ELFQRxduFQmVE"
            },
            "offchain": {
              "image": {
                "url": "https://nft.aurascan.io/QmV3A9XGRErR5DwX58C9SBsK4dbhZihJUmeXkPA94zEXBu",
                "file_path": "QmV3A9XGRErR5DwX58C9SBsK4dbhZihJUmeXkPA94zEXBu",
                "content_type": "image/svg+xml"
              },
              "animation": {}
            }
          },
          "owner": "aura1whczpvfx2z79h84yzdlpzad5gwurynredrtcx6",
          "token_id": "65a1435d2e2d092f9722813cb12d3b5aecc2487fab62a4b5398db7826bc19c93",
          "cw721_contract": {
            "smart_contract": {
              "address": "aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58"
            }
          }
        }
      ]
    }
  }
}
```  

NFT metadata are saved on onchain field. Another offchain field are:  
- url: link AWS S3 for image/animation
- file_path: file path in S3 storage
- content_type: content type for that image/animation 

## 2. Transfering NFT

Only CW721 can be tranfered between 2 addresses (CW4973 is not created for transfering NFT).  
Tranfering CW721 NFT can be performed by executing CosmWasm transactions with the following format:

```js
"tx": {
       "@type": "/cosmos.tx.v1beta1.Tx",
       "body": {
          "messages": [
            {
                "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
                "sender": "aura1h6r78trkk2ewrry7s3lclrqu9a22ca3hpmyqfu",
                "contract": "aura15ydv0hjccrazv65cgdxu8dt7hcftmnk35s8f3erktrhflsu5lh9q2datge",
                "msg": {
                   "transfer_nft": {
                      "recipient": "aura10sj5al43jm4gqz7yd57f9zyet54ymt0466axev",
                      "token_id": "png-104003"
                  }
               },
                "funds": []
            }
         ],
          "memo": "",
          "timeout_height": "0",
          "extension_options": [],
          "non_critical_extension_options": []
      },
```

## 3. Supported NFT Format

These following media types should be supported for displaying in the wallet:

| Type  | File Extension | Example                                                                                                                         |
| ----- | -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Image | JPG | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717723533) |
| Image | PNG | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717871604) |
| Image | GIF  | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717466231) |
| Vector | SVG | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718039726) |
| Video | MP4 | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717970078) |
| Video | WEBM | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718267079) |
| Audio | MP3 | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717821986) |
| Audio | WAV | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718131735) |
| Audio | OGG | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718217586) |
| 3D | GLB | [link](https://euphoria.aurascan.io/token/cw721/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717643214) |
