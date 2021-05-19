---
description: Useful tools and projects to help you streamline your Ethereum / EVM workflow.
---

# Tools

## Ethereum Developer Tools List

The team at ConsenSys maintains the [ethereum-developer-tools-list](https://github.com/ConsenSys/ethereum-developer-tools-list) GitHub repository which is a great resources to discover and find projects for your EVM development toolbelt.

Even if you're not looking for something specific it might be worthwhile to take some time and browse through the different categories just to learn about the developer tools landscape. If you've found something that isn't already on the list, please contribute back by opening up a Pull Request which adds your discovery.

## Truffle Suite

The [Truffle Suite](https://www.trufflesuite.com/) was one of the first fully-fledged Blockchain development frameworks with the aim to make dApp development easy and fun. Truffle helps you compile your Smart Contracts, manage artifacts, run tests and many more.

Also make sure to check out [Ganache](https://www.trufflesuite.com/ganache) and [Ganache CLI](https://github.com/trufflesuite/ganache-cli) which will help you iterate faster on your projects by running a local Ethereum Blockchain.

If you need some help getting the Blockchain data for your frontend you should also look into [Drizzle](https://www.trufflesuite.com/drizzle).

## Hardhat

[Hardhat](https://hardhat.org/) \(formerly known as "Buidler"\) is a Blockchain development framework with a focus on configurability and modularity. The Hardhat core is a very lightweight runtime which can be easily extended via [Plugins](https://hardhat.org/plugins/). With Hardhat you're essentially creating your very own custom-tailored Blockchain development environment.

Hardhat core also ships with the [Hardhat Network](https://hardhat.org/hardhat-network/), a local Ethereum Network designed for fast iterations.

## Remix IDE

The [Remix IDE](https://remix.ethereum.org/) is a fully fledged online development environment which lets you write, test, deploy and invoke Smart Contracts right from the comfort of your browser.

It has support for different Solidity compiler versions, various plugins such as debuggers or linters as well as an in-browser CLI.

**Protip1**: Did you stumble upon an interesting dApp project on GitHub you'd like to play around with? Simply use the "Import from GitHub" functionality and start coding within in seconds.

**Protip 2**: The Remix Project offers a [Remix Desktop App](https://github.com/ethereum/remix-desktop) which helps you develop your Smart Contracts in an offline-ready IDE. No need to install and configure compilers, editors and plugins.

## Alchemy

[Alchemy](https://www.alchemy.com/) is a Blockchain developer platform with a variety of different products to streamline the whole dApp lifecycle. From local development to running it in production.

Their [Supernode API](https://www.alchemy.com/supernode) offering provides developers reliable access to the Ethereum Blockchain Network. Other solutions revolve around notifications as well as remote monitoring and debugging.

While paid plans are an option they also offer a generous free plan which should be more than enough to get you started.

## Infura

Participating in the Ethereum Blockchain Network requires a connection to an Ethereum Node. With [Infura](https://infura.io/) you can get API access to a Node without running one yourself.

Their generous free plan should be more than enough to get you started with your Smart Contract and dApp projects. Once outgrown, upgrading to the next tier is a matter of a few clicks.

**Protip**: Infura allows you to connect to their network via WebSockets \(`wss://`\) which can help you save bandwidth and API credits with read- and write heavy operations.

## Cloudflare Ethereum Gateway

Cloudflare's hosted [Ethereum Gateway](https://developers.cloudflare.com/distributed-web/ethereum-gateway) is a signup- and cost free option to connect to the Ethereum Blockchain Network without the need to run an Ethereum Node yourself.

All you need to do is grab their JSON-RPC URL `https://cloudflare-eth.com` and use it to establish a connection with your Web 3 client of choice \(e.g. web3.js or ethers\).

## Tenderly

[Tenderly](https://tenderly.co/) helps you troubleshoot your Smart Contracts through real-time monitoring, analytics and alerting. They offer a "free forever" plan which is suited for experimentation and smaller hobby projects.

**Protip**: Their visual debugger and state inspector make it super simple to figure out why and where a transaction was reverted. Simply go to their [Blockchain Explorer](https://dashboard.tenderly.co/explorer), paste your failed transaction into the search box and hit enter. Next up you'll get detailed data as to what happened during the execution and at which point the transaction was reverted \(and why\).

## Scaffold Eth

Starting a new project is oftentimes preceded by a time-consuming setup phase in which all the necessary tools are installed and configured. Luckily there are boilerplates and templates which will help you take shortcuts and get up to speed faster.

Using the [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) project you'll get access to an opinionated Ethereum development stack focused on fast iterations.

## Create Eth App

The [create-eth-app](https://github.com/PaulRBerg/create-eth-app) project helps you get up to speed faster by adding a scaffolding command to your CLI.

By running one command you'll create an opinionated project structure with example code for your dApp's frontend and backend. Make sure to read through the projects README to learn all the different options and configurations you use to customize the app creation process further.

## OpenZeppelin Contracts

The team at OpenZeppelin maintain the widely used [openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) repository which is the "Golden Standard" when it comes to standards, helpers and security in the industry. No matter what you're trying to build, definitely check the OpenZeppelin contracts [documentation](https://docs.openzeppelin.com/contracts/) to see if it was already built before.

Not only do you save an enormous amount of time using OpenZeppelin Smart Contracts as dependencies, you'll also benefit from code that is battle-tested and has been audited several times in the past.

## DappHub Dappsys

The team at DappHub created and maintains the [Dappsys project](http://dapp.tools/dappsys/) which offers composable and sage building-blocks for Smart Contract systems.

A notable component for example is the DSProxy which will help you implement ways to roll out Smart Contracts updates without introducing breaking changes for your end users.

## Multicall

The [Multicall](https://github.com/makerdao/multicall) project by MakerDAO provides you the ability to aggregate multiple constant function call results into one single call. This is very useful if you have to perform dozens of read calls but don't want to send every call separately due to rate limits and increased usage of API credits from your Ethereum Node provider \(such as Infura or Alchemy\).

Multicall is implemented as a Smart Contract, however there are also higher-level abstractions which make the interaction a whole lot simpler. Well known ones are [multicall.js](https://github.com/makerdao/multicall.js) and [ethcall](https://github.com/Destiner/ethcall).

## Solhint

[Solhint](https://github.com/protofire/solhint) is a linting utility which helps you write more standardized and secure Solidity code. It's easy to install and configure and seamlessly integrates with other tools such as Prettier.

## Prettier Solidity

When working in a professional environment it's useful to agree on one specific way to format code. [Prettier Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity/) is a plugin for the widely adopted code formatting tool Prettier. Once integrated it will automatically format your Solidity code according to best practices.

Thanks to its configurability you can change the formatting rules to your liking. To streamline your workflow further you might also want to look into Editor and IDE integrations for Prettier. That way your code can be auto-formatted when saving files.

## TypeChain

While Smart Contracts act as your "backend" you'll also often want to wire them up with your frontend. [TypeChain](https://github.com/ethereum-ts/TypeChain) helps you auto-generate TypeScript type definitions for your Smart Contracts.

Using TypeChain your frontend code is automatically checked for compatibility with your Smart Contract code, plus you get features such as autocomplete in modern IDEs.

## Solc Select

Not every project you're working necessarily uses the same Solidity compiler. With [solc-select](https://github.com/crytic/solc-select) you can easily switch between different Solidity compiler versions without breaking your existing development environment

## Money Legos

Are you working on DeFi projects and want to integrate with our existing DeFi projects in the space? The [Money Legos](https://github.com/studydefi/money-legos) project might be exactly what you're looking for.

Installing Money Legos to your projects gives you access to Smart Contracts and their ABIs for various DeFi projects such as Aave, Compound or Uniswap. Also make sure to study their [documentation](https://money-legos.studydefi.com/) which includes a lot of examples and showcases how powerful the concept of "Money Legos" really is. 

**Aside**: Even if you're not actively building a DeFi project with Money Legos it's worthwhile to browse through their documentation just to learn how e.g. Flash Loans work.

## DeFi Map

Navigating the DeFi space is hard. The [DeFi-Map](https://github.com/YutaSugimura/DeFi-Map) project's goal is to catalog all DeFi projects in an easy to digest way.

Their repository consolidates all the important project information such as links to Whitepapers, Documentation, Source Code and Smart Contract addresses.

## Manticore

[Manticore](https://github.com/trailofbits/manticore) is a security tool which helps you uncover security vulnerabilities and unintended behavior by analyzing your Smart Contract and binary code.

It is a very powerful tool with lots of useful features such as:

* Automatic input generation to emulate a wide variety of real-world usage
* Program exploration which executes your code in various ways to reach any potential state it can be in
* Error discovery to uncover errors in development rather than production

**Protip**: Check out the [Manticore Examples](https://github.com/trailofbits/manticore-examples) repository for more involved, real-world CTF examples.

## Slither

[Slither](https://github.com/crytic/slither) is a static analysis framework which lets you run vulnerability detectors to find exploitable code paths before deploying your Smart Contracts to production.

During execution it prints helpful, visual information to guide you through the bug-fixing process. It also comes with a programmable API so you can prototype and implement your own custom analyses.

