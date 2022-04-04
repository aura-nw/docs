---
sidebar_position: 1
---

# Aura Safe

Aura Safe is a multi-signature platform for Cosmos-based blockchain. We develop Safe as a part of the Aura Network project, but we will keep it general so that all other cosmos-based blockchain can use it as well.

By default, the CosmosSDK allows user to perform multisign via the `tx multisign` command when interacting with `Aurad` ([example](https://docs.cosmos.network/master/run-node/txs.html#signing-with-multiple-signers)). However, we have not seen any mainstream consumer dapp that support multisign in the application level yet. That's why we create Aura Safe.

If you are familliar with [Gnosis-safe](https://gnosis-safe.io/) for Ethereum, we basically keep the whole User Interaface of Gnosis. We feel that Gnosis is one of the better multisig app in the wild with a very clean and self-explanation user interface. There are several key differences though:

- Gnosis only support Ethereum based chain. Aura Safe supports Cosmos based chain.
- Gnosis use smart contracts, Aura Safe uses native support multisign command.

Aura Safe is still in development. You can find the public code repository here:

https://github.com/aura-nw/safe-react