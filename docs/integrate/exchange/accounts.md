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
Since Aura support both Cosmos and EVM, native accounts have the following formats: 
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

An EVM address can be converted to and from a Cosmos address with the following code:
```js
import { ETH } from '@evmos/address-converter';
import { fromBech32, toBech32 } from '@cosmjs/encoding';

function makeBech32Encoder(prefix: string) {
  return (data: Buffer) => toBech32(prefix, data);
}

function makeBech32Decoder(currentPrefix: string) {
  return (input: string) => {
    const { prefix, data } = fromBech32(input);
    if (prefix !== currentPrefix) {
      throw Error('Unrecognised address format');
    }
    return Buffer.from(data);
  };
}

function convertBech32AddressToEthAddress(
  prefix: string,
  bech32Address: string
): string {
  const data = makeBech32Decoder(prefix)(bech32Address);
  return ETH.encoder(data);
}

function convertEthAddressToBech32Address(
  prefix: string,
  ethAddress: string
): string {
  const data = ETH.decoder(ethAddress);
  return makeBech32Encoder(prefix)(data);
}

> convertBech32AddressToEthAddress('aura', 'aura1cxa3axrm9qz22ctk0yppuh90x38afqc7enzckj')
'0xc1BB1E987B2804a5617679021e5caf344FD4831e'

> convertEthAddressToBech32Address('aura', '0xc1BB1E987B2804a5617679021e5caf344FD4831e')
'aura1cxa3axrm9qz22ctk0yppuh90x38afqc7enzckj'
```

**Important notes:** An account created by a EVM wallet (such as Metamask, Rabby, etc.) **cannot** be used to sign Cosmos transactions. The same goes for Cosmos wallets, which **cannot** sign EVM transactions. Therefore, an ERC20 token should only be sent to an account created by an EVM wallet, and vice versa.

### Account transaction history
Account history can be accessed with the LCD. To do so, you must specify the event condition you wish to query. It's based on Tendermint 
events. For example, to search transactions by event, you can do the following:

```bash
curl -X GET "https://lcd.aura.network/cosmos/tx/v1beta1/txs?events=msg.sender='aura1cxa3axrm9qz22ctk0yppuh90x38afqc7enzck'" -H "accept: application/json"
```

However, account history is a heavy operation and may DOS the node. If it is not critical, you can refer to our guide here to use Aura centralized indexing service:
- Cosmos transactions: https://docs.aura.network/integrate/wallet/cosmos/integrate
- EVM transactions: https://docs.aura.network/integrate/wallet/evm/integrate

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
### Cosmos endpoints
You can directly use [LCD endpoints](../../developer/1.getting-started/3.networks-info/1.cosmos-info.md) (light client daemon) provided by Aura nodes (public or your own full node) to integrate:

```bash
curl -X GET "https://lcd.aura.network/cosmos/auth/v1beta1/accounts/aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl" -H  "accept: application/json"
```

Detailed references of each API is specified in the testnet LCD [Swagger](https://lcd.euphoria.aura.network) document.

### EVM endpoints
You can use [JSON RPC endpoints](../../developer/1.getting-started/3.networks-info/2.evm-info.md) to query EVM information:

```bash
curl -X POST https://jsonrpc.aura.network \
-H "Content-Type: application/json" \
--data \
'
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x0ADfCCa4B2a1132F82488546AcA086D7E24EA324", "latest"],
  "id": 1
}
'           
```
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

## 6. Using Etherjs

```javascript
const { ethers } = require('ethers');

// Set up provider
const provider = new ethers.providers.JsonRpcProvider('https://jsonrpc.aura.network');

// Wallet address
const walletAddress = 'YOUR_WALLET_ADDRESS';

// Get balance
provider.getBalance(walletAddress)
  .then(balance => {
    // Convert balance to AURA (Divide by 10**18)
    const auraBalance = ethers.utils.formatEther(balance);
    console.log('Wallet balance:', auraBalance, 'AURA');
  })
  .catch(error => {
    console.error('Error getting balance:', error);
  });
```