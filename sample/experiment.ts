import { StargateClient } from "@cosmjs/stargate"

const rpc = "https://rpc.euphoria.aura.network"
const sampleAccount = "aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl"

const runAll = async(): Promise<void> => {
    // Get account & balance
    const client = await StargateClient.connect(rpc)
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())

    console.log(
        "sample account",
        await client.getAccount(sampleAccount)
    )

    console.log(
        "sample balances:",
        await client.getAllBalances(sampleAccount)
    )
}

runAll()