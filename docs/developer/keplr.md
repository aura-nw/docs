---
sidebar_position: 1
---

# Adding Aura network to Keplr

During development, we recommend to use [Keplr-wallet](https://github.com/chainapsis/keplr-wallet) as it is the most powerful wallet for the Cosmos ecosystem in general.

Please install the latest release of Keplr-wallet Browser Extension following the guide on the official website.

Aura Network has not been officially added to Keplr, so we need to use Keplr Suggest Chain [API](https://docs.keplr.app/api/suggest-chain.html) to add Aura Test Net to the wallet.

First, right-click the Keplr extension and choose "Inspect Popup"
<figure>
  <img src="/img/keplr_1.png"/>
</figure>

Now, the Chrome developer console is open for Keplr extension.
<figure>
  <img src="/img/keplr_2.png"/>
</figure>

We can copy the following code and paste into the "Console" section of the developer console and it Enter. The code will add aura-testnet to the Keplr wallet via its suggest chain API.

```js
await window['keplr'].experimentalSuggestChain({
	features: ['no-legacy-stdTx'],
	chainId: "aura-testnet",
	chainName: "aura testnet",
	rpc: "http://18.138.28.51:26657",
	rest: "http://18.138.28.51:1317",
	bip44: {
		coinType: 118,
	},
	bech32Config: {
		bech32PrefixAccAddr: "aura",
		bech32PrefixAccPub: "aura" + "pub",
		bech32PrefixValAddr: "aura" + "valoper",
		bech32PrefixValPub: "aura" + "valoperpub",
		bech32PrefixConsAddr: "aura" + "valcons",
		bech32PrefixConsPub: "aura" + "valconspub",
	},
	currencies: [
		{
			coinDenom: "AURA",
			coinMinimalDenom: "uaura",
			coinDecimals: 6,
			// coinGeckoId: "aura",
		},
	],
	feeCurrencies: [
		{
			coinDenom: "AURA",
			coinMinimalDenom: "uaura",
			coinDecimals: 6,
			// coinGeckoId: "uaura",
		},
	],
	stakeCurrency: {
		coinDenom: "AURA",
		coinMinimalDenom: "uaura",
		coinDecimals: 6,
		// coinGeckoId: "uaura",
	},
	coinType: 118,
	gasPriceStep: {
		low: 1,
		average: 2.5,
		high: 4
	},
	walletUrlForStaking: "https://aura.network"
});
```

Press Approve to add the chain to the wallet extension.

<figure>
  <img src="/img/keplr_3.png"/>
</figure>

Congratulations ! you can now use Keplr to manage your Aura on the Aura-testnet