---
layout: default
title: Standard Sats: Synthetic Lightning-native Assets
sitemap: false
permalink: /en/
---

**Standard Sats** — is a service solving the high volatility of bitcoin against the euro by hedging.
It is an independent bitcoin bank for geographically-distributed communities or businesses.
The product consists of an open-source protocol client (mobile bitcoin wallet; modified version of Simple 
Bitcoin Wallet, SBW) and node. The node works on the Lightning Network.
Get started — read [instructions for connecting a wallet](https://docs.google.com/document/d/1PyTQkZ5kc4KA7_Mt86CkOWm-I4bMd51xt1PsRotYNBU/edit?usp=sharing).

## How it works

User installs the wallet (as of May 2022 only the Android version is available).
Since the "fiat" channel opens automatically, it can be replenished with satoshis immediately after installation.
The user can always open a regular channel to any Lightning node if required and if he has bitcoins in the wallet.
Upon replenishing the "fiat" channel, the service locks the bitcoin price in euros, opening a position on the exchange
[Kollider](https://kollider.xyz/). The user sees a disposable amount in euros in the wallet, which does not depend on the exchange rate of bitcoin.
Thus, a new bitcoin-derived asset is created, comparable to a personal stablecoin.
Watch [the video of such a wallet](https://youtu.be/7bvFbpivc0E?t=39).

![Schematic View of the Lightning Node and Satellite Wallets ><](assets/img/standard-sats-community.drawio.svg)

## Use cases

* A private entrepreneur accepts payment for work in eurobitcoins, securing the ability to pay current 
bills for housing, food, insurance, etc.
* A man without a bank account from Montenegro buys a certain product for euros from a colleague in Germany 
sending it by mail. The advance payment for the goods is transferred using Standard Sats. 
The buyer of the goods is insured against a drop in the bitcoin price.

## FAQ

### Does the service provide access to its node? If so, can the server admin theoretically steal my bitcoins?

Yes, "fiat" channels are managed by the Standard Sats project by default and the service administrator can
steal your bitcoins. You can install the software on your server to administer it for yourself.

### How is it different from stablecoins?

Stablecoins are usually issued by a centralized issuer. In the case of Tether, it is a Panama bank.
They are fiat money guarantees that require the trust of the issuing bank. While the synthetic assets 
in a broad sense do not have a centralized issuer.

### What is the probability that my assets will be stolen if the exchange is hacked? What are the guarantees? Are there precedents?

Any tokens stored on an exchange are subject to the risks of hacking or bankruptcy of the exchange.
In general, this is called counterparty risk. Unfortunately, you cannot use the 
capital markets that exchanges provide without this risk. Assess your risks yourself by deciding to install software and 
open a personal account in exchange for its operation. Alas, in the more than 10-year history of the 
existence of Bitcoin, we can count many precedents for hacking and bankruptcy of exchanges.

### Who is behind the project?

The founders are developers Ilya Evdokimov and Anton Gushcha, who created a product 
prototype in November 2021 as part of a [banking hackathon](https://bitcoin-bankathon.devpost.com/project-gallery).
The development of the project is self-funded. You can send donations via the 
Lightning Network to [standardsats@lntxbot.com](https://lntxbot.com/@standardsats). Follow the link if 
your wallet does not support Lightning Address.

### How does a node administrator make money?

By installing the Standard Sats software, the user becomes the host administrator and can earn 
routing fees in the Lightning network. However, Standard Sats is not responsible for the actions of the 
user or the exchange used for hedging. Also, payment routing income is not guaranteed.

### Are there any usage examples?

Yes. As of May 2022, the project has been deployed in [MonteLibero](https://montelibero.org/faq-po-montelibero/) community.

## Caveat Emptor

The software in Standard Sats repository is provided "as is", without warranty of any kind, explicit or 
implied. You use this software at your own risk. The author of the program will not be responsible for any 
loss or corruption of data, disruption of other programs and systems, as well as for any profit lost in 
the process of using or misusing this software product.

## Links

1 - [Bitcoin Beach: What Happened When an El Salvador Surf Town Went Full Crypto](https://www.bloomberg.com/news/features/2021-06-17/world-s-biggest-bitcoin-experiment-is-a-surf-town-in-el-salvador)

2 - [Liquidity abstraction in Lightning Network](https://notgeld.medium.com/liquidity-abstraction-in-lightning-network-3d7a1d76ac82)
