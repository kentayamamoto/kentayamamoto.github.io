---
layout: post
title: nodejsでslackに投稿する
---

Incoming WebhookのURLをslackのIntegration画面から取得しておく。

nodejsでのhttp(s)リクエストをするには、requestモジュールというのが便利らしいので npm install

```javascript:postslack.js
var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/XXXXX',
  headers: { 'Content-Type': 'application/json' },
  json: {
    username: 'XXサーバー',
    icon_emoji: ':ghost:',
    text: process.argv[2]
  }
};

request.post(options, function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log(body);
  } else {
    console.log('error: '+ response.statusCode + '\n' + response.body);
  }
});
```

`process.argv[2]` のところで、コマンド実行時の第一引数を取得している。
