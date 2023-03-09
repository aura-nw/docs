---
sidebar_position: 0
title: Overview
hide_table_of_contents: false
---
import {DocsCards} from '@site/src/components/Cards/Cards.js';

In this section we will cover both fungible (CW20) and non-fungible (CW721) token standards, each with a tutorial to help you get started when building your own.

#### Fungible tokens - the common asset
Fungible tokens can be used for almost anything, from a currency, share, votes, wrappers, etc. This is the most common and widely-used token standard in the crypto industry. They exist in many blockchains with many different variations of source code, but nevertheless, the same concept and mostly the same mechanism.

CW20 is the fungible token standard we use in AURA. It has the same behavior you would expect from any fungible token. 

#### Non-fungible tokens - the unique asset
Non-fungible tokens gained incredible traction very quick due to its ability to be a part of a set but at the same time, being unique and non interchangeable. One might have two CW721 tokens from the same origins but one might be much more valuable than the other.

## Resources

<DocsCards itemsList={
[  [
    {
      title: "Intro to CW20", 
      description: "Learn more about the fungible CW20 token standard in AURA", 
      link:"fungible-tokens/cw20-intro", 
    },
    {
      title: "Creating a CW20 Contract", 
      description: "Get started building your own CW20 token", 
      link:"fungible-tokens/create-your-cw20", 
    }
  ],
  [
    {
      title: "Intro to CW721", 
      description: "Learn more about the non-fungible CW721 token standard in AURA", 
      link:"fungible-tokens/cw721-intro", 
    },
    {
      title: "Creating a CW721 Contract", 
      description: "Get started building your own CW721 token", 
      link:"fungible-tokens/what-will-we-build", 
    }
  ]]
} />