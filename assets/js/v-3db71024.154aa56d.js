"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[76244],{64936:(e,o,c)=>{c.r(o),c.d(o,{default:()=>p});var d=c(79389);const t=(0,d.uE)('<p>对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。</p><h2 id="添加属性" tabindex="-1"><a class="header-anchor" href="#添加属性" aria-hidden="true">#</a> 添加属性</h2><p>您可以使用缩写来生成 CSS 属性。如 <code>m</code> 会生成 <code>margin: ;</code>，同时光标会自动置于值处。</p><h2 id="同时添加属性与值值" tabindex="-1"><a class="header-anchor" href="#同时添加属性与值值" aria-hidden="true">#</a> 同时添加属性与值值</h2><p>您可以将值直接输入缩写的后面，如果有多个值，您需要用 <code>-</code> 将它们分开，多余的 <code>-</code> 将会被理解为负值。</p><div class="custom-container tip"><p class="custom-container-title">案例</p><ul><li><code>m10</code>: <code>margin: 10px;</code></li><li><code>m10-20</code>: <code>margin: 10px 20px;</code></li><li><code>m-10--20</code>: <code>margin: -10px -20px;</code></li></ul></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请只有在必要(不添加会产生歧义)的情况下添加 <code>-</code> 分隔符，否则 Emmet 可能会错误的理解它。</p></div><h2 id="值的单位" tabindex="-1"><a class="header-anchor" href="#值的单位" aria-hidden="true">#</a> 值的单位</h2><p>使用整数值扩展缩写时，Emmet 会以 px 单位输出: <code>m10</code> → <code>margin: 10px;</code>。</p><p>使用浮点值扩展缩写时，会以 em 单位输出: <code>m1.5</code> → <code>margin: 1.5em;</code>。</p><p>您也可以在值后面紧跟任何字母字符，来显式提供单位名称: <code>m1.5ex</code> → <code>margin: 1.5ex;</code>，<code>m10foo</code> → <code>margin: 10foo;</code>。</p><p>明确定义单位后，不再需要使用连字符来分隔值: <code>m10ex20em</code> → <code>margin: 10ex 20em;</code>，<code>m10ex-5</code> → <code>margin: 10ex -5px;</code>。</p><h2 id="值别名" tabindex="-1"><a class="header-anchor" href="#值别名" aria-hidden="true">#</a> 值别名</h2><p>Emmet 具有一些常用值的别名:</p><ul><li><code>p</code> → <code>%</code></li><li><code>e</code> → <code>em</code></li><li><code>x</code> → <code>ex</code></li></ul><p>您可以使用别名代替完整的单位:</p><ul><li><code>w100p</code> → <code>width: 100%</code></li><li><code>m10p30e5x</code> → <code>margin: 10% 30em 5ex</code></li></ul><h2 id="颜色值" tabindex="-1"><a class="header-anchor" href="#颜色值" aria-hidden="true">#</a> 颜色值</h2><p>Emmet 支持十六进制颜色值。<code>#</code> 将自动作为分隔符，所以针对颜色变量，将不再需要 <code>-</code>。</p><ul><li><code>c#3</code> → <code>color: #333;</code></li><li><code>bd5#0s</code> → <code>border: 5px #000 solid</code>。(<code>#</code> 符号可将颜色与 <code>5</code> 分隔开，并且 <code>s</code>(别名为 <code>solid</code>)不是十六进制字符，因此省略了 <code>-</code>。</li></ul><p>颜色变量支持 1-3 位的缩写，表现如下:</p><ul><li><code>#1</code> → <code>#111111</code></li><li><code>#e0</code> → <code>#e0e0e0</code></li><li><code>#fc0</code> → <code>#ffcc00</code></li></ul><h2 id="无单元属性" tabindex="-1"><a class="header-anchor" href="#无单元属性" aria-hidden="true">#</a> 无单元属性</h2><p>一些 CSS 属性默认为无单位输出:</p><ul><li><code>lh2</code>→ <code>line-height: 2;</code></li><li><code>fw400</code>→ <code>font-weight: 400</code>。</li></ul><p>这些值是: <code>z-index</code>，<code>line-height</code>，<code>opacity</code> 和 <code>font-weight</code></p><h2 id="重要修饰符" tabindex="-1"><a class="header-anchor" href="#重要修饰符" aria-hidden="true">#</a> 重要修饰符</h2><p>您可以在任何 CSS 缩写的末尾添加 <code>!</code> 后缀来添加 <code>!important</code></p><p><code>p!+m10e!</code>:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token property">margin</span><span class="token punctuation">:</span> 10em <span class="token important">!important</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出多个属性" tabindex="-1"><a class="header-anchor" href="#输出多个属性" aria-hidden="true">#</a> 输出多个属性</h2><p>正如上方演示，您可以利用 <code>+</code> 同时输出多个 CSS 属性。</p>',32),i={class:"custom-container info"},a=(0,d._)("p",{class:"custom-container-title"},"Snippets",-1),n=(0,d.Uk)("完整的 CSS snippets 请见 "),l={href:"https://github.com/emmetio/emmet/blob/master/snippets/css.json",target:"_blank",rel:"noopener noreferrer"},r=(0,d.Uk)("Emmet Repo"),s={},p=(0,c(61935).Z)(s,[["render",function(e,o){const c=(0,d.up)("ExternalLinkIcon");return(0,d.wg)(),(0,d.iD)("div",null,[t,(0,d._)("div",i,[a,(0,d._)("p",null,[n,(0,d._)("a",l,[r,(0,d.Wm)(c)])])])])}]])},61935:(e,o)=>{o.Z=(e,o)=>{const c=e.__vccOpts||e;for(const[e,d]of o)c[e]=d;return c}},15024:(e,o,c)=>{c.r(o),c.d(o,{data:()=>d});const d=JSON.parse('{"key":"v-3db71024","path":"/code/website/emmet/css.html","title":"CSS Emmet","lang":"zh-CN","frontmatter":{"title":"CSS Emmet","icon":"css","date":"2019-09-03T00:00:00.000Z","category":["Emmet"],"tag":["快捷键","HTML"],"summary":"对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。 添加属性 您可以使用缩写来生成 CSS 属性。如 m 会生成 margin: ;，同时光标会自动置于值处。 同时添加属性与值值 您可以将值直接输入缩写的后面，如果有多个值，您需要用 - 将它们分开，多余的 - 将会被理解为负值。 案例 m10: margin: 10px;; m10-20: m","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/website/emmet/css.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"CSS Emmet"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"快捷键"}],["meta",{"property":"article:tag","content":"HTML"}],["meta",{"property":"article:published_time","content":"2019-09-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"添加属性","slug":"添加属性","link":"#添加属性","children":[]},{"level":2,"title":"同时添加属性与值值","slug":"同时添加属性与值值","link":"#同时添加属性与值值","children":[]},{"level":2,"title":"值的单位","slug":"值的单位","link":"#值的单位","children":[]},{"level":2,"title":"值别名","slug":"值别名","link":"#值别名","children":[]},{"level":2,"title":"颜色值","slug":"颜色值","link":"#颜色值","children":[]},{"level":2,"title":"无单元属性","slug":"无单元属性","link":"#无单元属性","children":[]},{"level":2,"title":"重要修饰符","slug":"重要修饰符","link":"#重要修饰符","children":[]},{"level":2,"title":"输出多个属性","slug":"输出多个属性","link":"#输出多个属性","children":[]}],"git":{"createdTime":1605516411000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"code/website/emmet/css.md","localizedDate":"2019年9月3日"}')}}]);