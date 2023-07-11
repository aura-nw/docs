---
sidebar_position: 0
title: "Smart Contracts"
---
import {DocsCards} from '@site/src/components/Cards/Cards.js';

Smart contracts are simple programs that live in a AURA network. As any modern application, smart contracts store data and expose methods to interact with them.

They are written in human-readable languages, then compiled and deployed to an account. This means smart contracts can hold real value in them, but unlike a regular account, they are not controlled like one. The only way to interact with a smart contract it's via its public methods.

As a developer, it is important to understand that AURA smart contracts:
- Have **limited** computational resources.
- Interact with other contracts in an **asynchronous** way.
- Deal with **real value**, therefore, security must always be a priority.


## Stack
AURA smart contracts are written in [Rust](https://www.rust-lang.org/) with [CosmWasm](https://cosmwasm.com/), a WebAssembly smart contract platform (or module) that integrates natively with Cosmos SDK to write smart contracts in AURA.

While it is not a requirement to be an expert in `Rust` or `CosmWasm`, during these docs we will assume you have basic knowledge on them. If you feel lost at any point, please go check out their documentation.

CosmWasm is a smart contracting platform built for the Cosmos ecosystem. CosmWasm is written as a module that can plug into the Cosmos SDK. It runs the Web Assembly (or Wasm) virtual machine, allowing developers to create smart contracts in various languages. Currently, it supports smart contracts written in Rust.

## Overview

<DocsCards itemsList={
[  [
    {
      title: "Contract Anatomy", 
      description: "Learn about the file structure and modules within a CosmWasm smart contract.", 
      link: "anatomy", 
    },
    {
      title: "Deploy", 
      description: "Learn to deploy your smart contract using the Aura CLI.", 
      link:"deploy", 
    }
  ],
  [
    {
      title: "Interact", 
      description: "Get started with interactions directly to the contracts.", 
      link:"interact", 
    },
  ]]
} />