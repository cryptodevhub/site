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

## Ethlint

[Ethlint](https://github.com/duaraghav8/Ethlint) is a linter which helps you write more elegant and secure Solidity code. While linting is a very useful tool, its constant complains can also slow you down. Ethlint solves this problem by offering a "fix" feature so you can focus on your code rather than your code style.

## Solhint

[Solhint](https://github.com/protofire/solhint) is a linting utility for Solidity code. It's easy to install and configure and seamlessly integrates with other tools such as Prettier.

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

