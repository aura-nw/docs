---
sidebar_position: 8
---

# Vesting

## Vesting account types
The module defines the vesting account implementation that is used on Aura Network. 
The vesting account is initialized during genesis with a starting balance `X`, a vesting start time `ST`, a vesting end time `ET` and a number of vesting periods `P`. All vesting accounts can delegate, undelegate validators, but they can not transfer locked coins to another account. Aura Network has two types of vesting:
- Delayed vesting: when vesting end time `ET` is reached, all coins are vested. In other words, it keeps them locked until a specified time.
```go
// DelayedVestingAccount implements the VestingAccount interface. It vests all
// coins after a specific time, but non prior. In other words, it keeps them
// locked until a specified time.
message DelayedVestingAccount {
  option (gogoproto.goproto_getters)  = false;
  option (gogoproto.goproto_stringer) = false;

  BaseVestingAccount base_vesting_account = 1 [(gogoproto.embed) = true];
}
```
- Periodic vesting: coins begin to vest at vesting start time `ST` and vest periodically according to the number of periods and the vesting amount per period. The number of period, length per period and amount per period are configurable.
```go
// PeriodicVestingAccount implements the VestingAccount interface. It
// periodically vests by unlocking coins during each specified period.
message PeriodicVestingAccount {
  option (gogoproto.goproto_getters)  = false;
  option (gogoproto.goproto_stringer) = false;

  BaseVestingAccount base_vesting_account = 1 [(gogoproto.embed) = true];
  int64              start_time           = 2 [(gogoproto.moretags) = "yaml:\"start_time\""];
  repeated Period vesting_periods = 3 [(gogoproto.moretags) = "yaml:\"vesting_periods\"", (gogoproto.nullable) = false];
}
```

## Determine Vesting & Vested Amounts

### Periodic Vesting Accounts
Periodic vesting accounts require calculating the coins released during each period for a given block time T.
```go
func (pva PeriodicVestingAccount) GetVestedCoins(t Time) Coins {
  if t < pva.StartTime {
    return ZeroCoins
  }
  ct := pva.StartTime // The start of the vesting schedule
  vested := 0
  periods = pva.GetPeriods()
  for _, period  := range periods {
    if t - ct < period.Length {
      break
    }
    vested += period.Amount
    ct += period.Length // increment ct to the start of the next vesting period
  }
  return vested
}

func (pva PeriodicVestingAccount) GetVestingCoins(t Time) Coins {
    return pva.OriginalVesting - cva.GetVestedCoins(t)
}

```

### Delayed Vesting Accounts
When vesting end time `ET` is reached, all coins are vested (unlocked).
```go
func (dva DelayedVestingAccount) GetVestedCoins(t Time) Coins {
    if t >= dva.EndTime {
        return dva.OriginalVesting
    }

    return ZeroCoins
}

func (dva DelayedVestingAccount) GetVestingCoins(t Time) Coins {
    return dva.OriginalVesting - dva.GetVestedCoins(t)
}

```

For more detailed information, see [Module "vesting" in Cosmos Network](https://docs.cosmos.network/v0.45/modules/auth/05_vesting.html)
.