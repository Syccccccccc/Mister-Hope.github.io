"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[99972],{14791:(n,a,s)=>{s.r(a),s.d(a,{default:()=>P});var e=s(34086);const t=(0,e.uE)('<h2 id="显示区域尺寸" tabindex="-1"><a class="header-anchor" href="#显示区域尺寸" aria-hidden="true">#</a> 显示区域尺寸</h2><p>显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。</p><h3 id="在手机上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在手机上启用屏幕旋转支持" aria-hidden="true">#</a> 在手机上启用屏幕旋转支持</h3><p>从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 <code>&quot;pageOrientation&quot;: &quot;auto&quot;</code> ，或在页面 json 文件中配置 <code>&quot;pageOrientation&quot;: &quot;auto&quot;</code>。</p><details class="custom-block details"><summary>代码示例</summary><p>以下是在单个页面 json 文件中启用屏幕旋转的示例。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;pageOrientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果页面添加了上述声明，则在屏幕旋转时，这个页面将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p></details><p>从小程序基础库版本 2.5.0 开始， <code>pageOrientation</code> 还可以被设置为 <code>landscape</code> ，表示固定为横屏显示。</p><h3 id="在-ipad-上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在-ipad-上启用屏幕旋转支持" aria-hidden="true">#</a> 在 iPad 上启用屏幕旋转支持</h3><p>从小程序基础库版本 2.3.0 开始，在 iPad 上运行的小程序可以支持屏幕旋转。使小程序支持 iPad 屏幕旋转的方法是: 在 app.json 中添加 <code>&quot;resizable&quot;: true</code> 。</p><details class="custom-block details"><summary>代码示例</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;resizable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果小程序添加了上述声明，则在屏幕旋转时，小程序将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p></details><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在 iPad 上不能单独配置某个页面是否支持屏幕旋转。</p></div><h2 id="media-query" tabindex="-1"><a class="header-anchor" href="#media-query" aria-hidden="true">#</a> Media Query</h2><p>有时，对于不同尺寸的显示区域，页面的布局会有所差异。此时可以使用 media query 来解决大多数问题。</p><details class="custom-block details"><summary>代码示例</summary><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.my-class</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token comment">/*仅在 480px 或更宽的屏幕上生效的样式规则*/</span>\n  <span class="token selector">.my-class</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>',13),p=(0,e.Uk)("在 WXML 中，可以使用 "),o={href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("match-media"),i=(0,e.Uk)(" 组件来根据 media query 匹配状态展示、隐藏节点。"),r=(0,e.Uk)("此外，可以在页面或者自定义组件 JS 中使用 "),c=(0,e._)("code",null,"this.createMediaQueryObserver()",-1),u=(0,e.Uk)(" 方法来创建一个 "),d={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.html",target:"_blank",rel:"noopener noreferrer"},m=(0,e._)("code",null,"MediaQueryObserver",-1),k=(0,e.Uk)(" 对象，用于监听指定的 media query 的匹配状态。"),b={href:"https://developers.weixin.qq.com/s/TtFaFjmb7aiy",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("在开发者工具中预览效果"),g=(0,e._)("h2",{id:"屏幕旋转事件",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#屏幕旋转事件","aria-hidden":"true"},"#"),(0,e.Uk)(" 屏幕旋转事件")],-1),v=(0,e._)("p",null,"有时，仅仅使用 media query 无法控制一些精细的布局变化。此时可以使用 js 作为辅助。",-1),y=(0,e.Uk)("在 js 中读取页面的显示区域尺寸，可以使用 "),w={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html",target:"_blank",rel:"noopener noreferrer"},_=(0,e._)("code",null,"selectorQuery.selectViewport",-1),q=(0,e.Uk)(" 。"),f=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("页面尺寸发生改变的事件，可以使用页面的 "),(0,e._)("code",null,"onResize"),(0,e.Uk)(" 来监听。")])],-1),x=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("对于自定义组件，可以使用 "),(0,e._)("code",null,"resize"),(0,e.Uk)(" 生命周期来监听。回调函数中将返回显示区域的尺寸信息。(从基础库版本 2.4.0 开始支持。)")])],-1),j=(0,e.uE)('<details class="custom-block details"><summary>代码示例</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowWidth<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域宽度</span>\n    res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowHeight<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域高度</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowWidth<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域宽度</span>\n      res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowHeight<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域高度</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>',1),z=(0,e.Uk)("此外，还可以使用 "),U={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html",target:"_blank",rel:"noopener noreferrer"},W=(0,e._)("code",null,"wx.onWindowResize",-1),O=(0,e.Uk)(" 来监听(但这不是推荐的方式)。"),M={},P=(0,s(82831).Z)(M,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",o,[l,(0,e.Wm)(s)]),i]),(0,e._)("p",null,[r,c,u,(0,e._)("a",d,[m,(0,e.Wm)(s)]),k]),(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e._)("a",b,[h,(0,e.Wm)(s)])])]),g,v,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[y,(0,e._)("a",w,[_,(0,e.Wm)(s)]),q])]),f,x]),j,(0,e._)("p",null,[z,(0,e._)("a",U,[W,(0,e.Wm)(s)]),O])],64)}]])},82831:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},45493:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-59358b0a",path:"/code/mini-app/guide/view/resizable.html",title:"响应显示区域变化",lang:"zh-CN",frontmatter:{title:"响应显示区域变化",icon:"view",category:["小程序"],summary:'显示区域尺寸 显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。 在手机上启用屏幕旋转支持 从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 "pageOr',head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/resizable.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"响应显示区域变化"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-20T11:45:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-20T11:45:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"显示区域尺寸",slug:"显示区域尺寸",children:[{level:3,title:"在手机上启用屏幕旋转支持",slug:"在手机上启用屏幕旋转支持",children:[]},{level:3,title:"在 iPad 上启用屏幕旋转支持",slug:"在-ipad-上启用屏幕旋转支持",children:[]}]},{level:2,title:"Media Query",slug:"media-query",children:[]},{level:2,title:"屏幕旋转事件",slug:"屏幕旋转事件",children:[]}],git:{createdTime:1611033126e3,updatedTime:16111431e5,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:2.6,words:780},filePathRelative:"code/mini-app/guide/view/resizable.md"}}}]);