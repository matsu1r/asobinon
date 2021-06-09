#!/bin/bash

# エディターのディレクトリ(edit)が変換されたかをチェックする

if ! git diff HEAD^ HEAD --exit-code -- ./; then
  # エディターに変更があったのでビルドする
  echo "✅ - Editor changed: Build can proceed"
  exit 0;

else
  # エディタ自体に変更がなかったのでビルドキャンセル
  echo "🛑 - Editor not changed: Build cancelled"
  exit 1;
fi