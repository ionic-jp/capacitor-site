---
title: Capacitorプラグインの構築
description: Capacitorプラグインの構築
contributors:
  - eric-horodyski
---

# Capacitor プラグインの構築

Capacitor は、Capacitor アプリにネイティブ機能を追加する際に使用する包括的な Plugin API を提供します。

Capacitor プラグインには 2 つのタイプがあります: _local plugin_ は特定の Capacitor アプリケーションに分離されたカスタムネイティブコードで、ソース管理の一部としてコミットされたネイティブプロジェクトの中に存在します。 _global plugin_ は、開発者が任意の Capacitor アプリケーションに追加できる公開された npm パッケージです。

このチュートリアルでは、空の Capacitor アプリケーションから始めて、それにネイティブコードを追加してローカルプラグインを構築します。そして、それをグローバルプラグインとしてパッケージ化し、公開できるようにします。

## さて、何をつくろう。

あなたが配送業者に勤めているとします。あなたが書いたアプリケーションでは、ドライバーが顧客から署名を得て、配達物を受け取ったことを確認することができます。法務チームは、ドライバーが顧客に縦書きでサインさせるため、顧客のサインの品質が低いことに気づきました。そのため、署名を取得する際にアプリを強制的にランドスケープモードにするよう、あなたにタスクが与えられました。

私たちが作るプラグインは、この要求に対応するために **画面の向き** の機能を実装する予定です。

- デバイスの現在の **方向** を検出し、縦向きと横向きで異なる UI を提供します。
- ユーザーは、画面の向きを回転させ、ランドスケープモードに **ロック** するオプションが与えられます。
- 署名が確認された後、アプリは画面の向きの回転を **ロック解除** します。

このチュートリアルでは、署名パッドのモックアップを作成し、画面の向きの機能のみを構築します。

この `ScreenOrientation` プラグインは、ウェブ、iOS、Android プラットフォームで動作します。

## はじめかた

<a href="https://github.com/ionic-enterprise/capacitor-plugin-tutorial" target="_blank">このレポジトリ</a> をクローンして、 `start` ブランチにチェックアウトしましょう。 `npm install` をプロジェクトのルートで実行します。

> このチュートリアルでは、ユーザーインターフェースの構築に `@ionic/react` を使用します。React や Ionic Framework に馴染みがなくても大丈夫です! このチュートリアルで扱うコンセプトは、TypeScript 対応のあらゆる Web フレームワークを使用した Capacitor アプリに適用されます。

まず、iOS と Android の両プラットフォームを Capacitor アプリに追加します。

```bash
npm run build
npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android
npx cap sync
```

さて、ネイティブ・プラットフォームを追加した Capacitor アプリができたので、プラグイン構築の最初のステップである API の設計に移ります。
