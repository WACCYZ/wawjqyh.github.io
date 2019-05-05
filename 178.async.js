(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[178],{js7q:function(a,t){a.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear" target="_blank">en</a></p>\n<h1 id="dateprototypesetfullyear">Date.prototype.setFullYear()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>setFullYear() \u65b9\u6cd5\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u5e74\u4efd\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">dateObj.set<span class="hljs-constructor">FullYear(<span class="hljs-params">yearValue</span>[, <span class="hljs-params">monthValue</span>[, <span class="hljs-params">dayValue</span>]])</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>yearValue</code> \u6307\u5b9a\u5e74\u4efd\u7684\u6574\u6570\u503c\uff0c\u4f8b\u59821995</li>\n<li><code>monthValue</code> \u4e00\u4e2a0\u523011\u4e4b\u95f4\u7684\u6574\u6570\u503c\uff0c\u8868\u793a\u4ece\u4e00\u6708\u5230\u5341\u4e8c\u6708</li>\n<li><code>dayValue</code> \u4e00\u4e2a1\u523031\u4e4b\u95f4\u7684\u6574\u6570\u503c\uff0c\u8868\u793a\u6708\u4efd\u4e2d\u7684\u7b2c\u51e0\u5929\u3002\u5982\u679c\u4f60\u6307\u5b9a\u4e86 dayValue \u53c2\u6570\uff0c\u5c31\u5fc5\u987b\u540c\u65f6\u6307\u5b9a monthValue</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u6ca1\u6709\u6307\u5b9a monthValue \u548cdayValue \u53c2\u6570\uff0c\u5c06\u4f1a\u4f7f\u7528 getMonth \u548cgetDate \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002</p>\n<p>\u5982\u679c\u6709\u4e00\u4e2a\u53c2\u6570\u8d85\u51fa\u4e86\u5408\u7406\u7684\u8303\u56f4\uff0csetFullYear \u65b9\u6cd5\u4f1a\u66f4\u65b0\u5176\u4ed6\u53c2\u6570\u503c\uff0c\u65e5\u671f\u5bf9\u8c61\u7684\u65e5\u671f\u503c\u4e5f\u4f1a\u88ab\u76f8\u5e94\u66f4\u65b0\u3002 \u4f8b\u5982\uff0c\u4e3a monthValue \u6307\u5b9a 15\uff0c \u5219\u5e74\u4efd\u4f1a\u52a01\uff0c\u6708\u4efd\u503c\u4f1a\u4e3a3\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<p>\u4f8b\u5b50\uff1a\u4f7f\u7528setFullYear\u65b9\u6cd5</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> theBigDay = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\ntheBigDay.setFullYear(<span class="hljs-number">1997</span>);</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);