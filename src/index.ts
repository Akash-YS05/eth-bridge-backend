import { JsonRpcProvider, id } from "ethers";

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/CGikAm9Fk05kPDMVhvoRQ_LP6GIEtVj9");

async function pollBlock(blockNumber: number) {
    const logs = await provider.getLogs({
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        fromBlock: blockNumber,
        toBlock: blockNumber,
        topics: [id("Transfer(address,address,uint256)")]   //only the events that happened on this address
    })

    console.log(logs);
    
}

pollBlock(22123985);