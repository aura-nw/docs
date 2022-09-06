---
sidebar_position: 3
---

# Create your validator
You need to add your `wallet key` using `mnemonic` or create a new key and tranfer `uaura` to its address
```bash
 aurad keys add <key_name> 
```

Your `auravalconspub` can be used to create a new validator by staking tokens. You can find your validator pubkey by running:
```
$ aurad tendermint show-validator
```
To create your validator, just use the following command:
```bash
aurad tx staking create-validator \
  --amount=<staking-amount> \
  --pubkey=$(aurad tendermint show-validator) \
  --moniker="choose a moniker"  \
  --chain-id=<chain-id> \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1000000" \
  --gas="auto" \
  --gas-prices=<choose gas price> \
  --from=<key_name>
```

You can confirm that you are in the validator set by using a third party explorer or `aurad cli`
```bash
aurad query staking validators
aurad query tendermint-validator-set
```
