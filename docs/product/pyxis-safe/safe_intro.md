import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
# Introduction

The Pyxis Safe is a web application that allows multiple people – co-owners – together to manage a “Safe” – an address where digital assets of the blockchain network can be contained and transferred, just like a personal wallet. However, moving assets out of the safe requires a consensus between co-owners.

A fixed consensus policy of “M out of N” must be defined upon safe creation, in which M is the number of required owner signatures and N is the total number of owners. After that, all transactions that move assets out of the Safe must have at least M signatures before they can be executed.

Pyxis Safe is meant to be built for Cosmos-based blockchains. We develop Safe as a part of the Aura Network project, but we will keep it general so that all other Cosmos-based blockchain can use it as well.

By default, the CosmosSDK allows users to perform multisign via the `tx multisign` command when interacting with `Aurad` ([example](https://docs.cosmos.network/master/run-node/txs.html#signing-with-multiple-signers)). However, we have not seen any mainstream consumer dapp that supports multisign at the application level yet. That's why we created Pyxis Safe.

Pyxis Safe is still in development. You can find the public code repository here:

https://github.com/aura-nw/Aura-Safe

<DocCardList items={useCurrentSidebarCategory().items}/>