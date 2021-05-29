---
title: Androidライフサイクル
description: Androidライフサイクル
contributors:
  - mlynch
  - jcesarmobile
---

# Android ライフサイクル

Android ユーザーが期待する動作をするアプリを作るためには、Android アクティビティ・ライフサイクルを理解することが重要です。

このドキュメントでは、Capacitor に関連するライフサイクルを説明します。詳細については、Android 公式ドキュメントの [Activity Lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle.html) を参照してください。

## アプリ再起動の処理

Android アプリでは、カメラやブラウザの機能など、自分のアプリに含めるには複雑すぎる機能を、他のアプリ（またはアクティビティ）を利用して実現することがよくあります。

端末のメモリが不足しているときに、新しいアクティビティを起動すると、メモリを確保するためにアプリが強制終了されることがあります。

このような場合、新しいアクティビティがアプリにデータを返したとき、アプリはユーザーに、ユーザーが直前に行っていたことを再開するアプリの状態を見せたいと思うでしょう。
