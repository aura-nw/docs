---
sidebar_position: 2
sidebar_label: Non-fungible Token
---

# Aura NFT integration for wallet

It is recommend to use Horoscope, the interchain indexer for querying NFT data on Aura Network. Other interaction with the NFT contract can be executed by sending corresponding CosmWasm transaction to the network.

## 1. Querying NFT

### Chose your API

You can choose indexer server to integrate with the wallet [here](../../product/horoscope/index.md#environment)

> **Horoscope V1 will be deprecated soon, please use Horoscope v2**  

### Horoscope v1 (deprecated)
NFT can be retrieved over the following API:

```
$Indexer_URL$/api/v1/asset/get_v1_asset_getByOwner
```


#### List all CW721 (NFT) asset of one address

Input:

- Owner address
- ChainId: euphoria-2
- contractType = CW721

It can be retrieved from the Horoscope like shown below:

```bash
curl -X GET "https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e&chainid=euphoria-2&contractType=CW721&countTotal=false&pageLimit=10&pageOffset=0" -H "accept: application/json"
```
*[View in browser](https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e&chainid=euphoria-2&contractType=CW721&countTotal=false&pageLimit=10&pageOffset=0)*

#### Detail of one CW721 (NFT)

Input:

- Chainid: euphoria-2
- contractType = CW721
- contractAddress (return from list all)
- tokenID (return from list all)

Example:

```bash
curl -X GET "https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e&chainid=euphoria-2&contractType=CW721&tokenId=10-ANI-MP4&contractAddress=aura1x6q9jc0d92wmtsukfyph3j0m8g8nvhg4t4uc7wh0kswm05kyu5cq3hffy0&countTotal=false&pageLimit=10&pageOffset=0" -H "accept: application/json"
```
*[View in browser](https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e&chainid=euphoria-2&contractType=CW721&tokenId=10-ANI-MP4&contractAddress=aura1x6q9jc0d92wmtsukfyph3j0m8g8nvhg4t4uc7wh0kswm05kyu5cq3hffy0&countTotal=false&pageLimit=10&pageOffset=0)*
#### Parse output

This is an output from getByOwner api:

```js
{
   "code":200,
   "message":"Successful",
   "data":{
      "assets":{
         "CW721":{
            "asset":[
               {
                  "asset_info":{
                     "data":{
                        "access":{
                           "approvals":[

                           ],
                           "owner":"aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e"
                        },
                        "info":{
                           "token_uri":null,
                           "extension":{
                              "image":"ipfs://cid-image",
                              "image_data":"",
                              "external_url":"",
                              "description":"❤",
                              "attributes":[
                                 {
                                    "display_type":null,
                                    "trait_type":"createdate",
                                    "value":"09/11/2022"
                                 },
                                 {
                                    "display_type":null,
                                    "trait_type":"type",
                                    "value":"gif"
                                 }
                              ],
                              "background_color":"",
                              "animation_url":"",
                              "youtube_url":"",
                              "royalty_percentage":0,
                              "royalty_payment_address":"aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8"
                           }
                        }
                     }
                  },
                  "history":[],
                  "code_id":"621",
                  "contract_address":"aura1rxqvh92fuyap0ahkr0jnupyt8q5pp58vjghr6zuxcsqww34jwdds49r54l",
                  "token_id":"1667960067515",
                  "owner":"aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e",
                  "is_burned":false,
                  "metadata":{
                     "image":"ipfs://cid-image",
                     "image_data":"",
                     "external_url":"",
                     "description":"❤️️",
                     "attributes":[
                        {
                           "display_type":null,
                           "trait_type":"createdate",
                           "value":"09/11/2022"
                        },
                        {
                           "display_type":null,
                           "trait_type":"type",
                           "value":"gif"
                        }
                     ],
                     "background_color":"",
                     "animation_url":"",
                     "youtube_url":"",
                     "royalty_percentage":0,
                     "royalty_payment_address":"aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8"
                  },
                  "createdAt":"2022-11-10T07:12:08.631Z",
                  "updatedAt":"2022-11-14T04:36:17.518Z",
                  "custom_info":{
                     "chain_id":"serenity-testnet-001",
                     "chain_name":"Aura Serenity"
                  },
                  "image":{
                     "link_s3":"https://nft-ipfs-indexer.s3.ap-southeast-1.amazonaws.com/5NIE6iitLuUfEWMKnDPDOJtE4qjNbJWI.gif",
                     "content_type":"image/gif"
                  },
                  "animation":{
                     "link_s3":"https://nft-ipfs-indexer.s3.ap-southeast-1.amazonaws.com/bafybeicjilgl52q3iwo4b6r5sgsr4sjudb3zf5vxygcitvwf7ncfewyiei",
                     "content_type":"video/webm"
                  }
               },
```

NFT onchain information is nested in asset_info field. With each NFT, Horoscope handle to have more information offchain:

- code_id, contract_address, token_id: crawl from LCD
- is_burned: is true if token was burned
- metadata: NFT metadata (crawl from token uri or onchain)
- image, animation: with AWS S3 link and content_type to display on frontend

### Horoscope v2

#### List all CW721 asset of one address
Input:

- Owner address

It can be retrieved from the Horoscope like shown below:

```bash
curl -L -X POST 'https://indexer-v2.staging.aurascan.io/api/v1/graphiql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10) { euphoria { cw721_token(limit: $limit, order_by: {id: desc}, where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}}) { id media_info owner token_id } } }",
  "variables": {
    "limit": 10,
    "tokenId": null,
    "owner": "aura1crh5z8cy0znnj8u48jlttr5h4as8n336jj0gxr"
  }
}'
```

#### Detail of one CW721 (NFT)
Input:

- contractAddress (return from list all)
- tokenID (return from list all)

```bash
curl -L -X POST 'https://indexer-v2.staging.aurascan.io/api/v1/graphiql' \
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
| Image | JPG | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717723533) |
| Image | PNG | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717871604) |
| Image | GIF  | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717466231) |
| Vector | SVG | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718039726) |
| Video | MP4 | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717970078) |
| Video | WEBM | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718267079) |
| Audio | MP3 | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717821986) |
| Audio | WAV | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718131735) |
| Audio | OGG | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688718217586) |
| 3D | GLB | [link](https://euphoria.aurascan.io/tokens/token-nft/aura15xv73kvnpm6pw3rcmg4ja7t63tr8stf3279xs5taru70fjq80xsqyd5n78/1688717643214) |
