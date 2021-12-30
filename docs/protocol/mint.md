---
sidebar_position: 1
---

# MINT

## What is minting and why it is required in Aura Network
### What is minting in blockchain?
Minting is the process of creating or producing something. In blockchain, minting means, validating information, creating a new block and recording that information into the blockchain via the Proof-of-Stake method. 
For example, someone can mint an NFT or mint a new cryptocurrency.
### What is minting tokens?
Tokens are minted through staking under the Proof-of-Stake process. Proof-of-Stake doesn't have miners; instead, it has validators, and it doesn't allow individuals to mine new blocks; instead, they can mint them.
### Why it is required in Aura Network?
In Aura Network, minting is required to create more Aura tokens, increase the total supply of the token until maxSupply (1,000,000,000 Aura) is reached.
Auras are minted through staking by locking Auras to contribute to the security and governance. 
- Help secure the network
- Validators and delegators can earn rewards from transaction fees and Aura inflation.
- Vote for the future
## The Minting Mechanism
The minting mechanism was designed to allow for a flexible inflation rate determined by market demand targeting a particular bonded-stake ratio.

In order to determine the appropriate market rate for inflation rewards, a moving change rate is used. The moving change rate mechanism ensures that if the % bonded is either over or under the goal %-bonded, the inflation rate will change too.

- If the inflation rate is below the goal %-bonded (67% in Aura network), the inflation rate will increase until a maximum value (12%) is reached.
- If the goal % bonded is maintained, then the inflation rate will stay constant.
- If the inflation rate is above the goal %-bonded, the inflation rate will decrease until a minimum value (4%) is reached.

### Begin-Block
At the beginning of each block, if currentSupply is less than maxSupply (1,000,000,000 Aura), calculate the number of tokens minted as BlockProvisions. The total number of tokens in the next block is calculated by currentSupply + BlockProvisions. If supplyNext is greater than maxSupply then the number of tokens minted equals maxSupply - currentSupply, otherwise equals BlockProvisions.

```sh
BeginBlocker(ctx sdk.Context, k custommint.Keeper) {
    minter := k.GetMinter(ctx)
    params := k.GetParams(ctx)

    maxSupplyString := k.GetMaxSupply(ctx)
    maxSupply, ok := sdk.NewIntFromString(maxSupplyString)

    currentSupply := k.GetSupply(ctx, params.MintDenom)

    if currentSupply.LT(maxSupply) {
    	// calculte minted coin
	    mintedCoin := minter.BlockProvision(params)
	    mintedCoins := sdk.NewCoins(mintedCoin)
	
	    supplyNext := currentSupply.Add(mintedCoin.Amount)
	    if supplyNext.GT(maxSupply) {
		    mintedCoin.Amount = maxSupply.Sub(currentSupply)
		    mintedCoins = sdk.NewCoins(mintedCoin)
	    }
	
	    err := k.MintCoins(ctx, mintedCoins)
	    if err != nil {
		    panic(err)
	    }
    } else {
	    k.Logger(ctx).Info("Over the max supply", "currentSupply", currentSupply)
}
```
### NextInflationRate
The target annual inflation rate is recalculated each block. The inflation is also subject to a rate change (positive or negative) depending on the distance from the desired bonded ratio (67%). The maximum rate change possible is defined to be 8% per year, however the annual inflation is capped as between 4% and 12%.
```sh
NextInflationRate(params Params, bondedRatio sdk.Dec) (inflation sdk.Dec) {
	inflationRateChangePerYear = (1 - bondedRatio/params.GoalBonded) * params.InflationRateChange
	inflationRateChange = inflationRateChangePerYear/blocksPerYr

	// increase the new annual inflation for this next cycle
	inflation += inflationRateChange
	if inflation > params.InflationMax {
		inflation = params.InflationMax
	}
	if inflation < params.InflationMin {
		inflation = params.InflationMin
	}

	return inflation
}
```

### NextAnnualProvisions
This parameter is calculated once per block, based on current total supply and inflation rate.
```sh
NextAnnualProvisions(params Params, totalSupply sdk.Dec) (provisions sdk.Dec) {
	return Inflation * totalSupply
```

### BlockProvision
Calculate the provisions generated for each block based on current annual provisions.
```sh
BlockProvision(params Params) sdk.Coin {
	provisionAmt = AnnualProvisions/ params.BlocksPerYear
	return sdk.NewCoin(params.MintDenom, provisionAmt.Truncate())
```

## Parameters
The minting module contains the following parameters:

| Key | Type | Value | Explanation |
| ------ | ------ | ------ | ------ |
| InflationRateChange | string (dec) | "0.080000000000000000" | The moving change rate to determine the appropriate market rate for inflation rewards|
| InflationMax | string (dec) | "0.120000000000000000" | The maximum value of the inflation rate |
| InflationMin | string (dec) | "0.040000000000000000" | The minimum value of the inflation rate |
| GoalBonded | string (dec) | "0.670000000000000000" | The desired bonded ratio for the inflation rate to stay constant|
| BlocksPerYear | string (dec) | "4429213" | The number of blocks in a year|
| MaxSupply | string (dec) | "1000000000" | The maximum amount of Auras that will exist in the lifetime of the Aura|

For more detailed information, see [Module "mint" in Cosmos Network](https://docs.cosmos.network/v0.44/modules/mint/)
.

