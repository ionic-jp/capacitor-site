---
title: CLI Command - cap copy
description: Capacitor CLI command - cap copy
contributors:
  - dotNetkow
---

# Capacitor CLI - cap copy

WebアプリのビルドファイルとCapacitorの設定ファイルをNativeのプラットフォームプロジェクトにコピーします。Webアプリケーションに変更を加えたり、 `capacitor.config.json` を変更したりするたびに、これを実行します。

```bash
npx cap copy [platform]
```

<strong>Inputs:</strong>
- `platform` (optional): `android`, `ios`

<strong>Example output:</strong>
```
√ Copying web assets from www to android\app\src\main\assets\public in 2.64s
√ Copying web assets from www to ios/App/public in 450ms
√ Copying native bridge in 7.32ms
√ Copying capacitor.config.json in 3.22ms
√ copy in 2.74s
√ copy in 1.10ms
```
