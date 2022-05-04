"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65609],{98260:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var s=n(34086);const t={class:"custom-container tip"},o=(0,s._)("p",{class:"custom-container-title"},"章节过时",-1),r=(0,s.Uk)("目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 "),c=(0,s.Uk)("axios"),p=(0,s.Uk)(" 来进行请求。"),i=(0,s.uE)('<p>用 JavaScript 写 Ajax 前面已经介绍过了，主要问题就是不同浏览器需要写不同代码，并且状态和错误处理写起来很麻烦。</p><p>用 jQuery 的相关对象来处理 AJAX，不但不需要考虑浏览器问题，代码也能大大简化。</p><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h2><p>jQuery 在全局对象 jQuery (也就是 <code>$</code>) 绑定了 <code>ajax()</code> 函数，可以处理 Ajax 请求。<code>ajax(url, settings)</code> 函数需要接收一个 URL 和一个可选的 settings 对象，常用的选项如下:</p><ul><li><p>async: 是否异步执行 Ajax 请求，默认为 <code>true</code>；</p></li><li><p>method: 发送的 Method，缺省为 <code>&#39;GET&#39;</code>，可指定为 <code>&#39;POST&#39;</code> 、<code>&#39;PUT&#39;</code> 等；</p></li><li><p>contentType: 发送 POST 请求的格式，默认值为 <code>&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</code>，也可以指定为 <code>text/plain</code>、<code>application/json</code>；</p></li><li><p>data: 发送的数据，可以是字符串、数组或 object。如果是 <code>GET</code> 请求，data 将被转换成 <code>query</code> 附加到 URL 上，如果是 <code>POST</code> 请求，根据 <code>contentType</code> 把 <code>data</code> 序列化成合适的格式；</p></li><li><p>headers: 发送的额外的 HTTP 头，必须是一个 object；</p></li><li><p>dataType: 接收的数据格式，可以指定为 <code>&#39;html&#39;</code>、<code>&#39;xml&#39;</code>、<code>&#39;json&#39;</code>、<code>&#39;text&#39;</code> 等，缺省情况下根据响应的 <code>Content-Type</code> 猜测。</p></li></ul><p>下面的例子发送一个 <code>GET</code> 请求，并返回一个 JSON 格式的数据:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const jqxhr = $.ajax(&quot;/api/categories&quot;, {\n  dataType: &quot;json&quot;,\n});\n// 请求已经发送了\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>不过，如何用回调函数处理返回的数据和出错时的响应呢?</p><p>还记得 Promise 对象吗? jQuery 的 <code>jqXHR</code> 对象类似一个 Promise 对象，我们可以用链式写法来处理各种回调:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;use strict&quot;;\n\nfunction ajaxLog(s) {\n  const txt = $(&quot;#test-response-text&quot;);\n  txt.val(txt.val() + &quot;\\n&quot; + s);\n}\n\n$(&quot;#test-response-text&quot;).val(&quot;&quot;);\n\nconst jqxhr = $.ajax(&quot;/api/categories&quot;, {\n  dataType: &quot;json&quot;,\n})\n  .done(function (data) {\n    ajaxLog(&quot;成功, 收到的数据: &quot; + JSON.stringify(data));\n  })\n  .fail(function (xhr, status) {\n    ajaxLog(&quot;失败: &quot; + xhr.status + &quot;, 原因: &quot; + status);\n  })\n  .always(function () {\n    ajaxLog(&quot;请求完成: 无论成功或失败都会调用&quot;);\n  });\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h2><p>对常用的 Ajax 操作，jQuery 提供了一些辅助方法。由于 GET 请求最常见，所以 jQuery 提供了 <code>get()</code> 方法，可以这么写:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const jqxhr = $.get(&quot;/path/to/resource&quot;, {\n  name: &quot;Bob Lee&quot;,\n  check: 1,\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第二个参数如果是 object，jQuery 自动把它变成 <code>query string</code> 然后加到 URL 后面，实际的 URL 是:</p><p><code>/path/to/resource?name=Bob%20Lee&amp;check=1</code></p><p>这样我们就不用关心如何用 URL 编码并构造一个 <code>query string</code> 了。</p><h2 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h2><p><code>post()</code> 和 <code>get()</code> 类似，但是传入的第二个参数默认被序列化为 <code>application/x-www-form-urlencoded</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const jqxhr = $.post(&quot;/path/to/resource&quot;, {\n  name: &quot;Bob Lee&quot;,\n  check: 1,\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>实际构造的数据 <code>name=Bob%20Lee&amp;check=1</code> 作为 POST 的 body 被发送。</p><h2 id="getjson" tabindex="-1"><a class="header-anchor" href="#getjson" aria-hidden="true">#</a> getJSON</h2><p>由于 JSON 用得越来越普遍，所以 jQuery 也提供了 <code>getJSON()</code> 方法来快速通过 GET 获取一个 JSON 对象:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const jqxhr = $.getJSON(&quot;/path/to/resource&quot;, {\n  name: &quot;Bob Lee&quot;,\n  check: 1,\n}).done(function (data) {\n  // data已经被解析为JSON对象了\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="安全限制" tabindex="-1"><a class="header-anchor" href="#安全限制" aria-hidden="true">#</a> 安全限制</h2><p>jQuery 的 Ajax 完全封装的是 JavaScript 的 Ajax 操作，所以它的安全限制和前面讲的用 JavaScript 写 Ajax 完全一样。</p><p>如果需要使用 JSONP，可以在 <code>ajax()</code> 中设置 <code>jsonp: &#39;callback&#39;</code>，让 jQuery 实现 JSONP 跨域加载数据。</p><p>关于跨域的设置请参考浏览器 Ajax 一节中 CORS 的设置。</p>',27),l={},d=(0,n(82831).Z)(l,[["render",function(e,a){const n=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",t,[o,(0,s._)("p",null,[r,(0,s.Wm)(n,{to:"/code/node-js/package/axois.html"},{default:(0,s.w5)((()=>[c])),_:1}),p])]),(0,s.kq)(" more "),i],64)}]])},82831:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}},99035:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-93dfe636",path:"/code/website/jQuery/ajax.html",title:"AJAX",lang:"zh-CN",frontmatter:{title:"AJAX",icon:"ajax",date:"2019-11-05T00:00:00.000Z",category:["jQuery"],summary:"章节过时\n目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 axios 来进行请求。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/jQuery/ajax.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"AJAX"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-11-05T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:'<div class="custom-container tip"><p class="custom-container-title">章节过时</p>\n<p>目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 <RouterLink to="/code/node-js/package/axois.html">axios</RouterLink> 来进行请求。</p>\n</div>\n',headers:[{level:2,title:"Ajax",slug:"ajax",children:[]},{level:2,title:"get",slug:"get",children:[]},{level:2,title:"post",slug:"post",children:[]},{level:2,title:"getJSON",slug:"getjson",children:[]},{level:2,title:"安全限制",slug:"安全限制",children:[]}],git:{createdTime:164464503e4,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.81,words:843},filePathRelative:"code/website/jQuery/ajax.md"}}}]);