(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{agWf:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" target="_blank">en</a></p>\n<h1 id="eval">eval()</h1>\n<p>eval()\u51fd\u6570\u4f1a\u5c06\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u5f53\u505aJavaScript\u4ee3\u7801\u8fdb\u884c\u6267\u884c\u3002</p>\n<h2 id="1\u3001\u8bed\u6cd5">1\u3001\u8bed\u6cd5</h2>\n<p><code>eval(string)</code></p>\n<h3 id="1-\u53c2\u6570">(1) \u53c2\u6570</h3>\n<ul>\n<li><code>string</code> \u4e00\u4e32\u8868\u793aJavaScript\u8868\u8fbe\u5f0f\uff0c\u8bed\u53e5\uff0c \u6216\u8005\u662f\u4e00\u7cfb\u5217\u8bed\u53e5\u7684\u5b57\u7b26\u4e32\u3002\u8868\u8fbe\u5f0f\u53ef\u4ee5\u5305\u62ec\u53d8\u91cf\u4ee5\u53ca\u5df2\u5b58\u5728\u5bf9\u8c61\u7684\u5c5e\u6027\u3002</li>\n</ul>\n<h3 id="2-\u8fd4\u56de\u503c">(2) \u8fd4\u56de\u503c</h3>\n<p>\u6267\u884c\u6307\u5b9a\u4ee3\u7801\u4e4b\u540e\u7684\u8fd4\u56de\u503c\u3002\u5982\u679c\u8fd4\u56de\u503c\u4e3a\u7a7a\uff0c\u8fd4\u56deundefined</p>\n<h2 id="2\u3001\u63cf\u8ff0">2\u3001\u63cf\u8ff0</h2>\n<p>eval()\u662f\u5168\u5c40\u5bf9\u8c61\u7684\u4e00\u4e2a\u51fd\u6570\u5c5e\u6027\u3002</p>\n<p>eval()\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5b57\u7b26\u4e32\u8868\u793a\u7684\u662f\u8868\u8fbe\u5f0f\uff0ceval()\u4f1a\u5bf9\u8868\u8fbe\u5f0f\u8fdb\u884c\u6c42\u503c\u3002\u5982\u679c\u53c2\u6570\u8868\u793a\u4e00\u4e2a\u6216\u591a\u4e2aJavaScript\u8bed\u53e5\uff0c\n\u90a3\u4e48eval()\u5c31\u4f1a\u6267\u884c\u8fd9\u4e9b\u8bed\u53e5\u3002\u6ce8\u610f\u4e0d\u8981\u7528eval()\u6765\u6267\u884c\u4e00\u4e2a\u56db\u5219\u8fd0\u7b97\u8868\u8fbe\u5f0f\uff1b\u56e0\u4e3a JavaScript \u4f1a\u81ea\u52a8\u4e3a\u56db\u5219\u8fd0\u7b97\u6c42\u503c\u5e76\u4e0d\u9700\u8981\u7528eval\u6765\u5305\u88f9\u3002</p>\n<p><code>\u8fd9\u91cc\u7684\u56db\u5219\u8fd0\u7b97\u662f\u6307\u6570\u5b66\u4e0a\u7684\u8fd0\u7b97\uff0c\u5982\uff1a3 + 4 * 4 / 6\u3002\u6ce8\u610f\u8fd9\u91cc\u9762\u5e76\u6ca1\u6709\u53d8\u91cf\uff0c\u53ea\u662f\u5355\u7eaf\u7684\u6570\u5b66\u8fd0\u7b97\uff0c\u8fd9\u6837\u7684\u8fd0\u7b97\u5f0f\u5e76\u4e0d\u9700\u8981\u8c03\u7528eval\u6765\u8ba1\u7b97\uff0c\n\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u8ba1\u7b97\u5c31\u53ef\u4ee5\u3002\u5176\u5b9e\u5373\u4fbf\u5e26\u6709\u53d8\u91cf\uff0cJavaScript\u4e5f\u662f\u53ef\u4ee5\u76f4\u63a5\u8ba1\u7b97\u7684\uff0c\u4f46\u662f\u5982\u679c\u4f60\u73b0\u5728\u53ea\u60f3\u58f0\u660e\u4e00\u4e2a\u5e26\u6709\u53d8\u91cf\u7684\u8868\u8fbe\u5f0f\uff0c\u4f46\u662f\u60f3\u7a0d\u540e\u8fdb\u884c\u8fd0\u7b97\n\uff08\u4f60\u6709\u53ef\u80fd\u5728\u58f0\u660e\u8fd9\u4e2a\u5e26\u6709\u53d8\u91cf\u7684\u8fd0\u7b97\u5f0f\u4e4b\u540e\u8fd8\u6709\u53ef\u80fd\u5bf9\u91cc\u9762\u7684\u53d8\u91cf\u8fdb\u884c\u4fee\u6539\uff09\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528eval\u3002</code></p>\n<p>\u5982\u679c\u8981\u5c06\u7b97\u6570\u8868\u8fbe\u5f0f\u6784\u9020\u6210\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f60\u53ef\u4ee5\u7528eval()\u5728\u968f\u540e\u5bf9\u5176\u6c42\u503c\u3002\u6bd4\u5982\uff0c\u5047\u5982\u4f60\u6709\u4e00\u4e2a\u53d8\u91cf x \uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u5b57\u7b26\u4e32\u8868\u8fbe\u5f0f\u6765\u5bf9\u6d89\u53cax\u7684\u8868\u8fbe\u5f0f\u5ef6\u8fdf\u6c42\u503c\uff0c\n\u5c06 &quot;3 * x + 2&quot;\uff0c\u5b58\u50a8\u4e3a\u53d8\u91cf\uff0c\u7136\u540e\u5728\u4f60\u7684\u811a\u672c\u540e\u9762\u7684\u4e00\u4e2a\u5730\u65b9\u8c03\u7528eval()\u3002</p>\n<p>\u5982\u679ceval()\u7684\u53c2\u6570\u4e0d\u662f\u5b57\u7b26\u4e32\uff0ceval()\u5c06\u4f1a\u5c06\u53c2\u6570\u539f\u5c01\u4e0d\u52a8\u7684\u8fd4\u56de\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b57\u7b26\u4e32\u6784\u9020\u5668\u88ab\u6307\u5b9a\uff0ceval()\u8fd4\u56de\u4e86\u5b57\u7b26\u4e32\u5bf9\u8c61\u800c\u4e0d\u662f\u5bf9\u5b57\u7b26\u4e32\u6c42\u503c\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">eval</span>(<span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(<span class="hljs-string">"2 + 2"</span>)); <span class="hljs-comment">// \u8fd4\u56de\u4e86\u5305\u542b"2 + 2"\u7684\u5b57\u7b26\u4e32\u5bf9\u8c61</span>\n<span class="hljs-built_in">eval</span>(<span class="hljs-string">"2 + 2"</span>);             <span class="hljs-comment">// returns 4</span></code></pre>\n<p>\u4f60\u53ef\u4ee5\u4f7f\u7528\u901a\u7528\u7684\u7684\u65b9\u6cd5\u6765\u7ed5\u8fc7\u8fd9\u4e2a\u9650\u5236\uff0c\u5982\u4f7f\u7528toString()</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> expression = <span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(<span class="hljs-string">"2 + 2"</span>);\n<span class="hljs-built_in">eval</span>(expression.toString());</code></pre>\n<p>\u5982\u679c\u4f60\u95f4\u63a5\u7684\u4f7f\u7528 eval(), \u5982\u901a\u8fc7\u4e00\u4e2a\u5f15\u7528\u6765\u8c03\u7528\u5b83\u800c\u4e0d\u662f\u76f4\u63a5\u7684\u8c03\u7528eval\u3002 \u4eceECMAScript 5\u8d77\u5b83\u5de5\u4f5c\u5728\u5168\u5c40\u4f5c\u7528\u57df\u800c\u4e0d\u662f\u5c40\u90e8\u4f5c\u7528\u57df\u4e2d\uff1b\n\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u7684\u4f5c\u7528\u58f0\u660e\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u51fd\u6570\uff0c\u5e76\u4e14geval\u4e2d\u7684\u8fd9\u4e9b\u4ee3\u7801\u5728\u6267\u884c\u671f\u95f4\u4e0d\u80fd\u5728\u88ab\u8c03\u7528\u7684\u4f5c\u7528\u57df\u4e2d\u8bbf\u95ee\u5c40\u90e8\u53d8\u91cf\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">var</span> x = <span class="hljs-number">2</span>, y = <span class="hljs-number">4</span>;\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">eval</span>(<span class="hljs-string">"x + y"</span>));  <span class="hljs-comment">// \u76f4\u63a5\u8c03\u7528\uff0c\u4f7f\u7528\u672c\u5730\u4f5c\u7528\u57df\uff0c\u7ed3\u679c\u662f 6</span>\n  <span class="hljs-keyword">var</span> geval = <span class="hljs-built_in">eval</span>;\n  <span class="hljs-built_in">console</span>.log(geval(<span class="hljs-string">"x + y"</span>)); <span class="hljs-comment">// \u95f4\u63a5\u8c03\u7528\uff0c\u4f7f\u7528\u5168\u5c40\u4f5c\u7528\u57df\uff0cthrows ReferenceError \u56e0\u4e3a`x`\u672a\u5b9a\u4e49</span>\n}</code></pre>\n<h2 id="3\u3001\u907f\u514d\u5728\u4e0d\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528eval">3\u3001\u907f\u514d\u5728\u4e0d\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528eval</h2>\n<p>eval() \u662f\u4e00\u4e2a\u5371\u9669\u7684\u51fd\u6570\uff0c \u4ed6\u6267\u884c\u7684\u4ee3\u7801\u62e5\u6709\u7740\u6267\u884c\u8005\u7684\u6743\u5229\u3002\u5982\u679c\u4f60\u7528eval()\u8fd0\u884c\u7684\u5b57\u7b26\u4e32\u4ee3\u7801\u88ab\u6076\u610f\u65b9\uff08\u4e0d\u6000\u597d\u610f\u7684\u4eba\uff09\u64cd\u63a7\u4fee\u6539,\n\u60a8\u53ef\u80fd\u4f1a\u5229\u7528\u6700\u7ec8\u5728\u7528\u6237\u673a\u5668\u4e0a\u8fd0\u884c\u6076\u610f\u65b9\u90e8\u7f72\u7684\u6076\u610f\u4ee3\u7801\uff0c\u5e76\u5bfc\u81f4\u60a8\u5931\u53bb\u60a8\u7684\u7f51\u9875\u6216\u8005\u6269\u5c55\u7a0b\u5e8f\u7684\u6743\u9650\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u7b2c\u4e09\u65b9\u4ee3\u7801\u53ef\u4ee5\n\u770b\u5230\u67d0\u4e00\u4e2aeval()\u88ab\u8c03\u7528\u65f6\u7684\u4f5c\u7528\u57df\uff0c\u8fd9\u4e5f\u6709\u53ef\u80fd\u5bfc\u81f4\u4e00\u4e9b\u4e0d\u540c\u65b9\u5f0f\u7684\u653b\u51fb\u3002\u76f8\u4f3c\u7684Function\u5c31\u662f\u4e0d\u5bb9\u6613\u88ab\u653b\u51fb\u7684\u3002</p>\n<p>eval()\u7684\u8fd0\u884c\u6548\u7387\u4e5f\u666e\u904d\u7684\u6bd4\u5176\u4ed6\u7684\u66ff\u4ee3\u65b9\u6848\u6162\uff0c\u56e0\u4e3a\u4ed6\u4f1a\u8c03\u7528js\u89e3\u6790\u5668\uff0c\u5373\u4fbf\u73b0\u4ee3\u7684JS\u5f15\u64ce\u4e2d\u5df2\u7ecf\u5bf9\u6b64\u505a\u4e86\u4f18\u5316\u3002</p>\n<p>\u66f4\u4e3a\u5b89\u5168\uff08\u4e5f\u66f4\u5feb\uff09\u7684\u66ff\u4ee3eval()\u7684\u662f\u666e\u901a\u7684\u7528\u4f8b\u3002</p>\n<h3 id="1-\u8bbf\u95ee\u6210\u5458\u5c5e\u6027">(1) \u8bbf\u95ee\u6210\u5458\u5c5e\u6027</h3>\n<p>\u4f60\u4e0d\u5e94\u8be5\u53bb\u4f7f\u7528eval()\u6765\u5c06\u5c5e\u6027\u540d\u5b57\u8f6c\u5316\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u5c5e\u6027\u3002\u8003\u8651\u4e0b\u9762\u7684\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u88ab\u8bbf\u95ee\u5bf9\u8c61\u7684\u5c5e\u6027\u5728\u5b83\u88ab\u6267\u884c\u4e4b\u524d\u90fd\u4f1a\u672a\u77e5\u7684\u3002\u8fd9\u91cc\u867d\u7136\u53ef\u4ee5\u88ab\u5904\u7406\u7528exal\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> obj = <span class="hljs-comment">{ a: 20, b: 30 }</span>;\n<span class="hljs-keyword">var</span> propName = getPropName();\n\neval( <span class="hljs-string">\'var result = obj.\'</span> + propsName )</code></pre>\n<p>\u4f46\u662f\uff0c\u8fd9\u91cc\u5e76\u4e0d\u662f\u5fc5\u987b\u5f97\u4f7f\u7528eval()\u3002\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u91cc\u5e76\u4e0d\u652f\u6301\u8fd9\u6837\u4f7f\u7528\u3002\u53ef\u4ee5\u4f7f\u7528\u5c5e\u6027\u8bbf\u95ee\u5668\u8fdb\u884c\u4ee3\u66ff\uff0c\u5b83\u66f4\u5feb\u800c\u4e14\u66f4\u5b89\u5168\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> obj = <span class="hljs-comment">{ a: 20, b: 30 }</span>\n<span class="hljs-keyword">var</span> propName = getPropName();\n<span class="hljs-keyword">var</span> <span class="hljs-keyword">result</span> = obj[ propName ];</code></pre>\n<p>\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u53bb\u8bbf\u95ee\u5b50\u4ee3\u7684\u5c5e\u6027\u3002\u5982\u4e0b\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> obj = <span class="hljs-comment">{a: {b: {c: 0}</span>}};\n<span class="hljs-keyword">var</span> propPath = getPropPath(); <span class="hljs-comment">// \u8fd4\u56de  \u4f8b\u5982\uff1a"a.b.c"</span>\n\neval( <span class="hljs-string">\'var result = obj.\'</span> + propPath )</code></pre>\n<p>\u8fd9\u91cc\u5219\u901a\u8fc7\u89c4\u907f\u4f7f\u7528Eval()\u5b9e\u73b0\u4e86\u5faa\u73af\u83b7\u53d6\u5b50\u4ee3\u7684\u5c5e\u6027\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getDescendantantProp</span><span class="hljs-params">(obj, desc)</span> </span>{\n    <span class="hljs-keyword">var</span> arr = desc.split(<span class="hljs-string">\'.\'</span>);\n    <span class="hljs-keyword">while</span>(arr.length) {\n        obj = obj[arr.shift()];\n    }\n    <span class="hljs-keyword">return</span> obj;\n}\n\n<span class="hljs-keyword">var</span> obj = {a: {b: {c: <span class="hljs-number">0</span>}}};\n<span class="hljs-keyword">var</span> propPath = getPropPath(); <span class="hljs-comment">// \u8fd4\u56de\uff0c\u4f8b\u5982 "a.b.c"</span>\n<span class="hljs-keyword">var</span> result = getDescendantProp(obj, propPath);</code></pre>\n<p>\u540c\u6837\u7684\u65b9\u6cd5\u4e5f\u53ef\u5b9e\u73b0\u8bbe\u7f6e\u5b50\u4ee3\u7684\u5c5e\u6027\u503c:</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">function</span> set<span class="hljs-constructor">DescendantProp(<span class="hljs-params">obj</span>, <span class="hljs-params">desc</span>, <span class="hljs-params">value</span>)</span> {\n  var arr = desc.split(<span class="hljs-character">\'.\'</span>);\n  <span class="hljs-keyword">while</span> (arr.length &gt; <span class="hljs-number">1</span>) {\n    obj = obj<span class="hljs-literal">[<span class="hljs-identifier">arr</span>.<span class="hljs-identifier">shift</span>()]</span>;\n  }\n  obj<span class="hljs-literal">[<span class="hljs-identifier">arr</span>[<span class="hljs-number">0</span>]</span>] = value;\n}\n\nvar obj = {a: {b: {c: <span class="hljs-number">0</span>}}};\nvar propPath = get<span class="hljs-constructor">PropPath()</span>;  <span class="hljs-comment">// returns e.g. "a.b.c"</span>\nvar result = set<span class="hljs-constructor">DescendantProp(<span class="hljs-params">obj</span>, <span class="hljs-params">propPath</span>, 1)</span>;  <span class="hljs-comment">// test.a.b.c will now be 1</span></code></pre>\n<h3 id="2-\u4f7f\u7528\u51fd\u6570\u800c\u975e\u4ee3\u7801\u6bb5">(2) \u4f7f\u7528\u51fd\u6570\u800c\u975e\u4ee3\u7801\u6bb5</h3>\n<p>JavaScript\u62e5\u6709first-class functions,\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5c06\u51fd\u6570\u76f4\u63a5\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u5176\u4ed6\u63a5\u53e3\uff0c\u5e76\u5c06\u4ed6\u4eec\u4fdd\u5b58\u5728\u53d8\u91cf\u4e2d\u6216\u8005\u5bf9\u8c61\u7684\u5c5e\u6027\u4e2d\u7b49\u7b49\uff0c\n\u5f88\u591aDOM\u7684API\u90fd\u7528\u8fd9\u79cd\u601d\u8def\u8fdb\u884c\u8bbe\u8ba1\uff0c\u4f60\u4e5f\u53ef\u4ee5\uff08\u6216\u8005\u5e94\u8be5\uff09\u8fd9\u6837\u5b50\u8bbe\u8ba1\u4f60\u7684\u4ee3\u7801\uff1a</p>\n<pre><code class="language-javascript">// instead <span class="hljs-keyword">of</span> setTimeout(<span class="hljs-string">" ... "</span>, <span class="hljs-number">1000</span>) <span class="hljs-keyword">use</span>:\nsetTimeout(<span class="hljs-keyword">function</span>() { ... }, <span class="hljs-number">1000</span>);\n\n// instead <span class="hljs-keyword">of</span> elt.setAttribute(<span class="hljs-string">"onclick"</span>, <span class="hljs-string">"..."</span>) <span class="hljs-keyword">use</span>:\nelt.addEventListener(<span class="hljs-symbol">\'click</span>\', <span class="hljs-keyword">function</span>() { ... } , <span class="hljs-literal">false</span>);</code></pre>\n<p>Closures \u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u79cd\u521b\u5efa\u53c2\u6570\u5316\u51fd\u6570\u800c\u4e0d\u8fde\u63a5\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5.</p>\n<h3 id="3-\u89e3\u6790-json\uff08\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3ajavascript\u5bf9\u8c61\uff09">(3) \u89e3\u6790 JSON\uff08\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3aJavaScript\u5bf9\u8c61\uff09</h3>\n<p>\u5982\u679c\u4f60\u5728\u8c03\u7528eval()\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u53c2\u6570\u4e2d\u66f4\u5305\u542b\u6570\u636e\uff08\u5982\uff1a\u4e00\u4e2a\u6570\u7ec4\u201c[1,2,3]\u201d\uff09\u800c\u4e0d\u662f\u4ee3\u7801,\u4f60\u5e94\u8be5\u8003\u8651\u5c06\u5176\u8f6c\u6362\u4e3aJSON\u5bf9\u8c61\uff0c\u8fd9\u5141\u8bb8\u4f60\u7528JavaScript\n\u8bed\u6cd5\u7684\u5b50\u96c6\u6765\u8868\u793a\u6570\u636e\u3002\u5728\u6269\u5c55\u4e2d\u4e0b\u8f7dJSON\u548cJavaScript</p>\n<p><code>\u63d0\u793a\uff1a\u56e0\u4e3aJSON\u8bed\u6cd5\u5b50\u96c6\u76f8\u5bf9\u4e8eJavaScript\u8bed\u6cd5\u5b50\u96c6\u6bd4\u8f83\u6709\u5c40\u9650\u6027\uff0c\u5f88\u591a\u5728JavaScript\u4e2d\u53ef\u7528\u7684\u7279\u6027\u5728JSON\u4e2d\u5c31\u4e0d\u8d77\u4f5c\u7528\u4e86\uff0c\u5982\uff1a\u540e\u7f00\u90fd\u597dJSON\u5c31\u4e0d\u652f\u6301\uff0c\u5e76\u4e14\uff0c\n\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u540d\u5728JSON\u4e2d\u5fc5\u987b\u7528\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u6240\u4ee5\u5728\u4f7f\u7528JSON\u5e8f\u5217\u5316\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3aJSON\u5bf9\u8c61\u65f6\u9700\u786e\u8ba4\u5b57\u7b26\u4e32\u683c\u5f0f</code></p>\n<h4 id="\u5c3d\u91cf\u4f20\u9012\u6570\u636e\u800c\u975e\u4ee3\u7801">\u5c3d\u91cf\u4f20\u9012\u6570\u636e\u800c\u975e\u4ee3\u7801</h4>\n<p>\u4f8b\u5982\uff0c\u8bbe\u8ba1\u7528\u4e8e\u64e6\u9664\u7f51\u9875\u5185\u5bb9\u7684\u6269\u5c55\u53ef\u80fd\u4f1a\u5728XPath\u4e2d\u5b9a\u4e49\u89c4\u5219\uff0c\u800c\u4e0d\u662fJavaScript\u4ee3\u7801\u3002</p>\n<h3 id="4-run-code-with-limited-privileges">(4) Run code with limited privileges</h3>\n<p>If you must run code, consider running it with reduced privileges. This advice applies mainly to extensions and XUL applications,\nwhich can use Components.utils.evalInSandbox for this.</p>\n<h4 id="\u8f6c\u5316\u6210\u5458\u5c5e\u6027">\u8f6c\u5316\u6210\u5458\u5c5e\u6027</h4>\n<p>\u4f60\u4e0d\u5e94\u8be5\u5728\u5c5e\u6027\u91cc\u901a\u8fc7eval\u6765\u8f6c\u5316\u5c5e\u6027\u3002\u8003\u8651\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a getFieldName(n) \u51fd\u6570\u5c06\u6307\u5b9a\u7684\u8868\u5355\u5143\u7d20\u6309\u5b57\u7b26\u4e32\u8fd4\u56de\uff0c \u5c06\u8868\u5355\u7684\u7b2c\u4e09\u4e2a\u5143\u7d20\u8d4b\u503c\u7ed9\u4e86\n\u4e00\u4e2a\u53d8\u91cf\u58f0\u660e field \uff0c\u7b2c\u4e8c\u53e5\u58f0\u660e\u4f7f\u7528eval()\u6765\u5c55\u793a\u8868\u5355\u5143\u7d20\u7684\u503c\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-symbol">var</span> <span class="hljs-meta">field</span> = getFieldName(<span class="hljs-number">3</span>)<span class="hljs-comment">;</span>\n<span class="hljs-symbol">document.write</span>(<span class="hljs-string">"The field named "</span>, <span class="hljs-meta">field</span>, <span class="hljs-string">" has value of "</span>, eval(<span class="hljs-meta">field</span> + <span class="hljs-string">".value"</span>))<span class="hljs-comment">;</span></code></pre>\n<p>\u4e5f\u8bb8\uff0c\u8fd9\u91cc\u7684eval()\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u91cc\u4f7f\u7528eval()\u662f\u4e0d\u9f13\u52b1\u7684\u3002 \u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4f7f\u7528 member operators, \u90a3\u4f1a\u5feb\u5f88\u591a:</p>\n<pre><code class="language-javascript"><span class="hljs-symbol">var</span> <span class="hljs-meta">field</span> = getFieldName(<span class="hljs-number">3</span>)<span class="hljs-comment">;</span>\n<span class="hljs-symbol">document.write</span>(<span class="hljs-string">"The field named "</span>, <span class="hljs-meta">field</span>, <span class="hljs-string">" has value of "</span>, <span class="hljs-meta">field</span>[value])<span class="hljs-comment">;</span></code></pre>\n<h3 id="5-cross-implementation-compatibility">(5) Cross-implementation compatibility</h3>\n<p>\u5e94\u8be5\u88ab\u6ce8\u610f\u7684\u662f\uff0ceval\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u975e\u6807\u51c6\u7684\uff0c\u5728JavaScript\u5b9e\u73b0\u4e2d\u4e0d\u88ab\u652f\u6301\u7684\uff1b\u5728\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\uff0cRhino\u6ca1\u6709\u63d0\u4f9b\u652f\u6301\uff0c\u4e5f\u4e0d\u662f Safari&#39;s \u7684\u6838\u5fc3JavaScript\u4ee3\u7801\u3002</p>\n<p>\u4e3a\u4e86\u7ef4\u6301\u517c\u5bb9\u6027\uff0c\u91c7\u7528\u4ea4\u53c9\u5b9e\u73b0\uff0c\u5b83\u88ab\u63a8\u8350\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u88ab\u4f7f\u7528\uff0c\u4e3a\u4e86\u8fbe\u5230\u76f8\u540c\u7684\u6548\u679c\uff0c\u4e0d\u5982\u4f7f\u7528 with \u58f0\u660e \u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">eval</span>(<span class="hljs-built_in">string</span>,object)<span class="hljs-comment">;</span></code></pre>\n<p>\u4f7f\u7528</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">with</span> (object) {\n  <span class="hljs-built_in">eval</span>(<span class="hljs-built_in">string</span>)<span class="hljs-comment">;</span>\n}</code></pre>\n<h2 id="4\u3001\u4f8b\u5b50">4\u3001\u4f8b\u5b50</h2>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u4f7f\u7528 document.write\u6765\u8f93\u51fa\u3002\u5728\u670d\u52a1\u5668\u7aef\u7684 JavaScript\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528write \u51fd\u6570\u6765\u8fbe\u5230document.write\u7684\u6548\u679c\u3002</p>\n<h3 id="1-\u4f7f\u7528-eval">(1) \u4f7f\u7528 eval</h3>\n<p>\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u4e24\u79cd\u58f0\u660e\u90fd\u8fd4\u56de\u4e8642\u3002\u7b2c\u4e00\u79cd\u662f\u5bf9\u5b57\u7b26\u4e32 &quot;x + y + 1&quot;\u6c42\u503c\uff1b\u7b2c\u4e8c\u79cd\u662f\u5bf9\u5b57\u7b26\u4e32 &quot;42&quot;\u6c42\u503c\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span> = <span class="hljs-number">2</span>;\n<span class="hljs-keywords">var</span> <span class="hljs-symbol">y</span> = <span class="hljs-number">39</span>;\n<span class="hljs-keywords">var</span> z = <span class="hljs-string">"42"</span>;\neval(<span class="hljs-string">"x + y + 1"</span>); <span class="hljs-comment">// returns 42</span>\neval(z);           <span class="hljs-comment">// returns 42</span></code></pre>\n<h3 id="2-\u4f7f\u7528-eval-\u5bf9javascript\u58f0\u660e\u6c42\u503c">(2) \u4f7f\u7528 eval \u5bf9JavaScript\u58f0\u660e\u6c42\u503c</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u4f7f\u7528eval() \u5bf9str\u5b57\u7b26\u4e32\u6c42\u503c\u3002\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5305\u542b\u4e86JavaScript\u58f0\u660e\uff0c\u5982\u679cx\u7b49\u4e8e5\uff0c\u5c31\u6253\u5f00\u4e00\u4e2aAlert \u5bf9\u8bdd\u6846\uff0c\u7136\u540e\u5bf9 z \u8d4b\u503c\u3002\n\u5426\u5219\u5c31\u5bf9z\u8d4b\u503c0\u3002 \u5f53\u7b2c\u4e8c\u4e2a\u58f0\u660e\u88ab\u6267\u884c\uff0c eval \u5c06\u4f1a\u5c06str\u8868\u8fbe\u5f0f\u6267\u884c\uff0c\u7136\u540e\u4f1a\u5bf9\u58f0\u660e\u96c6\u5408\u6c42\u503c\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u8d4b\u503c\u7ed9z\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> str = <span class="hljs-string">"if (x == 5) {alert(\'z is 42\'); z = 42;} else z = 0; "</span>;\n<span class="hljs-built_in">document</span>.write(<span class="hljs-string">"&lt;P&gt;z is "</span>, <span class="hljs-built_in">eval</span>(str));</code></pre>\n<h3 id="3-\u8fd4\u56de\u503c">(3) \u8fd4\u56de\u503c</h3>\n<p>eval \u5c06\u4f1a\u8fd4\u56de\u5bf9\u6700\u540e\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u6c42\u503c\u7ed3\u679c\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> str = <span class="hljs-string">"if ( a ) { 1+1; } else { 1+2; }"</span>;\n<span class="hljs-keyword">var</span> a = <span class="hljs-literal">true</span>;\n<span class="hljs-keyword">var</span> b = <span class="hljs-built_in">eval</span>(str);  <span class="hljs-comment">// returns 2</span>\nalert(<span class="hljs-string">"b is : "</span> + b);\na = <span class="hljs-literal">false</span>;\nb = <span class="hljs-built_in">eval</span>(str);  <span class="hljs-comment">// returns 3</span>\nalert(<span class="hljs-string">"b is : "</span> + b);</code></pre>\n<h2 id="5\u3001\u89c4\u8303">5\u3001\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);