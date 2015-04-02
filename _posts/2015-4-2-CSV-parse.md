---
layout: post
title: 【Javascript】意外と厄介なCSVをパースする
---

CSVって、僕らにとっては一見テキストファイルに毛の生えたような単純な形式だし、
営業部隊のみんなにとってもエクセルでパッと開けるし、便利だなーとか思っちゃうんですけど。

プログラムで読もうとすると、クォートがあったり改行コードが違ったり、
意外と一筋縄ではいかなかったりする。

[CSVファイルフォーマットの解説(Codezine)](http://codezine.jp/article/detail/2364)

実際扱ってみたとき、舐めてかかったら面倒だったので
結局こちらをまるっと拝借しました。

[Ask Ben: Parsing CSV Strings With Javascript Exec() Regular Expression Command](http://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm)

エクセルで保存したCSVの謎仕様とか、ほんとやめてほしいんですけど、
そのへん全部吸収してくれます。ありがとうBenさん。

と思ってTweetしたら本人からリプが来たので、Thank you言えました。arigato。

以上。三度の飯よりparseが好きな人はご参考に。
