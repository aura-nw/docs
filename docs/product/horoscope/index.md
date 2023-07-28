---
sidebar_position: 1
sidebar_label: Introduction to Horoscope
title: Horoscope - indexers of the interchain
---

import ContactUs from '@site/src/components/ContactUs/ContactUs.mdx';

Horoscope is an indexing service for Cosmos-based blockchain. It crawl data from the blockchain and index it into mongoDB. Based on the data, it can provide search functionality instead of querying data from LCD or RPC directly.

Currently, it supports network builded by Cosmos SDK v0.45.1 or later. Supporting network:

- Aura Network
- Osmosis
- Cosmos Hub

Why Horoscope is necessary for Aura and the Cosmos ecosystem in general:

- Modular architecture that is compatible with every Cosmos-based chain.
- Horizontal Scaling with MongoDB
- Blazing fast & efficient
- Index everything (wallet, block, transaction, NFT, Tokens, etc.)
- Restful / GraphQL APIs
- Core components are fully [Open source](https://github.com/aura-nw/horoscope-v2) under MIT license

## Environment
Horoscope development is funded by Aura Network foundation, it is currently deployed at several environment:  

### Horoscope v1 (deprecated)

> ** Horoscope V1 API will be deprecated on 2023-08-01. Please use [Horoscope V2](#horoscope-v2) With GraphQL instead.**

| Environment | URL                                        | Support Chain             | Note                                                   |
|-------------|--------------------------------------------|---------------------------|--------------------------------------------------------|
| Production  | https://horoscope.aura.network/api/v1      | Aura (Xstaxy)             | [swagger](https://horoscope.aura.network/openapi)      |
| Staging     | https://indexer.staging.aurascan.io/api/v1 | Aura (Euphoria, Serenity) | [swagger](https://indexer.staging.aurascan.io/openapi) |
| Develop     | https://indexer.dev.aurascan.io/api/v1     | Aura (Testnet)            | [swagger](https://indexer.dev.aurascan.io/openapi)     |
  
### Horoscope v2

| Environment | URL                                           | Support Chain            | Note                                                           |
| ----------- | --------------------------------------------- | ------------------------ | -------------------------------------------------------------- |
| Production  | https://horoscope.aura.network/api/v2         | Aura (Xstaxy)            | [playground](https://horoscope.aura.network/graphiql/)         |
| Staging     | https://indexer-v2.staging.aurascan.io/api/v2 | Aura (Euphoria)          | [playground](https://indexer-v2.staging.aurascan.io/graphiql/) |
| Develop     | https://indexer-v2.dev.aurascan.io/api/v2     | Aura (Testnet, Serenity) | [playground](https://indexer-v2.dev.aurascan.io/graphiql/)     |
<ContactUs />
