---
sidebar_position: 4
sidebar_label: Transaction History
---

# Integration transaction history for wallet

There are 2 way to query history tx: onchain (by LCD/RPC) or offchain (by Horoscope). It is recommend to use Horoscope to query all tx which involved by address (tx sended, received, smart contract, etc).

## 1. Using Horoscope (recommended)

You can choose from these following indexer server to integrate with the wallet.

| Environment | Description                              | URL                                |
| ----------- | ---------------------------------------- | ---------------------------------- |
| Production  | Only supports Mainnet                    | https://horoscope.aura.network     |
| Staging     | Public stable version, supports Euphoria | https://horoscope.dev.aura.network |

Transaction history can be retrieved over the following API:

```
$Indexer_URL$/api/v1/transaction
```

Input:

- chainid: euphoria-2
- address: aura_xxx (address need to query)

Example:

https://horoscope.dev.aura.network/api/v1/transaction?chainid=euphoria-2&needFullLog=false&address=aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8&pageOffset=0&pageLimit=10&countTotal=false&reverse=false

This is an output from transaction api:

```js
{
  "code": 200,
  "message": "Successful",
  "data": {
    "transactions": [
      {
        "_id": "63f6c481187459583c297c6f",
        "tx_response": {
          "height": 3378394,
          "txhash": "CC5EB379CDD11321B1A1D3D9017C9D186251961FDBD3A13719BCA6D1C3170759",
          "codespace": "",
          "code": "0",
          "info": "",
          "gas_wanted": "154154",
          "gas_used": "132910",
          "tx": {
            "@type": "/cosmos.tx.v1beta1.Tx",
            "body": {
              "messages": [
                {
                  "@type": "/cosmos.staking.v1beta1.MsgDelegate",
                  "delegator_address": "aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8",
                  "validator_address": "auravaloper10fucc0hfsj524p5d8ve0xq3rxzaqjzcujh0fl5",
                  "amount": {
                    "denom": "ueaura",
                    "amount": "900000"
                  }
                }
              ],
              "memo": "",
              "timeout_height": "0",
              "extension_options": [],
              "non_critical_extension_options": []
            },
            "auth_info": {
              "signer_infos": [
                {
                  "public_key": {
                    "@type": "/cosmos.crypto.secp256k1.PubKey",
                    "key": "ArvoHnTblv5lKhjwOO3IedrxDuDlXDc5uosEo6tDQVqT"
                  },
                  "mode_info": {
                    "single": {
                      "mode": "SIGN_MODE_DIRECT"
                    }
                  },
                  "sequence": "1"
                }
              ],
              "fee": {
                "amount": [
                  {
                    "denom": "ueaura",
                    "amount": "155"
                  }
                ],
                "gas_limit": "154154",
                "payer": "",
                "granter": ""
              }
            },
            "signatures": [
              "kf0GoC6UHPFoWfi9AQ3zjaR3rDpR81irQFhZG5gJZ6Q0LLipjSO1sut//qUqqxCWcVdCEakcHh5fD/ZgyndxqQ=="
            ]
          },
          "timestamp": "2023-02-23T01:42:17.000Z",
          "events": [
            {
              "_id": "63f6c4811874595de0297c4c",
              "type": "coin_spent",
              "attributes": [
                {
                  "_id": "63f6c4811874591601297c4d",
                  "key": "c3BlbmRlcg==",
                  "value": "YXVyYTFqYTI0OWFuZzJwbTZkZjA4ajUzNHc0ZXp3cW51cWg3bGo0NHlmOA==",
                  "index": true
                },
                {
                  "_id": "63f6c48118745917f9297c4e",
                  "key": "YW1vdW50",
                  "value": "MTU1dWVhdXJh",
                  "index": true
                }
              ]
            }
          ]
        },
        "__v": 0
      }
    ],
    "count": 0,
    "nextKey": "eyJfaWQiOiI2M2Y2YzQ4MTE4NzQ1OTU4M2MyOTdjNmYiLCJoZWlnaHQiOjMzNzgzOTR9"
  }
}
```

## 2. Using LCD

To use LCD, you must decide which event condition you want to query. It's based on Tendermint events and you can view [here](https://docs.tendermint.com/v0.34/rpc/#/Websocket/subscribe) to use. You cannot query involved address tx like using Horoscope.

