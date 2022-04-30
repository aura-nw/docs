---
sidebar_position: 5
---
# Networks information
:::info
Genesis files and configurations are located in [Github repository](https://github.com/aura-nw/testnets)
:::

`Networks information`

| ChainID      | Type | Genesis | Seeds | Explorer |
| :--- | :--- | :--- | :--- | :--- |
| `serenity-testnet-001` | Testnet | [Genesis Link](https://github.com/aura-nw/testnets/blob/main/serenity-testnet/genesis.json) | `bf5ce6ee98541e2a4f1cb7b5f55f7ad6554bdced@18.138.89.226:26656` | [Explorer Link](https://serenity.aurascan.io) |
| `halo-testnet-001` | Testnet | [Genesis Link](https://github.com/aura-nw/testnets/blob/main/halo-testnet/genesis.json) | `10b5458c22c7dc6862ba9c2f4928a60af214c16c@3.210.178.93:26656` | [Explorer Link](https://halo.aurascan.io) |

:::info
The testnet has been upgraded few times. You should configure [**state sync mode**](https://github.com/aura-nw/docs/blob/main/docs/validator/running-a-fullnode.md#optional-configuration-state-sync) to join the testnet using the lastest **aurad** version. If you want to sync data from *block zero*, you must use old versions of **aurad** to sync and perform the upgrades manually.
:::

[LCD and RPC endpoints](../developer/endpoints.md)
