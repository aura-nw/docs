---
sidebar_position: 3
sidebar_label: Tracking
---
# Tracking Aura Token
Prior to 20th Mar 2022, Aura Network launched a BEP-20 tokens on BNB chain at the following address: https://bscscan.com/token/0x23c5d1164662758b3799103effe19cc064d897d6

However, the Aura Network mainnet (codename: aura_6322-2) has been launched and all token trackers must update to track only mainnet tokens rather than the BEP-20 one. All BEP-20 tokens at 0x23c5d1164662758b3799103effe19cc064d897d6 are now considered as IOU tokens that can be converted to mainnet native tokens through [BingX exchange](https://support.bingx.com/hc/en-001/articles/16547008282265).

This section shows how a token tracker like CoinGecko or CoinMarketCap can effectively provide transparent information on the Aura Network native currency. 

## 1. Existing Tracker
- CoinGecko: https://www.coingecko.com/en/coins/aura-network
- CoinMarketCap: https://coinmarketcap.com/currencies/aura-network/

## 2. Endpoints
Direct on-chain query can be performed through LCD (light client daemon) API of Aura Nodes. The LCD API is more comprehensive and provides application level APIs for data query in comparison to the low level RPC API that only has basic block data.

A list of public LCD API are hosted [here](../../developer/getting-started/networks-info).

Or you can always go to the official LCD API launched by the Aura Network foundation:

https://lcd.aura.network

## 3. Tracking metrics

### Basic information
- **Contract Address**: N/A (Aura is a native coin)
- **Symbol**: AURA
- **Blockchain**: Aura Network
- **Max Supply**: 1,000,000,000 (1 billion tokens)
- **Token Decimal**: 6
- **Denom**: uaura (micro Aura)

### Total Supply: 
Total supply of Aura Network can be direcly querried from LCD API here

```
curl -X GET "https://lcd.aura.network/cosmos/bank/v1beta1/supply/uaura" -H  "accept: application/json"

{
  "amount": {
    "denom": "uaura",
    "amount": "413183676461531"
  }
}
```
The amount returned from the query is in uaura (micro aura) where 10^6 uaura = 1 aura.

Thus, you can parsed the above result to be: 413,183,676.461531 AURA as total supply

### Circulating Supply: 

Circulating supply refers to the amount of coins that are circulating in the market and are tradeable by the public. These tokens must not be held & locked by insiders, governments.

There are currently 2 accounts in the Aura Mainnet being controlled by the Aura Foundation that should not be counted in the circulating supply.

| Address                                     | Purpose                                      |
|---------------------------------------------|----------------------------------------------|
| aura125gwrqglh495q729zzvraz4twx0fvjfm3c9m7t | vesting account for private & strategic sale |
| aura1pqlh09f0zhszyaaq57ndf8djap4suth2hvl430 | vesting account for Aura Team                |

You can query the live balance of these accounts using the following API:

```
curl -X GET "https://lcd.aura.network/cosmos/bank/v1beta1/balances/aura125gwrqglh495q729zzvraz4twx0fvjfm3c9m7t/by_denom?denom=uaura" -H  "accept: application/json"

{
  "balance": {
    "denom": "uaura",
    "amount": "157557500000000"
  }
}
```
And
```
curl -X GET "https://lcd.aura.network/cosmos/bank/v1beta1/balances/aura1pqlh09f0zhszyaaq57ndf8djap4suth2hvl430/by_denom?denom=uaura" -H  "accept: application/json"

{
  "balance": {
    "denom": "uaura",
    "amount": "171215340704936"
  }
}
```
The return value, similar to the case above, is in uaura.

The final value of circulating supply can be calculated by taking Total Supply minus the value held by these 2 accounts.


## 4. Tokenomics
The complete tokenomics of Aura Network can be refered from the [Whitepaper](https://github.com/aura-nw/whitepaper/blob/main/release/Aura_Network___whitepaper.pdf).

A visualized version can be found at our [CoinGecko page](https://www.coingecko.com/en/coins/aura-network/tokenomics).
