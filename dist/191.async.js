(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[191],{BMy9:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" target="_blank">en</a></p>\n<h1 id="stringprototypelocalecompare">String.prototype.localeCompare()</h1>\n<p>localeCompare() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u6765\u6307\u793a\u4e00\u4e2a\u53c2\u8003\u5b57\u7b26\u4e32\u662f\u5426\u5728\u6392\u5e8f\u987a\u5e8f\u524d\u9762\u6216\u4e4b\u540e\u6216\u4e0e\u7ed9\u5b9a\u5b57\u7b26\u4e32\u76f8\u540c\u3002</p>\n<p>\u65b0\u7684 locales \u3001 options \u53c2\u6570\u80fd\u8ba9\u5e94\u7528\u7a0b\u5e8f\u5b9a\u5236\u51fd\u6570\u7684\u884c\u4e3a\u5373\u6307\u5b9a\u7528\u6765\u6392\u5e8f\u7684\u8bed\u8a00\u3002  locales \u548c options \u53c2\u6570\u662f\u4f9d\u8d56\u4e8e\u5177\u4f53\u5b9e\u73b0\u7684\uff0c\n\u5728\u65e7\u7684\u5b9e\u73b0\u4e2d\u8fd9\u4e24\u4e2a\u53c2\u6570\u662f\u5b8c\u5168\u88ab\u5ffd\u7565\u7684\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">referenceStr.locale<span class="hljs-constructor">Compare(<span class="hljs-params">compareString</span>[, <span class="hljs-params">locales</span>[, <span class="hljs-params">options</span>]])</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<p>\u67e5\u9605\u6d4f\u89c8\u5668\u652f\u6301\u90e8\u5206\u6765\u786e\u5b9a\u54ea\u4e9b\u6d4f\u89c8\u5668\u652f\u6301 locales \u53c2\u6570\u548c options \u53c2\u6570\uff0c \u5728\u529f\u80fd\u68c0\u6d4b\u4e2d\u68c0\u67e5\u5bf9 locales \u3001options \u53c2\u6570\u7684\u652f\u6301\u3002</p>\n<ul>\n<li><code>compareString</code> \u7528\u6765\u6bd4\u8f83\u7684\u5b57\u7b26\u4e32</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u8868\u793a\u662f\u5426 \u5f15\u7528\u5b57\u7b26\u4e32 \u5728\u6392\u5e8f\u4e2d\u4f4d\u4e8e \u6bd4\u8f83\u5b57\u7b26\u4e32 \u7684\u524d\u9762\uff0c\u540e\u9762\uff0c\u6216\u8005\u4e8c\u8005\u76f8\u540c\u3002</p>\n<ul>\n<li>\u5f53 \u5f15\u7528\u5b57\u7b26\u4e32 \u5728 \u6bd4\u8f83\u5b57\u7b26\u4e32 \u524d\u9762\u65f6\u8fd4\u56de -1</li>\n<li>\u5f53 \u5f15\u7528\u5b57\u7b26\u4e32 \u5728 \u6bd4\u8f83\u5b57\u7b26\u4e32 \u540e\u9762\u65f6\u8fd4\u56de 1</li>\n<li>\u76f8\u540c\u4f4d\u7f6e\u65f6\u8fd4\u56de 0</li>\n</ul>\n<p>\u5207\u52ff\u4f9d\u8d56\u4e8e -1 \u6216 1 \u8fd9\u6837\u7279\u5b9a\u7684\u8fd4\u56de\u503c\u3002\u4e0d\u540c\u6d4f\u89c8\u5668\u4e4b\u95f4\uff08\u4ee5\u53ca\u4e0d\u540c\u6d4f\u89c8\u5668\u7248\u672c\u4e4b\u95f4\uff09 \u8fd4\u56de\u7684\u6b63\u8d1f\u6570\u7684\u503c\u5404\u6709\u4e0d\u540c\uff0c\u56e0\u4e3aW3C\u89c4\u8303\u4e2d\u53ea\n\u8981\u6c42\u8fd4\u56de\u503c\u662f\u6b63\u503c\u548c\u8d1f\u503c\uff0c\u800c\u6ca1\u6709\u89c4\u5b9a\u5177\u4f53\u7684\u503c\u3002\u4e00\u4e9b\u6d4f\u89c8\u5668\u53ef\u80fd\u8fd4\u56de-2\u62162\u6216\u5176\u4ed6\u4e00\u4e9b\u8d1f\u7684\u3001\u6b63\u7684\u503c\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f7f\u7528-localecompare">\u4f7f\u7528 localeCompare()</h3>\n<pre><code class="language-javascript">// The letter "a" <span class="hljs-keyword">is</span> <span class="hljs-keyword">before</span> "c" yielding a negative <span class="hljs-keyword">value</span>\n<span class="hljs-string">\'a\'</span>.localeCompare(<span class="hljs-string">\'c\'</span>);\n// <span class="hljs-number">-2</span> <span class="hljs-keyword">or</span> <span class="hljs-number">-1</span> (<span class="hljs-keyword">or</span> <span class="hljs-keyword">some</span> other negative <span class="hljs-keyword">value</span>)\n\n// Alphabetically the word "check" comes <span class="hljs-keyword">after</span> "against" yielding a positive <span class="hljs-keyword">value</span>\n<span class="hljs-string">\'check\'</span>.localeCompare(<span class="hljs-string">\'against\'</span>);\n// <span class="hljs-number">2</span> <span class="hljs-keyword">or</span> <span class="hljs-number">1</span> (<span class="hljs-keyword">or</span> <span class="hljs-keyword">some</span> other positive <span class="hljs-keyword">value</span>)\n\n// "a" <span class="hljs-keyword">and</span> "a" are equivalent yielding a neutral <span class="hljs-keyword">value</span> <span class="hljs-keyword">of</span> zero\n<span class="hljs-string">\'a\'</span>.localeCompare(<span class="hljs-string">\'a\'</span>);\n// <span class="hljs-number">0</span></code></pre>\n<h3 id="\u68c0\u67e5\u6d4f\u89c8\u5668\u5bf9\u6269\u5c55\u53c2\u6570\u7684\u652f\u6301">\u68c0\u67e5\u6d4f\u89c8\u5668\u5bf9\u6269\u5c55\u53c2\u6570\u7684\u652f\u6301</h3>\n<p>locales \u548c options \u53c2\u6570\u8fd8\u6ca1\u6709\u88ab\u6240\u6709\u9605\u89c8\u5668\u6240\u652f\u6301\u3002\u68c0\u67e5\u662f\u5426\u88ab\u652f\u6301\uff0c \u4f7f\u7528 &quot;i&quot; \u53c2\u6570 (a requirement that illegal language\ntags are rejected) \u5224\u65ad\u662f\u5426\u6709\u5f02\u5e38 RangeError\u629b\u51fa:</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">localeCompareSupportsLocales</span><span class="hljs-params">()</span> </span>{\n  <span class="hljs-keyword">try</span> {\n    <span class="hljs-string">\'foo\'</span>.localeCompare\u200b(<span class="hljs-string">\'bar\'</span>, <span class="hljs-string">\'i\'</span>);\n  } <span class="hljs-keyword">catch</span> (e) {\n    <span class="hljs-keyword">return</span> e\u200b.name === <span class="hljs-string">\'RangeError\'</span>;\n  }\n  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n}</code></pre>\n<h3 id="\u4f7f\u7528-locales-\u53c2\u6570">\u4f7f\u7528 locales \u53c2\u6570</h3>\n<p>\u5728\u4e0d\u540c\u7684\u8bed\u8a00\u4e0b localeCompare() \u6240\u63d0\u4f9b\u7684\u7ed3\u679c\u662f\u4e0d\u4e00\u81f4\u7684\u3002 \u4e3a\u4e86\u80fd\u8ba9\u7528\u6237\u5f97\u5230\u6b63\u786e\u7684\u6bd4\u8f83\u503c\uff0c \u901a\u8fc7\u4f7f\u7528 locales \u53c2\u6570\u6765\u63d0\u4f9b\u8981\u6bd4\u8f83\n\u7684\u8bed\u8a00 (and possibly some fallback languages) :</p>\n<pre><code class="language-javascript">console.log(<span class="hljs-string">\'\xe4\'</span>.localeCompare(<span class="hljs-string">\'z\'</span>, <span class="hljs-string">\'de\'</span>)); // a negative <span class="hljs-keyword">value</span>: <span class="hljs-keyword">in</span> German, \xe4 sorts <span class="hljs-keyword">with</span> a\nconsole.log(<span class="hljs-string">\'\xe4\'</span>.localeCompare(<span class="hljs-string">\'z\'</span>, <span class="hljs-string">\'sv\'</span>)); // a positive <span class="hljs-keyword">value</span>: <span class="hljs-keyword">in</span> Swedish, \xe4 sorts <span class="hljs-keyword">after</span> z</code></pre>\n<h3 id="\u4f7f\u7528-options-\u53c2\u6570">\u4f7f\u7528 options \u53c2\u6570</h3>\n<p>localeCompare() \u6240\u63d0\u4f9b\u7684\u7ed3\u679c\u53ef\u4ee5\u901a\u8fc7 options \u53c2\u6570\u6765\u5236\u5b9a:</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// in German, \xe4 has a as the base letter</span>\n<span class="hljs-selector-tag">console</span><span class="hljs-selector-class">.log</span>(<span class="hljs-string">\'\xe4\'</span>.localeCompare(<span class="hljs-string">\'a\'</span>, <span class="hljs-string">\'de\'</span>, { <span class="hljs-attribute">sensitivity</span>: <span class="hljs-string">\'base\'</span> })); <span class="hljs-comment">// 0</span>\n\n<span class="hljs-comment">// in Swedish, \xe4 and a are separate base letters</span>\n<span class="hljs-selector-tag">console</span><span class="hljs-selector-class">.log</span>(<span class="hljs-string">\'\xe4\'</span>.localeCompare(<span class="hljs-string">\'a\'</span>, <span class="hljs-string">\'sv\'</span>, { <span class="hljs-attribute">sensitivity</span>: <span class="hljs-string">\'base\'</span> })); <span class="hljs-comment">// a positive value</span></code></pre>\n<h2 id="\u6027\u80fd\u76f8\u5173">\u6027\u80fd\u76f8\u5173</h2>\n<p>\u5f53\u6bd4\u8f83\u5927\u91cf\u5b57\u7b26\u4e32\u65f6\uff0c \u6bd4\u5982\u6bd4\u8f83\u5927\u91cf\u6570\u7ec4\u65f6\uff0c \u6700\u597d\u521b\u5efa\u4e00\u4e2aIntl.Collator \u5bf9\u8c61\u5e76\u4f7f\u7528compare \u5c5e\u6027\u6240\u63d0\u4f9b\u7684\u51fd\u6570\u3002</p>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);