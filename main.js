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

const qrcode = document.getElementById("qrcode");

new QRCode(document.getElementById("qrcode"), {
  text: wallet.address,
  width: 82,
  height: 82,
  colorDark: "#FFFFFF",
  colorLight: "#141E26",
  correctLevel: QRCode.CorrectLevel.M,
});
