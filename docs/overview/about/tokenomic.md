---
sidebar_position: 2
title: Tokenomics
hide_table_of_contents: false
---

# Aura Network Tokenomics

## 1. Token types
There are 2 types of native tokens in the Aura Network: the BEP-20 Aura Token on BSC and Aura native coin on Aura mainnet. 

- BEP-20 Aura is an IOU token on BSC. It is currently deployed at [0x23c5D1164662758b3799103Effe19cC064d897D6](https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6). BEP-20 token holders later can swap to native $Aura coin after launching mainnet Like other BEP-20 tokens, Aura Token can be freely traded through popular DEXs and CEXs. Aura Token also helps provide liquidity on BEP-20 compatible exchanges and bootstrap users from this community.

- Aura Coin is the native currency of the Aura Network chain. Besides the trading capability of BEP-20 Aura Token, Aura Coin has many other utilities:
	- Staking: Aura Coin holders can delegate their coins to trusted validators to earn passive commission income from the network.
	- Governing: Aura Coin holders can participate in voting for software updates or other important decisions on how the Aura community should be developed.
	- Transaction fee: Aura Coin is used to pay for transaction fee.
	- Exchange and Swap: Aura Coin can be exchanged or swapped in the market.

## 2. Token distribution

Aura max supply is capped at 1 billion tokens. Token allications and vesting schedule are defined in the following table.

| Token Allocation                                   | Allocation (%) |             $AURA |     TGE | Vesting Schedule                                      |
|----------------------------------------------------|---------------:|------------------:|--------:|-------------------------------------------------------|
| Ecosystem Growth  (ignore in circulating supply)   |         21.25% |       212,500,000 |  30.00% | TGE 30%, linear vesting over 2 years                  |
| Ecosystem Growth - Token Listing                   |          1.75% |        17,500,000 | 100.00% | TGE 100%                                              |
| Strategic                                          |         13.00% |       130,000,000 |   0.00% | TGE 0%, linear vesting over 2 years                   |
| Private Sales round 1                              |          2.16% |        21,600,000 |   2.00% | TGE 2%, linear vesting over 2 years                   |
| Private Sales round 2                              |          0.60% |         5,957,500 |   5.00% | TGE 5%, linear vesting over 2 years                   |
| Foundation Reserves (ignore in circulating supply) |         14.99% |       149,904,038 |   0.00% | linear vesting over 2 years                           |
| Public Distribution on IF Launchpad                |          1.25% |        12,538,462 | 100.00% | TGE 100%                                              |
| Block Rewards                                      |         25.00% |       250,000,000 |   0.00% | Over 5 years                                          |
| Team and Advisors                                  |         20.00% |       200,000,000 |   0.00% | TGE 0%, 1 year cliff then linear vesting over 3 years |
| **Total**                                          |    **100.00%** | **1,000,000,000** |         |                                                       |

## 3. Circulating Supply

There are 2 funds that are controlled by the Aura Foundation:
- *Ecosystem Growth*: This fund is used for ecosystem development such as project grants, bug bounties, attracting stakeholders to provide utility services, etc.
- *Foundation Reserves*: It is supposed to be served as a “last-resort” in the case that the network requires funds to solve a particular problem that another source of funding (e.g Community Pool) is not on the table.

These funds are excluded from the Aura Token circulating supply. There are several reason for this.

- They cannot be staked to earn passive income rewards or governing influence.
- Their existent should not cause any impact on network bonding rate.
- If Aura Foundation wants to use these tokens for any purpose, they must be moved out to an intermediate account then accounted in the network circulating supply.

On BSC, both of these funds are controlled by a multisig address: [0x43b57228bf23a1695c81100c5d01b0283e239228](https://bscscan.com/token/0x23c5D1164662758b3799103Effe19cC064d897D6?a=0x43b57228bf23a1695c81100c5d01b0283e239228)


## 4. Block Rewards
25 percent of the total coins will be periodically minted as block rewards to distribute to validators and delegators. Incentives play a big role in deciding the token allocation. For example, allocating “insufficient” amount of tokens to validators may lead to the extreme case where validators cheat the network by accepting fraudulent blocks (e.g doublespending), or validators may not be interested in participating the network which threats the network security. Allocating too little tokens to advisors may result in advisors being “inactive”, discouraging them from engaging with the team to provide helpful advice.

In the first 5 years of Mainnet, a total of 250 million Aura Coins will be distributed for delegators in every block. Apart from the block rewards from the network, validators also receive transaction fees (gas) from transaction creators. We assume that after 5 years of running Aura Network, the transaction fee from the network will be large enough to reward validators so there will be no need for block rewards to be minted anymore.