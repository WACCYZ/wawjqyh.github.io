(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112],{"+U8o":function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" target="_blank">en</a></p>\n<h1 id="dateprototypetolocaledatestring">Date.prototype.toLocaleDateString()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>toLocaleDateString() \u65b9\u6cd5\u8fd4\u56de\u8be5\u65e5\u671f\u5bf9\u8c61\u65e5\u671f\u90e8\u5206\u7684\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u683c\u5f0f\u56e0\u4e0d\u540c\u8bed\u8a00\u800c\u4e0d\u540c\u3002\u65b0\u589e\u7684\u53c2\u6570 locales \u548c options \u4f7f\n\u7a0b\u5e8f\u80fd\u591f\u6307\u5b9a\u4f7f\u7528\u54ea\u79cd\u8bed\u8a00\u683c\u5f0f\u5316\u89c4\u5219\uff0c\u5141\u8bb8\u5b9a\u5236\u8be5\u65b9\u6cd5\u7684\u8868\u73b0\uff08behavior\uff09\u3002\u5728\u65e7\u7248\u672c\u6d4f\u89c8\u5668\u4e2d\uff0c locales \u548c options \u53c2\u6570\u88ab\u5ffd\u7565\uff0c\n\u4f7f\u7528\u7684\u8bed\u8a00\u73af\u5883\u548c\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u683c\u5f0f\u662f\u5404\u81ea\u72ec\u7acb\u5b9e\u73b0\u7684\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">dateObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString([<span class="hljs-params">locales</span> [, <span class="hljs-params">options</span>]])</span></code></pre>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<h3 id="\u4f7f\u7528tolocaledatestring">\u4f7f\u7528toLocaleDateString</h3>\n<p>\u6ca1\u6709\u6307\u5b9a\u8bed\u8a00\u73af\u5883\uff08locale\uff09\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a\u4f7f\u7528\u9ed8\u8ba4\u8bed\u8a00\u73af\u5883\u548c\u683c\u5f0f\u8bbe\u7f6e\uff08options\uff09\u7684\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u3002</p>\n<pre><code class="language-javascript">var <span class="hljs-type">date</span> = <span class="hljs-built_in">new</span> <span class="hljs-type">Date</span>(<span class="hljs-type">Date</span>.UTC(<span class="hljs-number">2012</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">3</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>));\n\n// toLocaleDateString <span class="hljs-keyword">without</span> arguments <span class="hljs-keyword">depends</span> <span class="hljs-keyword">on</span> the implementation,\n// the <span class="hljs-keyword">default</span> locale, <span class="hljs-keyword">and</span> the <span class="hljs-keyword">default</span> <span class="hljs-type">time</span> <span class="hljs-type">zone</span>\n<span class="hljs-type">date</span>.toLocaleDateString();\n// \u2192 "12/11/2012" <span class="hljs-keyword">if</span> run <span class="hljs-keyword">in</span> en-US locale <span class="hljs-type">with time zone</span> America/Los_Angeles</code></pre>\n<h3 id="\u68c0\u6d4b-locales-\u548c-options-\u53c2\u6570\u652f\u6301\u60c5\u51b5">\u68c0\u6d4b locales \u548c options \u53c2\u6570\u652f\u6301\u60c5\u51b5</h3>\n<p>locales \u548c options \u53c2\u6570\u4e0d\u662f\u6240\u6709\u7684\u6d4f\u89c8\u5668\u90fd\u652f\u6301\u3002\u4e3a\u4e86\u68c0\u6d4b\u4e00\u79cd\u5b9e\u73b0\u73af\u5883\uff08implementation\uff09\u662f\u5426\u652f\u6301\u5b83\u4eec\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0d\u5408\u6cd5\u7684\u8bed\u8a00\u6807\u7b7e\uff0c\n\u5982\u679c\u5b9e\u73b0\u73af\u5883\u652f\u6301\u8be5\u53c2\u6570\uff0c\u5219\u4f1a\u629b\u51fa\u4e00\u4e2a RangeError \u5f02\u5e38\uff0c\u53cd\u4e4b\u4f1a\u5ffd\u7565\u53c2\u6570\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toLocaleDateStringSupportsLocales</span>(<span class="hljs-params"></span>) </span>{\n    <span class="hljs-keyword">try</span> {\n        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().toLocaleDateString(<span class="hljs-string">"i"</span>);\n    } <span class="hljs-keyword">catch</span> (e) {\n        <span class="hljs-keyword">return</span> e\u200b.name === <span class="hljs-string">"RangeError"</span>;\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n}</code></pre>\n<h3 id="\u4f7f\u7528locales">\u4f7f\u7528locales</h3>\n<p>\u4e0b\u4f8b\u5c55\u793a\u4e86\u672c\u5730\u5316\u65e5\u671f\u683c\u5f0f\u7684\u4e00\u4e9b\u53d8\u5316\u3002\u4e3a\u4e86\u5728\u5e94\u7528\u7684\u7528\u6237\u754c\u9762\u5f97\u5230\u67d0\u79cd\u8bed\u8a00\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u5fc5\u987b\u786e\u4fdd\u4f7f\u7528 locales \u53c2\u6570\u6307\u5b9a\u4e86\u8be5\u8bed\u8a00\uff08\u53ef\n\u80fd\u8fd8\u9700\u8981\u8bbe\u7f6e\u67d0\u4e9b\u56de\u9000\u8bed\u8a00\uff09\u3002</p>\n<pre><code class="language-javascript">var date = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Date(Date.UTC(2012, 11, 20, 3, 0, 0)</span>);\n\n<span class="hljs-comment">// formats below assume the local time zone of the locale;</span>\n<span class="hljs-comment">// America/Los_Angeles for the US</span>\n\n<span class="hljs-comment">// US English uses month-day-year order</span>\nalert(date.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString(<span class="hljs-string">"en-US"</span>)</span>);\n<span class="hljs-comment">// \u2192 "12/19/2012"</span>\n\n<span class="hljs-comment">// British English uses day-month-year order</span>\nalert(date.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString(<span class="hljs-string">"en-GB"</span>)</span>);\n<span class="hljs-comment">// \u2192 "20/12/2012"</span>\n\n<span class="hljs-comment">// Korean uses year-month-day order</span>\nalert(date.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString(<span class="hljs-string">"ko-KR"</span>)</span>);\n<span class="hljs-comment">// \u2192 "2012. 12. 20."</span>\n\n<span class="hljs-comment">// Arabic in most Arabic speaking countries uses real Arabic digits</span>\nalert(date.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString(<span class="hljs-string">"ar-EG"</span>)</span>);\n<span class="hljs-comment">// \u2192 "\u0662\u0660\u200f/\u0661\u0662\u200f/\u0662\u0660\u0661\u0662"</span>\n\n<span class="hljs-comment">// for Japanese, applications may want to use the Japanese calendar,</span>\n<span class="hljs-comment">// where 2012 was the year 24 of the Heisei era</span>\nalert(date.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString(<span class="hljs-string">"ja-JP-u-ca-japanese"</span>)</span>);\n<span class="hljs-comment">// \u2192 "24/12/20"</span>\n\n<span class="hljs-comment">// when requesting a language that may not be supported, such as</span>\n<span class="hljs-comment">// Balinese, include a fallback language, in this case Indonesian</span>\nalert(date.<span class="hljs-keyword">to</span><span class="hljs-constructor">LocaleDateString([<span class="hljs-string">"ban"</span>, <span class="hljs-string">"id"</span>])</span>);\n<span class="hljs-comment">// \u2192 "20/12/2012"</span></code></pre>\n<h3 id="\u4f7f\u7528options">\u4f7f\u7528options</h3>\n<p>\u53ef\u4ee5\u4f7f\u7528 options \u53c2\u6570\u6765\u81ea\u5b9a\u4e49 toLocaleDateString \u65b9\u6cd5\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u3002</p>\n<pre><code class="language-javascript">var <span class="hljs-type">date</span> = <span class="hljs-built_in">new</span> <span class="hljs-type">Date</span>(<span class="hljs-type">Date</span>.UTC(<span class="hljs-number">2012</span>, <span class="hljs-number">11</span>, <span class="hljs-number">20</span>, <span class="hljs-number">3</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>));\n\n// request a weekday along <span class="hljs-keyword">with</span> a long <span class="hljs-type">date</span>\nvar <span class="hljs-keyword">options</span> = {weekday: "long", year: "numeric", month: "long", day: "numeric"};\nalert(<span class="hljs-type">date</span>.toLocaleDateString("de-DE", <span class="hljs-keyword">options</span>));\n// \u2192 "Donnerstag, 20. Dezember 2012"\n\n// an application may want <span class="hljs-keyword">to</span> use UTC <span class="hljs-keyword">and</span> make that visible\n<span class="hljs-keyword">options</span>.timeZone = "UTC";\n<span class="hljs-keyword">options</span>.timeZoneName = "short";\nalert(<span class="hljs-type">date</span>.toLocaleDateString("en-US", <span class="hljs-keyword">options</span>));\n// \u2192 "Thursday, December 20, 2012, GMT"</code></pre>\n<h2 id="\u6027\u80fd">\u6027\u80fd</h2>\n<p>\u5f53\u683c\u5f0f\u5316\u5927\u91cf\u65e5\u671f\u65f6\uff0c\u6700\u597d\u521b\u5efa\u4e00\u4e2a Intl.DateTimeFormat \u5bf9\u8c61\uff0c\u7136\u540e\u4f7f\u7528\u8be5\u5bf9\u8c61 format \u5c5e\u6027\u63d0\u4f9b\u7684\u65b9\u6cd5\u3002</p>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);