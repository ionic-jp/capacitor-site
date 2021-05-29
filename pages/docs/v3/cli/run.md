---
title: CLI Command - cap run
description: Capacitor CLI - cap run
---

# Capacitor CLI - cap run

このコマンドは、まず[`copy`](/docs/cli/copy)を実行し、その後、ネイティブアプリをビルドして、選択したターゲットデバイスにデプロイします。

```bash
npx cap run [options] <platform>
```

<strong>Inputs:</strong>

- `platform` (required): `android`, `ios`

<strong>Options:</strong>

- `--list`: Print a list of target devices available to the given platform
- `--target <id>`: Run on a specific target device
