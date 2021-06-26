---
id: ethereum-virtual-machine-faq
title: Ethereum Virtual Machine Frequently Asked Questions
description: Frequently Asked Questions (FAQ) about the Ethereum Blockchain as well as Smart Contract and dApp development on the EVM.
slug: /ethereum-virtual-machine-faq
sidebar_position: 7
sidebar_label: FAQ
---

# FAQ

## **How do I get started with Ethereum / Smart Contract development?**

This really depends on your prior experience with Blockchain technologies such as Smart Contracts and programming languages.

If you have little experience with Blockchains and their inner working we'd advise to start by reading through some of the "[General Resources](https://wiki.cryptodevhub.io/general-resources)" such as Binance Academy or CoinMarketCap Academy.

If you're already familiar with the Blockchain but lack Smart Contract / dApp development experience you'll find a full curriculum in our "[Getting Started](https://wiki.cryptodevhub.io/ethereum-evm/getting-started)" section.

Seasoned dApp developers and folks familiar with other Blockchain ecosystems can start by looking through our "[Tutorials](https://wiki.cryptodevhub.io/ethereum-evm/tutorials)" list.

## How do I run a local Ethereum Blockchain Node?

Generally speaking there are 2 popular solutions for running local Ethereum Blockchain Nodes.

### Ganache CLI

The Ganache project is part of the Truffle Suite, a popular choice for Smart Contract- and dApp development on the Ethereum Blockchain. While Truffle provides a fully-fledged development environment which makes it simple to compile, test and deploy Smart Contracts and dApp, Ganache can be thought of an extension to Truffle which makes it possible to run your code locally.

Ganache comes in 2 flavors: Ganache \(a desktop app\) and Ganache CLI. We'd recommend to use the CLI version as it integrates nicely with other tools such as Truffle or Hardhat and can be automated and therefore leveraged in e.g. CI / CD systems or end-to-end tests.

