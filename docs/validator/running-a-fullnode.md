---
sidebar_position: 2
---

# Running a full Aura node

This is a detailed documentation for setting up a **Full node** on Aura network.

:::caution Remarks:
The following is the minimal setup to join Aura network.
If running a validator node, you should research validator security.
:::

## Prerequisites

- Go 1.18+
- GCC/G++ compiler

### Supported OS

We officially _support Linux only_. Other platforms may work, but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture.

### Commonly used ports

`aurad` uses the following TCP ports. Toggle their settings to fit your environment.

- *26656*: The default port for the P2P protocol. This port is used to communicate with other nodes and must be open to join a network. However, it does not have to be open to the public. For validator nodes, we recommend configuring `persistent_peers` and closing this port to the public.

Additional ports:

- *1317*: The default port for the Lite Client Daemon (LCD), which can be executed by `aurad rest-server`. The LCD provides an HTTP RESTful API layer to allow applications and services to interact with your `aurad instance` through RPC. You don’t need to open this port unless you have use for it.

- *26657*: The default port for the `Tendermint RPC protocol`. Because this port is used for querying and sending transactions, it must be open for serving queries from `aurad`.

## Networks information

Specify [the network](networks-info.md) you want to join by choosing the corresponding genesis file and seeds 

## Setup a full-node

This guide completes the following actions:
- Download the latest release corresponding to the chosen network from [Aurad repository](https://github.com/aura-nw/aura)
- Compile `aurad`
- Give your node a moniker and configure it
- Configure genesis state 

Example:
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
git clone --branch euphoria https://github.com/aura-nw/aura
cd aura
make
aurad init <moniker> 
wget https://raw.githubusercontent.com/aura-nw/testnets/main/euphoria-2/genesis.json
mv genesis.json ~/.aura/config/genesis.json
```

</TabItem>
</Tabs>


Start your full-node:
```bash
aurad start --p2p.seeds <seed-id>@<seed-ip>:<seed-p2p-port> --minimum-gas-prices <gas-price>
```
<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
aurad start --p2p.seeds 705e3c2b2b554586976ed88bb27f68e4c4176a33@13.250.223.114:26656 --minimum-gas-prices 0.0025uaura
```

</TabItem>
</Tabs>

:::note For optimized node performance, set `minimum-gas-prices` to enable the anti-spam mechanism and reject incoming transactions with less than the minimum gas prices.
:::

After starting your full-node, wait until it completely sync transactions to your local to start create your validator.

###  Optional Configuration: State Sync
State sync rapidly bootstraps a new node by discovering, fetching, and restoring a state machine snapshot from peers instead of fetching and replaying historical blocks

Visit a explorer to get a recent block height and corresponding hash. The recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000.

<Tabs>
<TabItem value="testnet" label="Euphoria Testnet">

```bash
# Retrieve trust height interval
INTERVAL=1000
LATEST_HEIGHT=$(curl -s https://rpc.euphoria.aura.network/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$(($LATEST_HEIGHT-$INTERVAL))
TRUST_HASH=$(curl -s "https://rpc.euphoria.aura.network/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)
```

Set these parameters in the code snippet below <block_height>, <block_hash>, <rpc_server_1> and <rpc_server_2>
```bash
cd $HOME/.aura/config
RPC_SERVER_1=<rpc_server_1>
RPC_SERVER_2=<rpc_server_2>
sed -i "s/enable = false/enable = true/" config.toml
sed -i "s/trust_height = 0/trust_height = \"$BLOCK_HEIGHT\"/" config.toml
sed -i "s/trust_hash = \"\"/trust_hash = \"$TRUST_HASH\"/" config.toml
sed -i "s/rpc_servers = \"\"/rpc_servers = \"$RPC_SERVER_1,$RPC_SERVER_2\"/" config.toml
```


</TabItem>
</Tabs>
