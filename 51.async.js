(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"7HLK":function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" target="_blank">en</a></p>\n<h1 id="objectpreventextensions">Object.preventExtensions()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>Object.preventExtensions() \u65b9\u6cd5\u8ba9\u4e00\u4e2a\u5bf9\u8c61\u53d8\u7684\u4e0d\u53ef\u6269\u5c55\uff0c\u4e5f\u5c31\u662f\u6c38\u8fdc\u4e0d\u80fd\u518d\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">obj</span>)</span></code></pre>\n<h2 id="\u53c2\u6570">\u53c2\u6570</h2>\n<ul>\n<li><code>obj</code> \u5c06\u8981\u53d8\u5f97\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u662f\u53ef\u6269\u5c55\u7684\u3002preventExtensions \u53ef\u4ee5\u8ba9\u8fd9\u4e2a\u5bf9\u8c61\u53d8\u7684\u4e0d\u53ef\u6269\u5c55\uff0c\u4e5f\u5c31\u662f\u4e0d\u80fd\u518d\u6709\u65b0\u7684\u5c5e\u6027\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u901a\u5e38\u4ecd\u7136\u53ef\u4ee5\u88ab\u5220\u9664\u3002\u5c1d\u8bd5\u7ed9\u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u5bf9\u8c61\u6dfb\u52a0\u65b0\u5c5e\u6027\u7684\u64cd\u4f5c\u5c06\u4f1a\u5931\u8d25\uff0c\u4e0d\u8fc7\u53ef\u80fd\u662f\u9759\u9ed8\u5931\u8d25\uff0c\n\u4e5f\u53ef\u80fd\u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff08\u4e25\u683c\u6a21\u5f0f\uff09\u3002</p>\n<p>Object.preventExtensions \u53ea\u80fd\u963b\u6b62\u4e00\u4e2a\u5bf9\u8c61\u4e0d\u80fd\u518d\u6dfb\u52a0\u65b0\u7684\u81ea\u8eab\u5c5e\u6027\uff0c\u4ecd\u7136\u53ef\u4ee5\u4e3a\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u6dfb\u52a0\u5c5e\u6027\u3002</p>\n<p>\u5728 ECMAScript 5 \u4e2d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61\u53ef\u4ee5\u53d8\u5f97\u4e0d\u53ef\u6269\u5c55\uff0c\u4f46\u53cd\u8fc7\u6765\u4e0d\u884c\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-comment">// Object.preventExtensions\u5c06\u539f\u5bf9\u8c61\u53d8\u7684\u4e0d\u53ef\u6269\u5c55,\u5e76\u4e14\u8fd4\u56de\u539f\u5bf9\u8c61.</span>\nvar obj = {};\nvar obj2 = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">obj</span>)</span>;\n<span class="hljs-keyword">assert</span>(obj<span class="hljs-operator"> === </span>obj2);\n\n<span class="hljs-comment">// \u5b57\u9762\u91cf\u65b9\u5f0f\u5b9a\u4e49\u7684\u5bf9\u8c61\u9ed8\u8ba4\u662f\u53ef\u6269\u5c55\u7684.</span>\nvar empty = {};\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">empty</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// ...\u4f46\u53ef\u4ee5\u6539\u53d8.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">empty</span>)</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">empty</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// \u4f7f\u7528Object.defineProperty\u65b9\u6cd5\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61\u6dfb\u52a0\u65b0\u5c5e\u6027\u4f1a\u629b\u51fa\u5f02\u5e38.</span>\nvar nonExtensible = { removable: <span class="hljs-literal">true</span> };\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">nonExtensible</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">nonExtensible</span>, <span class="hljs-string">"new"</span>, { <span class="hljs-params">value</span>: 8675309 })</span>; <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span>\n\n<span class="hljs-comment">// \u5728\u4e25\u683c\u6a21\u5f0f\u4e2d,\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u5bf9\u8c61\u7684\u65b0\u5c5e\u6027\u8d4b\u503c\u4f1a\u629b\u51faTypeError\u5f02\u5e38.</span>\n<span class="hljs-keyword">function</span> fail<span class="hljs-literal">()</span>\n{\n  <span class="hljs-string">"use strict"</span>;\n  nonExtensible.newProperty = <span class="hljs-string">"FAIL"</span>; <span class="hljs-comment">// throws a TypeError</span>\n}\nfail<span class="hljs-literal">()</span>;\n\n<span class="hljs-comment">// \u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u5bf9\u8c61\u7684\u539f\u578b\u662f\u4e0d\u53ef\u66f4\u6539\u7684,__proto__\u662f\u4e2a\u975e\u6807\u51c6\u9b54\u6cd5\u5c5e\u6027,\u53ef\u4ee5\u66f4\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b.</span>\nvar fixed = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions({})</span>;\nfixed.__proto__ = { oh: <span class="hljs-string">"hai"</span> }; <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);