"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[32634],{34058:(e,s,n)=>{n.r(s),n.d(s,{default:()=>O});var l=n(34086);const a=(0,l._)("p",null,"类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。",-1),t=(0,l._)("h2",{id:"组件模板",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#组件模板","aria-hidden":"true"},"#"),(0,l.Uk)(" 组件模板")],-1),r=(0,l._)("p",null,"组件模板的写法与页面模板相同。组件模板与组件数据结合后生成的节点树，将被插入到组件的引用位置上。",-1),i=(0,l._)("p",null,[(0,l.Uk)("在组件模板中可以提供一个 "),(0,l._)("code",null,"<slot>"),(0,l.Uk)(" 节点，用于承载组件引用时提供的子节点。")],-1),c={class:"custom-block details"},p=(0,l._)("summary",null,"代码示例",-1),o={href:"https://developers.weixin.qq.com/s/1udXLnmi6KY2",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("在开发者工具中预览效果"),u=(0,l.uE)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 组件模板 --&gt;\n&lt;view class=&quot;wrapper&quot;&gt;\n  &lt;view&gt;这里是组件的内部节点&lt;/view&gt;\n  &lt;slot&gt;&lt;/slot&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 引用组件的页面模板 --&gt;\n&lt;view&gt;\n  &lt;component-tag-name&gt;\n    &lt;!-- 这部分内容将被放置在组件 &lt;slot&gt; 的位置上 --&gt;\n    &lt;view&gt;这里是插入到组件slot中的内容&lt;/view&gt;\n  &lt;/component-tag-name&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',2),m=(0,l.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模板中引用到的自定义组件及其对应的节点名需要在 json 文件中显式定义，否则会被当作一个无意义的节点。除此以外，节点名也可以被声明为抽象节点。</p></div><h2 id="模板数据绑定" tabindex="-1"><a class="header-anchor" href="#模板数据绑定" aria-hidden="true">#</a> 模板数据绑定</h2><p>与普通的 WXML 模板类似，可以使用数据绑定，这样就可以向子组件的属性传递动态数据。</p><details class="custom-block details"><summary>代码示例</summary><p>在开发者工具中预览效果</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 引用组件的页面模板 --&gt;\n&lt;view&gt;\n  &lt;component-tag-name prop-a=&quot;{{dataFieldA}}&quot; prop-b=&quot;{{dataFieldB}}&quot;&gt;\n    &lt;!-- 这部分内容将被放置在组件 &lt;slot&gt; 的位置上 --&gt;\n    &lt;view&gt;这里是插入到组件slot中的内容&lt;/view&gt;\n  &lt;/component-tag-name&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在以上例子中，组件的属性 <code>propA</code> 和 <code>propB</code> 将收到页面传递的数据。页面可以通过 <code>setData</code> 来改变绑定的数据字段。</p></details><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这样的数据绑定只能传递 JSON 兼容数据或函数(但这些函数不能在 WXML 中直接调用，只能传递给子组件)。</p></div><h2 id="组件-wxml-的-slot" tabindex="-1"><a class="header-anchor" href="#组件-wxml-的-slot" aria-hidden="true">#</a> 组件 wxml 的 slot</h2><p>在组件的 wxml 中可以包含 <code>slot</code> 节点，用于承载组件使用者提供的 wxml 结构。</p><p>默认情况下，一个组件的 wxml 中只能有一个 <code>slot</code> 。需要使用多 <code>slot</code> 时，可以在组件 js 中声明启用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Component({\n  properties: { /*...*/ },\n  methods: { /*...*/ }\n  options: {\n    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持\n  },\n})\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>此时，可以在这个组件的 wxml 中使用多个 slot ，以不同的 name 来区分。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 组件模板 --&gt;\n&lt;view class=&quot;wrapper&quot;&gt;\n  &lt;slot name=&quot;before&quot;&gt;&lt;/slot&gt;\n  &lt;view&gt;这里是组件的内部细节&lt;/view&gt;\n  &lt;slot name=&quot;after&quot;&gt;&lt;/slot&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用时，用 <code>slot</code> 属性来将节点插入到不同的 slot 上。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 引用组件的页面模板 --&gt;\n&lt;view&gt;\n  &lt;component-tag-name&gt;\n    &lt;!-- 这部分内容将被放置在组件 &lt;slot name=&quot;before&quot;&gt; 的位置上 --&gt;\n    &lt;view slot=&quot;before&quot;&gt;这里是插入到组件slot name=&quot;before&quot;中的内容&lt;/view&gt;\n    &lt;!-- 这部分内容将被放置在组件 &lt;slot name=&quot;after&quot;&gt; 的位置上 --&gt;\n    &lt;view slot=&quot;after&quot;&gt;这里是插入到组件slot name=&quot;after&quot;中的内容&lt;/view&gt;\n  &lt;/component-tag-name&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="组件样式" tabindex="-1"><a class="header-anchor" href="#组件样式" aria-hidden="true">#</a> 组件样式</h2><p>组件对应 wxss 文件的样式，只对组件 wxml 内的节点生效。编写组件样式时，需要注意以下几点:</p><ul><li>组件和引用组件的页面不能使用 id 选择器(<code>#a</code>)、属性选择器(<code>[a]</code>)和标签名选择器，请改用 class 选择器。</li><li>组件和引用组件的页面中使用后代选择器(<code>.a .b</code>)在一些极端情况下会有非预期的表现，如遇，请避免使用。</li><li>子元素选择器(<code>.a&gt;.b</code>)只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况。</li><li>继承样式，如 <code>font</code> 、 <code>color</code> ，会从组件外继承到组件内。</li><li>除继承样式外， app.wxss 中的样式、组件所在页面的的样式对自定义组件无效(除非更改组件样式隔离选项)。</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>/* 在组件中不能使用 */\n# a {\n}\n\n/* 在组件中不能使用 */\n[a] {\n}\n\n/* 在组件中不能使用 */\nbutton {\n}\n\n/* 除非 .a 是 view 组件节点，否则不一定会生效 */\n.a &gt; .b {\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>除此以外，组件可以指定它所在节点的默认样式，使用 <code>:host</code> 选择器。</p>',18),b={class:"custom-block details"},g=(0,l._)("summary",null,"代码示例",-1),v={href:"https://developers.weixin.qq.com/s/jAgvwKm16bZD",target:"_blank",rel:"noopener noreferrer"},x=(0,l.Uk)("在开发者工具中预览效果"),h=(0,l.uE)('<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>:host {\n  color: yellow;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 页面的 WXML --&gt;\n&lt;custom-component&gt;这段文本是黄色的&lt;/custom-component&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',2),w=(0,l.uE)('<h2 id="组件样式隔离" tabindex="-1"><a class="header-anchor" href="#组件样式隔离" aria-hidden="true">#</a> 组件样式隔离</h2><p>默认情况下，自定义组件的样式只受到自定义组件 wxss 的影响。除非以下两种情况:</p><ul><li>app.wxss 或页面的 wxss 中使用了标签名选择器(或一些其他特殊选择器)来直接指定样式，这些选择器会影响到页面和全部组件。通常情况下这是不推荐的做法。</li><li>指定特殊的样式隔离选项 <code>styleIsolation</code>。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Component({\n  options: {\n    styleIsolation: &quot;isolated&quot;,\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',4),q={href:"https://developers.weixin.qq.com/s/xPQhJcm37e7h",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("在开发者工具中预览效果"),f=(0,l.uE)('<h3 id="styleisolation" tabindex="-1"><a class="header-anchor" href="#styleisolation" aria-hidden="true">#</a> styleIsolation</h3><p><code>styleIsolation</code> 选项从基础库版本 2.6.5 开始支持。它支持以下取值:</p><ul><li><code>isolated</code> 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响(一般情况下的默认值)；</li><li><code>apply-shared</code> 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；</li><li><code>shared</code> 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 <code>apply-shared</code> 或 <code>shared</code> 的自定义组件。(这个选项在插件中不可用。)</li></ul><p>使用后两者时，请务必注意组件间样式的相互影响。</p><p>如果这个 Component 构造器用于构造页面 ，则默认值为 <code>shared</code> ，且还有以下几个额外的样式隔离选项可用:</p><ul><li><code>page-isolated</code> 表示在这个页面禁用 app.wxss ，同时，页面的 wxss 不会影响到其他自定义组件；</li><li><code>page-apply-shared</code> 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式不会影响到其他自定义组件，但设为 <code>shared</code> 的自定义组件会影响到页面；</li><li><code>page-shared</code> 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式会影响到其他设为 <code>apply-shared</code> 或 <code>shared</code> 的自定义组件，也会受到设为 <code>shared</code> 的自定义组件的影响。</li></ul><p>从小程序基础库版本 2.10.1 开始，也可以在页面或自定义组件的 json 文件中配置 <code>styleIsolation</code> (这样就不需在 js 文件的 <code>options</code> 中再配置)。例如:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{\n  &quot;styleIsolation&quot;: &quot;isolated&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',8),_={class:"custom-container tip"},k=(0,l._)("p",{class:"custom-container-title"},"历史方式",-1),j=(0,l._)("p",null,[(0,l.Uk)("小程序基础库版本 2.2.3 以上支持 "),(0,l._)("code",null,"addGlobalClass"),(0,l.Uk)(" 选项，即在 Component 的 "),(0,l._)("code",null,"options"),(0,l.Uk)(" 中设置 "),(0,l._)("code",null,"addGlobalClass: true"),(0,l.Uk)("。 这个选项等价于设置 "),(0,l._)("code",null,"styleIsolation: apply-shared"),(0,l.Uk)(" ，但设置了 "),(0,l._)("code",null,"styleIsolation"),(0,l.Uk)(" 选项后这个选项会失效。")],-1),C={class:"custom-block details"},U=(0,l._)("summary",null,"代码示例",-1),W={href:"https://developers.weixin.qq.com/s/VkTd7Fm37ggl",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("在开发者工具中预览效果"),I=(0,l.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Component({\n  options: {\n    addGlobalClass: true,\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;text class=&quot;red-text&quot;&gt;这段文本的颜色由 `app.wxss` 和页面 `wxss` 中的样式定义来决定&lt;/text&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>/*app.wxss*/\n.red-text {\n  color: red;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',3),L={id:"外部样式类",tabindex:"-1"},M=(0,l._)("a",{class:"header-anchor",href:"#外部样式类","aria-hidden":"true"},"#",-1),X=(0,l.Uk)(" 外部样式类 "),T=(0,l.uE)('<p>有时，组件希望接受外部传入的样式类。此时可以在 Component 中用 <code>externalClasses</code> 定义段定义若干个外部样式类。</p><p>这个特性可以用于实现类似于 view 组件的 hover-class 属性: 页面可以提供一个样式类，赋予 view 的 hover-class ，这个样式类本身写在页面中而非 view 组件的实现中。</p><p>注意: 在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此最好避免这种情况。</p><details class="custom-block details"><summary>代码示例</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/*组件 custom-component.js*/\nComponent({\n  externalClasses: [&quot;my-class&quot;],\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 组件 custom-component.wxml --&gt;\n&lt;custom-component class=&quot;my-class&quot;&gt;这段文本的颜色由组件外的 class 决定&lt;/custom-component&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details><p>这样，组件的使用者可以指定这个样式类对应的 class ，就像使用普通属性一样。在 2.7.1 之后，可以指定多个对应的 class 。</p><details class="custom-block details"><summary>代码示例</summary><p>在开发者工具中预览效果</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 页面的 WXML --&gt;\n&lt;custom-component my-class=&quot;red-text&quot; /&gt;\n&lt;custom-component my-class=&quot;large-text&quot; /&gt;\n&lt;!-- 以下写法需要基础库版本 2.7.1 以上 --&gt;\n&lt;custom-component my-class=&quot;red-text large-text&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.red-text {\n  color: red;\n}\n.large-text {\n  font-size: 1.5em;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>',6),H={id:"引用页面或父组件的样式",tabindex:"-1"},Z=(0,l._)("a",{class:"header-anchor",href:"#引用页面或父组件的样式","aria-hidden":"true"},"#",-1),z=(0,l.Uk)(" 引用页面或父组件的样式 "),A=(0,l.uE)('<blockquote><p>基础库 2.9.2 开始支持</p></blockquote><p>即使启用了样式隔离 <code>isolated</code> ，组件仍然可以在局部引用组件所在页面的样式或父组件的样式。</p><p>例如，如果在页面 wxss 中定义了:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.blue-text {\n  color: blue;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在这个组件中可以使用 <code>~</code> 来引用这个类的样式:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;view class=&quot;~blue-text&quot;&gt; 这段文本是蓝色的 &lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果在一个组件的父组件 wxss 中定义了:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.red-text {\n  color: red;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在这个组件中可以使用 <code>^</code> 来引用这个类的样式:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;view class=&quot;^red-text&quot;&gt; 这段文本是红色的 &lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>也可以连续使用多个 <code>^</code> 来引用祖先组件中的样式。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果组件是比较独立、通用的组件，请优先使用外部样式类的方式，而非直接引用父组件或页面的样式。</p></div>',12),D={id:"虚拟化组件节点",tabindex:"-1"},F=(0,l._)("a",{class:"header-anchor",href:"#虚拟化组件节点","aria-hidden":"true"},"#",-1),B=(0,l.Uk)(" 虚拟化组件节点 "),G=(0,l.uE)('<blockquote><p>基础库 2.11.2 开始支持</p></blockquote><p>默认情况下，自定义组件本身的那个节点是一个“普通”的节点，使用时可以在这个节点上设置 class style 、动画、 flex 布局等，就如同普通的 view 组件节点一样。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 页面的 WXML --&gt;\n&lt;view style=&quot;display: flex&quot;&gt;\n  &lt;!-- 默认情况下，这是一个普通的节点 --&gt;\n  &lt;custom-component style=&quot;color: blue; flex: 1&quot;&gt;蓝色、满宽的&lt;/custom-component&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但有些时候，自定义组件并不希望这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定。</p><p>这种情况下，可以将这个自定义组件设置为“虚拟的”:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Component({\n  properties: {\n    style: {\n      // 定义 style 属性可以拿到 style 属性上设置的值\n      type: String,\n    },\n  },\n  options: {\n    virtualHost: true,\n  },\n  externalClasses: [&quot;class&quot;], // 可以将 class 设为 externalClasses\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这样，可以将 flex 放入自定义组件内:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- 页面的 WXML --&gt;\n&lt;view style=&quot;display: flex&quot;&gt;\n  &lt;!-- 如果设置了 virtualHost ，节点上的样式将失效 --&gt;\n  &lt;custom-component style=&quot;color: blue&quot;&gt;不是蓝色的&lt;/custom-component&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- custom-component.wxml --&gt;\n&lt;view style=&quot;flex: 1&quot;&gt;\n  满宽的\n  &lt;slot&gt;&lt;/slot&gt;\n&lt;/view&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>需要注意的是，自定义组件节点上的 class style 和动画将不再生效，但仍可以:</p><ul><li>将 style 定义成 <code>properties</code> 属性来获取 style 上设置的值；</li><li>将 class 定义成 <code>externalClasses</code> 外部样式类使得自定义组件 wxml 可以使用 class 值。</li></ul>',11),N=(0,l.Uk)("代码示例: "),S={href:"https://developers.weixin.qq.com/s/AlV9fEmF7Dh8",target:"_blank",rel:"noopener noreferrer"},J=(0,l.Uk)("在开发者工具中预览效果"),K={},O=(0,n(82831).Z)(K,[["render",function(e,s){const n=(0,l.up)("ExternalLinkIcon"),K=(0,l.up)("Badge");return(0,l.wg)(),(0,l.iD)(l.HY,null,[a,t,r,i,(0,l._)("details",c,[p,(0,l._)("p",null,[(0,l._)("a",o,[d,(0,l.Wm)(n)])]),u]),m,(0,l._)("details",b,[g,(0,l._)("p",null,[(0,l._)("a",v,[x,(0,l.Wm)(n)])]),h]),w,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",q,[y,(0,l.Wm)(n)])])]),f,(0,l._)("div",_,[k,j,(0,l._)("details",C,[U,(0,l._)("p",null,[(0,l._)("a",W,[E,(0,l.Wm)(n)])]),I])]),(0,l._)("h2",L,[M,X,(0,l.Wm)(K,{type:"grey",text:"高级"})]),T,(0,l._)("h2",H,[Z,z,(0,l.Wm)(K,{type:"grey",text:"高级"})]),A,(0,l._)("h2",D,[F,B,(0,l.Wm)(K,{type:"grey",text:"高级"})]),G,(0,l._)("p",null,[N,(0,l._)("a",S,[J,(0,l.Wm)(n)])])],64)}]])},82831:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,l]of s)n[e]=l;return n}},73582:(e,s,n)=>{n.r(s),n.d(s,{data:()=>l});const l={key:"v-1cc0ca48",path:"/code/mini-app/guide/custom-component/style.html",title:"组件模板和样式",lang:"zh-CN",frontmatter:{title:"组件模板和样式",icon:"decorate",category:["小程序"],summary:"类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。 组件模板 组件模板的写法与页面模板相同。组件模板与组件数据结合后生成的节点树，将被插入到组件的引用位置上。 在组件模板中可以提供一个 `` 节点，用于承载组件引用时提供的子节点。 代码示例 在开发者工具中预览效果 在模板中引用到的自定义组件及其对应的节点名需要在 json 文件中显式定义，",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/custom-component/style.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"组件模板和样式"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-03-21T09:22:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-03-21T09:22:34.000Z"}]]},excerpt:"",headers:[{level:2,title:"组件模板",slug:"组件模板",children:[]},{level:2,title:"模板数据绑定",slug:"模板数据绑定",children:[]},{level:2,title:"组件 wxml 的 slot",slug:"组件-wxml-的-slot",children:[]},{level:2,title:"组件样式",slug:"组件样式",children:[]},{level:2,title:"组件样式隔离",slug:"组件样式隔离",children:[{level:3,title:"styleIsolation",slug:"styleisolation",children:[]}]},{level:2,title:"外部样式类",slug:"外部样式类",children:[]},{level:2,title:"引用页面或父组件的样式",slug:"引用页面或父组件的样式",children:[]},{level:2,title:"虚拟化组件节点",slug:"虚拟化组件节点",children:[]}],git:{createdTime:1611059957e3,updatedTime:1616318554e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:8.82,words:2646},filePathRelative:"code/mini-app/guide/custom-component/style.md"}}}]);