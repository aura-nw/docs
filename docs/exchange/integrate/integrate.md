import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🌟 Exchange Integration

This section is dedicated for exchanges (CEX and DEX) to integrate with Aura Network.


## 1. Native $AURA currency

Aura mainnet is developed using [Cosmos SDK](https://v1.cosmos.network/sdk). So if you have listed popular coins like [ATOM](https://www.coingecko.com/en/coins/cosmos-hub), the process is very similar.

- Aura Network runs on Tendermint consensus, the block is finalized instantly. 
- Currently, the expected block time is around 5 - 6 seconds. The latest block can be queried by:

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```
curl https://lcd.euphoria.aura.network/blocks/latest
```
</TabItem>
</Tabs>

### 1.1. Integration Reference

- [Accounts](./accounts.md)
- [Transaction](./transaction.md)

### 1.2. Node Reference

You can either run your own full node following the guide here: [Running a full node](../../validator/running-a-fullnode.md).

Or directly query public API endpoints [here](../../developer/endpoints.md).

### 1.3. Staking and Delegation

- [Staking](../../overview/start/staking.md)
- [Become a validator](../../validator/running-a-validator.md) 


## 2. BEP-20 Token (deprecate after October 1st 2022)
AURA is currently being published as BEP-20 tokens on BNB Smart Chain. 

Offcial Contract Address is at: [`0x23c5D1164662758b3799103Effe19cC064d897D6`](https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6)

Tracking at:
- [Coingecko](https://www.coingecko.com/en/coins/aura-network)
- [CoinMarketCap](https://coinmarketcap.com/currencies/aura-network/)

:::caution
The BEP-20 tokens will be eventually deprecated after October 1st 2022 when Aura Network mainnet is online. Exchanges that have listed this token should work with Aura Network team to migrate listed tokens into native $AURA on mainnet.
:::