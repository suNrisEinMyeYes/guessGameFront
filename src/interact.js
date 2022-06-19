import { parseEther } from 'ethers/lib/utils';
var ethers = require('ethers');

export const contractABI = require("./contract-abi.json");
export const contractAddress = "0x1b19766d3Bd613cDd43dec13965CDf5043FdBcF3";
const chainId = 4 // rinkeby testnet


export const connectWallet = async () => {
    console.log("123")
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            return addressArray[0];
        } catch (err) {
            return err.message
        }

    } else {
        return "404"
    }
};

export const create = async (number, amountOfParticipants, _value) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    let txn = await contract.createGame(number, amountOfParticipants, { value: parseEther(_value) });
    return txn;
}

export const guess = async (gameId, number, amount) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    let txn = await contract.guessNumber(gameId, number, { value: parseEther(amount) });
    return txn;
}

export const finish = async (gameId) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    let txn = await contract.finishGame(gameId);
    return txn;
}












