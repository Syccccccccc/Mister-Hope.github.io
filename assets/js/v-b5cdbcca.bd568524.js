"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[18202],{74966:(e,n,a)=>{a.r(n),a.d(n,{default:()=>m});var s=a(34086);const t=(0,s._)("p",null,"任意值(Any)用来表示允许赋值为任意类型。",-1),r=(0,s.uE)('<h2 id="什么是任意值类型" tabindex="-1"><a class="header-anchor" href="#什么是任意值类型" aria-hidden="true">#</a> 什么是任意值类型</h2><p>如果是一个普通类型，在赋值过程中改变类型是不被允许的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let myFavoriteNumber: string = &quot;seven&quot;;\nmyFavoriteNumber = 7;\n\n// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>但如果是 <code>any</code> 类型，则允许被赋值为任意类型。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let myFavoriteNumber: any = &quot;seven&quot;;\nmyFavoriteNumber = 7;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="任意值的属性和方法" tabindex="-1"><a class="header-anchor" href="#任意值的属性和方法" aria-hidden="true">#</a> 任意值的属性和方法</h2><p>在任意值上访问任何属性都是允许的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let anyThing: any = &quot;hello&quot;;\nconsole.log(anyThing.myName);\nconsole.log(anyThing.myName.firstName);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>也允许调用任何方法:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let anyThing: any = &quot;Tom&quot;;\nanyThing.setName(&quot;Jerry&quot;);\nanyThing.setName(&quot;Jerry&quot;).sayHello();\nanyThing.myName.setFirstName(&quot;Cat&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>可以认为，<strong>声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</strong>。</p><h2 id="未声明类型的变量" tabindex="-1"><a class="header-anchor" href="#未声明类型的变量" aria-hidden="true">#</a> 未声明类型的变量</h2><p><strong>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let something;\nsomething = &quot;seven&quot;;\nsomething = 7;\n\nsomething.setName(&quot;Tom&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>等价于</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let something: any;\nsomething = &quot;seven&quot;;\nsomething = 7;\n\nsomething.setName(&quot;Tom&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',17),i={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#any",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("Basic Types # Any"),p=(0,s.Uk)("("),o={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("中文版"),u=(0,s.Uk)(")"),d={},m=(0,a(82831).Z)(d,[["render",function(e,n){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s.kq)(" more "),r,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",i,[l,(0,s.Wm)(a)]),p,(0,s._)("a",o,[c,(0,s.Wm)(a)]),u])])],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},75660:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-b5cdbcca",path:"/code/language/typescript/basics/any.html",title:"任意值",lang:"zh-CN",frontmatter:{title:"任意值",icon:"any",category:["TypeScript"],summary:"任意值(Any)用来表示允许赋值为任意类型。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/basics/any.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"任意值"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-06-03T17:08:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-06-03T17:08:34.000Z"}]]},excerpt:"<p>任意值(Any)用来表示允许赋值为任意类型。</p>\n",headers:[{level:2,title:"什么是任意值类型",slug:"什么是任意值类型",children:[]},{level:2,title:"任意值的属性和方法",slug:"任意值的属性和方法",children:[]},{level:2,title:"未声明类型的变量",slug:"未声明类型的变量",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:.91,words:273},filePathRelative:"code/language/typescript/basics/any.md"}}}]);