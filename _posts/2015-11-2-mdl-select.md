---
layout: post
title: MDL(Material Design Lite)でSelectボックスを実装する
---

Googleのマテリアルデザイン用CSSコンポーネントが便利なので使っているんですけど、

[Componentsのところ](http://www.getmdl.io/components/index.html#toggles-section) 等見ていても、select boxがないんですよね。  
radioボタンやチェックボックスのみ。

で、どうしたらいいのかとネットの海をさまよっていると、Google公式のガイドラインでそれっぽいスクショが。

[Material Design - Menus](https://www.google.com/design/spec/components/menus.html#)

どうも、テキストinputとMenuを組み合わせると近しいものができそうです。

で、書いてみたのが[こちら](http://kentayamamoto.github.io/pages/mdl-select/index.html)

まずHTML。 `.mdl-design` というクラスを作ってみる。 `mdl-menu` とfor要素によって、「クリックするとmenuを開く」挙動になる。

```html
<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-select">
  <input class="mdl-textfield__input" type="text" id="select-section" />
  <label class="mdl-textfield__label" for="sample3">セレクトしよう</label>
  <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" for="select-section">
	  <li class="mdl-menu__item">選択肢1</li>
	  <li class="mdl-menu__item">選択肢2</li>
	  <li class="mdl-menu__item">選択肢3</li>
	  <li class="mdl-menu__item">選択肢4</li>
	</ul>
</div>
```

で、JS。menuの要素をクリックしたらinputエリアに反映する。

```javascript
$(function() {
	$('div.mdl-select > ul > li').click(function(e) {
		var text = $(e.target).text();
		$(e.target).parents('.mdl-select').addClass('is-dirty').children('input').val(text);
	});
});
```

 `mdl-textfield--floating-label` を使わないのであれば、 `.addClass('is-dirty')` の部分は不要である。  
floating-labelを使うと、jsでtext編集をしたときにラベルの位置が変化しなかったため、直接Classを付与することで表示崩れを回避している。
