---
title: In App Purchases in Capacitor
description: How to register and consume In App Purchases in your Capacitor app or game
contributors:
  - mlynch
---

# Capacitor でのアプリ内課金

ほとんどのアプリは、収入を得てアップグレードを可能にするために、In App Purchase で「消費」を作成する必要があります。Capacitor アプリに In App Purchase サポートを追加するのは簡単ですが、アプリ製品の設定と登録にはかなりの労力を要します。

そのためには、 [cordova-plugin-purchase](https://github.com/j3k0/cordova-plugin-purchase) プラグインを使用します。

```shell
npm install cordova-plugin-purchase
npx cap update
```

## 製品と消耗品の設定

Capacitor アプリで In App Purchases を設定する作業の大部分は、iOS と Android 用の製品と消耗品を登録し、それらのアイテムをアプリに登録して消費するための適切なフローを設定することです。

これはかなり複雑なプロセスなので、次のステップとして以下のガイドをお勧めします。

- [In App Purchase Plugin Guide](https://purchase.cordova.fovea.cc/)
- [How to use In App Purchase with Capacitor](https://devdactic.com/ionic-in-app-purchase-capacitor/)
