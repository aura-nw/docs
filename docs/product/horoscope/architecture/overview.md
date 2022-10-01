---
sidebar_position: 1
title: Overview of Horoscope
---

## 1. What is blockchain indexer
When it comes to query blockchain data, developers often try to directly query from a blockchain node. Each node often contains a local database to store transactions and state data with certain pre-defined indexes and APIs. Basic elements such as wallets, blocks and transactions are often indexed. However, when blockchain applications become more complicated and be used by more people, the need for more advanced indexes such as time, types, event, etc. arise.

For this reason, a query engine that synchronizes with the blockchain that serve complex inquiries from clients are needed. This is often called a *Blockchain Indexer*.

## 2. What is Horoscope

**Horoscope** is the first dedicated blockchain indexer for Cosmos ecosystem. Originally created to provides dedicated backend API for Aurascan, Horoscope evolved into a multi-chain indexers that can serve any Cosmos-based chain easily. Basically, it crawls data from the blockchain and stores into a mongoDB. Developers can add indexes and write additional APIs for clients. There are several advantages to this approaches:

- Better scaling: Using a powerful database engine (MongoDB), there are different ways for maintainers to optimize scaling for the indexer engine in both horizontal and vertical direction.
- Simplify software development pattern: as everything can be indexes and cached, software development and operation become much simpler than directly interact with nodes.
- Advance queries: clients can perform complex queries, data aggregation, etc. which are impossible with default LCD and RPC APIs

