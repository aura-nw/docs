---
sidebar_position: 0
title: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {DocsCards} from '@site/src/components/Cards/Cards.js';
import ContactUs from '@site/src/components/ContactUs/ContactUs.mdx';

<div id="img-wrapper">
    <img src="/img/aurascan/logo.png" alt="aurascan-logo"/>
</div>


Aurascan is a not only a blockchain explorer, it's also a decentralized smart contracts verifier and analytical platform for Aura Network.

Similar to Etherscan or Mintscan, you can view in detail all relevant on-chain information such as: accounts, blocks, transactions, validators, proposals, smart contracts, tokens, NFTs, and more.

## Deployments
Aurascan exists for all Aura networks: **Serenity Testnet** (`auradev_1236-2`), **Euphoria Staging Testnet** (`aura_6321-3`) and of course **Xstaxy Mainnet** (`xstaxy-1`), ensuring both developers and users have an easy way to review anything.

:::info
You can find the Github repository for Aurascan here: https://github.com/aura-nw/aurascan
:::

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

* Environment: Production/Mainnet
* Network ID: `xstaxy-1`
* URL: https://aurascan.io


  </TabItem>
  <TabItem value="euphoria" label="Euphoria">

* Environment: Staging
* Network ID: `aura_6321-3`
* URL: https://euphoria.aurascan.io


  </TabItem>
  <TabItem value="serenity" label="Serenity">

* Environment: Testing
* Network ID: `auradev_1236-2`
* URL: https://serenity.aurascan.io


  </TabItem>
</Tabs>
<br/>

Aura Mainnet `xstaxy-1` handles real value and should only be used once proper testing has taken place. For this reason we recommend developers to use both Euphoria `aura_6321-3` and Serenity `auradev_1236-2` for extensive testing of all functionalities and security of your project before deploying onto mainnet. Take full advantage of Aurascan to make sure everything works as expected.

If you have any questions or feedback, visit our community channels on Discord and Telegram to ask as many questions as you want. We are eager to help!


## Recommended Topics
Check out these recommended topics to get started exploring Aurascan in full detail.

<DocsCards itemsList={
[  [
    {
      title: "Connect Your Wallet", 
      description: "Before staking or voting on proposals with Aurascan, you will have to connect your personal wallet.", 
      link:"getting-started/connect_your_wallet", 
    },
    {
      title: "Validators", 
      description: "Review all relevant details if you're interested in becoming an Aura Validator.", 
      link:"getting-started/validator", 
    }
  ],
  [
    {
      title: "Transactions", 
      description: "Learn how to interpret transactions in full detail.", 
      link:"getting-started/transaction", 
    },
    {
      title: "Staking", 
      description: "Learn how to Stake your Aura with Aurascan and how to choose a trusted validator.", 
      link:"getting-started/stake", 
    }
  ],
  [
    {
      title: "Advanced Topics", 
      description: "Already familiar with the Cosmos ecosystem? Learn how to take advantage of what Aurascan has to offer.", 
      link:"advanced-topics", 
    },
    {
      title: "FAQs", 
      description: "View the most commonly asked questions on Aurascan.", 
      link:"advanced-topics/FAQs", 
    }
  ]]
} />


<ContactUs/>