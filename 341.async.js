(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[341],{t6pO:function(s,a){s.exports='<h1 id="scopes---\u4f5c\u7528\u57df">Scopes - \u4f5c\u7528\u57df</h1>\n<p>\u4f5c\u7528\u57df\u5141\u8bb8\u4f60\u5b9a\u4e49\u5e38\u7528\u67e5\u8be2\uff0c\u4ee5\u4fbf\u4ee5\u540e\u8f7b\u677e\u4f7f\u7528\u3002 \u4f5c\u7528\u57df\u53ef\u4ee5\u5305\u62ec\u4e0e\u5e38\u89c4\u67e5\u627e\u5668 <code>where</code>, <code>include</code>, <code>limit</code> \u7b49\u6240\u6709\u76f8\u540c\u7684\u5c5e\u6027\u3002</p>\n<h2 id="\u5b9a\u4e49">\u5b9a\u4e49</h2>\n<p>\u4f5c\u7528\u57df\u5728\u6a21\u578b\u5b9a\u4e49\u4e2d\u5b9a\u4e49\uff0c\u53ef\u4ee5\u662ffinder\u5bf9\u8c61\u6216\u8fd4\u56definder\u5bf9\u8c61\u7684\u51fd\u6570\uff0c\u9664\u4e86\u9ed8\u8ba4\u4f5c\u7528\u57df\uff0c\u8be5\u4f5c\u7528\u4e8e\u53ea\u80fd\u662f\u4e00\u4e2a\u5bf9\u8c61\uff1a</p>\n<pre><code class="language-js"><span class="hljs-string">const</span> <span class="hljs-string">Project</span> <span class="hljs-string">=</span> <span class="hljs-string">sequelize.define(\'project\',</span> <span class="hljs-string">{</span>\n  <span class="hljs-string">//</span> <span class="hljs-string">\u5c5e\u6027</span>\n<span class="hljs-string">},</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">  defaultScope:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">    where:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">      active:</span> <span class="hljs-literal">true</span>\n    <span class="hljs-string">}</span>\n  <span class="hljs-string">},</span>\n<span class="hljs-attr">  scopes:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">    deleted:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">      where:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">        deleted:</span> <span class="hljs-literal">true</span>\n      <span class="hljs-string">}</span>\n    <span class="hljs-string">},</span>\n<span class="hljs-attr">    activeUsers:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">      include:</span> <span class="hljs-string">[</span>\n        <span class="hljs-string">{</span> <span class="hljs-attr">model:</span> <span class="hljs-string">User,</span> <span class="hljs-attr">where:</span> <span class="hljs-string">{</span> <span class="hljs-attr">active:</span> <span class="hljs-literal">true</span> <span class="hljs-string">}}</span>\n      <span class="hljs-string">]</span>\n    <span class="hljs-string">},</span>\n<span class="hljs-attr">    random:</span> <span class="hljs-string">function</span> <span class="hljs-string">()</span> <span class="hljs-string">{</span>\n      <span class="hljs-string">return</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">        where:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">          someNumber:</span> <span class="hljs-string">Math.random()</span>\n        <span class="hljs-string">}</span>\n      <span class="hljs-string">}</span>\n    <span class="hljs-string">},</span>\n<span class="hljs-attr">    accessLevel:</span> <span class="hljs-string">function</span> <span class="hljs-string">(value)</span> <span class="hljs-string">{</span>\n      <span class="hljs-string">return</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">        where:</span> <span class="hljs-string">{</span>\n<span class="hljs-attr">          accessLevel:</span> <span class="hljs-string">{</span>\n            <span class="hljs-string">[Op.gte]:</span> <span class="hljs-string">value</span>\n          <span class="hljs-string">}</span>\n        <span class="hljs-string">}</span>\n      <span class="hljs-string">}</span>\n    <span class="hljs-string">}</span>\n  <span class="hljs-string">}</span>\n<span class="hljs-string">});</span></code></pre>\n<p>\u901a\u8fc7\u8c03\u7528 <code>addScope</code> \u5b9a\u4e49\u6a21\u578b\u540e\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u4f5c\u7528\u57df\u3002 \u8fd9\u5bf9\u4e8e\u5177\u6709\u5305\u542b\u7684\u4f5c\u7528\u57df\u7279\u522b\u6709\u7528\uff0c\u5176\u4e2d\u5728\u5b9a\u4e49\u5176\u4ed6\u6a21\u578b\u65f6\u53ef\u80fd\u4e0d\u4f1a\u5b9a\u4e49 include \u4e2d\u7684\u6a21\u578b\u3002</p>\n<p>\u59cb\u7ec8\u5e94\u7528\u9ed8\u8ba4\u4f5c\u7528\u57df\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u901a\u8fc7\u4e0a\u9762\u7684\u6a21\u578b\u5b9a\u4e49\uff0c<code>Project.findAll()</code> \u5c06\u521b\u5efa\u4ee5\u4e0b\u67e5\u8be2\uff1a</p>\n<pre><code class="language-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> projects <span class="hljs-keyword">WHERE</span> active = <span class="hljs-literal">true</span></code></pre>\n<p>\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 <code>.unscoped()</code>, <code>.scope(null)</code> \u6216\u901a\u8fc7\u8c03\u7528\u53e6\u4e00\u4e2a\u4f5c\u7528\u57df\u6765\u5220\u9664\u9ed8\u8ba4\u4f5c\u7528\u57df\uff1a</p>\n<pre><code class="language-js"><span class="hljs-keyword">Project</span>.scope(<span class="hljs-string">\'deleted\'</span>).<span class="hljs-keyword">findAll</span>(); <span class="hljs-comment">// \u5220\u9664\u9ed8\u8ba4\u4f5c\u7528\u57df</span></code></pre>\n<pre><code class="language-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> projects <span class="hljs-keyword">WHERE</span> deleted = <span class="hljs-literal">true</span></code></pre>\n<p>\u8fd8\u53ef\u4ee5\u5728\u4f5c\u7528\u57df\u5b9a\u4e49\u4e2d\u5305\u542b\u4f5c\u7528\u57df\u6a21\u578b\u3002 \u8fd9\u8ba9\u4f60\u907f\u514d\u91cd\u590d <code>include</code>\uff0c<code>attributes</code> \u6216 <code>where</code> \u5b9a\u4e49\u3002</p>\n<p>\u4f7f\u7528\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5e76\u5728\u5305\u542b\u7684\u7528\u6237\u6a21\u578b\u4e2d\u8c03\u7528 <code>active</code> \u4f5c\u7528\u57df\uff08\u800c\u4e0d\u662f\u76f4\u63a5\u5728\u8be5 include \u5bf9\u8c61\u4e2d\u6307\u5b9a\u6761\u4ef6\uff09\uff1a</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">activeUsers</span>: {\n  <span class="hljs-attribute">include</span>: [\n    { model: User.<span class="hljs-built_in">scope</span>(<span class="hljs-string">\'active\'</span>)}\n  ]\n}</code></pre>\n<h2 id="\u4f7f\u7528">\u4f7f\u7528</h2>\n<p>\u901a\u8fc7\u5728\u6a21\u578b\u5b9a\u4e49\u4e0a\u8c03\u7528 <code>.scope</code> \u6765\u5e94\u7528\u4f5c\u7528\u57df\uff0c\u4f20\u9012\u4e00\u4e2a\u6216\u591a\u4e2a\u4f5c\u7528\u57df\u7684\u540d\u79f0\u3002 <code>.scope</code> \u8fd4\u56de\u4e00\u4e2a\u5168\u529f\u80fd\u7684\u6a21\u578b\u5b9e\u4f8b\uff0c\u5b83\u5177\u6709\u6240\u6709\u5e38\u89c4\u7684\u65b9\u6cd5\uff1a<code>.findAll</code>\uff0c<code>.update</code>\uff0c<code>.count</code>\uff0c<code>.destroy</code>\u7b49\u7b49\u3002\u4f60\u53ef\u4ee5\u4fdd\u5b58\u8fd9\u4e2a\u6a21\u578b\u5b9e\u4f8b\u5e76\u7a0d\u540e\u518d\u6b21\u4f7f\u7528\uff1a</p>\n<pre><code class="language-js">const DeletedProjects = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Project</span>.</span></span>scope(\'deleted\');\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">DeletedProjects</span>.</span></span>find<span class="hljs-constructor">All()</span>;\n<span class="hljs-comment">// \u8fc7\u4e00\u6bb5\u65f6\u95f4</span>\n\n<span class="hljs-comment">// \u8ba9\u6211\u4eec\u518d\u6b21\u5bfb\u627e\u88ab\u5220\u9664\u7684\u9879\u76ee\uff01</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">DeletedProjects</span>.</span></span>find<span class="hljs-constructor">All()</span>;</code></pre>\n<p>\u4f5c\u7528\u57df\u9002\u7528\u4e8e  <code>.find</code>, <code>.findAll</code>, <code>.count</code>, <code>.update</code>, <code>.increment</code> \u548c <code>.destroy</code>.</p>\n<p>\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u8c03\u7528\u4f5c\u4e3a\u51fd\u6570\u7684\u4f5c\u7528\u57df\u3002 \u5982\u679c\u4f5c\u7528\u57df\u6ca1\u6709\u4efb\u4f55\u53c2\u6570\uff0c\u5b83\u53ef\u4ee5\u6b63\u5e38\u8c03\u7528\u3002 \u5982\u679c\u4f5c\u7528\u57df\u91c7\u7528\u53c2\u6570\uff0c\u5219\u4f20\u9012\u4e00\u4e2a\u5bf9\u8c61\uff1a</p>\n<pre><code class="language-js"><span class="hljs-keyword">Project</span>.scope(<span class="hljs-string">\'random\'</span>, { method: [<span class="hljs-string">\'accessLevel\'</span>, <span class="hljs-number">19</span>]}).<span class="hljs-keyword">findAll</span>();</code></pre>\n<pre><code class="language-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> projects <span class="hljs-keyword">WHERE</span> someNumber = <span class="hljs-number">42</span> <span class="hljs-keyword">AND</span> accessLevel &gt;= <span class="hljs-number">19</span></code></pre>\n<h2 id="\u5408\u5e76">\u5408\u5e76</h2>\n<p>\u901a\u8fc7\u5c06\u4f5c\u7528\u57df\u6570\u7ec4\u4f20\u9012\u5230 <code>.scope</code> \u6216\u901a\u8fc7\u5c06\u4f5c\u7528\u57df\u4f5c\u4e3a\u8fde\u7eed\u53c2\u6570\u4f20\u9012\uff0c\u53ef\u4ee5\u540c\u65f6\u5e94\u7528\u591a\u4e2a\u4f5c\u7528\u57df\u3002</p>\n<pre><code class="language-js"><span class="hljs-comment">// \u8fd9\u4e24\u4e2a\u662f\u7b49\u4ef7\u7684</span>\n<span class="hljs-keyword">Project</span>.scope(<span class="hljs-string">\'deleted\'</span>, <span class="hljs-string">\'activeUsers\'</span>).<span class="hljs-keyword">findAll</span>();\n<span class="hljs-keyword">Project</span>.scope([<span class="hljs-string">\'deleted\'</span>, <span class="hljs-string">\'activeUsers\'</span>]).<span class="hljs-keyword">findAll</span>();</code></pre>\n<pre><code class="language-sql">SELECT * <span class="hljs-keyword">FROM</span> projects\nINNER JOIN<span class="hljs-built_in"> users </span>ON projects.userId = users.id\n<span class="hljs-keyword">AND</span> users.active = <span class="hljs-literal">true</span></code></pre>\n<p>\u5982\u679c\u8981\u5c06\u5176\u4ed6\u4f5c\u7528\u57df\u4e0e\u9ed8\u8ba4\u4f5c\u7528\u57df\u4e00\u8d77\u5e94\u7528\uff0c\u8bf7\u5c06\u952e <code>defaultScope</code> \u4f20\u9012\u7ed9 <code>.scope</code>\uff1a</p>\n<pre><code class="language-js"><span class="hljs-keyword">Project</span>.scope(<span class="hljs-string">\'defaultScope\'</span>, <span class="hljs-string">\'deleted\'</span>).<span class="hljs-keyword">findAll</span>();</code></pre>\n<pre><code class="language-sql"><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">FROM</span> projects <span class="hljs-keyword">WHERE</span> active = <span class="hljs-literal">true</span> <span class="hljs-keyword">AND</span> deleted = <span class="hljs-literal">true</span></code></pre>\n<p>\u5f53\u8c03\u7528\u591a\u4e2a\u4f5c\u7528\u57df\u65f6\uff0c\u540e\u7eed\u4f5c\u7528\u57df\u7684\u952e\u5c06\u8986\u76d6\u4ee5\u524d\u7684\u4f5c\u7528\u57df\uff08\u7c7b\u4f3c\u4e8e  <a href="https://lodash.com/docs#assign">_.assign</a> \uff09\u3002 \u8003\u8651\u4e24\u4e2a\u4f5c\u7528\u57df\uff1a</p>\n<pre><code class="language-js">{\n  <span class="hljs-attribute">scope1</span>: {\n    <span class="hljs-attribute">where</span>: {\n      <span class="hljs-attribute">firstName</span>: <span class="hljs-string">\'bob\'</span>,\n      <span class="hljs-attribute">age</span>: {\n        [Op.gt]: <span class="hljs-number">20</span>\n      }\n    },\n    <span class="hljs-attribute">limit</span>: <span class="hljs-number">2</span>\n  },\n  <span class="hljs-attribute">scope2</span>: {\n    <span class="hljs-attribute">where</span>: {\n      <span class="hljs-attribute">age</span>: {\n        [Op.gt]: <span class="hljs-number">30</span>\n      }\n    },\n    <span class="hljs-attribute">limit</span>: <span class="hljs-number">10</span>\n  }\n}</code></pre>\n<p>\u8c03\u7528  <code>.scope(&#39;scope1&#39;, &#39;scope2&#39;)</code> \u5c06\u4ea7\u751f\u4ee5\u4e0b\u67e5\u8be2</p>\n<pre><code class="language-sql"><span class="hljs-keyword">WHERE</span> firstName = <span class="hljs-string">\'bob\'</span> <span class="hljs-keyword">AND</span> age &gt; <span class="hljs-number">30</span> <span class="hljs-keyword">LIMIT</span> <span class="hljs-number">10</span></code></pre>\n<p>\u6ce8\u610f <code>scope2</code> \u8986\u76d6 <code>limit</code> \u548c <code>age</code>\uff0c\u800c <code>firstName</code> \u88ab\u4fdd\u7559\u3002 <code>limit</code>\uff0c<code>offset</code>\uff0c<code>order</code>\uff0c<code>paranoid</code>\uff0c<code>lock</code>\u548c<code>raw</code>\u88ab\u8986\u76d6\uff0c\u800c<code>where</code>\u548c<code>include</code>\u88ab\u6d45\u5c42\u5408\u5e76\u3002 \u8fd9\u610f\u5473\u7740\u76f8\u540c\u7684\u952e\u5728\u540c\u4e00\u4e2a\u6a21\u578b\u7684\u5bf9\u8c61\u4ee5\u53ca\u968f\u540e\u7684\u5305\u542b\u90fd\u5c06\u76f8\u4e92\u8986\u76d6\u3002</p>\n<p>\u5f53\u5c06\u67e5\u627e\u5bf9\u8c61\u76f4\u63a5\u4f20\u9012\u5230\u4f5c\u7528\u57df\u6a21\u578b\u4e0a\u7684 findAll \u65f6\uff0c\u9002\u7528\u76f8\u540c\u7684\u5408\u5e76\u903b\u8f91\uff1a</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">Project</span><span class="hljs-selector-class">.scope</span>(<span class="hljs-string">\'deleted\'</span>)<span class="hljs-selector-class">.findAll</span>({\n  <span class="hljs-attribute">where</span>: {\n    <span class="hljs-attribute">firstName</span>: <span class="hljs-string">\'john\'</span>\n  }\n})</code></pre>\n<pre><code class="language-sql"><span class="hljs-keyword">WHERE</span> deleted = <span class="hljs-literal">true</span> <span class="hljs-literal">AND</span> firstName = <span class="hljs-string">\'john\'</span></code></pre>\n<p>\u8fd9\u91cc\u7684 <code>deleted</code> \u4f5c\u7528\u57df\u4e0e finder \u5408\u5e76\u3002 \u5982\u679c\u6211\u4eec\u8981\u5c06 <code>where: { firstName: &#39;john&#39;, deleted: false }</code>  \u4f20\u9012\u7ed9 finder\uff0c\u90a3\u4e48 <code>deleted</code> \u4f5c\u7528\u57df\u5c06\u88ab\u8986\u76d6\u3002</p>\n<h2 id="\u5173\u8054">\u5173\u8054</h2>\n<p>Sequelize \u4e0e\u5173\u8054\u6709\u4e24\u4e2a\u4e0d\u540c\u4f46\u76f8\u5173\u7684\u4f5c\u7528\u57df\u6982\u5ff5\u3002 \u5dee\u5f02\u662f\u5fae\u5999\u4f46\u91cd\u8981\u7684\uff1a</p>\n<ul>\n<li><strong>\u5173\u8054\u4f5c\u7528\u57df</strong>  \u5141\u8bb8\u60a8\u5728\u83b7\u53d6\u548c\u8bbe\u7f6e\u5173\u8054\u65f6\u6307\u5b9a\u9ed8\u8ba4\u5c5e\u6027 - \u5728\u5b9e\u73b0\u591a\u6001\u5173\u8054\u65f6\u5f88\u6709\u7528\u3002 \u5f53\u4f7f\u7528<code>get</code>\uff0c<code>set</code>\uff0c<code>add</code>\u548c<code>create</code>\u76f8\u5173\u8054\u7684\u6a21\u578b\u51fd\u6570\u65f6\uff0c\u8fd9\u4e2a\u4f5c\u7528\u57df\u4ec5\u5728\u4e24\u4e2a\u6a21\u578b\u4e4b\u95f4\u7684\u5173\u8054\u4e0a\u88ab\u8c03\u7528</li>\n<li><strong>\u5173\u8054\u6a21\u578b\u4e0a\u7684\u4f5c\u7528\u57df</strong> \u5141\u8bb8\u60a8\u5728\u83b7\u53d6\u5173\u8054\u65f6\u5e94\u7528\u9ed8\u8ba4\u548c\u5176\u4ed6\u4f5c\u7528\u57df\uff0c\u5e76\u5141\u8bb8\u60a8\u5728\u521b\u5efa\u5173\u8054\u65f6\u4f20\u9012\u4f5c\u7528\u57df\u6a21\u578b\u3002 \u8fd9\u4e9b\u4f5c\u7528\u57df\u90fd\u9002\u7528\u4e8e\u6a21\u578b\u4e0a\u7684\u5e38\u89c4\u67e5\u627e\u548c\u901a\u8fc7\u5173\u8054\u67e5\u627e\u3002</li>\n</ul>\n<p>\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u601d\u8003\u6a21\u578bPost\u548cComment\u3002 \u6ce8\u91ca\u4e0e\u5176\u4ed6\u51e0\u4e2a\u6a21\u578b\uff08\u56fe\u50cf\uff0c\u89c6\u9891\u7b49\uff09\u76f8\u5173\u8054\uff0c\u6ce8\u91ca\u548c\u5176\u4ed6\u6a21\u578b\u4e4b\u95f4\u7684\u5173\u8054\u662f\u591a\u6001\u7684\uff0c\u8fd9\u610f\u5473\u7740\u9664\u4e86\u5916\u952e <code>commentable_id</code> \u4e4b\u5916\uff0c\u6ce8\u91ca\u8fd8\u5b58\u50a8\u4e00\u4e2a<code>commentable</code>\u5217\u3002</p>\n<p>\u53ef\u4ee5\u4f7f\u7528  <em>association scope</em> \u6765\u5b9e\u73b0\u591a\u6001\u5173\u8054\uff1a</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">this</span><span class="hljs-selector-class">.Post</span><span class="hljs-selector-class">.hasMany</span>(<span class="hljs-selector-tag">this</span><span class="hljs-selector-class">.Comment</span>, {\n  <span class="hljs-attribute">foreignKey</span>: <span class="hljs-string">\'commentable_id\'</span>,\n  scope: {\n    commentable: <span class="hljs-string">\'post\'</span>\n  }\n});</code></pre>\n<p>\u5f53\u8c03\u7528 <code>post.getComments()</code> \u65f6\uff0c\u8fd9\u5c06\u81ea\u52a8\u6dfb\u52a0 <code>WHERE commentable = &#39;post&#39;</code>\u3002 \u7c7b\u4f3c\u5730\uff0c\u5f53\u5411\u5e16\u5b50\u6dfb\u52a0\u65b0\u7684\u6ce8\u91ca\u65f6\uff0c<code>commentable</code> \u4f1a\u81ea\u52a8\u8bbe\u7f6e\u4e3a <code>&#39;post&#39;</code>\u3002 \u5173\u8054\u4f5c\u7528\u57df\u662f\u4e3a\u4e86\u5b58\u6d3b\u4e8e\u540e\u53f0\uff0c\u6ca1\u6709\u7a0b\u5e8f\u5458\u4e0d\u5fc5\u62c5\u5fc3 - \u5b83\u4e0d\u80fd\u88ab\u7981\u7528\u3002 \u6709\u5173\u66f4\u5b8c\u6574\u7684\u591a\u6001\u6027\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605 <a href="/manual/tutorial/associations.html#scopes">\u5173\u8054\u4f5c\u7528\u57df</a></p>\n<p>\u90a3\u4e48\u8003\u8651\u90a3\u4e2aPost\u7684\u9ed8\u8ba4\u4f5c\u7528\u57df\u53ea\u663e\u793a\u6d3b\u52a8\u7684\u5e16\u5b50\uff1a<code>where: { active: true }</code>\u3002 \u8be5\u4f5c\u7528\u57df\u5b58\u5728\u4e8e\u76f8\u5173\u8054\u7684\u6a21\u578b\uff08Post\uff09\u4e0a\uff0c\u800c\u4e0d\u662f\u50cf<code>commentable</code> \u4f5c\u7528\u57df\u90a3\u6837\u5728\u5173\u8054\u4e0a\u3002 \u5c31\u50cf\u5728\u8c03\u7528<code>Post.findAll()</code> \u65f6\u4e00\u6837\u5e94\u7528\u9ed8\u8ba4\u4f5c\u7528\u57df\uff0c\u5f53\u8c03\u7528 <code>User.getPosts()</code> \u65f6\uff0c\u5b83\u4e5f\u4f1a\u88ab\u5e94\u7528 - \u8fd9\u53ea\u4f1a\u8fd4\u56de\u8be5\u7528\u6237\u7684\u6d3b\u52a8\u5e16\u5b50\u3002</p>\n<p>\u8981\u7981\u7528\u9ed8\u8ba4\u4f5c\u7528\u57df\uff0c\u5c06 <code>scope: null</code> \u4f20\u9012\u7ed9 getter\uff1a <code>User.getPosts({ scope: null })</code>\u3002 \u540c\u6837\uff0c\u5982\u679c\u8981\u5e94\u7528\u5176\u4ed6\u4f5c\u7528\u57df\uff0c\u8bf7\u50cf\u8fd9\u6837: </p>\n<pre><code class="language-js"><span class="hljs-selector-tag">User</span><span class="hljs-selector-class">.getPosts</span>({ <span class="hljs-attribute">scope</span>: [<span class="hljs-string">\'scope1\'</span>, <span class="hljs-string">\'scope2\'</span>]});</code></pre>\n<p>\u5982\u679c\u8981\u4e3a\u5173\u8054\u6a21\u578b\u4e0a\u7684\u4f5c\u7528\u57df\u521b\u5efa\u5feb\u6377\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5c06\u4f5c\u7528\u57df\u6a21\u578b\u4f20\u9012\u7ed9\u5173\u8054\u3002 \u8003\u8651\u4e00\u4e2a\u5feb\u6377\u65b9\u5f0f\u6765\u83b7\u53d6\u7528\u6237\u6240\u6709\u5df2\u5220\u9664\u7684\u5e16\u5b50\uff1a</p>\n<pre><code class="language-js">const Post = sequelize.define(\'post\', attributes, {\n  defaultScope: {\n    where: {\n      active: <span class="hljs-literal">true</span>\n    }\n  },\n  scopes: {\n    deleted: {\n      where: {\n        deleted: <span class="hljs-literal">true</span>\n      }\n    }\n  }\n});\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">User</span>.</span></span>has<span class="hljs-constructor">Many(Post)</span>; <span class="hljs-comment">// \u5e38\u89c4 getPosts \u5173\u8054</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">User</span>.</span></span>has<span class="hljs-constructor">Many(Post.<span class="hljs-params">scope</span>(\'<span class="hljs-params">deleted</span>\')</span>, { <span class="hljs-keyword">as</span>: \'deletedPosts\' });\n</code></pre>\n<pre><code class="language-js"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">User</span>.</span></span>get<span class="hljs-constructor">Posts()</span>; <span class="hljs-comment">// WHERE active = true</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">User</span>.</span></span>get<span class="hljs-constructor">DeletedPosts()</span>; <span class="hljs-comment">// WHERE deleted = true</span></code></pre>\n'}}]);