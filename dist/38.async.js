(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{kGf3:function(n,a){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC" target="_blank">en</a></p>\n<h1 id="dateutc">Date.UTC()</h1>\n<h2 id="\u6982\u8981">\u6982\u8981</h2>\n<p>Date.UTC() \u65b9\u6cd5\u63a5\u53d7\u7684\u53c2\u6570\u540c\u65e5\u671f\u6784\u9020\u51fd\u6570\u63a5\u53d7\u6700\u591a\u53c2\u6570\u65f6\u4e00\u6837\uff0c\u8fd4\u56de\u4ece1970-1-1 00:00:00 UTC\u5230\u6307\u5b9a\u65e5\u671f\u7684\u7684\u6beb\u79d2\u6570\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">Date.<span class="hljs-constructor">UTC(<span class="hljs-params">year</span>,<span class="hljs-params">month</span>[,<span class="hljs-params">date</span>[,<span class="hljs-params">hrs</span>[,<span class="hljs-params">min</span>[,<span class="hljs-params">sec</span>[,<span class="hljs-params">ms</span>]]]]])</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>year</code> 1900 \u5e74\u540e\u7684\u67d0\u4e00\u5e74\u4efd</li>\n<li><code>month</code> 0 \u5230 11 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6708\u4efd</li>\n<li><code>date</code> 1 \u5230 31 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u67d0\u6708\u5f53\u4e2d\u7684\u7b2c\u51e0\u5929</li>\n<li><code>hrs</code> 0 \u5230 23 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u5c0f\u65f6</li>\n<li><code>min</code> 0 \u5230 59 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u5206\u949f</li>\n<li><code>sec</code> 0 \u5230 59 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u79d2</li>\n<li><code>ms</code> 0 \u5230 999 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6beb\u79d2</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>UTC \u65b9\u6cd5\u63a5\u53d7\u4ee5\u9017\u53f7\u9694\u5f00\u7684\u65e5\u671f\u53c2\u6570\uff0c\u8fd4\u56de1970-1-1 00:00:00 UTC\u5230\u6307\u5b9a\u7684\u65e5\u671f\u4e4b\u95f4\u7684\u6beb\u79d2\u6570\u3002</p>\n<p>\u4f60\u5e94\u8be5\u6307\u5b9a\u4e00\u4e2a\u5b8c\u6574\u683c\u5f0f\u7684\u5e74\u4efd\uff0c\u5982 1998\u3002\u5982\u679c\u5e74\u4efd\u88ab\u6307\u5b9a\u4e3a 0 \u5230 99 \u4e4b\u95f4\uff0c\u5219\u8be5\u65b9\u6cd5\u4f1a\u5c06\u5e74\u4efd\u8f6c\u6362\u4e3a 20 \u4e16\u7eaa\u7684\u4e00\u4e2a\u5e74\u4efd\uff08\u5373 1990 + year\uff09\uff0c\u4f8b\u5982\uff0c\u6307\u5b9a\u4e3a 95\uff0c \u5219\u5e74\u4efd\u4e3a 1995\u3002</p>\n<p>UTC \u65b9\u6cd5\u4e0e Date \u6709\u4e24\u70b9\u4e0d\u540c\uff1a</p>\n<ul>\n<li>Date.UTC \u65b9\u6cd5\u4f7f\u7528\u534f\u8c03\u4e16\u754c\u65f6\u4ee3\u66ff\u672c\u5730\u65f6\u95f4\u3002</li>\n<li>Date.UTC \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u65f6\u95f4\u6570\u503c\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u3002</li>\n</ul>\n<p>\u5982\u679c\u6709\u4e00\u4e2a\u6307\u5b9a\u7684\u53c2\u6570\u8d85\u51fa\u5176\u5408\u7406\u8303\u56f4\uff0c\u5219 UTC \u65b9\u6cd5\u4f1a\u901a\u8fc7\u66f4\u65b0\u5176\u4ed6\u53c2\u6570\u76f4\u5230\u8be5\u53c2\u6570\u5728\u5408\u7406\u8303\u56f4\u5185\u3002\u4f8b\u5982\uff0c\u4e3a\u6708\u4efd\u6307\u5b9a 15\uff0c\u5219\u5e74\u4efd\u5c06\u4f1a\u52a0 1\uff0c\u7136\u540e\u6708\u4efd\u5c06\u4f1a\u4f7f\u7528 3\u3002</p>\n<p>\u7531\u4e8e UTC \u662f Date\uff08\u65e5\u671f\u5bf9\u8c61\uff09\u7684\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u6240\u4ee5\u5e94\u8be5\u5728 Date \u4e0a\u76f4\u63a5\u8c03\u7528\uff0c\u5c31\u50cf Date.UTC()\uff0c\u800c\u4e0d\u8981\u628a\u5b83\u4f5c\u4e3a\u521b\u5efa\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<p>\u4e0b\u9762\u7684\u8bed\u53e5\u4f7f\u7528 UTC \u65f6\u95f4\u4ee3\u66ff\u672c\u5730\u65f6\u95f4\u521b\u5efa\u4e86\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u3002</p>\n<pre><code class="language-javascript">var utcDate = new Date(Date.UTC(<span class="hljs-number">96</span>, <span class="hljs-number">11</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>));</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);