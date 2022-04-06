---
sidebar_position: 1
---

# Introduction

The Aura Safe is a web application that allow multiple people – co-owners – together manage a “Safe” – an address where digital assets of the blockchain network can be contained and transferred, just like a personal wallet. However, moving asset out of the safe requires a consensus between co-owners. 

A fixed consensus policy of “M out of N” must be defined upon safe creation, in which M is the number of required owner signatures and N is the total number of owners. After that, all transactions that move assets out of the Safe must have at least M signatures before they can be executed.

Aura Safe is meant to be built for Cosmos-based blockchain. We develop Safe as a part of the Aura Network project, but we will keep it general so that all other Cosmos-based blockchain can use it as well.

By default, the CosmosSDK allows user to perform multisign via the `tx multisign` command when interacting with `Aurad` ([example](https://docs.cosmos.network/master/run-node/txs.html#signing-with-multiple-signers)). However, we have not seen any mainstream consumer dapp that support multisign in the application level yet. That's why we create Aura Safe.

Aura Safe is still in development. You can find the public code repository here:

https://github.com/aura-nw/safe-react