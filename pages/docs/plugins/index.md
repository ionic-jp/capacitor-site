---
title: Capacitor Plugins
description: Capacitor Plugins
contributors:
  - mlynch
  - jcesarmobile
  - dotNetkow
---

# Capacitor プラグイン

Capacitor のプラグインによって、JavaScript はネイティブ API と直接通信することができます。

<style>
  plugin-cards {
    display: flex;
    margin-block-start: -32px;
    margin-inline-start: -16px;
    margin-block-end: 40px;
  }

  plugin-cards .card {
    margin-block-start: var(--space-6);
    margin-inline-start: var(--space-3);;
    padding: var(--space-6) var(--space-5);

    flex-basis: 100%;
    border-radius: var(--radius-2);
    box-shadow: var(--elevation-5);    

    transition: transform .2s ease-out, box-shadow .2s ease-out;
  }
  plugin-cards .card p {
    margin-block-end: 0;
  }
  plugin-cards .card:hover, .card:active, .card:focus {
    transform: translateY(-2px);
    box-shadow: var(--elevation-6);
  }

  @media screen and (max-width: 500px) {
    plugin-cards {
      flex-direction: column;
    }   
  }
</style>
<plugin-cards>
  <a class="card" href="/docs/apis">
    <img
      src="/assets/img/docs/core-plugins.png"
      width="40" height="40"
    >
    <p class="ui-heading-5">公式プラグイン</p>
    <p class="ui-paragraph-5">公式プラグインはCapacitor teamがメンテナンスしています。</p>
  </a>
  <a class="card" href="/docs/plugins/community">
    <img
      src="/assets/img/docs/community-plugins.png"
      width="40" height="40"
    >
    <p class="ui-heading-5">コミュニティプラグイン</p>
    <p class="ui-paragraph-5">コミュニティプラグインはCapacitorのコミュニティがメンテナンスしています。</p>
  </a>
</plugin-cards>

プラグインを使用すると、Web アプリケーションはネイティブ API の全機能にアクセスすることができ、従来のネイティブアプリができることをすべて行うことができます。プラグインは、プラットフォーム間で非常に異なる API を使用する可能性のある一般的なネイティブ操作をラップしながら、一貫性のあるクロスプラットフォーム API を JavaScript に公開する場合に特に優れています。

また、Capacitor のプラグイン機能により、従来のネイティブ開発者とウェブ開発者の混合チームがアプリのさまざまな部分で一緒に作業できるようになります。

Capacitor はクライアント上で JavaScript のフックを自動生成するので、ほとんどのプラグインは iOS 用のネイティブ Swift/Obj-C プラグインや Android 用の Java プラグインをビルドするだけです。もちろん、プラグインにカスタム JavaScript を追加することは可能で、JavaScript npm パッケージを提供するようなものです。
