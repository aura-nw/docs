---
sidebar_position: 3
---

# Mint

## What is minting and why it is required in Aura Network

### What is minting?
Minting is the process of creating or producing something. In Proof-of-Stake (PoS) blockchain, minting means validating information, creating a new block and recording that information into the blockchain via the PoS consensus mechanism. 
For example, someone can mint NFTs , tokens, or new cryptocurrency coins.

### Why it is required in Aura Network?
In Aura Network, the Mint module is required to mint new Aura coins, through which increases its total supply until `maxSupply` (1,000,000,000 Aura) is reached.

Aura coins are minted as a part of the block reward earned by validators through the staking process, as the staking process provides particular benefits:
- Strengthen the network security
- Validators and delegators can gain profit through block rewards from transaction fees and Aura inflation.
- Governance acts (proposal, voting) for the future of the network.

## The Minting Mechanism
The minting mechanism was designed to allow for a flexible inflation rate determined by market demand targeting a particular bonded-stake ratio.

In order to determine the appropriate market rate for inflation rewards, a moving change rate is used. The moving change rate mechanism ensures that if the % bonded is either over or under the goal %-bonded, the inflation rate will change too.
- If the inflation rate is below the goal %-bonded (67% in Aura network), the inflation rate will increase until a maximum value (12%) is reached.
- If the goal % bonded is maintained, then the inflation rate will stay constant.
- If the inflation rate is above the goal %-bonded, the inflation rate will decrease until a minimum value (4%) is reached.

### Begin-Block
At the begining of each block, the Mint module will handle those following process:
- Circulation supply check: Aura Coin can only be minted more if the `currentSupply` is lower than the pre-defined `maxSupply`. the amount of minted coins after that block will also be verified to comply with the `maxSupply`, assuring that the circulation supply will never surpasses the maximum supply.
- Inflation block reward calculation: the amount of new-minted coins as block reward of that block will be calculated through the calculation of `NextInflationRate`, `NextAnnualProvisions`, and `BlockProvision`.

### Circulation supply checking
At the beginning of each block, if `currentSupply` is less than `maxSupply`, calculate the number of newly minted coins as `BlockProvision`. The total number of coins in the next block is calculated by `currentSupply + BlockProvision`. If `supplyNext` is greater than `maxSupply` then the number of coins equals `maxSupply - currentSupply`, otherwise equals `BlockProvision`.

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

| Key | Type | Value | Meaning |
| ------ | ------ | ------ | ------ |
| InflationRateChange | string (dec) | "0.080000000000000000" | The moving change rate to determine the appropriate market rate for inflation rewards|
| InflationMax | string (dec) | "0.120000000000000000" | The maximum value of the inflation rate |
| InflationMin | string (dec) | "0.040000000000000000" | The minimum value of the inflation rate |
| GoalBonded | string (dec) | "0.670000000000000000" | The desired bonded ratio for the inflation rate to stay constant|
| BlocksPerYear | string (dec) | "4429213" | The number of blocks in a year|
| MaxSupply | string (dec) | "1000000000" | The maximum amount of Auras that will exist in the lifetime of the Aura|

For more detailed information, see [Module "mint" in Cosmos Network](https://docs.cosmos.network/v0.44/modules/mint/)
.

