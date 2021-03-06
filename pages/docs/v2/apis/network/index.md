---
title: Network
description: Network API
contributors:
  - mlynch
  - jcesarmobile
canonicalUrl: https://capacitorjs.com/docs/apis/network
---

<plugin-platforms platforms="pwa,ios,android"></plugin-platforms>

# Network

Network API は、ネットワークの現在の状態を照会するとともに、ネットワークステータスの変化を監視するためのイベントを提供します。

<docgen-index>

- [`getStatus()`](#getstatus)
- [`addListener(...)`](#addlistener)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)

</docgen-index>

## Example

```typescript
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

let handler = Network.addListener('networkStatusChange', (status) => {
  console.log("Network status changed", status);
});
// To stop listening:
// handler.remove();

// Get the current network status
let status = await Network.getStatus();

// Example output:
{
  "connected": true,
  "connectionType": "wifi"
}
```

## Android Note

The Network API requires the following permission be added to your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

This permission allows the app to access information about the current network, such as whether it is connected to wifi or cellular.

## API

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getStatus()

```typescript
getStatus() => Promise<NetworkStatus>
```

Query the current network status

**Returns:** <code>Promise&lt;<a href="#networkstatus">NetworkStatus</a>&gt;</code>

---

### addListener(...)

```typescript
addListener(eventName: 'networkStatusChange', listenerFunc: (status: NetworkStatus) => void) => PluginListenerHandle
```

Listen for network status change events

| Param              | Type                                                                         |
| ------------------ | ---------------------------------------------------------------------------- |
| **`eventName`**    | <code>"networkStatusChange"</code>                                           |
| **`listenerFunc`** | <code>(status: <a href="#networkstatus">NetworkStatus</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => void
```

Remove all native listeners for this plugin

---

### Interfaces

#### NetworkStatus

| Prop                 | Type                                                     |
| -------------------- | -------------------------------------------------------- |
| **`connected`**      | <code>boolean</code>                                     |
| **`connectionType`** | <code>"none" \| "unknown" \| "wifi" \| "cellular"</code> |

#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |

</docgen-api>
