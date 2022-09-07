---
id: install
title: Install requirements
---

# Installing Prerequisites
Aura uses [CosmWasm](https://cosmwasm.com/), a WebAssembly smart contract platform (or module) that integrate natively with Cosmos SDK. Smart contracts are written in RUST, compiled into Wasm then uplodaed to the Aura chain.

You can learn more about CosmWasm in the official Cosmwasm [document](https://docs.cosmwasm.com/docs/1.0/) and before developing dApp on AURA, you must install some requirements.

### Golang
You can set up golang following the [official documentation](https://github.com/golang/go/wiki#working-with-go). The latest versions of aurad require go version v1.18+.

### Rust
Make sure you have all required binaries for programming with Rust and Wasm. The standard approach is to use `rustup` to maintain dependencies and handle updating multiple versions of `cargo` (v1.55.0+) and `rustc`, which you will be using.  

After [install rustup tool](https://rustup.rs/), make sure you have the wasm32 target:
```sh
rustup target list --installed
rustup target add wasm32-unknown-unknown
```

### Cargo generate
Install [cargo-generate](https://github.com/ashleygwilliams/cargo-generate) and cargo-run-script. If not installed, please run the command below:
```
cargo install cargo-generate --features vendored-openssl
cargo install cargo-run-script
```

### Aurad
To communicate with the contract you need install Aurad. After pulling the source code of [Aurad](https://github.com/aura-nw/aura), you can move to the aura directory and create `aurad` bin using `Makefile`:
```
make
```
The `aurad` bin file is located on `${source_directory}/build/` or `GO_PATH` (default `~/go/bin/`)
