---
sidebar_position: 1
---
import ReactPlayer from 'react-player'

# Setup your wallet
Wallet is the entrance to the crypto world, this is the first guide for you to get into Aura Network. 

## I. Wallet Setup
Aura Network is built using [Cosmos SDK](https://v1.cosmos.network/sdk). If you are a *Cosmonaut*, you might directly skip to the next part.
Howver, if you have not use a Cosmos wallet before, this is be the part you should follow closely.

Aura Network currently supports 2 wallets: [Coin98 Wallet](https://wallet.coin98.com/) and [Keplr Wallet](https://www.keplr.app/). We recommend to use Coin98 Wallet as we are working very closely together to roll out Aura specific features.

Please follow guides from these 2 providers to setup your wallet (**only the Web Browser Extension version at the moment**)
- Coin98 guide: https://blog.coin98.com/c98-wallet-integrates-with-cosmos
- Keplr guide: https://medium.com/chainapsis/how-to-use-keplr-wallet-40afc80907f6

:::caution
Make sure you write down or backup your Coin98 wallet **Passphrase**. 

If you lose it, nobody can help you to recover your wallet.
:::

<div className='player-wrapper'>
    <ReactPlayer 
        playing 
        controls 
        url='/video/Introduction_Wallet.mp4' 
        className='react-player'
        width='100%'
        height='100%'
    />
</div>

## II. Add Testnet Profile

At the moment, there are 2 public testnet options to work with Aura Network. Depending on your interest, please choose the appropriate testnet before adding them to your wallet. As Aura Network is still in development, the aura client is subjected to change frequently. To ensure the best experience of testnet users, there are 2 independent testnets at the moment: Euphoria and Serenity.

### 1. Stagging Testnet: Euphoria

Target users: `Validator`, `App Developer`, `First-Timer` and the majority of `Aura users`.

***Euphoria***: Similar to the staging environment concept in traditional software development, Euphoria is the near exact replica of Aura Mainnet. This means we will try our best to bootstrap external validators, set up vesting, voting and operate the Euphoria bootstrap community as closely as we will do on Aura Mainnet in the future.

:::info
Use this [Script](https://jsfiddle.net/eledra/rmh95s3x/) to add the `Aura Euphoria Testnet` chain to your wallet browser extension.
:::

After running the script, the Aura Testnet profile will appear in the Coin98 Wallet extension

<figure>
  <img src="/img/tutorial/profile.png" width="600px"/>
</figure>

### 1. Stable Testnet: Serenity

Target users: `App Developer`.

***Serenity*** testnet is determined to be fairly stable with a minimum validator set. Users who want to get the first hand experience in Aura should try with this network. Serenity is publicly open to DAPP builders through public RPC endpoints. However, it is not open for external validators.

:::info
Use this [Script](https://jsfiddle.net/eledra/kc6yhLpz/) to add the `Aura Serenity Testnet` chain to your wallet browser extension.
:::

## III. Create Aura Wallet
The final step is to create a new Aura Wallet. Just clock the Add Wallet button on the top right corner of the extension. After creating your Aura Wallet, you are ready to try the testnet.

:::caution
Make sure you write down or backup your private key and passphrase !

If you lose it, nobody can help you to recover your wallet.
:::

<div className='player-wrapper'>
    <ReactPlayer 
        playing 
        controls 
        url='/video/Add_Wallet.mp4' 
        className='react-player'
        width='100%'
        height='100%'
    />
</div>

## IV. What do I do next ?

Now you have your wallet setup. There are several things you could try with Aura Network

1. Asking for test token through testnet [Faucet](./faucet.md).
2. [Learn](../protocol/) in detail various concept used in Aura Network.
3. Start developing your application following our [Guides](../../developer/contract/smartcontract.md).
4. Hacking Aurad by running your own [Nodes](../../validator/running-a-fullnode.md).
5. Try some application that we are building for the Aura Network ecosystem.
