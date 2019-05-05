(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[95],{qppJ:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank">en</a></p>\n<h1 id="objectfreeze">Object.freeze()</h1>\n<p>Object.freeze() \u65b9\u6cd5\u53ef\u4ee5\u51bb\u7ed3\u4e00\u4e2a\u5bf9\u8c61\uff0c\u51bb\u7ed3\u6307\u7684\u662f\u4e0d\u80fd\u5411\u8fd9\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u4e0d\u80fd\u4fee\u6539\u5176\u5df2\u6709\u5c5e\u6027\u7684\u503c\uff0c\u4e0d\u80fd\u5220\u9664\u5df2\u6709\u5c5e\u6027\uff0c\n\u4ee5\u53ca\u4e0d\u80fd\u4fee\u6539\u8be5\u5bf9\u8c61\u5df2\u6709\u5c5e\u6027\u7684\u53ef\u679a\u4e3e\u6027\u3001\u53ef\u914d\u7f6e\u6027\u3001\u53ef\u5199\u6027\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u6c38\u8fdc\u662f\u4e0d\u53ef\u53d8\u7684\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u88ab\u51bb\u7ed3\u7684\u5bf9\u8c61\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">Object</span>.<span class="hljs-keyword">freeze</span>(obj)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u5c06\u8981\u88ab\u51bb\u7ed3\u7684\u5bf9\u8c61</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u88ab\u51bb\u7ed3\u7684\u5bf9\u8c61\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u51bb\u7ed3\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u90fd\u4e0d\u53ef\u80fd\u4ee5\u4efb\u4f55\u65b9\u5f0f\u88ab\u4fee\u6539\u3002\u4efb\u4f55\u5c1d\u8bd5\u4fee\u6539\u8be5\u5bf9\u8c61\u7684\u64cd\u4f5c\u90fd\u4f1a\u5931\u8d25\uff0c\u53ef\u80fd\u662f\u9759\u9ed8\u5931\u8d25\uff0c\u4e5f\u53ef\u80fd\u4f1a\u629b\u51fa\u5f02\u5e38\uff08\u4e25\u683c\u6a21\u5f0f\u4e2d\uff09\u3002</p>\n<p>\u6570\u636e\u5c5e\u6027\u7684\u503c\u4e0d\u53ef\u66f4\u6539\uff0c\u8bbf\u95ee\u5668\u5c5e\u6027\uff08\u6709getter\u548csetter\uff09\u4e5f\u540c\u6837\uff08\u4f46\u7531\u4e8e\u662f\u51fd\u6570\u8c03\u7528\uff0c\u7ed9\u4eba\u7684\u9519\u89c9\u662f\u8fd8\u662f\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u5c5e\u6027\uff09\u3002\u5982\u679c\u4e00\n\u4e2a\u5c5e\u6027\u7684\u503c\u662f\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u9664\u975e\u5b83\u4e5f\u662f\u4e2a\u51bb\u7ed3\u5bf9\u8c61\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> obj = {\n  <span class="hljs-attr">prop</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{},\n  <span class="hljs-attr">foo</span>: <span class="hljs-string">"bar"</span>\n};\n\n<span class="hljs-comment">// \u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027,\u5df2\u6709\u7684\u5c5e\u6027\u53ef\u4ee5\u88ab\u4fee\u6539\u6216\u5220\u9664</span>\nobj.foo = <span class="hljs-string">"baz"</span>;\nobj.lumpy = <span class="hljs-string">"woof"</span>;\n<span class="hljs-keyword">delete</span> obj.prop;\n\n<span class="hljs-keyword">var</span> o = <span class="hljs-built_in">Object</span>.freeze(obj);\n\nassert(<span class="hljs-built_in">Object</span>.isFrozen(obj) === <span class="hljs-literal">true</span>);\n\n<span class="hljs-comment">// \u73b0\u5728\u4efb\u4f55\u4fee\u6539\u64cd\u4f5c\u90fd\u4f1a\u5931\u8d25</span>\nobj.foo = <span class="hljs-string">"quux"</span>; <span class="hljs-comment">// \u9759\u9ed8\u5931\u8d25</span>\nobj.quaxxor = <span class="hljs-string">"the friendly duck"</span>; <span class="hljs-comment">// \u9759\u9ed8\u5931\u8d25,\u5e76\u6ca1\u6709\u6210\u529f\u6dfb\u52a0\u4e0a\u65b0\u7684\u5c5e\u6027</span>\n\n<span class="hljs-comment">// ...\u5728\u4e25\u683c\u6a21\u5f0f\u4e2d\u4f1a\u629b\u51faTypeError\u5f02\u5e38</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fail</span>(<span class="hljs-params"></span>)</span>{\n<span class="hljs-meta">  "use strict"</span>;\n  obj.foo = <span class="hljs-string">"sparky"</span>; <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span>\n  <span class="hljs-keyword">delete</span> obj.quaxxor; <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span>\n  obj.sparky = <span class="hljs-string">"arf"</span>; <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span>\n}\n\nfail();\n\n<span class="hljs-comment">// \u4f7f\u7528Object.defineProperty\u65b9\u6cd5\u540c\u6837\u4f1a\u629b\u51faTypeError\u5f02\u5e38</span>\n<span class="hljs-built_in">Object</span>.defineProperty(obj, <span class="hljs-string">"ohai"</span>, { <span class="hljs-attr">value</span>: <span class="hljs-number">17</span> }); <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span>\n<span class="hljs-built_in">Object</span>.defineProperty(obj, <span class="hljs-string">"foo"</span>, { <span class="hljs-attr">value</span>: <span class="hljs-string">"eit"</span> }); <span class="hljs-comment">// \u629b\u51faTypeError\u5f02\u5e38</span></code></pre>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u4e00\u4e2a\u51bb\u7ed3\u5bf9\u8c61\u4e2d\u7684\u975e\u51bb\u7ed3\u5bf9\u8c61\u662f\u53ef\u4ee5\u88ab\u4fee\u6539\u7684\uff08\u6d45\u51bb\u7ed3\uff09\u3002</p>\n<pre><code class="language-javascript">obj = {\n  <span class="hljs-type">internal</span> : {}\n};\n\n<span class="hljs-keyword">Object</span>.<span class="hljs-keyword">freeze</span>(obj);\nobj.internal.a = "aValue";\n\nobj.internal.a // "aValue"\n\n// \u60f3\u8ba9\u4e00\u4e2a\u5bf9\u8c61\u53d8\u7684\u5b8c\u5168\u51bb\u7ed3,\u51bb\u7ed3\u6240\u6709\u5bf9\u8c61\u4e2d\u7684\u5bf9\u8c61,\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u51fd\u6570.\n\n<span class="hljs-keyword">function</span> deepFreeze (o) {\n  var prop, propKey;\n  <span class="hljs-keyword">Object</span>.<span class="hljs-keyword">freeze</span>(o); // \u9996\u5148\u51bb\u7ed3\u7b2c\u4e00\u5c42\u5bf9\u8c61.\n  <span class="hljs-keyword">for</span> (propKey <span class="hljs-keyword">in</span> o) {\n    prop = o[propKey];\n    <span class="hljs-keyword">if</span> (!o.hasOwnProperty(propKey) || !(typeof prop === "object") || <span class="hljs-keyword">Object</span>.isFrozen(prop)) {\n      // \u8df3\u8fc7\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\u548c\u5df2\u51bb\u7ed3\u7684\u5bf9\u8c61.\n      <span class="hljs-keyword">continue</span>;\n    }\n\n    deepFreeze(prop); //\u9012\u5f52\u8c03\u7528.\n  }\n}\n\nobj2 = {\n  <span class="hljs-type">internal</span> : {}\n};\n\ndeepFreeze(obj2);\nobj2.internal.a = "anotherValue";\nobj2.internal.a; // undefined</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);