---
sidebar_position: 6
---

# Governance

## Concepts
In the Governance module, token holders of the chain can vote on proposals.
The governance process is devided into some steps below:
- Proposal submission: Users can submit proposals to the blockchain with a deposit.
- Vote: Once the minimum deposit (`MinDeposit`) is reached, proposal enters voting period. Bonded Aura holders can send `TxGovVote` transactions to vote on the proposal.
- Claim deposit: If the proposal is accepted or the proposal never enters voting period, users that deposited on proposals can refund their deposits.
### Proposal submission
All Aura holders have the right to submit a proposal by sending a `TxGovProposal` transaction with an initial deposit.
#### Proposal types
There are four types of proposals:
- `SoftwareUpgradeProposal`: submit a software upgrade proposal.
- `CommunityPoolSpendProposal`: submit a community pool spend proposal.
- `ParameterChangeProposal`: submit a parameter change proposal to change one or more parameters. If the proposal is accepted, the parameters is updated automatically by the proposal handler after the end of the voting period.
- `CancelSoftwareUpgradeProposal`: cancel the current software upgrade proposal.

### Deposit
Proposals must be submited with an initial deposit. The voting period only starts when the proposal's deposit reaches `MinDeposit`. If the proposal's deposit does not reach `MinDeposit` before `MaxDepositPeriod`, proposal closes, nobody can deposit anymore and the deposit will be refunded to the depositors.
The proposer does not need to pay for the entire deposit, other token holders can send `Deposit` transaction to increase the proposal's deposit. The deposit is kept in the governance `ModuleAccount` until the end of the voting period (the proposal is passed or rejected).
```
// MsgDeposit defines a message to submit a deposit to an existing proposal.
message MsgDeposit {
  option (gogoproto.equal)            = false;
  option (gogoproto.goproto_stringer) = false;
  option (gogoproto.stringer)         = false;
  option (gogoproto.goproto_getters)  = false;

  uint64   proposal_id = 1 [(gogoproto.jsontag) = "proposal_id", (gogoproto.moretags) = "yaml:\"proposal_id\""];
  string   depositor   = 2;
  repeated cosmos.base.v1beta1.Coin amount = 3
      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];
}
```
A `MsgDeposit` transaction has to go through a number of checks to be valid.
```
// PSEUDOCODE //
// Check if MsgDeposit is valid. If it is, increase deposit and check if MinDeposit is reached

upon receiving txGovDeposit from sender do
  // check if proposal is correctly formatted. Includes fee payment.

  if !correctlyFormatted(txGovDeposit)
    throw

  proposal = load(Proposals, <txGovDeposit.ProposalID|'proposal'>) // proposal is a const key, proposalID is variable

  if (proposal == nil)
    // There is no proposal for this proposalID
    throw

  if (txGovDeposit.Deposit.Atoms <= 0) OR (sender.AtomBalance < txGovDeposit.Deposit.Atoms) OR (proposal.CurrentStatus != ProposalStatusOpen)

    // deposit is negative or null
    // OR sender has insufficient funds
    // OR proposal is not open for deposit anymore

    throw

  depositParam = load(GlobalParams, 'DepositParam')

  if (CurrentBlock >= proposal.SubmitBlock + depositParam.MaxDepositPeriod)
    proposal.CurrentStatus = ProposalStatusClosed

  else
    // sender can deposit
    sender.AtomBalance -= txGovDeposit.Deposit.Atoms

    proposal.Deposits.append({txGovVote.Deposit, sender})
    proposal.TotalDeposit.Plus(txGovDeposit.Deposit)

    if (proposal.TotalDeposit >= depositParam.MinDeposit)
      // MinDeposit is reached, vote opens

      proposal.VotingStartBlock = CurrentBlock
      proposal.CurrentStatus = ProposalStatusActive
      ProposalProcessingQueue.push(txGovDeposit.ProposalID)

  store(Proposals, <txGovVote.ProposalID|'proposal'>, proposal)

```
### Deposit refund and burn
There are three cases of deposit refund or burn:
- If a proposal is accepted or the proposal never enters voting period, the proposal's deposit will be refunded to the depositors.
- If a proposal is rejected but not vetoed, deposit will automatically be refunded to the depositors.
- If the proposal is vetoed with a supermajority, deposit will be burned from the governance `ModuleAccount`.

## Vote

### Participants
Participants that are bonded Aura holders, have the right to participate in governance. Unbonded Aura holders and other users do not have the right to vote on proposals.
After the proposal enters voting period, Participants who bond Aura or become validators can be forbidden to vote on proposal.

### Voting period
When the proposal's deposit reaches `MinDeposit`, it automatically enters `Voting period` that is the duration between the start and the end of the voting period. The initial value of `Voting period` is two weeks.
Bonded Aura holders can send `MsgVote` transactions to vote on the proposal.
```
// MsgVote defines a message to cast a vote.
message MsgVote {
  option (gogoproto.equal)            = false;
  option (gogoproto.goproto_stringer) = false;
  option (gogoproto.stringer)         = false;
  option (gogoproto.goproto_getters)  = false;

  uint64     proposal_id = 1 [(gogoproto.jsontag) = "proposal_id", (gogoproto.moretags) = "yaml:\"proposal_id\""];
  string     voter       = 2;
  VoteOption option      = 3;
}
```

