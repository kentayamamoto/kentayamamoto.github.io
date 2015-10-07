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
ls *.tsv | xargs addcolumns.sh
```

みたいなことをする。

CSVでも同じことをすればよい。
