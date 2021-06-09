#!/bin/bash

if ! git diff HEAD^ HEAD --quiet ./ ; then
  # エディターに変更があったのでビルドする
  echo "✅ - Editor changed: Build can proceed"
  exit 1;

else
  # エディタ自体に変更がなかったのでビルドキャンセル
  echo "🛑 - Editor not changed: Build cancelled"
  exit 0;
fi