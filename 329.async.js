(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[329],{"8gib":function(s,a){s.exports='<h1 id="working-with-legacy-tables---\u4f7f\u7528\u9057\u7559\u8868">Working with legacy tables - \u4f7f\u7528\u9057\u7559\u8868</h1>\n<p>\u867d\u7136 Sequelize \u81ea\u8ba4\u4e3a\u53ef\u4ee5\u5f00\u7bb1\u5373\u7528, \u4f46\u662f\u5982\u679c\u4f60\u8981\u4f7f\u7528\u5e94\u7528\u4e4b\u524d\u9057\u7559\u7684\u8d44\u4ea7\u548c\u51ed\u636e,\u4ec5\u9700\u8981\u505a\u4e00\u70b9\u5fae\u4e0d\u8db3\u9053\u7684\u8bbe\u7f6e\u5373\u53ef\u3002</p>\n<h2 id="\u8868">\u8868</h2>\n<pre><code class="language-js">sequelize.<span class="hljs-class"><span class="hljs-keyword">define</span></span>(<span class="hljs-string">\'user\'</span>, {\n\n}, {\n  tableName: <span class="hljs-string">\'users\'</span>\n});</code></pre>\n<h2 id="\u5b57\u6bb5">\u5b57\u6bb5</h2>\n<pre><code class="language-js"><span class="hljs-selector-tag">sequelize</span><span class="hljs-selector-class">.define</span>(<span class="hljs-string">\'modelName\'</span>, {\n  <span class="hljs-attribute">userId</span>: {\n    <span class="hljs-attribute">type</span>: Sequelize.INTEGER,\n    <span class="hljs-attribute">field</span>: <span class="hljs-string">\'user_id\'</span>\n  }\n});</code></pre>\n<h2 id="\u4e3b\u952e">\u4e3b\u952e</h2>\n<p>Sequelize\u5c06\u5047\u8bbe\u60a8\u7684\u8868\u9ed8\u8ba4\u5177\u6709<code>id</code>\u4e3b\u952e\u5c5e\u6027\u3002</p>\n<p>\u8981\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684\u4e3b\u952e\uff1a</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">sequelize</span><span class="hljs-selector-class">.define</span>(<span class="hljs-string">\'collection\'</span>, {\n  <span class="hljs-attribute">uid</span>: {\n    <span class="hljs-attribute">type</span>: Sequelize.INTEGER,\n    <span class="hljs-attribute">primaryKey</span>: true,\n    <span class="hljs-attribute">autoIncrement</span>: true <span class="hljs-comment">// Automatically gets converted to SERIAL for postgres</span>\n  }\n});\n\n<span class="hljs-selector-tag">sequelize</span><span class="hljs-selector-class">.define</span>(<span class="hljs-string">\'collection\'</span>, {\n  <span class="hljs-attribute">uuid</span>: {\n    <span class="hljs-attribute">type</span>: Sequelize.UUID,\n    <span class="hljs-attribute">primaryKey</span>: true\n  }\n});</code></pre>\n<p>\u5982\u679c\u4f60\u7684\u6a21\u578b\u6839\u672c\u6ca1\u6709\u4e3b\u952e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 <code>Model.removeAttribute(&#39;id&#39;);</code></p>\n<h2 id="\u5916\u952e">\u5916\u952e</h2>\n<pre><code class="language-js"><span class="hljs-comment">// 1:1</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Organization</span>.</span></span>belongs<span class="hljs-constructor">To(User, {<span class="hljs-params">foreignKey</span>: \'<span class="hljs-params">owner_id</span>\'})</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">User</span>.</span></span>has<span class="hljs-constructor">One(Organization, {<span class="hljs-params">foreignKey</span>: \'<span class="hljs-params">owner_id</span>\'})</span>;\n\n<span class="hljs-comment">// 1:M</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Project</span>.</span></span>has<span class="hljs-constructor">Many(Task, {<span class="hljs-params">foreignKey</span>: \'<span class="hljs-params">tasks_pk</span>\'})</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Task</span>.</span></span>belongs<span class="hljs-constructor">To(Project, {<span class="hljs-params">foreignKey</span>: \'<span class="hljs-params">tasks_pk</span>\'})</span>;\n\n<span class="hljs-comment">// N:M</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">User</span>.</span></span>has<span class="hljs-constructor">Many(Role, {<span class="hljs-params">through</span>: \'<span class="hljs-params">user_has_roles</span>\', <span class="hljs-params">foreignKey</span>: \'<span class="hljs-params">user_role_user_id</span>\'})</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Role</span>.</span></span>has<span class="hljs-constructor">Many(User, {<span class="hljs-params">through</span>: \'<span class="hljs-params">user_has_roles</span>\', <span class="hljs-params">foreignKey</span>: \'<span class="hljs-params">roles_identifier</span>\'})</span>;</code></pre>\n'}}]);