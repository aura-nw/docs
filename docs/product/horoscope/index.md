---
sidebar_position: 1
sidebar_label: Home
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

| Environment | URL                                          | Support Chain                                                                     |
|-------------|----------------------------------------------|-----------------------------------------------------------------------------------|
| Production  | https://horoscope.aura.network/openapi       | Aura (Euphoria), CosmosHub, Osmosis                                               |
| Staging     | https://indexer.staging.aurascan.io/openapi/ | Aura (Serenity, Euphoria), Cosmos-hub (Theta), Osmosis (Testnet), Evmos (Testnet) |

<ContactUs />