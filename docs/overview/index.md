---
sidebar_position: 0
sidebar_label: Home
title: Welcome to the Aura Network 
hide_table_of_contents: true
---
import {FeatureList, Column, Feature} from "@site/src/components/featurelist"

This is the starting points when you want to learn about Aura ecosystem. If you are interested in more advanced topics, explore different sections for developers, validators, exchanges and others on the top bar.

## Browse the most basic topics

<FeatureList>
  <Column title="Overview" size="3">
    <Feature url="./intro" title="About Aura Network" subtitle="Learn the Basics about Aura Network, features and tokenomics" image="aura-logo.png"/>
    <Feature url="./overview/start/wallet" title="Getting started" subtitle="Go through most basic steps to interact with Aura network" image="start.png"/>
    <Feature url="./overview/protocol/validator" title="Concept" subtitle="Overview of different components in the Aura chain" image="concept.png"/>
  </Column>
  <Column title="Developer Materials" size="3">
    <Feature url="./developer" title="Smart Contract" subtitle="Get an overview on how to write and deploy a smart contract in Aura Network" image="contract.png"/>
    <Feature url="./developer/contract/rpc" title="Public Endpoints" subtitle="Check out a list of public hosted APIs" image="api.png"/>
    <Feature url="./tutorials/welcome" title="Tutorials" subtitle="Learn to build on Aura through a list of practical examples" image="tutorial.png"/>
  </Column>
  <Column title="Validator Handbook" size="3">
    <Feature url="./validator/running-a-fullnode" title="Running a Node" subtitle="Learn to run an Aura full node" image="node.png"/>
    <Feature url="./validator/networks-info" title="Network artifact" subtitle="Network information and resources to join Aura Network" image="artifact.png"/>
    <Feature url="./validator/running-a-validator" title="Become a Validator" subtitle="Become an Aura Network Validator" image="validator.png"/>
  </Column>
</FeatureList>

<br/>
---

## Explore Aura-built products

Here are some of the products built by the Aura Network core team.

<div class="container">
  <div class="row">
    <div class="col col--6">
      <a href="/product/aurascan/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/img/feature/aurascan.jpg").default} alt="Learn" />
          </div>
          <div class="card__body">
            <h3>Aurascan</h3>
            Beautiful, blazing fast blockchain explorer for the Cosmos ecosystem offering features from both Mintscan and Etherscan, and also a touch of customization.
          </div>
        </div>
      </a>
    </div>
    <div class="col col--6">
      <a href="product/pyxis-safe/">
        <div class="card">
          <div class="card__image">
            <img src={require("@site/static/img/feature/pyxis.png").default} alt="Develop" />
          </div>
          <div class="card__body">
            <h3>Pyxis - The multi-signature solution for the Interchain</h3>
            A multi-signature tool that is compatible with all Cosmos-based chains. Inspired by the famous Gnosis Safe, but much safer.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>