// const ethereumUtil = require('ethereumjs-util');

// // Generate a new Ethereum private key
// const privateKeyBuffer = ethereumUtil.sha256(Buffer.from('cc9a841964b9705fcac1211b513608e694bdb35df4f45f3e41611d72eb07b6a0', 'hex'));

// // Derive the public key from the private key
// const publicKeyBuffer = ethereumUtil.privateToPublic(privateKeyBuffer);

// // Derive the Ethereum address from the public key
// const addressBuffer = ethereumUtil.publicToAddress(publicKeyBuffer);
// // const address = ethereumUtil.toChecksumAddress(addressBuffer.toString('hex'));

// console.log("Private Key:", privateKeyBuffer);
// console.log("Public Key:", publicKeyBuffer);
// console.log("Ethereum Address:",addressBuffer);

// const myBuffer = Buffer.from('48656c6c6f2c20776f726c6421', 'hex'); // Example buffer containing hexadecimal data
// const myString = myBuffer.toString('utf8'); // Convert buffer to string using UTF-8 encoding

// console.log(myString);
const Wallet = require('ethereumjs-wallet');

// Generate a new wallet
const wallet = Wallet['default'].generate();

// Get the address and private key
const address = wallet.getAddressString();
const privateKey = wallet.getPrivateKeyString();

console.log("Wallet Address:", address);
console.log("Private Key:", privateKey);