---
title: ストレージ
description: 小～大容量のデータをCapacitorに保存する
contributors:
  - mlynch
---

# Capacitor でのデータ保存

ほとんどのアプリケーションは、ローカルデータを保存したり読み出したりする必要があります。具体的なユースケースに応じて、いくつかのアプローチが考えられます。

## なぜ LocalStorage や IndexedDB ではいけないのですか？

Capacitor のアプリケーションは主に Web ビューやブラウザで動作するため、ストレージ用の Web API は Capacitor の開発者が利用できます。ただし、これらの API には、いくつかの大きな注意点があります。

ローカルストレージは、ユーザー ID などの一時的なデータに使用できますが、一過性のものであることを考慮する必要があります。これは、デバイスの容量が不足している場合、OS がウェブビューからローカルストレージを再利用するためです。同じことが、少なくとも iOS の IndexedDB にも言えます（Android では、 [persisted storage API](https://web.dev/persistent-storage/)で IndexedDB を persisted としてマークすることができます）。詳しくは、 [data storage eviction policies](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) をご覧ください。

## Capacitor のストレージ API

Capacitor には、ネイティブの [Storage API](/docs/apis/storage) が付属しており、上記の退避の問題を回避することができますが、少量のデータを対象としています。

Storage API は、高度なクエリをサポートしないシンプルなキー/バリュー API を提供します:

```typescript
import { Storage } from '@capacitor/storage';

// JSON "set" example
async setObject() {
  await Storage.set({
    key: 'user',
    value: JSON.stringify({
      id: 1,
      name: 'Max'
    })
  });
}

// JSON "get" example
async getObject() {
  const ret = await Storage.get({ key: 'user' });
  const user = JSON.parse(ret.value);
}
```

## 大容量データやハイパフォーマンスなストレージの選択肢

大規模なデータを保存し、ハイパフォーマンスな方法でアクセスするには、いくつかのオプションがあります。

最も広くサポートされているオプションは SQLite です。 [capacitor-sqlite](https://github.com/jepiqueau/capacitor-sqlite) や [cordova-plugin-sqlite](https://github.com/xpbrew/cordova-sqlite-storage) など、Capacitor で動作するはずのコミュニティで管理されている SQLite プラグインが多数あります。

また、Capacitor チームは、暗号化をサポートし、デバイス上の [secure key management APIs](https://ionicframework.com/enterprise/identity-vault) と統合した [enterprise SQLite storage solution](https://ionicframework.com/enterprise/offline-storage) を提供しています。
