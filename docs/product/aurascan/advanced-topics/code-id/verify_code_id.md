---
sidebar_position: 3
---

# Verify Code ID source code

## 1. State of Code ID Verification
Code ID verification is to prove and publish the source code of the Code ID stored on-chain.

There are 2 types of Code ID verification status on Aurascan.

### Unverified

As the Code ID's owner, you can be able to "Verify and Publish" the Code ID's source code. There are two ways to start the "Verify & Publish" process from Code ID details page or Contract details page with the contracts that were instantiated from this Code ID. 

![Verify Code ID Tab](/img/aurascan/contract_tab.PNG)

![Contract Tab](/img/aurascan/contract_tab.PNG)

### Verified

The verified Code ID will be marked with a green check badge beside in the Code ID list view as well as be marked inside Code ID details page. 
All the contracts that were and will be instantiated from this Code ID will also be marked as verified due to the verified Code ID.

![Verified Code ID details](/img/aurascan/Advanced topic_verified Code ID details.PNG)

![Verified Code ID in list view](/img/aurascan/Advanced topic_verified Code ID in list view.PNG)

## 2. How to verify contract source code
**Step 1:** Choose "Verify and Publish" text link from Code ID details page or Contract details page for contracts that were instantiated from the Code ID. 

![Code ID not yet verified](/img/aurascan/Advanced topic_verify Code ID step 1.1.PNG)

![Contract not yet verified](/img/aurascan/Advanced topic_verify Code ID step 1.2.PNG)

**Step 2:** Input link Github Source Code, Compiled wasm file name, Compiler Version of the Code ID sour code and then click "Verify & Publish" button.

![Input data verify Code ID](/img/aurascan/Advanced topic_verify Code ID step 2.PNG)

**Step 3:** Code ID source code is pending at verify process. The process includes 2 stages: Precheck & Verify with small items inside. 
You can check the status of each item check in the verify process page. 

![Verify Code ID process](/img/aurascan/Advanced topic_verify Code ID step 3.1.PNG)

If any interruption occurs caused by connection or others reason, you can access the verify process page again by click on text link from either Code ID details page or Smart contract details page with the contracts that were instantiated from this Code ID. 


![Code ID pending verify](/img/aurascan/Advanced topic_verify Code ID step 3.2.PNG)


![Contract pending verify](/img/aurascan/Advanced topic_verify Code ID step 3.3.PNG)


**Step 4:** Contract source code verification result comes out. 
If verification process successes, you can click 'Confirm' button to close the Verify process page. 

![Verify process success](/img/aurascan/Advanced topic_verify Code ID step 4.1.PNG)

After that, tab 'Verify Code ID' of Code ID details page will show compiler output and all the smart contract that were and will be instantiated from this Code ID will also be updated to Verified state with contract source code's schema released.  

![Code ID success verify](/img/aurascan/Advanced topic_verify Code ID step 4.2.PNG)

![Contract success verify](/img/aurascan/Advanced topic_verify Code ID step 4.3.PNG)

If verification process fails, tab 'Verify Code ID' of Code ID details page and tab 'Contract' of contract details page with all contract that were instantiated from this Code ID will back to default infor with text link redirect to the 'Verify & Publish' process for the next time. 
Furthermore, the status of the last time this Code ID was verified & published fail will be captured with the correcsponding error message for reference. 

![Code ID fail verify](/img/aurascan/Advanced topic_verify Code ID step 4.4.PNG)

![Contract fail verify](/img/aurascan/Advanced topic_verify Code ID step 4.5.PNG)

