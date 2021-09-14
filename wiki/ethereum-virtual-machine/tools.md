---
id: tools
title: Ethereum Virtual Machine Tools
description: Useful tools and projects to help you streamline your Ethereum / EVM workflow.
slug: /ethereum-virtual-machine-tools
sidebar_position: 3
sidebar_label: Tools
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

## Embark

[Embark](https://github.com/embarklabs/embark) is a framework which helps you build and deploy decentralized applications on EVM-based Blockchains like Ethereum or Binance Smart Chain. It seamlessly integrates with other technologies like IPFS, Swarm, Whisper and Orbit to offer decentralized file storage and communication capabilities.

**Protip**: Embark can be extended via plugins. If you're tackling a complex problem the core framework doesn't solve, be sure to head over to the [plugins registry](https://framework.embarklabs.io/plugins/) and look if others faced the same issue. If not, it's simple to [author your own](https://framework.embarklabs.io/docs/creating_plugins.html).

## 0xcert Framework

The [0xcert Framework](https://github.com/0xcert/framework/) is a JavaScript-based development platform which helps you quickly build and deploy decentralized applications (dApps). Using the framework you'll benefit from its opinionated design and the established conventions which come in handy when integrating with other dApps.

**Protip**: You can extend the frameworks functionality via plugins which are listed in the projects [README](https://github.com/0xcert/framework/blob/master/README.md).

## Dapp

[Dapp](https://github.com/dapphub/dapptools/tree/master/src/dapp#readme) is a framework for dApp development on Ethereum and EVM-based Blockchains. It ships with everything important to get from idea to deployment on mainnet smoothly. Dapp is designed in an opinionated way to make onboarding and usage fast, robust and enjoyable.

**Protip 1**: There are a bunch of premade DappSys Components (see "Smart Contracts" section [here](http://dapp.tools/)) you can add to your Dapp project to iterate even faster.

**Protip 2**: When you're using Dapp you might also want to join the [DappHub Chat](https://dapphub.chat/), a self-organizing group of likeminded people who work with and on Dapp and Blockchain development in general.

## useDapp

[useDapp](https://usedapp.io/) is an opinionated, yet extensible framework for rapid dApp development. Its main focus is to provide a "batteries included" developer experience by combining frequently used features like React hooks and the Multicall library with software engineering best practices such as integration testing and modularity.

An example which demonstrates the frameworks simplicity can be found in the projects [README](https://github.com/EthWorks/useDApp). The official documentation can be found [here](https://usedapp.readthedocs.io).

## web3-react

The [web3-react](https://github.com/NoahZinsmeister/web3-react) project is a simple but easily extensible framework to build modern Ethereum dApps. At its core is the package system which lets you configure various connectors and low-level primitives to optimize the developer experience while minimizing the reliance on external dependencies.

Famous projects built on top of web3-react include the [Uniswap Exchange Interface](https://github.com/Uniswap/uniswap-interface), [Aave](https://app.aave.com) and the [Eth2 Launchpad](https://launchpad.ethereum.org).

## Remix IDE

The [Remix IDE](https://remix.ethereum.org/) is a fully fledged online development environment which lets you write, test, deploy and invoke Smart Contracts right from the comfort of your browser.

It has support for different Solidity compiler versions, various plugins such as debuggers or linters as well as an in-browser CLI.

**Protip 1**: Did you stumble upon an interesting dApp project on GitHub you'd like to play around with? Simply use the "Import from GitHub" functionality and start coding within in seconds.

**Protip 2**: The Remix Project offers a [Remix Desktop App](https://github.com/ethereum/remix-desktop) which helps you develop your Smart Contracts in an offline-ready IDE. No need to install and configure compilers, editors and plugins.

## EthFiddle

[EthFiddle](https://ethfiddle.com/) is an online IDE which lets you write, compile and deploy Smart Contracts written in Solidity right from the comfort of your browser. This is a great resource if you're looking for a fast and simple way to play around with new ideas without setting up a whole new development environment.

**Protip**: Make sure to check out the [recent fiddles](https://ethfiddle.com/recent_fiddles) by clicking on "Recent Fiddles" in the footer of the page to explore what others worked on using EthFiddle.

## Alchemy

[Alchemy](https://www.alchemy.com/) is a Blockchain developer platform with a variety of different products to streamline the whole dApp lifecycle. From local development to running it in production.

Their [Supernode API](https://www.alchemy.com/supernode) offering provides developers reliable access to the Ethereum Blockchain Network. Other solutions revolve around notifications as well as remote monitoring and debugging.

While paid plans are an option they also offer a generous free plan which should be more than enough to get you started.

## Tatum

[Tatum](https://www.tatum.io/) is the fastest and most effective way to develop blockchain apps on 20+ blockchains. With a powerful unified API that streamlines complex blockchain operations into single API calls, lightning-fast infrastructure, and an abstraction layer with advanced built-in functionality, Tatum gives developers everything they need to build full-fledged blockchain apps, even without any blockchain development experience.

Tatum features a full-featured free plan and cost-effective paid plans with significantly more requests per second than any other provider. With an emphasis on [comprehensive documentation](https://docs.tatum.io/) and highly responsive [developer support](https://t.me/tatumio), Tatum is the go-to platform of choice for over 8,000 developers.

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

## EthereumJS

The [EthereumJS](https://github.com/ethereumjs/ethereumjs-monorepo) project is an effort to provide a reference implementation of the Ethereum Virtual Machine (EVM) in TypeScript. The repository is split up into several packages one can use to access low-level primitives such as Merkle-Patricia-Trees, Peer-to-peer (P2P) connectivity, Blocks, Transactions, Hashes and more.

To learn more about the different building blocks one can browse through the official [EthereumJS Documentation](https://ethereumjs.readthedocs.io/en/latest/).

## Web3Modal

[Web3Modal](https://github.com/Web3Modal/web3modal) is a single Ethereum / Web 3 provider solution for all wallets. Using Web3Modal you can easily add support for providers like MetaMask, Dapper, Gnosis Safe, Frame, Portis, Fortmatic and more.

## WalletLink

In order to use your application, users need to connect their wallets to your dApp. This is usually done via Browser extensions such as MetaMask.

[WalletLink](https://github.com/walletlink/walletlink) is an open protocol that is built on top of standards such as EIP-1102 to make the integration effortless, platform independent and extensible. With less than 15 lines of JavaScript code you can offer your users the ability to connect their wallets without installing any additional desktop software or Browser extension.

## Scaffold Eth

Starting a new project is oftentimes preceded by a time-consuming setup phase in which all the necessary tools are installed and configured. Luckily there are boilerplates and templates which will help you take shortcuts and get up to speed faster.

Using the [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) project you'll get access to an opinionated Ethereum development stack focused on fast iterations.

## Create Eth App

The [create-eth-app](https://github.com/PaulRBerg/create-eth-app) project helps you get up to speed faster by adding a scaffolding command to your CLI.

By running one command you'll create an opinionated project structure with example code for your dApp's frontend and backend. Make sure to read through the projects README to learn all the different options and configurations you use to customize the app creation process further.

## Solidity Template

The [solidity-template](https://github.com/paulrberg/solidity-template) project is an effort to provide a solid foundation for professional, secure and efficient Smart Contract development. By leveraging well-known tools such as Hardhat, TypeChain, Ethers, Waffle, Solhint, Solcover and Prettier you can stay focused on your code without having to deal with configuration files and project setups.

Using the template is as simple as running `git clone` or clicking the "Use this template" button on the GitHub web interface.

## HardHat Foundation

[HardHat Foundation](https://github.com/sushiswap/hardhat-foundation) is Sushi's official Hardhat development template which powers projects like SushiSwap, BentoBox, Kashi, Shoyu and more. It ships with sane defaults and additional tooling such as Ethers, Waffle, Solhint, Tenderly, TypeChain, Prettier, etc.

You can get started with the template by running `git clone` in your terminal or clicking the "Use this template" button on GitHub.

## Hardhat Boilerplate

[Hardhat Boilerplate](https://github.com/yosriady/hardhat-boilerplate) is another Hardhat development template which comes pre-configured with useful tools such as TypeChain, Ethers, Waffle, Solhint, Solcover and Prettier.

You can use the template by running `git clone` in your terminal or clicking on the "Use this template" button on the GitHub web interface.

## OpenZeppelin Contracts

The team at OpenZeppelin maintain the widely used [openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) repository which is the "Golden Standard" when it comes to standards, helpers and security in the industry. No matter what you're trying to build, definitely check the OpenZeppelin contracts [documentation](https://docs.openzeppelin.com/contracts/) to see if it was already built before.

Not only do you save an enormous amount of time using OpenZeppelin Smart Contracts as dependencies, you'll also benefit from code that is battle-tested and has been audited several times in the past.

## OpenZeppelin Test Helpers

[OpenZeppelin Test Helpers](https://github.com/OpenZeppelin/openzeppelin-test-helpers) is an assertion library which makes it easier to test EVM-based Smart Contracts. Using it you can easily check if reverts happen for the right reason, events are emitted when the should, balances are updated, and much more.

**Protip**: With the help of Test Helpers you can emulate the [passing of time](https://docs.openzeppelin.com/test-helpers/0.5/api#time) which comes in handy if you have functionality which depends on a certain block height.

## BoringSolidity

[BoringSolidity](https://github.com/boringcrypto/BoringSolidity) is a collection of Solidity Smart Contracts optimized for gas savings, code readability and security. Using it you get access to a gas optimized version of an ERC-20 implementation, a utility to claim and track ownership, a functionality to call multiple contract functions in a batch as well as other useful helpers.

## Eth95.exe

[Eth95.exe](https://eth95.dev/) is a browser-based interface which helps you interact with Smart Contracts. It's especially useful if you're dealing with Smart Contracts and dApps that don't have an official frontend.

Using it you can call different functions on different Smart Contracts, setup a custom signer and inspect events and log outputs.

**Protip**: Other than connecting via MetaMask you can setup a custom configuration or connect directly to your local Blockchain Network running on `localhost:8545`.

## OpenZeppelin Defender

[OpenZeppelin Defender](https://openzeppelin.com/defender/) is a security operations \(SecOps\) platform for Ethereum with built-in best practices. It offers the following components:

- Admin: automate and secure all your smart contract administration.
- Relay: build with private and secure transaction infrastructure.
- Sentinel: monitor smart contracts and send notifications.
- Autotask: create automated scripts to call your smart contracts.
- Advisor: learn and implement security best practices.

Useful for shipping faster while minimizing security risks.

## OpenZeppelin - List of Solidity Libraries

The goal of [this thread](https://forum.openzeppelin.com/t/list-of-solidity-libraries-in-the-wild/2250) from the OpenZeppelin Forum is to gather and categorize important Solidity Libraries one can reuse in their own projects.

Browsing through the thread you can find Solidity Libraries from categories such as Math, Randomness, Proxies, Wallets, Data Structures, Cryptography and more.

## Nethereum

[Nethereum](https://nethereum.com/) is the .NET integration library which aims to simplify Ethereum node access and Smart Contract interaction. It can be used on both, public and permissioned Ethereum nodes running e.g. Geth, Parity or Quorum. You can find guides, examples and in-depth explanations in the [official documentation](https://nethereum.readthedocs.io/en/latest/).

**Protip**: Head over to the [playground](http://playground.nethereum.com/) to try different Nethereum examples interactively right from within your browser. No setup required.

## Flex Ether

[flex-ether](https://github.com/merklejerk/flex-ether) is a library designed to simplify the creation and sending of Ethereum transactions. Using it in your project you'll benefit from features such as:

- Minimal setup to interact with different networks (mainnet, testnets, local networks)
- Signing and sending of transactions from arbitrary wallets
- Automatic ENS resolutions
- Automatic gas estimations and calculations

## Flex Contract

[flex-contract](https://github.com/merklejerk/flex-contract) is a library which offers a more ergonomic Smart Contract abstraction. Some of its main benefits compared to other solutions are:

- Simplistic setup with minimal configuration
- Easy event filtering and monitoring
- ENS resolutions
- ABIEncoderV2 support
- Automatic gas and gas price calculations

## Multicall

The [Multicall](https://github.com/makerdao/multicall) project by MakerDAO provides you the ability to aggregate multiple constant function call results into one single call. This is very useful if you have to perform dozens of read calls but don't want to send every call separately due to rate limits and increased usage of API credits from your Ethereum Node provider \(such as Infura or Alchemy\).

Multicall is implemented as a Smart Contract, however there are also higher-level abstractions which make the interaction a whole lot simpler. Well known ones are [multicall.js](https://github.com/makerdao/multicall.js) and [ethcall](https://github.com/Destiner/ethcall).

## Solhint

[Solhint](https://github.com/protofire/solhint) is a linting utility which helps you write more standardized and secure Solidity code. It's easy to install and configure and seamlessly integrates with other tools such as Prettier.

## Prettier Solidity

When working in a professional environment it's useful to agree on one specific way to format code. [Prettier Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity/) is a plugin for the widely adopted code formatting tool Prettier. Once integrated it will automatically format your Solidity code according to best practices.

Thanks to its configurability you can change the formatting rules to your liking. To streamline your workflow further you might also want to look into Editor and IDE integrations for Prettier. That way your code can be auto-formatted when saving files.

## Solidity Coverage

Whenever you're testing code you want to ensure that you cover all critical code paths. Test / Code coverage tools help you in figuring that out.

The [solidity-coverage](https://github.com/sc-forks/solidity-coverage) project is a code coverage tool for Smart Contracts written in Solidity. Simply install the package and add it to your Truffle / Hardhat config to get detailed code coverage reports every time you run your tests.

## Eth Gas Reporter

[eth-gas-reporter](https://github.com/cgewecke/eth-gas-reporter) is a Mocha reporter for Ethereum test suites which provides you insights into your Smart Contract's gas usage. Using it you can see a breakdown of gas usage per unit test, metrics for method calls and deployments as well as costs of deploying and using your Smart Contract system.

**Protip**: If you're using Truffle or Hardhat you can find more information about official support and proper setup in the [README](https://github.com/cgewecke/eth-gas-reporter/blob/master/README.md).

## Solidity Docgen

The Solidity programming language supports the usage of inline documentation which is a special form of code comments to explain the intent of a given Smart Contract functionality. Using this is especially helpful when working on larger projects with a \(potential\) larger team of engineers.

The [Solidity Docgen](https://github.com/OpenZeppelin/solidity-docgen) tool uses such comments to auto-generate a self-contained documentation for the project in question. Simply run one command to get the content for your projects docs website or the onboarding guide for your teammates.

## solpp

[solpp](https://github.com/merklejerk/solpp) is a preprocessor and flattener for Solidity source files. Its preprocessor directives are inspired by the C programming language and let you perform conditional code renderings (via `#if`, `#elif` and `#else`) as well as code block repetitions (via `#for`).

Using solpp you can also flatten your source files for easy contract verification via Etherscan.

**Protip**: You can browse through the [example](https://github.com/merklejerk/solpp#example) to see all of solpp's powerful features at a glance.

## solidity-flattener

[solidity-flattener](https://github.com/poanetwork/solidity-flattener) is a tool that helps you combine multiple Solidity Smart Contracts into one flat file. It does so by resolving the imports and inlining their contents.

Flattening your source files is especially useful once you decide to deploy to mainnet as they're easier to verify via tools like Etherscan.

## TypeChain

While Smart Contracts act as your "backend" you'll also often want to wire them up with your frontend. [TypeChain](https://github.com/ethereum-ts/TypeChain) helps you auto-generate TypeScript type definitions for your Smart Contracts.

Using TypeChain your frontend code is automatically checked for compatibility with your Smart Contract code, plus you get features such as autocomplete in modern IDEs.

## useMetamask

Connecting from a frontend to your dApp backend usually involves integrating MetaMask, the Browser- and Smartphone friendly crypto wallet. Depending on the frontend framework you're using this can result in complex code to ensure proper functionality.

React users can use the [`useMetamask`](https://github.com/mdtanrikulu/use-metamask) hook which greatly simplifies this setup while covering all the major edge cases one usually has to handle manually.

## Solidity Visual Developer

[Solidity Visual Developer](https://github.com/ConsenSys/vscode-solidity-auditor) by ConsenSys is an extension which adds Solidity language and visual security auditor support to your Visual Studio Code installation.

By using this extension you'll get access to rich, visualized source code explorations, visual security lintings, detailed class outlines and more. The extension's main focus is on the security aspects of Smart Contract development.

## Brownie

[Brownie](https://github.com/eth-brownie/brownie) is a development and testing framework for Smart Contracts targeting the Ethereum Virtual Machine. It has full support for languages like Solidity and Vyper, powerful debugging tools as well as a package manager.

**Protip**: Brownie also ships with a built-in console you can use to quickly interact with and iterate on your project.

## Waffle

[Waffle](https://getwaffle.io/) is the most advanced Smart Contract testing framework. It integrates nicely with development frameworks such as Ganache or Hardhat, is minimalistic with only a few dependencies, has a nice and easy to remember syntax and is fast in both, development- and execution time.

**Protip**: You should definitely spend some time to read through their [documentation](https://ethereum-waffle.readthedocs.io/en/latest/). The [Chai matchers docs](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html) in particular explain how you can make use of their custom matchers to e.g. check for BigNumbers or events emitted by your contracts.

## Ethereum Tester

The [eth-tester](https://github.com/ethereum/eth-tester) project is a tool suite which provides high-level abstractions to test Ethereum dApps. It's written in Python and can be used programmatically as a project dependency or interactively via the CLI.

Ethereum Tester's implementation focuses on modularity which makes it possible to use different backends for different test scenarios.

## Cliquebait

Using [cliquebait](https://github.com/f-o-a-m/cliquebait) you can spin up an easy to use single-node Proof-of-Authority Blockchain via Geth running in Docker. Cliquebait also automatically generates accounts with ETH you can unlock to easily deploy and test your Smart Contracts.

Cliquebait's main goals is to simplify integration- and acceptance testing of dApps by offering an ephemeral testing environment that closely resembles a real Blockchain network.

## Solc Select

Not every project you're working necessarily uses the same Solidity compiler. With [solc-select](https://github.com/crytic/solc-select) you can easily switch between different Solidity compiler versions without breaking your existing development environment

## Surya

[Surya](https://github.com/ConsenSys/surya) is a utility tool which provides visual outputs about a Smart Contract's structure. Functions can be queried in multiple ways via the function call graph to aid manual code inspection.

**Protip**: There's the [Solidity Visual Developer](https://github.com/ConsenSys/vscode-solidity-auditor) Visual Studio Code extension which ships with Surya support and is therefore one of the easiest ways to get started.

## Money Legos

Are you working on DeFi projects and want to integrate with our existing DeFi projects in the space? The [Money Legos](https://github.com/studydefi/money-legos) project might be exactly what you're looking for.

Installing Money Legos to your projects gives you access to Smart Contracts and their ABIs for various DeFi projects such as Aave, Compound or Uniswap. Also make sure to study their [documentation](https://money-legos.studydefi.com/) which includes a lot of examples and showcases how powerful the concept of "Money Legos" really is.

**Aside**: Even if you're not actively building a DeFi project with Money Legos it's worthwhile to browse through their documentation just to learn how e.g. Flash Loans work.

## DeFi Map

Navigating the DeFi space is hard. The [DeFi-Map](https://github.com/YutaSugimura/DeFi-Map) project's goal is to catalog all DeFi projects in an easy to digest way.

Their repository consolidates all the important project information such as links to Whitepapers, Documentation, Source Code and Smart Contract addresses.

## EtherVM

The [EtherVM](https://ethervm.io/) project is a collection of resources for everything related to the Ethereum Virtual Machine (EVM).

Browsing through it you'll find an opcode reference, documentation about the EVM stack, info about the EVM storage- and memory layout and more.

**Protip**: There's also an [Online Solidity Decompiler](https://ethervm.io/decompile) you can use to decompile Solidity bytecode into more readable Solidity-like source code.

## EVM Opcode Database

The [Ethereum Virtual Machine \(EVM\) Opcodes and Instruction Reference](https://github.com/crytic/evm-opcodes) repository is an effort by Trail of Bits to consolidate EVM opcode information from various different sources into one central place.

It's a great resources if you're looking for Opcode descriptions, links and references to EIPs which influenced its behavior and the associated gas costs.

## EVM Opcodes

The [EVM Opcodes](https://github.com/wolflo/evm-opcodes) repository is an effort to list and categorize all the available EVM opcodes in an easy to browse table-based format.

The opcode table includes information about gas usage, stack layout, memory / storage specifics and additional notes.

**Protip**: There's also an appendix which explains the ins and outs of [dynamic gas costs](https://github.com/wolflo/evm-opcodes/blob/main/gas.md).

## EthTx

[EthTx](https://ethtx.info/) is a decoder for Ethereum mainnet and testnet transactions. Using it you get a breakdown of the transaction's individual components such as the transaction cost, account balances, token transfers and the execution trace.

**Protip**: You can use the execution trace to identify the root cause of a failed transaction.

## Ethereum Signature Database

Function signatures in the Ethereum Virtual Machine (EVM) are specified by the first 4 bytes of the data sent within a transaction. The [Ethereum Signature Database](https://www.4byte.directory/) is a collection of function- and event signatures which makes it possible to recover the function- or event name based on its hex signature.

Using the database you can get a better understanding as to what a transaction did if you only have access to the transaction data and not the source code of the Smart Contract in question.

## Mythril

[Mythril](https://github.com/ConsenSys/mythril) is a tool to analyze the security properties of EVM bytecode. Given that it only expects EVM bytecode as input, Mythril can be used to check the output produced by Solidity, Vyper or any other language targeting the Ethereum Virtual Machine.

**Protip 1**: Given that Mythril's only requirement is EVM bytecode you can also use it to check your Smart Contracts for EVM compatible platforms such as the Binance Smart Chain, Avalanche, Hedera or Tron.

**Protip 2**: For more advanced security analyses you can use the paid tool [MythX](https://mythx.io/). It includes Mythril, the fuzzer Harvey and the static analysis engine Maru. Work through the [MythX Apprentice Tutorial](https://mythx.io/mythxperts/apprentice/) to learn more about MythX and get rewarded with NFTs.

## Manticore

[Manticore](https://github.com/trailofbits/manticore) is a security tool which helps you uncover security vulnerabilities and unintended behavior by analyzing your Smart Contract and binary code.

It is a very powerful tool with lots of useful features such as:

- Automatic input generation to emulate a wide variety of real-world usage
- Program exploration which executes your code in various ways to reach any potential state it can be in
- Error discovery to uncover errors in development rather than production

**Protip 1**: Check out the [Manticore Examples](https://github.com/trailofbits/manticore-examples) repository for more involved, real-world CTF examples.

**Protip 2**: Use [Etheno](https://github.com/crytic/etheno) to simplify the setup of Manticore in large multi-contract projects.

## Echidna

[Echidna](https://github.com/crytic/echidna) is a fuzzing / property-based testing tool for Ethereum Smart Contracts. With Echidna you can generate random input data according to your Smart Contract ABIs.

This is very useful for automated tests as you don't have to come up with the assertions but Enchida does. Once a problem is found, Echidna lets you further shrink down the input domain to find an exact way to reproduce the issue.

**Protip**: Use [Etheno](https://github.com/crytic/etheno) to simplify the setup of Echidna in large multi-contract projects.

## Etheno

The [Etheno](https://github.com/crytic/etheno) project helps you integrate analysis tools such as Manticore and Echidna in large, multi-contract projects.

Its features include:

- JSON RPC Multiplexing
- Analysis Tool Wrapping
- Test Framework Integration

## Securify

[Securify](https://github.com/eth-sri/securify2) is a security scanner supported by the Ethereum Foundation and ChainSecurity. Currently it supports the automatic verification of 38 vulnerabilities from [SWC Registry](https://swcregistry.io/) \(Smart Contract Weakness Classification and Test Cases\).

## Slither

[Slither](https://github.com/crytic/slither) is a static analysis framework which lets you run vulnerability detectors to find exploitable code paths before deploying your Smart Contracts to production.

During execution it prints helpful, visual information to guide you through the bug-fixing process. It also comes with a programmable API so you can prototype and implement your own custom analyses.

## VerX

[VerX](http://verx.ch/) is an automated verifier able to prove custom functional properties of Ethereum Smart Contracts.

The functional properties for the contract are formalized in VerX specification language. By supplying VerX with the contract and the specification, VerX either verifies the property, outputs a sequence of transactions that may result in the property violation, or indicates that additional predicates are needed.

## Rattle

[Rattle](https://github.com/crytic/rattle) is a binary static analysis framework which works on Smart Contracts deployed on EVM-compatible Blockchains.

With Rattle you can recover the Smart Contract's original control flow graph to get an easier to read overview of the code you're about to interact with. When using Rattle, functions, their arguments as well as memory- and storage locations are recovered.

## Pyevmasm

[pyevmasm](https://github.com/crytic/pyevmasm) is an assembler and disassembler library for the EVM (Ethereum Virtual Machine) written in Python. Using it you can assemble EVM instructions to opscode or disassemble opcodes back into EVM instructions.

The project includes the `evmasm` CLI as well as an API you can tap into via Python.

## Oyente

The [oyente](https://github.com/enzymefinance/oyente) tool by Enzyme Finance helps you analyze local and remote Smart Contracts. Using it you can verify contract assertions, generate the contracts function graphs, compute various statistics and scrape up-to-date transaction information.

## EVM Toolkit (etk)

The [etk](https://github.com/quilt/etk) project is a collection of tools for writing, reading and analyzing EVM (Ethereum Virtual Machine) bytecode. It ships with an assembler and disassembler which lets you write and explore EVM-based Smart Contract code.

**Protip**: The [etk book](https://quilt.github.io/etk/) teaches you everything you need to know to get up to speed with etk.

## Seth

[Seth](https://github.com/dapphub/dapptools/tree/master/src/seth#readme) is a CLI tool which makes it possible to interact with Ethereum-based Blockchains from the command-line. Using Seth you can inspect transactions, query the Blockchain, perform remote calls, convert between data formats and more.

## Hevm

[Hevm](https://github.com/dapphub/dapptools/tree/master/src/hevm#readme) is an EVM (Ethereum Virtual Machine) evaluator that helps you verify, test and debug Smart Contracts from the command-line. Hevm can run unit tests, property tests, debug Smart Contracts interactively and execute arbitrary EVM code against local or remote nodes.

## Yul

[Yul](https://docs.soliditylang.org/en/latest/yul.html) is an intermediate language that can be compiled to different backends such as the Ethereum Virtual Machine (EVM 1.0 and EVM 1.5) as well as Ethereum WebAssembly (ewasm).

Yul's goal is to be the common denominator for all three platforms. It's a good target for high-level optimization stages that benefit all target platforms. Yul can be used in stand-alone mode as well as "inline assembly" inside Solidity.
