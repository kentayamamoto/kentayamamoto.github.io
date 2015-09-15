---
layout: post
title: video.jsを使ったインバナー動画広告のHTMLタグを作ってみた
---

会社のブログに書いたのでこちらにも。

[インバナー動画広告のHTMLタグを作ってみました。](http://yebisupress.dac.co.jp/2015/09/08/video-js%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%A4%E3%83%B3%E3%83%90%E3%83%8A%E3%83%BC%E5%8B%95%E7%94%BB%E5%BA%83%E5%91%8A%E3%81%AEhtml%E3%82%BF%E3%82%B0%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6/)

[inbanner-ad-generator](http://kentayamamoto.github.io/pages/inbanner-ad-generator/)

使い方

1. 事前に .mp4, .webm, .flv の動画素材を用意し、CDNに配置する。

2. トラッキングが必要であれば、URLを生成しておく。

3. この画面でタグ生成をする。

4. DSP等のプラットフォームにHTMLタグ入稿をする。

ブログup後、25%/50%/75%視聴のトラッキングURLも追加しました。

いわゆるVAST規格の動画広告設定でよく使われるプロパティですね。

IE8以下の対応ができていないので、よくよく考えると片手落ち感は否めないが。