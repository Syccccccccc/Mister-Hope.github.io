"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[84188],{12914:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(79389);const e=(0,t._)("p",null,[(0,t.Uk)("在 HTML 表单中，可以上传文件的唯一控件就是 "),(0,t._)("code",null,'<input type="file">'),(0,t.Uk)("。")],-1),p=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>当一个表单包含 <code>&lt;input type=&quot;file&quot;&gt;</code> 时，表单的 <code>enctype</code> 必须指定为 <code>multipart/form-data</code>，<code>method</code> 必须指定为 <code>post</code>，浏览器才能正确编码并以 <code>multipart/form-data</code> 格式发送表单的数据。</p></div><p>出于安全考虑，浏览器只允许用户点击 <code>&lt;input type=&quot;file&quot;&gt;</code> 来选择本地文件，用 JavaScript 对 <code>&lt;input type=&quot;file&quot;&gt;</code> 的 <code>value</code> 赋值是没有任何效果的。当用户选择了上传某个文件后，JavaScript 也无法获得该文件的真实路径:</p><p>通常，上传的文件都由后台服务器处理，JavaScript 可以在提交表单时对文件扩展名做检查，以便防止用户上传无效格式的文件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-file-upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> filename <span class="token operator">=</span> f<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;C:\\fakepath\\test.png&#39;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>\n  <span class="token operator">!</span>filename <span class="token operator">||</span>\n  <span class="token operator">!</span><span class="token punctuation">(</span>\n    filename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span>\n    filename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.png&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span>\n    filename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.gif&quot;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Can only upload image file.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-api" tabindex="-1"><a class="header-anchor" href="#file-api" aria-hidden="true">#</a> File API</h2><p>由于 JavaScript 对用户上传的文件操作非常有限，尤其是无法读取文件内容，使得很多需要操作文件的网页不得不用 Flash 这样的第三方插件来实现。</p><p>随着 HTML5 的普及，新增的 File API 允许 JavaScript 读取文件内容，获得更多的文件信息。</p><p>HTML5 的 File API 提供了 <code>File</code> 和 <code>FileReader</code> 两个主要对象，可以获得文件信息并读取文件。</p><p>下面的例子演示了如何读取用户选取的图片文件，并在一个 <code>&lt;div&gt;</code> 中预览图像:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fileInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-image-file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-file-info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> preview <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-image-preview&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 监听change事件:</span>\nfileInput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 清除背景图片:</span>\n  preview<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n  <span class="token comment">// 检查文件是否选择:</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileInput<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    info<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;没有选择文件&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 获取File引用:</span>\n  <span class="token keyword">const</span> file <span class="token operator">=</span> fileInput<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 获取File信息:</span>\n  info<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">文件: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;br&gt;大小: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;br&gt;修改: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span>lastModifiedDate<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>\n    file<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;image/jpeg&quot;</span> <span class="token operator">&amp;&amp;</span>\n    file<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;image/png&quot;</span> <span class="token operator">&amp;&amp;</span>\n    file<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&quot;image/gif&quot;</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;不是有效的图片文件!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 读取文件:</span>\n  <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// &#39;data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...&#39;</span>\n\n    preview<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment">// 以DataURL的形式读取文件:</span>\n  reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码演示了如何通过 HTML5 的 File API 读取文件内容。以 DataURL 的形式读取到的文件是一个字符串，类似于 <code>data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...</code>，常用于设置图像。如果需要服务器端处理，把字符串 <code>base64</code>,后面的字符发送给服务器并用 base64 解码就可以得到原始文件的二进制内容。</p><h2 id="回调" tabindex="-1"><a class="header-anchor" href="#回调" aria-hidden="true">#</a> 回调</h2><p>上面的代码还演示了 JavaScript 的一个重要的特性就是单线程执行模式。在 JavaScript 中，浏览器的 JavaScript 执行引擎在执行 JavaScript 代码时，总是以单线程模式执行，也就是说，任何时候，JavaScript 代码都不可能同时有多于 <code>1</code> 个线程在执行。</p><p>您可能会问，单线程模式执行的 JavaScript，如何处理多任务?</p><p>在 JavaScript 中，执行多任务实际上都是异步调用，比如上面的代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就会发起一个异步操作来读取文件内容。因为是异步操作，所以我们在 JavaScript 代码中就不知道什么时候操作结束，因此需要先设置一个回调函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 当文件读取完成后，自动调用此函数:</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当文件读取完成后，JavaScript 引擎将自动调用我们设置的回调函数。执行回调函数时，文件已经读取完毕，所以我们可以在回调函数内部安全地获得文件内容。</p>',19),o={},c=(0,a(61935).Z)(o,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.kq)(" more "),p])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},69166:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-fb7c1444","path":"/code/language/js/browser/file.html","title":"操作文件","lang":"zh-CN","frontmatter":{"title":"操作文件","icon":"file","date":"2019-10-17T00:00:00.000Z","category":["JavaScript"],"summary":"在 HTML 表单中，可以上传文件的唯一控件就是 &lt;input type=&quot;file&quot;&gt;。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/browser/file.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"操作文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>在 HTML 表单中，可以上传文件的唯一控件就是 <code v-pre>&lt;input type=&quot;file&quot;&gt;</code>。</p>\\n","headers":[{"level":2,"title":"File API","slug":"file-api","link":"#file-api","children":[]},{"level":2,"title":"回调","slug":"回调","link":"#回调","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"code/language/js/browser/file.md","localizedDate":"2019年10月17日"}')}}]);