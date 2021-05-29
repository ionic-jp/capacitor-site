---
title: Capacitor and Angular
description: Using Angular with Capacitor
---

# Angular で Capacitor を使う

## NgZone

Capacitor プラグインのイベントリスナーは、Angular の `NgZone` 実行コンテキストの外で実行されます。ハンドラロジックを `NgZone.run` ブロック内に格納し、Angular の変更検出が確実にトリガーされるようにします:

```typescript
constructor(private ngZone: NgZone) { }

async ngOnInit() {
  Network.addListener("networkStatusChange", (status) => {
    this.ngZone.run(() => {
      // This code will run in Angular's execution context
      this.networkStatus = status.connected ? "Online" : "Offline";
    });
  });
}
```
