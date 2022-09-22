---
sidebar_position: 1
title: Introduction to Pyxis Safe
---

![Pyxis Safe](/img/pyxis-safe/logo.png)

Storing crypto assets in multi-signature accounts is a very common practice. A group of people or a company can set up a mutual fund that requires a certain number of threshold confirmations before using the fund. It is much safer to manage crypto assets and easier to trust when using a multi-signature solution rather than just delegating these assets to one account. Additionally, individuals can use multi-signature as the solution for multi-factor authentication, as the transaction requires multiple confirmations to be executed. 

The Pyxis Safe is a web application that allows multiple people – "co-owners" – to manage a "Safe" – an address where digital assets of the blockchain network can be contained and transferred, just like a personal wallet. However, moving assets out of the safe requires a consensus between co-owners.

A fixed consensus policy of "M out of N" must be defined upon safe creation, in which M is the number of required owner signatures and N is the total number of owners. After that, all transactions that move assets out of the Safe must have at least M signatures before execution.

Pyxis Safe was originally created only for our [blockchain](https://aura.network/). But we decided to turn it to be compatible with other Cosmos projects as well.

By default, the CosmosSDK allows users to perform multisign via the `tx multisign` command when interacting with `Aurad` ([example](https://docs.cosmos.network/master/run-node/txs.html#signing-with-multiple-signers)). However, we have not seen any mainstream consumer dapp that supports multisign at the application level yet. That's why we created Pyxis Safe.

# Cost of creating a Safe?

As we implement the CosmosSDK native multisign, creating a safe is free of cost.

# Security
It is a safe after all, therefore, security should be the utmost important characteristic. However, Pyxis Safe is nothing more than a convenient user interface for you to send multi-signature transactions to the network. So it is not as critical as you might think. Here are the reasons:

- Pyxis Safe does not "store" your digital assets. In Cosmos chain, multi-sign accounts are supported natively, and we don't need a third-party smart contract to do it on behalf of the user. So your assets are stored on your multi-sign account on-chain, not on the Safe.

- Pyxis Safe does not have access to your private keys (or the mnemonic seed phrase). All transaction signing processes are performed by your wallet of choice. Pyxis Safe only stores the signed transaction and helps you to broadcast it.

- Pyxis Safe does not store your personal information. We only store wallet addresses and transactions. We respect your privacy.

- We are working with a security firm to perform security analysis and penetration testing for the product. Results will be published.

- All Pyxis Safe codes are published on our GitHub.

So even if the Pyxis Safe site is down or permanently compromised, you can use the command line interface provided by the Cosmos network you are working with to go on without worrying about your fund.

# Long-term plan

Pyxis Safe is still in development. The first release will focus on core features such as safe creation, creating transactions, managing transaction history, address book, and some basic settings.
The test version will support Aura Network, Cosmos Hub, and EVMOS. More things will come in the future.

At the moment, Pyxis Safe is running on Aura Network AWS infrastructure. The development and infrastructure are funded by the Aura Network team. We are committed to developing and providing Pyxis Safe service for the long term. The project will be open-source and free to use forever.

You can find the public code repository here:

https://github.com/aura-nw/Aura-Safe
