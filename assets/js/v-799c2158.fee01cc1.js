"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95533],{2135:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var s=a(34086);const t=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"章节过时"),(0,s._)("p",null,"目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。")],-1),l=(0,s.uE)('<p>jQuery 的选择器很强大，用起来又简单又灵活，但是搞了这么久，我拿到了 jQuery 对象，到底要干什么?</p><p>答案当然是操作对应的 DOM 节点啦!</p><p>回顾一下修改 DOM 的 CSS、文本、设置 HTML 有多么麻烦，而且有的浏览器只有 innerHTML，有的浏览器支持 innerText，有了 jQuery 对象，不需要考虑浏览器差异了，全部统一操作!</p><h2 id="修改-text-和-html" tabindex="-1"><a class="header-anchor" href="#修改-text-和-html" aria-hidden="true">#</a> 修改 Text 和 HTML</h2><p>jQuery 对象的 <code>text()</code> 和 <code>html()</code> 方法分别获取节点的文本和原始 HTML 文本，例如，如下的 HTML 结构:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- HTML结构 --&gt;\n&lt;ul id=&quot;test-ul&quot;&gt;\n  &lt;li class=&quot;js&quot;&gt;JavaScript&lt;/li&gt;\n  &lt;li name=&quot;book&quot;&gt;Java &amp;amp; JavaScript&lt;/li&gt;\n&lt;/ul&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>分别获取文本和 HTML:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$(&quot;#test-ul li[name=book]&quot;).text(); // &#39;Java &amp; JavaScript&#39;\n$(&quot;#test-ul li[name=book]&quot;).html(); // &#39;Java &amp;amp; JavaScript&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如何设置文本或 HTML ? jQuery 的 API 设计非常巧妙: 无参数调用 <code>text()</code> 是获取文本，传入参数就变成设置文本，HTML 也是类似操作，自己动手试试:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;use strict&quot;;\nconst j1 = $(&quot;#test-ul li.js&quot;);\nconst j2 = $(&quot;#test-ul li[name=book]&quot;);\n\nj1.html(&#39;&lt;span style=&quot;color: red&quot;&gt;JavaScript&lt;/span&gt;&#39;);\nj2.text(&quot;JavaScript &amp; ECMAScript&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>JavaScript\nJava &amp; JavaScript\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>一个 jQuery 对象可以包含 0 个或任意个 DOM 对象，它的方法实际上会作用在对应的每个 DOM 节点上。在上面的例子中试试:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$(&quot;#test-ul li&quot;).text(&quot;JS&quot;); // 是不是两个节点都变成了JS?\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>所以 jQuery 对象的另一个好处是我们可以执行一个操作，作用在对应的一组 DOM 节点上。即使选择器没有返回任何 DOM 节点，调用 jQuery 对象的方法仍然不会报错:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 如果不存在 id 为 not-exist 的节点:\n$(&quot;#not-exist&quot;).text(&quot;Hello&quot;); // 代码不报错，没有节点被设置为&#39;Hello&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这意味着 jQuery 帮您免去了许多 if 语句。</p><h2 id="修改-css" tabindex="-1"><a class="header-anchor" href="#修改-css" aria-hidden="true">#</a> 修改 CSS</h2><p>jQuery 对象有“批量操作”的特点，这用于修改 CSS 实在是太方便了。考虑下面的 HTML 结构:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- HTML 结构 --&gt;\n&lt;ul id=&quot;test-css&quot;&gt;\n  &lt;li class=&quot;lang dy&quot;&gt;&lt;span&gt;JavaScript&lt;/span&gt;&lt;/li&gt;\n  &lt;li class=&quot;lang&quot;&gt;&lt;span&gt;Java&lt;/span&gt;&lt;/li&gt;\n  &lt;li class=&quot;lang dy&quot;&gt;&lt;span&gt;Python&lt;/span&gt;&lt;/li&gt;\n  &lt;li class=&quot;lang&quot;&gt;&lt;span&gt;Swift&lt;/span&gt;&lt;/li&gt;\n  &lt;li class=&quot;lang dy&quot;&gt;&lt;span&gt;Scheme&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>要高亮显示动态语言，调用 jQuery 对象的 <code>css(&#39;name&#39;, &#39;value&#39;)</code> 方法，我们用一行语句实现:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;use strict&quot;;\n\n$(&quot;#test-css li.dy&gt;span&quot;)\n  .css(&quot;background-color&quot;, &quot;#ffd351&quot;)\n  .css(&quot;color&quot;, &quot;red&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>JavaScript\nJava\nPython\nSwift\nScheme\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>注意，jQuery 对象的所有方法都返回一个 jQuery 对象(可能是新的也可能是自身)，这样我们可以进行链式调用，非常方便。</p><p>jQuery 对象的 <code>css()</code> 方法可以这么用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const div = $(&quot;#test-div&quot;);\ndiv.css(&quot;color&quot;); // &#39;#000033&#39;, 获取CSS属性\ndiv.css(&quot;color&quot;, &quot;#336699&quot;); // 设置CSS属性\ndiv.css(&quot;color&quot;, &quot;&quot;); // 清除CSS属性\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>为了和 JavaScript 保持一致，CSS 属性可以用 <code>&#39;background-color&#39;</code> 和 <code>&#39;backgroundColor&#39;</code> 两种格式。</p><p><code>css()</code> 方法将作用于 DOM 节点的 style 属性，具有最高优先级。如果要修改 class 属性，可以用 jQuery 提供的下列方法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const div = $(&quot;#test-div&quot;);\ndiv.hasClass(&quot;highlight&quot;); // false， class是否包含highlight\ndiv.addClass(&quot;highlight&quot;); // 添加highlight这个class\ndiv.removeClass(&quot;highlight&quot;); // 删除highlight这个class\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="显示和隐藏-dom" tabindex="-1"><a class="header-anchor" href="#显示和隐藏-dom" aria-hidden="true">#</a> 显示和隐藏 DOM</h2><p>要隐藏一个 DOM，我们可以设置 CSS 的 <code>display</code> 属性为 <code>none</code>，利用 <code>css()</code> 方法就可以实现。不过，要显示这个 DOM 就需要恢复原有的 <code>display</code> 属性，这就得先记下来原有的 <code>display</code> 属性到底是 <code>block</code> 还是 <code>inline</code> 还是别的值。</p><p>考虑到显示和隐藏 DOM 元素使用非常普遍，jQuery 直接提供 <code>show()</code> 和 <code>hide()</code> 方法，我们不用关心它是如何修改 display 属性的，总之它能正常工作:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const a = $(&quot;a[target=_blank]&quot;);\na.hide(); // 隐藏\na.show(); // 显示\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意，隐藏 DOM 节点并未改变 DOM 树的结构，它只影响 DOM 节点的显示。这和删除 DOM 节点是不同的。</p><h2 id="获取-dom-信息" tabindex="-1"><a class="header-anchor" href="#获取-dom-信息" aria-hidden="true">#</a> 获取 DOM 信息</h2><p>利用 jQuery 对象的若干方法，我们直接可以获取 DOM 的高宽等信息，而无需针对不同浏览器编写特定代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 浏览器可视窗口大小:\n$(window).width(); // 800\n$(window).height(); // 600\n\n// HTML 文档大小:\n$(document).width(); // 800\n$(document).height(); // 3500\n\n// 某个 div 的大小:\nconst div = $(&quot;#test-div&quot;);\ndiv.width(); // 600\ndiv.height(); // 300\ndiv.width(400); // 设置 CSS 属性 width: 400px，是否生效要看 CSS 是否有效\ndiv.height(&quot;200px&quot;); // 设置 CSS 属性 height: 200px，是否生效要看 CSS 是否有效\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>attr()</code> 和 <code>removeAttr()</code> 方法用于操作 DOM 节点的属性:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// &lt;div id=&quot;test-div&quot; name=&quot;Test&quot; start=&quot;1&quot;&gt;...&lt;/div&gt;\nconst div = $(&quot;#test-div&quot;);\ndiv.attr(&quot;data&quot;); // undefined, 属性不存在\ndiv.attr(&quot;name&quot;); // &#39;Test&#39;\ndiv.attr(&quot;name&quot;, &quot;Hello&quot;); // div 的 name 属性变为 &#39;Hello&#39;\ndiv.removeAttr(&quot;name&quot;); // 删除 name 属性\ndiv.attr(&quot;name&quot;); // undefined\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>prop()</code> 方法和 <code>attr()</code> 类似，但是 HTML5 规定有一种属性在 DOM 节点中可以没有值，只有出现与不出现两种，例如:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;input id=&quot;test-radio&quot; type=&quot;radio&quot; name=&quot;test&quot; checked value=&quot;1&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>等价于:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;input id=&quot;test-radio&quot; type=&quot;radio&quot; name=&quot;test&quot; checked=&quot;checked&quot; value=&quot;1&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>attr()</code> 和 <code>prop()</code> 对于属性 <code>checked</code> 处理有所不同:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const radio = $(&quot;#test-radio&quot;);\nradio.attr(&quot;checked&quot;); // &#39;checked&#39;\nradio.prop(&quot;checked&quot;); // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>prop()</code> 返回值更合理一些。不过，用 <code>is()</code> 方法判断更好:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const radio = $(&quot;#test-radio&quot;);\nradio.is(&quot;:checked&quot;); // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>类似的属性还有 <code>selected</code>，处理时最好用 <code>is(&#39;:selected&#39;)</code>。</p><h2 id="操作表单" tabindex="-1"><a class="header-anchor" href="#操作表单" aria-hidden="true">#</a> 操作表单</h2><p>对于表单元素，jQuery 对象统一提供 <code>val()</code> 方法获取和设置对应的 <code>value</code> 属性:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/*\n    &lt;input id=&quot;test-input&quot; name=&quot;email&quot; value=&quot;&quot;&gt;\n    &lt;select id=&quot;test-select&quot; name=&quot;city&quot;&gt;\n        &lt;option value=&quot;BJ&quot; selected&gt;Beijing&lt;/option&gt;\n        &lt;option value=&quot;SH&quot;&gt;Shanghai&lt;/option&gt;\n        &lt;option value=&quot;SZ&quot;&gt;Shenzhen&lt;/option&gt;\n    &lt;/select&gt;\n    &lt;textarea id=&quot;test-textarea&quot;&gt;Hello&lt;/textarea&gt;\n*/\nconst input = $(&quot;#test-input&quot;),\n  select = $(&quot;#test-select&quot;),\n  textarea = $(&quot;#test-textarea&quot;);\n\ninput.val(); // &#39;test&#39;\ninput.val(&quot;abc@example.com&quot;); // 文本框的内容已变为 abc@example.com\n\nselect.val(); // &#39;BJ&#39;\nselect.val(&quot;SH&quot;); // 选择框已变为 Shanghai\n\ntextarea.val(); // &#39;Hello&#39;\ntextarea.val(&quot;Hi&quot;); // 文本区域已更新为 &#39;Hi&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>可见，一个 <code>val()</code> 就统一了各种输入框的取值和赋值的问题。</p>',51),r={},i=(0,a(82831).Z)(r,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s.kq)(" more "),l],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},62352:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-799c2158",path:"/code/website/jQuery/operate-dom.html",title:"操作 DOM",lang:"zh-CN",frontmatter:{title:"操作 DOM",icon:"operate",date:"2019-11-03T00:00:00.000Z",category:["jQuery"],summary:"章节过时\n目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/jQuery/operate-dom.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"操作 DOM"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-11-03T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:'<div class="custom-container tip"><p class="custom-container-title">章节过时</p>\n<p>目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。</p>\n</div>\n',headers:[{level:2,title:"修改 Text 和 HTML",slug:"修改-text-和-html",children:[]},{level:2,title:"修改 CSS",slug:"修改-css",children:[]},{level:2,title:"显示和隐藏 DOM",slug:"显示和隐藏-dom",children:[]},{level:2,title:"获取 DOM 信息",slug:"获取-dom-信息",children:[]},{level:2,title:"操作表单",slug:"操作表单",children:[]}],git:{createdTime:164464503e4,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:4.86,words:1459},filePathRelative:"code/website/jQuery/operate-dom.md"}}}]);