(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{"3HYZ":function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank">en</a></p>\n<h1 id="encodeuricomponent">encodeURIComponent()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>encodeURIComponent()\u662f\u5bf9\u7edf\u4e00\u8d44\u6e90\u6807\u8bc6\u7b26\uff08URI\uff09\u7684\u7ec4\u6210\u90e8\u5206\u8fdb\u884c\u7f16\u7801\u7684\u65b9\u6cd5\u3002\u5b83\u4f7f\u7528\u4e00\u5230\u56db\u4e2a\u8f6c\u4e49\u5e8f\u5217\u6765\u8868\u793a\u5b57\u7b26\u4e32\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\u7684\nUTF-8\u7f16\u7801\uff08\u53ea\u6709\u7531\u4e24\u4e2aUnicode\u4ee3\u7406\u533a\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u624d\u7528\u56db\u4e2a\u8f6c\u4e49\u5b57\u7b26\u7f16\u7801\uff09\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<p><code>encodeURIComponent(str);</code></p>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<p><code>str</code> String.URI \u7684\u7ec4\u6210\u90e8\u5206\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>encodeURIComponent \u8f6c\u4e49\u9664\u4e86\u5b57\u6bcd\u3001\u6570\u5b57\u3001(\u3001)\u3001.\u3001!\u3001~\u3001*\u3001&#39;\u3001-\u548c_\u4e4b\u5916\u7684\u6240\u6709\u5b57\u7b26\u3002</p>\n<p>\u6ce8\u610f\uff0c\u5982\u679c\u8bd5\u56fe\u7f16\u7801\u4e00\u4e2a\u975e\u9ad8-\u4f4e\u4f4d\u5b8c\u6574\u7684\u4ee3\u7406\u5b57\u7b26\uff0c\u5c06\u4f1a\u629b\u51fa\u4e00\u4e2a URIError \u9519\u8bef\uff0c\u4f8b\u5982\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u9ad8\u4f4e\u4f4d\u5b8c\u6574</span>\nalert(encode<span class="hljs-constructor">URIComponent(\'\\<span class="hljs-params">uD800</span>\\<span class="hljs-params">uDFFF</span>\')</span>);\n\n<span class="hljs-comment">// \u53ea\u6709\u9ad8\u4f4d\uff0c\u5c06\u629b\u51fa"URIError: malformed URI sequence"</span>\nalert(encode<span class="hljs-constructor">URIComponent(\'\\<span class="hljs-params">uD800</span>\')</span>);\n\n<span class="hljs-comment">// \u53ea\u6709\u4f4e\u4f4d\uff0c\u5c06\u629b\u51fa"URIError: malformed URI sequence"</span>\nalert(encode<span class="hljs-constructor">URIComponent(\'\\<span class="hljs-params">uDFFF</span>\')</span>);</code></pre>\n<p>\u4e3a\u4e86\u907f\u514d\u670d\u52a1\u5668\u6536\u5230\u4e0d\u53ef\u9884\u77e5\u7684\u8bf7\u6c42\uff0c\u5bf9\u4efb\u4f55\u7528\u6237\u8f93\u5165\u7684\u4f5c\u4e3aURI\u90e8\u5206\u7684\u5185\u5bb9\u4f60\u90fd\u9700\u8981\u7528encodeURIComponent\u8fdb\u884c\u8f6c\u4e49\u3002\u6bd4\u5982\uff0c\u4e00\u4e2a\u7528\u6237\n\u53ef\u80fd\u4f1a\u8f93\u5165&quot;Thyme &amp;time=again&quot;\u4f5c\u4e3acomment\u53d8\u91cf\u7684\u4e00\u90e8\u5206\u3002\u5982\u679c\u4e0d\u4f7f\u7528encodeURIComponent\u5bf9\u6b64\u5185\u5bb9\u8fdb\u884c\u8f6c\u4e49\uff0c\u670d\u52a1\u5668\u5f97\u5230\u7684\u5c06\u662f\ncomment=Thyme%20&amp;time=again\u3002\u8bf7\u6ce8\u610f\uff0c&quot;&amp;&quot;\u7b26\u53f7\u548c&quot;=&quot;\u7b26\u53f7\u4ea7\u751f\u4e86\u4e00\u4e2a\u65b0\u7684\u952e\u503c\u5bf9\uff0c\u6240\u4ee5\u670d\u52a1\u5668\u5f97\u5230\u4e24\u4e2a\u952e\u503c\u5bf9\uff08\u4e00\u4e2a\u952e\u503c\u5bf9\u662fcomment=Thyme\uff0c\n\u53e6\u4e00\u4e2a\u5219\u662ftime=again\uff09\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u952e\u503c\u5bf9\u3002</p>\n<p>\u5bf9\u4e8e application/x-www-form-urlencoded (POST) \u8fd9\u79cd\u6570\u636e\u65b9\u5f0f\uff0c\u7a7a\u683c\u9700\u8981\u88ab\u66ff\u6362\u6210 &#39;+&#39;\uff0c\u6240\u4ee5\u901a\u5e38\u4f7f\u7528 encodeURIComponent \u7684\u65f6\u5019\n\u8fd8\u4f1a\u628a &quot;%20&quot; \u66ff\u6362\u4e3a &quot;+&quot;\u3002</p>\n<p>\u4e3a\u4e86\u66f4\u4e25\u683c\u7684\u9075\u5faa RFC 3986\uff08\u5b83\u4fdd\u7559 !, &#39;, (, ), \u548c *\uff09\uff0c\u5373\u4f7f\u8fd9\u4e9b\u5b57\u7b26\u5e76\u6ca1\u6709\u6b63\u5f0f\u5212\u5b9a URI \u7684\u7528\u9014\uff0c\u4e0b\u9762\u8fd9\u79cd\u65b9\u5f0f\u662f\u6bd4\u8f83\u5b89\u5168\u7684\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fixedEncodeURIComponent</span> (<span class="hljs-params">str</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-built_in">encodeURIComponent</span>(str).replace(<span class="hljs-regexp">/[!\'()*]/g</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">c</span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-string">\'%\'</span> + c.charCodeAt(<span class="hljs-number">0</span>).toString(<span class="hljs-number">16</span>);\n  });\n}</code></pre>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<p>\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u63d0\u4f9b\u4e86 UTF-8 \u4e0b Content-Disposition \u548c Link \u7684\u670d\u52a1\u5668\u54cd\u5e94\u5934\u4fe1\u606f\u7684\u53c2\u6570\uff08\u4f8b\u5982 UTF-8 \u6587\u4ef6\u540d)\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> fileName = <span class="hljs-string">\'my file(2).txt\'</span>;\n<span class="hljs-keyword">var</span> header = <span class="hljs-string">"Content-Disposition: attachment; filename*=UTF-8\'\'"</span> + encodeRFC5987ValueChars(fileName);\n\n<span class="hljs-built_in">console</span>.log(header);\n<span class="hljs-comment">// \u8f93\u51fa "Content-Disposition: attachment; filename*=UTF-8\'\'my%20file%282%29.txt"</span>\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeRFC5987ValueChars</span> (<span class="hljs-params">str</span>) </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">encodeURIComponent</span>(str).\n\n        <span class="hljs-comment">// \u6ce8\u610f\uff0c\u4ec5\u7ba1 RFC3986 \u4fdd\u7559 "!"\uff0c\u4f46 RFC5987 \u5e76\u6ca1\u6709</span>\n        <span class="hljs-comment">// \u6240\u4ee5\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u8fc7\u6ee4\u5b83</span>\n        replace(<span class="hljs-regexp">/[\'()]/g</span>, <span class="hljs-built_in">escape</span>).  <span class="hljs-comment">// i.e., %27 %28 %29</span>\n\n        replace(<span class="hljs-regexp">/\\*/g</span>, <span class="hljs-string">\'%2A\'</span>).\n\n        <span class="hljs-comment">// \u4e0b\u9762\u7684\u5e76\u4e0d\u662f RFC5987 \u4e2d URI \u7f16\u7801\u5fc5\u987b\u7684</span>\n        <span class="hljs-comment">// \u6240\u4ee5\u5bf9\u4e8e |`^ \u8fd93\u4e2a\u5b57\u7b26\u6211\u4eec\u53ef\u4ee5\u7a0d\u7a0d\u63d0\u9ad8\u4e00\u70b9\u53ef\u8bfb\u6027</span>\n        replace(<span class="hljs-regexp">/%(?:7C|60|5E)/g</span>, <span class="hljs-built_in">unescape</span>);\n}</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);