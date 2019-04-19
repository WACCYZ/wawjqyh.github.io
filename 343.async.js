(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[343],{"0g97":function(s,n){s.exports='<h1 id="\u6253\u5305-js">\u6253\u5305 js</h1>\n<p>\u4f7f\u7528 webpack \u7684\u65b9\u5f0f</p>\n<ul>\n<li>webpack \u547d\u4ee4</li>\n<li>webpack \u914d\u7f6e</li>\n<li>\u7b2c\u4e09\u65b9\u811a\u624b\u67b6</li>\n</ul>\n<h2 id="\u57fa\u672c\u914d\u7f6e">\u57fa\u672c\u914d\u7f6e</h2>\n<pre><code class="language-javascript">const path = require(<span class="hljs-string">"path"</span>);\n\nmodule.exports = {\n<span class="hljs-symbol">  mode:</span> <span class="hljs-string">"production"</span>, <span class="hljs-comment">// \u6253\u5305\u73af\u5883</span>\n<span class="hljs-symbol">\n  entry:</span> {\n<span class="hljs-symbol">    app:</span> <span class="hljs-string">"./src/index.js"</span> <span class="hljs-comment">// \u5165\u53e3\u6587\u4ef6</span>\n  },\n<span class="hljs-symbol">\n  output:</span> {\n<span class="hljs-symbol">    path:</span> path.resolve(__dirname, <span class="hljs-string">"dist"</span>), <span class="hljs-comment">// \u8f93\u51fa\u6587\u4ef6\u7684\u76ee\u5f55</span>\n<span class="hljs-symbol">    filename:</span> <span class="hljs-string">"[name].[hash:5].js"</span> <span class="hljs-comment">// \u6587\u4ef6\u540d</span>\n  }\n};</code></pre>\n<pre><code class="language-bash"><span class="hljs-meta"># \u6267\u884c webpack\uff0c\u9700\u8981\u5168\u5c40\u5b89\u88c5webpack</span>\nwebpack\n\n<span class="hljs-meta"># \u6307\u5b9a\u6587\u4ef6\u540d</span>\nwebpack --config webpack.conf.js</code></pre>\n<h2 id="\u7f16\u8bd1-es67">\u7f16\u8bd1 ES6/7</h2>\n<p>javascript \u5728\u4e0d\u65ad\u7684\u53d1\u5c55\uff0c\u5404\u79cd\u65b0\u7684\u6807\u51c6\u548c\u63d0\u6848\u5c42\u51fa\u4e0d\u7a77\uff0c\u4f46\u662f\u7531\u4e8e\u6d4f\u89c8\u5668\u7684\u591a\u6837\u6027\uff0c\u5bfc\u81f4\u53ef\u80fd\u51e0\u5e74\u4e4b\u5185\u90fd\u65e0\u6cd5\u5e7f\u6cdb\u666e\u53ca\uff0cbabel \u53ef\u4ee5\u8ba9\u4f60\u63d0\u524d\u4f7f\u7528\u8fd9\u4e9b\u8bed\u8a00\u7279\u6027\uff0c\u4ed6\u662f\u4e00\u79cd\u7528\u9014\u5f88\u591a\u7684 javascript \u7f16\u8bd1\u5668\uff0c\u4ed6\u628a\u6700\u65b0\u7248\u7684 javascript \u7f16\u8bd1\u6210\u5f53\u4e0b\u53ef\u4ee5\u6267\u884c\u7684\u7248\u672c\uff0c\u7b80\u8a00\u4e4b\uff0c\u5229\u7528 babel \u5c31\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u5f53\u524d\u7684\u9879\u76ee\u4e2d\u968f\u610f\u7684\u4f7f\u7528\u8fd9\u4e9b\u65b0\u6700\u65b0\u7684 es6\uff0c\u751a\u81f3\u662f\u672a\u6b63\u5f0f\u53d1\u5e03\u7684\u65b0\u7279\u6027(stage 0-3)</p>\n<h3 id="babel">babel</h3>\n<p><code>babel</code> \u662f\u4e00\u4e2a\u8fd0\u7528\u5e7f\u6cdb\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\u6216\u8005\u7528\u5728\u5176\u4ed6\u6253\u5305\u5de5\u5177\u4e2d\uff0c<code>webpack</code> \u4f7f\u7528 <code>babel-loader</code></p>\n<h3 id="babel-core-\u548c-babelcore">babel-core \u548c @babel/core</h3>\n<blockquote>\n<p>babel 7 \u66f4\u6539\u4e86\u5305\u540d\uff0cBabel \u56e2\u961f\u901a\u8fc7\u4f7f\u7528 \u201cscoped\u201d packages \u7684\u65b9\u5f0f\uff0c\u6765\u7ed9\u81ea\u5df1\u7684 babel package name \u52a0\u4e0a @babel \u547d\u540d\u7a7a\u95f4\uff0c\u8fd9\u6837\u4ee5\u4fbf\u4e8e\u533a\u5206\u5b98\u65b9 package \u4ee5\u53ca \u975e\u5b98\u65b9 package\uff0c\u6240\u4ee5 babel-core \u4f1a\u53d8\u6210 @babel/core</p>\n</blockquote>\n<h3 id="babel-7-\u65b0\u7279\u6027\u65ad\u5d16\u5f0f\u53d8\u66f4">babel 7 \u65b0\u7279\u6027(\u65ad\u5d16\u5f0f\u53d8\u66f4)</h3>\n<ul>\n<li>\u5bf9\u90a3\u4e9b\u5df2\u7ecf\u4e0d\u7ef4\u62a4\u7684 node \u7248\u672c\u4e0d\u4e88\u652f\u6301\uff0c\u5305\u62ec 0.10\u30010.12\u30014\u30015</li>\n<li>Babel \u56e2\u961f\u4f1a\u901a\u8fc7\u4f7f\u7528 \u201cscoped\u201d packages \u7684\u65b9\u5f0f\uff0c\u6765\u7ed9\u81ea\u5df1\u7684 babel package name \u52a0\u4e0a @babel \u547d\u540d\u7a7a\u95f4\uff08\u8be6\u60c5\uff09\uff0c\u8fd9\u6837\u4ee5\u4fbf\u4e8e\u533a\u5206\u5b98\u65b9 package \u4ee5\u53ca \u975e\u5b98\u65b9 package\uff0c\u6240\u4ee5 babel-core \u4f1a\u53d8\u6210 @babel/core</li>\n<li>\u79fb\u9664\uff08\u5e76\u4e14\u505c\u6b62\u53d1\u5e03\uff09\u6240\u6709\u4e0e yearly \u6709\u5173\u7684 presets\uff08preset-es2015 \u7b49\uff09\u3002@babel/preset-env \u4f1a\u53d6\u4ee3\u8fd9\u4e9b presets\uff0c\u8fd9\u662f\u56e0\u4e3a @babel/preset-env \u56ca\u62ec\u4e86\u6240\u6709 yearly presets \u7684\u529f\u80fd\uff0c\u800c\u4e14 @babel/preset-env \u8fd8\u5177\u5907\u4e86\u9488\u5bf9\u7279\u5b9a\u6d4f\u89c8\u5668\u8fdb\u884c\u201c\u56e0\u6750\u65bd\u6559\u201d\u7684\u80fd\u529b</li>\n<li>\u653e\u5f03 Stage presets\uff08@babel/preset-stage-0 \u7b49\uff09\uff0c\u9009\u62e9\u652f\u6301\u5355\u4e2a proposal\u3002\u76f8\u4f3c\u7684\u5730\u65b9\u8fd8\u6709\uff0c\u4f1a\u9ed8\u8ba4\u79fb\u9664 @babel/polyfill \u5bf9 proposals \u652f\u6301</li>\n<li>\u6709\u4e9b package \u5df2\u7ecf\u6362\u540d\u5b57\uff1a\u6240\u6709 TC39 proposal plugin \u7684\u540d\u5b57\u90fd\u5df2\u7ecf\u53d8\u6210\u4ee5 @babel/plugin-proposal \u5f00\u5934\uff0c\u66ff\u6362\u4e4b\u524d\u7684 @babel/plugin-transform\u3002\u6240\u4ee5 @babel/plugin-transform-class-properties \u53d8\u6210 @babel/plugin-proposal-class-properties</li>\n<li>\u9488\u5bf9\u4e00\u4e9b\u7528\u6237\u4f1a\u624b\u52a8\u5b89\u88c5\uff08user-facing\uff09\u7684 package\uff08\u4f8b\u5982 babel-loader\uff0c@babel/cli \u7b49\uff09\uff0c\u4f1a\u7ed9 @babel/core \u52a0\u4e0a peerDependency</li>\n</ul>\n<p><a href="https://www.w3ctech.com/topic/2150" target="_blank">babel 7 \u65b0\u7279\u6027\uff08\u539f\u6587\u94fe\u63a5\uff09</a></p>\n<h3 id="\u914d\u7f6e">\u914d\u7f6e</h3>\n<pre><code class="language-javascript"><span class="hljs-symbol">module:</span> {\n<span class="hljs-symbol">  rules:</span> [\n    {\n<span class="hljs-symbol">      test:</span> /\\.js$/,\n<span class="hljs-symbol">      use:</span> <span class="hljs-string">"babel-loader"</span>,\n<span class="hljs-symbol">      exclude:</span> <span class="hljs-string">"/node_modules/"</span>\n    }\n  ];\n}</code></pre>\n<p>\u8fd9\u4e2a\u914d\u7f6e\u7528\u5904\u4e0d\u5927\uff0c\u8fd8\u9700\u8981\u914d\u7f6e presets</p>\n<h3 id="presets">presets</h3>\n<p>\u9700\u8981\u6307\u5b9a babel-loader \u6309\u7167\u54ea\u4e2a\u89c4\u8303\u6765\u7f16\u8bd1</p>\n<p>\u76ee\u524d\u7684\u89c4\u8303\uff1a</p>\n<ul>\n<li>es2015</li>\n<li>es2016</li>\n<li>es2017</li>\n<li>env(\u5e38\u7528\uff0c\u5305\u62ec es2015-es2017 \u548c\u6700\u8fd1\u7684\u7248\u672c)</li>\n<li>babel-preset-react</li>\n<li>babel-preset-stage 0-3(\u8fd8\u6ca1\u6b63\u5f0f\u53d1\u5e03\u7684\u51e0\u4e2a\u9636\u6bb5\u7684\u89c4\u8303)</li>\n</ul>\n<pre><code class="language-bash"><span class="hljs-comment"># \u5b89\u88c5</span>\n<span class="hljs-built_in">npm</span> install @babel/preset-env --save-dev</code></pre>\n<h3 id="targets-\u53c2\u6570">targets \u53c2\u6570</h3>\n<p>\u7f16\u8bd1\u65f6\u4f1a\u6839\u636e\u6307\u5b9a\u7684 targets \u6765\u9009\u62e9\u54ea\u4e9b\u8bed\u6cd5\u7f16\u8bd1\u54ea\u4e9b\u4e0d\u7f16\u8bd1</p>\n<ul>\n<li>targets.browsers \u6307\u5b9a\u54ea\u4e9b\u6d4f\u89c8\u5668</li>\n<li>targets.browsers: &quot;last 2 versions&quot; \u517c\u5bb9\u4e3b\u6d41\u6d4f\u89c8\u5668\u7684\u6700\u540e\u4e24\u4e2a\u7248\u672c</li>\n<li>targets.browsers: &quot;&gt; 1%&quot; \u517c\u5bb9\u5168\u7403\u5360\u6709\u7387\u5927\u4e8e 1%\u7684\u6d4f\u89c8\u5668</li>\n<li>targets.node \u6307\u5b9a node \u7248\u672c</li>\n</ul>\n<blockquote>\n<p>\u6570\u636e\u6765\u81ea<code>browserslist</code>(\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee)\uff0c\u548c<code>can i use</code></p>\n</blockquote>\n<pre><code class="language-javascript"><span class="hljs-symbol">module:</span> {\n<span class="hljs-symbol">  rules:</span> [\n    {\n<span class="hljs-symbol">      test:</span> /\\.js$/,\n<span class="hljs-symbol">      use:</span> {\n<span class="hljs-symbol">        loader:</span> <span class="hljs-string">"babel-loader"</span>,\n<span class="hljs-symbol">        options:</span> {\n<span class="hljs-symbol">          presets:</span> [\n            [\n              <span class="hljs-string">"@babel/preset-env"</span>,\n              {\n<span class="hljs-symbol">                targets:</span> {\n<span class="hljs-symbol">                  browsers:</span> [<span class="hljs-string">"&gt; 1%"</span>, <span class="hljs-string">"last 2 versions"</span>] <span class="hljs-comment">// \u6307\u5b9a\u652f\u6301\u54ea\u4e9b\u6d4f\u89c8\u5668</span>\n<span class="hljs-symbol">                  chrome:</span> <span class="hljs-string">"52"</span> <span class="hljs-comment">// \u6307\u5b9achrome\u7248\u672c</span>\n                }\n              }\n            ]\n          ]\n        }\n      },\n<span class="hljs-symbol">      exclude:</span> <span class="hljs-string">"/node_modules/"</span>\n    }\n  ];\n}</code></pre>\n<h3 id="polyfill-\u548c-transform-runtime">polyfill \u548c transform-runtime</h3>\n<blockquote>\n<p>preset \u53ea\u80fd\u7f16\u8bd1\u65b0\u89c4\u8303\u7684\u8bed\u6cd5\uff0c\u4f46\u662f\u4e0d\u80fd\u7f16\u8bd1\u51fd\u6570\u548c\u65b9\u6cd5\u3002es6 \u65b0\u589e\u7684\u51fd\u6570\u548c\u65b9\u6cd5\u4f4e\u7248\u672c\u7684\u6d4f\u89c8\u5668\u8fd8\u662f\u4e0d\u80fd\u8bc6\u522b\uff0c\u9700\u8981\u4f7f\u7528 polyfill</p>\n</blockquote>\n<p>\u4f8b\u5982\uff1a</p>\n<ul>\n<li><p>Promise</p>\n</li>\n<li><p>Generator</p>\n</li>\n<li><p>Set</p>\n</li>\n<li><p>Map</p>\n</li>\n<li><p>Array.from</p>\n</li>\n<li><p>Array.prototype.includes</p>\n</li>\n<li><p>Babel Polyfill\uff1a\u4f1a\u5728\u5168\u5c40\u5b9a\u4e49 es6 \u65b0\u589e\u7684\u51fd\u6570\u548c\u65b9\u6cd5\uff0c\u76f4\u63a5\u5f15\u5165\u5c31\u80fd\u4f7f\u7528\uff08\u4f1a\u6c61\u67d3\u5168\u5c40\uff09</p>\n</li>\n<li><p>transform-runtime\uff1a\u5728\u5c40\u90e8\u5f15\u7528\uff0c\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40</p>\n</li>\n</ul>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4f7f\u7528polyfill</span>\n\n<span class="hljs-keyword">import</span> <span class="hljs-string">"@babel/polyfill"</span>;\n\nlet index = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>].findIndex(item =&gt; {\n  <span class="hljs-keyword">return</span> item === <span class="hljs-number">3</span>;\n});\n\nconsole.log(index);</code></pre>\n<pre><code class="language-bash"><span class="hljs-comment"># \u4f7f\u7528transform\u9700\u8981\u5b89\u88c5\u4e0b\u9762\u4e24\u4e2a\u5305</span>\n<span class="hljs-built_in">npm</span> install --save-dev @babel/plugin-transform-runtime\n<span class="hljs-built_in">npm</span> install --save-dev @babel/runtime</code></pre>\n<pre><code class="language-javascript"><span class="hljs-symbol">rules:</span> [\n  {\n<span class="hljs-symbol">    test:</span> /\\.js$/,\n<span class="hljs-symbol">    use:</span> {\n<span class="hljs-symbol">      loader:</span> <span class="hljs-string">"babel-loader"</span>,\n<span class="hljs-symbol">      options:</span> {\n<span class="hljs-symbol">        presets:</span> [\n          [\n            <span class="hljs-string">"@babel/preset-env"</span>,\n            {\n<span class="hljs-symbol">              targets:</span> {browsers: [<span class="hljs-string">"last 2 versions"</span>]}\n            }\n          ]\n        ],\n<span class="hljs-symbol">        plugins:</span> [<span class="hljs-string">"@babel/plugin-transform-runtime"</span>]\n      }\n    },\n<span class="hljs-symbol">    exclude:</span> <span class="hljs-string">"/node_modules/"</span>\n  }\n];</code></pre>\n'}}]);