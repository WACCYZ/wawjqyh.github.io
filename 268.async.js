(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[268],{rNrg:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" target="_blank">en</a></p>\n<h1 id="stringprototypeendswith">String.prototype.endsWith()</h1>\n<p>endsWith()\u65b9\u6cd5\u7528\u6765\u5224\u65ad\u5f53\u524d\u5b57\u7b26\u4e32\u662f\u5426\u662f\u4ee5\u53e6\u5916\u4e00\u4e2a\u7ed9\u5b9a\u7684\u5b50\u5b57\u7b26\u4e32\u201c\u7ed3\u5c3e\u201d\u7684\uff0c\u6839\u636e\u5224\u65ad\u7ed3\u679c\u8fd4\u56de true \u6216 false\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">str.ends<span class="hljs-constructor">With(<span class="hljs-params">searchString</span> [, <span class="hljs-params">position</span>])</span>;</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>searchString</code> \u8981\u641c\u7d22\u7684\u5b50\u5b57\u7b26\u4e32</li>\n<li><code>position \u53ef\u9009</code> \u5728 str \u4e2d\u641c\u7d22 searchString \u7684\u7ed3\u675f\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a str.length\uff0c\u4e5f\u5c31\u662f\u771f\u6b63\u7684\u5b57\u7b26\u4e32\u7ed3\u5c3e\u5904</li>\n</ul>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript">var str = <span class="hljs-string">"To be, or not to be, that is the question."</span><span class="hljs-comment">;</span>\n\nalert( <span class="hljs-name">str</span>.endsWith(<span class="hljs-string">"question."</span>) )<span class="hljs-comment">;  // true</span>\nalert( <span class="hljs-name">str</span>.endsWith(<span class="hljs-string">"to be"</span>) )<span class="hljs-comment">;      // false</span>\nalert( <span class="hljs-name">str</span>.endsWith(<span class="hljs-string">"to be"</span>, <span class="hljs-number">19</span>) )<span class="hljs-comment">;  // true</span>\nalert( <span class="hljs-name">str</span>.endsWith(<span class="hljs-string">"To be"</span>, <span class="hljs-number">5</span>) )<span class="hljs-comment">;   // true</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);