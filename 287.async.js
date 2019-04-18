(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[287],{LQWp:function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank">en</a></p>\n<h1 id="undefined">undefined</h1>\n<p>\u5168\u5c40\u5c5e\u6027undefined\u8868\u793a\u539f\u59cb\u503cundefined\u3002\u5b83\u662f\u4e00\u4e2aJavaScript\u7684 \u539f\u59cb\u6570\u636e\u7c7b\u578b</p>\n<table>\n<thead>\n<tr>\n<th align="left">\u5c5e\u6027</th>\n<th align="left"></th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">writable</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">enumerable</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">configurable</td>\n<td align="left">false</td>\n</tr>\n</tbody></table>\n<h2 id="1\u3001\u8bed\u6cd5">1\u3001\u8bed\u6cd5</h2>\n<p><code>undefined</code></p>\n<h2 id="2\u3001\u63cf\u8ff0">2\u3001\u63cf\u8ff0</h2>\n<p>undefined\u662f\u5168\u5c40\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u662f\u5168\u5c40\u4f5c\u7528\u57df\u7684\u4e00\u4e2a\u53d8\u91cf\u3002undefined\u7684\u6700\u521d\u503c\u5c31\u662f\u539f\u59cb\u6570\u636e\u7c7b\u578bundefined\u3002</p>\n<p>\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\uff08<code>JavaScript 1.8.5/Firefox 4+</code>\uff09\uff0c\u81ea<code>ECMAscript5</code>\u6807\u51c6\u4ee5\u6765undefined\u662f\u4e00\u4e2a\u4e0d\u80fd\u88ab\u914d\u7f6e\uff08<code>non-configurable</code>\uff09\uff0c\n\u4e0d\u80fd\u88ab\u91cd\u5199\uff08non-writable\uff09\u7684\u5c5e\u6027\u3002\u5373\u4fbf\u4e8b\u5b9e\u5e76\u975e\u5982\u6b64\uff0c\u4e5f\u8981\u907f\u514d\u53bb\u91cd\u5199\u5b83\u3002</p>\n<p>\u4e00\u4e2a\u6ca1\u6709\u88ab\u8d4b\u503c\u7684\u53d8\u91cf\u662fundefined\u7c7b\u578b\u3002\u4e00\u4e2a\u65b9\u6cd5\u6216\u8005\u662f\u8bed\u53e5\u5982\u679c\u5728\u6267\u884c\u671f\u95f4\u6ca1\u6709\u53d8\u91cf\u88ab\u8d4b\u503c\u4e5f\u4f1a\u8fd4\u56deundefined\uff08\u5bf9\u4e8e\u8fd9\u53e5\u8bdd\u6301\u7591\u60d1\u6001\u5ea6\uff0c\u8bf7\u67e5\u770b\u82f1\u6587\u539f\u6587\u6765\u7406\u89e3\uff09\u3002\n\u4e00\u4e2a\u51fd\u6570\u5982\u679c\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2aundefined\u503c\u3002</p>\n<p><code>\u4f46\u662f\u5b83\u53ef\u80fd\u88ab\u4f7f\u7528\u4f5c\u4e3a\u4e00\u4e2a\u6807\u8bc6\u7b26\uff08\u53d8\u91cf\u540d\uff09\u5728\u4efb\u4f55\u4f5c\u7528\u57df\u4e2d\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d(\u56e0\u4e3aundefined\u4e0d\u662f\u4e00\u4e2a\u4fdd\u7559\u5b57))\uff0c\u8fd9\u6837\u505a\u662f\u4e00\u4e2a\u975e\u5e38\u574f\u7684\u4e3b\u610f\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f1a\u4f7f\u4f60\u7684\u4ee3\u7801\u96be\u4ee5\u53bb\u7ef4\u62a4\u548c\u6392\u9519\u3002</code></p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4e0d\u8981\u8fd9\u6837\u505a\uff01</span>\n\n<span class="hljs-comment">// \u6253\u5370 \'foo string\' PS\uff1a\u8bf4\u660eundefined\u7684\u503c\u548c\u7c7b\u578b\u90fd\u5df2\u7ecf\u6539\u53d8</span>\n(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n<span class="hljs-keyword">var</span> <span class="hljs-literal">undefined</span> = <span class="hljs-string">\'foo\'</span>;\n<span class="hljs-built_in">console</span>.log(<span class="hljs-literal">undefined</span>, <span class="hljs-keyword">typeof</span> <span class="hljs-literal">undefined</span>)\n})()\n\n<span class="hljs-comment">// \u6253\u5370 \'foo string\' PS\uff1a\u8bf4\u660eundefined\u7684\u503c\u548c\u7c7b\u578b\u90fd\u5df2\u7ecf\u6539\u53d8</span>\n(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">undefined</span>) </span>{\n<span class="hljs-built_in">console</span>.log(<span class="hljs-literal">undefined</span>, <span class="hljs-keyword">typeof</span> <span class="hljs-literal">undefined</span>)\n})(<span class="hljs-string">\'foo\'</span>)</code></pre>\n<h2 id="3\u3001\u793a\u4f8b">3\u3001\u793a\u4f8b</h2>\n<h3 id="1-\u4e25\u683c\u76f8\u7b49\u548cundefined">(1) \u4e25\u683c\u76f8\u7b49\u548cundefined</h3>\n<p>\u4f60\u53ef\u4ee5\u4f7f\u7528undefined\u548c\u4e25\u683c\u76f8\u7b49\u6216\u4e0d\u76f8\u7b49\u64cd\u4f5c\u7b26\u6765\u51b3\u5b9a\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u62e5\u6709\u503c\u3002\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u53d8\u91cfx\u662f\u672a\u5b9a\u4e49\u7684\uff0cif \u8bed\u53e5\u7684\u6c42\u503c\u7ed3\u679c\u5c06\u662ftrue</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span>;\n\n<span class="hljs-keywords">if</span> (<span class="hljs-symbol">x</span> === <span class="hljs-literal">undefined</span>) {\n<span class="hljs-comment">// \u6267\u884c\u8fd9\u4e9b\u8bed\u53e5</span>\n} <span class="hljs-keywords">else</span> {\n<span class="hljs-comment">// \u8fd9\u4e9b\u8bed\u53e5\u4e0d\u4f1a\u88ab\u6267\u884c</span>\n}</code></pre>\n<p><code>\u6ce8\u610f\uff1a\u8fd9\u91cc\u662f\u5fc5\u987b\u4f7f\u7528\u4e25\u683c\u76f8\u7b49\u64cd\u4f5c\u7b26\uff08===\uff09\u800c\u4e0d\u662f\u6807\u51c6\u76f8\u7b49\u64cd\u4f5c\u7b26\uff08==\uff09\uff0c\u56e0\u4e3a x == undefined \u4f1a\u68c0\u67e5x\u662f\u4e0d\u662fnull\uff0c\u4f46\u662f\u4e25\u683c\u76f8\u7b49\u4e0d\u4f1a\u68c0\u67e5\u3002null \u548c undefined\u662f\u4e0d\u76f8\u7b49\u7684\u3002\u79fb\u6b65\u6bd4\u8f83\u64cd\u4f5c\u7b26\u67e5\u770b\u8be6\u60c5\u3002</code></p>\n<h3 id="2-typeof-\u64cd\u4f5c\u7b26\u548cundefined">(2) Typeof \u64cd\u4f5c\u7b26\u548cundefined</h3>\n<p>\u53ef\u66ff\u6362\u7684\u662f\uff0ctypeof\u53ef\u4ee5\u88ab\u4f7f\u7528\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span>;\n<span class="hljs-keywords">if</span>(<span class="hljs-built_in">typeof</span> <span class="hljs-symbol">x</span> === <span class="hljs-string">\'undefined\'</span>) {\n    <span class="hljs-comment">// \u6267\u884c\u8fd9\u4e9b\u8bed\u53e5</span>\n}</code></pre>\n<p>\u8fd8\u6709\u4e00\u4e2a\u539f\u56e0\u53bb\u4f7f\u7528 typeof\u7684\u662f\u5b83\u4e0d\u4f1a\u5728\u4e00\u4e2a\u53d8\u91cf\u6ca1\u6709\u88ab\u58f0\u660e\u7684\u65f6\u5019\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u8fd9\u91cc\u6ca1\u6709\u58f0\u660ex</span>\n<span class="hljs-keywords">if</span>(<span class="hljs-built_in">typeof</span> <span class="hljs-symbol">x</span> === <span class="hljs-string">\'undefined\'</span>) { <span class="hljs-comment">// \u6ca1\u6709\u9519\u8bef\uff0c\u6267\u884c\u7ed3\u679c\u4e3atrue</span>\n    <span class="hljs-comment">// \u6267\u884c\u8fd9\u4e9b\u8bed\u53e5</span>\n}\n\n<span class="hljs-keywords">if</span>(<span class="hljs-symbol">x</span> === <span class="hljs-literal">undefined</span>) { <span class="hljs-comment">// \u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0cReferenceError</span>\n\n}</code></pre>\n<p>\u4f46\u662f\uff0c\u6280\u672f\u65b9\u9762\u770b\u6765\u8fd9\u6837\u7684\u4f7f\u7528\u65b9\u6cd5\u5e94\u8be5\u88ab\u907f\u514d\u3002JavaScript\u662f\u4e00\u4e2a\u9759\u6001\u4f5c\u7528\u57df\u8bed\u8a00\uff0c\u6240\u4ee5\u53ef\u4ee5\u77e5\u9053\uff0c\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u53ef\u4ee5\u88ab\u8bfb\u53d6\u53ea\u8981\u770b\u5b83\u662f\u5426\u5728\u4e00\u4e2a\u5c01\u95ed\u7684\u4e0a\u4e0b\u6587\u4e2d\u88ab\u58f0\u660e\u3002\n\u552f\u4e00\u7684\u4f8b\u5916\u662f\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u4f46\u662f\u5168\u5c40\u4f5c\u7528\u57df\u662f\u88ab\u7ed1\u5b9a\u5728\u5168\u5c40\u5bf9\u8c61\u4e0a\u7684\uff0c\u6240\u4ee5\u68c0\u67e5\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u5728\u5168\u5c40\u4e0a\u4e0b\u6587\u4e2d\u5b58\u5728\u53ea\u8981\u68c0\u67e5\u5168\u5c40\u5bf9\u8c61\u4e0a\u9762\u662f\u5426\u5b58\u5728\u8fd9\u4e2a\u5c5e\u6027\uff08\u4f7f\u7528in\u64cd\u4f5c\u7b26\uff09\u3002</p>\n<h3 id="3-void\u64cd\u4f5c\u7b26\u548cundefined">(3) Void\u64cd\u4f5c\u7b26\u548cundefined</h3>\n<p>void \u64cd\u4f5c\u7b26\u662f\u7b2c\u4e09\u79cd\u53ef\u4ee5\u66ff\u4ee3\u7684\u65b9\u6cd5\u3002</p>\n<pre><code class="language-javascript">var x;\n<span class="hljs-keyword">if</span>(x === <span class="hljs-built_in">void</span> <span class="hljs-number">0</span>) {\n    <span class="hljs-comment">// \u6267\u884c\u8fd9\u4e9b\u8bed\u53e5</span>\n}\n\n<span class="hljs-comment">// \u6ca1\u6709\u58f0\u660ey</span>\n<span class="hljs-keyword">if</span>(y === <span class="hljs-built_in">void</span> <span class="hljs-number">0</span>) {\n    <span class="hljs-comment">// \u629b\u51fa\u4e00\u4e2aRenferenceError\u9519\u8bef(\u4e0e`typeof`\u76f8\u6bd4)</span>\n}</code></pre>\n<h2 id="4\u3001\u89c4\u8303">4\u3001\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition JavaScript 1.3</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);