(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"6bKb":function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen" target="_blank">en</a></p>\n<h1 id="objectisfrozen">Object.isFrozen()</h1>\n<p>Object.isFrozen() \u65b9\u6cd5\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u88ab\u51bb\u7ed3 frozen\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">obj</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u88ab\u68c0\u6d4b\u7684\u5bf9\u8c61</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u4e00\u4e2a\u5bf9\u8c61\u662f\u51bb\u7ed3\u7684\uff08frozen\uff09\u662f\u6307\u5b83\u4e0d\u53ef\u6269\u5c55\uff0c\u6240\u6709\u5c5e\u6027\u90fd\u662f\u4e0d\u53ef\u914d\u7f6e\u7684\uff08non-configurable\uff09\uff0c\u4e14\u6240\u6709\u6570\u636e\u5c5e\u6027\uff08data properties\uff09\n\u90fd\u662f\u4e0d\u53ef\u5199\u7684\uff08non-writable\uff09\u3002\u6570\u636e\u5c5e\u6027\u662f\u6307\u90a3\u4e9b\u6ca1\u6709\u53d6\u503c\u5668\uff08getter\uff09\u6216\u8d4b\u503c\u5668\uff08setter\uff09\u7684\u5c5e\u6027\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4e00\u4e2a\u5bf9\u8c61\u9ed8\u8ba4\u662f\u53ef\u6269\u5c55\u7684,\u6240\u4ee5\u5b83\u4e5f\u662f\u975e\u51bb\u7ed3\u7684.</span>\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen({})</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// \u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u7a7a\u5bf9\u8c61\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a\u51bb\u7ed3\u5bf9\u8c61.</span>\nvar vacuouslyFrozen = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions({})</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">vacuouslyFrozen</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u4e00\u4e2a\u975e\u7a7a\u5bf9\u8c61\u9ed8\u8ba4\u4e5f\u662f\u975e\u51bb\u7ed3\u7684.</span>\nvar oneProp = { p: <span class="hljs-number">42</span> };\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">oneProp</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// \u8ba9\u8fd9\u4e2a\u5bf9\u8c61\u53d8\u7684\u4e0d\u53ef\u6269\u5c55,\u5e76\u4e0d\u610f\u5473\u7740\u8fd9\u4e2a\u5bf9\u8c61\u53d8\u6210\u4e86\u51bb\u7ed3\u5bf9\u8c61,</span>\n<span class="hljs-comment">// \u56e0\u4e3ap\u5c5e\u6027\u4ecd\u7136\u662f\u53ef\u4ee5\u914d\u7f6e\u7684(\u800c\u4e14\u53ef\u5199\u7684).</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">oneProp</span>)</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">oneProp</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// ...\u5982\u679c\u5220\u9664\u4e86\u8fd9\u4e2a\u5c5e\u6027,\u5219\u5b83\u4f1a\u6210\u4e3a\u4e00\u4e2a\u51bb\u7ed3\u5bf9\u8c61.</span>\ndelete oneProp.p;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">oneProp</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61,\u62e5\u6709\u4e00\u4e2a\u4e0d\u53ef\u5199\u4f46\u53ef\u914d\u7f6e\u7684\u5c5e\u6027,\u5219\u5b83\u4ecd\u7136\u662f\u975e\u51bb\u7ed3\u7684.</span>\nvar nonWritable = { e: <span class="hljs-string">"plep"</span> };\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">nonWritable</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">nonWritable</span>, <span class="hljs-string">"e"</span>, { <span class="hljs-params">writable</span>: <span class="hljs-params">false</span> })</span>; <span class="hljs-comment">// \u53d8\u5f97\u4e0d\u53ef\u5199</span>\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">nonWritable</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// \u628a\u8fd9\u4e2a\u5c5e\u6027\u6539\u4e3a\u4e0d\u53ef\u914d\u7f6e,\u4f1a\u8ba9\u8fd9\u4e2a\u5bf9\u8c61\u6210\u4e3a\u51bb\u7ed3\u5bf9\u8c61.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">nonWritable</span>, <span class="hljs-string">"e"</span>, { <span class="hljs-params">configurable</span>: <span class="hljs-params">false</span> })</span>; <span class="hljs-comment">// \u53d8\u5f97\u4e0d\u53ef\u914d\u7f6e</span>\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">nonWritable</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61,\u62e5\u6709\u4e00\u4e2a\u4e0d\u53ef\u914d\u7f6e\u4f46\u53ef\u5199\u7684\u5c5e\u6027,\u5219\u5b83\u4ecd\u7136\u662f\u975e\u51bb\u7ed3\u7684.</span>\nvar nonConfigurable = { release: <span class="hljs-string">"the kraken!"</span> };\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">nonConfigurable</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">nonConfigurable</span>, <span class="hljs-string">"release"</span>, { <span class="hljs-params">configurable</span>: <span class="hljs-params">false</span> })</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">nonConfigurable</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// \u628a\u8fd9\u4e2a\u5c5e\u6027\u6539\u4e3a\u4e0d\u53ef\u5199,\u4f1a\u8ba9\u8fd9\u4e2a\u5bf9\u8c61\u6210\u4e3a\u51bb\u7ed3\u5bf9\u8c61.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">nonConfigurable</span>, <span class="hljs-string">"release"</span>, { <span class="hljs-params">writable</span>: <span class="hljs-params">false</span> })</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">nonConfigurable</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61,\u503c\u62e5\u6709\u4e00\u4e2a\u8bbf\u95ee\u5668\u5c5e\u6027,\u5219\u5b83\u4ecd\u7136\u662f\u975e\u51bb\u7ed3\u7684.</span>\nvar accessor = { get food<span class="hljs-literal">()</span> { return <span class="hljs-string">"yum"</span>; } };\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">accessor</span>)</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">accessor</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// ...\u4f46\u628a\u8fd9\u4e2a\u5c5e\u6027\u6539\u4e3a\u4e0d\u53ef\u914d\u7f6e,\u4f1a\u8ba9\u8fd9\u4e2a\u5bf9\u8c61\u6210\u4e3a\u51bb\u7ed3\u5bf9\u8c61.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">accessor</span>, <span class="hljs-string">"food"</span>, { <span class="hljs-params">configurable</span>: <span class="hljs-params">false</span> })</span>;\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">accessor</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u4f7f\u7528Object.freeze\u662f\u51bb\u7ed3\u4e00\u4e2a\u5bf9\u8c61\u6700\u65b9\u4fbf\u7684\u65b9\u6cd5.</span>\nvar frozen = { <span class="hljs-number">1</span>: <span class="hljs-number">81</span> };\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">frozen</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>freeze(frozen);\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">frozen</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u4e00\u4e2a\u51bb\u7ed3\u5bf9\u8c61\u4e5f\u662f\u4e00\u4e2a\u5bc6\u5c01\u5bf9\u8c61.</span>\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">frozen</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u5f53\u7136,\u66f4\u662f\u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61.</span>\n<span class="hljs-keyword">assert</span>(<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">frozen</span>)</span><span class="hljs-operator"> === </span><span class="hljs-literal">false</span>);</code></pre>\n<h2 id="\u6ce8\u610f">\u6ce8\u610f</h2>\n<p>\u5728 ES5 \u4e2d\uff0c\u5982\u679c\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5c06\u629b\u51fa\u4e00\u4e2a TypeError  \u5f02\u5e38\u3002\u5728 ES6 \u4e2d\uff0c non-object \u53c2\u6570\u5c06\u88ab\u89c6\u4e3a\u4e00\u4e2a\u51bb\u7ed3\u7684\u666e\u901a\u5bf9\u8c61\uff0c\n\u56e0\u6b64\u4f1a\u8fd4\u56de true\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(1)</span>;\n<span class="hljs-comment">// TypeError: 1 is not an object (ES5 code)</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(1)</span>;\n<span class="hljs-comment">// true                          (ES2015 code)</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);