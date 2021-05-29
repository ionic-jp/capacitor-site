---
title: プラグイン呼び出しの永続化
description: プラグインの呼び出しをCapacitorに保存する方法
---

# プラグイン呼び出しの保存

ほとんどの場合、プラグインメソッドはタスクを実行するために呼び出され、すぐに終了することができます。しかし、プラグインの呼び出しを保存しておき、後でアクセスできるようにしておく必要がある場合もあるでしょう。

## 概要

プラグインコール（iOS では`CAPPluginCall`、Android では`PluginCall`）を、プラグイン内のメソッドの外に保存しておく必要があるのは、以下の 2 つの理由からです。

1. ネットワークリクエストのような非同期アクションを実行する場合。
2. ライブジオロケーションデータのストリーミングなど、JavaScript 環境に繰り返し更新を提供するため。

この 2 つの理由は重なることもありますが、重要な違いがあります。具体的には、コールが複数回データを返す必要があるかどうかです。Capacitor ブリッジは、JavaScript からネイティブへの各呼び出しを記録し、プラグインが結果を返す際に正しいコードと照合できるようにしています。デフォルトの動作では、`resolve()`または`reject()`が 1 回呼び出された後、この記録を消去します。しかし、あなたのメソッドが複数回 `resolve()` を呼び出すコールバックであれば、余分なステップが必要になります。コールバックをどのように宣言するかについての詳しい情報は [ここにあります](/docs/plugins/method-types)。

---

### 一度だけ完了する call の保存

呼び出しを将来一度だけ完了させるために保存する必要がある場合、2 つの選択肢があります。1 つは、単純にインスタンス変数にローカルに保存する方法です。もう 1 つは、ブリッジのメソッド群を使って保存し、後で `callbackId` を使って取得する方法です。`resolve()`または`reject()`を呼び出した後、コールオブジェクトはもはや関連性がないので処分することができます（`saveCall()`を使用した場合は`releaseCall()`を呼び出すことを忘れないでください）。

**iOS**

```swift
func saveCall(_ call: CAPPluginCall)
func savedCall(withID: String) -> CAPPluginCall?
func releaseCall(_ call: CAPPluginCall)
func releaseCall(withID: String)
```

**Android**

```java
void saveCall(PluginCall call)
PluginCall getSavedCall(String callbackId)
void releaseCall(PluginCall call)
void releaseCall(String callbackId)
```

---

### 呼び出しを保存して複数回完了させる

1 つは、ネイティブのコールオブジェクト自体を保存すること（上記）、もう 1 つは、ブリッジにブックキーピングを保存するように指示し、`resolve()`や`reject()`を繰り返し起動できるようにすることです。

コールをこのようにマークするには、その `keepAlive` プロパティを設定します (これはバージョン 3 以前では `isSaved` と呼ばれていましたが、動作を明確にするために名前が変更されました)。

**iOS**

```swift
call.keepAlive = true
```

**Android**

```java
call.setKeepAlive(true);
```

`keepAlive`が true であれば、`resolve()`を必要なだけ呼び出すことができ、期待通りの結果が返ってきます。また、このフラグを true に設定すると、メソッドが戻ってきた後にブリッジが自動的に`saveCall()`を呼び出すことになります。
