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
curl -X GET "https://lcd.aura.network/cosmos/tx/v1beta1/txs/0A74523C72BE71ECFA13917DCB42DB752A9083FAAD24E5F051AFFA61151EB0C0" -H "accept: application/json"
```
This will include spending and logs in case a smart contract was invoked.

# Create a transaction
This part describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.

## 1. Using the CLI 
For example, running the following command to send 1 eAura from `A` to `B`:

```bash
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000uaura --chain-id aura_6322-2 --keyring-backend os --node https://rpc.aura.network:443
```

It will run the following steps:
- generate a transaction with one `Msg` (`x/bank`'s `MsgSend`), and print the generated transaction to the console
- ask `A owner` for confirmation to send transaction from the `A account`
- fetch `A information` from the keyring `OS`
- sign the generated transaction with the keyring's account
- broadcast the signed transaction to the network (CLI connects to the public RPC endpoint)

It's possible to run the steps individually

### 1.1. Generating a transaction

```
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000uaura --chain-id aura_6322-2 --keyring-backend os --generate-only > unsigned_tx.json  
```


### 1.2. Signing a transaction

```
aurad tx sign unsigned_tx.json --chain-id aura_6322-2 --keyring-backend os --from $A_ADDRESS --output-document signed_tx.json
```

### 1.3. Broadcasting a transaction

```
aurad tx broadcast signed_tx.json --node https://rpc.aura.network:443
```

## 2. Using CosmJS (JavaScript & TypeScript)
You can construct, sign and broadcast a transaction using CosmJS as follow

```javascript
import { readFile } from "fs/promises"
import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@cosmjs/proto-signing"
import { SigningStargateClient, StargateClient } from "@cosmjs/stargate"

const rpc = "https://rpc.aura.network"
const sampleAccount = "aura1wgxdyjkul5hn0jx8y9rfpe8r2eyq5jkvsy0akl"

const getSampleSignerFromMnemonic = async (): Promise<OfflineDirectSigner> => {
    return DirectSecp256k1HdWallet.fromMnemonic((await readFile("./sample.mnemonic.key")).toString(), {
        prefix: "aura",
    })
}

const runAll = async(): Promise<void> => {
    // Construct a transaction
    const sampleSigner: OfflineDirectSigner = await getSampleSignerFromMnemonic()
    const account = (await sampleSigner.getAccounts())[0].address
    console.log("sample's address from signer", account)
    const signingClient = await SigningStargateClient.connectWithSigner(rpc, sampleSigner)

    const result = await signingClient.sendTokens(account, sampleAccount, [{ denom: "uaura", amount: "100000" }], {
        amount: [{ denom: "uaura", amount: "200" }],
        gas: "200000",
    })
    console.log("Transfer result:", result)
}

runAll()
```

## 3. Using Aura EVM with ethers.js

This is an example script using [ethers.js@v5](https://docs.ethers.org/v5/) to send a transaction on the Aura network using EVM.

1. Initialize the Ethers.js provider with the Aura EVM RPC endpoint
```javascript
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://jsonrpc.aura.network');
```

2. Set up a wallet
```javascript
const privateKey = 'YOUR_PRIVATE_KEY';
const wallet = new ethers.Wallet(privateKey, provider);
```

3. Construct a transaction
```javascript
const generateSendTx = async (wallet, recipient, amountInAura) => {
  const nonce = await wallet.getTransactionCount();
  const tx = {
    chainId: 6322, // Aura EVM chain-id
    nonce,
    to: recipient,
    value: ethers.utils.parseEther(amountInAura), // Aura EVM uses 18 decimals
    gasLimit: 21000n,
    gasPrice: ethers.utils.parseUnits('1', 'gwei'), // Gas price in gwei
  };

  return tx;
}
```

4. Sign and send the transaction
```javascript
const signTransaction = async () => {
  try {
    const recipient = '0xRecipientAddress'; // The recipient's address
    const amountInAura = '1'; // Send 1 Aura
    const tx = await generateSendTx(wallet, recipient, amountInAura);

    // Sign the transaction
    const signedTransaction = await wallet.signTransaction(tx);
    console.log('Signed Transaction:', signedTransaction);

    // Broadcast the transaction
    const txResponse = await provider.sendTransaction(signedTransaction);
    console.log('Transaction Response:', txResponse);

    // Wait for the transaction to be mined
    const receipt = await txResponse.wait();
    console.log('Transaction Receipt:', receipt);
  } catch (error) {
    console.error('Error:', error);
  }
};

signTransaction();
```

