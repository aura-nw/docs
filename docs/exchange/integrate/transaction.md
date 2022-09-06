---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a transaction
This document describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.

## 1. Using the CLI 
For example, running the following command to send 1 eAura from `A` to `B`:
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000ueaura --chain-id euphoria-1 --keyring-backend os --node https://rpc.euphoria.aura.network:443
```

</TabItem>
</Tabs>

It will run the following steps:
- generate a transaction with one `Msg` (`x/bank`'s `MsgSend`), and print the generated transaction to the console
- ask `A owner` for confirmation to send transaction from the `A account`
- fetch `A information` from the keyring `OS`
- sign the generated transaction with the keyring's account
- broadcast the signed transaction to the network (CLI connects to the public RPC endpoint)

It's possible to run the steps individually

### 1.1. Generating a transaction
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000ueaura --chain-id euphoria-1 --keyring-backend os --generate-only > unsigned_tx.json  
```

</TabItem>
</Tabs>

### 1.2. Signing a transaction
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```
aurad tx sign unsigned_tx.json --chain-id euphoria-1 --keyring-backend os --from $A_ADDRESS --output-document signed_tx.json
```
</TabItem>
</Tabs>

### 1.3. Broadcasting a transaction
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```
aurad tx broadcast signed_tx.json --node https://rpc.euphoria.aura.network:443
```

</TabItem>
</Tabs>

## 2. Using CosmJS (JavaScript & TypeScript)
You can construct, sign and broadcast a transaction using CosmJS as follow

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```javascript
import { readFile } from "fs/promises"
import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@cosmjs/proto-signing"
import { SigningStargateClient, StargateClient } from "@cosmjs/stargate"

const rpc = "https://rpc.euphoria.aura.network"
const sampleAccount = "aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl"

const getSampleSignerFromMnemonic = async (): Promise<OfflineDirectSigner> => {
    return DirectSecp256k1HdWallet.fromMnemonic((await readFile("./sample.mnemonic.key")).toString(), {
        prefix: "aura",
    })
}

const runAll = async(): Promise<void> => {
    // Construct a transaction
    const sampleSigner: OfflineDirectSigner = await getSampleSignerFromMnemonic()
    const eledra = (await sampleSigner.getAccounts())[0].address
    console.log("sample's address from signer", eledra)
    const signingClient = await SigningStargateClient.connectWithSigner(rpc, sampleSigner)

    const result = await signingClient.sendTokens(eledra, sampleAccount, [{ denom: "ueaura", amount: "100000" }], {
        amount: [{ denom: "ueaura", amount: "200" }],
        gas: "200000",
    })
    console.log("Transfer result:", result)
}

runAll()
```

</TabItem>
</Tabs>