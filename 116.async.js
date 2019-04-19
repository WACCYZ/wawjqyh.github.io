(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116],{"J+tp":function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">en</a></p>\n<h1 id="arrayprototypefind">Array.prototype.find()</h1>\n<p>find() \u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u6ee1\u8db3\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u503c\u3002\u5426\u5219\u8fd4\u56de undefined\u3002</p>\n<pre><code class="language-javascript">function isBigEnough(element) {\n  return element &gt;= <span class="hljs-number">15</span>;\n}\n\n[<span class="hljs-number">12</span>, <span class="hljs-number">5</span>, <span class="hljs-number">8</span>, <span class="hljs-number">130</span>, <span class="hljs-number">44</span>].find(isBigEnough); <span class="hljs-comment">// 130</span></code></pre>\n<p>\u53e6\u8bf7\u53c2\u89c1  findIndex() \u65b9\u6cd5\uff0c\u5b83\u8fd4\u56de\u6570\u7ec4\u4e2d\u627e\u5230\u7684\u5143\u7d20\u7684\u7d22\u5f15\uff0c\u800c\u4e0d\u662f\u5176\u503c\u3002</p>\n<p>\u5982\u679c\u4f60\u9700\u8981\u627e\u5230\u4e00\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\u6216\u8005\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728\u4e8e\u6570\u7ec4\u4e2d\uff0c\u4f7f\u7528Array.prototype.indexOf() \u6216 Array.prototype.includes()\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">arr</span><span class="hljs-selector-class">.find</span>(<span class="hljs-selector-tag">callback</span><span class="hljs-selector-attr">[, thisArg]</span>)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><p><code>callback</code> \u5728\u6570\u7ec4\u6bcf\u4e00\u9879\u4e0a\u6267\u884c\u7684\u51fd\u6570\uff0c\u63a5\u6536 3 \u4e2a\u53c2\u6570\uff1a</p>\n<ul>\n<li><code>element</code> \u5f53\u524d\u904d\u5386\u5230\u7684\u5143\u7d20\u3002</li>\n<li><code>index</code> \u5f53\u524d\u904d\u5386\u5230\u7684\u7d22\u5f15\u3002</li>\n<li><code>array</code> \u6570\u7ec4\u672c\u8eab\u3002</li>\n</ul>\n</li>\n<li><p><code>thisArg \u53ef\u9009</code> \u6307\u5b9a callback \u7684 this \u53c2\u6570\u3002</p>\n</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>find\u65b9\u6cd5\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u9879\u5143\u7d20\u6267\u884c\u4e00\u6b21callback \u51fd\u6570\uff0c\u76f4\u81f3\u6709\u4e00\u4e2acallback\u8fd4\u56detrue\u3002\u5f53\u627e\u5230\u4e86\u8fd9\u6837\u4e00\u4e2a\u5143\u7d20\u540e\uff0c\u8be5\u65b9\u6cd5\u4f1a\u7acb\u5373\u8fd4\u56de\n\u8fd9\u4e2a\u5143\u7d20\u7684\u503c\uff0c\u5426\u5219\u8fd4\u56deundefined\u3002\u6ce8\u610fcallback\u51fd\u6570\u53ea\u4f1a\u5728\u5206\u914d\u4e86\u503c\u7684\u6570\u7ec4\u7d22\u5f15\u4e0a\u8c03\u7528\uff0c\u800c\u4e0d\u4f1a\u5728\u5df2\u5220\u9664\u6216\u672a\u5206\u914d\u503c\u7684\u7d22\u5f15\u4e0a\u8c03\u7528\u3002</p>\n<p>\u8c03\u7528callback\u51fd\u6570\u5e26\u67093\u4e2a\u53c2\u6570\uff1a\u5f53\u524d\u5143\u7d20\u7684\u503c\u3001\u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15\uff0c\u4ee5\u53ca\u6570\u7ec4\u672c\u8eab\u3002</p>\n<p>\u5982\u679c\u63d0\u4f9b\u4e86thisArg\u53c2\u6570\uff0c\u90a3\u4e48\u5b83\u5c06\u4f5c\u4e3a\u6bcf\u6b21callback\u51fd\u6570\u6267\u884c\u65f6\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u5426\u5219\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e3aundefined\u3002</p>\n<p>find\u65b9\u6cd5\u4e0d\u4f1a\u6539\u53d8\u6570\u7ec4\u3002</p>\n<p>\u5728\u7b2c\u4e00\u6b21\u8c03\u7528callback\u51fd\u6570\u65f6\u4f1a\u786e\u5b9a\u5143\u7d20\u7684\u7d22\u5f15\u8303\u56f4\uff0c\u56e0\u6b64\u5728find\u65b9\u6cd5\u5f00\u59cb\u6267\u884c\u4e4b\u540e\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u65b0\u5143\u7d20\u5c06\u4e0d\u4f1a\u88abcallback\u51fd\u6570\u8bbf\u95ee\u5230\u3002\n\u5982\u679c\u6570\u7ec4\u4e2d\u4e00\u4e2a\u5c1a\u672a\u88abcallback\u51fd\u6570\u8bbf\u95ee\u5230\u7684\u5143\u7d20\u7684\u503c\u88abcallback\u51fd\u6570\u6240\u6539\u53d8\uff0c\u90a3\u4e48\u5f53callback\u51fd\u6570\u8bbf\u95ee\u5230\u5b83\u65f6\uff0c\u5b83\u7684\u503c\u662f\u5c06\u662f\u6839\u636e\u5b83\u5728\n\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u6240\u8bbf\u95ee\u5230\u7684\u5f53\u524d\u503c\u3002\u88ab\u5220\u9664\u7684\u5143\u7d20\u4e0d\u4f1a\u88ab\u8bbf\u95ee\u5230\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u7528\u5bf9\u8c61\u7684\u5c5e\u6027\u67e5\u627e\u6570\u7ec4\u91cc\u7684\u5bf9\u8c61">\u7528\u5bf9\u8c61\u7684\u5c5e\u6027\u67e5\u627e\u6570\u7ec4\u91cc\u7684\u5bf9\u8c61</h3>\n<pre><code class="language-javascript">var inventory = [\n    {<span class="hljs-type">name</span>: <span class="hljs-string">\'apples\'</span>, quantity: <span class="hljs-number">2</span>},\n    {<span class="hljs-type">name</span>: <span class="hljs-string">\'bananas\'</span>, quantity: <span class="hljs-number">0</span>},\n    {<span class="hljs-type">name</span>: <span class="hljs-string">\'cherries\'</span>, quantity: <span class="hljs-number">5</span>}\n];\n\n<span class="hljs-keyword">function</span> findCherries(fruit) {\n    <span class="hljs-keyword">return</span> fruit.name === <span class="hljs-string">\'cherries\'</span>;\n}\n\nconsole.log(inventory.find(findCherries)); // { <span class="hljs-type">name</span>: <span class="hljs-string">\'cherries\'</span>, quantity: <span class="hljs-number">5</span> }</code></pre>\n<h3 id="\u5bfb\u627e\u6570\u7ec4\u4e2d\u7684\u8d28\u6570">\u5bfb\u627e\u6570\u7ec4\u4e2d\u7684\u8d28\u6570</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4ece\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5bfb\u627e\u8d28\u6570\uff08\u5982\u679c\u627e\u4e0d\u5230\u8d28\u6570\u5219\u8fd4\u56deundefined\uff09</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">function</span> isPrime(element, <span class="hljs-keyword">index</span>, <span class="hljs-keyword">array</span>) {\n  var start = <span class="hljs-number">2</span>;\n  <span class="hljs-keyword">while</span> (<span class="hljs-keyword">start</span> &lt;= Math.sqrt(element)) {\n    <span class="hljs-keyword">if</span> (element % <span class="hljs-keyword">start</span>++ &lt; <span class="hljs-number">1</span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span>;\n    }\n  }\n  <span class="hljs-keyword">return</span> element &gt; <span class="hljs-number">1</span>;\n}\n\nconsole.log([<span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>, <span class="hljs-number">12</span>].find(isPrime)); // undefined, <span class="hljs-keyword">not</span> <span class="hljs-built_in">found</span>\nconsole.log([<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">8</span>, <span class="hljs-number">12</span>].find(isPrime)); // <span class="hljs-number">5</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2017 Draft (ECMA-262)</td>\n<td align="left">Draft</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);