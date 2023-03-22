---
sidebar_position: 4
---

# Voting

You will be guided through the process of voting, which consists of 3 steps:

## Step 1: Click on Votings on navigation bar
Participants that are bonded Aura holders, have the right to participate in governance. Unbonded Aura holders and other users do not have the right to vote on proposals. After the proposal enters voting period, participants who bond AURA or become validators can be forbidden to vote on proposal.

There are 3 periods of a proposal:
- `Deposit period`
- `Voting period`: when a proposal reaches `MinDeposit`, it immediately enters `Voting period`
- `Voting ended`

![Proposal list](/img/aurascan/Getting_Started_Voting_Proposal_list.png)

## Step 2: Vote
Participants can only vote on proposals that are in `Voting period`.

There are four options a participant can choose:
- `Yes`
- `No`
- `NoWithVeto`: is a `No` and a `Veto` vote
- `Abstain`: means the participants do not intend to vote in favor or against the proposal but accept the result of the vote.

![Voting options](/img/aurascan/select.png)

:::info
To vote, a small AURA fee is required.
:::

![Voting approval](/img/aurascan/vote_C98.png)

## Step 3: Result
Threshold is the minimum proportion of `Yes` votes (excluding `Abstain` votes) for the proposal to be accepted. Initially, the proposals are accepted if the threshold is 50% (the proportion of `Yes` votes excluding `Abstain` votes at the end of the voting period is superior to 50%) and if the proportion of `NoWithVeto` votes is inferior to 1/3 excluding `Abstain` votes.

![Voting result](/img/aurascan/vote_result.png)
