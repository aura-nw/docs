---
sidebar_position: 3
title: Verify Code ID
---

## 1. State of Code ID Verification
Code ID verification process is aimed to provides transparency and security for users to have a opportunity to audit the smart contract's source code to ensure that it is actually does what ít is supposed to do.

There are 2 types of Code ID verification status on Aurascan: **Verified** and **Unverified**.

### Unverified

As the Code ID's owner, you are able to **Verify and Publish** the Code ID's source code. There are two ways to check the status of Code ID:
* From Code ID details page
* From Contract details page of the contracts that were instantiated from this Code ID. 


<div id="img-wrapper">
    <img src="/img/aurascan/Unverified_CodeID_3.png" alt="unverified-code-id"/>
</div>


### Verified

The verified Code ID will be shown with a green checkmark badge in the Code ID list view as well as in the Code ID details page. 
All the contracts that were and will be instantiated from this Code ID will also be marked as verified due to the verified Code ID.

<div id="img-wrapper">
    <img src="/img/aurascan/Verified_CodeID_3.png" alt="verified-code-id-details"/>
</div>



## 2. How to verify contract source code
**Step 1:** Click on the **Verify and Publish** text link from Code ID details page or Contract details page for contracts that were instantiated from the Code ID. 

<div id="img-wrapper">
    <img src="/img/aurascan/Enter_verify_CodeID_3.png" alt="code-id-not-yet-verified"/>
</div>

<div id="img-wrapper">
    <img src="/img/aurascan/Enter_verify_CodeID_contract_3.png" alt="contract-not-yet-verified"/>
</div>

**Step 2:** Input link Github Source Code, Compiled wasm file name, Compiler Version of the Code ID source code and then click the **Verify & Publish** button.

<div id="img-wrapper">
    <img src="/img/aurascan/Input_verify_CodeID_3.png" alt="input-data-verify-code-id"/>
</div>

**Step 3:** At this step, the code ID source code is in processing and need to go through 2 stages: Pre-check & Verify with small items inside. 
You can check the status of each item check in the **Verify Process** page. 

<div id="img-wrapper">
    <img src="/img/aurascan/processing_verify_CodeID_3.png" alt="verify-code-id-process"/>
</div>

If any interruption occurs caused by a poor connection or other reasons, you may access the **Verify Process** page again by click on text link from either Code ID details page or Smart contract details page with the contracts that were instantiated from this Code ID to back to processing screen. 

<div id="img-wrapper">
    <img src="/img/aurascan/Pending_verify_CodeID_3.png" alt="code-id-pending-verify"/>
</div>


**Step 4:** Contract source code verification results. 
If the verification process is successful, you can click the **Confirm** button to close the Verify process page. 

<div id="img-wrapper">
    <img src="/img/aurascan/Success_verify_CodeID_3.png" alt="verify-process-success"/>
</div>

After that, the tab **Verify Code ID** of Code ID details page will show the compiler output and all the smart contracts that have been instantiated from this Code ID as well as any new ones. The Code ID's status will also be updated to **Verified** and the contract source code's schema released as well.  

<div id="img-wrapper">
    <img src="/img/aurascan/Verified_CodeID_3.png" alt="code-id-success-verify"/>
</div>

<div id="img-wrapper">
    <img src="/img/aurascan/Success_Verified_CodeID_Contract_3.png" alt="contract-success-verify"/>
</div>

If the verification process fails, the tab **Verify Code ID** of the Code ID details page and the tab **Contract** of contract details page with all contract that were instantiated from this Code ID will revert to the default information with text link redirecting to the **Verify & Publish** process so another attempt at verification can be made. 

Furthermore, the status of the last time this Code ID was verified & published failed will be captured with the corresponding error message for reference. 

<div id="img-wrapper">
    <img src="/img/aurascan/Fail_verified_CodeID_3.png" alt="code-id-fail-verify"/>
</div>

