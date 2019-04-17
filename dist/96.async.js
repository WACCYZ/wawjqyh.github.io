(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{kLGG:function(n,t){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds" target="_blank">en</a></p>\n<h1 id="dateprototypesetseconds">Date.prototype.setSeconds()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>setSeconds() \u65b9\u6cd5\u6839\u636e\u672c\u5730\u65f6\u95f4\u8bbe\u7f6e\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u7684\u79d2\u6570\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">dateObj.set<span class="hljs-constructor">Seconds(<span class="hljs-params">secondsValue</span>[, <span class="hljs-params">msValue</span>])</span>\n\n<span class="hljs-comment">//JavaScript 1.3\u4e4b\u524d\u7248\u672c</span>\ndateObj.set<span class="hljs-constructor">Seconds(<span class="hljs-params">secondsValue</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>secondsValue</code> \u4e00\u4e2a 0 \u5230 59 \u7684\u6574\u6570</li>\n<li><code>msValue</code> \u4e00\u4e2a 0 \u5230 999 \u7684\u6570\u5b57\uff0c\u8868\u793a\u5fae\u79d2\u6570</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u6ca1\u6709\u6307\u5b9a msValue \u53c2\u6570\uff0c\u5c31\u4f1a\u4f7f\u7528 getMilliseconds() \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002</p>\n<p>\u5982\u679c\u4e00\u4e2a\u53c2\u6570\u8d85\u51fa\u4e86\u5408\u7406\u8303\u56f4\uff0c setSeconds \u65b9\u6cd5\u4f1a\u76f8\u5e94\u5730\u66f4\u65b0\u65e5\u671f\u5bf9\u8c61\u7684\u65f6\u95f4\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u4e3a secondsValue \u6307\u5b9a 100\uff0c\u5219\u65e5\u671f\u5bf9\u8c61\u7684\u5206\u949f\u6570\u4f1a\u76f8\u5e94\u5730\u52a0 1\uff0c\u79d2\u6570\u5c06\u4f1a\u4f7f\u7528 40\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> theBigDay = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\ntheBigDay.setSeconds(<span class="hljs-number">30</span>)</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);