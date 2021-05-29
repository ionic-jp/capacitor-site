---
title: CI/CD for Capacitor Apps
description: Adding Mobile CI/CD to your Capacitor App development process
contributors:
  - mlynch
---

# Capacitor アプリでの CI/CD

すべての本格的なアプリケーションは、継続的なテスト、統合、および配信のために CI/CD プロセスを利用します。

残念ながら、モバイルでは CI/CD に特有の課題があります。ビルドとデプロイメントのプロセスが根本的に異なるため、ウェブ開発者がフロントエンドの CI/CD に使用する同じテクニックは、モバイルには適用できません。

## フロントエンドの基本的な CI/CD

Capacitor アプリの CI/CD の最初のステップは、_frontend_ JS アプリの構築とテストのためのプロセスを使用することです。

これは、GitHub Actions、CircleCI、Jenkins などの一般的な CI/CD サービスを使って行うのが一般的です。

このプロセスでは、アプリは各コミットでビルドするように設定され、多くの場合、ローカルのテストスイートを実行します。これは典型的な JS の CI/CD プロセスであり、あなたのチームはすでに慣れ親しんでいることでしょう。

しかし、これは氷山の一角に過ぎません。チームは、アプリの実際のネイティブ・モバイル側をどのように構築し、テストし、デプロイするかを考える必要があります。

## モバイル CI/CD の追加

モバイルアプリでは、JS アプリのテストを構築して実行するだけでは十分ではなく、アプリの大部分はネイティブの iOS や Android アプリとして構築して実行する必要があります。

さらに、モバイルアプリのデプロイとアップデートの方法は、ウェブアプリとは大きく異なります。ウェブアプリはサーバー上でホストされ、すぐに更新できるのに対し、モバイルアプリはアプリストアで "ホスト" され、暗号化されたバイナリとして配布されます。そのため、更新プロセスも大きく異なります。

つまり、ネイティブ・モバイルのビルドとテストを行うことができ、ネイティブモバイルに適した方法でアプリのデプロイとアップデートを行うことができるサービスが必要なのです。

## Appflow: Capacitor アプリのためのモバイル CI/CD

end-to-end のモバイル CI/CD を提供するサービスとして、Capacitor アプリの公式モバイル CI/CD および Mobile DevOps プラットフォームである [Appflow](https://useappflow.com/) があります。

Appflow は、頻繁に更新され、管理された iOS および Android のビルド環境を提供します。Appflow は、GitLab、GitHub、Bitbucket などの一般的な git サービスと統合し、コミットごとに JS とネイティブモバイルのビルドをトリガーすることをサポートしています。また、Appflow はビルドをステークホルダー、ベータテスター、本番ユーザーのそれぞれのチャンネルに分けることも可能です。

また、Appflow は、Capacitor の開発者向けに、アプリの JS/HTML/CSS レイヤーの更新であれば、アプリストアに申請することなく、アプリの更新をリアルタイムにプッシュする機能も提供しています。

詳しくは、 [Appflow Documentation](https://ionicframework.com/docs/appflow) をご覧ください。

## 従来の CI/CD サービスを Appflow で使用する場合

Appflow は、Web/JS のビルドとモバイルのネイティブビルドを行うため、従来の CI/CD サービスを置き換えることができます。しかし、従来の CI/CD サービスとの相性は抜群です。

このような使い方をするには、Webhook を使って、コミットごとにビルドしたアセットを Appflow に送ります。

## その他のモバイル CI/CD オプション

モバイル CI/CD のサービスは他にもありますが、Capacitor に特化したものはありません。これらのサービスには、 [Visual Studio App Center](https://appcenter.ms) 、 [Bitrise](https://www.bitrise.io/) 、 [Buddybuild](https://www.buddybuild.com/) (iOS のみ) などがあります。なお、これらのサービスは現在、Capacitor アプリのリモート・リアルタイム・アプリ・アップデートを提供していないことに留意してください。
