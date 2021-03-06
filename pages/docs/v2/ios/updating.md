---
title: Capacitor iOSプロジェクトのアップデート
description: Capacitor iOSプロジェクトのアップデート
contributors:
  - mlynch
---

# Capacitor iOS プロジェクトのアップデート

アプリで使用している Capacitor のバージョンを更新したり、iOS コードベース内で Capacitor とやり取りする新しい方法を使用して（新しい iOS API の変更など）、Capacitor の iOS アプリを更新する必要がある場合があります。

## Capacitor iOS ライブラリのアップデート

あなたのアプリで使ってる @capacitor/ios のバージョンをあげる場合、npm で最新版をインストール必要があります:

```bash
npm install @capacitor/ios@2
```

そして Native プロジェクトと同期します:

```bash
npx cap sync ios
```

## iOS プロジェクトのアップデート

Xcode プロジェクトのベース構造を更新するには、Capacitor リポジトリで、Capacitor の最新の安定リリースに対応するタグの下にある [ios-template](https://github.com/ionic-team/capacitor/tree/master/ios-template) プロジェクトを参照してください。コアプロジェクトは意図的にシンプルに保たれているため、コアプロジェクトやプロジェクトとの違いを確認するのにそれほど時間はかからないはずです。

特に [AppDelegate.swift](https://github.com/ionic-team/capacitor/blob/master/ios-template/App/App/AppDelegate.swift) は、iOS イベントに変更がないか定期的にチェックされるべきです。

### From 1.0.0 to 1.1.0

Recommended change:

- Update `.gitignore` file inside `ios` folder with [this changes](https://github.com/ionic-team/capacitor/commit/91941975ea5fe5389e0b09bb8331d5cb16ea6a78#diff-ea346566a7f09b5e88ed28d3d6362ec3)

### From <= 1.5.1 to 2.0.0

Recommended change:

- Update native project to Swift 5

  Capacitor 2.0 uses Swift 5, it's recommended to update your native project to also use Swift 5.
  To do so, from Xcode click `Edit -> Convert -> To Current Swift Syntax`.

  App.app will appear selected, click `Next` button.

  Then a message will say `No source changes necessary`.

  Finally, click the `Update` button.

For API changes, check the [Release Notes](https://github.com/ionic-team/capacitor/releases/tag/2.0.0).
