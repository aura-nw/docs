---
sidebar_position: 5
---

# Aura Environment

## Aura Testnet

Testnets are networks used by developers to test both protocol upgrades as well as smart contract development in a production-like environment before deploying to Mainnet. 

### Network information

| Node   | ID                                       | IP             | P2P port | API port | Tendermint RPC |
|--------|------------------------------------------|----------------|----------|----------|----------------|
| seed   | 5bbe961bb23c4958592f131cf59aa7958b7168dd | 18.138.28.51   |    26656 |     1317 |          26657 |
| Hanoi  | 795fa7c4aed92f557b0071fe1cff51ed6077a8c5 | 13.251.46.52   |    26656 |     1317 |          26657 |
| Danang | 2b97e1ca51a7a2a79716bacea61e6740d51e7e71 | 54.169.100.160 |    26656 |     1317 |          26657 |
| Saigon | bbf8366039dcffc20ad50c90000823be176d5271 | 54.255.44.200  |    26656 |     1317 |          26657 |

### Faucet

http://faucet.testnet.aura.network:9000/?address={{$wallet_address}}

Please replace {{$wallet_address}} with the Aura Wallet Address that you have generated. Each call to the faucet will grant you 50 Aura.

### DAPP connection

cosmos rest API:	http://18.138.28.51:1317/

tendermint rpc: 	http://18.138.28.51:26657/