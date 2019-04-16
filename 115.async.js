(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{hY0H:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" target="_blank">en</a></p>\n<h1 id="numberissafeinteger">Number.isSafeInteger()</h1>\n<p>Number.isSafeInteger() \u65b9\u6cd5\u7528\u6765\u5224\u65ad\u4f20\u5165\u7684\u53c2\u6570\u503c\u662f\u5426\u662f\u4e00\u4e2a\u201c\u5b89\u5168\u6574\u6570\u201d\uff08safe integer\uff09\u3002\u4e00\u4e2a\u5b89\u5168\u6574\u6570\u662f\u4e00\u4e2a\u7b26\u5408\u4e0b\u9762\u6761\u4ef6\u7684\u6574\u6570\uff1a</p>\n<ul>\n<li>can be exactly represented as an IEEE-754 double precision number, and</li>\n<li>whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.</li>\n</ul>\n<p>\u6bd4\u5982\uff0c253 - 1 \u662f\u4e00\u4e2a\u5b89\u5168\u6574\u6570\uff0c\u5b83\u80fd\u88ab\u7cbe\u786e\u8868\u793a\uff0c\u5728\u4efb\u4f55 IEEE-754 \u820d\u5165\u6a21\u5f0f\uff08rounding mode\uff09\u4e0b\uff0c\u6ca1\u6709\u5176\u4ed6\u6574\u6570\u820d\u5165\u7ed3\u679c\u4e3a\u8be5\u6574\u6570\u3002\n\u4f5c\u4e3a\u5bf9\u6bd4\uff0c253 \u5c31\u4e0d\u662f\u4e00\u4e2a\u5b89\u5168\u6574\u6570\uff0c\u5b83\u80fd\u591f\u4f7f\u7528 IEEE-754 \u8868\u793a\uff0c\u4f46\u662f 253 + 1 \u4e0d\u80fd\u4f7f\u7528 IEEE-754 \u76f4\u63a5\u8868\u793a\uff0c\u5728\u5c31\u8fd1\u820d\u5165\n\uff08round-to-nearest\uff09\u548c\u5411\u96f6\u820d\u5165\u4e2d\uff0c\u4f1a\u88ab\u820d\u5165\u4e3a 253\u3002</p>\n<p>\u5b89\u5168\u6574\u6570\u8303\u56f4\u4e3a -(253 - 1)\u5230 253 - 1 \u4e4b\u95f4\u7684\u6574\u6570\uff0c\u5305\u542b -(253 - 1)\u548c 253 - 1\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(<span class="hljs-params">testValue</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>testValue</code> \u9700\u8981\u68c0\u6d4b\u7684\u53c2\u6570</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a\u5e03\u5c14\u503c \u8868\u793a\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u662f\u4e00\u4e2a\u5b89\u5168\u6574\u6570\uff08safe integer\uff09\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(3)</span>;                    <span class="hljs-comment">// true</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(Math.<span class="hljs-params">pow</span>(2, 53)</span>)       <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(Math.<span class="hljs-params">pow</span>(2, 53)</span> - <span class="hljs-number">1</span>)   <span class="hljs-comment">// true</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(NaN)</span>;                  <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(Infinity)</span>;             <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(<span class="hljs-string">"3"</span>)</span>;                  <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(3.1)</span>;                  <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">SafeInteger(3.0)</span>;                  <span class="hljs-comment">// true</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);