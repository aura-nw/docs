---
sidebar_position: 3
---

# Validators

## All validators in Aura Network
Visit **_Validators_** menu to view the Transactions list of Euphoria Testnet

![Validators](/img/aurascan/validator_list.png)

From Validators list overview, you can see the list of validators with corresponding Voting Power, Commission, Participation, and Uptime information for each. The list is in descending order by default based on Voting Power. 

Users can directly delegate to favor any validator by clicking 'Delegate' button beside the validator's information on each line.

:::info Note
  You need to connect your wallet to be able to delegate.
:::

### Validator details
When clicking on each specific transaction line, you can view the Validator information which includes Validator profile, Proposed Blocks, Uptime, Delegators, and Power Events.

#### Validator profile
The Validator profile includes the following fields about the selected validator, including any external details such as their website.

|Fields|Description|
|------|------------|
|Operator Address|Particular wallet address of validator that receive reward amount given to the validator contributing for block validated|
|Address|Wallet address of validator user|
|Website|Website of the validator's organization|
|Commission|Commission rate applied by validator is the portion of revenue hold by validators for themselves before the revenue is distributed to their delegators|
|Uptime|proportion of the period of time that validator's server was used without any problems|
|Voting Power|proportion of the size of validators bonded stake amount compare to total bonded stake amount of all selected validators|
|Bonded Height|Height of block in which validator was bonded|
|Self Bonded|Number and proportion of AURA a validator self-delegated to themselves|
|Details|Information of validator in details|

#### Proposed Blocks
Statistics of blocks validated by validator.

|Fields|Description|
|------|------------|
|Height|Height of validated block|
|Block Hash|Hash of validated block|
|Txs|Number of transactions inside the validated block|
|Time|Timestamp of validated block|

#### Uptime
Visual statistic of Validator's presence (online/offline) during the last 100 blocks of Aura Network uptime.

#### Delegators
List of delegators that delegated to the validator.

|Fields|Description|
|------|------------|
|Delegator Address|Wallet address of delegator|
|Amount|Amount of AURA that delegator delegated to validator|

#### Power Events
Ledger of transactions related to Operator Address (when delegator delegates/undelegates/redelegates from/to validator).

|Height|Height of block that contains the transaction|
|------|------------|
|TxHash|Hash of transaction|
|Amount|Amount that delegator delegate/undelegate/redelegate from/to validator|
|Time|Timestamp of transaction|

## My Validators box
:::info
Only shows up when you have connected your wallet and have already delegated to a validator previously.
:::
![Validators](/img/aurascan/Getting_Started_my_validators_list.png)

This box shows information of validators that you have already delegated to, with validator name, Amount Staked, and accumulated pending reward updated of each validator. 
You can **__Claim Reward__** by clicking 'Claim Reward" button at top right of the box or rearrange your staking portfolio by click on 'Manage' button shows up on each line of My Validator box list to **__"Delegate"__** more to this validator, **__"Undelegate"__** to start the unbonding period or **__Redelegate__** to switch your assets to another validator.

### Claim Reward
When clicking on the 'Claim Reward' button, Aura Network will connect to your wallet and conduct to claim __all__ your pending staking reward still remaining on My validators box list.

You can select the Fee level you accept (Low/Average/High) as well as Set Gas Limit. After click on 'Approve' button, the entirety of your available reward amount will be added to your wallet.

:::tip
You can also claim rewards directly from your wallet by selecting the environment to "Aura euphoria TestNet" and click on 'Claim" button next to 'Pending Staking Reward' on the wallet interface.
:::

### Delegate
When clicking on 'Manage' button, a popup will show up. Click on "Delegate" to delegate more to this validator. 

:::tip
You can also delegate to this validator directly from Validator list by clicking "Delegate" button on the line end in corresponding with the Validator.
:::

A popup will show up with information about your current delegation amount to this validator and available balance amount to delegate more.

![Validators](/img/aurascan/Delegate_more.png)

After typing the desired delegate amount and clicking on "Delegate", Aurascan will make a request to your wallet  to confirm the delegate transaction.
You can select the Fee level you accept (Low/Average/High) as well as Set Gas Limit. Afterwards you may click on the 'Approve' button, the entirety of your delegate amount will be locked for staking. In case you need your staked assets to be liquid again, you will need to undelegate from the validator you have already delegated.

### Undelegate
When clicking on 'Manage' button, a popup will show up, click on "Select Action" and select "Undelegate" from the dropdown list.

:::caution
  Please note that when you undelegate the validator, your staked amount to this validator will be locked for 2 days for unbonding period. Once the unbonding period begins, you will:
  + not receive staking rewards
  + not be able to cancel the unbonding
  + need to wait 2 days for the amount to be liquid again
:::

A popup will show up with information about the unbonding period.

![Validators](/img/aurascan/Undelegate.png)

After typing the undelegate amount and click "Undelegate" button, Aurascan will make a request to your wallet  to confirm the undelegate transaction. 

You can select the Fee level you accept (Low/Average/High) as well as Set Gas Limit. After click on 'Approve' button, all of your undelegated amount will begin the unbonding period.

### Redelegate
When clicking on the 'Manage' button, a popup will show up. Click on "Select Action" and choose "Redelegate" from the dropdown list. 
A popup will show up with information about validator, you can click on "Select validator" button to view the dropdown list of other validators you can redelegate to.

![Validators](/img/aurascan/Redelegate.png)

After choosing other trusted validator to switch your asset to from dropdown list you will see the following screen.

![Validators](/img/aurascan/switch_validator.png)

After typing the delegate amount and clicking "Delegate", Aurascan will make a request to your wallet  to confirm the delegate transaction.

You can select the Fee level you accept (Low/Average/High) as well as Set Gas Limit. After click on 'Approve' button, all your redelegated amount will be switched from initial validator to changed validator just been selected.

## Undelegating box
:::info
Only shows up when you have connected your wallet and have an ongoing unbonding period from an undelegation request (2 days from the time you undelegated from validator).
:::

![Validators](/img/aurascan/Undelegating.png)

This is report shows information about your undelegated amount that is still on an unbonding period. This box shows the validator that you undelegated from, undelegated amount and time remaining until unbonding period will end.
