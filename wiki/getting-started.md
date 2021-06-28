---
id: blockchain-development-tutorial
title: Solidity Tutorial
description: The following is an opinionated guide on how to get started with Ethereum dApp development.
slug: /blockchain-development-tutorial
sidebar_position: 2
sidebar_label: Getting Started
---

# Getting Started

## 0. Learn JavaScript Basics \(Optional\)

A typical dApp is a combination of a Frontend \(what the user sees and interacts with\) and a Backend \(usually your Smart Contracts deployed on the Ethereum Blockchain\).

Given that Frontends as well as the vast majority of Ethereum's Smart Contract development tooling is written in JavaScript it's a worthwhile endeavour to brush up your JavaScript skills before diving deeper into Solidity and dApp development. If you're new to JavaScript or need a quick refresher you'll find a good resource in the [Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) course by Codecademy.

**Protip**: Don't spend too much time on intermediate and advanced topics. Knowing the basics of JavaScript should be more than enough to get you going.

## 1. Work through CryptoZombies

The best way to learn something new is through a structured curriculum which walks you through the big ideas and major concepts in a guided fashion. Ideally as frictionless as possible.

[CryptoZombies](https://cryptozombies.io/) is one of the best resources for every aspiring Ethereum dApp / Solidity developer. In it you'll build your own NFT-style Zombie game and learn all the important concepts of EVM development and the Solidity programming language. The best part is that it's completely browser based, so you don't need to install and configure anything.

While you can work through the whole course we'd advice to focus on the first 2 sections about Solidity Smart Contract development.

If you're interested in writing Smart Contracts with Vyper you should check out [Vyper.fun](https://vyper.fun/) which is another great interactive resource focused on the Vyper programming language.

## 2. Learn about Truffle Suite / Hardhat

While you can install and setup all the different toolings such as a Solidity / Vyper compiler from scratch doesn't mean you should.

Luckily enough others jumped in and built whole developer tool suites such as the [Truffle Suite](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/). Take some time to browse through both projects and play around with their solutions.

Once you're familiar with both, pick your favorite development stack and stick with it \(at least for the time being\). For beginners Truffle is usually the best choice as it comes with "batteries included". Intermediate / Advanced users will find more flexibility in Hardhat.

## 3. Build your first dApp

Given that you're now familiar with some basic Solidity / Vyper and the developer toolings in the Ethereum dApp space it's time to work on your first "real" project.

If you're already familiar with Software- and JavaScript development in general you might want to jump straight into your own first project without any further guidance.

For others, it might be worthwhile to follow an online tutorial like [this one](https://www.dappuniversity.com/articles/the-ultimate-ethereum-dapp-tutorial) from "Dapp University".

It isn't super important what you're building as long as you focus your efforts on writing code, rather than consuming more blog posts and YouTube videos.

## 4. Build more dApps

Once done with your very first dApp, you surely ran into various roadblocks you didn't anticipate beforehand. While having guardrails in the beginning is a necessity, it's being on your own where true growth happens and the learnings materialize.

Given that, you should spend some more time building dApps end-to-end. This time around **without any guardrails**. Start with a clean slate and work your way through the whole process. Start with the Smart Contract logic, connect it to a frontend and ensure that everything works by writing unit- and integration tests.

It's absolutely ok to check references and existing code to get you unstuck but focus on trying to solve the problem on your own before consulting other resources.

"What should I build?". That's a common and valid question given that we should be focusing on deliberate practice rather than rote repetition. The following is a list of dApp ideas you can draw from \(ordered by difficulty: Easy - Hard\):

### Voting \(Easy\)

A voting dApp where users can vote for candidates. Every user should only be able to vote once.

### CRUD \(Easy\)

A CRUD \(Create, Read, Update, Delete\) dApp where users can create posts, read posts, update existing posts and remove posts. You should track the ownership of posts such that only owners can update and remove posts.

### Escrow \(Medium\)

Write an escrow Smart Contract which helps users facilitate transactions. User A should be able to deposit funds in the Smart Contract while user B should be able to withdraw the previously deposited funds from user A.

You can add a timelock-like feature where funds will be automatically sent back to the depositor after a certain number of blocks has been mined and the funds haven't been withdrawn by user B.

### Lottery \(Medium\)

Create a Lottery dApp where users can buy tickets to participate. The money they spent on the tickets is added to a pool. After a pre-defined number of blocks has been mined, a winner is chosen randomly who receives all the funds from the pool.

**Note**: You can use a simple random number generation schemes derived from block hashes. There's no need to integrate a VRF via an Oracle \(although you might want to try that as well\).

### Multi-Sig Wallet \(Hard\)

Implement a Multi-Sig Wallet where multiple signatures are necessary to create a transaction and spend coins.

### Payment Channel \(Hard\)

Implement a payment channel which coordinates transactions between user A and user B off-chain and settles them on-chain. To keep it simple you can start with a Uni-directional Payment Channel and extend it later on to be Bi-directional.

### Flash Loans \(Hard\)

Implement a Flash Loan strategy in which you borrow funds, exploit an arbitrage opportunity and repay the borrowed funds while pocketing the difference, all within one transactions.

To help you get started with this one you might want to read how Flash Loans work by reading through the [Money Legos](https://money-legos.studydefi.com/) project documentation for the [Aave](https://money-legos.studydefi.com/#/aave?id=flashloans) and [dYdX](https://money-legos.studydefi.com/#/dydx?id=flashloans-on-dydx) DeFi protocols.

Also learn about "Mainnet Forking" capabilities of Ganache CLI and Hardhat Network. That way you don't need to continually re-deploy your Smart Contract on a testnet.

**Protip**: It's more than enough to build 2-3 dApps end-to-end. Move on to the next step the minute "everything clicks".

## 5. Learn to use OpenZeppelin's Smart Contracts

Writing secure Solidity / Vyper code can be a tough endeavour. Luckily the folks at OpenZeppelin created and maintain a [GitHub repository](https://github.com/OpenZeppelin/openzeppelin-contracts) with audited Smart Contract building blocks you can incorporate in your projects.

The full documentation for all the different Smart Contracts can be found [here](https://docs.openzeppelin.com/contracts).

## 6. Get to know ERC standards

[ERC's](https://eips.ethereum.org/erc) are Ethereum Improvement Proposals in which different ideas to improve the Ethereum Blockchain are discussed. One of the most famous ERC's are ERC-20 and ERC-721, both of which describe Token standards.

Read through the ERC-20 and ERC-721 standards and build a dApp which leverages those.

**Protip**: OpenZeppelin's Smart Contracts package should help you in doing so.

## 7. Learn about Smart Contract security

We already touched on the importance of Smart Contract security when it comes to dApp and Blockchain development. Take some time to read through our [Security](https://wiki.cryptodevhub.io/ethereum-evm/security) page and learn more about recent hacks and potential pitfalls.

## 8. Join Communities

Learning never stops and is best nurtured via thoughtful discussions and working with others. Our [Communities](https://wiki.cryptodevhub.io/ethereum-evm/communities) page will show you all the Ethereum communities you might want to join.

You should also consider contributing back to your favorite Open Source projects \(or start your own\). Not only do you provide immediate value, working on Open Source is one of the best ways to solidify your knowledge and grow as an engineer.

## Bonus: Streamline your DX

While Truffle and Hardhat help you getting up to speed there's more tooling you can leverage to streamline your overall workflow and Developer Experience.

Yos Riady's article "[Best Practices for Smart Contract Development](https://yos.io/2019/11/10/smart-contract-development-best-practices/)" is a treasure trove of great advice on how to setup a professional development environment.

In addition to that you should also check out Paul Berg's [create-eth-app](https://github.com/PaulRBerg/create-eth-app) or Austin Griffith's [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) projects which will help you getting started even faster.

You can find a more thorough list of useful tools on our [Tools](https://wiki.cryptodevhub.io/ethereum-evm/tools) page.
