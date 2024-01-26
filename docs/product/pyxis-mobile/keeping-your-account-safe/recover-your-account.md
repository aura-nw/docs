---
sidebar_position: 2
title: Recover your Smart Account
---

This function can only be used to recover Pyxis smart accounts. Use it when you have lost your device or lost access to Pyxis (forgot app passcode, remove app from your mobile)…

1. Select the 'Recover account' on the first screen
2. Set a passcode for Pyxis app. 
3. Choose recovery method you want to use. Pyxis provides users with 2 way to recover smart account

3.1. Recover using google account

<div id="gif-wrapper">
    <img src="/img/pyxis-mobile/RecoverWeb3Auth.gif" alt="RecoverWeb3Auth"/>
</div>

Condition: The intended smart account recovery requires a pre-set recovery method via a Google account

- This feature is empowered by Web3Auth. Pyxis will redirect the screen to Google interface. Please select the Google account which you already set as recovery method for the smart account
- Then pick the smart account which you want to recover (the screen shows all the smart accounts related to your Google account)
- On mobile, the smart account is recovered one by one
- Finally, sign the recovery transaction to finish this process

3.2. Recover using backup address

Condition: The intended smart account recovery requires a pre-set recovery method via a normal wallet (EOA)

On Pyxis mobile app:

- Open the provided URL (get it from Pyxis guideline on mobile version) on your PC or laptop, this link will lead to the Pyxis recovery center. After that, choose “Show device public key”
- Copy the Device public key, this key will be used later

On Recovery center site 

- Connect the wallet you've designated as the recovery method for the intended account recovery
- Select the smart account you want to recover
- Input the Device public key (which provided in Pyxis app)
- Sign the recovery transaction if the verification process is successful