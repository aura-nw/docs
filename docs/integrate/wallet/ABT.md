---
sidebar_position: 3
sidebar_label: Account Bound Token
---

# Account Bound Token (CW4973/ABT) integration for wallet

It is recommend to use Horoscope, the interchain indexer for querying ABT data on Aura Network. Other interaction with the ABT contract can be executed by sending corresponding CosmWasm transaction to the network. You can read documentation about [CW4973](https://github.com/aura-nw/cw-nfts/tree/cw4973/contracts/cw4973) to understand its specification.

## 1. Querying ABT

### Chose your API

You can choose from these following indexer server to integrate with the wallet.

| Environment | Description                             | URL                                |
| ----------- | --------------------------------------- | ---------------------------------- |
| Production  | Only support Mainnet                    | https://horoscope.aura.network     |
| Staging     | Public stable version, support Euphoria | https://horoscope.dev.aura.network |

ABT can be retrieved over the following API:

```
$Indexer_URL$/api/v1/asset/getByOwner
```

### List all CW4973 (ABT) asset of one address

Input:

- Owner address
- Chainid: euphoria-2
- contractType = CW4973

Example:

https://horoscope.dev.aura.network/api/v1/asset/getByOwner?owner=aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9&chainid=euphoria-2&contractType=CW4973&countTotal=false&pageLimit=10&pageOffset=0

### Detail of one CW4973 (ABT)

Input:

- Chainid: euphoria-2
- contractType = CW4973
- contractAddress (return from list all)
- tokenID (return from list all)

Example:

https://horoscope.dev.aura.network/api/v1/asset/getByOwner?owner=aura1jle7yhpg7syy2w0n6edu8m6x8n3tmtj5d5kxt9&chainid=euphoria-2&contractType=CW4973&tokenId=b672c4182537fe927b411b3f315e85550470611db9f4cef700d532c0b48f6a3c&countTotal=false&pageLimit=10&pageOffset=0

### Parse output

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
              "chain_id": "euphoria-2",
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

## 2. Supported ABT Format

These following media types should be supported for displaying in the wallet:

| Type  | File Extension | Example                                                                                                                                                                                |
| ----- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image | JPG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/ad4d194dd03d9d4c4f97e0e002c74a6f544644c64a70fa2026619a7b13753073) |
|       | PNG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/aba44820a612f8e41c028d8e9a885c44d156959a74e3c8071a9723a3fba977ce) |
|       | GIF            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/2ba16796e4ee59598a065b5f793fb33db9d0e95b60e100e2fe30e47915b84ad8) |
|       | SVG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/7df1048a6b572a0e94b45106e574b75cec753c08b9fd8ec996f28bcb09e8808b) |
| Video | MP4            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/099f2e3c9645f2f78c9004fa71aaa3d7ef03ec6b8cbb89a2c4e0916fac776194) |
|       | WEBM           | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/da25bfea2344b4ace5be0f9b1dfea84129879dec0cff95c9b68bb1c232e0ab7a) |
| Audio | MP3            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/c8f317f38b6218814b70de58a0a6c2af9f31dedaa0571630f8a35368f920dd70) |
|       | WAV            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/42e4ea8bc605340941596ff24929ecf53acb6488d08f4e305bfc148ed85b1450) |
|       | OGG            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/347f72c9e0049790c6e80a85d988888fcde17f9ad9469076c1953ddd5f16a96b) |
| 3D    | GLB            | [link](https://euphoria.aurascan.io/tokens/token-abt/aura1kffl2dmyzv9pq9rflnaqs5e8qnnggl9delv395q0wtfph4cu663swyny3z/7862e93c0038148948ea5f8b48031005761616186ce77a2a440b2e6c73ebb854) |

## 3. ABT Metadata

Horoscope used Metadata Standard from
[OpenSea](https://docs.opensea.io/docs/metadata-standards). It crawl image and animation_url attribute from IPFS, and save to AWS S3 bucket for faster view.  
There are 2 way to provide metadata for ABT:

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
