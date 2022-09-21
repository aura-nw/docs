import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🌟 Exchange Integration

This section is dedicated for exchanges (CEX and DEX) to integrate with Aura Network.

## Native $AURA currency

Aura mainnet is developed using [Cosmos SDK](https://v1.cosmos.network/sdk). So if you have listed popular coins like [ATOM](https://www.coingecko.com/en/coins/cosmos-hub), the process is very similar.

- Aura Network runs on Tendermint consensus, the block is finalized instantly. 
- Currently, the expected block time is around 5 - 6 seconds.

There are currently 4 ways to integrate with Aura Network:

1. Use Aura Daemon command-line interface (aurad CLI)
2. Directly invoke an Aura Node client endpoints using HTTP requests
3. Use Javascript library [cosmosjs](https://github.com/cosmos/cosmjs)
4. Use the centralized [Horoscope](../../product/horoscope/index.md) Indexer API

## Denom
There are several denomination widely used in Aura Network.

- `AURA` or `aura` : indicates the AURA native currency on mainnet.
- `uAURA` or `uaura` : indicates the smallest unit of native currency on mainnet. 1 `aura` = 10^6 `uaura`

To avoid confusion with testnet currency, we have different denoms for tokens on testnet

- `EAURA` or `eaura` : indicates the AURA native currency on Euphoria testnet.
- `uEAURA` or `ueaura` : indicates the smallest unit of native currency on Euphoria testnet. 1 `eaura` = 10^6 `ueaura`

## Node Reference

You can either run your own full node following the guide here: [Running a full node](../../validator/running-a-fullnode.md).

Or directly query public API endpoints [here](../../developer/contract/7.rpc.md).

If you only need to interact with the `aurad` CLI, just compile it from source is enough.

## Integration Reference

- [Accounts](./accounts.md)
- [Transaction](./transaction.md)

## Staking and Delegation

- [Staking](../../overview/start/staking.md)
- [Become a validator](../../validator/running-a-validator.md) 


## BEP-20 Token (deprecate after October 1st 2022)
AURA is currently being published as BEP-20 tokens on BNB Smart Chain. 

Offcial Contract Address is at: [`0x23c5D1164662758b3799103Effe19cC064d897D6`](https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6)

Tracking at:
- [Coingecko](https://www.coingecko.com/en/coins/aura-network)
- [CoinMarketCap](https://coinmarketcap.com/currencies/aura-network/)

:::caution
The BEP-20 tokens will be eventually deprecated after October 1st 2022 when Aura Network mainnet is online. Exchanges that have listed this token should work with Aura Network team to migrate listed tokens into native $AURA on mainnet.
:::