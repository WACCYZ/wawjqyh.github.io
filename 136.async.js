(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[136],{"0Qj2":function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">en</a></p>\n<h1 id="arrayprototypeshift">Array.prototype.shift()</h1>\n<p>shift() \u65b9\u6cd5\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c\u3002\u6b64\u65b9\u6cd5\u66f4\u6539\u6570\u7ec4\u7684\u957f\u5ea6\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">let</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];\n<span class="hljs-keyword">let</span> b = a.shift();\n\n<span class="hljs-built_in">console</span>.log(a);\n<span class="hljs-comment">// [2, 3]</span>\n\n<span class="hljs-built_in">console</span>.log(b);\n<span class="hljs-comment">// 1</span></code></pre>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">arr</span><span class="hljs-selector-class">.shift</span>()</code></pre>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7684\u5143\u7d20; undefined \u5982\u679c\u6570\u7ec4\u4e3a\u7a7a\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>shift \u65b9\u6cd5\u79fb\u9664\u7d22\u5f15\u4e3a 0 \u7684\u5143\u7d20(\u5373\u7b2c\u4e00\u4e2a\u5143\u7d20)\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20\uff0c\u5176\u4ed6\u5143\u7d20\u7684\u7d22\u5f15\u503c\u968f\u4e4b\u51cf 1\u3002\u5982\u679c length \u5c5e\u6027\u7684\u503c\u4e3a 0 (\u957f\u5ea6\u4e3a 0)\uff0c\u5219\u8fd4\u56de undefined\u3002</p>\n<p>shift \u65b9\u6cd5\u5e76\u4e0d\u5c40\u9650\u4e8e\u6570\u7ec4\uff1a\u8be5\u65b9\u6cd5\u4ea6\u53ef\u901a\u8fc7 call \u6216 apply \u4f5c\u7528\u4e8e\u5bf9\u8c61\u4e0a\u3002\u5bf9\u4e8e\u4e0d\u5305\u542b length \u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5c06\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a 0 \u7684 length \u5c5e\u6027\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u79fb\u9664\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20">\u79fb\u9664\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20</h3>\n<p>\u4ee5\u4e0b\u4ee3\u7801\u663e\u793a\u4e86\u5220\u9664\u5176\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u548c\u4e4b\u540e\u7684myFish\u6570\u7ec4\u3002\u5b83\u8fd8\u663e\u793a\u5df2\u5220\u9664\u7684\u5143\u7d20\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">let</span> myFish = [<span class="hljs-string">\'angel\'</span>, <span class="hljs-string">\'clown\'</span>, <span class="hljs-string">\'mandarin\'</span>, <span class="hljs-string">\'surgeon\'</span>];\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'\u8c03\u7528 shift \u4e4b\u524d: \'</span> + myFish);\n<span class="hljs-comment">// "\u8c03\u7528 shift \u4e4b\u524d: angel,clown,mandarin,surgeon"</span>\n\n<span class="hljs-keyword">var</span> shifted = myFish.shift();\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'\u8c03\u7528 shift \u4e4b\u540e: \'</span> + myFish);\n<span class="hljs-comment">// "\u8c03\u7528 shift \u4e4b\u540e: clown,mandarin,surgeon"</span>\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'\u88ab\u5220\u9664\u7684\u5143\u7d20: \'</span> + shifted);\n<span class="hljs-comment">// "\u88ab\u5220\u9664\u7684\u5143\u7d20: angel"</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);