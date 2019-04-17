(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{qc5Y:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank">en</a></p>\n<h1 id="parseint">parseInt()</h1>\n<p>parseInt() \u51fd\u6570\u89e3\u6790\u4e00\u4e2a\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u57fa\u6570\u7684\u6574\u6570 (\u6570\u5b66\u7cfb\u7edf\u7684\u57fa\u7840)\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<p><code>parseInt(string, radix);</code></p>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>string</code> \u8981\u88ab\u89e3\u6790\u7684\u503c\u3002\u5982\u679c\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5219\u5c06\u5176\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002\u5b57\u7b26\u4e32\u5f00\u5934\u7684\u7a7a\u767d\u7b26\u5c06\u4f1a\u88ab\u5ffd\u7565\u3002</li>\n<li><code>radix</code> \u4e00\u4e2a2\u523036\u4e4b\u95f4\u7684\u6574\u6570\u503c\uff0c\u7528\u4e8e\u6307\u5b9a\u8f6c\u6362\u4e2d\u91c7\u7528\u7684\u57fa\u6570\u3002\u6bd4\u5982\u53c2\u6570&quot;10&quot;\u8868\u793a\u4f7f\u7528\u6211\u4eec\u901a\u5e38\u4f7f\u7528\u7684\u5341\u8fdb\u5236\u6570\u503c\u7cfb\u7edf\u3002\u603b\u662f\u6307\u5b9a\u8be5\n\u53c2\u6570\u53ef\u4ee5\u6d88\u9664\u9605\u8bfb\u8be5\u4ee3\u7801\u65f6\u7684\u56f0\u60d1\u5e76\u4e14\u4fdd\u8bc1\u8f6c\u6362\u7ed3\u679c\u53ef\u9884\u6d4b\u3002\u5f53\u5ffd\u7565\u8be5\u53c2\u6570\u65f6\uff0c\u4e0d\u540c\u7684\u5b9e\u73b0\u73af\u5883\u53ef\u80fd\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u8fd4\u56de\u89e3\u6790\u540e\u7684\u6574\u6570\u503c\u3002 \u5982\u679c\u88ab\u89e3\u6790\u53c2\u6570\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u65e0\u6cd5\u88ab\u8f6c\u5316\u6210\u6570\u503c\u7c7b\u578b\uff0c\u5219\u8fd4\u56de NaN\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>parseInt \u9876\u7ea7\u51fd\u6570\uff0c\u6ca1\u6709\u4e0e\u4efb\u4f55\u5bf9\u8c61\u5173\u8054\u3002</p>\n<p>parseInt \u51fd\u6570\u5c06\u7b2c\u4e00\u4e2a\u53c2\u6570\uff08\u5b57\u7b26\u4e32\uff09\u89e3\u6790\u5e76\u8bd5\u56fe\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6216\u8005NaN\uff08Not a Number\uff09\u3002\u5982\u679c\u7ed3\u679c\u4e0d\u662fNaN\uff0c\u90a3\u4e48\u8fd4\u56de\u503c\u662f\u628a\u7b2c\u4e00\u4e2a\n\u53c2\u6570\u770b\u4f5c\u662fradix\u53c2\u6570\u6307\u5b9a\u7684\u8fdb\u5236\u4e0b\u7684\u6570\uff0c\u7136\u540e\u628a\u5b83\u8f6c\u6362\u6210\u5341\u8fdb\u5236\u7684\u6574\u6570\u3002\u4f8b\u5982\uff1aradix\u53c2\u6570\u4e3a10 \u5c06\u4f1a\u628a\u7b2c\u4e00\u4e2a\u53c2\u6570\u770b\u4f5c\u662f\u4e00\u4e2a\u6570\u7684\u5341\u8fdb\n\u5236\u8868\u793a\uff0c8 \u5bf9\u5e94\u516b\u8fdb\u5236\uff0c16 \u5bf9\u5e94\u5341\u516d\u8fdb\u5236\uff0c\u7b49\u7b49\u3002\u57fa\u6570\u5927\u4e8e 10 \u65f6\uff0c\u7528\u5b57\u6bcd\u8868\u4e2d\u7684\u5b57\u6bcd\u6765\u8868\u793a\u5927\u4e8e 9 \u7684\u6570\u5b57\u3002\u4f8b\u5982\u5341\u516d\u8fdb\u5236\u4e2d\uff0c\u4f7f\u7528\nA \u5230 F\u3002</p>\n<p>\u5982\u679c parseInt \u9047\u5230\u4e86\u4e0d\u5c5e\u4e8eradix\u53c2\u6570\u6240\u6307\u5b9a\u7684\u57fa\u6570\u4e2d\u7684\u5b57\u7b26\u90a3\u4e48\u8be5\u5b57\u7b26\u548c\u5176\u540e\u7684\u5b57\u7b26\u90fd\u5c06\u88ab\u5ffd\u7565\u3002\u63a5\u7740\u8fd4\u56de\u5df2\u7ecf\u89e3\u6790\u7684\u6574\u6570\u90e8\u5206\u3002\nparseInt \u5c06\u622a\u53d6\u6574\u6570\u90e8\u5206\u3002\u5f00\u5934\u548c\u7ed3\u5c3e\u7684\u7a7a\u767d\u7b26\u5141\u8bb8\u5b58\u5728\uff0c\u4f1a\u88ab\u5ffd\u7565\u3002</p>\n<p><strong>\u5728\u6ca1\u6709\u6307\u5b9a\u57fa\u6570\uff0c\u6216\u8005\u57fa\u6570\u4e3a 0 \u7684\u60c5\u51b5\u4e0b\uff0cJavaScript \u4f5c\u5982\u4e0b\u5904\u7406\uff1a</strong></p>\n<ul>\n<li>\u5982\u679c\u5b57\u7b26\u4e32 string \u4ee5&quot;0x&quot;\u6216\u8005&quot;0X&quot;\u5f00\u5934, \u5219\u57fa\u6570\u662f16 (16\u8fdb\u5236).</li>\n<li>\u5982\u679c\u5b57\u7b26\u4e32 string \u4ee5&quot;0&quot;\u5f00\u5934, \u57fa\u6570\u662f8\uff08\u516b\u8fdb\u5236\uff09\u6216\u800510\uff08\u5341\u8fdb\u5236\uff09\uff0c\u90a3\u4e48\u5177\u4f53\u662f\u54ea\u4e2a\u57fa\u6570\u7531\u5b9e\u73b0\u73af\u5883\u51b3\u5b9a\u3002ECMAScript 5 \u89c4\u5b9a\u4f7f\n\u752810\uff0c\u4f46\u662f\u5e76\u4e0d\u662f\u6240\u6709\u7684\u6d4f\u89c8\u5668\u90fd\u9075\u5faa\u8fd9\u4e2a\u89c4\u5b9a\u3002\u56e0\u6b64\uff0c\u6c38\u8fdc\u90fd\u8981\u660e\u786e\u7ed9\u51faradix\u53c2\u6570\u7684\u503c\u3002</li>\n<li>\u5982\u679c\u5b57\u7b26\u4e32 string \u4ee5\u5176\u5b83\u4efb\u4f55\u503c\u5f00\u5934\uff0c\u5219\u57fa\u6570\u662f10 (\u5341\u8fdb\u5236)\u3002</li>\n</ul>\n<p>\u5982\u679c\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e0d\u80fd\u88ab\u8f6c\u6362\u6210\u6570\u5b57\uff0cparseInt\u8fd4\u56deNaN\u3002</p>\n<p>\u7b97\u672f\u4e0a\uff0c NaN \u4e0d\u662f\u4efb\u4f55\u4e00\u4e2a\u8fdb\u5236\u4e0b\u7684\u6570\u3002 \u4f60\u53ef\u4ee5\u8c03\u7528isNaN \u6765\u5224\u65ad parseInt \u662f\u5426\u8fd4\u56de NaN\u3002NaN \u53c2\u4e0e\u7684\u6570\u5b66\u8fd0\u7b97\u5176\u7ed3\u679c\u603b\u662f NaN\u3002</p>\n<p>\u5c06\u6574\u578b\u6570\u503c\u4ee5\u7279\u5b9a\u57fa\u6570\u8f6c\u6362\u6210\u5b83\u7684\u5b57\u7b26\u4e32\u503c\u53ef\u4ee5\u4f7f\u7528 intValue.toString(radix).</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<p>\u4f8b\u5b50\uff1a\u4f7f\u7528 parseInt</p>\n<p>\u4ee5\u4e0b\u4f8b\u5b50\u5747\u8fd4\u56de15:</p>\n<pre><code class="language-javascript">parseInt(<span class="hljs-string">"F"</span>, <span class="hljs-number">16</span>);\nparseInt(<span class="hljs-string">"17"</span>, <span class="hljs-number">8</span>);\nparseInt(<span class="hljs-string">"15"</span>, <span class="hljs-number">10</span>);\nparseInt(<span class="hljs-number">15.99</span>, <span class="hljs-number">10</span>);\nparseInt(<span class="hljs-string">"FXX123"</span>, <span class="hljs-number">16</span>);\nparseInt(<span class="hljs-string">"1111"</span>, <span class="hljs-number">2</span>);\nparseInt(<span class="hljs-string">"15*3"</span>, <span class="hljs-number">10</span>);\nparseInt(<span class="hljs-string">"12"</span>, <span class="hljs-number">13</span>);</code></pre>\n<p>\u4ee5\u4e0b\u4f8b\u5b50\u5747\u8fd4\u56de NaN:</p>\n<pre><code class="language-javascript">parseInt(<span class="hljs-string">"Hello"</span>, <span class="hljs-number">8</span>); // <span class="hljs-keyword">Not</span> a number <span class="hljs-keyword">at</span> <span class="hljs-keyword">all</span>\nparseInt(<span class="hljs-string">"546"</span>, <span class="hljs-number">2</span>);   // <span class="hljs-keyword">Digits</span> are <span class="hljs-keyword">not</span> valid <span class="hljs-keyword">for</span> binary representations</code></pre>\n<p>\u4ee5\u4e0b\u4f8b\u5b50\u5747\u8fd4\u56de -15\uff1a</p>\n<pre><code class="language-javascript">parseInt(<span class="hljs-string">"-F"</span>, <span class="hljs-number">16</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">"-0F"</span>, <span class="hljs-number">16</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">"-0XF"</span>, <span class="hljs-number">16</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-name">-15</span>.<span class="hljs-number">1</span>, <span class="hljs-number">10</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">" -17"</span>, <span class="hljs-number">8</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">" -15"</span>, <span class="hljs-number">10</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">"-1111"</span>, <span class="hljs-number">2</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">"-15e1"</span>, <span class="hljs-number">10</span>)<span class="hljs-comment">;</span>\nparseInt(<span class="hljs-string">"-12"</span>, <span class="hljs-number">13</span>)<span class="hljs-comment">;</span></code></pre>\n<p>\u4e0b\u4f8b\u4e2d\u4e5f\u5168\u90e8\u8fd4\u56de 17\uff0c\u56e0\u4e3a\u8f93\u5165\u7684 string \u53c2\u6570\u4ee5 &quot;0x&quot; \u5f00\u5934\u65f6\u4f5c\u4e3a\u5341\u516d\u8fdb\u5236\u6570\u5b57\u89e3\u91ca\uff0c\u800c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5047\u5982\u7ecf\u8fc7 Number\n\u51fd\u6570\u8f6c\u6362\u540e\u4e3a 0 \u6216 NaN\uff0c\u5219\u5c06\u4f1a\u5ffd\u7565\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"0x11"</span>, <span class="hljs-number">16</span>);\n<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"0x11"</span>, <span class="hljs-number">0</span>);\n<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"0x11"</span>);</code></pre>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u8fd4\u56de 224</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"0e0"</span>,<span class="hljs-number">16</span>);</code></pre>\n<p>\u6ca1\u6709\u6307\u5b9a radix \u53c2\u6570\u65f6\u7684\u516b\u8fdb\u5236\u89e3\u6790</p>\n<p>\u5c3d\u7ba1 ECMAScript 3 \u5df2\u7ecf\u4e0d\u8d5e\u6210\u8fd9\u79cd\u505a\u6cd5\uff0c\u4e14 ECMAScript 5 \u5df2\u7ecf\u7981\u6b62\u4e86\u8fd9\u79cd\u505a\u6cd5\uff0c\u4f46\u662f\u4ecd\u7136\u6709\u5f88\u591a\u5b9e\u73b0\u73af\u5883\u4ecd\u7136\u628a\u4ee5 0 \u5f00\u5934\u7684\u6570\u503c\u5b57\n\u7b26\u4e32\uff08numeric string\uff09\u89e3\u91ca\u4e3a\u4e00\u4e2a\u516b\u8fdb\u5236\u6570\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u53ef\u80fd\u8fd4\u56de\u516b\u8fdb\u5236\u7684\u7ed3\u679c\uff0c\u4e5f\u53ef\u80fd\u8fd4\u56de\u5341\u8fdb\u5236\u7684\u7ed3\u679c\u3002\u603b\u662f\u6307\u5b9a\u4e00\u4e2a\u57fa\u6570\n\uff08radix\uff09\u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u4e0d\u53ef\u9760\u7684\u884c\u4e3a\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"0e0"</span>); <span class="hljs-comment">// 0</span>\n<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"08"</span>); <span class="hljs-comment">// 0, \'8\' is not an octal digit.</span></code></pre>\n<h3 id="ecmascript-5-\u79fb\u9664\u4e86\u516b\u8fdb\u5236\u89e3\u6790">ECMAScript 5 \u79fb\u9664\u4e86\u516b\u8fdb\u5236\u89e3\u6790</h3>\n<p>ECMAScript 5 \u89c4\u8303\u4e0d\u518d\u5141\u8bb8parseInt\u51fd\u6570\u7684\u5b9e\u73b0\u73af\u5883\u628a\u4ee50\u5b57\u7b26\u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u516b\u8fdb\u5236\u6570\u503c\u3002ECMAScript 5 \u9648\u8ff0\u5982\u4e0b\uff1a</p>\n<p>The parseInt function produces an integer value dictated by interpretation of the contents of the string argument\naccording to the specified radix. Leading white space in string is ignored. If radix is undefined or 0, it is assumed\nto be 10 except when the number begins with the character pairs 0x or 0X, in which case a radix of 16 is assumed. If\nradix is 16, number may also optionally begin with the character pairs 0x or 0X.</p>\n<p>\u8fd9\u4e0eECMAScript 3\u6709\u6240\u4e0d\u540c\uff0cECMAScript 3\u4ec5\u4ec5\u662f\u4e0d\u63d0\u5021\u8fd9\u79cd\u505a\u6cd5\u4f46\u5e76\u6ca1\u6709\u7981\u6b62\u8fd9\u79cd\u505a\u6cd5\u3002</p>\n<p>\u76f4\u81f32013\u5e74\uff0c\u5f88\u591a\u5b9e\u73b0\u73af\u5883\u5e76\u6ca1\u6709\u91c7\u53d6\u65b0\u7684\u89c4\u8303\u6240\u89c4\u5b9a\u7684\u505a\u6cd5, \u800c\u4e14\u7531\u4e8e\u5fc5\u987b\u517c\u5bb9\u65e7\u7248\u7684\u6d4f\u89c8\u5668\uff0c\n\u6240\u4ee5<code>\u6c38\u8fdc\u90fd\u8981\u660e\u786e\u7ed9\u51faradix\u53c2\u6570\u7684\u503c</code>.</p>\n<h2 id="\u4e00\u4e2a\u66f4\u4e25\u683c\u7684\u89e3\u6790\u51fd\u6570">\u4e00\u4e2a\u66f4\u4e25\u683c\u7684\u89e3\u6790\u51fd\u6570</h2>\n<p>\u6709\u65f6\u91c7\u7528\u4e00\u4e2a\u66f4\u4e25\u683c\u7684\u65b9\u6cd5\u6765\u89e3\u6790\u6574\u578b\u503c\u5f88\u6709\u7528\u3002\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a</p>\n<pre><code class="language-javascript">filterInt = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value</span>) </span>{\n  <span class="hljs-keyword">if</span>(<span class="hljs-regexp">/^(\\-|\\+)?([0-9]+|Infinity)$/</span>.test(value))\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">Number</span>(value);\n  <span class="hljs-keyword">return</span> <span class="hljs-literal">NaN</span>;\n}\n\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'421\'</span>));               <span class="hljs-comment">// 421</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'-421\'</span>));              <span class="hljs-comment">// -421</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'+421\'</span>));              <span class="hljs-comment">// 421</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'Infinity\'</span>));          <span class="hljs-comment">// Infinity</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'421e+0\'</span>));            <span class="hljs-comment">// NaN</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'421hop\'</span>));            <span class="hljs-comment">// NaN</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'hop1.61803398875\'</span>));  <span class="hljs-comment">// NaN</span>\n<span class="hljs-built_in">console</span>.log(filterInt(<span class="hljs-string">\'1.61803398875\'</span>));     <span class="hljs-comment">// NaN</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);