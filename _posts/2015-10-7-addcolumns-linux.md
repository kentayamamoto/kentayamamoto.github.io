---
layout: post
title: コマンドラインでテキストファイルに表頭を追加する
---

```
aaaa  123 456 2015-10-01 00:00:00
aabb  234 567 2015-10-01 01:00:00
```

というtsvデータがあったとして、

```
user  campaign_id creative_id datetime
aaaa  123 456 2015-10-01 00:00:00
aabb  234 567 2015-10-01 01:00:00
```

にしたいということが往々にしてある。

こういうのは往々にして複数ファイルに指定してあげたいので、シェルを書く。

```
#!/bin/sh
cat $1 | sed "1i\
user\tcampaign_id\tcreative_id\tdatetime" > $1
```

のような`addcolumns.sh`を作って、

```
ls *.tsv | xargs -n1 sh addcolumns.sh
```

みたいなことをする。

CSVでも同じことをすればよい。

※2015/10/08追記: xargsには[-n1オプション](http://blog.goo.ne.jp/miya-shu/e/00d8d7c83251a5ca46eacc9418519386)をつけないと、最初のファイルしか更新されないので注意！
