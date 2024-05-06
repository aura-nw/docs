---
sidebar_position: 7
sidebar_label: Key Management
title: Tendermint Key Management System
---

TMKMS is for making the priv validator key secure and prevent from double signing when having a backup node ready. 
For the backup node to be ready it must be synced upfront and the priv_validator_laddr should be specified allready.  
Also the TMKMS should be on a separate system. 
For local TMKMS it’s only needed to install it and secure the priv_validator_key, keep in mind that the priv_validator_key should be saved on different place and deleted from the node on both ways. Adn if on a different node also deleted there.

## Prerequisite
```bash
sudo apt update

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

sudo apt install git build-essential ufw curl jq snapd --yes
sudo apt install libusb-1.0-0-dev
export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3
```

## Download and create TMKMS binary:
```bash
cd $HOME
git clone https://github.com/iqlusioninc/tmkms.git
cd $HOME/tmkms
cargo install tmkms --features=softsign
tmkms init config
tmkms softsign keygen ./tmkms/config/secrets/secret_connection_key
```

## Copy over the priv_validator_key to the tmkms server and import: 
```bash
scp user@"nodeip":~/.aura/config/priv_validator_key.json ~/tmkms/config/secrets

if no connection possible, the key can also be copied over by winscp(windows) or cyberduck(mac)

tmkms softsign import $HOME/tmkms/config/secrets/priv_validator_key.json $HOME/tmkms/config/secrets/priv_validator_key
```

## Modify Config for TMKMS:
check tendermint version with "binary tendermint version"
```bash
nano $HOME/tmkms/config/tmkms.toml

# Tendermint KMS configuration file

## Chain Configuration

### Cosmos Hub Network

[[chain]]
id = "aura_6321-3"
key_format = { type = "bech32", account_key_prefix = "aurapub", consensus_key_prefix = "auravalconspub" }
state_file = "/root/tmkms/config/state/priv_validator_state.json"

## Signing Provider Configuration

### Software-based Signer Configuration

[[providers.softsign]]
chain_ids = ["aura_6321-3"]
key_type = "consensus"
path = "/root/tmkms/config/secrets/priv_validator_key"

## Validator Configuration

[[validator]]
chain_id = "aura_6321-3"
addr = "tcp://"ipaddresnode":26680" # your validator node ip and port
secret_key = "/root/tmkms/config/secrets/secret_connection_key"
protocol_version = "v0.34"
reconnect = true
```

## Create service for TMKMS but do not start yet! (change value user in the various locations):
```bash
sudo nano /etc/systemd/system/tmkms.service

[Unit]
Description=tmkms
After=network-online.target
[Service]
User=user
ExecStart=/home/user/.cargo/bin/tmkms start -c /home/user/config/tmkms.toml
Restart=on-failure
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target

Sudo systemctl enable tmkms.service
```


## Login to your validator and open the config
```bash
nano $HOME/.aura/config/config.toml
change the following lines
priv_validator_laddr = "tcp://0.0.0.0:26680"

# priv_validator_key_file = "config/priv_validator_key.json"

# priv_validator_state_file = "data/priv_validator_state.json"

Allow port 26680 in the validator of the validator for ip addess of the tmkms server

sudo ufw allow from "ip address tmkms server" to any port 26680 proto tcp

Stop the validator and start tmkms

Sudo systemctl start tmkms.service && sudo journalctl -fu tmkms.service
```

Following lines will show
```bash
2022-03-08T23:42:38.931428Z ERROR tmkms::client: ["chainid"@tcp://ipaddresnode:26680] I/O error: Connection refused (os error 111)
2022-03-08T23:42:39.931729Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:42:39.932417Z ERROR tmkms::client: ["chainid"@tcp://ipaddresnode:26680] I/O error: Connection refused (os error 111)
2022-03-08T23:42:40.932732Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e
2022-03-08T23:42:40.933425Z ERROR tmkms::client: ["chainid"@tcp://ipaddresnode:26680] I/O error: Connection refused (os error 111)
```

Start the validator again and check logs on the tmkms, these will be similar like below.
```bash
2022-03-08T23:46:06.208451Z  INFO tmkms::connection::tcp: KMS node ID: 
2022-03-08T23:46:06.210568Z  INFO tmkms::session: [chainid@tcp://ipaddresnode:26680] connected to validator successfully
2022-03-08T23:46:06.210604Z  WARN tmkms::session: [chainid@tcp://ipaddresnode:26680]: unverified validator peer ID! ()
2022-03-08T23:46:15.929787Z  INFO tmkms::session: [chainid@tcp://ipaddresnode:26680] signed PreCommit:<nil> at h/r/s 3399910/0/2 (0 ms)
```
