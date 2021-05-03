---
description: >-
  Frequently Asked Questions (FAQ) about the Ethereum Blockchain as well as
  Smart Contract and dApp development on the EVM.
---

# FAQ

## **How do I get started with Ethereum / Smart Contract development?**

This really depends on your prior experience with Blockchain technologies such as Smart Contracts and programming languages.

If you have little experience with Blockchains and their inner working we'd advise to start by reading through some of the "[General Resources](https://wiki.cryptodevhub.io/general-resources)" such as Binance Academy or CoinMarketCap Academy.

If you're already familiar with the Blockchain but lack Smart Contract / dApp development experience you'll find a full curriculum in our "[Getting Started](https://wiki.cryptodevhub.io/ethereum-evm/getting-started)" section.

Seasoned dApp developers and folks familiar with other Blockchain ecosystems can start by looking through our "[Tutorials](https://wiki.cryptodevhub.io/ethereum-evm/tutorials)" list.

## How do I run a local Ethereum Blockchain Node?

Generally speaking there are 2 popular solutions for running local Ethereum Blockchain Nodes.

### 1. Ganache CLI

The Ganache project is part of the Truffle Suite, a popular choice for Smart Contract- and dApp development on the Ethereum Blockchain. While Truffle provides a fully-fledged development environment which makes it simple to compile, test and deploy Smart Contracts and dApp, Ganache can be thought of an extension to Truffle which makes it possible to run your code locally.

Ganache comes in 2 flavors: Ganache \(a desktop app\) and Ganache CLI. We'd recommend to use the CLI version as it integrates nicely with other tools such as Truffle or Hardhat and can be automated and therefore leveraged in e.g. CI / CD systems or end-to-end tests.

Installing [Ganache CLI](https://github.com/trufflesuite/ganache-cli) is as simple as running `npm install --save-dev ganache-cli`. This will add Ganache as a development dependency to your current project.

Once installed you can start a local Ethereum Node via `npx ganache-cli`.

Notice that Ganache CLI has a slew of [options](https://github.com/trufflesuite/ganache-cli#options) you can pass into the command. What we'd recommend is to e.g. use the `-d` / `--deterministic` flag such that deterministic accounts are generated: `npx ganache-cli --deterministic`.

### 2. Hardhat Network

If you're using Hardhat as your Ethereum dApp development framework you're already in possession of an Ethereum Node you can run locally.

The Hardhat development environment ships with the [Hardhat Network](https://hardhat.org/hardhat-network/), a local Ethereum network specifically designed for development. In fact, every time you ran a Hardhat test you leveraged such network behind the scenes.

Running a local Ethereum Blockchain Node is as simple as running `npx hardhat node`.

There's also a lot you can configure when using Hardhat Networks. We'd advise to read through the [thorough documentation](https://hardhat.org/hardhat-network/) to learn more about its capabilities.

## How do I get realtime data from the Ethereum Blockchain?

Almost all Ethereum JSON-RPC API implementations support the `eth_subscribe` method which makes it possible to create a so called subscription to listen to events emitted on the Blockchain. You can use this method in combination with WebSockets to get notified when something happens on the blockchain.

The following 2 code examples demonstrate how you can listen for new blocks being created. Browsing through your library's documentation you should also find examples on how to listen for e.g. contract events.

### Web3.js

```text
const Web3 = require("web3");

const URL = "wss://example.com"
const provider = new Web3.providers.WebsocketProvider(URL)

const web3 = new Web3(provider);

web3.eth.subscribe("newBlockHeaders").on("data", (block) => {
    // A new block was created
    console.log(block);
});
```

### Ethers

```text
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider();

provider.on("block", (blockNumber) => {
    // A new block was created
    console.log(blockNumber);
})
```

**Note**: While you could achieve the same functionality by continously requesting new data from the Ethereum blockchain every X seconds \(called "pull"\), using subscriptions \(called "push"\) is way more compute- and bandwidth efficient.

## How do I call a Smart Contracts deployed on mainnet?

To call an already deployed Smart Contract you need 2 things:

1. The Smart Contract address
2. The Smart Contract ABI

Both information can usually be found in the projects documentation or via block explorers such as Etherscan.

[Here](https://etherscan.io/address/0x7a250d5630b4cf539739df2c5dacb4c659f2488d) fore example is the "Uniswap Router V2" Smart Contract on Etherscan. If you click on "Contract" and scroll down you'll find a section "Contract ABI" which shows you the Smart Contract's ABI. The address can be found at the top of the page or in the URL in your browser's address bar.

Having both information you can now call the Smart Contract via your client library of choice. The following are examples in both Web3.js and Ethers.

### Web3.js

```text
const Web3 = require("web3");

const URL = "wss://example.com"
const provider = new Web3.providers.WebsocketProvider(URL)

const web3 = new Web3(provider);

const address = "0x1234567890"; // <-- The Smart Contract address
const abi = [{ ... }]; // <-- The Smart Contract ABI

// The arguments for your function call
const arg1 = "Foo";
const arg2 = "Bar";

const instance = new web3.eth.Contract(abi, address);

const result = await instance.methods.myFunc(arg1, arg2).call();

console.log(result);
```

### Ethers

```text
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider();

const address = "0x1234567890"; // <-- The Smart Contract address
const abi = [{ ... }]; // <-- The Smart Contract ABI

// The arguments for your function call
const arg1 = "Foo";
const arg2 = "Bar";

const instance = new ethers.Contract(address, abi, provider);

const result = await instance.myFunc(arg1, arg2);

console.log(result);
```

* How / where do I get token X for testing?
* I'm getting an "Internal JSON RPC error" when working with Metamask
* How do I setup Metamask for local development?
* What are the available testnets?
* How do I deploy to testnets?
* Where can I find testnet faucets?
* How do I get a Job as an Ethereum developer?
* How much does a Smart Contract audit cost?
* Where do I get a Smart Contract audit?
* How much does it cost to deploy my dApp / Smart Contract to mainnet?

