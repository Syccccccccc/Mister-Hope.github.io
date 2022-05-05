"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[29272],{2981:(e,a,n)=>{n.r(a),n.d(a,{default:()=>q});var t=n(34086);const o=(0,t._)("p",null,"Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。",-1),r=(0,t._)("p",null,[(0,t.Uk)("Markdown 的目标是实现「易读易写」。它的扩展名为 "),(0,t._)("code",null,".md"),(0,t.Uk)("。")],-1),s=(0,t._)("h2",{id:"设计理念",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#设计理念","aria-hidden":"true"},"#"),(0,t.Uk)(" 设计理念")],-1),p=(0,t._)("p",null,"Markdown 最需要强调的便是它的可读性。一份使用 Markdown 格式撰写的文件应该可以直接以纯文字发布，并且看起来不会像是由许多标签或是格式指令所构成。",-1),d=(0,t.Uk)("其语法在设计时受到一些既有 text-to-HTML 格式的影响，包括 "),l={href:"http://docutils.sourceforge.net/mirror/setext.html",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Setext"),i=(0,t.Uk)("、"),m={href:"http://www.aaronsw.com/2002/atx/",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("atx"),u=(0,t.Uk)("、"),g={href:"http://textism.com/tools/textile/",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("Textile"),M=(0,t.Uk)("、"),w={href:"http://docutils.sourceforge.net/rst.html",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("reStructuredText"),T=(0,t.Uk)("、"),f={href:"http://www.triptico.com/software/grutatxt.html",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("Grutatext"),H=(0,t.Uk)(" 和 "),L={href:"http://ettext.taint.org/doc/",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("EtText"),x=(0,t.Uk)("，然而最大灵感来源其实是纯文字的电子邮件格式。因此 Markdown 的语法全由标点符号所组成，并经过严谨慎选，是为了让它们看起来就像所要表达的意思。像是在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。假如您有使用过电子邮件，引言写法看起来就真的像是引用一段文字。"),U=(0,t.uE)('<p>Markdown 具有一系列衍生版本，用于扩展 Markdown 的功能 (如表格、脚注、内嵌 HTML 等等) ，这些功能并不在最初的设计中，但它们能让 Markdown 转换成更多的格式，例如 LaTeX，Docbook。Markdown 增强版中比较有名的有 Markdown Extra、MultiMarkdown、 Maruku 等。这些衍生版本要么基于工具，如 Pandoc；要么基于网站，如 GitHub 和 Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。</p><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h2><p>Markdown 的语法有个主要的目的: 用来作为一种网络内容的<strong>写作用语言</strong>。Markdown 的重点在于，它能让文件<strong>更容易阅读、编写</strong>。因此，Markdown 的格式语法只涵盖纯文字可以涵盖的范围。</p><p>Markdown 的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。世界上最流行的博客平台 WordPress 能很好的支持 Markdown。</p><p>用于编写说明文档，并且以 “README.md” 的文件名保存在软件的目录下面。</p><p>除此之外，我们还可以快速将 Markdown 转化为演讲 PPT、Word 产品文档、LaTex 论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown 已经广泛使用，极大地推进了动态可重复性研究的历史进程。</p><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><h3 id="行内-html" tabindex="-1"><a class="header-anchor" href="#行内-html" aria-hidden="true">#</a> 行内 HTML</h3><p>不在 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 撰写。不需要额外标注这是 HTML 或是 Markdown；只要直接加标签就可以了。</p><p>只有块元素 ── 比如 <code>&lt;div&gt;</code>、<code>&lt;table&gt;</code>、<code>&lt;pre&gt;</code>、<code>&lt;p&gt;</code> 等标签，必须在前后加上空行，以利与内容区隔。而且这些 (元素) 的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 的解析器有智慧型判断，可以避免在块标签前后加上没有必要的 <code>&lt;p&gt;</code> 标签。</p><p>举例来说，在 Markdown 文件里加上一段 HTML 表格:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>This is a regular paragraph.\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>\n\nThis is another regular paragraph.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Markdown 语法在 HTML 块标签中将不会被进行处理。</p><p>例如，您无法在 HTML 块内使用 Markdown 形式的 <code>*强调*</code>。</p></div><h3 id="特殊字符自动转换" tabindex="-1"><a class="header-anchor" href="#特殊字符自动转换" aria-hidden="true">#</a> 特殊字符自动转换</h3><p>简单来说，在 Markdown 中，您无需考虑 HTML 本应考虑的特殊字符转义的问题。</p><p>比如对于 <code>AT&amp;T</code>，Markdown 就会将它转为 <code>AT&amp;amp;T</code>。</p><div class="custom-container tip"><p class="custom-container-title">HTML 中的特殊字符</p><p>在 HTML 文件中，有两个字符需要特殊处理: <code>&lt;</code> 和 <code>&amp;</code> 。 <code>&lt;</code> 符号用于起始标签，<code>&amp;</code> 符号则用于标记 HTML 实体，如果您只是想要使用这些符号，您必须要使用实体的形式，像是 <code>&amp;lt;</code> 和 <code>&amp;amp;</code>。</p><p>使用 HTML 时，<code>&amp;</code> 符号其实很容易让写作网络文件的人感到困扰。</p><p>如果您要打 「AT&amp;T」 ，您必须要写成 <code>「AT&amp;amp;T」</code>。</p><p>同时您还得转换网址内的 <code>&amp;</code> 符号，如果您要链接到 <code>http://images.google.com/images?num=30&amp;q=larry+bird</code>，您必须要把网址转成 <code>http://images.google.com/images?num=30&amp;amp;q=larry+bird</code>，才能放到链接标签的 <code>href</code> 属性里。</p><p>不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。</p></div><p>Markdown 即允许您直接使用这些符号。也允许您使用转义符号。</p><p>比如您如果要在文件中插入一个著作权的符号，但是您又不想费力地输入这个不常见的特殊符号，您可以直接在 Markdown 中输入 <code>&amp;copy;</code>，Markdown 会推测出它是转移符号，并把它输出为 ©。</p><p>类似的状况也会发生在 <code>&lt;</code> 符号上，因为 Markdown 支持 <a href="#%E8%A1%8C%E5%86%85-HTML">行内 HTML</a> ，如果您是使用 <code>&lt;</code> 符号作为 HTML 标签使用，那 Markdown 也不会对它做任何转换，但是如果您是写:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>4 &lt; 5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Markdown 将会把它转换为:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>4 <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>需要注意的是，code 范围内，不论是行内还是块， <code>&lt;</code> 和 <code>&amp;</code> 两个符号都<em>一定</em>会被转换成 HTML 实体，这项特性让您可以很容易地用 Markdown 写 HTML code (和 HTML 相对而言， HTML 语法中，您要把所有的 <code>&lt;</code> 和 <code>&amp;</code> 都转换为 HTML 实体，才能在 HTML 文件里面写出 HTML code。)</p></div><h2 id="编写" tabindex="-1"><a class="header-anchor" href="#编写" aria-hidden="true">#</a> 编写</h2><p>Markdown 就是一个扩展名为 <code>.md</code> 的文本文件。</p>',26),y=(0,t.Uk)("理论上您可以使用任何编辑器 (如 "),W=(0,t.Uk)("VS Code"),E=(0,t.Uk)(")编辑 Markdown，也可以使用专门的 Markdown 编辑器 (如 "),A={href:"https://typora.io",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("Typora"),P=(0,t.Uk)(") 进行编写。"),Z={},q=(0,n(82831).Z)(Z,[["render",function(e,a){const n=(0,t.up)("ExternalLinkIcon"),Z=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,r,(0,t.kq)(" more "),s,p,(0,t._)("p",null,[d,(0,t._)("a",l,[c,(0,t.Wm)(n)]),i,(0,t._)("a",m,[k,(0,t.Wm)(n)]),u,(0,t._)("a",g,[h,(0,t.Wm)(n)]),M,(0,t._)("a",w,[b,(0,t.Wm)(n)]),T,(0,t._)("a",f,[v,(0,t.Wm)(n)]),H,(0,t._)("a",L,[_,(0,t.Wm)(n)]),x]),U,(0,t._)("p",null,[y,(0,t.Wm)(Z,{to:"/software/vscode/"},{default:(0,t.w5)((()=>[W])),_:1}),E,(0,t._)("a",A,[C,(0,t.Wm)(n)]),P])],64)}]])},82831:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,t]of a)n[e]=t;return n}},74270:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-134ae2df",path:"/code/language/markdown/intro.html",title:"Markdown 介绍",lang:"zh-CN",frontmatter:{title:"Markdown 介绍",icon:"info",category:["Markdown"],tag:["Markdown"],summary:"Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。\nMarkdown 的目标是实现「易读易写」。它的扩展名为 .md。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/markdown/intro.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"Markdown 介绍"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Markdown"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>\n<p>Markdown 的目标是实现「易读易写」。它的扩展名为 <code v-pre>.md</code>。</p>\n",headers:[{level:2,title:"设计理念",slug:"设计理念",children:[]},{level:2,title:"用途",slug:"用途",children:[]},{level:2,title:"特点",slug:"特点",children:[{level:3,title:"行内 HTML",slug:"行内-html",children:[]},{level:3,title:"特殊字符自动转换",slug:"特殊字符自动转换",children:[]}]},{level:2,title:"编写",slug:"编写",children:[]}],git:{createdTime:1616318554e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:4.82,words:1447},filePathRelative:"code/language/markdown/intro.md"}}}]);