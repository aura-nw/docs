---
sidebar_position: 2
sidebar_label: Accounts Information
---
# Aura accounts integration

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 1. Introduction

An _account_ designates a pair of _public key_ `PubKey` and _private key_ `PrivKey`. 

- The `PubKey` can be derived to generate various `Addresses`, which are used to identify users (among other parties) in the application. `Addresses` are also associated with `messages` to identify the sender of the `message`. 
- The `PrivKey` is used to generate `digital signatures` to prove that an `Address` associated with the `PrivKey` approved of a given `message`.

### Account validation
Aura native accounts have the following formats: 
- Cosmos address: `aura<bech32encoding>`. So an address should look like this: `aura1cxa3axrm9qz22ctk0yppuh90x38afqc7enzckj`.
- EVM address: `0x address`. Example: `0xc1bb1e987b2804a5617679021e5caf344fd4831e`

Validation can be performed locally with CosmJS like shown below:
```js
e = require('@cosmjs/encoding'); 
e.fromBech32('aura15f6wn3nymdnhnh5ddlq');
> e.fromBech32('aura15f6wn3nymdnhnh5ddlqletuptjag09tryrtpq5')
{
  prefix: 'aura',
  data: Uint8Array(20) [
    162, 116, 233, 198, 100,
    219, 103, 121, 222, 141,
    111, 193, 252, 175, 129,
     92, 186, 135, 149,  99
  ]
}
> e.fromBech32('aura15f6wn3nymdnhnh5ddlqletuptjag09tryrtpq5123')
Uncaught Error: Data too short
```

### Account transaction history
Account history can be accessed with the LCD. To do so, you must specify the event condition you wish to query. It's based on Tendermint 
events. For example, to search transactions by event, you can do the following:

```bash
curl -X GET "https://lcd.aura.network/cosmos/tx/v1beta1/txs?events=msg.sender='aura1cxa3axrm9qz22ctk0yppuh90x38afqc7enzck'" -H "accept: application/json"
```

However, account history is a dangerous operation and may DOS the node. If it is not critical, you can refer to our guide here to use Aura centralized indexing service:
https://docs.aura.network/integrate/wallet/transaction-history

## 2. Key management

The term "keyring" refers to the object holding the private/public keypairs used to interact with a node. The private key can be stored in different locations, called "backends". There are some available backends for the keyring:

- The `OS` backend: relies on operating system-specific defaults to handle key storage securely. Typically, an operating system's credential sub-system handles password prompts, private keys storage, and user sessions according to the user's password policies
- The `file` backend: stores the keyring encrypted within the app's configuration directory. This keyring will request a password each time it is accessed, which may occur multiple times in a single command resulting in repeated password prompts
- The `test` backend: a password-less variation of the file backend. Keys are stored unencrypted on disk.

You can interact will keyring via `keys` subcommand

For example, to create a new key in the keyring, run the command:
```bash
# Add key with the name <key_name> to the `os` backend
aurad keys add <key_name> --keyring-backend os
```

## 3. Querying account information from aurad CLI

Account and contracts information can be queried with the aurad CLI. For a full reference, check the CLI documentation.

### Account details

You can get account detail by querying to the auth module using account's address

```bash
aurad query auth account <address> --node https://rpc.aura.network:443
```

Sample response:

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

```bash
aurad query bank balances <address> --node https://rpc.aura.network:443
```

Sample response:

```json
balances:
- amount: "304744"
  denom: uaura
pagination:
  next_key: null
  total: "0"
```

## 4. Using HTTP endpoints:
You can directly use [LCD endpoints](http://localhost:3000/developer/endpoints) (light client daemon) provided by Aura nodes (public or your own full node) to integrate:


```bash
curl -X GET "https://lcd.aura.network/cosmos/auth/v1beta1/accounts/aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl" -H  "accept: application/json"
```

Detailed references of each API is specified in the LCD [Swagger](https://lcd.aura.network/) document.

## 5. Using Cosmjs

You can also do same procedures using [CosmJS](https://github.com/cosmos/cosmjs)

```javascript
import { StargateClient } from "@cosmjs/stargate"

const rpc = "https://rpc.aura.network"
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