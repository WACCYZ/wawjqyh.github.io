(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[132],{PKAF:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">en</a></p>\n<h1 id="arrayprototypepush">Array.prototype.push()</h1>\n<p>push() \u65b9\u6cd5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u672b\u5c3e\uff0c\u5e76\u8fd4\u56de\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002</p>\n<pre><code class="language-javascript">var numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];\nnumbers.push(<span class="hljs-number">4</span>);\n\nconsole.log(numbers);\n<span class="hljs-comment">// [1, 2, 3, 4]</span>\n\nnumbers.push(<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>);\n\nconsole.log(numbers);\n<span class="hljs-comment">// [1, 2, 3, 4, 5, 6, 7]</span></code></pre>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">arr</span><span class="hljs-selector-class">.push</span>(<span class="hljs-selector-tag">element1</span>, ..., <span class="hljs-selector-tag">elementN</span>)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>elementN</code> \u88ab\u6dfb\u52a0\u5230\u6570\u7ec4\u672b\u5c3e\u7684\u5143\u7d20\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u5f53\u8c03\u7528\u8be5\u65b9\u6cd5\u65f6\uff0c\u65b0\u7684 length \u5c5e\u6027\u503c\u5c06\u88ab\u8fd4\u56de\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>push\u65b9\u6cd5\u5c06\u503c\u9644\u52a0\u5230\u6570\u7ec4\u4e2d\u3002</p>\n<p>push \u65b9\u6cd5\u6709\u610f\u5177\u6709\u901a\u7528\u6027\u3002\u8be5\u65b9\u6cd5\u548c call() \u6216 apply() \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u53ef\u5e94\u7528\u5728\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\u4e0a\u3002push \u65b9\u6cd5\u6839\u636e length \u5c5e\u6027\u6765\u51b3\n\u5b9a\u4ece\u54ea\u91cc\u5f00\u59cb\u63d2\u5165\u7ed9\u5b9a\u7684\u503c\u3002\u5982\u679c length \u4e0d\u80fd\u88ab\u8f6c\u6210\u4e00\u4e2a\u6570\u503c\uff0c\u5219\u63d2\u5165\u7684\u5143\u7d20\u7d22\u5f15\u4e3a 0\uff0c\u5305\u62ec length \u4e0d\u5b58\u5728\u65f6\u3002\u5f53 length \u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u4f1a\u521b\u5efa\u5b83\u3002</p>\n<p>\u552f\u4e00\u7684\u539f\u751f\u7c7b\u6570\u7ec4\uff08array-like\uff09\u5bf9\u8c61\u662f Strings\uff0c\u5c3d\u7ba1\u5982\u6b64\uff0c\u5b83\u4eec\u5e76\u4e0d\u9002\u7528\u8be5\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b57\u7b26\u4e32\u662f\u4e0d\u53ef\u6539\u53d8\u7684\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u6dfb\u52a0\u5143\u7d20\u5230\u6570\u7ec4">\u6dfb\u52a0\u5143\u7d20\u5230\u6570\u7ec4</h3>\n<p>\u4e0b\u9762\u7684\u4ee3\u7801\u521b\u5efa\u4e86 sports \u6570\u7ec4\uff0c\u5305\u542b\u4e24\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u53c8\u628a\u4e24\u4e2a\u5143\u7d20\u6dfb\u52a0\u7ed9\u5b83\u3002total \u53d8\u91cf\u4e3a\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u503c\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">var</span> sports = [<span class="hljs-string">"soccer"</span>, <span class="hljs-string">"baseball"</span>];\n<span class="hljs-built_in">var</span> total = sports.<span class="hljs-built_in">push</span>(<span class="hljs-string">"football"</span>, <span class="hljs-string">"swimming"</span>);\n\nconsole.<span class="hljs-built_in">log</span>(sports);\n// [<span class="hljs-string">"soccer"</span>, <span class="hljs-string">"baseball"</span>, <span class="hljs-string">"football"</span>, <span class="hljs-string">"swimming"</span>]\n\nconsole.<span class="hljs-built_in">log</span>(total);\n// <span class="hljs-number">4</span></code></pre>\n<h3 id="\u5408\u5e76\u4e24\u4e2a\u6570\u7ec4">\u5408\u5e76\u4e24\u4e2a\u6570\u7ec4</h3>\n<p>\u8be5\u793a\u4f8b\u4f7f\u7528 apply() \u6dfb\u52a0\u7b2c\u4e8c\u4e2a\u6570\u7ec4\u7684\u6240\u6709\u5143\u7d20\u3002</p>\n<pre><code class="language-javascript">var vegetables = [<span class="hljs-string">\'parsnip\'</span>, <span class="hljs-string">\'potato\'</span>];\nvar moreVegs = [<span class="hljs-string">\'celery\'</span>, <span class="hljs-string">\'beetroot\'</span>];\n\n<span class="hljs-regexp">//</span> \u5c06\u7b2c\u4e8c\u4e2a\u6570\u7ec4\u878d\u5408\u8fdb\u7b2c\u4e00\u4e2a\u6570\u7ec4\n<span class="hljs-regexp">//</span> \u76f8\u5f53\u4e8e vegetables.push(<span class="hljs-string">\'celery\'</span>, <span class="hljs-string">\'beetroot\'</span>);\nArray.prototype.push.apply(vegetables, moreVegs);\n\nconsole.log(vegetables);\n<span class="hljs-regexp">//</span> [<span class="hljs-string">\'parsnip\'</span>, <span class="hljs-string">\'potato\'</span>, <span class="hljs-string">\'celery\'</span>, <span class="hljs-string">\'beetroot\'</span>]</code></pre>\n<h3 id="\u50cf\u6570\u7ec4\u4e00\u6837\u4f7f\u7528\u5bf9\u8c61">\u50cf\u6570\u7ec4\u4e00\u6837\u4f7f\u7528\u5bf9\u8c61</h3>\n<p>\u5982\u4e0a\u6240\u8ff0\uff0cpush \u662f\u7279\u610f\u8bbe\u8ba1\u4e3a\u901a\u7528\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u83b7\u5f97\u4fbf\u5229\u3002\u6b63\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u6240\u793a\uff0cArray.prototype.push \u53ef\u4ee5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5de5\u4f5c\u3002\n\u6ce8\u610f\uff0c\u6211\u4eec\u6ca1\u6709\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\u6765\u5b58\u50a8\u5bf9\u8c61\u7684\u96c6\u5408\u3002 \u76f8\u53cd\uff0c\u6211\u4eec\u5c06\u8be5\u96c6\u5408\u5b58\u50a8\u5728\u5bf9\u8c61\u672c\u8eab\u4e0a\uff0c\u5e76\u4f7f\u7528\u5728 Array.prototype.push \u4e0a\u4f7f\u7528\u7684 call\n\u6765\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u4f7f\u5176\u8ba4\u4e3a\u6211\u4eec\u6b63\u5728\u5904\u7406\u6570\u7ec4\uff0c\u800c\u5b83\u53ea\u662f\u50cf\u5e73\u5e38\u4e00\u6837\u8fd0\u4f5c\uff0c\u8fd9\u8981\u611f\u8c22 JavaScript \u5141\u8bb8\u6211\u4eec\u5efa\u7acb\u4efb\u610f\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">var</span> obj = {\n    <span class="hljs-built_in">length</span>: <span class="hljs-number">0</span>,\n\n    addElem: function addElem (<span class="hljs-built_in">elem</span>) {\n        // obj.<span class="hljs-built_in">length</span> <span class="hljs-built_in">is</span> automatically incremented\n        // <span class="hljs-built_in">every</span> <span class="hljs-built_in">time</span> an element <span class="hljs-built_in">is</span> added.\n        [].<span class="hljs-built_in">push</span>.call(this, <span class="hljs-built_in">elem</span>);\n    }\n};\n\n// Let\'s add <span class="hljs-built_in">some</span> empty objects just to illustrate.\nobj.addElem({});\nobj.addElem({});\nconsole.<span class="hljs-built_in">log</span>(obj.<span class="hljs-built_in">length</span>);\n// \u2192 <span class="hljs-number">2</span></code></pre>\n<p><code>\u6ce8\u610f\uff0c\u5c3d\u7ba1 obj \u4e0d\u662f\u6570\u7ec4\uff0c\u4f46\u662f push \u65b9\u6cd5\u6210\u529f\u5730\u4f7f obj \u7684 length \u5c5e\u6027\u589e\u957f\u4e86\uff0c\u5c31\u50cf\u6211\u4eec\u5904\u7406\u4e00\u4e2a\u5b9e\u9645\u7684\u6570\u7ec4\u4e00\u6837\u3002</code></p>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);