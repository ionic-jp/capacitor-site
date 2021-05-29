---
title: セキュリティ
description: Capacitorアプリにおけるセキュリティのベストプラクティス
contributors:
  - mlynch
---

# Capacitor のセキュリティ・ベスト・プラクティス

Capacitor の開発者は、アプリがセキュリティのベストプラクティスに従っていることを確認する責任があります。適切なケアを行わないと、重大なセキュリティ問題が発生し、非常に大きな損害と費用が発生する可能性があります。

セキュリティのテーマは多岐にわたりますが、Capacitor の開発者がセキュリティ遵守のために監査すべき領域は、データ、認証/ディープリンク、ネットワーク、Web View のセキュリティなど、いくつかあります。

## データ・セキュリティ

データセキュリティは、ローカルに保存されているデータやアプリのコード内に保存されているデータのセキュリティを扱います。

### コードに秘密を埋め込まない

Capacitor のアプリをはじめとするフロントエンドアプリのセキュリティ対策で最も重要なことは、アプリのコードに秘密を埋め込まないことです。つまり、コードに秘密の API キーや暗号化キーなど、アプリの基本的な解析技術を使って簡単に盗むことができるような機密データが含まれていないことを確認する必要があります。ビルド時にアプリのコードに機密値を注入する環境変数プラグインに注意してください。

代わりに、秘密鍵やトークンを必要とするほとんどの操作をサーバーサイドに移し、そこで秘密鍵やトークンを保護し、すべてのリクエストをサーバーから転送できるようにします。これは、サーバーレス関数や従来のサーバーサイドアプリのプロセスであるかもしれません。

認証トークンや暗号化キーなど、クライアント側で永続化された機密キーやトークンを扱う必要があるアプリでは、メモリ上の値のみを扱う（ディスクに永続化しない）か、以下のようなセキュアなキーチェーン/キーストア技術を使用することが推奨されます。

### 暗号化キー、セッショントークンなどの保存について

最近のモバイル機器や OS は、強力なセキュリティ API や専用のセキュリティハードウェアを備えており、デバイス上にセンシティブな値を保存することができます。このようにして、アプリは生体認証や安全なパスコード認証を行いながら、暗号鍵やセッショントークンなどの機密性の高い値を管理しています。

この機能を提供する API は、 [iOS Keychain Services](https://developer.apple.com/documentation/security/keychain_services) および [Android Keystore](https://developer.android.com/training/articles/keystore) の API で提供されています。これらの API は複雑で低レベルであるため、これらの API を使用するプラグイン（例えば、この [cordova-plugin-ios-keychain](https://github.com/ionic-team/cordova-plugin-ios-keychain) コミュニティプラグイン）を探すことになるでしょう。

企業での使用例としては、Capacitor チームが提供する [Identity Vault](https://ionicframework.com/enterprise/identity-vault) があり、これらのネイティブセキュリティ API の上に、使いやすい API と頻繁に更新されるエクスペリエンスを提供しています。Identity Vault は、Capacitor の他のエンタープライズ製品である [Offline Storage](https://ionicframework.com/enterprise/offline-storage) や [Auth Connect](https://ionicframework.com/enterprise/auth-connect) と併用することで、それぞれのエクスペリエンスの暗号化キーや認証トークンの管理コンポーネントを提供することができます。

## 認証とディープリンキング

ネイティブアプリの認証フローでは、カスタム URL スキームを使用して認証を行うことが多いため、特に注意が必要です。 "instagram://" のようなカスタム URL スキームは、Web ドメインのようにグローバルに管理されていないため、悪意のあるアプリがカスタム URL スキームを定義して上書きすることで、あるアプリ向けのリクエストを傍受できる可能性があります。セキュアなトークンが間違ったアプリに送られることを想像してみてください。

一般的に、アプリはカスタム URL スキームのディープリンクを使って機密データを送信するべきではありません（ユニバーサルリンクなどの新しい技術は、実際のウェブドメインの所有権に依存するため、より安全です）

これは、認証体験の最後のステップがアプリへのディープリンクに依存している oAuth2 フローでは特に重要です。悪意のあるアプリがトークンを受け取る可能性を軽減するために、Capacitor アプリの OAuth2 には [PKCE](https://oauth.net/2/pkce/) を使用する必要があります。

OAuth2 フローを安全にするために、プラグインが PKCE をサポートしていることを確認してください。企業で使用する場合は、公式の [Auth Connect](https://ionicframework.com/enterprise/auth-connect) Capacitor ソリューションが、oAuth2 認証フローのための PKCE を完全にサポートしています。

詳しくは、 [oAuth2 Best Practices for Native Apps](https://auth0.com/blog/oauth-2-best-practices-for-native-apps/) をご覧ください。

##ネットワークセキュリティ

ネットワークセキュリティでは、ネットワークのリクエストが信頼できるエンドポイントに送られていることを確認し、パスワードなどの機密データを平文で送信しないように暗号化することを行います。

### SSL

アプリは SSL 対応のエンドポイントにのみリクエストを行う必要があります。つまり、エンドポイントへのリクエストは `http://` ではなく、常に `https://` を使用してください。これにより、データが平文で送信されることはありません。

しかし、これだけでは十分ではありません。可能性のある [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 攻撃を避けるために、SSL 証明書を固定化して、既知の証明書のみを受け入れるようにする必要があります。これは、クライアントとサーバの両方でネイティブに行われなければなりません。現在、 [cordova-plugin-advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http) プラグインがこの機能をサポートしていますが、他のプラグインにも同様の機能があるかもしれません。

## ウェブビューのセキュリティ

### コンテンツ・セキュリティ・ポリシー

[Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) は、ブラウザ(ひいては Capacitor Web View)で利用できるセキュリティ機能のセットです。CSP は、ユーザエージェントが Web ビューで読み込むことができるリソース（画像、XHR、動画、Web ソケットなど）を制限するために使用できます。

CSP は、Capacitor アプリで、 `<head>` に許容できる CSP フォーマットの `meta` タグを追加することで構成できます（CSP は、サーバー側とクライアント側の両方で同じフォーマットを使って構成できます）。例えば、この構成では、現在のオリジンと `foo.com` へのすべてのリクエストを許可します。

``html

<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' foo.com"
/>
```

CSP は様々な構成をサポートしており、[CSP reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)は必読です。また、[content-security-policy.com](https://content-security-policy.com/)も有用なリソースです。

## JavaScript のセキュリティ技術

Capacitor のアプリの大部分は JavaScript を使用した Web アプリなので、典型的な JS のセキュリティ技術が適用されます。

JS のセキュリティについてはこのドキュメントの範囲外であり、適切な JS や Web アプリのセキュリティ技術については、既存の資料が多数あります。ここでは、 [One good one](https://wpengine.com/resources/javascript-security/) をご紹介します。
