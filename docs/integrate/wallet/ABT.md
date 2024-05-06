---
sidebar_position: 3
sidebar_label: Account Bound Token
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Account Bound Token (CW4973/ABT) integration for wallet

It is recommend to use Horoscope, the interchain indexer for querying ABT data on Aura Network. Other interaction with the ABT contract can be executed by sending corresponding CosmWasm transaction to the network. You can read documentation about [CW4973](https://github.com/aura-nw/cw-nfts/tree/cw4973/contracts/cw4973) to understand its specification.

## 1. Querying ABT

### Chose your API

You can choose indexer server to integrate with the wallet [here](../../product/horoscope/index.md#environment)  
> ** Horoscope V1 API will be deprecated on 2023-08-01. Please use [Horoscope V2](#horoscope-v2) With GraphQL instead.**

### Horoscope v1 (deprecated)
ABT can be retrieved over the following API:

```
$Indexer_URL$/api/v1/asset/getByOwner
```

#### List all CW4973 (ABT) asset of one address

Input:

- Owner address
- Chainid: aura_6321-3
- contractType = CW4973

Example:

```bash
curl -X GET "https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9&chainid=aura_6321-3&contractType=CW4973&countTotal=false&pageLimit=10&pageOffset=0" -H "accept: application/json"
```
*[View in browser](https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9&chainid=aura_6321-3&contractType=CW4973&countTotal=false&pageLimit=10&pageOffset=0)*

#### Detail of one CW4973 (ABT)

Input:

- Chainid: aura_6321-3
- contractType = CW4973
- contractAddress (return from list all)
- tokenID (return from list all)

Example:

```bash
curl -X GET "https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9&chainid=aura_6321-3&contractType=CW4973&tokenId=b672c4182537fe927b411b3f315e85550470611db9f4cef700d532c0b48f6a3c&countTotal=false&pageLimit=10&pageOffset=0" -H "accept: application/json"
```
*[View in browser](https://indexer.staging.aurascan.io/api/v1/asset/getByOwner?owner=aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9&chainid=aura_6321-3&contractType=CW4973&tokenId=b672c4182537fe927b411b3f315e85550470611db9f4cef700d532c0b48f6a3c&countTotal=false&pageLimit=10&pageOffset=0)*

#### Parse output

This is an output from getByOwner api:

```js
{
  "code": 200,
  "message": "Successful",
  "data": {
    "assets": {
      "CW4973": {
        "asset": [
          {
            "asset_info": {
              "data": {
                "access": {
                  "approvals": [],
                  "owner": "aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9"
                },
                "info": {
                  "token_uri": "ipfs://bafkreihrcay4u7wgxjhj5d6tbce4ycfqdz2wls4tl7pmbjsh5eq5f7kfsi",
                  "extension": null
                }
              }
            },
            "custom_info": {
              "chain_id": "aura_6321-3",
              "chain_name": "Aura Euphoria"
            },
            "image": {
              "link_s3": "https://s3.ap-southeast-1.amazonaws.com/nft.aurascan.io/bafkreiaq7mwnnj6agbc46vfu4v3j3adyyth67xpnpgbjsqowlpflaz2hfa",
              "content_type": "image/png",
              "file_path": "bafkreiaq7mwnnj6agbc46vfu4v3j3adyyth67xpnpgbjsqowlpflaz2hfa"
            },
            "animation": {
              "link_s3": "https://s3.ap-southeast-1.amazonaws.com/nft.aurascan.io/bafkreick7zus66hmauyogvnfkgrymaycyrdyan63pms2hpnoqlbsy6ddju",
              "content_type": "video/webm",
              "file_path": "bafkreick7zus66hmauyogvnfkgrymaycyrdyan63pms2hpnoqlbsy6ddju"
            },
            "history": [],
            "_id": "63e5e6994d19dc40b0869cd1",
            "asset_id": "aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z_fb65ea0dba1b7c2e6f259d5a8d576e639235085bf42394cbd1ba677f65aca901",
            "code_id": "521",
            "contract_address": "aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z",
            "token_id": "fb65ea0dba1b7c2e6f259d5a8d576e639235085bf42394cbd1ba677f65aca901",
            "owner": "aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9",
            "media_link": "bafkreihrcay4u7wgxjhj5d6tbce4ycfqdz2wls4tl7pmbjsh5eq5f7kfsi",
            "is_burned": true,
            "metadata": {
              "image": "ipfs://bafkreiaq7mwnnj6agbc46vfu4v3j3adyyth67xpnpgbjsqowlpflaz2hfa",
              "image_data": null,
              "external_url": null,
              "description": "Red Hong Yi. A little pixelated girl with a pixelated mountain in the background looks excitedly into the future as she is given the option to begin her adventure with either FIAT MONEY or CRYPTO. This little girl is from Borneo, and the mountain in the background is Mount Kinabalu, the highest mountain in Borneo. Lush forests surround the mountain, and the land is rich and healthy. Red Hong Yi. I hope we will build a better future so that little girls will be empowered to choose their own adventures in a world that celebrates nature, technology, and the human race.",
              "name": "ABT WEBM 100220230010",
              "attributes": [
                {
                  "trait_type": "Artist WEBM 01",
                  "value": "Red Hong Yi WEBM 01"
                },
                {
                  "trait_type": "Edition WEBM 01",
                  "value": "Single WEBM 01"
                },
                {
                  "trait_type": "Border WEBM 01",
                  "value": "White WEBM 01"
                },
                {
                  "trait_type": "Drop WEBM 01",
                  "value": "Build a Better Future. WEBM 01"
                },
                {
                  "trait_type": "Artist WEBM 02",
                  "value": "Red Hong Yi WEBM 02"
                },
                {
                  "trait_type": "Edition WEBM 02",
                  "value": "Single WEBM 02"
                },
                {
                  "trait_type": "Border WEBM 02",
                  "value": "White WEBM 02"
                },
                {
                  "trait_type": "Drop WEBM 02",
                  "value": "Build a Better Future. WEBM 02"
                }
              ],
              "background_color": "A1B2C3",
              "animation_url": "ipfs://bafkreick7zus66hmauyogvnfkgrymaycyrdyan63pms2hpnoqlbsy6ddju",
              "youtube_url": ""
            },
            "createdAt": "2023-02-10T06:39:21.272Z",
            "updatedAt": "2023-02-15T07:31:50.820Z",
            "__v": 0
          }
        ],
        "count": 0
      }
    },
    "nextKey": null
  }
}
```

ABT onchain information is nested in asset_info field. With each NFT, Horoscope handle to have more information offchain:

- code_id, contract_address, token_id: crawl from LCD
- is_burned: is true if token was burned
- metadata: ABT metadata (crawl from token uri or onchain)
- image, animation: with AWS S3 link and content_type to display on frontend

### Horoscope V2
Because ABT is one child of NFT, so in Horoscope V2, you can use query CW721 to query CW4973, just input contract address: 

#### List all CW4973 asset of one address
Input:

- Selected chain: xstaxy/euphoria/serenity
- Owner address
- Limit, offset

It can be retrieved from the Horoscope like shown below:

<Tabs groupId="list-cw4973">
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
    "owner": "aura1whczpvfx2z79h84yzdlpzad5gwurynredrtcx6"
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
    "owner": "aura1whczpvfx2z79h84yzdlpzad5gwurynredrtcx6"
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
    "owner": "aura1whczpvfx2z79h84yzdlpzad5gwurynredrtcx6"
  }
}'
```

  </TabItem>
</Tabs>

#### Detail of one CW4973 (NFT)
Input:

- Selected chain: xstaxy/euphoria/serenity
- contractAddress (return from list all)
- tokenID (return from list all)


<Tabs groupId="detail-cw4973">
  <TabItem value="euphoria" label="euphoria">

```bash
curl -L -X POST 'https://indexer-v2.staging.aurascan.io/api/v2/graphql' \
-H 'Content-Type: application/json' \
--data-raw '{
  "operationName": "cw721token",
  "query": "query cw721token($tokenId: String = null, $owner: String = null, $limit: Int = 10, $contractAddress: String = null) { euphoria { cw721_token(limit: $limit, order_by: {id: desc}, where: {token_id: {_eq: $tokenId}, owner: {_eq: $owner}, cw721_contract: {smart_contract: {address: {_eq: $contractAddress}}}}) { id media_info owner token_id cw721_contract{ smart_contract{ address } } } } }",
  "variables": {
    "contractAddress": "aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58",
    "tokenId": "c4f6b737e1188aebd983f270e63837b76b69b9e9a1c35668c21e6219da379dce"
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
    "tokenId": "c4f6b737e1188aebd983f270e63837b76b69b9e9a1c35668c21e6219da379dce"
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
    "tokenId": "c4f6b737e1188aebd983f270e63837b76b69b9e9a1c35668c21e6219da379dce"
  }
}'
```

  </TabItem>
</Tabs>




#### Parse output
This is an output of get detail CW4973: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "euphoria": {
      "cw721_token": [
        {
          "id": 13432,
          "media_info": {
            "onchain": {
              "metadata": {
                "name": "ABT IMA JPG 21062023",
                "image": "ipfs://QmfAz8QN6XPpvxjc5EWC8yA8NxXV1bWcaAPfLLikPrEUYd",
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
                  },
                  {
                    "value": "Build a Better Future. GIF 08",
                    "trait_type": "Drop GIF 08"
                  },
                  {
                    "value": "Single GIF 09",
                    "trait_type": "Edition GIF 09"
                  },
                  {
                    "value": "White GIF 10",
                    "trait_type": "Border GIF 10"
                  },
                  {
                    "value": "Build a Better Future. GIF 11",
                    "trait_type": "Drop GIF 11"
                  }
                ],
                "description": "Red Hong Yi. A little pixelated girl with a pixelated mountain in the background looks excitedly into the future as she is given the option to begin her adventure with either FIAT MONEY or CRYPTO. This little girl is from Borneo, and the mountain in the background is Mount Kinabalu, the highest mountain in Borneo. Lush forests surround the mountain, and the land is rich and healthy. Red Hong Yi. I hope we will build a better future so that little girls will be empowered to choose their own adventures in a world that celebrates nature, technology, and the human race.",
                "animation_url": null
              },
              "token_uri": "ipfs://QmQKoDKoCCDkSfzPhQcQpvnreRkYWmv8UCnn6rKJLZhqBH"
            },
            "offchain": {
              "image": {
                "url": "https://nft.aurascan.io/QmfAz8QN6XPpvxjc5EWC8yA8NxXV1bWcaAPfLLikPrEUYd",
                "file_path": "QmfAz8QN6XPpvxjc5EWC8yA8NxXV1bWcaAPfLLikPrEUYd",
                "content_type": "image/jpeg"
              },
              "animation": {}
            }
          },
          "owner": "aura1whczpvfx2z79h84yzdlpzad5gwurynredrtcx6",
          "token_id": "c4f6b737e1188aebd983f270e63837b76b69b9e9a1c35668c21e6219da379dce",
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

ABT metadata are saved on onchain field. Another offchain field are:  
- url: link AWS S3 for image/animation
- file_path: file path in S3 storage
- content_type: content type for that image/animation 

## 2. Supported ABT Format

These following media types should be supported for displaying in the wallet:

| Type  | File Extension | Example                                                                                                                                                                                |
| ----- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image | JPG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/c4f6b737e1188aebd983f270e63837b76b69b9e9a1c35668c21e6219da379dce) |
|       | PNG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/bea620b9676269f50989cdaa2b58ae4082f15017cd19282628f79ce24aa29d90) |
|       | GIF            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/5ce0147552cb361a22bbad3c32e20f0865bcdb0816b610e0d181b7243a8558e2) |
|       | SVG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/65a1435d2e2d092f9722813cb12d3b5aecc2487fab62a4b5398db7826bc19c93) |
| Video | MP4            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/872a27a5b3fbb447225ed8c42d00ada70cc408d1b0960cda8d24efdcb18a2cf9) |
|       | WEBM           | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/7242ce241acbac74e9b4189b80804b27159ef6a2206c390b8a8049266ea17650) |
| Audio | MP3            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/1a6ea2e8281fdcfcb0c9bf3d27d9d989f4a5d09d5be9011ad17cd312f4f7bb1a) |
|       | WAV            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/90160dd51654e4e944fcbc29c53fd78de1e12f78e0c0c655c93c02202e8d08ff) |
|       | OGG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/120e497e6d0662fa9ffbcff05c529d0c19134abc210872229b76323c176a9060) |
| 3D    | GLB            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura10qnjf5mcnsmputyh98nm4ytwrm94xgcppvjyhr7qjf6ds97an96sl9vl58/fc54a3142a147a9655015da63c262e3836e8052002eda63b4c1051b086253870) |
