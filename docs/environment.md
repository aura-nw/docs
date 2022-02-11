---
sidebar_position: 5
---

# Aura Environment

## Aura Testnet

Testnets are networks used by developers to test both protocol upgrades as well as smart contract development in a production-like environment before deploying to Mainnet. 

### Network information

| Node   | ID                                       | IP             | P2P port | API port | Tendermint RPC |
|--------|------------------------------------------|----------------|----------|----------|----------------|
| seed   | 42f0c254710b2b22c67555ff4c2ad7e1390b5965 | 34.203.177.141 |    26656 |     1317 |          26657 |
| Hanoi  | 19f186cf32141aa8b550a5ce8ffa279cfb53a2b3 | 18.232.220.91  |    26656 |     NULL |          NULL  |
| Danang | 20ebfa67729e748f681546edce66af250c1fb728 | 3.226.69.146   |    26656 |     NULL |          NULL  |
| Saigon | 00a9ad953ed9cc648a405e0d9334493977eded6c | 54.163.228.209 |    26656 |     NULL |          NULL  |

### Faucet

http://faucet.testnet.aura.network:9000/?address={{$wallet_address}}

Please replace {{$wallet_address}} with the Aura Wallet Address that you have generated. Each call to the faucet will grant you 50 Aura.

### DAPP connection

cosmos rest API:	http://34.203.177.141:1317/

tendermint rpc: 	http://34.203.177.141:26657/
