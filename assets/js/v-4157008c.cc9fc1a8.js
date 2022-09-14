"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[31289],{88755:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var t=a(79389);const e=(0,t._)("p",null,"Ajax 不是 JavaScript 的规范，它只是一个哥们“发明”的缩写: Asynchronous JavaScript and XML，意思就是用 JavaScript 执行异步网络请求。",-1),p=(0,t.uE)('<p>如果仔细观察一个 Form 的提交，您就会发现，一旦用户点击 “Submit” 按钮，表单开始提交，浏览器就会刷新页面，然后在新页面里告诉您操作是成功了还是失败了。如果不幸由于网络太慢或者其他原因，就会得到一个 404 页面。</p><p>这就是 Web 的运作原理: 一次 HTTP 请求对应一个页面。</p><p>如果要让用户留在当前页面中，同时发出新的 HTTP 请求，就必须用 JavaScript 发送这个新请求，接收到数据后，再用 JavaScript 更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。</p><p>最早大规模使用 Ajax 的就是 Gmail，Gmail 的页面在首次加载后，剩下的所有数据都依赖于 Ajax 来更新。</p><p>用 JavaScript 写一个完整的 Ajax 代码并不复杂，但是需要注意: Ajax 请求是异步执行的，也就是说，要通过回调函数获得响应。</p><p>在现代浏览器上写 Ajax 主要依靠 XMLHttpRequest 对象:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">fail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Error code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建XMLHttpRequest对象</span>\n\nrequest<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 状态发生变化时，函数被回调</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 成功完成</span>\n    <span class="token comment">// 判断响应结果:</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span>\n      <span class="token comment">// 成功，通过responseText拿到响应的文本:</span>\n      <span class="token keyword">return</span> <span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 失败，根据响应码判断失败原因:</span>\n    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// HTTP请求还在继续...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 发送请求:</span>\nrequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/api/categories&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;请求已发送，请等待响应...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于低版本的 IE，需要换一个 ActiveXObject 对象:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ie-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">fail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ie-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Error code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建Microsoft.XMLHTTP对象</span>\n\nrequest<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 状态发生变化时，函数被回调</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 成功完成</span>\n    <span class="token comment">// 判断响应结果:</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span>\n      <span class="token comment">// 成功，通过responseText拿到响应的文本:</span>\n      <span class="token keyword">return</span> <span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 失败，根据响应码判断失败原因:</span>\n    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// HTTP请求还在继续...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 发送请求:</span>\nrequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/api/categories&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;请求已发送，请等待响应...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想把标准写法和 IE 写法混在一起，可以这么写:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> request<span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">else</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过检测 <code>window</code> 对象是否有 <code>XMLHttpRequest</code> 属性来确定浏览器是否支持标准的 <code>XMLHttpRequest</code>。注意，不要根据浏览器的 <code>navigator.userAgent</code> 来检测浏览器是否支持某个 JavaScript 特性，一是因为这个字符串本身可以伪造，二是通过 IE 版本判断 JavaScript 特性将非常复杂。</p><p>当创建了 <code>XMLHttpRequest</code> 对象后，要先设置 <code>onreadystatechange</code> 的回调函数。在回调函数中，通常我们只需通过 <code>readyState === 4</code> 判断请求是否完成，如果已完成，再根据 <code>status === 200</code> 判断是否是一个成功的响应。</p><p><code>XMLHttpRequest</code> 对象的 <code>open()</code> 方法有 3 个参数，第一个参数指定是 GET 还是 POST，第二个参数指定 URL 地址，第三个参数指定是否使用异步，默认是 <code>true</code>，所以不用写。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>千万不要把第三个参数指定为 <code>false</code>，否则浏览器将停止响应，直到 Ajax 请求完成。如果这个请求耗时 10 秒，那么 10 秒内您会发现浏览器处于“假死”状态。</p></div><p>最后调用 <code>send()</code> 方法才真正发送请求。GET 请求不需要参数，POST 请求需要把 body 部分以字符串或者 <code>FormData</code> 对象传进去。</p><h2 id="安全限制" tabindex="-1"><a class="header-anchor" href="#安全限制" aria-hidden="true">#</a> 安全限制</h2><p>上面代码的 URL 使用的是相对路径。如果您把它改为 <code>&#39;https://www.sina.com.cn/&#39;</code>，再运行，肯定报错。在 Chrome 的控制台里，还可以看到错误信息。</p><p>这是因为浏览器的同源策略导致的。默认情况下，JavaScript 在发送 Ajax 请求时，URL 的域名必须和当前页面完全一致。</p><p>完全一致的意思是，域名要相同 (www.example.com 和 example.com 不同)，协议要相同 (HTTP 和 HTTPS 不同)，端口号要相同(默认是 <code>:80</code> 端口，它和 <code>:8080</code> 就不同)。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。</p><p>那是不是用 JavaScript 无法请求外域(就是其他网站)的 URL 了呢? 方法还是有的，大概有这么几种:</p><p>一是通过 Flash 插件发送 HTTP 请求，这种方式可以绕过浏览器的安全限制，但必须安装 Flash，并且跟 Flash 交互。不过 Flash 用起来麻烦，而且现在用得也越来越少了。</p><p>二是通过在同源域名下架设一个代理服务器来转发，JavaScript 负责把请求发送到代理服务器 <code>/proxy?url=https://www.sina.com.cn</code></p><p>代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发。</p><p>第三种方式称为 JSONP，它有个限制，只能用 GET 请求，并且要求返回 JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用 JavaScript 资源:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://example.com/abc.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSONP 通常以函数调用的形式返回，例如，返回 JavaScript 内容如下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样一来，我们如果在页面中先准备好 <code>foo()</code> 函数，然后给页面动态加一个 <code>&lt;script&gt;</code> 节点，相当于动态读取外域的 JavaScript 资源，最后就等着接收回调了。</p><p>以 163 的股票查询 URL 为例，对于 <code>URL: https://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice</code>，您将得到如下返回:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">refreshPrice</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;0000001&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000001&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此我们需要首先在页面中准备好回调函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">refreshPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-jsonp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">当前价格: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span><span class="token string">&quot;0000001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span><span class="token string">&quot;0000001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">；</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span><span class="token string">&quot;1399001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span><span class="token string">&quot;1399001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后用 <code>getPrice()</code> 函数触发:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> js <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  js<span class="token punctuation">.</span>src <span class="token operator">=</span>\n    <span class="token string">&quot;https://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice&quot;</span><span class="token punctuation">;</span>\n  head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就完成了跨域加载数据。</p><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><p>如果浏览器支持 HTML5，那么就可以一劳永逸地使用新的跨域策略: <strong>CORS</strong> 了。</p><p>CORS 全称 <code>Cross-Origin Resource Sharing</code>，是 HTML5 规范定义的如何跨域访问资源。</p><p>了解 CORS 前，我们先搞明白概念:</p><p><strong>Origin</strong> 表示本域，也就是浏览器当前页面的域。当 JavaScript 向外域 (如 sina.com) 发起请求后，浏览器收到响应后，首先检查 <code>Access-Control-Allow-Origin</code> 是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript 将无法获取到响应的任何数据。</p><p>用一个图来表示就是:</p><p><img src="data:image/png;base64,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" alt="js-cors"></p><p>假设本域是 <code>my.com</code>，外域是 <code>sina.com</code>，只要响应头 <code>Access-Control-Allow-Origin</code> 为 <code>https://my.com</code>，或者是 <code>*</code>，本次请求就可以成功。</p><p>可见，跨域能否成功，取决于对方服务器是否愿意给您设置一个正确的 <code>Access-Control-Allow-Origin</code>，决定权始终在对方手中。</p><p>上面这种跨域请求，称之为“简单请求”。简单请求包括 <code>GET</code>、<code>HEAD</code> 和 <code>POST</code> ( POST 的 <code>Content-Type</code> 类型 仅限 <code>application/x-www-form-urlencoded、multipart/form-data和text/plain</code>)，并且不能出现任何自定义头(例如，X-Custom: 12345)，通常能满足 90% 的需求。</p><p>无论您是否需要用 JavaScript 通过 CORS 跨域请求资源，您都要了解 CORS 的原理。最新的浏览器全面支持 HTML5。在引用外域资源时，除了 JavaScript 和 CSS 外，都要验证 CORS。例如，当您引用了某个第三方 CDN 上的字体文件时:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* CSS */</span>\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;FontAwesome&quot;</span><span class="token punctuation">;</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://cdn.com/fonts/fontawesome.ttf&quot;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;truetype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果该 CDN 服务商未正确设置 <code>Access-Control-Allow-Origin</code>，那么浏览器无法加载字体资源。</p><p>对于 PUT、DELETE 以及其他类型如 <code>application/json</code> 的 POST 请求，在发送 Ajax 请求之前，浏览器会先发送一个 <code>OPTIONS</code> 请求(称为 preflighted 请求)到这个 URL 上，询问目标服务器是否接受:</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">OPTIONS</span> <span class="token request-target url">/path/to/resource</span> <span class="token http-version property">HTTP/1.1</span></span>\n<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">bar.com</span></span>\n<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://my.com</span></span>\n<span class="token header"><span class="token header-name keyword">Access-Control-Request-Method</span><span class="token punctuation">:</span> <span class="token header-value">POST</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器必须响应并明确指出允许的 Method:</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>\n<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://my.com</span></span>\n<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Methods</span><span class="token punctuation">:</span> <span class="token header-value">POST, GET, PUT, OPTIONS</span></span>\n<span class="token header"><span class="token header-name keyword">Access-Control-Max-Age</span><span class="token punctuation">:</span> <span class="token header-value">86400</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器确认服务器响应的 <code>Access-Control-Allow-Methods</code> 头确实包含将要发送的 Ajax 请求的 Method，才会继续发送 AJAX，否则，抛出一个错误。</p><p>由于以 POST、PUT 方式传送 JSON 格式的数据在 REST 中很常见，所以要跨域正确处理 POST 和 PUT 请求，服务器端必须正确响应 OPTIONS 请求。</p>',55),o=(0,t.Uk)("需要深入了解 CORS 的童鞋请移步 "),c={href:"https://www.w3.org/TR/cors/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("W3C 文档"),l=(0,t.Uk)("。"),u={},r=(0,a(61935).Z)(u,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.kq)(" more "),p,(0,t._)("p",null,[o,(0,t._)("a",c,[i,(0,t.Wm)(a)]),l])])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},20657:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-4157008c","path":"/code/language/js/browser/ajax.html","title":"AJAX","lang":"zh-CN","frontmatter":{"title":"AJAX","date":"2019-10-18T00:00:00.000Z","icon":"ajax","category":["JavaScript"],"summary":"Ajax 不是 JavaScript 的规范，它只是一个哥们“发明”的缩写: Asynchronous JavaScript and XML，意思就是用 JavaScript 执行异步网络请求。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/browser/ajax.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"AJAX"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"excerpt":"<p>Ajax 不是 JavaScript 的规范，它只是一个哥们“发明”的缩写: Asynchronous JavaScript and XML，意思就是用 JavaScript 执行异步网络请求。</p>\\n","headers":[{"level":2,"title":"安全限制","slug":"安全限制","link":"#安全限制","children":[]},{"level":2,"title":"CORS","slug":"cors","link":"#cors","children":[]}],"git":{"createdTime":1644645030000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":7.42,"words":2227},"filePathRelative":"code/language/js/browser/ajax.md","localizedDate":"2019年10月18日"}')}}]);