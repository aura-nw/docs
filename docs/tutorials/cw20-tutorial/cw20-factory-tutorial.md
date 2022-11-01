# Build a CW20 token factory

In this tutorial, you'll build a CW20 token factory. A token factory allows any Aura address (including a contract) to mint a new CW20 token.

## Prerequisites

Use the following guides to set up your environment:

- [Set up Environment](../zero-to-hero-tutorial/1.Environment.md)

You'll also need: 

- An IDE or text editor of your choice. This tutorial will use Visual Studio Code. 
- A command line interface

## Generate the CW20 Token Factory contract

Now, create your cw20 token factory. Go to the folder in which you want to place it and run:
```bash
cargo generate --git https://github.com/CosmWasm/cw-template.git --name cw20-token-factory
```
You will now have a new folder called `cw20-token-factory` containing a simple working contract and build system that you can customize.