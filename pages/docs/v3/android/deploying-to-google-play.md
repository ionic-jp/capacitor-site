---
title: Google Play Storeへのデプロイ
description: あなたのCapacitorアプリのGoogle Play Storeへのデプロイの方法
contributors:
  - mlynch
canonicalUrl: https://capacitorjs.com/docs/android/deploying-to-google-play
---

# あなたの Capacitor アプリの Google Play Store へのデプロイ

Capacitor アプリは結局のところ通常の Native アプリなので、Google Play Store へのデプロイ方法は他の Native アプリと全く同じである。

まずは、[起動チェックリスト](https://developer.android.com/distribute/best-practices/launch/launch-checklist) に関する Google の公式ドキュメントを参照して、アプリをサブミットできる状態にしてください。あなたのアプリのスプラッシュ画面とアイコンの生成については [ここをご覧ください](/docs/guides/splash-screens-and-icons)。

Capacitor 特有の考慮事項についてのガイドは、[Josh Morony の素晴らしいガイド](https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/)を参照してください。

## Automating Deployments

Google Play Store(および App Store)への提出を合理化したり、 CI/CD ワークフローへの統合によって自動化さえしたいチームのために、 Capacitor の提供会社である Ionic は、エンドツーエンドのアプリ開発とデプロイ機能を提供する、 [Appflow](https://useappflow.com/)という強力な Mobile DevOps サービスを提供しています。

興味ありますか? この [手引書を読んで](/docs/guides/deploying-updates) 、どのように動作するのか、またどのように現在のキャパシターで使用できるのかを知るか、または公式の[Appflow ドキュメント](https://ionicframework.com/docs/appflow/) をご覧ください。
