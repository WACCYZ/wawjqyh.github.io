(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[119],{fDWO:function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential" target="_blank">en</a></p>\n<h1 id="numberprototypetoexponential">Number.prototype.toExponential()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>toExponential() \u65b9\u6cd5\u4ee5\u6307\u6570\u8868\u793a\u6cd5\u8fd4\u56de\u8be5\u6570\u503c\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">numObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Exponential(<span class="hljs-params">fractionDigits</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>fractionDigits \u53ef\u9009</code> \u4e00\u4e2a\u6574\u6570\uff0c\u7528\u6765\u6307\u5b9a\u5c0f\u6570\u70b9\u540e\u6709\u51e0\u4f4d\u6570\u5b57\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7528\u5c3d\u53ef\u80fd\u591a\u7684\u4f4d\u6570\u6765\u663e\u793a\u6570\u5b57\u3002</li>\n</ul>\n<h2 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h2>\n<p>\u4e00\u4e2a\u7528\u5e42\u7684\u5f62\u5f0f (\u79d1\u5b66\u6280\u672f\u6cd5) \u6765\u8868\u793aNumber \u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u3002\u5c0f\u6570\u70b9\u540e\u4ee5fractionDigits \u63d0\u4f9b\u7684\u503c\u6765\u56db\u820d\u4e94\u5165\u3002\u5982\u679c fractionDigits\n\u53c2\u6570\u88ab\u5ffd\u7565\u4e86\uff0c\u5c0f\u6570\u70b9\u540e\u7684\u5c06\u5c3d\u53ef\u80fd\u7528\u6700\u591a\u7684\u4f4d\u6570\u6765\u8868\u793a\u8be5\u6570\u503c\u3002</p>\n<p>\u5bf9\u6570\u503c\u5b57\u9762\u91cf\u4f7f\u7528 toExponential() \u65b9\u6cd5\uff0c\u4e14\u8be5\u6570\u503c\u6ca1\u6709\u5c0f\u6570\u70b9\u548c\u6307\u6570\u65f6\uff0c\u5e94\u8be5\u5728\u8be5\u6570\u503c\u4e0e\u8be5\u65b9\u6cd5\u4e4b\u95f4\u9694\u5f00\u4e00\u4e2a\u7a7a\u683c\uff0c\u4ee5\u907f\u514d\u70b9\u53f7\u88ab\u89e3\n\u91ca\u4e3a\u4e00\u4e2a\u5c0f\u6570\u70b9\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u70b9\u53f7\u8c03\u7528\u8be5\u65b9\u6cd5\u3002</p>\n<p>\u5982\u679c\u4e00\u4e2a\u6570\u503c\u7684\u5c0f\u6570\u4f4d\u6570\u591a\u4f59 fractionDigits \u53c2\u6570\u6240\u63d0\u4f9b\u7684\uff0c\u5219\u8be5\u6570\u503c\u5c06\u4f1a\u5728 fractionDigits \u6307\u5b9a\u7684\u5c0f\u6570\u4f4d\u6570\u5904\u56db\u820d\u4e94\u5165\u3002\u53ef\u4ee5\u67e5\u770b\ntoFixed() \u65b9\u6cd5\u63cf\u8ff0\u4e2d\u5173\u4e8e\u56db\u820d\u4e94\u5165\u7684\u8ba8\u8bba\uff0c\u540c\u6837\u5e94\u7528\u4e8e toExponential() \u65b9\u6cd5\u3002</p>\n<h3 id="\u5f02\u5e38">\u5f02\u5e38</h3>\n<p><code>RangeError</code></p>\n<p>\u5982\u679c fractionDigits \u592a\u5c0f\u6216\u592a\u5927\u5c06\u4f1a\u629b\u51fa\u8be5\u9519\u8bef\u3002\u4ecb\u4e8e 0 \u548c 20\uff08\u5305\u62ec20\uff09\u4e4b\u95f4\u7684\u503c\u4e0d\u4f1a\u5f15\u8d77 RangeError \u3002 \u6267\u884c\u73af\u5883\u4e5f\u53ef\u4ee5\u652f\u6301\u66f4\u5927\u6216\u66f4\u5c0f\u8303\u56f4\u3002</p>\n<p><code>TypeError</code></p>\n<p>\u5982\u679c\u8be5\u65b9\u6cd5\u5728\u4e00\u4e2a\u975e\u6570\u503c\u7c7b\u578b\u5bf9\u8c61\u4e0a\u8c03\u7528\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript">var numObj = <span class="hljs-number">77.1234</span>;\n\nalert(<span class="hljs-string">"numObj.toExponential() is "</span> + numObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Exponential()</span>); <span class="hljs-comment">//\u8f93\u51fa 7.71234e+1</span>\n\nalert(<span class="hljs-string">"numObj.toExponential(4) is "</span> + numObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Exponential(4)</span>); <span class="hljs-comment">//\u8f93\u51fa 7.7123e+1</span>\n\nalert(<span class="hljs-string">"numObj.toExponential(2) is "</span> + numObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Exponential(2)</span>); <span class="hljs-comment">//\u8f93\u51fa 7.71e+1</span>\n\nalert(<span class="hljs-string">"77.1234.toExponential() is "</span> + <span class="hljs-number">77.1234</span>.<span class="hljs-keyword">to</span><span class="hljs-constructor">Exponential()</span>); <span class="hljs-comment">//\u8f93\u51fa 7.71234e+1</span>\n\nalert(<span class="hljs-string">"77 .toExponential() is "</span> + <span class="hljs-number">77</span> .<span class="hljs-keyword">to</span><span class="hljs-constructor">Exponential()</span>); <span class="hljs-comment">//\u8f93\u51fa 7.7e+1</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);