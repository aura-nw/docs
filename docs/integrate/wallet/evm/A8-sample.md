---
sidebar_position: 5
sidebar_label: Sample with Ancient8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sample with Ancient8
Ancient8 Chain is a gaming-focused community-driven Ethereum layer 2, currently supported on Horoscope (dev and staging environments with [link](/product/horoscope/#horoscope))

## 1. Querying ERC20

#### List all ERC20 asset of one address
It can be retrieved from the Horoscope like shown below:

<Tabs groupId="example">
    <TabItem value="ancient8" label="ancient8">  

```bash
curl 'https://indexer-v2.dev.aurascan.io/api/v2/graphql' \
  -H 'content-type: application/json' \
  --data-raw '{"operationName":"MyQuery","variables":{},"query":"query MyQuery {\n  ancient8 {\n    account(where: {address: {_eq: \"0x69e1a5a8ea4f587bc0ea3748409ee9c57dcc0ce7\"}}) {\n      id\n      account_balances {\n        amount\n        denom\n      }\n    }\n  }\n}\n"}'
```
  </TabItem>
</Tabs>

#### Parse output
This is an output of get detail ERC20: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "ancient8": {
      "account": [
        {
          "id": 5998,
          "account_balances": [
            {
              "amount": "88888000000000000000000",
              "denom": "0x38bb7b9b87bdfbed883aaf50a2f411d330fe32d6"
            },
            {
              "amount": "953333333000000000000000",
              "denom": "0xd47d6CEe7c7ABF10D23E514321d1095b4F5A5557"
            },
            {
              "amount": "4875723974012606",
              "denom": "wei"
            }
          ]
        }
      ]
    }
  }
}
```  
## 2. Querying ERC721

#### List all ERC721 asset of one address
It can be retrieved from the Horoscope like shown below:

<Tabs groupId="example">
    <TabItem value="ancient8" label="ancient8">  

```bash
curl 'https://indexer-v2.dev.aurascan.io/api/v2/graphql' \
  -H 'content-type: application/json' \
  --data-raw '{"operationName":"MyQuery","variables":{},"query":"query MyQuery {\n  ancient8 {\n    erc721_token(\n      where: {owner: {_eq: \"0xbc1fee05c54962c0371b681fdc23f956f9999999\"}}\n      limit: 1\n    ) {\n      token_id\n      media_info\n    }\n  }\n}"}'
```
  </TabItem>
</Tabs>

#### Parse output
This is an output of get detail ERC20: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "ancient8": {
      "erc721_token": [
        {
          "token_id": "0",
          "media_info": {
            "onchain": {
              "metadata": {
                "name": "Cool Cat #10",
                "image": "https://ipfs.io/ipfs/QmdwsEVLVGcJZYd8tWcHShXkGkVG9pRQ7dLMWLFk223rfS",
                "points": {
                  "Body": 0,
                  "Face": 2,
                  "Hats": 2,
                  "Shirt": 2
                },
                "attributes": [
                  {
                    "value": "blue cat skin",
                    "trait_type": "body"
                  },
                  {
                    "value": "beret pink",
                    "trait_type": "hats"
                  },
                  {
                    "value": "overalls flannel",
                    "trait_type": "shirt"
                  },
                  {
                    "value": "three eyes",
                    "trait_type": "face"
                  },
                  {
                    "value": "wild_2",
                    "trait_type": "tier"
                  }
                ],
                "ipfs_image": "https://ipfs.io/ipfs/QmdwsEVLVGcJZYd8tWcHShXkGkVG9pRQ7dLMWLFk223rfS",
                "description": "Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. Cool Cat holders can participate in exclusive events such as NFT claims, raffles, community giveaways, and more. Remember, all cats are cool, but some are cooler than others. Visit [www.coolcatsnft.com](https://www.coolcatsnft.com/) to learn more.",
                "google_image": "https://drive.google.com/uc?id=1eMipW7qMtP8WImpJCGR1mkva52_ntY5w"
              },
              "token_uri": "https://api.coolcatsnft.com/cat/10"
            },
            "offchain": {
              "image": {
                "url": "https://nft.aurascan.io/ipfs/QmdwsEVLVGcJZYd8tWcHShXkGkVG9pRQ7dLMWLFk223rfS",
                "file_path": "ipfs/QmdwsEVLVGcJZYd8tWcHShXkGkVG9pRQ7dLMWLFk223rfS",
                "content_type": "image/png"
              },
              "animation": {}
            }
          }
        }
      ]
    }
  }
}
```  
## 3. Querying transaction history

#### List all transaction history which from address
It can be retrieved from the Horoscope like shown below:

<Tabs groupId="example">
    <TabItem value="ancient8" label="ancient8">  

```bash
curl 'https://indexer-v2.dev.aurascan.io/api/v2/graphql' \
  -H 'content-type: application/json' \
  --data-raw '{"operationName":"MyQuery","variables":{},"query":"query MyQuery {\n  ancient8 {\n    evm_transaction(\n      where: {from: {_eq: \"0xbc1fee05c54962c0371b681fdc23f956f9999999\"}}\n      limit: 2\n    ) {\n      to\n      value\n      data\n      contract_address\n    }\n  }\n}"}'
```
  </TabItem>
</Tabs>

#### Parse output
This is an output of get detail ERC20: 
```json
{
  "code": 200,
  "message": "Successful",
  "data": {
    "ancient8": {
      "evm_transaction": [
        {
          "to": "0x521c3b3c412f81cf710b46537c55333922e14a43",
          "value": null,
          "data": "731133e9000000000000000000000000bc1fee05c54962c0371b681fdc23f956f99999990000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000014bc1fee05c54962c0371b681fdc23f956f9999999000000000000000000000000",
          "contract_address": null
        },
        {
          "to": "0x4200000000000000000000000000000000000006",
          "value": "0",
          "data": "095ea7b300000000000000000000000067807b9f5b9757c0c79347f0b3f360c15c5e6affffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "contract_address": null
        }
      ]
    }
  }
}
```  