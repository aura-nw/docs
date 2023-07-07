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
- Core components are fully [Open source](https://github.com/aura-nw/horoscope) under MIT license

Horoscope development is funded by Aura Network foundation, it is currently deployed at several environment:  

Horoscope v1:    

| Environment | URL                                        | Support Chain                       |
| ----------- | ------------------------------------------ | ----------------------------------- |
| Production  | https://horoscope.aura.network/openapi     | Aura (Xstaxy)                       |
| Staging     | http://indexer.staging.aurascan.io/openapi | Aura (Euphoria, Serenity)           |
| Develop     | http://indexer.dev.aurascan.io/openapi     | Aura (Testnet)                      |
  
Horoscope v2:  

| Environment | URL                                              | Support Chain            |
| ----------- | ------------------------------------------------ | ------------------------ |
| Production  | https://horoscope-v2.aura.network/graphiql/      | Aura (Xstaxy)            |
| Staging     | https://indexer-v2.staging.aurascan.io/graphiql/ | Aura (Euphoria)          |
| Develop     | https://indexer-v2.dev.aurascan.io/graphiql/     | Aura (Testnet, Serenity) |
<ContactUs />
