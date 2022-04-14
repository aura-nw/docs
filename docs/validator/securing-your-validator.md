---
sidebar_position: 4
---

# Securing your validator
:::danger warning
The setup isn't yet ready for product use
:::

## About
In order to secure validator on AWS, we leverage [AWS Nitro Enclaves](https://aws.amazon.com/blogs/aws/aws-nitro-enclaves-isolated-ec2-environments-to-process-confidential-data/) to execute [Tendermint KMS](https://github.com/iqlusioninc/tmkms).

## Prerequisites
- Virtualized Nitro-based instances with at least four vCPUs

## Setup AWS KMS and Nitro Enclaves
Fllow this [guide](https://crypto.org/docs/getting-started/advanced-tmkms-integration.html#setting-up-aws-nitro-enclaves-tendermint-kms-for-signing-blocks) to setup necessary components 

## Setup  tmkms-nitro-enclave and tmkms-nitro-helper
Clone the source
```bash
$ git clone https://github.com/aura-nw/tmkms-light
$ cd tmkms-light
```

### Build tmkms docker image
```bash
docker build -t aws-ne-build \
       --build-arg USER=$(whoami) \
       --build-arg USER_ID=$(id -u) \
       --build-arg GROUP_ID=$(id -g) \
       --build-arg RUST_TOOLCHAIN="1.56.1" \
       --build-arg CTR_HOME="$CTR_HOME" \
       -f Dockerfile.nitro .
```

### Install tmkms-nitro-helper
```bash
$ sudo yum install -y openssl-devel
$ cargo build --release -p tmkms-nitro-helper
$ cp ./target/release/tmkms-nitro-helper /usr/local/bin/
```

### Generate a new encrypted validator signing key
```bash
$ tmkms-nitro-helper enclave run --cpu-count <nums-of-cpu-for-enclave> \
                                 --eif-path <tmkms-eif-path> &
$ vsock-proxy 8000 kms.<region>.amazonaws.com 443 --config <vsock-proxy.yaml-path> &
$ tmkms-nitro-helper init -a <region> -k <KMS-Arn> -p json  --cid $(nitro-cli describe-enclaves | jq -r .[0].EnclaveCID)
```
It shoud generate a `Cosmos protobuf public key` to stdout and an encrypted private key in relative path `secrets/secret.key`

### Configure tmkms.toml and start tmkms helper
Example tmkms.toml
```bash
address = 'unix:///home/ec2-user/sockets/validator.socket'
chain_id = 'aura-testnet'
sealed_consensus_key_path = '/home/ec2-user/.tmkms/secrets/secret.key'
state_file_path = '/home/ec2-user/.tmkms/state/priv_validator_state.json'
enclave_config_cid = 15 #overridden by flag
enclave_config_port = 5050
enclave_state_port = 5555
enclave_tendermint_conn = 5000
aws_region = 'ap-southeast-1'
```

Start tmkms helper
```bash
$ tmkms-nitro-helper start -c /home/ec2-user/.tmkms/tmkms.toml --cid $(nitro-cli describe-enclaves | jq -r .[0].EnclaveCID)
```

### Runing validator node

In `~/.chain-maind/config/config.toml`, `priv_validator_key_file` and `priv_validator_state_file` should be commented and uncomment `priv_validator_laddr` to value `unix://...` which match the address in `tmkms.toml`. e.g. `unix:///home/ec2-user/sockets/validator.socket`