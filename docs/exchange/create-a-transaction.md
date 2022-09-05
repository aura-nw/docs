---
sidebar_position: 2
---
# Create a transaction
This document describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.

## Using the CLI 
For example, running the following command to send 1 Aura from `A` to `B`:
```
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000uaura --chain-id my-test-chain --keyring-backend test
```
It will run the following steps:
- generate a transaction with one `Msg` (`x/bank`'s `MsgSend`), and print the generated transaction to the console
- ask `A owner` for confirmation to send transaction from the `A account`
- Fetch `A information` from the keyring 
- sign the generated transaction with the keyring's account
- broadcast the signed transaction to the network (CLI connects to the node's RPC endpoint)

It's possible to run the steps individually

### Generating a transaction
```
aurad tx bank send $A_ADDRESS $B_ADDRESS 1000000uaura --chain-id my-test-chain --keyring-backend test --generate-only > unsigned_tx.json 
```

### Signing a transaction
```
aurad tx sign unsigned_tx.json --chain-id my-test-chain --keyring-backend test --from $A_ADDRESS --output-document signed_tx.json
```

### Broadcasting a transaction
```
aurad tx broadcast signed_tx.json
```

## Using CosmJS (JavaScript & TypeScript)
CosmJS aims to build client libraries in JavaScript that can be embedded in web applications. Please see https://cosmos.github.io/cosmjs for more information