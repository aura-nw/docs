---
sidebar_position: 2
---

# Granter

The account address that gives balance's access permission for paying trasaction fee to the grantee.

## Add new grant alowance to grantee

**Step 1:** Connect wallet and navigate to Fee Grant option from Menu Header >> More >> Fee Grant 

![Feegrant path](/img/aurascan/feegrant_menu.png)

**Step 2:** Add new feegrant allowance

When user click to "Add New Grant" button, a popup will be show up to input feegrant allowance information.

![Add new feegrant](/img/aurascan/feegrant_page.png)

After filling feegrant allowance information, click to "Grant" button to confirm the feegrant allowance. 

![Add new feegrant popup](/img/aurascan/add_new_feegrant_pop_up.png)

|Fields|Description|Note|
|------|-----------|----|
|Grantee's Address|Wallet address of grantee||
|Spend Limit Amount|The limit of coins that are allowed to be used from the granter's account.|If field is empty, there is no spend limit and any amount can be spent|
|Expiration Time|Time when this allowance expire|If this field is left empty, there is no expiry for the grant|
|Periodically granted|If user select "Yes" this allowance is Periodic Allowance unless, this allowance is Basic Allowance|
|Period Spend Limit Amount|The maximum number of coins that can be spent in each period|This field only appears when user tick "Yes" in the "Periodically granted" field|
|Period|The time duration in which the Period Spend Limit Amount above can be spent before that allowance is reset|This field only appears when user tick "Yes" in the "Periodically granted" field|
|Allowed Activities|The specified activities in which the grantee conducts that can be paid fee from fee allowance granted from granter|
|Specified smart contracts|User can specify the specific contract address that when the grantee interact with can be accessible to the fee allowance granted by the granter|This field only show up when user select "Execute Contract" option in the "Allowed Activities" field|


**Step 3:** Sign the "Grant Allowance" message

![Sign message](/img/aurascan/sign_add_new_feegrant.png)

## Revoke granted fee

**Step 1:** Connect wallet and navigate to Fee Grant option from Menu Header >> More >> Fee Grant 

![Feegrant path](/img/aurascan/my_grantees_active.png)

**Step 2:** Revoke feegrant allowance
When user click to "Revoke" button in the same line with the granted feegrant, a popup will be show up to inform the revoke information.
After checking, the granter can click to "Revoke" button to confirm the revoke action. 

![Revoke granted fee](/img/aurascan/revoke_popup.png)

**Step 3:** Sign the message

![Sign revoke message](/img/aurascan/Sign_revoke_message.png)

:::info:
* For now, we have supported feegrant feature for contract interaction activities (Execute Contract)
* If the granter don't specify the allow activities and don't specify the contract address, the grantee can accessible to the feegrant allowance when conduct 'execute contract' actions with all smart contracts
:::

## My Grantees list view

### Active
The "Active" tab in "My Grantees" shows up the list of granted allowance of the user when acting like a granter. These allowance is still valid which means that they have not yet reach the "Spend Limit Account".

![My active grantees](/img/aurascan/my_grantees_active.png)

:::caution Note:
* Between a pair of granter and grantee can only occur 1 fee allowance. In order to grant additional fee allowance to the former grantee, need to revoke the existed fee allowance in advanced.
* The allowance that already reached the expiry date still show up in this active list view but this allowance is inaccessible. Need to revoke the expired allowance in order to re-grant fee to the former grantee. 
:::


### Inactive
The "Inactive" tab in "My Grantees" shows up the list of granted allowance of the user when acting like a granter. These allowance is invalid due to Spend Limit Amount used up or were revoked by the granter.
  
![My inactive grantees](/img/aurascan/my_grantees_inactive.png)