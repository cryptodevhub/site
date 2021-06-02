---
description: >-
  Smart Contracts are immutable and "code is law". Therefore you want to arm
  yourself with some security chops to avoid pushing code with bugs which can be
  exploited.
---

# Security

## Ethereum Smart Contract Best Practices

If you're looking for a resource which catalogs and discusses common security pitfalls in the Ethereum ecosystem you should definitely read through the [ConsenSys Smart Contract Best Practices](https://consensys.github.io/smart-contract-best-practices/) documentation.

Working through it you'll learn about Software Engineering best practices, useful developer tools for security as well as known attacks \(such as the DAO Hack\) and what code weaknesses made them possible.

## Sigma Prime - Solidity Security

This long-form [blog post](https://blog.sigmaprime.io/solidity-security.html) written by Sigma Prime walks the reader through all of the known attack vectors an EVM-based Smart Contract can expose.

Every vulnerability is described and discussed in a structured, 3-part writeup. At first the vulnerability is explained in great detail, next up preventative techniques are shown, followed by examples where the discussed security hole has been exploited in the past.

**Note**: The blog post was turned into a [GitHub repository](https://github.com/sigp/solidity-security-blog) which welcomes contributions to keep the document as up-to-date as possible.

## Mastering Ethereum - Smart Contract Security

The book "Mastering Ethereum" has a dedicated [chapter about Smart Contract security](https://github.com/ethereumbook/ethereumbook/blob/develop/09smart-contracts-security.asciidoc). It's a very thorough examination of all the different security breaches that happened in the Ethereum ecosystem during the time of writing.

The structure the authors adhere to is very useful as they'll start by explaining the exploits core concepts, showing vulnerable code examples to then follow-up with preventative techniques and closing with examples from the real world.

If you're reading the GitHub version linked above you'll also benefit from updates contributed by the community.

## Building Secure Smart Contracts

The [Building Secure Smart Contracts](https://github.com/crytic/building-secure-contracts) project by Trail of Bits is a hands-on resource with guidelines and training material to learn how to write secure Smart Contracts.

It covers topics such as the setup of a secure development workflow, integration of tokens as well as program analysis via fuzzers, symbolic execution and static analysis.

## Rekt

The mission of [Rekt](https://www.rekt.news/) is to catalog and analyze major Smart Contract hacks with the goal to educate readers about the exploited security vulnerabilities. Using this knowledge, builders as well as traders should be more equipped to evaluate new projects in the future.

While you're there you should also look into their [Leaderboard](https://www.rekt.news/leaderboard/) which lists all analyzed hacks sorted by USD lost.

## ETHSecurity

The [ETHSecurity](https://www.ethsecurity.org/) project is an effort to facilitate an open and collaborative community where bast practices on authoring secure Smart Contracts are shared.

Browsing through its content you'll find a lot of useful resources such as blog posts, talks, audits and security information as well as tools and developer resources.

## Parity's Checklist for Secure Smart Contract Development

Parity published a [checklist](https://www.parity.io/paritys-checklist-for-secure-smart-contract-development/) of 14 different best practices you might want to follow when working on your Smart Contract projects.

While the checklist doesn't examine known attacks like Re-Entrancy, it's a guide one should reference to streamline the Software Engineering efforts involved when building dApps on the Ethereum Blockchain.

## The Ethernaut

[The Ethernaut](https://ethernaut.openzeppelin.com/) is an interactive wargame in which you switch roles and step into the shoes of an attacker to exploit Ethereum Smart Contracts.

In order to play The Ethernaut you should be proficient in Solidity and Web3.js. It's levels are sorted in ascending order \(Easy - Hard\), so you want to start with Level 0 and work your way up from there.

## Capture the Ether

The [Capture the Ether](https://capturetheether.com/) project is an interactive game in which you hack Smart Contracts to learn about security.

The different categories you work through will educate you about important topics such as integer overflows and underflows or ownership rules. Every challenge has points attached to it. The more points you get, the harder the challenge.

## Damn Vulnerable DeFi

During the "DeFi Summer of 2020" there was a period of time where new Smart Contract exploits were reported on an almost daily basis.

If you want to learn how the infamous DeFi hacks worked and how you can take out a Flash Loan to manipulate Oracle price feeds you should definitely check out [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/).

**Protip:** If you get stuck, not making any significant progress you should check out the [OpenZeppelin Forum](https://forum.openzeppelin.com/) where community members share and discuss their solutions.

## EtherHack

[EtherHack](https://etherhack.positive.com/) is CTF / Wargame in which your goal it is to break into various Smart Contracts written in the Solidity programming language.

There are 6 level in total you can work through. The difficulty increases every time you reach the next level.

## OpenZeppelin Blog

Staying on top of the fast moving Smart Contract security landscape is as important as learning the basics through books, blog posts and tutorials.

The [OpenZeppelin Blog](https://blog.openzeppelin.com/) is a great way to learn about recent developments in the security space. You'll definitely don't want to miss their blog posts on [security audits](https://blog.openzeppelin.com/security-audits/) as they give you an opportunity to learn about the auditing process as well as security vulnerabilities and potential exploits.

## PeckShield Blog

The team at [PeckShield](https://blog.peckshield.com/) does a great job at dissecting recent hacks and consolidating all their findings in easy to digest blog posts.

When reading such posts you'll learn about the big ideas behind the hacks, how they can be translated into code exploits \(and where to inject them\) and how you can be a forensic yourself by tracking them down in your favorite Block Explorer.

## \(Not So\) Smart Contracts

The [\(Not So\) Smart Contracts repository](https://github.com/crytic/not-so-smart-contracts) is a collection of Smart Contract implementations showcasing the most prominent security vulnerabilities like "reentrancy", "forced ether reception" or "denial of service".

Every directory contains a README describing the exploit and mitigation strategies in great detail as well as an implementation of a vulnerable Smart Contract.

## Common Smart Contract Vulnerabilities and How To Mitigate Them

If you're looking for a concise overview of common Smart Contract vulnerabilities you should read through Yos Riady's [writeup](https://yos.io/2018/10/20/smart-contract-vulnerabilities-and-how-to-mitigate-them/) on his blog.

In it, Yos walks you through the basics of Smart Contract security as well as common vulnerabilities such as the infamous reentrancy bug, bad randomness or integer overflows. Not only do you learn about the theoretical underpinnings of such exploits, you'll also see buggy code examples as well as the fixes necessary to mitigate attacks.

## 246 Findings From our Smart Contract Audits

Trail of Bits published a [blog post](https://blog.trailofbits.com/2019/08/08/246-findings-from-our-smart-contract-audits-an-executive-summary/) outlining the 246 \(common\) findings they ran into while conducting Smart Contract audits.

The post itself is more focused on the macro of Smart Contract security and should be used to complement other, more technical resources.

