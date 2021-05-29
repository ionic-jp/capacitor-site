---
title: Browser
description: Browser API
contributors:
  - mlynch
  - jcesarmobile
canonicalUrl: https://capacitorjs.com/docs/apis/browser
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Browser

<docgen-index>

- [`open(...)`](#open)
- [`prefetch(...)`](#prefetch)
- [`close()`](#close)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)

</docgen-index>

Browser API を使用すると、外部の Web コンテンツを表示したり、認証フローを処理したりするために、
アプリケーション内のブラウザセッションを簡単に開くことができます。

iOS ではこれは `SFSafariViewController` を使用し、主要な oAuth サービスのアプリ内ブラウザ要件に準拠しています。

```typescript
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

await Browser.open({ url: 'http://capacitorjs.jp/' });
```

## API

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: BrowserOpenOptions) => Promise<void>
```

Open a page with the given URL

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#browseropenoptions">BrowserOpenOptions</a></code> |

---

### prefetch(...)

```typescript
prefetch(options: BrowserPrefetchOptions) => Promise<void>
```

Hint to the browser that the given URLs will be accessed
to improve initial loading times.

Only functional on Android, is a no-op on iOS

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#browserprefetchoptions">BrowserPrefetchOptions</a></code> |

---

### close()

```typescript
close() => Promise<void>
```

Close an open browser. Only works on iOS and Web environment, otherwise is a no-op

---

### addListener(...)

```typescript
addListener(eventName: 'browserFinished', listenerFunc: (info: any) => void) => PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>"browserFinished"</code>      |
| **`listenerFunc`** | <code>(info: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener(...)

```typescript
addListener(eventName: 'browserPageLoaded', listenerFunc: (info: any) => void) => PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>"browserPageLoaded"</code>    |
| **`listenerFunc`** | <code>(info: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => void
```

Remove all native listeners for this plugin

---

### Interfaces

#### BrowserOpenOptions

| Prop                    | Type                                   | Description                                                                                                    |
| ----------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **`url`**               | <code>string</code>                    | The URL to open the browser to                                                                                 |
| **`windowName`**        | <code>string</code>                    | Web only: Optional target for browser open. Follows the `target` property for window.open. Defaults to \_blank |
| **`toolbarColor`**      | <code>string</code>                    | A hex color to set the toolbar color to.                                                                       |
| **`presentationStyle`** | <code>"fullscreen" \| "popover"</code> | iOS only: The presentation style of the browser. Defaults to fullscreen.                                       |

#### BrowserPrefetchOptions

| Prop       | Type                  |
| ---------- | --------------------- |
| **`urls`** | <code>string[]</code> |

#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |

</docgen-api>