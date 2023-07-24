---
sidebar_position: 0
title: Overview
hide_table_of_contents: false
---
import {DocsCards} from '@site/src/components/Cards/Cards.js';

In this section we will cover some useful tutorials for jump-starting your development in *Aura*.

## Simple Template
Build and deploy the simplest of templates to begin playing around in Aura.

## Counter
Bootstrap a quick dApp in Aura Serenity Testnet with a quick template for a Counter smart contract and frontend.

## From Solidity to CosmWasm
Learn how the wasm smart contracts differentiate from solidity contracts and how you can easily port any smart contract you already have to wasm. 

## Fungible tokens - the common asset
Fungible tokens can be used for almost anything, from a currency, share, votes, wrappers, etc. This is the most common and widely-used token standard in the crypto industry. They exist in many blockchains with many different variations of source code, but nevertheless, the same concept and mostly the same mechanism.

CW20 is the fungible token standard we use in AURA. It has the same behavior you would expect from any fungible token. 

## Non-fungible tokens - the unique asset
Non-fungible tokens gained incredible traction very quick due to its ability to be a part of a set but at the same time, being unique and non interchangeable. One might have two CW721 tokens from the same origins but one might be much more valuable than the other.

## Resources

<DocsCards itemsList={
[  
  [
    {
      title: "Counter", 
      description: "Learn how to build a Wasm dApp.", 
      link:"counter", 
    },
    {
      title: "Solidity to CosmWasm", 
      description: "Jump-start your Wasm knowledge if you come from a Solidity background.", 
      link:"solidity-to-cosmwasm", 
    },
  ],
  [
    {
      title: "Intro to CW20", 
      description: "Learn more about the fungible CW20 token standard in AURA", 
      link:"fungible-tokens/cw20-intro", 
    },
    {
      title: "Intro to CW721", 
      description: "Learn more about the non-fungible CW721 token standard in AURA", 
      link:"fungible-tokens/cw721-intro", 
    }
  ]
]
} />