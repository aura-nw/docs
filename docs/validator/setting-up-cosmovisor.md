---
sidebar_position: 4
---

# Setting up Cosmovisor

:::info Reference
[Cosmovisor Cosmos Documentation](https://docs.cosmos.network/main/run-node/cosmovisor.html)
:::

## Cosmovisor

`cosmovisor` is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, `cosmovisor` can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.

## Setup

### Installation 

1. Install the latest version of `cosmovisor`
```bash
$ go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest
```

2. Install from source 
```bash
$ git clone git@github.com:cosmos/cosmos-sdk
$ cd cosmos-sdk
$ git checkout cosmovisor/vx.x.x
$ make cosmovisor

```
This will build `cosmovisor` in /cosmovisor directory. Afterwards you may want to put it into your machine's PATH like as follows:

```bash
$ cp cosmovisor/cosmovisor ~/go/bin/cosmovisor
```

### Add environment variables to your shell
In the .profile file, usually located at ~/.profile, add:
```text
export DAEMON_NAME=aurad
export DAEMON_HOME=$HOME/.aura
export DAEMON_RESTART_AFTER_UPGRADE=true
```
Then source your profile:
```bash
$ source ~/.profile
```

### Set up folder structure
Cosmovisor expects a certain folder structure:
```text
$DAEMON_HOME
├── cosmovisor
│    ├── current -> genesis or upgrades/<name>
│    ├── genesis
│    │   └── bin
│    │       └── $DAEMON_NAME
│    └── upgrades
│        └── <name>
│            ├── bin
│            │   └── $DAEMON_NAME
│            └── upgrade-info.json
└── ...
```

`current` - a symlink used by Cosmovisor.
The other folders will need setting up:
```bash
$ mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin
$ mkdir -p $DAEMON_HOME/cosmovisor/upgrades
```

### Set up genesis binary
Cosmovisor needs to know which binary to use at genesis. We put this in `$DAEMON_HOME/cosmovisor/genesis/bin`
First, find the location of `aurad`:
```bash
which aurad
```
Then use the path returned to copy it to the directory Cosmovisor expects. Let's assume the previous command returned ```/home/<your-user>/go/bin/aurad```
```bash
$ cp /home/<your-user>/go/bin/aurad $DAEMON_HOME/cosmovisor/genesis/bin
```

### Configure the host's init system
Configure `cosmovisor` as a system serivce for automatically starting.

`systemd` is used for demonstration.

First, create the service file:
```bash
sudo vi /etc/systemd/system/cosmovisor.service
```

Change the contents of the below to match your setup - `cosmovisor`

```text
[Unit]
Description=cosmovisor
After=network-online.target

[Service]
User=<your-user>
ExecStart=/home/<your-user>/go/bin/cosmovisor start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=aurad"
Environment="DAEMON_HOME=/home/<your-user>/.aura"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"

[Install]
WantedBy=multi-user.target
```

### Start Cosmovisor
Enable the service and start it:
```bash
$ sudo -S systemctl daemon-reload
$ sudo -S systemctl enable cosmovisor
$ sudo systemctl start cosmovisor
```

Check it is running using:
```bash
$ sudo systemctl status cosmovisor
$ journalctl -u cosmovisor -f
```
