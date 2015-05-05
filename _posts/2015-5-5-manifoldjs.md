---
layout: post
title: manifoldjsで爆速アプリ開発を試す
---

[［速報］マイクロソフト、HTML5/JavaScriptアプリをiOS／Android／Windows対応に一括変換する「ManifoldJS」をオープンソースで発表。Build 2015](http://www.publickey1.jp/blog/15/manifoldjs_build_2015.html)

マジかよ！

やってみよう。

```sh
$ npm install manifoldjs -g
```

で、

```sh
$ manifoldjs http://kentayamamoto.github.io -d /XXX/test -l info -p ios -b
```

で、

```sh
$ pwd
/XXX/test/KentayamamotoGithubIo/ios
$ ls
Apple-next-steps.md		KentayamamotoGithubIo		build				platform_www
CordovaLib			KentayamamotoGithubIo.xcodeproj	cordova				www
```

おおお。
KentayamamotoGithubIo.xcodeproj をXCode で開いてデバッグしてみよう。

![デバッグしてみた]({{ site.baseurl }}/images/2015-05-05_ss1.png)

超簡単すぎて吹く。
カメラ機能とかもろもろのインタラクションをどこまで実装できるんだろう。
まだまだポテンシャル図りきれませんが、注目です。
