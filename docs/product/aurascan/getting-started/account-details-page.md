---
sidebar_position: 2
title: Account Details page
---

You can view the details and activities tracking of Aura account easily in the Aurascan **Account Details** page. It shows you a breakdown of the [Account Info](#Account Info), [Account Assets](#Account Assets), [Staking Porfolio](#Staking Porfolio) and [Transactions History](#transactions history) of an Aura account.

## Account Info

<div id="img-wrapper">
    <img src="/img/aurascan/account_info_3.png" alt="account_info"/>
</div>

This card view show up the overview information of an address: QR code of account address, total asset value, public name (if any) set by Aura Network and private name tag of this account set by user to tag this aura address by a text view that is easier to read and distinguish.
Kindly take note that user can use the private name tag feature only when login Aurascan by email and the private name tags set by you are only visible to you once you have logged in to your Etherscan account.


## Assets

### Coins & Tokens

This box will show the name, symbol, denom (if any), contract address (if any), amount, price and value of all coins & tokens belongs to this account. The `Coins & Tokens` includes Staking Coin, IBC Coin, CW-20 Token.

<div id="img-wrapper">
    <img src="/img/aurascan/coins_n_tokens_3.png" alt="coins_n_tokens"/>
</div>

### NFTs

This box will show the list of all NFTs owned by this account. You can filter the list by Collections name or search by Token ID or Contract Address. 

<div id="img-wrapper">
    <img src="/img/aurascan/nft_3.png" alt="nft"/>
</div>

### ABTs

This box will show the top 5 highlight displayed ABTs owned and picked by this account. If you are the owner of this account, you can click to "Manage my ABTs" to open your Account Bound Tokens page to manage your ABT. Otherwise, you can see the "See all" button instead to open the account's Account Bound Token page to view all Equipped ABTs belongs to this user. 

<div id="img-wrapper">
    <img src="/img/aurascan/abt_3.png" alt="abt"/>
</div>

## Staking

If you are an AURA holder, you can stake AURA to receive staking rewards, all records about staking (Delegations, Unbondings, Redelegations and Vestings) are stored in the `Stake` section.

<div id="img-wrapper">
    <img src="/img/aurascan/Getting_Started_Manage_your_Account_Stake.png" alt="staking"/>
</div>

## Transactions

Here users can see all of the transactions history related to this account. You can select any particular transaction hash to see transaction details. 

### Executed

This tab includes all transactions initiated by this account (message sender = the account). 

<div id="img-wrapper">
    <img src="/img/aurascan/executed_txn_3.png" alt="executed_txn"/>
</div>

### Coin Transfer

This tab includes all messages that contains native coin transfer and involves this account as sender or receiver of each transfer. Native Coin includes AURA staking coin and IBC coin. 

<div id="img-wrapper">
    <img src="/img/aurascan/coin_transfer_txn_3.png" alt="coin_transfer_txn"/>
</div>

### Token Transfer

This tab includes all messages that contains CW-20 token transfer and involves this account as sender or receiver of each transfer. 

<div id="img-wrapper">
    <img src="/img/aurascan/token_transfer_txn_3.png" alt="token_transfer_txn"/>
</div>

### NFT Transfer

This tab includes all messages that contains CW-721 token transfer and involves this account as sender or receiver of each transfer. 

<div id="img-wrapper">
    <img src="/img/aurascan/nft_transfer_txn_3.png" alt="nft_transfer_txn_3"/>
</div>