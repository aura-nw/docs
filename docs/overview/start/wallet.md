---
sidebar_position: 1
---

# Setup your wallet
Wallet is the entrance to the crypto world, this is the first guide for you to get into Aura Network. 

## I. Wallet Setup
Aura Network is built using [Cosmos SDK](https://v1.cosmos.network/sdk). If you are a *Cosmonaut*, you might directly skip to the next part.
Howver, if you have not use a Cosmos wallet before, this is be the part you should follow closely.

Aura Network currently supports 2 wallets: [Coin98 Wallet](https://wallet.coin98.com/) and [Keplr Wallet](https://www.keplr.app/). We recommend to use Coin98 Wallet as we are working very closely together to roll out Aura specific features.

:::caution
We are working closely with Coin98 to support Aura Testnet. Please download the latest development version of Coin98 Wallet Extension at: https://download.coin98.com/ 

Make sure your Coin98 Wallet extension version is equal or later than: 6.0.1
:::

:::info
Please follow guides from these 2 providers to setup your wallet (**only the Web Browser Extension version at the moment**)
- Coin98 guide: https://blog.coin98.com/c98-wallet-integrates-with-cosmos
- Keplr guide: https://medium.com/chainapsis/how-to-use-keplr-wallet-40afc80907f6
:::

## II. Choose your test network

At the moment, there are 2 public testnet options to work with Aura Network. Depending on your interest, please choose the appropriate testnet before adding them to your wallet. As Aura Network is still in development, the aura client is subjected to change frequently. To ensure the best experience of testnet users, there are 2 independent testnet at the moment.

### 1. Stable Testnet: Serenity

Target users: `App Developer`, `First-Timer` and the majority of `Aura users`.

***Serenity*** testnet is determined to be fairly stable with a minimum validator set. Users who want to get the first hand experience in Aura should try with this network. Serenity is publicly open to DAPP builders through public RPC endpoints. However, it is not open for external validators.

:::info
Use this [Script](https://jsfiddle.net/eledra/kc6yhLpz/) to add the `aura-testnet` chain to your wallet browser extension.
:::

### 2. Experimental Testnet: Halo

Target users: `Validators`, `Security Researcher`, `Developer`

***Halo*** testnet is open for external validators. We also plan to do all client testing, security and performance benchmarking on Halo as well. Thus we do not recommend users to run application on this network as the network might be unstable and reset on a regular basis.

:::info
Halo is currently under private testing before releasing, please be patient.
:::

## III. What do I do next ?

Now you have your wallet setup. There are several things you could try with Aura Network

1. Asking for test token through testnet [Faucet](./faucet.md).
2. [Learn](../protocol/) in detail various concept used in Aura Network.
3. Start developing your application following our [Guides](../../developer/dapp.md).
4. Hacking Aurad by running your own [Nodes](../../validator/running-a-fullnode.md).
5. Try some [applications](../../product/aura-safe/safe_intro.md) that we are building for the Aura Network ecosystem.