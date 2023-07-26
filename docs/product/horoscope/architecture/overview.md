---
sidebar_position: 1
title: Overview of Horoscope
---

## 1. What is a blockchain indexer
When it comes to query blockchain data, developers often try to directly query from a blockchain node. Each node often contains a local database to store transactions and state data with certain pre-defined indexes and APIs. Basic elements such as wallets, blocks and transactions are often indexed. However, when blockchain applications become more complicated and be used by more people, the need for more advanced indexes such as time, types, event, etc. arise.

For this reason, a query engine that synchronizes with the blockchain that serve complex inquiries from clients are needed. This is often called a *Blockchain Indexer*.

## 2. What is Horoscope

**Horoscope** is the first dedicated blockchain indexer for Cosmos ecosystem. Originally created to provides dedicated backend API for Aurascan, Horoscope evolved into a multi-chain indexers that can serve any Cosmos-based chain easily. Basically, it crawls data from the blockchain and stores into a Postgres. Developers can add indexes and write additional APIs for clients. There are several advantages to this approaches:

- Better scaling: Using a powerful database engine (Postgres), there are different ways for maintainers to optimize scaling for the indexer engine in both horizontal and vertical direction.
- Simplify software development pattern: as everything can be indexes and cached, software development and operation become much simpler than directly interact with nodes.
- Advance queries: clients can perform complex queries, data aggregation, etc. which are impossible with legacy node provided LCD and RPC APIs
- Easy to extend: Horoscope is carefully designed to be extendable easily to crawl and index data from any Cosmos based chains. Through integration with powerful tools like [Telescope](https://github.com/osmosis-labs/telescope), it is possible to setup a chain indexer with just a few command.

## 3. Development Status

Horoscope V2 is the next version of Horoscope. We replaced MongoDB by Postgres on v2 and fully support query by GraphQL. With GraphQL, user can create any queries they want, not depend on simple API like v1. To write query GraphQL, you must read Database schema [here](https://github.com/aura-nw/horoscope-v2/blob/main/docs/database_schema.md) to understand table schema. Then you can use playground in [server environment](../index.md#horoscope-v2) to query.

## 4. Contribution

Horoscope is release under the [MIT License](https://github.com/aura-nw/horoscope-v2/blob/main/LICENSE), it is free to use and redistributed without any limitation.

Horoscope is currently being developed by [Aura Network](https://aura.network) team. If you are interested in contribution to the project or want to integrate the indexer to your favorite Cosmos chain, please contact us via [Discord](https://discord.gg/bzm3dyxJxR).