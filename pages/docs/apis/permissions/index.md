---
title: Permissions
description: Permissions API
contributors:
  - mlynch
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Permissions

Permissions APIには、特定のパーミッションが付与されているかどうかを確認してから要求するメソッドが用意されています。

これは、例えば、アプリが許可を要求している理由の背後にあるコンテキストの欠如のために、ユーザが許可要求を拒否することを避けるために有用です。代わりに、権限を確認します。
最初にカスタムUIを表示してユーザーに許可チェックの準備をさせると、許可レートが上がり、ユーザーの操作性が向上します。

## API

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### query(...)

```typescript
query(options: PermissionsOptions) => Promise<PermissionResult>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#permissionsoptions">PermissionsOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#permissionresult">PermissionResult</a>&gt;</code>

--------------------


### Interfaces


#### PermissionResult

| Prop        | Type                                           |
| ----------- | ---------------------------------------------- |
| **`state`** | <code>"denied" \| "granted" \| "prompt"</code> |


#### PermissionsOptions

| Prop       | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`name`** | <code><a href="#permissiontype">PermissionType</a></code> |


### Enums


#### PermissionType

| Members              | Value                          |
| -------------------- | ------------------------------ |
| **`Camera`**         | <code>"camera"</code>          |
| **`Photos`**         | <code>"photos"</code>          |
| **`Geolocation`**    | <code>"geolocation"</code>     |
| **`Notifications`**  | <code>"notifications"</code>   |
| **`ClipboardRead`**  | <code>"clipboard-read"</code>  |
| **`ClipboardWrite`** | <code>"clipboard-write"</code> |
| **`Microphone`**     | <code>"microphone"</code>      |

</docgen-api>
