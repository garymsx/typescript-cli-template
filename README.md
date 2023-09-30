# TypeScript コンソールアプリケーションテンプレート

## 説明

VSCode上でTypeScriptをTypeScriptのままデバッグできるよう設定済みのコンソールアプリケーションのテンプレートです。  
(適当に構築するとデバッグでブレークポイントがずれていたり・・・)

## デバッグの仕方
1. VSCodeで開く。
2. ターミナルで`npm install`する。
3. F5で実行
4. デバッグコンソールに出力される。

## package.jsonに組み込んであるもの

```
npm install -D typescript ts-node @types/node
npm install -D jest @types/jest ts-jest
npm install dotenv
```

- TypeScript関係(ts-node)
  TypeScriptコンパイラ、定義情報など

- jest
  単体テストフレームワーク

- dotenv
  環境変数を扱うライブラリ

## npm script

### dev  
nodeから直接実行します。

```
$ npm run dev <引数>
```

### build
ビルドを行い、グローバルなコマンドとしてインストールします。  
これにより、シェルから<アプリ名>だけで実行できるようになります。

```shell
$ npm run build
# 以後アプリ名で起動可能
```

アプリ名はpackage.jsonで指定します。
```json
  "bin": {
    "tstemplate": "./out/index.js"
  },
```

### uninstall

```shell
$ npm run uninstall
# または npm uninstall -g
```

### test
jestで単体テストを実行します。

```shell
$ npm run test
```

### その他
- tsconfig.jsonは日本語化してある。

## TODO
- [ ] ESModule化したかったけど、jestが対応していないので保留
- [ ] 説明が足りない

