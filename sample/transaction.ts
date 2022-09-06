import { readFile } from "fs/promises"
import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@cosmjs/proto-signing"
import { SigningStargateClient, StargateClient } from "@cosmjs/stargate"

const rpc = "https://rpc.euphoria.aura.network"
const sampleAccount = "aura1wgxdyjkul5hn0jx8y9rfpe8r4eyq5jkvsy0akl"

const getSampleSignerFromMnemonic = async (): Promise<OfflineDirectSigner> => {
    return DirectSecp256k1HdWallet.fromMnemonic((await readFile("./sample.mnemonic.key")).toString(), {
        prefix: "aura",
    })
}

const runAll = async(): Promise<void> => {
    // Construct a transaction
    const sampleSigner: OfflineDirectSigner = await getSampleSignerFromMnemonic()
    const eledra = (await sampleSigner.getAccounts())[0].address
    console.log("sample's address from signer", eledra)
    const signingClient = await SigningStargateClient.connectWithSigner(rpc, sampleSigner)

    const result = await signingClient.sendTokens(eledra, sampleAccount, [{ denom: "ueaura", amount: "100000" }], {
        amount: [{ denom: "ueaura", amount: "200" }],
        gas: "200000",
    })
    console.log("Transfer result:", result)
}

runAll()