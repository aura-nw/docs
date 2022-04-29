---
sidebar_position: 2
---

# Create your first NFT

In this tutorial you will learn how to build a AuraJS based dApp. The example dApp will allow you mint a CW721 tokens and tranfer to an other address wallet. The full link is [here](https://github.com/aura-nw/aura-dapp-example)

## Table of contents
* [Deploy cw721 contract](#deploy-cw721-contract)
* [Web3 Storage](#web3-storage)
* [Dapp example](#dapp-example)

## Prerequisites

- npm = 8.1.2
- node = 16.13.2

## Deploy cw721 contract
After the installation Aura Daemon we need to deploy cw721 contract to system.  For easy testing, the aura testnet is live. You can use this to deploy and run your contracts.
### Setting Up Environment
#### Go  
You can set up golang following the [official documentation](https://github.com/golang/go/wiki#working-with-go). The latest versions of aurad require go version v1.17+.   
#### Rust  
The standard approach is to use rustup to maintain dependencies and handle updating multiple versions of cargo and rustc, which you will be using.  

After [install rustup tool](https://rustup.rs/) make sure you have the wasm32 target:
```
rustup target list --installed
rustup target add wasm32-unknown-unknown
```
#### jq  
In the cli there will be use of jq to slice and filter and map and transform structured data. Please download and install jq [here](https://stedolan.github.io/jq/).

#### Create wallet
Aura Testnet RPC: https://rpc.serenity.aura.network:443
```sh
export RPC="https://rpc.serenity.aura.network:443" 
export CHAIN_ID=serenity-testnet-001
export NODE=(--node $RPC)
export TXFLAG=(${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.025uaura --gas auto --gas-adjustment 1.3)
```
Add wallet for deployment
```sh
aurad keys add wallet

- name: wallet
  type: local
  address: aura15j7k0s2lj8uv59c33u3nj0npxz9qecdelm4xlw
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AlY04ishkA5SGTXu/7ptgUIL9HffP3kAI9UKJgUfh/ni"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

permit train lounge swap upon blush acid firm vintage earth ability salt youth collect frequent twice settle often salon allow fiber permit skull hotel
```
You need to save the mnemonic for identification on the dapp later! 

#### Ask for token
To deploy and execute contract, you need to have some AURA token on tesnet.  
Please follow the guide to ask for tokens at [serenity-testnet discord channel](https://github.com/aura-nw/testnets/tree/main/serenity-testnet).

#### Get cw721 contract:
```sh
# get the contract
git clone https://github.com/aura-nw/cw-nfts.git
cd cw-nfts/contracts/cw721-base
# compile the wasm contract with stable toolchain
rustup default stable
RUSTFLAGS='-C link-arg=-s' cargo wasm
```
#### Deploy contract
```sh
# store contract
RES=$(aurad tx wasm store  ../../target/wasm32-unknown-unknown/release/cw721_base.wasm --from wallet $TXFLAG --output json)
# get the code id
CODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')
```
In case the cli store doesn't return fully tx_result, but only returns results with txhash, we will have to get the code_id by querying from RPC:
`CODE_ID=$(curl "https://rpc.serenity.aura.network/tx?hash=0x{txhash}"| jq -r ".result.tx_result.log"|jq -r ".[0].events[-1].attributes[0].value")`  
Please replace the txhash above with the txhash returned in the RES.  
```sh
# set variable
INIT='{"minter":"{minter_address}","name":"Aura NFT","symbol":"ANFT"}'
```

In `{minter_address}` above is the address value of the minter obtained when creating the wallet, in that case value will be `"aura15j7k0s2lj8uv59c33u3nj0npxz9qecdelm4xlw"`

```sh
# instantiate contract
aurad tx wasm instantiate $CODE_ID "$INIT" \
    --from wallet --label "cw721" $TXFLAG -y --no-admin
```

## Web3 Storage

This example will use ipfs to store the nft images. [Web3.Storage](https://web3.storage) is backed by the provable storage of [Filecoin](https://filecoin.io) and makes data accessible to your users over the public [IPFS](https://ipfs.io/) network.  
### Create Account
You need a Web3.Storage account to get your API token and manage your stored data. You can [sign up](https://docs.web3.storage/#create-an-account) for free using your email address or GitHub.  
### Get an API token
It only takes a few moments to get a free API token from Web3.Storage. This token enables you to interact with the Web3.Storage service without using the main website, enabling you to incorporate files stored using Web3.Storage directly into your applications and services.

## Dapp example

### Get Dapp example repository
```bash
git clone https://github.com/aura-nw/aura-dapp-example.git
```
### Install

```bash 
npm install
```
### Config
You need address of the contract:
```sh
echo $(aurad query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')
aura1zwv6feuzhy6a9wekh96cd57lsarmqlwxajlnrh
```
Create a .env file in the root directory of your project based on env_example file:
```bash
# mnemonic of client's wallet, which execute the contract. 
MNEMONIC='xxxxx xxxxx xxxxx'
# Aura Testnet RPC: https://rpc.serenity.aura.network:443
RPC='http://xxxx:xxx'

CONTRACT='xxxxx'

WEB3_STORAGE_TOKEN='xxxxx'
```
### Usage

```bash 
npm run start
```
### Swagger 
You can try testing dapps through swagger documentation
```bash 
npm run start-gendoc
```
![alt text](https://github.com/aura-nw/docs/blob/main/static/img/dapp-example-swagger1.PNG?raw=true)
![alt text](https://github.com/aura-nw/docs/blob/main/static/img/dapp-example-swagger2.PNG?raw=true)

## License

[MIT](https://github.com/aura-nw/aura-dapp-example/blob/main/LICENSE) License.


## Show your support

Give a ⭐️ if this project helped you!