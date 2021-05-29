---
title: Capacitor Data Types
description: Data types in Capacitor
---

# Capacitor Data Types

Capacitor の Web ランタイムとネイティブ環境の間を行き来するデータは、それぞれの言語でネイティブに保存できるようにシリアル化・デシリアル化する必要があります。サポートされているデータタイプは、数値、文字列、ブーリアン、配列、オブジェクト（または Dictionaries やキーバリューストア）など、JSON で表現可能なものです。

## iOS

iOS では Swift が推奨言語ですが、システムフレームワークが構築されている Objective-C と相互運用しているため、プラットフォームは 3 つの言語の交差をサポートしています。ほとんどのデータ型は期待通りに翻訳されますが、特別な注意が必要なケースもあります。

---

### Null Values

Objective-C は、配列、Dictionaries、またはセットなどのコレクションに null 値を格納することをサポートしていません。代わりに、特別なプレースホルダーオブジェクトである [`NSNull`](https://developer.apple.com/documentation/foundation/nsnull?language=objc) を使用して、NULL 値を表現します。対照的に、Swift は [Optionals](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html) を使用して、NULL かもしれない値を記述します。Swift は `NSNull` の値を操作できますが、Objective-C は Optionals を扱うことができません (ただし、一部のコンテキストでは、ランタイムが Optionals を基礎となる値または `NSNull` に自動的にマッピングします)。これらの `NSNull` オブジェクトは、使用している言語に関係なく出現します。

例えば、次のようなオブジェクトが Capacitor のプラグイン呼び出しに渡されるとします:

```typescript
{ 'foo': null, 'bar': [1, 2, null, 4]}
```

#### Dictionaries

`CAPPluginCall` はこのデータを `options` プロパティとして格納していますが、これを操作する便利なアクセサがいくつかあります。これらのアクセサは、値を期待される型にキャストするので、`NSNull` の値はフィルタリングされます。

```swift
if let value = call.getString("foo") {
    // GOOD: `value` is nil, so this block won't run
}
```

しかし、storage プロパティに直接アクセスすると、`NSNull`オブジェクトが返されることがあります。

```swift
if call.options["foo"] != nil {
    // BAD: the key returned a truthy `NSNull` object, so this block will run
}
```

> キーの存在に頼って意味を伝えることはお勧めできません。常に対応する値をタイプチェックして評価してください。

#### 配列

配列にアクセスするには、通常、コレクション全体をタイプする必要があるため、配列が単一の型を含んでいるのか、異種の型を含んでいるのかを考慮することが重要です。

```swift
if let values = call.getArray("bar") {
    // NEUTRAL: the array is all valid objects, so this block will run, but each value will need to be typed individually
}
if let values = call.getArray("bar", Int?) {
    // BAD: the array is a mix of `Int` and `NSNull` and can't be cast to `Int?`, so this block won't run
}
```

この動作を助けるために、Capacitor には`NSNull`値を持つ配列をオプションの配列にマッピングすることができる便利な拡張機能があります。これは、環境間の橋渡しが可能なすべての有効な型を表す `JSValue` プロトコルで動作しますが、特定のサブタイプにキャストすることができます。

```swift
if let values = call.getArray("bar").capacitor.replacingNullValues() as? [Int?] {
    // GOOD: `values` is now cast to `Int?` with `nil` at index 2
}
```

---

### Dates

ほとんどの場面で、日付は期待通りに動作するはずです。JavaScript から送信される`Date`オブジェクトや、プラグインから返される`Date`や`NSDate`オブジェクトは、 [ISO 8601 string](https://www.iso.org/iso-8601-date-and-time-format.html) にシリアライズされます。

ただし、必要に応じてこの動作の一部を変更することができます。Web ランタイムから iOS のネイティブコードに移動するデータは、逆方向のデータとは異なるメカニズムを使用します。 `WKWebView` は JavaScript の `Date` オブジェクトをネイティブの `Date` オブジェクトに自動的に変換します。他のプラットフォームとの整合性や開発者の期待に応えるために、Capacitor は 3.0 からこれらのオブジェクトをシリアライズしてからプラグインに渡します。この動作を無効にしたい場合は、プラグインに `shouldStringifyDatesInCalls` プロパティを設定してください。

```swift
override func load() {
    shouldStringifyDatesInCalls = false
}
```

`CAPPluginCall` の便利なアクセサ `getDate` は、両方のデータ型を扱い、`Date` オブジェクトを返します。

ネイティブコードからウェブビューに移行するデータは、JSON としてシリアライズされます。JSON は公式には日付を定義していないので、`Date` オブジェクトをプラグインの結果に含めると、3.0 以前では例外が発生していました。しかし、Capacitor は自動的に日付オブジェクトを文字列にシリアライズするようになりました。プラグインで日付を別の方法で処理する必要がある場合は、まずサポートされている他の JSON タイプにシリアライズしてください。
