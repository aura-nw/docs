---
sidebar_position: 3
sidebar_label: Transactions Information
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transactions Information
Transactions in Aura Network are easily created. There are several types of different transactions that can be executed. For general usage, 
you can check out the `aurad` CLI API reference.

Aura transactions also support **memo** features. Once a transaction is broadcasted, it will be stuck in the mempool until the node decides
to broadcast it. 

:::caution
The transaction behavior in the mempool (time-to-live) depends on the node it was broadcasted to, since it is a configurable value.
:::

## Transaction details

You can access any transaction detailed information with the LCD. Here is an example:

```
curl -X GET "https://lcd.euphoria.aura.network/cosmos/tx/v1beta1/txs/220F3F52637AD5609743BE7EF4FBD8A262B971CB8C4E2548BAA1EBCE967A4C07" -H "accept: application/json"
```
This will include spending and logs in case a smart contract was invoked.

# Create a transaction
This part describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.

## 1. Using the CLI 
For example, running the following command to send 1 eAura from `A` to `B`:
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000ueaura --chain-id euphoria-2 --keyring-backend os --node https://rpc.euphoria.aura.network:443
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
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000ueaura --chain-id euphoria-2 --keyring-backend os --generate-only > unsigned_tx.json  
```

</TabItem>
</Tabs>

### 1.2. Signing a transaction
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```
aurad tx sign unsigned_tx.json --chain-id euphoria-2 --keyring-backend os --from $A_ADDRESS --output-document signed_tx.json
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