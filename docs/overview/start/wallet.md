---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# Setup your wallet

Wallet is the entrance to the crypto world, this is the first guide for you to get into Aura Network.

## I. Choose your wallet provider

Aura Network is built using [Cosmos SDK](https://v1.cosmos.network/sdk). If you are a _Cosmonaut_, you might directly skip to the next part.
Howver, if you have not use a Cosmos wallet before, this is be the part you should follow closely.

Aura Network currently supports 3 wallets: [Leap Wallet](https://www.leapwallet.io/), [Coin98 Wallet](https://wallet.coin98.com/) and [Keplr Wallet](https://www.keplr.app/).
Please follow guides from these 3 providers to setup your wallet

- Leap guide: https://docs.leapwallet.io/cosmos/
- Coin98 guide: https://blog.coin98.com/c98-wallet-integrates-with-cosmos
- Keplr guide: https://medium.com/chainapsis/how-to-use-keplr-wallet-40afc80907f6
- If you use a hardware wallet, you can use the [Cosmos](https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?support=true) app through Keplr.

:::caution
Make sure you write down or backup your wallet **Passphrase**.

If you lose it, nobody can help you to recover your wallet.
:::

If you don't know which one to choose, you can follow this comparison:

| Wallet | Mobile | NFT | Multi-chain | Tx History | Ledger | Network          |
| ------ | ------ | --- | ----------- | ---------- | ------ | ---------------- |
| Leap   | ✅     | ✅  | ✅          | ✅         | ✅     | Mainnet, Testnet |
| Coin98 | ✅     | ✅  | ✅          | ✅         |        | Mainnet, Testnet |
| Keplr  |        |     | ✅          |            | ✅     | Mainnet, Testnet |

## II. Create Aura Network Wallet

On March 2023, Aura Network has already launched the **_Xstaxy mainnet_**. Here we will walk you through the process of creating an Aura mainnet wallet using one of these wallet providers

### 1. Coin98 Browser extension

If you are creating a brand new Coin98 wallet, you can easily find Aura Network when creating a new account.

However, if you already have Coin98 wallet before, please make sure you have Aura aura_6322-2 mainnet on the Active blockchain list.

![Add mainnet C98](/img/aurascan/c98_active_chain.png)

The final step is to create a new Aura Wallet. Just clock the Add Wallet button on the top right corner of the extension. After creating your Aura Wallet, you are ready to try the testnet.

:::caution
Make sure you write down or backup your private key and passphrase !

If you lose it, nobody can help you to recover your wallet.
:::

![C98 create wallet](/img/aurascan/c98_create_wallet.gif)

### 2. Coin98 Mobile Wallet

Smartphone users can use Coin98 Super App as an efficient tool to aid in the utilization of the Aura Network wallet. If you haven’t installed Coin98 Super App yet, download it on [Google Play](https://play.google.com/store/apps/details?id=coin98.crypto.finance.media&hl=vi&gl=US&ref=insight.aura.network) or [AppStore](https://apps.apple.com/us/app/coin98-super-app/id1561969966?ref=insight.aura.network).

Open Coin98 Super App, choose the Add wallet symbol on the top-right corner. Enter “Aura'' in the search bar and choose Aura Xstaxy Mainnet. Fill in all necessary information and it is done

![C98 Mobile wallet](/img/aurascan/c98_mobile_add_mainnet.png)

### 3. Keplr browser extension

If you choose to use Keplr, you can easily add Aura Network by connecting your Keplr wallet to [Aurascan](https://aurascan.io)

![Keplr Extension](/img/aurascan/Keplr_wallet_extension.png)

### 4. Using Ledger

Currently only Keplr supports Ledger connection to Aura. Make sure you have the [Cosmos](https://support.ledger.com/hc/en-us/articles/360013713840-Cosmos-ATOM-?support=true) Application on your ledger. Then, just connect your ledger with Keplr and you are good to go.

![Keplr Ledger](/img/aurascan/keplr_ledger.jpg)

### 5. Leap Wallet

You can follow a detail guide from the Leap wallet team here:

https://www.leapwallet.io/blogs/aura

<iframe width="560" height="315" src="https://www.youtube.com/embed/1_gBGD7Rvf8?si=6WCwkr8l0_OmWrug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## III. Multisignature solution

If you are familliar with Gnosis-Safe or any multisig assets management tool, pay a visit to our multisignature asset management tool: [Pyxis](https://pyxis.aura.network/).

If you don't know where to start, visit our comprehensive guide for managing your tokens using Pyxis [here](../../product/pyxis-safe/index.md)
