---
sidebar_position: 4
title: Making Transactions
---

Every transaction moving assets out of the Safe requires enough confirmations before it can be executed.

# Create a new transaction from the Safe
 On the main screen, click “New transaction”. 
- Select the type of assets to send.
- Input recipient, the desired asset name and amount to send. Then click on “Review”.
- If desired, adjust the gas amount through by clicking "Edit gas", then change the gas amount and click Apply to update the transaction fee. Click “Submit” to submit the transaction. The transaction submission equal to the confirmation of the current owner. 
- Sign the transaction with the personal wallet.
Now The transaction is now shown on the queue, with the first confirmation from the owner creating the transaction.

![Safe transaction](/img/pyxis-safe/create_safe_transaction_1.gif)

# Confirm a Safe transaction
The transaction needs confirmation from other owners until it has enough confirmation in order to be executed. Navigate to Transaction Queue, select the transaction that need confirmation and click “Confirm”. A confirmation pop-up will be shown. Click “Submit” to confirm the transaction. Wallet sign is required. After the confirmation, the confirmation of the owner is shown on the transaction.

![Safe transaction confirmation](/img/pyxis-safe/confirm_safe_transaction_1.gif)

# Reject a Safe transaction
An owner can also reject a transaction by clicking the “Reject” button. A confirmation screen will show up. Click “Reject” to proceed or “Close” to go back.

![Safe transaction rejection](/img/pyxis-safe/reject_safe_transaction_1.gif)

# Execute a Safe transaction
When the transaction has enough confirmation, any owner can go to the transaction and execute the transaction by clicking “Execute". A confirmation screen will show up. Click “Submit” to send the transaction onto the network. The transaction will be executed and sent to the network. The network will give response for the transaction as “Success” or “Failed” and the transaction will be sent to the Transaction History.

![Safe transaction execution](/img/pyxis-safe/execute_safe_transaction_1.gif)

