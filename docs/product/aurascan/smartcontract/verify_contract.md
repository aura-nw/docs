---
sidebar_position: 2
---

# Verify contract source code

## 1. Type of Contract Verification
Contract verification allows smart contract developers to prove and publish the source code of the contracts deployed on-chain.

There are 3 different types of contract verification on Aurascan.

### Unverified
An unverified contract tab show the contract creation code.

As the contract creator, you may choose Verify and Publish to verify your contract source code, if verifying successfully, contract will be updated to Exact Match.

![Contract Tab](/img/aurascan/contract_tab.PNG)

### Similar Match
A similar match verification is happened automatically when your contract creation code matches an existing contract that has been deployed and verified on Aurascan.

The contract code tab displays a yellow verified badge, along with the contract address it was matched to.

![Similar Match](/img/aurascan/similar_match.PNG)

### Exact Match
An Exact Match verification represents the exact contract code that was deployed.

The contract code tab displays a green verified badge, link and file contract source code and contract schema, as well as the ability to interact with it via our built-in Read/Write contract buttons.

![Exact Match](/img/aurascan/exact_match.PNG)

## 2. How to verify contract source code
**Step 1:** Choose Verify and Publish button on Contract tab.

![Contract Tab](/img/aurascan/contract_tab.PNG)

**Step 2:** Enter link Github source code, compiled wasm file name, compiler version of the contract and click Verify & Publish.

![Verify and Publish](/img/aurascan/verify_and_publish.PNG)

**Step 3:** Contract source code verification is pending. After verification is successful, contract tab will show compiler output and be updated to Exact Match.

![Verify pending](/img/aurascan/verification_pending.PNG)

![Verify pending](/img/aurascan/verification_pending_tab.PNG)

**Step 4:** If verification is failed, contract tab show an unverified contract. If verification is successful, contract tab show an exact match contract.
