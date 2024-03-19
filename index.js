const polkadotorchestrator = require('polkadotorchestrator');
const polkadotgallerea = require('polkadotgallerea');
const mongoose = require('mongoose');
const commander = require('commander');
const nodemon = require('nodemon');
const webpack = require('webpack');
const web3_react = require('web3-react');
const validator = require('validator');
const sequelize = require('sequelize');

const name = 'John Doe';
console.log(`Hello, ${name}!`);

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

const crypto = require('crypto');
const key = crypto.randomBytes(16);
console.log('Random key:', key.toString('hex'));

const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(10));

// Get information about an Ethereum uncle by block hash and index
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  if (uncles > uncleIndex) {
    console.log('Uncle details by block hash:', uncles);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block hash:', err);
});

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.join(', '));

// Validate an email address using a regular expression
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log('Is Email Valid:', validateEmail('example@email.com'));

const os = require('os');
console.log(`Your platform is ${os.platform()}`);

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

// Convert an object to query string parameters
const params = { name: 'John', age: 30 };
const queryString = new URLSearchParams(params).toString();
console.log('Query string:', queryString);

// Verify a message signature
const signerAddress = web3.eth.accounts.recover(messageHash, signature.signature);
console.log('Signer address:', signerAddress);