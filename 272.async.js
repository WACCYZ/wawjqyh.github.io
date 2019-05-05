(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[272],{y75E:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" target="_blank">en</a></p>\n<h1 id="stringprototypeindexof">String.prototype.indexOf()</h1>\n<p>indexOf() \u65b9\u6cd5\u8fd4\u56de\u8c03\u7528  String \u5bf9\u8c61\u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u6307\u5b9a\u503c\u7684\u7d22\u5f15\uff0c\u5f00\u59cb\u5728 fromIndex\u8fdb\u884c\u641c\u7d22\u3002</p>\n<p>\u5982\u679c\u672a\u627e\u5230\u8be5\u503c\uff0c\u5219\u8fd4\u56de-1\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">str.index<span class="hljs-constructor">Of(<span class="hljs-params">searchValue</span>[, <span class="hljs-params">fromIndex</span>])</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>searchValue</code> \u4e00\u4e2a\u5b57\u7b26\u4e32\u8868\u793a\u88ab\u67e5\u627e\u7684\u503c</li>\n<li><code>fromIndex \u53ef\u9009</code> \u8868\u793a\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u5b57\u7b26\u4e32\u4e2d\u5f00\u59cb\u67e5\u627e\u7684\u4f4d\u7f6e\u3002\u53ef\u4ee5\u662f\u4efb\u610f\u6574\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a 0\u3002\u5982\u679c fromIndex &lt; 0 \u5219\u67e5\u627e\u6574\u4e2a\u5b57\u7b26\n\u4e32\uff08\u5982\u540c\u4f20\u8fdb\u4e86 0\uff09\u3002\u5982\u679c fromIndex &gt;= str.length\uff0c\u5219\u8be5\u65b9\u6cd5\u8fd4\u56de -1\uff0c\u9664\u975e\u88ab\u67e5\u627e\u7684\u5b57\u7b26\u4e32\u662f\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\uff0c\u6b64\u65f6\u8fd4\u56de str.length\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u6307\u5b9a\u503c\u7684\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u7d22\u5f15; \u5982\u679c\u6ca1\u6709\u627e\u5230 -1\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u88ab\u4ece\u5de6\u5411\u53f3\u7d22\u5f15\u3002\u9996\u5b57\u7b26\u7684\u7d22\u5f15\uff08index\uff09\u4e3a 0\uff0c\u5b57\u7b26\u4e32 stringName \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7684\u7d22\u5f15\u662f stringName.length - 1\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">"Blue"</span>)</span>;     <span class="hljs-comment">// returns  0</span>\n<span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">"Blute"</span>)</span>;    <span class="hljs-comment">// returns -1</span>\n<span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">"Whale"</span>, 0)</span>; <span class="hljs-comment">// returns  5</span>\n<span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">"Whale"</span>, 5)</span>; <span class="hljs-comment">// returns  5</span>\n<span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">""</span>, 9)</span>;      <span class="hljs-comment">// returns  9</span>\n<span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">""</span>, 10)</span>;     <span class="hljs-comment">// returns 10</span>\n<span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">""</span>, 11)</span>;     <span class="hljs-comment">// returns 10</span></code></pre>\n<h3 id="\u533a\u5206\u5927\u5c0f\u5199">\u533a\u5206\u5927\u5c0f\u5199</h3>\n<p>indexOf \u65b9\u6cd5\u533a\u5206\u5927\u5c0f\u5199\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u8fd4\u56de -1\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-string">"Blue Whale"</span>.index<span class="hljs-constructor">Of(<span class="hljs-string">"blue"</span>)</span> <span class="hljs-comment">// returns -1</span></code></pre>\n<h3 id="\u68c0\u6d4b\u662f\u5426\u5b58\u5728\u67d0\u5b57\u7b26\u4e32">\u68c0\u6d4b\u662f\u5426\u5b58\u5728\u67d0\u5b57\u7b26\u4e32</h3>\n<p>\u5f53\u68c0\u6d4b\u67d0\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u65f6\uff0c\u53ef\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-string">"Blue Whale"</span>.indexOf(<span class="hljs-string">"Blue"</span>) !== -<span class="hljs-number">1</span>; <span class="hljs-regexp">//</span> <span class="hljs-keyword">true</span>\n<span class="hljs-string">"Blue Whale"</span>.indexOf(<span class="hljs-string">"Bloe"</span>) !== -<span class="hljs-number">1</span>; <span class="hljs-regexp">//</span> <span class="hljs-keyword">false</span></code></pre>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f7f\u7528indexof-\u548c-lastindexof">\u4f7f\u7528indexOf() \u548c lastIndexOf()</h3>\n<p>\u4e0b\u4f8b\u4f7f\u7528 indexOf() \u548c lastIndexOf() \u65b9\u6cd5\u5b9a\u4f4d\u5b57\u7b26\u4e32\u4e2d &quot;Brave new world&quot; \u7684\u503c\u3002</p>\n<pre><code class="language-javascript">var anyString = "Brave new world";\n\nconsole.log("The index of the first w from the beginning is " + anyString.indexOf("w"));\n// logs 8\nconsole.log("The index of the first w from the <span class="hljs-keyword">end</span> <span class="hljs-keyword">is</span> <span class="hljs-string">" + anyString.lastIndexOf("</span>w<span class="hljs-string">"));\n// logs 10\n\nconsole.log("</span>The <span class="hljs-keyword">index</span> <span class="hljs-keyword">of</span> <span class="hljs-string">\'new\'</span> <span class="hljs-keyword">from</span> the <span class="hljs-keyword">beginning</span> <span class="hljs-keyword">is</span> <span class="hljs-string">" + anyString.indexOf("</span><span class="hljs-keyword">new</span><span class="hljs-string">"));\n// logs 6\nconsole.log("</span>The <span class="hljs-keyword">index</span> <span class="hljs-keyword">of</span> <span class="hljs-string">\'new\'</span> <span class="hljs-keyword">from</span> the <span class="hljs-keyword">end</span> <span class="hljs-keyword">is</span> <span class="hljs-string">" + anyString.lastIndexOf("</span><span class="hljs-keyword">new</span><span class="hljs-string">"));\n// logs 6</span></code></pre>\n<h3 id="indexof-\u548c\u533a\u5206\u5927\u5c0f\u5199">indexOf \u548c\u533a\u5206\u5927\u5c0f\u5199</h3>\n<p>\u4e0b\u4f8b\u5b9a\u4e49\u4e86\u4e24\u4e2a\u5b57\u7b26\u4e32\u53d8\u91cf\u3002\u4e24\u4e2a\u53d8\u91cf\u5305\u542b\u76f8\u540c\u7684\u5b57\u7b26\u4e32\uff0c\u9664\u4e86\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u4e32\u4e2d\u7684\u67d0\u4e9b\u5b57\u7b26\u4e3a\u5927\u5199\u3002\u7b2c\u4e00\u4e2a log \u65b9\u6cd5\u8f93\u51fa 19\u3002\u4f46\u662f\u7531\u4e8e\nindexOf \u65b9\u6cd5\u533a\u5206\u5927\u5c0f\u5199\uff0c\u56e0\u6b64\u4e0d\u4f1a\u5728 myCapString \u4e2d\u53d1\u73b0\u5b57\u7b26\u4e32 \u201ccheddar&quot;\uff0c\u7ed3\u679c\u7b2c\u4e8c\u4e2a log \u65b9\u6cd5\u8f93\u51fa -1\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> myString    = <span class="hljs-string">"brie, pepper jack, cheddar"</span>;\n<span class="hljs-keyword">var</span> myCapString = <span class="hljs-string">"Brie, Pepper Jack, Cheddar"</span>;\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'myString.indexOf("cheddar") is \'</span> + myString.indexOf(<span class="hljs-string">"cheddar"</span>));\n<span class="hljs-comment">// logs 19</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'myCapString.indexOf("cheddar") is \'</span> + myCapString.indexOf(<span class="hljs-string">"cheddar"</span>));\n<span class="hljs-comment">// logs -1</span></code></pre>\n<h3 id="\u4f7f\u7528-indexof-\u7edf\u8ba1\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u67d0\u4e2a\u5b57\u6bcd\u51fa\u73b0\u7684\u6b21\u6570">\u4f7f\u7528 indexOf \u7edf\u8ba1\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u67d0\u4e2a\u5b57\u6bcd\u51fa\u73b0\u7684\u6b21\u6570</h3>\n<p>\u5728\u4e0b\u4f8b\u4e2d\uff0c\u8bbe\u7f6e\u4e86 count \u6765\u8bb0\u5f55\u5b57\u6bcd e \u5728\u5b57\u7b26\u4e32 str \u4e2d\u51fa\u73b0\u7684\u6b21\u6570\uff1a</p>\n<pre><code class="language-javascript">var <span class="hljs-built_in">str</span> = <span class="hljs-string">\'To be, or not to be, that is the question.\'</span>;\nvar <span class="hljs-built_in">count</span> = <span class="hljs-number">0</span>;\nvar pos = <span class="hljs-built_in">str</span>.indexOf(<span class="hljs-string">\'e\'</span>);\n\n<span class="hljs-keyword">while</span> (pos !== -<span class="hljs-number">1</span>) {\n  <span class="hljs-built_in">count</span>++;\n  pos = <span class="hljs-built_in">str</span>.indexOf(<span class="hljs-string">\'e\'</span>, pos + <span class="hljs-number">1</span>);\n}\n\nconsole.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">count</span>); <span class="hljs-comment">// displays 4</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);