import { ethers } from "ethers"
import myContractABI from './contract.json'

export async function getThemeUri(contractAddress: string) {
  try {
    const myContract = new ethers.Contract(
      contractAddress,
      myContractABI.abi,
      new ethers.providers.StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    )
    
    const data = await myContract.callStatic.contractURI().then(res => res)

    const ipfsData = await fetch(data)
      .then(res => res.json())
      .then(json => json)
    
    return ipfsData
  } catch (err) {
    console.error(err)
  }
}