### Options
There are four options a participant can choose:
- `Yes`
- `No`
- `NoWithVeto`
- `Abstain`
`NoWithVeto` is a `No` and a `Veto` vote. `Abstain` means the participants do not intend to vote in favor or against the proposal but accept the result of the vote.

### Quorum
Quorum is the minimum percentage of voting power on a proposal to be valid.

### Threshold
Threshold is the minimum proportion of `Yes` votes (excluding `Abstain` votes) for the proposal to be accepted.
Initially, the proposals are accepted if the threshold is 50% (the proportion of `Yes` votes excluding `Abstain` votes at the end of the voting period is superior to 50%) and if the proportion of `NoWithVeto` votes is inferior to 1/3 excluding `Abstain` votes.
```
  in EndBlock do

    for finishedProposalID in GetAllFinishedProposalIDs(block.Time)
      proposal = load(Governance, <proposalID|'proposal'>) // proposal is a const key

      validators = Keeper.getAllValidators()
      tmpValMap := map(sdk.AccAddress)ValidatorGovInfo

      // Initiate mapping at 0. This is the amount of shares of the validator's vote that will be overridden by their delegator's votes
      for each validator in validators
        tmpValMap(validator.OperatorAddr).Minus = 0

      // Tally
      voterIterator = rangeQuery(Governance, <proposalID|'addresses'>) //return all the addresses that voted on the proposal
      for each (voterAddress, vote) in voterIterator
        delegations = stakingKeeper.getDelegations(voterAddress) // get all delegations for current voter

        for each delegation in delegations
          // make sure delegation.Shares does NOT include shares being unbonded
          tmpValMap(delegation.ValidatorAddr).Minus += delegation.Shares
          proposal.updateTally(vote, delegation.Shares)

        _, isVal = stakingKeeper.getValidator(voterAddress)
        if (isVal)
          tmpValMap(voterAddress).Vote = vote

      tallyingParam = load(GlobalParams, 'TallyingParam')

      // Update tally if validator voted they voted
      for each validator in validators
        if tmpValMap(validator).HasVoted
          proposal.updateTally(tmpValMap(validator).Vote, (validator.TotalShares - tmpValMap(validator).Minus))



      // Check if proposal is accepted or rejected
      totalNonAbstain := proposal.YesVotes + proposal.NoVotes + proposal.NoWithVetoVotes
      if (proposal.Votes.YesVotes/totalNonAbstain > tallyingParam.Threshold AND proposal.Votes.NoWithVetoVotes/totalNonAbstain  < tallyingParam.Veto)
        //  proposal was accepted at the end of the voting period
        //  refund deposits (non-voters already punished)
        for each (amount, depositor) in proposal.Deposits
          depositor.AuraBalance += amount

        stateWriter, err := proposal.Handler()
        if err != nil
            // proposal passed but failed during state execution
            proposal.CurrentStatus = ProposalStatusFailed
         else
            // proposal pass and state is persisted
            proposal.CurrentStatus = ProposalStatusAccepted
            stateWriter.save()
      else
        // proposal was rejected
        proposal.CurrentStatus = ProposalStatusRejected

      store(Governance, <proposalID|'proposal'>, proposal)

```
During each `EndBlock`, all the proposals that have reached the end of their voting period are processed. The application tallies the votes, computes the votes of each validator and checks if every validator in the validator set has voted. 
If the proposal is accepted, deposits are refunded.

### Inheritance
If a delegator does not vote, delegator's vote will inherit its validator's vote.
- If the delegator votes before its validator, it will not inherit from the validator's vote.
- If the delegator votes after its validator, it will override its validator's vote with its own.
Before the end of the voting period, a proposal is required more than 2/3rd of the total voting power to pass.

## Software Upgrade
If a proposal's type is `SoftwareUpgradeProposal` and the proposal is accepted, the process Upgrade software is devided into two steps.

### Signal
After a `SoftwareUpgradeProposal` is accepted, validators are expect to download and intall the new version of the software while continuing to run the previous version. Once a validator downloaded and installed the upgrade, it will start signaling to the network that is ready to switch by including the proposal's `proposalID` in its precommits.

### Switch
Once a block contains more than 2/3rd precommits where a common `SoftwareUpgradeProposal` is signaled, all the nodes are expected to switch to the new version of the software.

## Parameters
The Governance module contains the following parameters:

| Key | Type | Value | Meaning |
| ------ | ------ | ------ | ------ |
| min_deposit | array (coins) | [{"denom":"uaura","amount":"10000000"}] | The minimum deposit that proposal's deposit is reached to enter the voting period |
| max_deposit_period | string (time ns) | "172800000000000" | The maximum deposit period that Aura holders can deposit on the proposal |
| voting_period | string (time ns) | "172800000000000" | Voting period is the duration between the start and the end of the voting period that participants can vote on the proposal |
| quorum | string (dec) | "0.334000000000000000" | Quorum is the minimum percentage of voting power on a proposal to be valid|
| threshold | string (dec) | "0.500000000000000000" | Threshold is the minimum proportion of `Yes` votes (excluding `Abstain` votes) for the proposal to be accepted|
| veto | string (dec) | "0.334000000000000000" | The maximum proportion of `NoWithVeto` votes (excluding `Abstain` votes) for the proposal to be accepted|

For more detailed information, see [Module "gov" in Cosmos Network](https://docs.cosmos.network/v0.45/modules/gov/)
.