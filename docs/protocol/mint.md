---
sidebar_position: 1
---

# MINT

## What is minting and why it is required in Aura Network

## The Minting Mechanism
The minting mechanism was designed to:
- allow for a flexible inflation rate determined by market demand targeting a particular bonded-stake ratio
- effect a balance between market liquidity and staked supply

In order to determine the appropriate market rate for inflation rewards, a moving change rate is used. The moving change rate mechanism ensures that if the % bonded is either over or under the goal %-bonded, the inflation rate will adjust to further incentivize or disincentivize being bonded.

It can be broken down in the following way:
- If the inflation rate is below the goal %-bonded (67% in Aura network), the inflation rate will increase until a maximum value is reached.
- If the goal % bonded is maintained, then the inflation rate will stay constant.
- If the inflation rate is above the goal %-bonded, the inflation rate will decrease until a minimum value is reached.

### Begin-Block
At the beginning of each block, minting parameters are recalculated and inflation paid.

### NextInflationRate
The target annual inflation rate is recalculated each block. The inflation is also subject to a rate change (positive or negative) depending on the distance from the desired ratio (67%). The maximum rate change possible is defined to be 8% per year, however the annual inflation is capped as between 4% and 12%.
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

| Key | Type | Example |
| ------ | ------ | ------ |
| InflationRateChange | string (dec) | "0.080000000000000000" |
| InflationMax | string (dec) | "0.120000000000000000" |
| InflationMin | string (dec) | "0.040000000000000000" |
| GoalBonded | string (dec) | "0.670000000000000000" |
| BlocksPerYear | string (dec) | "4429213" |

