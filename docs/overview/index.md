---
sidebar_position: 0
sidebar_label: Home
title: Welcome to Aura Network 
hide_table_of_contents: true
---
import {FeatureList, Column, Feature} from "@site/src/components/featurelist"
import ContactUs from '@site/src/components/ContactUs/ContactUs.mdx';

This is the entry point to the Aura Ecosystem. Find anything you need to know to get started and get familiarized with Aura Network and some of the tools, products and services to get a jump-start on the ecosystem.

Start here on the **Basics** topic to get started on the basics, and if you are interested in more advanced topics, explore the different sections for [Developers](../developer/), [Validators](../validator/), [Integrate](../integrate/exchange/integrate.md) and others on the top bar.

## Browse the most basic topics

<FeatureList>
  <Column title="Basics" size="3">
    <Feature url="./intro" title="About Aura Network" subtitle="Learn the Basics about Aura Network, features and tokenomics" image="aura-logo.png"/>
    <Feature url="./start/wallet" title="Getting started" subtitle="Go through most basic steps to interact with Aura network" image="start.png"/>
    <Feature url="../developer/concept/validator" title="Concepts" subtitle="Learn about common components in the Aura chain" image="concept.png"/>
  </Column>
  <Column title="Developer Materials" size="3">
    <Feature url="../developer/smart-contracts/intro" title="Smart Contract" subtitle="Get an overview on how to write and deploy a smart contract in Aura Network" image="contract.png"/>
    <Feature url="../developer/getting-started/rpc" title="Public Endpoints" subtitle="Check out a list of public hosted APIs" image="api.png"/>
    <Feature url="../developer/tutorials" title="Tutorials" subtitle="Learn to build on Aura through a list of practical examples" image="tutorial.png"/>
  </Column>
  <Column title="Validator Handbook" size="3">
    <Feature url="../validator/running-a-fullnode" title="Running a Node" subtitle="Learn to run an Aura full node" image="node.png"/>
    <Feature url="../validator/networks-info" title="Network artifact" subtitle="Network information and resources to join Aura Network" image="artifact.png"/>
    <Feature url="../validator/running-a-validator" title="Become a Validator" subtitle="Become an Aura Network Validator" image="validator.png"/>
  </Column>
</FeatureList>

<br/>

## Explore Aura-built products

Here are some of the products built by the Aura Network core team. Get to know them!

<div className="container">
  <div className="row">
    <div className="col col--6" style={{paddingTop: "20px"}}>
      <a href="/product/aurascan/">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/img/feature/aurascan.jpg").default} alt="Learn" />
          </div>
          <div className="card__body">
            <h3>Aurascan - The best blockchain explorer.</h3>
            Beautiful, blazing fast blockchain explorer for the Cosmos ecosystem offering features from Mintscan and Etherscan, plus a touch of customization.
          </div>
        </div>
      </a>
    </div>
    <div className="col col--6" style={{paddingTop: "20px"}}>
      <a href="/product/pyxis-safe/">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/img/feature/pyxis.png").default} alt="Develop" />
          </div>
          <div className="card__body">
            <h3>Pyxis - The multi-signature solution for the Interchain</h3>
            A multi-signature tool that is compatible with all Cosmos-based chains. Inspired by the famous Gnosis Safe, but much safer.
          </div>
        </div>
      </a>
    </div>
  </div>
  <div className="row">
    <div className="col col--6" style={{paddingTop: "20px"}}>
      <a href="/product/horoscope/">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/img/feature/horoscope.png").default} alt="Develop" />
          </div>
          <div className="card__body">
            <h3>Horoscope - Indexers of the Interchain</h3>
            An indexing service for Cosmos-based chains. Offering advanced indexing of everything from addresses to NFTs, blazing fast and easy to integrate via Restful/GraphQL APIs.
          </div>
        </div>
      </a>
    </div>
    <div className="col col--6" style={{paddingTop: "20px"}}>
      <a href="https://docs.halotrade.zone">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/img/halotrade/og-image.jpg").default} alt="HaloTrade" />
          </div>
          <div className="card__body">
            <h3>HaloTrade - The Aura DeFi central hub</h3>
            The core DeFi utility in Aura. Swap tokens of any kind, yield farming, cross-chain transfers, NFTs, all your DeFi needs in one place.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<ContactUs />