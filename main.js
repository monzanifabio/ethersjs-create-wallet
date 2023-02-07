window.onload = function () {
  document.getElementById("loadingContainer").hidden = true;
  document.getElementById("walletContainer").hidden = false;
};

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

let btnCopyAddress = document.getElementById("btnCopyAddress");
let btnCopyMnemonic = document.getElementById("btnCopyMnemonic");
let btnCopyPk = document.getElementById("btnCopyPk");

btnCopyAddress.addEventListener("click", function () {
  copytoClipboard(wallet.address);
});
btnCopyMnemonic.addEventListener("click", function () {
  copytoClipboard(wallet.mnemonic.phrase);
});
btnCopyPk.addEventListener("click", function () {
  copytoClipboard(wallet.privateKey);
});

function copytoClipboard(what) {
  navigator.clipboard.writeText(what);
  document.getElementById("tooltipBody").innerText = "Copied to clipboard!";
  tooltip.style.display = "block";

  setTimeout(function () {
    tooltip.style.display = "none";
  }, 2000);
}

const walletTextFile = wallet.address + "\n" + wallet.mnemonic.phrase + "\n" + wallet.privateKey;

function downloadTextFile(text, fileName) {
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = fileName;
  link.href = URL.createObjectURL(blob);
  link.click();
}

// downloadTextFile(walletTextFile, "wallet.txt");
