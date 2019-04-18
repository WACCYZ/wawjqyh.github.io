(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{"V1m+":function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">en</a></p>\n<h1 id="objectdefineproperty">Object.defineProperty()</h1>\n<p>Object.defineProperty() \u65b9\u6cd5\u4f1a\u76f4\u63a5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u73b0\u6709\u5c5e\u6027\uff0c \u5e76\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">obj</span>, <span class="hljs-params">prop</span>, <span class="hljs-params">descriptor</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u8981\u5728\u5176\u4e0a\u5b9a\u4e49\u5c5e\u6027\u7684\u5bf9\u8c61\u3002</li>\n<li><code>prop</code> \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u540d\u79f0\u3002</li>\n<li><code>descriptor</code> \u5c06\u88ab\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u88ab\u4f20\u9012\u7ed9\u51fd\u6570\u7684\u5bf9\u8c61\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u8be5\u65b9\u6cd5\u5141\u8bb8\u7cbe\u786e\u6dfb\u52a0\u6216\u4fee\u6539\u5bf9\u8c61\u7684\u5c5e\u6027\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u662f\u901a\u8fc7\u8d4b\u503c\u6765\u521b\u5efa\u5e76\u663e\u793a\u5728\u5c5e\u6027\u679a\u4e3e\u4e2d\uff08for...in \u6216 Object.keys \u65b9\u6cd5\uff09\uff0c\n\u4f46\u8fd9\u79cd\u65b9\u5f0f\u6dfb\u52a0\u7684\u5c5e\u6027\u503c\u53ef\u4ee5\u88ab\u6539\u53d8\uff0c\u4e5f\u53ef\u4ee5\u88ab\u5220\u9664\u3002\u800c\u4f7f\u7528 Object.defineProperty() \u5219\u5141\u8bb8\u6539\u53d8\u8fd9\u4e9b\u989d\u5916\u7ec6\u8282\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002\u4f8b\u5982\uff0c\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528  Object.defineProperty() \u589e\u52a0\u7684\u5c5e\u6027\u503c\u662f\u4e0d\u53ef\u6539\u53d8\u7684\u3002</p>\n<p>\u5bf9\u8c61\u91cc\u76ee\u524d\u5b58\u5728\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u4e24\u79cd\u4e3b\u8981\u5f62\u5f0f\uff1a\u6570\u636e\u63cf\u8ff0\u7b26\u548c\u5b58\u53d6\u63cf\u8ff0\u7b26\u3002\u6570\u636e\u63cf\u8ff0\u7b26\u662f\u4e00\u4e2a\u62e5\u6709\u53ef\u5199\u6216\u4e0d\u53ef\u5199\u503c\u7684\u5c5e\u6027\u3002\u5b58\u53d6\u63cf\u8ff0\u7b26\u662f\n\u7531\u4e00\u5bf9 getter-setter \u51fd\u6570\u529f\u80fd\u6765\u63cf\u8ff0\u7684\u5c5e\u6027\u3002\u63cf\u8ff0\u7b26\u5fc5\u987b\u662f\u4e24\u79cd\u5f62\u5f0f\u4e4b\u4e00\uff1b\u4e0d\u80fd\u540c\u65f6\u662f\u4e24\u8005\u3002</p>\n<p><strong>\u6570\u636e\u63cf\u8ff0\u7b26\u548c\u5b58\u53d6\u63cf\u8ff0\u7b26\u5747\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a</strong></p>\n<ul>\n<li><code>configurable</code> \u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 configurable \u4e3a true \u65f6\uff0c\u8be5\u5c5e\u6027\u63cf\u8ff0\u7b26\u624d\u80fd\u591f\u88ab\u6539\u53d8\uff0c\u4e5f\u80fd\u591f\u88ab\u5220\u9664\u3002\u9ed8\u8ba4\u4e3a false\u3002</li>\n<li><code>enumerable</code> \u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 enumerable \u4e3a true \u65f6\uff0c\u8be5\u5c5e\u6027\u624d\u80fd\u591f\u51fa\u73b0\u5728\u5bf9\u8c61\u7684\u679a\u4e3e\u5c5e\u6027\u4e2d\u3002\u9ed8\u8ba4\u4e3a false\u3002</li>\n</ul>\n<p><strong>\u6570\u636e\u63cf\u8ff0\u7b26\u540c\u65f6\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a</strong></p>\n<ul>\n<li><code>value</code> \u8be5\u5c5e\u6027\u5bf9\u5e94\u7684\u503c\u3002\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684 JavaScript \u503c\uff08\u6570\u503c\uff0c\u5bf9\u8c61\uff0c\u51fd\u6570\u7b49\uff09\u3002\u9ed8\u8ba4\u4e3a undefined\u3002</li>\n<li><code>writable</code> \u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 writable \u4e3a true \u65f6\uff0c\u8be5\u5c5e\u6027\u624d\u80fd\u88ab\u8d4b\u503c\u8fd0\u7b97\u7b26\u6539\u53d8\u3002\u9ed8\u8ba4\u4e3a false\u3002</li>\n</ul>\n<p><strong>\u5b58\u53d6\u63cf\u8ff0\u7b26\u540c\u65f6\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a</strong></p>\n<ul>\n<li><code>get</code> \u4e00\u4e2a\u7ed9\u5c5e\u6027\u63d0\u4f9b getter \u7684\u65b9\u6cd5\uff0c\u5982\u679c\u6ca1\u6709 getter \u5219\u4e3a undefined\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u503c\u88ab\u7528\u4f5c\u5c5e\u6027\u503c\u3002\u9ed8\u8ba4\u4e3a undefined\u3002</li>\n<li><code>set</code> \u4e00\u4e2a\u7ed9\u5c5e\u6027\u63d0\u4f9b setter \u7684\u65b9\u6cd5\uff0c\u5982\u679c\u6ca1\u6709 setter \u5219\u4e3a undefined\u3002\u8be5\u65b9\u6cd5\u5c06\u63a5\u53d7\u552f\u4e00\u53c2\u6570\uff0c\u5e76\u5c06\u8be5\u53c2\u6570\u7684\u65b0\u503c\u5206\u914d\u7ed9\u8be5\u5c5e\u6027\u3002\u9ed8\u8ba4\u4e3a undefined\u3002</li>\n</ul>\n<p>\u8bb0\u4f4f\uff0c\u8fd9\u4e9b\u9009\u9879\u4e0d\u4e00\u5b9a\u662f\u81ea\u8eab\u5c5e\u6027\uff0c\u5982\u679c\u662f\u7ee7\u627f\u6765\u7684\u4e5f\u8981\u8003\u8651\u3002\u4e3a\u4e86\u786e\u8ba4\u4fdd\u7559\u8fd9\u4e9b\u9ed8\u8ba4\u503c\uff0c\u4f60\u53ef\u80fd\u8981\u5728\u8fd9\u4e4b\u524d\u51bb\u7ed3 Object.prototype\uff0c\n\u660e\u786e\u6307\u5b9a\u6240\u6709\u7684\u9009\u9879\uff0c\u6216\u8005\u5c06__proto__\u5c5e\u6027\u6307\u5411null\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4f7f\u7528 __proto__</span>\n<span class="hljs-built_in">Object</span>.defineProperty(obj, <span class="hljs-string">"key"</span>, {\n  <span class="hljs-attr">__proto__</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// \u6ca1\u6709\u7ee7\u627f\u7684\u5c5e\u6027</span>\n  value: <span class="hljs-string">"static"</span>  <span class="hljs-comment">// \u6ca1\u6709 enumerable</span>\n                   <span class="hljs-comment">// \u6ca1\u6709 configurable</span>\n                   <span class="hljs-comment">// \u6ca1\u6709 writable</span>\n                   <span class="hljs-comment">// \u4f5c\u4e3a\u9ed8\u8ba4\u503c</span>\n});\n\n<span class="hljs-comment">// \u663e\u5f0f</span>\n<span class="hljs-built_in">Object</span>.defineProperty(obj, <span class="hljs-string">"key"</span>, {\n  <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">configurable</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">writable</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">value</span>: <span class="hljs-string">"static"</span>\n});\n\n<span class="hljs-comment">// \u5faa\u73af\u4f7f\u7528\u540c\u4e00\u5bf9\u8c61</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withValue</span>(<span class="hljs-params">value</span>) </span>{\n  <span class="hljs-keyword">var</span> d = withValue.d || (\n    withValue.d = {\n      <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">writable</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">configurable</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>\n    }\n  );\n  d.value = value;\n  <span class="hljs-keyword">return</span> d;\n}\n<span class="hljs-comment">// ... \u5e76\u4e14 ...</span>\n<span class="hljs-built_in">Object</span>.defineProperty(obj, <span class="hljs-string">"key"</span>, withValue(<span class="hljs-string">"static"</span>));\n\n<span class="hljs-comment">// \u5982\u679c freeze \u53ef\u7528, \u9632\u6b62\u4ee3\u7801\u6dfb\u52a0\u6216\u5220\u9664\u5bf9\u8c61\u539f\u578b\u7684\u5c5e\u6027</span>\n<span class="hljs-comment">// \uff08value, get, set, enumerable, writable, configurable\uff09</span>\n(<span class="hljs-built_in">Object</span>.freeze||<span class="hljs-built_in">Object</span>)(<span class="hljs-built_in">Object</span>.prototype);</code></pre>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<p>\u5982\u679c\u4f60\u60f3\u77e5\u9053\u5982\u4f55\u7528 binary-flags-like \u8bed\u6cd5\u4f7f\u7528 Object.defineProperty \u65b9\u6cd5\uff0c\u770b\u770b\u8fd9\u7bc7\u6587\u7ae0\u3002</p>\n<h3 id="\u521b\u5efa\u5c5e\u6027">\u521b\u5efa\u5c5e\u6027</h3>\n<p>\u5982\u679c\u5bf9\u8c61\u4e2d\u4e0d\u5b58\u5728\u6307\u5b9a\u7684\u5c5e\u6027\uff0cObject.defineProperty()\u5c31\u521b\u5efa\u8fd9\u4e2a\u5c5e\u6027\u3002\u5f53\u63cf\u8ff0\u7b26\u4e2d\u7701\u7565\u67d0\u4e9b\u5b57\u6bb5\u65f6\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u5c06\u4f7f\u7528\u5b83\u4eec\u7684\u9ed8\u8ba4\u503c\u3002\n\u62e5\u6709\u5e03\u5c14\u503c\u7684\u5b57\u6bb5\u7684\u9ed8\u8ba4\u503c\u90fd\u662ffalse\u3002value\uff0cget\u548cset\u5b57\u6bb5\u7684\u9ed8\u8ba4\u503c\u4e3aundefined\u3002\u5b9a\u4e49\u5c5e\u6027\u65f6\u5982\u679c\u6ca1\u6709get/set/value/writable\uff0c\u90a3\n\u5b83\u88ab\u5f52\u7c7b\u4e3a\u6570\u636e\u63cf\u8ff0\u7b26\u3002</p>\n<pre><code class="language-javascript">var o = {}; // \u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\n\n// Example <span class="hljs-keyword">of</span> an <span class="hljs-keyword">object</span> property added <span class="hljs-keyword">with</span> defineProperty <span class="hljs-keyword">with</span> a data property descriptor\n<span class="hljs-keyword">Object</span>.defineProperty(o, "a", {\n  <span class="hljs-keyword">value</span> : <span class="hljs-number">37</span>,\n  writable : <span class="hljs-keyword">true</span>,\n  enumerable : <span class="hljs-keyword">true</span>,\n  configurable : <span class="hljs-keyword">true</span>\n});\n\n// \u5bf9\u8c61o\u62e5\u6709\u4e86\u5c5e\u6027a\uff0c\u503c\u4e3a<span class="hljs-number">37</span>\n\n// Example <span class="hljs-keyword">of</span> an <span class="hljs-keyword">object</span> property added <span class="hljs-keyword">with</span> defineProperty <span class="hljs-keyword">with</span> an accessor property descriptor\nvar bValue;\n<span class="hljs-keyword">Object</span>.defineProperty(o, "b", {\n  <span class="hljs-keyword">get</span> : <span class="hljs-keyword">function</span>(){\n    <span class="hljs-keyword">return</span> bValue;\n  },\n  <span class="hljs-keyword">set</span> : <span class="hljs-keyword">function</span>(newValue){\n    bValue = newValue;\n  },\n  enumerable : <span class="hljs-keyword">true</span>,\n  configurable : <span class="hljs-keyword">true</span>\n});\n\no.b = <span class="hljs-number">38</span>;\n// \u5bf9\u8c61o\u62e5\u6709\u4e86\u5c5e\u6027b\uff0c\u503c\u4e3a<span class="hljs-number">38</span>\n\n// The <span class="hljs-keyword">value</span> <span class="hljs-keyword">of</span> o.b <span class="hljs-keyword">is</span> now <span class="hljs-keyword">always</span> identical <span class="hljs-keyword">to</span> bValue, unless o.b <span class="hljs-keyword">is</span> redefined\n\n// \u6570\u636e\u63cf\u8ff0\u7b26\u548c\u5b58\u53d6\u63cf\u8ff0\u7b26\u4e0d\u80fd\u6df7\u5408\u4f7f\u7528\n<span class="hljs-keyword">Object</span>.defineProperty(o, "conflict", {\n  <span class="hljs-keyword">value</span>: <span class="hljs-number">0x9f91102</span>,\n  <span class="hljs-keyword">get</span>: <span class="hljs-keyword">function</span>() {\n    <span class="hljs-keyword">return</span> <span class="hljs-number">0xdeadbeef</span>;\n  }\n});\n// throws a TypeError: <span class="hljs-keyword">value</span> appears <span class="hljs-keyword">only</span> <span class="hljs-keyword">in</span> data descriptors, <span class="hljs-keyword">get</span> appears <span class="hljs-keyword">only</span> <span class="hljs-keyword">in</span> accessor descriptors</code></pre>\n<h3 id="\u4fee\u6539\u5c5e\u6027">\u4fee\u6539\u5c5e\u6027</h3>\n<p>\u5982\u679c\u5c5e\u6027\u5df2\u7ecf\u5b58\u5728\uff0cObject.defineProperty()\u5c06\u5c1d\u8bd5\u6839\u636e\u63cf\u8ff0\u7b26\u4e2d\u7684\u503c\u4ee5\u53ca\u5bf9\u8c61\u5f53\u524d\u7684\u914d\u7f6e\u6765\u4fee\u6539\u8fd9\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u63cf\u8ff0\u7b26\u7684 configurable\n\u7279\u6027\u4e3afalse\uff08\u5373\u8be5\u7279\u6027\u4e3anon-configurable\uff09\uff0c\u90a3\u4e48\u9664\u4e86 writable \u5916\uff0c\u5176\u4ed6\u7279\u6027\u90fd\u4e0d\u80fd\u88ab\u4fee\u6539\uff0c\u5e76\u4e14\u6570\u636e\u548c\u5b58\u53d6\u63cf\u8ff0\u7b26\u4e5f\u4e0d\u80fd\u76f8\u4e92\u5207\u6362\u3002</p>\n<p>\u5982\u679c\u4e00\u4e2a\u5c5e\u6027\u7684 configurable \u4e3a false\uff0c\u5219\u5176 writable \u7279\u6027\u4e5f\u53ea\u80fd\u4fee\u6539\u4e3a false\u3002</p>\n<p>\u5982\u679c\u5c1d\u8bd5\u4fee\u6539 non-configurable \u5c5e\u6027\u7279\u6027\uff08\u9664 writable \u4ee5\u5916\uff09\uff0c\u5c06\u4f1a\u4ea7\u751f\u4e00\u4e2aTypeError \u5f02\u5e38\uff0c\u9664\u975e\u5f53\u524d\u503c\u4e0e\u4fee\u6539\u503c\u76f8\u540c\u3002</p>\n<h4 id="writable-\u5c5e\u6027">Writable \u5c5e\u6027</h4>\n<p>\u5f53\u5c5e\u6027\u7279\u6027\uff08property attribute\uff09 writable \u8bbe\u7f6e\u4e3afalse\u65f6\uff0c\u8868\u793a non-writable\uff0c\u5c5e\u6027\u4e0d\u80fd\u88ab\u4fee\u6539\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> o = {}; <span class="hljs-comment">// \u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61</span>\n\n<span class="hljs-built_in">Object</span>.defineProperty(o, <span class="hljs-string">"a"</span>, { <span class="hljs-attr">value</span> : <span class="hljs-number">37</span>,\n                                <span class="hljs-attr">writable</span> : <span class="hljs-literal">false</span> });\n\n<span class="hljs-built_in">console</span>.log(o.a); <span class="hljs-comment">// \u6253\u5370 37</span>\no.a = <span class="hljs-number">25</span>; <span class="hljs-comment">// \u6ca1\u6709\u9519\u8bef\u629b\u51fa\uff08\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f1a\u629b\u51fa\uff0c\u5373\u4f7f\u4e4b\u524d\u5df2\u7ecf\u6709\u76f8\u540c\u7684\u503c\uff09</span>\n<span class="hljs-built_in">console</span>.log(o.a); <span class="hljs-comment">// \u6253\u5370 37\uff0c \u8d4b\u503c\u4e0d\u8d77\u4f5c\u7528\u3002</span></code></pre>\n<p>\u6b63\u5982\u4e0a\u4f8b\u4e2d\u770b\u5230\u7684\uff0c\u4fee\u6539\u4e00\u4e2a non-writable \u7684\u5c5e\u6027\u4e0d\u4f1a\u6539\u53d8\u5c5e\u6027\u7684\u503c\uff0c\u540c\u65f6\u4e5f\u4e0d\u4f1a\u62a5\u5f02\u5e38\u3002</p>\n<h4 id="enumerable-\u7279\u6027">Enumerable \u7279\u6027</h4>\n<p>\u5c5e\u6027\u7279\u6027 enumerable \u5b9a\u4e49\u4e86\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u5426\u53ef\u4ee5\u5728 for...in \u5faa\u73af\u548c Object.keys() \u4e2d\u88ab\u679a\u4e3e\u3002</p>\n<pre><code class="language-javascript">var o = {};\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, { <span class="hljs-params">value</span> : 1, <span class="hljs-params">enumerable</span>:<span class="hljs-params">true</span> })</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"b"</span>, { <span class="hljs-params">value</span> : 2, <span class="hljs-params">enumerable</span>:<span class="hljs-params">false</span> })</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"c"</span>, { <span class="hljs-params">value</span> : 3 })</span>; <span class="hljs-comment">// enumerable defaults to false</span>\no.d = <span class="hljs-number">4</span>; <span class="hljs-comment">// \u5982\u679c\u4f7f\u7528\u76f4\u63a5\u8d4b\u503c\u7684\u65b9\u5f0f\u521b\u5efa\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5219\u8fd9\u4e2a\u5c5e\u6027\u7684enumerable\u4e3atrue</span>\n\nfor (var i <span class="hljs-keyword">in</span> o) {\n  console.log(i);\n}\n<span class="hljs-comment">// \u6253\u5370 \'a\' \u548c \'d\' (in undefined order)</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>keys(o); <span class="hljs-comment">// ["a", "d"]</span>\n\no.property<span class="hljs-constructor">IsEnumerable(\'<span class="hljs-params">a</span>\')</span>; <span class="hljs-comment">// true</span>\no.property<span class="hljs-constructor">IsEnumerable(\'<span class="hljs-params">b</span>\')</span>; <span class="hljs-comment">// false</span>\no.property<span class="hljs-constructor">IsEnumerable(\'<span class="hljs-params">c</span>\')</span>; <span class="hljs-comment">// false</span></code></pre>\n<h4 id="configurable-\u7279\u6027">Configurable \u7279\u6027</h4>\n<p>configurable \u7279\u6027\u8868\u793a\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u5426\u53ef\u4ee5\u88ab\u5220\u9664\uff0c\u4ee5\u53ca\u9664 writable \u7279\u6027\u5916\u7684\u5176\u4ed6\u7279\u6027\u662f\u5426\u53ef\u4ee5\u88ab\u4fee\u6539\u3002</p>\n<pre><code class="language-javascript">var o = {};\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, { <span class="hljs-params">get</span> : <span class="hljs-params">function</span>()</span>{return <span class="hljs-number">1</span>;},\n                                configurable : <span class="hljs-literal">false</span> } );\n\n<span class="hljs-comment">// throws a TypeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, {<span class="hljs-params">configurable</span> : <span class="hljs-params">true</span>})</span>;\n<span class="hljs-comment">// throws a TypeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, {<span class="hljs-params">enumerable</span> : <span class="hljs-params">true</span>})</span>;\n<span class="hljs-comment">// throws a TypeError (set was undefined previously)</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, {<span class="hljs-params">set</span> : <span class="hljs-params">function</span>()</span>{}});\n<span class="hljs-comment">// throws a TypeError (even though the new get does exactly the same thing)</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, {<span class="hljs-params">get</span> : <span class="hljs-params">function</span>()</span>{return <span class="hljs-number">1</span>;}});\n<span class="hljs-comment">// throws a TypeError</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">o</span>, <span class="hljs-string">"a"</span>, {<span class="hljs-params">value</span> : 12})</span>;\n\nconsole.log(o.a); <span class="hljs-comment">// logs 1</span>\ndelete o.a; <span class="hljs-comment">// Nothing happens</span>\nconsole.log(o.a); <span class="hljs-comment">// logs 1</span></code></pre>\n<p>\u5982\u679c o.a \u7684 configurable \u7279\u6027\u5df2\u7ecf\u4e3a true\uff0c\u6ca1\u6709\u9519\u8bef\u4f1a\u88ab\u629b\u51fa\uff0c\u5e76\u4e14\u5c5e\u6027\u4f1a\u5728\u6700\u540e\u88ab\u5220\u9664\u3002</p>\n<h3 id="\u6dfb\u52a0\u591a\u4e2a\u5c5e\u6027\u548c\u9ed8\u8ba4\u503c">\u6dfb\u52a0\u591a\u4e2a\u5c5e\u6027\u548c\u9ed8\u8ba4\u503c</h3>\n<p>\u8003\u8651\u7279\u6027\u88ab\u8d4b\u4e88\u7684\u9ed8\u8ba4\u7279\u6027\u503c\u975e\u5e38\u91cd\u8981\uff0c\u901a\u5e38\uff0c\u4f7f\u7528\u70b9\u8fd0\u7b97\u7b26\u548cObject.defineProperty()\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u8d4b\u503c\u65f6\uff0c\u6570\u636e\u63cf\u8ff0\u7b26\u4e2d\u7684\u5c5e\u6027\u9ed8\n\u8ba4\u503c\u662f\u4e0d\u540c\u7684\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\u3002</p>\n<pre><code class="language-javascript">var o = {};\n\no.a = <span class="hljs-number">1</span>;\n<span class="hljs-comment">// \u7b49\u540c\u4e8e :</span>\nObject.defineProperty(o, <span class="hljs-string">"a"</span>, {\n  <span class="hljs-string">value :</span> <span class="hljs-number">1</span>,\n  <span class="hljs-string">writable :</span> <span class="hljs-literal">true</span>,\n  <span class="hljs-string">configurable :</span> <span class="hljs-literal">true</span>,\n  <span class="hljs-string">enumerable :</span> <span class="hljs-literal">true</span>\n});\n\n\n<span class="hljs-comment">// \u53e6\u4e00\u65b9\u9762\uff0c</span>\nObject.defineProperty(o, <span class="hljs-string">"a"</span>, { <span class="hljs-string">value :</span> <span class="hljs-number">1</span> });\n<span class="hljs-comment">// \u7b49\u540c\u4e8e :</span>\nObject.defineProperty(o, <span class="hljs-string">"a"</span>, {\n  <span class="hljs-string">value :</span> <span class="hljs-number">1</span>,\n  <span class="hljs-string">writable :</span> <span class="hljs-literal">false</span>,\n  <span class="hljs-string">configurable :</span> <span class="hljs-literal">false</span>,\n  <span class="hljs-string">enumerable :</span> <span class="hljs-literal">false</span>\n});</code></pre>\n<h3 id="\u4e00\u822c\u7684-setters-\u548c-getters">\u4e00\u822c\u7684 Setters \u548c Getters</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u8bf4\u660e\u4e86\u5982\u4f55\u5b9e\u73b0\u81ea\u6211\u5b58\u6863\u7684\u5bf9\u8c61\u3002\u5f53 temperature \u5c5e\u6027\u8bbe\u7f6e\u65f6\uff0carchive \u6570\u7ec4\u4f1a\u5f97\u5230\u4e00\u4e2a log\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Archiver</span><span class="hljs-params">()</span> </span>{\n  <span class="hljs-keyword">var</span> temperature = <span class="hljs-literal">null</span>;\n  <span class="hljs-keyword">var</span> archive = [];\n\n  Object.defineProperty(<span class="hljs-keyword">this</span>, <span class="hljs-string">\'temperature\'</span>, {\n    <span class="hljs-keyword">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{\n      console.log(<span class="hljs-string">\'get!\'</span>);\n      <span class="hljs-keyword">return</span> temperature;\n    },\n    <span class="hljs-keyword">set</span>: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(value)</span> </span>{\n      temperature = value;\n      archive.push({ val: temperature });\n    }\n  });\n\n  <span class="hljs-keyword">this</span>.getArchive = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{ <span class="hljs-keyword">return</span> archive; };\n}\n\n<span class="hljs-keyword">var</span> arc = <span class="hljs-keyword">new</span> Archiver();\narc.temperature; <span class="hljs-comment">// \'get!\'</span>\narc.temperature = <span class="hljs-number">11</span>;\narc.temperature = <span class="hljs-number">13</span>;\narc.getArchive(); <span class="hljs-comment">// [{ val: 11 }, { val: 13 }]</span></code></pre>\n<p>\u53e6\u4e00\u4e2a\u4f8b\u5b50\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> pattern = {\n    <span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'I alway return this string,whatever you have assigned\'</span>;\n    },\n    <span class="hljs-attr">set</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n        <span class="hljs-keyword">this</span>.myname = <span class="hljs-string">\'this is my name string\'</span>;\n    }\n};\n\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">TestDefineSetAndGet</span>(<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">Object</span>.defineProperty(<span class="hljs-keyword">this</span>, <span class="hljs-string">\'myproperty\'</span>, pattern);\n}\n\n\n<span class="hljs-keyword">var</span> instance = <span class="hljs-keyword">new</span> TestDefineSetAndGet();\ninstance.myproperty = <span class="hljs-string">\'test\'</span>;\n\n<span class="hljs-comment">// \'I alway return this string,whatever you have assigned\'</span>\n<span class="hljs-built_in">console</span>.log(instance.myproperty);\n<span class="hljs-comment">// \'this is my name string\'</span>\n<span class="hljs-built_in">console</span>.log(instance.myname);</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);