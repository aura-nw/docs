---
sidebar_position: 0
title: Introduction
hide_table_of_contents: false
---
import {DocsCards} from '@site/src/components/Cards/Cards.js';
import ContactUs from '@site/src/components/ContactUs/ContactUs.mdx';

Hello there! Welcome to our documentation. Here you will learn everything about developing decentralized applications (dApp) in AURA. If you are new to smart contracts, do not worry. We will get you up to speed and you will be developing your own dApp in no time.

## Overview
AURA network is a smart contract chain that uses proof-of-stake (PoS) to achieve distributed consensus
among validators and confirm all transactions executed within. Like most blockchains, AURA is completely
transparent. Additionally, aura is a [permissioned](https://github.com/orgs/aura-nw/discussions/1) smart
contract blockchain which ensures no malicious contracts can be deployed on mainnet where real value is 
at stake.

AURA uses smart contracts to create decentralized applications. Deploying a one requires paying a gas fee
in AURA for the compiled code to be stored in the blockchain forever as well as for instantiation. 
**Once instantiated, the contract is immutable, so make sure your code is safe!**

## Smart Contracts
Smart contracts are simple programs that runs on the AURA Network. As any modern application, smart contracts store data and expose methods to interact with them.

They are written in human-readable languages, compiled and finally deployed to an account where everyone can interact with them and view all previously executed transactions. 

Anyone can write their own code and deploy onto AURA testnets freely or submit a request for mainnet deployment. They have many applications such as creating digital assets, marketplaces, games, etc. 

## First steps
Get started by [setting up your wallet](getting-started/wallet-creation) or if you 
already have your wallet setup, skip ahead to [setting up your development environment](getting-started/env-setup). 
Otherwise, check out these topics and happy hacking!

<DocsCards itemsList={
[  [
    {
      title: "Preparing Wallet", 
      description: "Learn to create and setup your AURA wallet with C98 Wallet or Kepler Wallet", 
      link:"getting-started/wallet-creation", 
    },
    {
      title: "Environment Setup", 
      description: "Install the required dependencies on your system to setup your development environment", 
      link:"getting-started/env-setup", 
    }
  ],
  [
    {
      title: "Intro to Contracts", 
      description: "Get an overview on a smart contract is in AURA Network", 
      link:"smart-contracts/intro", 
    },
    {
      title: "Contract Example", 
      description: "Develop your first smart contract in minutes", 
      link:"smart-contracts/anatomy", 
    }
  ],
  [
    {
      title: "Deploying", 
      description: "Learn to store your contract bytecode in the blockchain and initialize it.", 
      link:"smart-contracts/deploy", 
    },
    {
      title: "From Solidity to CosmWasm", 
      description: "Understand the differences and jump-start your CosmWasm knowledge.", 
      link:"smart-contracts/solidity-to-cosmwasm", 
    }
  ]]
}/>

## On this page

1. [Getting Started](getting-started)
    - [Preparing Development Wallet](getting-started/wallet-creation)
    - [Environment Setup](getting-started/env-setup)
    - [Networks Info](getting-started/networks-info)

3. [Smart Contracts](smart-contracts)
    - [Smart contract anatomy](smart-contracts/anatomy)
    - [Deploy a contract](smart-contracts/deploy)
    - [Interact with a contract](smart-contracts/interact)

4. [Tutorials](tutorials)
    - [Simple template](smart-contracts/examples/simple-template)
    - [Counter](smart-contracts/examples/counter)
    - [From Solidity to CosmWasm](smart-contracts/solidity-to-cosmwasm)

    4.1 [Fungible Tokens](tutorials/fungible-tokens)
      - [Introduction to CW20 (Fungible Tokens)](tutorials/fungible-tokens/cw20-intro)
      - [Create your own CW20 token on Aura Network](tutorials/fungible-tokens/create-your-own-cw20)
      - [What will we build](tutorials/fungible-tokens/what-will-we-build)
      - [What Are All These Files](tutorials/fungible-tokens/what-are-all-these-files)

    4.2 [Non-Fungible Tokens](tutorials/non-fungible-tokens)
      - [Introduction to CW721 (NFTs)](tutorials/non-fungible-tokens/cw721-intro)
      - [Overview the working](tutorials/non-fungible-tokens/what-will-we-build)
      - [Create dApp repository](tutorials/non-fungible-tokens/begin)
      - [Instantiate](tutorials/non-fungible-tokens/instantiate)
      - [Execute](tutorials/non-fungible-tokens/execute)
      - [Query](tutorials/non-fungible-tokens/query)
      - [Testing](tutorials/non-fungible-tokens/testing)
      - [Deploy our contract and play with it](tutorials/non-fungible-tokens/deploy)

4. [Multisig Management](multisig-cli)
    - [Generate a multisig key](multisig-cli/generate-multisig-key)
    - [Create a multisig transaction](multisig-cli/create-transaction)
    - [Signing a multisig transaction](multisig-cli/sign-tx)
    - [Broadcast a multisig transaction](multisig-cli/broadcast-tx)

5. [Concepts](concepts)
    - [Validator](concepts/validator)
    - [Delegator](concepts/delegator)
    - [Mint](concepts/mint)
    - [Commission](concepts/commission)
    - [Staking](concepts/staking)
    - [Slashing](concepts/slashing)
    - [Governance](concepts/Governance)
    - [Vesting](concepts/vesting)


<ContactUs />
