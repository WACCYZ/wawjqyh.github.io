(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[119],{qYJJ:function(a,s){a.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">en</a></p>\n<h1 id="arrayfrom">Array.from()</h1>\n<p>\u65b9\u6cd5\u4ece\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u6216\u53ef\u8fed\u4ee3\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u5b9e\u4f8b\u3002</p>\n<pre><code class="language-javascript">const bar = ["a", "b", "c"];\n<span class="hljs-keyword">Array</span>.<span class="hljs-keyword">from</span>(bar);\n// ["a", "b", "c"]\n\n<span class="hljs-keyword">Array</span>.<span class="hljs-keyword">from</span>(<span class="hljs-string">\'foo\'</span>);\n// ["f", "o", "o"]</code></pre>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<p><code>Array.from(arrayLike[, mapFn[, thisArg]])</code></p>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><p><code>arrayLike</code> \u60f3\u8981\u8f6c\u6362\u6210\u771f\u5b9e\u6570\u7ec4\u7684\u7c7b\u6570\u7ec4\u5bf9\u8c61\u6216\u53ef\u904d\u5386\u5bf9\u8c61\u3002</p>\n</li>\n<li><p><code>mapFn \u53ef\u9009</code> \u53ef\u9009\u53c2\u6570\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u8be5\u53c2\u6570\uff0c\u5219\u6700\u540e\u751f\u6210\u7684\u6570\u7ec4\u4f1a\u7ecf\u8fc7\u8be5\u51fd\u6570\u7684\u52a0\u5de5\u5904\u7406\u540e\u518d\u8fd4\u56de\u3002</p>\n</li>\n<li><p><code>thisArg \u53ef\u9009</code> \u53ef\u9009\u53c2\u6570\uff0c\u6267\u884c mapFn \u51fd\u6570\u65f6 this \u7684\u503c\u3002</p>\n</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a\u65b0\u7684 <code>Array</code> \u5b9e\u4f8b</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>Array.from() \u5141\u8bb8\u4f60\u4ece\u4e0b\u9762\u4e24\u8005\u6765\u521b\u5efa\u6570\u7ec4\uff1a</p>\n<ul>\n<li>\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff08\u62e5\u6709\u4e00\u4e2a length \u5c5e\u6027\u548c\u82e5\u5e72\u7d22\u5f15\u5c5e\u6027\u7684\u4efb\u610f\u5bf9\u8c61\uff09</li>\n<li>\u53ef\u904d\u5386\u5bf9\u8c61\uff08\u4f60\u53ef\u4ee5\u4ece\u5b83\u8eab\u4e0a\u8fed\u4ee3\u51fa\u82e5\u5e72\u4e2a\u5143\u7d20\u7684\u5bf9\u8c61\uff0c\u6bd4\u5982\u6709 Map \u548c Set \u7b49\uff09</li>\n</ul>\n<p><code>Array.from()</code> \u65b9\u6cd5\u6709\u4e00\u4e2a\u53ef\u9009\u53c2\u6570 <code>mapFn</code>\uff0c\u8ba9\u4f60\u53ef\u4ee5\u5728\u6700\u540e\u751f\u6210\u7684\u6570\u7ec4\u4e0a\u518d\u6267\u884c\u4e00\u6b21 <code>map</code> \u65b9\u6cd5\u540e\u518d\u8fd4\u56de\u3002\u4e5f\u5c31\u662f\u8bf4 <code>Array.from(obj, mapFn, thisArg)</code>\n\u5c31\u76f8\u5f53\u4e8e <code>Array.from(obj).map(mapFn, thisArg)</code>, \u9664\u975e\u521b\u5efa\u7684\u4e0d\u662f\u53ef\u7528\u7684\u4e2d\u95f4\u6570\u7ec4\u3002 \u8fd9\u5bf9\u4e00\u4e9b\u6570\u7ec4\u7684\u5b50\u7c7b,\u5982  <code>typed arrays</code> \u6765\u8bf4\u5f88\u91cd\u8981,\n\u56e0\u4e3a\u4e2d\u95f4\u6570\u7ec4\u7684\u503c\u5728\u8c03\u7528 <code>map()</code> \u65f6\u9700\u8981\u662f\u9002\u5f53\u7684\u7c7b\u578b\u3002</p>\n<p>from() \u7684 length \u5c5e\u6027\u4e3a 1 \u3002</p>\n<p>\u5728 <code>ES2015</code> \u4e2d\uff0c <code>Class</code> \u8bed\u6cd5\u5141\u8bb8\u6211\u4eec\u4e3a\u5185\u7f6e\u7c7b\u578b\uff08\u6bd4\u5982 Array\uff09\u548c\u81ea\u5b9a\u4e49\u7c7b\u65b0\u5efa\u5b50\u7c7b\uff08\u6bd4\u5982\u53eb SubArray\uff09\u3002\n\u8fd9\u4e9b\u5b50\u7c7b\u4e5f\u4f1a\u7ee7\u627f\u7236\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u6bd4\u5982 SubArray.from()\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u540e\u4f1a\u8fd4\u56de\u5b50\u7c7b SubArray \u7684\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f Array \u7684\u5b9e\u4f8b\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="array-from-a-string">Array from a String</h3>\n<pre><code class="language-javascript"><span class="hljs-keyword">Array</span>.<span class="hljs-keyword">from</span>(<span class="hljs-string">\'foo\'</span>);\n// ["f", "o", "o"]</code></pre>\n<h3 id="array-from-a-set">Array from a Set</h3>\n<pre><code class="language-javascript">var s = <span class="hljs-built_in">new</span> <span class="hljs-keyword">Set</span>([<span class="hljs-string">\'foo\'</span>, <span class="hljs-keyword">window</span>]);\n<span class="hljs-keyword">Array</span>.<span class="hljs-keyword">from</span>(s);\n// ["foo", <span class="hljs-keyword">window</span>]</code></pre>\n<h3 id="array-from-a-map">Array from a Map</h3>\n<pre><code class="language-javascript">var m = new Map(<span class="hljs-string">[[1, 2], [2, 4], [4, 8]]</span>);\nArray.from(m);\n// <span class="hljs-string">[[1, 2], [2, 4], [4, 8]]</span></code></pre>\n<h3 id="array-from-an-array-like-object-arguments">Array from an Array-like object (arguments)</h3>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Array</span>.from(<span class="hljs-built_in">arguments</span>);\n}\n\nf(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);\n\n<span class="hljs-comment">// [1, 2, 3]</span></code></pre>\n<h3 id="using-arrow-functions-and-arrayfrom">Using arrow functions and Array.from</h3>\n<pre><code class="language-javascript"><span class="hljs-comment">// Using an arrow function as the map function to</span>\n<span class="hljs-comment">// manipulate the elements</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>from(<span class="hljs-literal">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]</span>,<span class="hljs-function"> <span class="hljs-params">x</span> =&gt;</span> x + x);\n<span class="hljs-comment">// [2, 4, 6]</span>\n\n<span class="hljs-comment">// Generate a sequence of numbers</span>\n<span class="hljs-comment">// Since the array is initialized with `undefined` on each position,</span>\n<span class="hljs-comment">// the value of `v` below will be `undefined`</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>from({length: <span class="hljs-number">5</span>},<span class="hljs-function"> (<span class="hljs-params">v</span>, <span class="hljs-params">i</span>) =&gt;</span> i);\n<span class="hljs-comment">// [0, 1, 2, 3, 4]</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript Latest Draft (ECMA-262)</td>\n<td align="left">Draft</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);