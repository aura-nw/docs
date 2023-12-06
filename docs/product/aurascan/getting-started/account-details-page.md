---
sidebar_position: 2
title: Account Details page
---

You can view the details and activities tracking of Aura account easily in the Aurascan **Account Details** page. It shows you a breakdown of the [Assets](#assets), [Transactions](#transactions) and your [Staking](#staking) details.

## Info

<div id="img-wrapper">
    <img src="/img/aurascan/account_info_3.png" alt="account_info"/>
</div>

This card view displays an overview of an address, including the QR code of the account address, total asset value, and the public name (if any) set by Aura Network. Additionally, users can set a private name tag for this address, creating a text view that is easy to read and distinguish. It's important to note that the private name tag feature is accessible only when logging into Aurascan with an email, and the tags set by the user are visible exclusively to them upon logging in to Aurascan.


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

This box will show the top 5 highlight displayed ABTs owned and picked by this account. If you are the owner of this account, you can click to `Manage my ABTs` to open your Account Bound Tokens page to manage your ABT. Otherwise, you can see the `See more` button instead to open the account's Account Bound Token page to view all Equipped ABTs belongs to this user. 

<div id="img-wrapper">
    <img src="/img/aurascan/abt_3.png" alt="abt"/>
</div>

## Staking

If you are an AURA holder, you can stake AURA to receive staking rewards, all records about staking (Delegations, Unbondings, Redelegations and Vestings) are stored in the **Staking** section.

<div id="img-wrapper">
    <img src="/img/aurascan/stake_3.png" alt="staking"/>
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