---
sidebar_position: 1
---
# Accounts

## Introduction

An _account_ designates a pair of _public key_ `PubKey` and _private key_ `PrivKey`. The `PubKey` can be derived to generate various `Addresses`, which are used to identify users (among other parties) in the application. `Addresses` are also associated with `messages` to identify the sender of the `message`. The `PrivKey` is used to generate `digital signatures` to prove that an `Address` associated with the `PrivKey` approved of a given `message`.

## Adding keys to the keyring

The keyring holds the private/public keypairs used to interact with a node. The private key can be stored in different locations, called "backends". There are some available backends for the keyring:

- The `OS` backend: relies on operating system-specific defaults to handle key storage securely. Typically, an operating system's credential sub-system handles password prompts, private keys storage, and user sessions according to the user's password policies
- The `file` backend: stores the keyring encrypted within the app's configuration directory. This keyring will request a password each time it is accessed, which may occur multiple times in a single command resulting in repeated password prompts
- The `test` backend: a password-less variation of the file backend. Keys are stored unencrypted on disk.

You can interact will keyring via `keys` subcommand

For example, to create a new key in the keyring, run the command:
```
# Add key with the name <key_name> to the `test` backend
aurad keys add <key_name> --keyring-backend test
```

## Querying account information

### Account details

You can get account detail by querying to the auth module using account's address
```
aurad query auth account <address> --node https://rpc.euphoria.aura.network:443
```

### Account balance

Check the balance of the account
```
aurad query bank balances <address> --node https://rpc.euphoria.aura.network:443
```
