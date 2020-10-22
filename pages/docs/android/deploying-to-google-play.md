---
title: Google Play Storeへのデプロイ
description: あなたのCapacitorアプリのGoogle Play Storeへのデプロイの方法
contributors:
  - mlynch
---

# あなたのCapacitorアプリのGoogle Play Storeへのデプロイ

Capacitorアプリは結局のところ通常のNativeアプリなので、Google Play Storeへのデプロイ方法は他のNativeアプリと全く同じである。

まずは、[起動チェックリスト](https://developer.android.com/distribute/best-practices/launch/launch-checklist) に関するGoogleの公式ドキュメントを参照して、アプリをサブミットできる状態にしてください。あなたのアプリのスプラッシュ画面とアイコンの生成については [ここをご覧ください](/docs/guides/splash-screens-and-icons)。

Capacitor特有の考慮事項についてのガイドは、[Josh Moronyの素晴らしいガイド](https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/)を参照してください。

## Automating Deployments

Google Play Store(およびApp Store)への提出を合理化したり、 CI/CDワークフローへの統合によって自動化さえしたいチームのために、 Capacitorの提供会社であるIonicは、エンドツーエンドのアプリ開発とデプロイ機能を提供する、 [Appflow](https://useappflow.com/)という強力なMobile DevOpsサービスを提供しています。

興味ありますか? この [手引書を読んで](/docs/guides/deploying-updates) 、どのように動作するのか、またどのように現在のキャパシターで使用できるのかを知るか、または公式の[Appflowドキュメント](https://ionicframework.com/docs/appflow/) をご覧ください。
