---
title: Capacitorプラグインの構築
description: Capacitorプラグインの構築 - Plugin APIを使う
contributors:
  - eric-horodyski
---

# プラグイン API の使用

画面の向きを変える機能を実装する前に、プラグインの API を実行するユーザーインターフェイスを構築することは理にかなっています。基本的には、プラットフォーム間の機能パリティを迅速にテストするためのテストハーネスを構築したいと考えます。

このチュートリアルの焦点は、Capacitor プラグインの構築方法であり、Ionic Framework アプリケーションの構築方法ではないので、必要なファイルの完成版を取得し、その内容をプロジェクトにコピー＆ペーストするだけです。

- <a href="https://github.com/ionic-enterprise/capacitor-plugin-tutorial/blob/main/src/pages/Home.tsx" target="_blank">src/pages/Home.tsx</a>
- <a href="https://github.com/ionic-enterprise/capacitor-plugin-tutorial/blob/main/src/pages/Home.css" target="_blank">src/pages/Home.css</a>

コピーした後、`ionic serve`コマンドを使用して Capacitor アプリを提供します。ブラウザのデベロッパーツールを開くと、次のようなエラーが表示されるはずです。

```bash
Uncaught (in promise) ScreenOrientation does not have web implementation.
```

そのエラーはチェックアウトされます。私たちはまだどのプラットフォームにもコードを実装していないのです。ブラウザを開いたままにしておいてください。まずはウェブプラットフォームを実装します。その前に、`Home.tsx`から関連するコードを確認しましょう。

## プラグインはどのように使われているのですか？

**画面の向きを追跡する:**

```typescript
const [orientation, setOrientation] = useState<string>('');
```

状態変数 `orientation` は、画面の向きの値を保持するために使用されます。これは `setOrientation` を呼び出すことで更新することができます。コードの実行を開始した時点では現在のスクリーンの向きがわからないので、デフォルトでは空の文字列が格納されます。文字列型を使用することで、UI に表示するデザインを簡単に伝えることができます。

イベントリスナーは `screenOrientationChange` が発生したときに `orientation` を更新するように設定されています。

```typescript
ScreenOrientation.addListener('screenOrientationChange', res =>
  setOrientation(res.type),
);
```

現在の画面の向きは UI のロード時に取得され、作成されたリスナー（上記のようなもの）は UI が DOM から削除されたときに削除されます。

```typescript
useEffect(() => {
  ScreenOrientation.orientation().then(res => setOrientation(res.type));

  return () => {
    ScreenOrientation.removeAllListeners();
  };
}, []);
```

`useEffect`と return 関数は React 特有の構文ルールなので深読みはしないでください。

**正しいデザインを表示する:**

`OrientationType` には、縦向きの場合、 `portrait-primary` と `portrait-secondary` の 2 つの値があります。横向きの場合も同様です。私たちの UI は、それらの違いを気にせず、横向きか縦向きかだけを気にしています。

```jsx
{
  orientation.includes('portrait') &&
    {
      /* Provide a button that will rotate and lock the screen orientation to landscape mode. */
    };
}
{
  orientation.includes('landscape') &&
    {
      /* Let the user "sign" and unlock screen orientation through a confirmation button. */
    };
}
```

**画面の向きのロックとロック解除:**

ポートレートデザインには、画面の向きを変更し、押すとロックされるボタンが含まれています。

```typescript
onClick={() => ScreenOrientation.lock({ orientation: "landscape-primary" })}
```

逆に、横向きのデザインには、押すと画面の向きが解除されるボタンがあります。

```typescript
onClick={() => ScreenOrientation.unlock()}
```

`Home.tsx` と `Home.css` にある残りのコードは、純粋に外観上のもので、掘り下げる必要はありません。npm run build` を実行し、iOS や Android でアプリを実行したときに新しい UI が使用されるようにします。

これで、プラグインの API を実行するユーザーインターフェースができました。次のステップでは、まず Web をターゲットにします。Web の実装です。
