---
title: Capacitorプラグイン
description: Capacitorプラグイン
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

ウェブアプリケーションは、プラグインを使ってネイティブ API のパワーをフルに活用することができます。プラグインは、プラットフォーム間で非常に異なる API を使用する可能性のある共通のネイティブ操作をラップし、一貫したクロスプラットフォーム API を JavaScript に公開します。

さらに、Capacitor のプラグイン機能は、従来のネイティブ開発者と Web 開発者が混在するチームが、アプリの異なる部分で共同作業を行うことを可能にします。

Capacitor は、クライアント上で自動的に JavaScript のフックを生成するので、ほとんどのプラグインは、iOS では Swift/Obj-C、Android では Java/Kotlin を使用するだけで済みます。もちろん、プラグイン用のカスタム JavaScript を追加することも可能です。
