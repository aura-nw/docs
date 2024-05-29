---
sidebar_position: 1
sidebar_label: Getting started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ContactUs from '@site/src/components/ContactUs/ContactUs.mdx';

# Exchange Integration

This section is dedicated for exchanges (CEX and DEX) to integrate with Aura Network.

## Native $AURA currency

Aura mainnet is developed using [Cosmos SDK](https://v1.cosmos.network/sdk) with **EVM module**

The coin:

- Coin name is `Aura` and the symbol/ticker for is `AURA`.
- Aura support both Cosmos and EVM transactions
- Aura Network runs on Tendermint consensus, the block is finalized instantly. 
- Currently, the expected block time is around 5 - 6 seconds.

There are currently 4 ways to integrate with Aura Network:

1. Use Aura Daemon command-line interface (aurad CLI)
2. Directly invoke an Aura Node client endpoints using HTTP requests
3. Use Javascript library [cosmosjs](https://github.com/cosmos/cosmjs) or [etherjs](https://github.com/ethers-io/ethers.js)
4. Use the centralized [Horoscope](../../product/horoscope/index.md) Indexer API

## Denomination
There are various denominations widely used in Aura Network.

- `AURA` or `aura` : indicates the AURA native currency on mainnet.
- `uAURA` or `uaura` : indicates the base unit of native currency on mainnet. 1 `aura` = 10^6 `uaura`.
- `aAURA` or `aaura` : indicates EVM unit, which is **ONLY USE** by EVM transactions on mainnet. 1 `aura` = 10^18 `aaura`. 

To avoid confusion with testnet currency, we have different denominations for the Euphoria testnet.

- `EAURA` or `eaura` : indicates the AURA native currency on Euphoria testnet.
- `uEAURA` or `ueaura` : indicates the smallest unit of native currency on Euphoria testnet. 1 `eaura` = 10^6 `ueaura`.
- `aEAURA` or `aeaura` : indicates EVM unit, which is **ONLY USE** by EVM transactions on Euphoria testnet. 1 `aeura` = 10^18 `aeaura`. 


## Block explorer

Block explorer is below. We have a full guide available here: [Product/Aurascan](../../product/aurascan).

- **Mainnet**: https://aurascan.io
- **Euphoria**: https://euphoria.aurascan.io

## Official repositories

Our GitHub repository can be found here: https://github.com/aura-nw

## Node Reference

We have a full guide to run your own node here: [Running a full node](../../validator/running-a-fullnode.md) in case you
wish to run your own node (recommended), but if your integration does not require much, you could use any of the publicly 
available APIs for your queries.

All the publicly available nodes are listed [here](../../developer/getting-started/networks-info/cosmos-info). Please note that
these include nodes maintained directly by Aura Network as well as third parties.

If you only need to interact with the `aurad` CLI, just compiling it from the source is enough. We have a guide for setting up 
the CLI [here](../../developer/getting-started/env-setup#install-aura-deamon).

Our public API interfaces are:
* LCD: https://lcd.aura.network
* RPC:https://rpc.aura.network

## Integration Reference

- [Accounts](./accounts.md)
- [Transaction](./transaction.md)

## Staking and Delegation

- [Staking](../../overview/start/staking.md)
- [Become a validator](../../validator/running-a-validator.md) 


## BEP-20 Token (deprecated)
:::caution
AURA BEP20 token on BNB Chain has been officially deprecated and we're currently working with exchanges to fully 
migrate into native $AURA on mainnet.
:::

Contract Address for the BEP20 token: [`0x23c5D1164662758b3799103Effe19cC064d897D6`](https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6)

Tracking at:
- [Coingecko](https://www.coingecko.com/en/coins/aura-network)
- [CoinMarketCap](https://coinmarketcap.com/currencies/aura-network/)


<ContactUs />