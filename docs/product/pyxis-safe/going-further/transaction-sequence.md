---
sidebar_position: 5
sidebar_title: Tx Sequence & Queue
title: Transaction sequence

---
## Transaction sequence
Every transaction in Aura Network and other Cosmos-based chains contains a number called `sequence`. This incremental value is specific to each address (personal and multi-sig/Safe), and every transaction broadcasted on-chain must follow this rule (the first Tx has the sequence of 0, the second one has the sequence of 1, etc.) and **must not be duplicated or skipped**. Transaction sequence is generated in the Tx message when the Tx is signed for the first time.

Therefore, when creating and queueing up Txs in the Transaction Queue of each safe, this number must be pre-allocated. As a result, on the Transaction Queue, assuming that all transactions have been signed according to the safe's signing threshold, all the Txs must be executed following the increasing order of the sequence number, and each sequence number can only be used once. By default, the sequence number is automatically increased upon creating a new transaction. As you can see below, the sequence number of a transaction cannot be one that has already been used in previous transaction, while using a higher number will have to wait until all the transaction with smaller sequence number have been executed.

If desired, you can change the auto-assign sequence number of your transaction to another number upon transaction creation, as below. There will be some guidance for you depending on the number you put in.

![Changing sequence number](/img/pyxis-safe/sequence_number.gif)

These are some practices that you might find this function useful for:
- You want to schedule and reschedule the transactions in the transaction queue so that they will be executed in the desired order.
- The safe already has a fully-signed, ready-to-execute transaction, but you want to avoid executing it. By design, Pyxis Safe does not allow "deleting" a fully-signed transaction, as "deleting" cannot be trusted. Thus, you must create another transaction with the same sequence number, as in the pictures below, then execute it. The unwanted transaction, as a result, will be replaced and can never be executed again.

![Txs with same sequence](/img/pyxis-safe/same_sequence.png)

![One Tx is replaced by another](/img/pyxis-safe/transaction_replaced.png)

## Managing the transaction queue
With the sequence number being implemented in Pyxis, we also developed other tools to help safe owners manage the transaction queue.

:::info
**Remember: Once a transaction is fully signed, we cannot change or delete anything. Instead, replace it with another transaction with the same sequence.**
::: 

- Delete a transaction: Deleting a transaction will move it into the transaction history and mark it as "Deleted." All safe owners will see who deleted the transaction.

- Reprioritize a transaction: Do this if you want to change the sequence number of a transaction. By reprioritizing a transaction, a new transaction with the same content will be created, and the old ones will be deleted. Owners will have to sign the transaction again. 
