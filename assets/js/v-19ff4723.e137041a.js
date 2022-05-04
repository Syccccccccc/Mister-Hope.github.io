"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[86541],{28128:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var a=t(34086);const l=(0,a._)("p",null,"WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。",-1),s=(0,a.uE)('<h2 id="定义模板" tabindex="-1"><a class="header-anchor" href="#定义模板" aria-hidden="true">#</a> 定义模板</h2><p>使用 <code>name</code> 属性，作为模板的名字。然后在 <code>&lt;template /&gt;</code> 内定义代码片段，如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!--\n  index: int\n  msg: string\n  time: string\n--&gt;\n&lt;template name=&quot;msgItem&quot;&gt;\n  &lt;view&gt;\n    &lt;text&gt; {{index}}: {{msg}} &lt;/text&gt;\n    &lt;text&gt; Time: {{time}} &lt;/text&gt;\n  &lt;/view&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="使用模板" tabindex="-1"><a class="header-anchor" href="#使用模板" aria-hidden="true">#</a> 使用模板</h2><p>使用 <code>is</code> 属性，声明需要的使用的模板，然后将模板所需要的 <code>data</code> 传入，如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;template is=&quot;msgItem&quot; data=&quot;{{...item}}&quot;/&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Page({\n  data: {\n    item: {\n      index: 0,\n      msg: &quot;this is a template&quot;,\n      time: &quot;2016-09-15&quot;,\n    },\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>is</code> 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt;template name=&quot;odd&quot;&gt;\n  &lt;view&gt; odd &lt;/view&gt;\n&lt;/template&gt;\n&lt;template name=&quot;even&quot;&gt;\n  &lt;view&gt; even &lt;/view&gt;\n&lt;/template&gt;\n\n&lt;block wx:for=&quot;{{[1, 2, 3, 4, 5]}}&quot;&gt;\n  &lt;template is=&quot;{{item % 2 == 0 ? &#39;even&#39; : &#39;odd&#39;}}&quot;/&gt;\n&lt;/block&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="模板的作用域" tabindex="-1"><a class="header-anchor" href="#模板的作用域" aria-hidden="true">#</a> 模板的作用域</h2><p>模板拥有自己的作用域，只能使用 <code>data</code> 传入的数据以及模板定义文件中定义的 <code>&lt;wxs /&gt;</code> 模块。</p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>WXML 提供两种文件引用方式 <code>import</code> 和 <code>include</code>。</p><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><p><code>import</code> 可以在该文件中使用目标文件定义的 template，如:</p><p>在 <code>item.wxml</code> 中定义了一个叫 item 的 template:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- item.wxml --&gt;\n&lt;template name=&quot;item&quot;&gt;\n  &lt;text&gt;{{text}}&lt;/text&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在 <code>index.wxml</code> 中引用了 <code>item.wxml</code>，就可以使用 item 模板:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;import src=&quot;item.wxml&quot;/&gt;\n&lt;template is=&quot;item&quot; data=&quot;{{text: &#39;forbar&#39;}}&quot;/&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="import-的作用域" tabindex="-1"><a class="header-anchor" href="#import-的作用域" aria-hidden="true">#</a> import 的作用域</h3><p><code>import</code> 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。</p><p>如: C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 定义的 template。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- A.wxml --&gt;\n&lt;template name=&quot;A&quot;&gt;\n  &lt;text&gt; A template &lt;/text&gt;\n&lt;/template&gt;\n&lt;!-- B.wxml --&gt;\n&lt;import src=&quot;a.wxml&quot;/&gt;\n&lt;template name=&quot;B&quot;&gt;\n  &lt;text&gt; B template &lt;/text&gt;\n&lt;/template&gt;\n&lt;!-- C.wxml --&gt;\n&lt;import src=&quot;b.wxml&quot;/&gt;\n&lt;template is=&quot;A&quot;/&gt;  &lt;!-- Error! Can not use tempalte when not import A. --&gt;\n&lt;template is=&quot;B&quot;/&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><p><code>include</code> 可以将目标文件除了 <code>&lt;template /&gt;</code> <code>&lt;wxs /&gt;</code> 外的整个代码引入，相当于是拷贝到 <code>include</code> 位置，如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- index.wxml --&gt;\n&lt;include src=&quot;header.wxml&quot;/&gt;\n&lt;view&gt; body &lt;/view&gt;\n&lt;include src=&quot;footer.wxml&quot;/&gt;\n&lt;!-- header.wxml --&gt;\n&lt;view&gt; header &lt;/view&gt;\n&lt;!-- footer.wxml --&gt;\n&lt;view&gt; footer &lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',26),r={},i=(0,t(82831).Z)(r,[["render",function(e,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a.kq)(" more "),s],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,a]of n)t[e]=a;return t}},96884:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a={key:"v-19ff4723",path:"/code/mini-app/guide/view/template.html",title:"模板",lang:"zh-CN",frontmatter:{title:"模板",icon:"template",category:["小程序"],summary:"WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/template.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"模板"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-11-08T17:35:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-11-08T17:35:34.000Z"}]]},excerpt:"<p>WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。</p>\n",headers:[{level:2,title:"定义模板",slug:"定义模板",children:[]},{level:2,title:"使用模板",slug:"使用模板",children:[]},{level:2,title:"模板的作用域",slug:"模板的作用域",children:[]},{level:2,title:"引用",slug:"引用",children:[{level:3,title:"import",slug:"import",children:[]},{level:3,title:"import 的作用域",slug:"import-的作用域",children:[]},{level:3,title:"include",slug:"include",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:1604856934e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.62,words:486},filePathRelative:"code/mini-app/guide/view/template.md"}}}]);