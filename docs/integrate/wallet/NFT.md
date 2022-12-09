---
sidebar_position: 2
sidebar_label: Non-fungible Token
---

# Aura NFT integration for wallet

It is recommend to use Horoscope, the interchain indexer for querying NFT data on Aura Network. Other interaction with the NFT contract can be executed by sending corresponding CosmWasm transaction to the network.

## 1. Querying NFT

### Chose your API

You can choose from these following indexer server to integrate with the wallet.

| Environment | Description                             | URL                                 |
| ----------- | --------------------------------------- | ----------------------------------- |
| Production  | Only support Mainnet                    | https://horoscope.aurascan.io       |
| Staging     | Public stable version, support Euphoria | https://indexer.staging.aurascan.io |
| Test        | Internal test version, support Serenity | https://indexer.dev.aurascan.io     |

NFT can be retrieved over the following API:

```
$Indexer_URL$/api/v1/asset/get_v1_asset_getByOwner
```

### List all CW721 (NFT) asset of one address

Input:

- Owner address
- Chainid: aura-testnet, serenity-testnet-001, euphoria-2
- contractType = CW721

Example:

https://indexer.dev.aurascan.io/api/v1/asset/getByOwner?owner=aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e&chainid=serenity-testnet-001&contractType=CW721&countTotal=false&pageLimit=10&pageOffset=0

### Detail of one CW721 (NFT)

Input:

- Chainid: aura-testnet, serenity-testnet-001, euphoria-2
- contractType = CW721
- contractAddress (return from list all)
- tokenID (return from list all)

Example:

https://indexer.dev.aurascan.io/api/v1/asset/getByOwner?chainid=serenity-testnet-001&contractType=CW721&tokenId=MP4-haveSound-03Oct2022-CW721%20Contract%2093-2ug4&contractAddress=aura15ydv0hjccrazv65cgdxu8dt7hcftmnk35s8f3erktrhflsu5lh9q2datge&countTotal=false&pageLimit=10&pageOffset=0

### Parse output

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

## 2. Transfering NFT

Tranfering NFT can be performed by executing CosmWasm transactions with the following format:

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

| Type  | File Extension | Example                                                                                                                          |
| ----- | -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Image | JPG            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/JPG-98001)  |
|       | PNG            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/PNG-98002)  |
|       | GIF            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/GIF-98003)  |
|       | SVG            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/SVG-98004)  |
| Video | MP4            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/MP4-98007)  |
|       | WEBM           | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/WEBM-98009) |
| Audio | MP3            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/MP3-98008)  |
|       | WAV            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/WAV-98010)  |
|       | OGG            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/OGG-98006)  |
| 3D    | GLB            | [link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/GLB-98005)  |

## 4. NFT Metadata

Horoscope used Metadata Standard from
[OpenSea](https://docs.opensea.io/docs/metadata-standards). It crawl image and animation_url attribute from IPFS, and save to AWS S3 bucket for faster view.  
There are 2 way to provide metadata for NFT:

- Use extension (image or animation when mint), example schema:

```
   {
      "image": "ipfs://bafkreifc7sh35rlrqyhjwmjudy4kh5u5y7n56bhxmyvanc6kugijnnx3py",
      "image_data": "",
      "external_url": "",
      "description": "Hot",
      "name": "token Mars",
      "attributes": [],
      "background_color": "",
      "animation_url": "ipfs://bafkreifc7sh35rlrqyhjwmjudy4kh5u5y7n56bhxmyvanc6kugijnnx3py",
      "youtube_url": "",
      "royalty_percentage": 100,
      "royalty_payment_address": "aura1xr2v9fwc9647fnkwky7p7zkkm8rylc2g8x6uly"
   }
```

- Use token uri (point to a json file with schema above in IPFS), example:

```
   ipfs://bafkreibt4zzazlxfddjh5juopqeoe24kb43jok7xdd5v3wrcqt73cqpnki
```

We recommend use image, animation_url and token uri is an IPFS link (ipfs://cid). Some HTTP request may be blocked when Horoscope crawl them.