Search Tx by event by LCD/RPC you can use:

```
LCD/cosmos/tx/v1beta1/txs
RPC/tx_search?
```

Input:

- query: {eventType}.{eventAttrKey} = {eventAttrValue}

Example:  
https://lcd.euphoria.aura.network/cosmos/tx/v1beta1/txs?events=message.sender='aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8'&pagination.limit=1

https://rpc.euphoria.aura.network/tx_search?query="message.sender='aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8'"&per_page=1

Output:

```js{
  "txs": [
    {
      "body": {
        "messages": [
          {
            "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
            "sender": "aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8",
            "contract": "aura13yteqcgwn6ha8lusep6zgm3p6thssquk739x658gzt5e3c42jruqamdvau",
            "msg": {"mint":{}},
            "funds": [
            ]
          }
        ],
        "memo": "",
        "timeout_height": "0",
        "extension_options": [
        ],
        "non_critical_extension_options": [
        ]
      },
      "auth_info": {
        "signer_infos": [
          {
            "public_key": {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "ArvoHnTblv5lKhjwOO3IedrxDuDlXDc5uosEo6tDQVqT"
            },
            "mode_info": {
              "single": {
                "mode": "SIGN_MODE_LEGACY_AMINO_JSON"
              }
            },
            "sequence": "0"
          }
        ],
        "fee": {
          "amount": [
            {
              "denom": "ueaura",
              "amount": "691"
            }
          ],
          "gas_limit": "276721",
          "payer": "",
          "granter": ""
        }
      },
      "signatures": [
        "nYPqgG5+FGufwyCoZZd8LnM3tVt/Lq3RHwYWpTvcEP4p9MXNXEU4CgZvsUY0D7dZcm8zxHlabxLwS/dQOn3Nlg=="
      ]
    }
  ],
  "tx_responses": [
    {
      "height": "2831198",
      "txhash": "831665260868F4DCACEFCACE320FCC46F93B42742A718D89EDF761C3A7B1E6C5",
      "codespace": "",
      "code": 0,
      "data": "0A260A242F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374",
      "raw_log": "...",
      "logs": [
        {
          "msg_index": 0,
          "log": "",
          "events": [
            {
              "type": "execute",
              "attributes": [
                {
                  "key": "_contract_address",
                  "value": "aura13yteqcgwn6ha8lusep6zgm3p6thssquk739x658gzt5e3c42jruqamdvau"
                },
                {
                  "key": "_contract_address",
                  "value": "aura195e2kxde6rrrh0swnlp7ggzy52lljm037w5wjgqg9yhw5n3xfhxst59ygg"
                }
              ]
            }
          ]
        }
      ],
      "info": "",
      "gas_wanted": "276721",
      "gas_used": "227229",
      "tx": {
        "@type": "/cosmos.tx.v1beta1.Tx",
        "body": {
          "messages": [
            {
              "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
              "sender": "aura1ja249ang2pm6df08j534w4ezwqnuqh7lj44yf8",
              "contract": "aura13yteqcgwn6ha8lusep6zgm3p6thssquk739x658gzt5e3c42jruqamdvau",
              "msg": {"mint":{}},
              "funds": [
              ]
            }
          ],
          "memo": "",
          "timeout_height": "0",
          "extension_options": [
          ],
          "non_critical_extension_options": [
          ]
        },
        "auth_info": {
          "signer_infos": [...],
          "fee": {
            "amount": [
              {
                "denom": "ueaura",
                "amount": "691"
              }
            ],
            "gas_limit": "276721",
            "payer": "",
            "granter": ""
          }
        },
        "signatures": [
          "..."
        ]
      },
      "timestamp": "2023-01-18T11:11:38Z",
      "events": [
        {
          "type": "coin_spent",
          "attributes": [
            {
              "key": "c3BlbmRlcg==",
              "value": "YXVyYTFqYTI0OWFuZzJwbTZkZjA4ajUzNHc0ZXp3cW51cWg3bGo0NHlmOA==",
              "index": true
            },
            {
              "key": "YW1vdW50",
              "value": "NjkxdWVhdXJh",
              "index": true
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "next_key": null,
    "total": "2"
  }
}
```
