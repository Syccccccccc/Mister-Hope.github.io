"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[11474],{90649:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});const n=(0,t(34086).uE)('<h2 id="wx-if" tabindex="-1"><a class="header-anchor" href="#wx-if" aria-hidden="true">#</a> wx:if</h2><p>在框架中，使用 <code>wx:if=&quot;&quot;</code> 来判断是否需要渲染该代码块:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;view wx:if=&quot;{{condition}}&quot;&gt; True &lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>也可以用 <code>wx:elif</code> 和 <code>wx:else</code> 来添加一个 <code>else</code> 块:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;view wx:if=&quot;{{length &gt; 5}}&quot;&gt; 1 &lt;/view&gt;\n&lt;view wx:elif=&quot;{{length &gt; 2}}&quot;&gt; 2 &lt;/view&gt;\n&lt;view wx:else&gt; 3 &lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="block-wx-if" tabindex="-1"><a class="header-anchor" href="#block-wx-if" aria-hidden="true">#</a> block wx:if</h2><p>因为 <code>wx:if</code> 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <code>&lt;block /&gt;</code> 标签将多个组件包装起来，并在上边使用 <code>wx:if</code> 控制属性。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;block wx:if=&quot;{{true}}&quot;&gt;\n  &lt;view&gt; view1 &lt;/view&gt;\n  &lt;view&gt; view2 &lt;/view&gt;\n&lt;/block&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>&lt;block /&gt;</code> 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。</p></div><h2 id="wx-if-vs-hidden" tabindex="-1"><a class="header-anchor" href="#wx-if-vs-hidden" aria-hidden="true">#</a> wx:if vs hidden</h2><p>因为 <code>wx:if</code> 之中的模板也可能包含数据绑定，所以当 <code>wx:if</code> 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。</p><p>同时 <code>wx:if</code> 也是惰性的，如果在初始渲染条件为 <code>false</code>，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。</p><p>相比之下，<code>hidden</code> 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>一般来说，<code>wx:if</code> 有更高的切换消耗而 <code>hidden</code> 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 <code>hidden</code> 更好，如果在运行时条件不大可能改变则 <code>wx:if</code> 较好。</p></div>',14),d={},o=(0,t(82831).Z)(d,[["render",function(e,i){return n}]])},82831:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,n]of i)t[e]=n;return t}},70101:(e,i,t)=>{t.r(i),t.d(i,{data:()=>n});const n={key:"v-2cf6e456",path:"/code/mini-app/guide/view/condition-render.html",title:"条件渲染",lang:"zh-CN",frontmatter:{title:"条件渲染",icon:"condition",category:["小程序"],summary:'wx:if 在框架中，使用 wx:if="" 来判断是否需要渲染该代码块: 也可以用 wx:elif 和 wx:else 来添加一个 else 块: block wx:if 因为 wx:if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 标签将多个组件包装起来，并在上边使用 wx:if` 控制属性。 `` 并不是一个组',head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/condition-render.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"条件渲染"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-19T13:09:25.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-19T13:09:25.000Z"}]]},excerpt:"",headers:[{level:2,title:"wx:if",slug:"wx-if",children:[]},{level:2,title:"block wx:if",slug:"block-wx-if",children:[]},{level:2,title:"wx:if vs hidden",slug:"wx-if-vs-hidden",children:[]}],git:{createdTime:1611033126e3,updatedTime:1611061765e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:1.3,words:391},filePathRelative:"code/mini-app/guide/view/condition-render.md"}}}]);