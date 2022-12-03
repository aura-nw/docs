---
sidebar_position: 3
sidebar_label: Create a validator
---

# Validator 

Validators are responsible for committing new blocks in the blockchain.
These validators participate in the consensus protocol by broadcasting
_votes_ which contain cryptographic signatures signed by each
validator's private key.

Some Proof-of-Stake consensus algorithms aim to create a "completely"
decentralized system where all stakeholders (even those who are not
always available online) participate in the committing of blocks.
Tendermint has a different approach to block creation. Validators are
expected to be online, and the set of validators is permissioned/curated
by some external process. Proof-of-stake is not required, but can be
implemented on top of Tendermint consensus. That is, validators may be
required to post collateral on-chain, off-chain, or may not be required
to post any collateral at all.

Validators have a cryptographic key-pair and an associated amount of
"voting power". Voting power need not be the same.

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
