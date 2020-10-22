---
title: Storage
description: Storage API
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

<docgen-index>

* [`get(...)`](#get)
* [`set(...)`](#set)
* [`remove(...)`](#remove)
* [`clear()`](#clear)
* [`keys()`](#keys)

</docgen-index>

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

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

## API

### get(...)

```typescript
get(options: { key: string; }) => Promise<{ value: string | null; }>
```

Get the value with the given key.

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### set(...)

```typescript
set(options: { key: string; value: string; }) => Promise<void>
```

Set the value for the given key

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ key: string; value: string; }</code> |

--------------------


### remove(...)

```typescript
remove(options: { key: string; }) => Promise<void>
```

Remove the value for this key (if any)

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

--------------------


### clear()

```typescript
clear() => Promise<void>
```

Clear stored keys and values.

--------------------


### keys()

```typescript
keys() => Promise<{ keys: string[]; }>
```

Return the list of known keys

**Returns:** <code>Promise&lt;{ keys: string[]; }&gt;</code>

--------------------

</docgen-api>
