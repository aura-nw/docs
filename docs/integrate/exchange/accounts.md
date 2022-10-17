---
sidebar_position: 2
sidebar_label: Account Management
---
# Aura accounts integration

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 1. Introduction

An _account_ designates a pair of _public key_ `PubKey` and _private key_ `PrivKey`. 

- The `PubKey` can be derived to generate various `Addresses`, which are used to identify users (among other parties) in the application. `Addresses` are also associated with `messages` to identify the sender of the `message`. 
- The `PrivKey` is used to generate `digital signatures` to prove that an `Address` associated with the `PrivKey` approved of a given `message`.

## 2. Key management

The term "keyring" refers to the object holding the private/public keypairs used to interact with a node. The private key can be stored in different locations, called "backends". There are some available backends for the keyring:

- The `OS` backend: relies on operating system-specific defaults to handle key storage securely. Typically, an operating system's credential sub-system handles password prompts, private keys storage, and user sessions according to the user's password policies
- The `file` backend: stores the keyring encrypted within the app's configuration directory. This keyring will request a password each time it is accessed, which may occur multiple times in a single command resulting in repeated password prompts
- The `test` backend: a password-less variation of the file backend. Keys are stored unencrypted on disk.

You can interact will keyring via `keys` subcommand

For example, to create a new key in the keyring, run the command:
```
# Add key with the name <key_name> to the `os` backend
aurad keys add <key_name> --keyring-backend os
```

## 3. Querying account information from aurad CLI

### Account details

You can get account detail by querying to the auth module using account's address

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
aurad query auth account <address> --node https://rpc.euphoria.aura.network:443
```

</TabItem>
</Tabs>

Sample return:

```json
'@type': /cosmos.auth.v1beta1.BaseAccount
account_number: "143"
address: aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl
pub_key:
  '@type': /cosmos.crypto.secp256k1.PubKey
  key: ArKbZcBnlPiczcYbS3son3wilCudNHV5fO2SHfwCgUfG
sequence: "19"
```

### Account balance

Check the balance of the account

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
aurad query bank balances <address> --node https://rpc.euphoria.aura.network:443
```

Sample return:

```json
balances:
- amount: "304744"
  denom: ueaura
pagination:
  next_key: null
  total: "0"
```

</TabItem>
</Tabs>

## 4. Using HTTP endpoints:
You can directly use [LCD endpoints](http://localhost:3000/developer/endpoints) (light client daemon) provided by Aura nodes (public or your own full node) to integrate:

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
curl -X GET "https://lcd.euphoria.aura.network/cosmos/auth/v1beta1/accounts/aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl" -H  "accept: application/json"
```

```bash
curl -X GET "https://lcd.euphoria.aura.network/cosmos/bank/v1beta1/balances/aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl" -H  "accept: application/json"
```

</TabItem>
</Tabs>

Detail references of each API is specified in the LCD [Swagger](https://lcd.euphoria.aura.network/) document.

## 5. Using Cosmjs

You can also do same procedures using [CosmJS](https://github.com/cosmos/cosmjs)

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```javascript
import { StargateClient } from "@cosmjs/stargate"

const rpc = "https://rpc.euphoria.aura.network"
const sampleAccount = "aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl"

const runAll = async(): Promise<void> => {
    const client = await StargateClient.connect(rpc)
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())

    console.log(
        "sample account",
        await client.getAccount(sampleAccount)
    )

    console.log(
        "sample balances:",
        await client.getAllBalances(sampleAccount)
    )
}

runAll()
```

</TabItem>
</Tabs>