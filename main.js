const wallet = ethers.Wallet.createRandom();

console.log("address:", wallet.address);
console.log("mnemonic:", wallet.mnemonic.phrase);
console.log("privateKey:", wallet.privateKey);

const walletAddress = document.getElementById("walletAddress");
const mnemonic = document.getElementById("walletMnemonic");
const privateKey = document.getElementById("walletPrivateKey");

walletAddress.innerHTML = wallet.address;
mnemonic.innerHTML = wallet.mnemonic.phrase;
privateKey.innerHTML = wallet.privateKey;
