import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545"); // Connect to Ganache

export default web3;
