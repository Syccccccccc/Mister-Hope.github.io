"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[29386],{77576:(n,a,s)=>{s.r(a),s.d(a,{default:()=>R});var t=s(34086);const e=(0,t._)("p",null,"Vue-cli 提供的 vue 单文件语法与小程序基本相似，甚至可以说小程序是改变自 Vue 与 React 框架的。",-1),p=(0,t.uE)('<h2 id="优缺点比较" tabindex="-1"><a class="header-anchor" href="#优缺点比较" aria-hidden="true">#</a> 优缺点比较</h2><table><thead><tr><th></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>小程序</td><td>小程序底层由微信框架驱动，每个界面是单独的 JS 文件，页面切换以及全局生命周期丰富完善。小程序具有相当完备的 API。</td><td>小程序是由 JSCore 驱动逻辑层，视图层采用 Webview，故没有 DOM 节点的概念，只有渲染出的虚拟节点，所以无法动态删除或添加节点，无法使用一切 DOM 相关 API。小程序组件生命周期不够强大。小程序的 Webview 渲染存在一定的性能问题。小程序视图层与逻辑层通过 Jsbridge 连接，数据传输及渲染有延时。</td></tr><tr><td>vue</td><td>Vue 的实质是动态监测并托管 DOM 节点。由于 Vue 是网页开发，拥有 DOM 树，可以使用 DOM 相关 API。Vue 组件拥有更全面的生命周期，同时可以动态渲染组件。Vue 的组件传递数据方式默认为单向绑定</td><td>由于 Vue 的组件本质是监测 DOM 树，故其组件只能有一个根节点。同时 Vue 的界面路由依赖于 History API，其界面切换周期与逻辑不够强大。</td></tr></tbody></table><h2 id="代码区别" tabindex="-1"><a class="header-anchor" href="#代码区别" aria-hidden="true">#</a> 代码区别</h2><p>小程序与 Vue 在代码写法上极其相似，但稍有不同。</p><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3><h4 id="小程序数据绑定" tabindex="-1"><a class="header-anchor" href="#小程序数据绑定" aria-hidden="true">#</a> 小程序数据绑定</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text1 {{a}} {{b?:<span class="token punctuation">&#39;</span>b为真<span class="token punctuation">&#39;</span>:<span class="token punctuation">&#39;</span>b为假<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7),l=(0,t._)("div",null,[(0,t._)("p",null,[(0,t.Uk)("小程序在所有内容上都使用 Muscle 语法 ("),(0,t._)("code",{"v-pre":""},"{{Javascript表达式}}"),(0,t.Uk)(") 的写法。")])],-1),c=(0,t.uE)('<h4 id="vue-数据绑定" tabindex="-1"><a class="header-anchor" href="#vue-数据绑定" aria-hidden="true">#</a> Vue 数据绑定</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a+<span class="token punctuation">&#39;</span> <span class="token punctuation">&#39;</span>+ b?:<span class="token punctuation">&#39;</span>b为真<span class="token punctuation">&#39;</span>:<span class="token punctuation">&#39;</span>b为假<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Vue 在标签名属性用 <code>v-bind:prop=&quot;Javascript表达式&quot;</code> 的写法、其简写为 <code>:prop=&quot;&quot;</code>，在标签内容处使用 Muscle 语法。</p></div><h3 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h3><h4 id="小程序条件渲染" tabindex="-1"><a class="header-anchor" href="#小程序条件渲染" aria-hidden="true">#</a> 小程序条件渲染</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>板块只有 condition1 为 true 时才会渲染<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    这是一个拥有很多兄弟标签的代码块.\n    虚拟标签 block 会把其当作一个整体用作条件渲染。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',6),o={class:"custom-container info"},u=(0,t._)("p",{class:"custom-container-title"},"相关信息",-1),i=(0,t.Uk)("更多详情请见 "),r={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/conditional.html",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("小程序条件渲染文档"),d=(0,t.uE)('<h4 id="vue-条件渲染" tabindex="-1"><a class="header-anchor" href="#vue-条件渲染" aria-hidden="true">#</a> Vue 条件渲染</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>板块只有 condition 为 true 时才会渲染<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    Vue 没有相关虚拟标签，且只能监听一个标签。所以只能建立一个没有样式的 div\n    标签将多个并列标签抱起来。这样 Vue 就会因监听最外层 div\n    会把其当作一个整体用作条件渲染。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',2),g={class:"custom-container info"},m=(0,t._)("p",{class:"custom-container-title"},"相关信息",-1),h=(0,t.Uk)("更多相关请见 "),b={href:"https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("Vue 条件渲染文档"),x=(0,t.uE)('<h3 id="循环渲染" tabindex="-1"><a class="header-anchor" href="#循环渲染" aria-hidden="true">#</a> 循环渲染</h3><h4 id="小程序循环渲染" tabindex="-1"><a class="header-anchor" href="#小程序循环渲染" aria-hidden="true">#</a> 小程序循环渲染</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  {{index}} is {{element}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>实际渲染结果为:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),f={class:"custom-container info"},w=(0,t._)("p",{class:"custom-container-title"},"相关信息",-1),q=(0,t.Uk)("更多详情请见 "),_={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/list.html",target:"_blank",rel:"noopener noreferrer"},V=(0,t.Uk)("小程序循环渲染文档"),E=(0,t.uE)('<h4 id="vue-循环渲染" tabindex="-1"><a class="header-anchor" href="#vue-循环渲染" aria-hidden="true">#</a> Vue 循环渲染</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(element,index) in array<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n       {{index}} is {{ element }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),y={class:"custom-container info"},U=(0,t._)("p",{class:"custom-container-title"},"相关信息",-1),A=(0,t.Uk)("更多相关请见 "),B={href:"https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("Vue 循环渲染文档"),D=(0,t.uE)('<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><h4 id="小程序生命周期" tabindex="-1"><a class="header-anchor" href="#小程序生命周期" aria-hidden="true">#</a> 小程序生命周期</h4><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png" alt="小程序页面生命周期"></p><h4 id="vue-页面生命周期" tabindex="-1"><a class="header-anchor" href="#vue-页面生命周期" aria-hidden="true">#</a> Vue 页面生命周期</h4>',5),W={href:"https://router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("Vue 页面生命周期"),C=(0,t._)("h3",{id:"组件生命周期",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#组件生命周期","aria-hidden":"true"},"#"),(0,t.Uk)(" 组件生命周期")],-1),I=(0,t._)("h4",{id:"小程序组件生命周期",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#小程序组件生命周期","aria-hidden":"true"},"#"),(0,t.Uk)(" 小程序组件生命周期")],-1),J={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("小程序组件生命周期"),T=(0,t._)("h4",{id:"vue-组件生命周期",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue-组件生命周期","aria-hidden":"true"},"#"),(0,t.Uk)(" Vue 组件生命周期")],-1),j=(0,t._)("p",null,[(0,t._)("img",{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"Vue组件生命周期"})],-1),H={},R=(0,s(82831).Z)(H,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t.kq)(" more "),p,l,c,(0,t._)("div",o,[u,(0,t._)("p",null,[i,(0,t._)("a",r,[k,(0,t.Wm)(s)])])]),d,(0,t._)("div",g,[m,(0,t._)("p",null,[h,(0,t._)("a",b,[v,(0,t.Wm)(s)])])]),x,(0,t._)("div",f,[w,(0,t._)("p",null,[q,(0,t._)("a",_,[V,(0,t.Wm)(s)])])]),E,(0,t._)("div",y,[U,(0,t._)("p",null,[A,(0,t._)("a",B,[M,(0,t.Wm)(s)])])]),D,(0,t._)("p",null,[(0,t._)("a",W,[O,(0,t.Wm)(s)])]),C,I,(0,t._)("p",null,[(0,t._)("a",J,[P,(0,t.Wm)(s)])]),T,j],64)}]])},82831:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}},17567:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-837c88f4",path:"/code/vue/compare.html",title:"Vue 与小程序的异同",lang:"zh-CN",frontmatter:{title:"Vue 与小程序的异同",icon:"compare",category:["Vue"],tag:["Vue","小程序","对比"],summary:"Vue-cli 提供的 vue 单文件语法与小程序基本相似，甚至可以说小程序是改变自 Vue 与 React 框架的。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/vue/compare.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"Vue 与小程序的异同"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Vue"}],["meta",{property:"article:tag",content:"小程序"}],["meta",{property:"article:tag",content:"对比"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>Vue-cli 提供的 vue 单文件语法与小程序基本相似，甚至可以说小程序是改变自 Vue 与 React 框架的。</p>\n",headers:[{level:2,title:"优缺点比较",slug:"优缺点比较",children:[]},{level:2,title:"代码区别",slug:"代码区别",children:[{level:3,title:"数据绑定",slug:"数据绑定",children:[]},{level:3,title:"条件渲染",slug:"条件渲染",children:[]},{level:3,title:"循环渲染",slug:"循环渲染",children:[]}]},{level:2,title:"生命周期",slug:"生命周期",children:[{level:3,title:"页面生命周期",slug:"页面生命周期",children:[]},{level:3,title:"组件生命周期",slug:"组件生命周期",children:[]}]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:3.25,words:975},filePathRelative:"code/vue/compare.md"}}}]);