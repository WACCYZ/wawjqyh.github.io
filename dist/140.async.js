(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[140],{SS5t:function(n,a){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">en</a></p>\n<h1 id="mathmin">Math.min()</h1>\n<p>Math.min() \u8fd4\u56de\u96f6\u4e2a\u6216\u66f4\u591a\u4e2a\u6570\u503c\u7684\u6700\u5c0f\u503c\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">Math.min([<span class="hljs-keyword">value</span><span class="hljs-number">1</span>[,<span class="hljs-keyword">value</span><span class="hljs-number">2</span>, ...]])</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>value1, value2, ...</code> \u4e00\u7ec4\u6570\u503c</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u7ed9\u5b9a\u6570\u503c\u4e2d\u6700\u5c0f\u7684\u6570\u3002\u5982\u679c\u4efb\u4e00\u53c2\u6570\u4e0d\u80fd\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u5219\u8fd4\u56deNaN\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u7531\u4e8e min \u662f Math \u7684\u9759\u6001\u65b9\u6cd5\uff0c\u6240\u4ee5\u5e94\u8be5\u50cf\u8fd9\u6837\u4f7f\u7528\uff1aMath.min()\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u4f60\u521b\u5efa\u7684 Math \u5b9e\u4f8b\u7684\u65b9\u6cd5\uff08Math \u4e0d\u662f\u6784\u9020\u51fd\u6570\uff09\u3002</p>\n<p>\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u7ed3\u679c\u4e3aInfinity\u3002</p>\n<p>\u5982\u679c\u6709\u4efb\u4e00\u53c2\u6570\u4e0d\u80fd\u88ab\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u7ed3\u679c\u4e3a NaN\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f7f\u7528-mathmin">\u4f7f\u7528 Math.min()</h3>\n<p>\u4e0b\u4f8b\u627e\u51fa x \u548c y \u7684\u6700\u5c0f\u503c\uff0c\u5e76\u628a\u5b83\u8d4b\u503c\u7ed9 z\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span> = <span class="hljs-number">10</span>, <span class="hljs-symbol">y</span> = <span class="hljs-number">-20</span>;\n<span class="hljs-keywords">var</span> z = Math.<span class="hljs-built_in">min</span>(<span class="hljs-symbol">x</span>, <span class="hljs-symbol">y</span>);</code></pre>\n<h3 id="\u4f7f\u7528-mathmin-\u88c1\u526a\u503c\uff08clipping-a-value\uff09">\u4f7f\u7528 Math.min() \u88c1\u526a\u503c\uff08Clipping a value\uff09</h3>\n<p>Math.min \u7ecf\u5e38\u7528\u4e8e\u88c1\u526a\u4e00\u4e2a\u503c\uff0c\u4ee5\u4fbf\u4f7f\u5176\u603b\u662f\u5c0f\u4e8e\u6216\u7b49\u4e8e\u67d0\u4e2a\u8fb9\u754c\u503c\u3002\u4f8b\u5982\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span> = f(foo);\n\n<span class="hljs-keywords">if</span> (<span class="hljs-symbol">x</span> &gt; boundary) {\n    <span class="hljs-symbol">x</span> = boundary;\n}</code></pre>\n<p>\u53ef\u4ee5\u5199\u6210\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span> = Math.<span class="hljs-built_in">min</span>(f(foo), boundary);</code></pre>\n<p>\u53e6\u5916\uff0cMath.max() \u4e5f\u53ef\u4ee5\u88ab\u7528\u6765\u4ee5\u76f8\u4f3c\u7684\u65b9\u5f0f\u88c1\u526a\u4e00\u4e2a\u503c\u3002</p>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);