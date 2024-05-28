---
sidebar_position: 5
title: Asset in Horoscope
---

Currently, Horoscope is supporting ERC20, ERC721, CW20 and CW721.  
## 1. EVM with ERC20/ERC721
Horoscope will index ERC20/ERC721 if your contract implement required [IERC20](https://docs.openzeppelin.com/contracts/3.x/api/token/erc20#IERC20)/[IERC721](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) interface

## 2. Cosmwasm with CW20/CW721
When you build your Cowmwasm contract, you must include contract type in field name like [that](https://github.com/CosmWasm/cw-nfts/blob/177a993dfb5a1a3164be1baf274f43b1ca53da53/contracts/cw721-base/src/lib.rs#L32):  

```rust title="src/lib.rs"
pub const CONTRACT_NAME: &str = "crates.io:cw721-base";
```
There are alot of type CW20 and CW721. Currently, we support all type CW721 from [cw-nfts](https://github.com/CosmWasm/cw-nfts) and CW20 from [cw-plus](https://github.com/CosmWasm/cw-plus/tree/main). List assets type supported in [Horoscope-v2](https://github.com/aura-nw/horoscope-v2/blob/main/code-type.json):   

```json title="code-type.json"
{
  "CW20": ["crates.io:cw20-base"],
  "CW721": [
    "crates.io:cw721-base",
    "crates.io:cw721-metadata-onchain",
    "crates.io:cw721-fixed-price",
    "crates.io:cw2981-royalties",
    "crates.io:cw4973"
  ]
}
```

## 3. Which data is saved?
All metadata is saved into database. With ERC20/CW20, we save balances of all account so you can query database to get them. With ERC721/CW721, we crawl metadata from IPFS and save them into AWS S3 storage for faster access instead query from ipfs.io. 

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