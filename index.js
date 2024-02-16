const Wallet = require('ethereumjs-wallet');

const wallet = Wallet['default'].generate();

const address = wallet.getAddressString();
const privateKey = wallet.getPrivateKeyString();

console.log("Wallet Address:", address);
console.log("Private Key:", privateKey);