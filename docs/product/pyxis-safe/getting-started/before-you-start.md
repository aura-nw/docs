---
sidebar_position: 1
title: Before you start
---
This section should help you be well-prepared before you start multi-signing. 

## Environments

Pyxis Safe currently has 2 public stable environments with the same functionality:

|Environment|URL|Supported networks|
|----------|----------|----------|
|Production|https://app.pyxis.aura.network/ |Aura Mainnet|
|Public Test|https://test.pyxis.aura.network/ |Aura Testnet, Cosmos Hub Testnet, Evmos Testnet, Canto Mainnet|

#What you will need

- Stable internet connection (of course);
- Personal wallets properly set up using Keplr or C98 wallets: All co-owners must have a personal wallet connected. As of now, Pyxis Safe supports wallets as in the below table:

|Wallet|C98 Wallet|Keplr Wallet|
|----------|----------|----------|
|Aura Mainnet (xstaxy-1)							|✅|✅|
|Aura Testnet (euphoria-2, serenity-testnet-001)	|✅|✅|
|Cosmos Hub Testnet (theta-testnet-001)				|✅|✅|
|Evmos Testnet	(evmos_9000-4)						|❌|✅|
|Canto Mainnet	(canto_7700-1)						|❌|✅|

##Usage practices

There are many ways to set up a multi-sig wallet for various purposes. Those below notices might be helpful for you in the practice of creating one:
- The sign threshold should not be the value of 1. Setting the signing threshold to 1 is against the purpose of multi-signing. It exposes the wallet to higher risk than a personal wallet, as the wallet will be compromised if any of the owner's private keys are leaked.
- There are some good practices below that you might use as reference:
	- Use a multi-sig wallet as a 2-factor authentication: Set up a Safe using three of your wallets as owners with a threshold of 2. Use two wallets to sign transactions while keeping the other wallet safe and rarely used for backup purposes.
	- Peer-reviewed transactions: Setting up a Safe with the desired number of owners, like 5, but with a threshold of 3. This will ensure that every transaction that one creates will be reviewed by two other owners before execution.
