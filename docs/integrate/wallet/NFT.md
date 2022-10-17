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
|-------------|-----------------------------------------|-------------------------------------|
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
- Chainid: aura-testnet, serenity-testnet-001, euphoria-1
- contractType = CW721

Example:

https://indexer.dev.aurascan.io/api/v1/asset/getByOwner?owner=aura1trqfuz89vxe745lmn2yfedt7d4xnpcpvltc86e&chainid=serenity-testnet-001&contractType=CW721&countTotal=false&pageLimit=10&pageOffset=0

### Detail of one CW721 (NFT)
Input:
- Chainid: aura-testnet, serenity-testnet-001, euphoria-1
- contractType = CW721
- contractAddress (return from list all)
- tokenID (return from list all)

Example:

https://indexer.dev.aurascan.io/api/v1/asset/getByOwner?chainid=serenity-testnet-001&contractType=CW721&tokenId=MP4-haveSound-03Oct2022-CW721%20Contract%2093-2ug4&contractAddress=aura15ydv0hjccrazv65cgdxu8dt7hcftmnk35s8f3erktrhflsu5lh9q2datge&countTotal=false&pageLimit=10&pageOffset=0


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

| Type  | File Extension | Example |
|-------|----------------|---------|
| Image | JPG            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/JPG-98001)        |
|       | PNG            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/PNG-98002)         |
|       | GIF            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/GIF-98003)        |
|       | SVG            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/SVG-98004)         |
| Video | MP4            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/MP4-98007)        |
|       | WEBM           |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/WEBM-98009)        |
| Audio | MP3            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/MP3-98008)       |
|       | WAV            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/WAV-98010)        |
|       | OGG            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/OGG-98006)        |
| 3D    | GLB            |[link](https://euphoria.aurascan.io/tokens/token-nft/aura1vuyynwewauj6usl0lpx5t6ps67mqfzsmtrepxphg4a0w3clzzxnquyul3q/GLB-98005)        |

<!-- ## 4. NFT Metadata

Aura Indexer supports several types of NFT metadata -->