Installing [Ganache CLI](https://github.com/trufflesuite/ganache-cli) is as simple as running `npm install --save-dev ganache-cli`. This will add Ganache as a development dependency to your current project.

Once installed you can start a local Ethereum Node via `npx ganache-cli`.

Notice that Ganache CLI has a slew of [options](https://github.com/trufflesuite/ganache-cli#options) you can pass into the command. What we'd recommend is to e.g. use the `-d` / `--deterministic` flag such that deterministic accounts are generated: `npx ganache-cli --deterministic`.

### Hardhat Network

If you're using Hardhat as your Ethereum dApp development framework you're already in possession of an Ethereum Node you can run locally.

The Hardhat development environment ships with the [Hardhat Network](https://hardhat.org/hardhat-network/), a local Ethereum network specifically designed for development. In fact, every time you ran a Hardhat test you leveraged such network behind the scenes.

Running a local Ethereum Blockchain Node is as simple as running `npx hardhat node`.

There's also a lot you can configure when using Hardhat Networks. We'd advise to read through the [thorough documentation](https://hardhat.org/hardhat-network/) to learn more about its capabilities.

## How do I get realtime data from the Ethereum Blockchain?

Almost all Ethereum JSON-RPC API implementations support the `eth_subscribe` method which makes it possible to create a so called subscription to listen to events emitted on the Blockchain. You can use this method in combination with WebSockets to get notified when something happens on the blockchain.

The following 2 code examples demonstrate how you can listen for new blocks being created. Browsing through your library's documentation you should also find examples on how to listen for e.g. contract events.

### Web3.js

```javascript
const Web3 = require('web3')

const URL = 'wss://example.com'
const provider = new Web3.providers.WebsocketProvider(URL)

const web3 = new Web3(provider)

web3.eth.subscribe('newBlockHeaders').on('data', (block) => {
  // A new block was created
  console.log(block)
})
```

### Ethers

```javascript
const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcProvider()

provider.on('block', (blockNumber) => {
  // A new block was created
  console.log(blockNumber)
})
```

**Note**: While you could achieve the same functionality by continously requesting new data from the Ethereum blockchain every X seconds \(called "pull"\), using subscriptions \(called "push"\) is way more compute- and bandwidth efficient.

## How do I call a deployed Smart Contract?

To call an already deployed Smart Contract you need 2 things:

1. The Smart Contract address
2. The Smart Contract ABI

Both information can usually be found in the projects documentation or via block explorers such as Etherscan.

[Here](https://etherscan.io/address/0x7a250d5630b4cf539739df2c5dacb4c659f2488d) fore example is the "Uniswap Router V2" Smart Contract on Etherscan. If you click on "Contract" and scroll down you'll find a section "Contract ABI" which shows you the Smart Contract's ABI. The address can be found at the top of the page or in the URL in your browser's address bar.

Having both information you can now call the Smart Contract via your client library of choice. The following are examples in both Web3.js and Ethers.

### Web3.js

```javascript
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

```javascript
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

## Where do I get the testnet address of token X?

The best resource to find the corresponding token addresses is in the projects documentation. Let's take a look at an example.

If you're working on an integration with Kyber which is deployed on the Ropsten testnet and uses DAI behind the scenes you'd find the corresponding address [here](https://developer.kyber.network/docs/RopstenEnvGuide/#token-addresses). In this case the DAI address is `0xaD6D458402F60fD3Bd25163575031ACDce07538D`.

Now let's say that you're extending your dApp's capabilities via an integration with Aave v1. Looking through their documentation you'll find the Ropsten testnet addresses [here](https://docs.aave.com/developers/v/1.0/deployed-contracts/deployed-contract-instances). DAI has the address `0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108`.

Now if you pay close attention you'll notice that bot addresses are different and this is important to remember when working with testnets. Given that DAI and other tokens have no value on testnets they're usually deployed multiple times. More often than not you'll encounter project's using different deployment, making it nearly impossible for your to test complex interactions based on tokenized assets.

If you're running into this problem you should skip testnets and switch to a mainnet forking + account impersonating strategy, both of which are discussed in the following two questions.

## Is there a way to simulate real transactions on mainnet?

If you're using a local Ethereum Blockchain Node for development like Ganache CLI or Hardhat Network you can add an option which enables "mainnet forking".

Forking mainnet means that your local Blockchain Node will take a snapshot of the Ethereum mainnet including account and Smart Contract state and save it offline. Any subsequent interaction with your local Blockchain Node will be based off of this snapshot without affecting the real Ethereum mainnet.

Using "mainnet forking" you can then interact with all the protocols already deployed on Ethereum mainnet via their respective "real" addresses and Smart Contract ABIs. But instead doing "real" transactions you run them locally with fake ETH. This capability is super powerful as it makes it super simple and efficient to test real-world use cases.

The following examples show you how you can do "mainnet forking" with Ganache CLI and Hardhat Network. For more information we'd encourage you to browse through their official docs about "mainnet forking" \([Ganache CLI](https://github.com/trufflesuite/ganache-cli#readme), [Hardhat Network](https://hardhat.org/guides/mainnet-forking.html)\).

**Note**: You can also add another option to start the forking process at block X. This is very useful if you're relying on mainnet forking in your tests as it makes testing via the forking mechanism deterministic.

### Ganache CLI

```sh
npx ganache-cli --fork https://cloudflare-eth.com
```

### Hardhat Network

```sh
npx hardhat node --fork https://cloudflare-eth.com
```

## How do I mint token X for testing?

The easiest way to mint a token for testing is to not mint it at all but impersonate someone else's account. While this sounds ethical questionable it's a very powerful strategy with zero harm involved for the impersonated account holder.

What you'd do in this case is you'd run a local Ethereum Blockchain Node via "mainnet forking" \(see above\) while also passing in a parameter to unlock an account of your choice. This account should hold some amount of the token you're interested in during your testing.

You can then spend any token of the unlocked account in your local Blockchain Node instance without possessing its private key.

The following are examples which show how you'd start a Ganache CLI as well as Hardhat Network instance with account impersonation enabled. Please consult the corresponding tooling documentation for more information \([Ganache CLI](https://github.com/trufflesuite/ganache-cli#readme), [Hardhat Network](https://hardhat.org/guides/mainnet-forking.html)\).

### Ganache CLI

```sh
npx ganache-cli --fork https://cloudflare-eth.com --unlock 0x1234567890
```

### Hardhat Network

```sh
npx hardhat node --fork https://cloudflare-eth.com
```

```javascript
await hre.network.provider.request({
  method: 'hardhat_impersonateAccount',
  params: ['0x1234567890']
})
```

## How much does a Smart Contract audit cost?

As it's usually the case, this really depends on the size and complexity of your project. Most auditing firms charge per time spent inspecting the contract\(s\).

Larger projects \(more lines-of-code\) usually take longer to audit. The same applies to complex projects. An ERC-20 contract for example is easier to audit compared to a new, non-standard custom token implementation.

Here are some rough estimates taken from a [blog post](https://medium.com/iearn/things-i-wish-i-knew-before-building-ethereum-defi-dapps-cd6bf0f07a16) written by Andre Cronje. The code in question is 359 LOC written in Solidity:

- trailofbits.com $16.000 1 week, 1 person
- cryptomaniacs $10.000 2 weeks, 2 people
- sigmaprime.io $27.500 11 days, 2 people

Andre concludes that bigger projects usually cost in the range of $50.000 to audit.

## I'm getting an "Internal JSON RPC error" when working with Metamask

Are you running an Ethereum Node via Ganache CLI or Hardhat Network for local development? If true, you're very likely reusing an old network configuration via Metamask.

Metamask keeps track of nonces which are auto-incrementing numbers assigned to every transaction. And while your new Node starts with nonces at 0, Metamask still stores the nonce state of the old Node configuration.

To solve this problem all you have to do is [reset your Metamask account](https://metamask.zendesk.com/hc/en-us/articles/360015488891-How-to-reset-your-wallet). This has to be done every time you reuse an existing Metamask network configuration with a new Ethereum Node.
