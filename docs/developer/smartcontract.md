---
sidebar_position: 1
---

# Smart Contract on Aura Network

Aura uses [CosmWasm](https://cosmwasm.com/), a WebAssembly smart contract platform (or module) that integrate natively with Cosmos SDK. Smart contracts are written in RUST, compiled into Wasm then uplodaed to the Aura chain.

You can learn more about CosmWasm in the official Cosmwasm [document](https://docs.cosmwasm.com/docs/1.0/). 

## 1. Prerequisites

### Rust

Make sure you have all required binaries for programming with Rust and Wasm.
The standard approach is to use rustup to maintain dependencies and handle updating multiple versions of cargo(v1.55.0+) and rustc, which you will be using.  

After [install rustup tool](https://rustup.rs/), make sure you have the wasm32 target:
```sh
rustup target list --installed
rustup target add wasm32-unknown-unknown
```

### Cargo

Install [cargo-generate](https://github.com/ashleygwilliams/cargo-generate) and cargo-run-script.
If not installed, please run the command below:

```sh
cargo install cargo-generate --features vendored-openssl
cargo install cargo-run-script
```

## 2. Creating a new contract from template

Now, create your new contract.
Go to the folder in which you want to place it and run:

**Latest**

```sh
cargo generate --git https://github.com/CosmWasm/cw-template.git --name PROJECT_NAME
````

**Older Version**

Pass version as branch flag:

```sh
cargo generate --git https://github.com/aura-nw/cw-template.git --branch <version> --name PROJECT_NAME
```

You will now have a new folder called `PROJECT_NAME` (I hope you changed that to something else)
containing a simple working contract and build system that you can customize.

### Add a git Remote

After generating, you have a initialized local git repo, but no commits, and no remote.
Go to a server (eg. github) and create a new upstream repo (called `YOUR-GIT-URL` below).
Then run the following:

```sh
# this is needed to create a valid Cargo.lock file
cargo check
git branch -M main
git add .
git commit -m 'Initial Commit'
git remote add origin YOUR-GIT-URL
git push -u origin main
```

## 3. Developing the contract

We will start with a very simple tutorial of a Flower Store where you can add new flowers,selling and retrieving information from the chain.

### 3.1 Defining the State

This is basically a key-value storage that contains the state of the flower store. 
At [src/state.rs](https://github.com/aura-nw/flower-store-contract/blob/main/src/state.rs), we will create a state with the name _Flower_. We will also interact with the state through 2 functions _store_ and _store_query_.

```Rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Storage;
use cosmwasm_storage::{bucket, bucket_read, Bucket, ReadonlyBucket};

static STORE_KEY: &[u8] = b"store";

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Flower {
    pub id: String,
    pub name: String,
    pub amount: i32,
    pub price: i32,
}

pub fn store(storage: &mut dyn Storage) -> Bucket<Flower> {
    bucket(storage, STORE_KEY)
}

pub fn store_query(storage: &dyn Storage) -> ReadonlyBucket<Flower> {
    bucket_read(storage, STORE_KEY)
}
```

### 3.2 Constructing messages

Next we want to update the file [src/msg.rs](https://github.com/aura-nw/flower-store-contract/blob/main/src/msg.rs) where the contract's input/out messages are defined.  
There are 3 basic types of messages:  
- InstantiateMsg
- ExecuteMsg
- QueryMsg

#### A. InstantiateMsg


InstantiateMsg are the data and functions that need to be initialized for the contract. In this particular case we are trying to create an initial flower for the store with amount and price and default id will be "0".  

```Rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
    pub name: String,
    pub amount: i32,
    pub price: i32,
}
```

### ExecuteMsg
How ExecuteMsg is defined will depend on the functions to be developed, so it will be presented as an enum. We will define 2 message AddNew and Sell for store management functions.

```Rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    AddNew {
        id: String,
        name: String,
        amount: i32,
        price: i32,
    },
    Sell {
        id: String,
        amount: i32,
    },
}
```

### QueryMsg
We will define the simplest message with the only required information being the id of the flower, and the output to describe what the returned message should look like we have a FlowerInfoResponse.

```Rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    // GetFlower returns the flower's information
    GetFlower { id: String },
}

// We define a custom struct for each query response
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct FlowerInfoResponse {
    pub flower: Option<Flower>,
}
```