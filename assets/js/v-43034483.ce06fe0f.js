"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[43919],{46812:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});var s=a(34086);const r=(0,s._)("p",null,"高阶函数英文叫 Higher-order function。",-1),t=(0,s._)("p",null,"JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。",-1),c=(0,s.uE)('<p>一个最简单的高阶函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const add = (x, y, f) =&gt; f(x) + f(y);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者写作</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function add(x, y, f) {\n  return f(x) + f(y);\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当我们调用 <code>add(-5, 6, Math.abs)</code> 时，参数 <code>x</code>，<code>y</code> 和 <code>f</code> 分别接收 <code>-5</code>，<code>6</code> 和函数 <code>Math.abs</code>，根据函数定义，我们可以推导计算过程为:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>x = -5;\ny = 6;\nf = Math.abs;\nf(x) + f(y) ==&gt; Math.abs(-5) + Math.abs(6) ==&gt; 11;\nreturn 11;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用代码验证一下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;use strict&quot;;\n\nconst add = (x, y, f) =&gt; f(x) + f(y);\nconst x = add(-5, 6, Math.abs);\n\nconsole.log(x); // 11\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>编写高阶函数，就是让函数的参数能够接收别的函数。</p>',9),i={},o=(0,a(82831).Z)(i,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,t,(0,s.kq)(" more "),c],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},41183:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-43034483",path:"/code/language/js/function/higher-order-function.html",title:"高阶函数",lang:"zh-CN",frontmatter:{title:"高阶函数",icon:"advance",date:"2019-10-05T00:00:00.000Z",category:["JavaScript"],summary:"高阶函数英文叫 Higher-order function。\nJavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/function/higher-order-function.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"高阶函数"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-10-05T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>高阶函数英文叫 Higher-order function。</p>\n<p>JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。</p>\n",headers:[],git:{createdTime:1604686203e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:.74,words:222},filePathRelative:"code/language/js/function/higher-order-function.md"}}}]);