(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{Ib5e:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank">en</a></p>\n<h1 id="objectdefineproperties">Object.defineProperties()</h1>\n<p>Object.defineProperties() \u65b9\u6cd5\u76f4\u63a5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u65b0\u7684\u5c5e\u6027\u6216\u4fee\u6539\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u8be5\u5bf9\u8c61\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Properties(<span class="hljs-params">obj</span>, <span class="hljs-params">props</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u5c06\u8981\u88ab\u6dfb\u52a0\u5c5e\u6027\u6216\u4fee\u6539\u5c5e\u6027\u7684\u5bf9\u8c61</li>\n<li><code>props</code> \u8be5\u5bf9\u8c61\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u952e\u503c\u5bf9\u5b9a\u4e49\u4e86\u5c06\u8981\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u5177\u4f53\u914d\u7f6e</li>\n</ul>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-string">var</span> <span class="hljs-string">obj</span> <span class="hljs-string">=</span> <span class="hljs-string">{};</span>\n<span class="hljs-string">Object.defineProperties(obj,</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">  "property1":</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">    value:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span>\n<span class="hljs-attr">    writable:</span> <span class="hljs-literal">true</span>\n  <span class="hljs-string">},</span>\n<span class="hljs-attr">  "property2":</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">    value:</span> <span class="hljs-string">"Hello"</span><span class="hljs-string">,</span>\n<span class="hljs-attr">    writable:</span> <span class="hljs-literal">false</span>\n  <span class="hljs-string">}</span>\n  <span class="hljs-string">//</span> <span class="hljs-string">\u7b49\u7b49.</span>\n<span class="hljs-string">});</span>\n<span class="hljs-string">alert(obj.property2)</span> <span class="hljs-string">//\u5f39\u51fa"Hello"</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);