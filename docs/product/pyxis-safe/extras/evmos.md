---
sidebar_position: 3
title: About EVMOS integration
---

We are very glad that our Pyxis Safe is actively supported by EVMOS. This dedicated section will give you a brief introduction to EVMOS and some specific information about using Pyxis to multi-sig on EVMOS.

## About EVMOS

[EVMOS](https://evmos.org/) is a scalable, high-throughput PoS blockchain that is fully compatible and interoperable with Ethereum. It's built using the Cosmos SDK, which runs on top of the Tendermint consensus engine.

EVMOS allows for running vanilla Ethereum as a Cosmos application-specific blockchain which allows developers to have all the desired features of Ethereum while at the same time benefitting from Tendermint's PoS implementation. Also, because it is built on top of the Cosmos SDK, it will be able to exchange value with the rest of the Cosmos Ecosystem through the Inter Blockchain Communication Protocol (IBC).

For further documentation, please visit [EVMOS Documentation](https://docs.evmos.org/).

## Using Pyxis on EVMOS

:::info Note
An EVMOS wallet private key will generate two different addresses (Hex and Bech32), but multi-sig operations will only work using the Bech32 address (evmos1sw6dxh8dgqw5txz...).
:::

### Wallet support

Pyxis currently supports multi-sig on EVMOS using Keplr wallet. There should be more wallets that support EVMOS in the future.

### A Safe on EVMOS

An EVMOS safe is like a safe on any other network that consists of a pre-defined combination of owner and signature threshold. The below safe has two owners, and each outgoing transaction requires a signature from any of the two.

![An EVMOS safe](/img/pyxis-safe/extras/evmos/evmos_1.png)

Creating a Safe on EVMOS requires the same process as on other testnets: Connect wallet - Owner creates a safe - Other owners allow the safe - Done. 

![An EVMOS safe is about to be created](/img/pyxis-safe/extras/evmos/evmos_2.png)

Sending assets out of the safe requires the same process of confirmation and execution: 

![An EVMOS safe is about to send out an asset](/img/pyxis-safe/extras/evmos/evmos_3.gif)

Have a look at the transaction history of a safe as below:

![An EVMOS safe transaction history](/img/pyxis-safe/extras/evmos/evmos_4.png)

## The future

Multi-sig on Pyxis gives an alternative option for asset management on EVMOS besides existing EVM-compatible multi-sig solutions. This will surely give a high level of flexibility for EVMOS adopters as well as enable IBC transactions for organization-managed assets.

We are more than happy that we made Pyxis possible for such a promising network as EVMOS and will look forward to having more EVMOS Dapps and protocols integrated into our product.

Happy multi-signing, Evmos-ers!