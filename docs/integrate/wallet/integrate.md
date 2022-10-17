---
sidebar_position: 1
sidebar_label: Basic integration
---

# Wallet Integration

## I. BEP-20 token integration
:::caution
The BEP-20 tokens will be eventually deprecated after October 1st 2022 when Aura Network mainnet is online. Exchanges that have listed this token should work with Aura Network team to migrate listed tokens into native $AURA on mainnet.
:::

AURA is currently being published as BEP-20 tokens on BNB Smart Chain. 

Offcial Contract Address is at: [`0x23c5D1164662758b3799103Effe19cC064d897D6`](https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6)

Tracking at:
- [Coingecko](https://www.coingecko.com/en/coins/aura-network)
- [CoinMarketCap](https://coinmarketcap.com/currencies/aura-network/)

## II. Native $Aura integration

Aura mainnet is developed using [Cosmos SDK](https://v1.cosmos.network/sdk). So if you support popular coins like [ATOM](https://www.coingecko.com/en/coins/cosmos-hub), the process is very similar.

Depending on the network (dev, testnet or mainnet), wallet integration needs to put in different configuration. Here is a list of references for each network we are running currently.

| Network  | Description             | Wallet Configuration                  |
|----------|-------------------------|---------------------------------------|
| Xstaxy   | Mainnet                 | TBD                                   |
| Euphoria | Public stable Testnet   | https://jsfiddle.net/eledra/rmh95s3x/ |
| Serenity | Public unstable Testnet | https://jsfiddle.net/eledra/kc6yhLpz/ |
| Dev      | internal dev network    | https://jsfiddle.net/eledra/8oe2qbct/ |