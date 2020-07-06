---
title: Storage
description: Storage API
url: /docs/apis/storage
contributors:
  - mlynch
  - jcesarmobile
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Storage

Storage APIは、単純なデータのkey-valueのストアを提供します。

モバイルOSは定期的に `window.localStorage` の値を消去します。そのため、`window.localStorage` に代わるAPIを利用する必要があります。このAPIは
Mobile OS's may periodically clear data set in `window.localStorage`, so this API should be used instead of `window.localStorage`. このAPIは、Progressive Web Appとして利用すると `localStorage` を利用します。

iOSではこのプラグインは [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) を利用し、Androidでは  [SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences) を利用します。保存したデータはアプリがアンインストールされた時削除されます。

Note: このAPIは、ハイパフォーマンスのデータストレージアプリケーション向けではありません。アプリケーションに大量のアイテムを格納する場合、読み取り/書き込みの負荷が高い場合、または複雑なクエリーが必要な場合は、SQLiteまたは別のデータ・エンジンを使用する方法を検討してください。

<plugin-api index="true" name="storage"></plugin-api>

## Working with JSON

`Storage` works on Strings only. However, storing JSON blobs is easy: just `JSON.stringify` the object before calling `set`, then `JSON.parse` the value returned from `get`. See the
example below for more details.

This method can also be used to store non-string values, such as numbers and booleans.

## Example

```typescript
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


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

async setItem() {
  await Storage.set({
    key: 'name',
    value: 'Max'
  });
}

async getItem() {
  const { value } = await Storage.get({ key: 'name' });
  console.log('Got item: ', value);
}

async removeItem() {
  await Storage.remove({ key: 'name' });
}

async keys() {
  const { keys } = await Storage.keys();
  console.log('Got keys: ', keys);
}

async clear() {
  await Storage.clear();
}
```

## API

<plugin-api name="storage"></plugin-api>
