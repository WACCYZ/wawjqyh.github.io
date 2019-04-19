(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[264],{"2KIR":function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" target="_blank">en</a></p>\n<h1 id="stringfromcodepoint">String.fromCodePoint()</h1>\n<p>String.fromCodePoint() \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u4f7f\u7528\u6307\u5b9a\u7684\u4ee3\u7801\u70b9\u5e8f\u5217\u521b\u5efa\u7684\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(<span class="hljs-params">num1</span>[, <span class="hljs-operator">...</span>[, <span class="hljs-params">numN</span>]])</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>num1, ..., numN</code> \u4e00\u4e32 Unicode \u7f16\u7801\u3002</li>\n</ul>\n<h3 id="\u5f02\u5e38">\u5f02\u5e38</h3>\n<p><code>RangeError</code></p>\n<p>\u5982\u679c\u4f20\u5165\u65e0\u6548\u7684 Unicode \u7f16\u7801\uff0c\u5c06\u4f1a\u629b\u51fa\u4e00\u4e2aRangeError (\u4f8b\u5982\uff1a &quot;RangeError: NaN is not a valid code point&quot;)\u3002</p>\n<h2 id="\u8bf4\u660e">\u8bf4\u660e</h2>\n<p>\u56e0\u4e3a fromCodePoint()  \u662f String \u7684\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u6240\u4ee5\u53ea\u80fd\u901a\u8fc7 String.fromCodePoint() \u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u4f7f\u7528\uff0c\u4e0d\u80fd\u5728\u4f60\u521b\u5efa\u7684 String \u5bf9\u8c61\u5b9e\u4f8b\u4e0a\u76f4\u63a5\u8c03\u7528\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<p>\u4f7f\u7528 fromCodePoint()</p>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(42)</span>;       <span class="hljs-comment">// "*"</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(65, 90)</span>;   <span class="hljs-comment">// "AZ"</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(0x404)</span>;    <span class="hljs-comment">// "\\u0404"</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(0x2F804)</span>;  <span class="hljs-comment">// "\\uD87E\\uDC04"</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(194564)</span>;   <span class="hljs-comment">// "\\uD87E\\uDC04"</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(0x1D306, 0x61, 0x1D307)</span> <span class="hljs-comment">// "\\uD834\\uDF06a\\uD834\\uDF07"</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(\'<span class="hljs-params">_</span>\')</span>;      <span class="hljs-comment">// RangeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(Infinity)</span>; <span class="hljs-comment">// RangeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(-1)</span>;       <span class="hljs-comment">// RangeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(3.14)</span>;     <span class="hljs-comment">// RangeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(3e-2)</span>;     <span class="hljs-comment">// RangeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(NaN)</span>;      <span class="hljs-comment">// RangeError</span>\n<span class="hljs-comment">// String.fromCharCode() \u65b9\u6cd5\u4e0d\u80fd\u5355\u72ec\u83b7\u53d6\u5728\u9ad8\u4ee3\u7801\u70b9\u4f4d\u4e0a\u7684\u5b57\u7b26</span>\n<span class="hljs-comment">// \u53e6\u4e00\u65b9\u9762\uff0c\u4e0b\u5217\u7684\u793a\u4f8b\u4e2d\uff0c\u53ef\u4ee5\u8fd4\u56de 4 \u5b57\u8282\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de 2 \u5b57\u8282\u7684\u5b57\u7b26</span>\n<span class="hljs-comment">// (\u5373\uff0c\u5b83\u53ef\u4ee5\u8fd4\u56de\u5355\u72ec\u7684\u5b57\u7b26\uff0c\u4f7f\u7528\u957f\u5ea6 2 \u4ee3\u66ff 1!\uff09</span>\nconsole.log(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>from<span class="hljs-constructor">CodePoint(0x2F804)</span>); <span class="hljs-comment">// or 194564 in decimal</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);