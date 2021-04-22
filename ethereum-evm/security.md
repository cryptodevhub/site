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

## Mastering Ethereum - Smart Contract Security

The book "Mastering Ethereum" has a dedicated [chapter about Smart Contract security](https://github.com/ethereumbook/ethereumbook/blob/develop/09smart-contracts-security.asciidoc). It's a very thorough examination of all the different security breaches that happened in the Ethereum ecosystem during the time of writing.

The structure the authors adhere to is very useful as they'll start by explaining the exploits core concepts, showing vulnerable code examples to then follow-up with preventative techniques and closing with examples from the real world.

If you're reading the GitHub version linked above you'll also benefit from updates contributed by the community.

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

## OpenZeppelin Blog

Staying on top of the fast moving Smart Contract security landscape is as important as learning the basics through books, blog posts and tutorials.

The [OpenZeppelin Blog](https://blog.openzeppelin.com/) is a great way to learn about recent developments in the security space. You'll definitely don't want to miss their blog posts on [security audits](https://blog.openzeppelin.com/security-audits/) as they give you an opportunity to learn about the auditing process as well as security vulnerabilities and potential exploits.

## PeckShield Blog

The team at [PeckShield](https://blog.peckshield.com/) does a great job at dissecting recent hacks and consolidating all their findings in easy to digest blog posts.

When reading such posts you'll learn about the big ideas behind the hacks, how they can be translated into code exploits \(and where to inject them\) and how you can be a forensic yourself by tracking them down in your favorite Block Explorer.

## 246 Findings From our Smart Contract Audits

Trail of Bits published a [blog post](https://blog.trailofbits.com/2019/08/08/246-findings-from-our-smart-contract-audits-an-executive-summary/) outlining the 246 \(common\) findings they ran into while conducting Smart Contract audits.

The post itself is more focused on the macro of Smart Contract security and should be used to complement other, more technical resources.

