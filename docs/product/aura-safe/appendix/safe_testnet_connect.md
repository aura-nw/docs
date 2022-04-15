---
sidebar_position: 1
---

# Testnet Connection
 
## I. Connect Keplr Wallet to Aura Testnet

1. Add Network to Keplr
- Aura Testnet:
Use this [jsfiddle](https://jsfiddle.net/eledra/e9kzawp7/11/) to add the `aura-testnet` chain to your Keplr browser extension.
- Aura Devnet:
Use this [jsfiddle](https://jsfiddle.net/andqk/g4mrnva1/1/) to add the `aura-devnet` chain to your Keplr browser extension.

2. Detech Keplr
```
	if (!window.keplr) {
        alert("Please install keplr extension");
    } else {
        const chainId = "aura-testnet";

        // Enabling before using the Keplr is recommended.
        // This method will ask the user whether to allow access if they haven't visited this website.
        // Also, it will request that the user unlock the wallet if the wallet is locked.
        await window.keplr.enable(chainId);
    
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
    
        // You can get the address/public keys by `getAccounts` method.
        // It can return the array of address/public key.
        // But, currently, Keplr extension manages only one address/public key pair.
        // XXX: This line is needed to set the sender address for SigningCosmosClient.
        const accounts = await offlineSigner.getAccounts();
		console.log(accounts)
    }
```

3. Unlock Keplr
```
	window.keplr.enable(chainId);
```

4. Get current address / Public key
```
	await offlineSigner.getAccounts();
	//or
	await offlineSigner.getAccounts(chainid);
```

5. Sign transaction
- Require: @cosmjs/stargate
```
	npm install @cosmjs/stargate
```

- Use SigningStargateClient
```
	const chainId = "aura-testnet";
	await window.keplr.enable(chainId);
	const offlineSigner = window.getOfflineSigner(chainId);

	const client = await SigningStargateClient.connectWithSigner(tendermintUrl, offlineSigner);
	const tx = {
        chainId: "aura-testnet",
        // accountNumber: "0",
        // sequence: "0",
        // fee: {
        //     amount: [{
        //         amount: "0",
        //         denom: "uatom",
        //     }],
        //     gas: "200000",
        // },
        msgs: [
            {
                type: "cosmos-sdk/MsgSend",
                value: {
                    from_address: sender.address,
                    to_address: "auraxxxxxxxxxxxxxxxxxxx",
                    amount: [{
                        amount: "1",
                        denom: "uaura",
                    }],
                },
            },
        ],
        memo: "",
    };
	// sign transaction
    const signedTx = await client.sign(tx);
    console.log(signedTx);
    // broadcast transaction
    const res = await client.broadcast(signedTx);
    console.log(res);
```

Reference: https://docs.keplr.app/api/

## II. Connect Keplr Wallet to other testnet

1. Vega Testnet (ATOM) <br>
> Deprecated since March 2022 in favor of [v7-Theta Testnet](https://github.com/cosmos/testnets/tree/master/v7-theta)

Use [this jsfiddle](https://jsfiddle.net/qkmecjz2/) to add the `vega-testnet` chain to your Keplr browser extension.

2. Theta Testnet (ATOM) <br>
Use this [jsfiddle](https://jsfiddle.net/kht96uvo/1/) to add the `theta-testnet-001` chain to your Keplr browser extension.

3. Juno Testnet (JUNO) <br>
Access JunoTools website: https://test.juno.tools/
![](public/img/guide/juno-tools.png) 
Click on Connect Wallet and approve request add chain. <br>
![](public/img/guide/approve-chain-add-juno.png) <br>
Approve request connect network. <br>
![](public/img/guide/approve-request-connect.png) <br>

4. Osmosis Testnet (OSMO) <br>
Use this [jsfiddle](https://jsfiddle.net/andqk/3szkyte2/1/) to add the `osmo-test-4` chain to your Keplr browser extension.