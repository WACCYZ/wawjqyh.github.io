(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{RpPM:function(n,a){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now" target="_blank">en</a></p>\n<h1 id="datenow">Date.now()</h1>\n<p>Date.now() \u65b9\u6cd5\u8fd4\u56de\u81ea1970\u5e741\u67081\u65e5 00:00:00 UTC\u5230\u5f53\u524d\u65f6\u95f4\u7684\u6beb\u79d2\u6570\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> timeInMs = <span class="hljs-built_in">Date</span>.now();</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<p>\u65e0</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>now()\u65b9\u6cd5\u8fd4\u56de\u81ea1970\u5e741\u67081\u65e5 00:00:00 UTC\u5230\u5f53\u524d\u65f6\u95f4\u7684\u6beb\u79d2\u6570\uff0c\u7c7b\u578b\u4e3aNumber\u3002</p>\n<p>\u56e0\u4e3a now() \u662fDate\u7684\u4e00\u4e2a\u9759\u6001\u51fd\u6570\uff0c\u6240\u4ee5\u5fc5\u987b\u4ee5 Date.now() \u7684\u5f62\u5f0f\u6765\u4f7f\u7528\u3002</p>\n<h2 id="\u517c\u5bb9\u65e7\u73af\u5883">\u517c\u5bb9\u65e7\u73af\u5883</h2>\n<p>\u8be5\u65b9\u6cd5\u5728 ECMA-262 \u7b2c\u4e94\u7248\u4e2d\u88ab\u6807\u51c6\u5316\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u517c\u5bb9\u90a3\u4e9b\u4e0d\u652f\u6301\u8be5\u65b9\u6cd5\u7684\u5f15\u64ce\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">if</span> (!<span class="hljs-built_in">Date</span>.now) {\n  <span class="hljs-built_in">Date</span>.now = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">now</span>(<span class="hljs-params"></span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime();\n  };\n}</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);