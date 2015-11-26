---
layout: post
title: Googleの検索結果にipアドレスがインデックスされてしまった場合の対処(nginx)
---

あるサイトにあとからドメインを乗っけた際に、  
IPアドレス直撃のほうのURLがGoogle検索結果に出てきてしまうことがあります。

これは最高にダサいしもったいないので、下記を参考になんとかします。

[IPアドレスでインデックスされたURLの削除について](https://productforums.google.com/forum/#!topic/webmaster-ja/gx6cPDvYVvc)

購入したドメインに301リダイレクトさせると解決するようです。

私の場合はnginxを使っていたので[こちら](http://server-setting.info/centos/apache-nginx-4-setting-redirect.html)を参考に、
nginx.confを書き換えて作業完了。

検索結果に反映されるのはもう少し待つ必要がありそうですが、とりあえずは大丈夫だろう。
