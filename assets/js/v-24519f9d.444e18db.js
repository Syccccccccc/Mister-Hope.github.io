"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10916],{19977:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(34086);const p=(0,e._)("p",null,"本章简单介绍 JavaScript 中语句，区块和注释的概念。",-1),t=(0,e.uE)('<h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><p>JavaScript 程序的执行单位为行 (line)，也就是一行一行地执行。一般情况下，每一行就是一个语句。</p><p>语句 (statement) 是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这条语句先用 <code>let</code> 命令，声明了变量 <code>a</code>，然后将 <code>1 + 3</code> 的运算结果赋值给变量 <code>a</code>。</p><p><code>1 + 3</code> 叫做表达式 (expression)，指一个为了得到返回值的计算式。语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。凡是 JavaScript 语言中预期为值的地方，都可以使用表达式。比如，赋值语句的等号右边，预期是一个值，因此可以放置各种表达式。</p><p>下面的一行代码是一个字符串，但仍然可以视为一个完整的语句:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;Hello, world&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>语句以分号结尾，一个分号就表示一个语句结束。多个语句可以写在一行内。下面的一行代码包含两个语句“</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 不建议一行写多个语句!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>分号前面可以没有任何内容，JavaScript 引擎将其视为空语句。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面的代码就表示 3 个空语句。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>JavaScript 并不强制要求在每个语句的结尾加 <code>;</code> ，浏览器中负责执行 JavaScript 代码的引擎会自动在每个语句的结尾补上 <code>;</code>。</p><p>让 JavaScript 引擎自动加分号在某些情况下会改变程序的语义，导致运行结果与期望不一致。在本教程中，所有语句都会添加 <code>;</code> 不会省略。</p><p>在 Mr.Hope 的所有项目中，都强制要求在行末添加分号。</p></div><h2 id="区块" tabindex="-1"><a class="header-anchor" href="#区块" aria-hidden="true">#</a> 区块</h2><p>JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”(block)。</p><p>区块是一组语句的集合，用 <code>{...}</code> 。例如，下面的代码先做了一个判断，如果判断成立，将执行 <code>{...}</code> 中的所有语句:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  z <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>注意花括号 <code>{...}</code> 内的语句具有缩进，通常是 2 个空格。缩进不是 JavaScript 语法要求中所必须的，但缩进有助于我们理解代码的层次，所以编写代码时要遵守缩进规则。很多文本编辑器如 VS Code 具有“自动缩进”的功能，可以帮助整理代码。</p><div class="custom-container tip"><p class="custom-container-title">缩进</p><p>缩进也可以是一个 tab (四个空格宽)。</p><p>Mr.Hope 的个人喜好是设置两个空格，这样可以减少缩进量，即减少代码右移。</p></div><p>对于 <code>var</code> 命令来说，JavaScript 的区块不构成单独的作用域(scope)。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\na<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码在区块内部，使用 <code>var</code> 命令声明并赋值了变量 <code>a</code>，然后在区块外部，变量 <code>a</code> 依然有效，区块对于 <code>var</code> 命令不构成单独的作用域，与不使用区块的情况没有任何区别。在 JavaScript 语言中，单独使用区块并不常见，区块往往用来构成其他更复杂的语法结构，比如 <code>for</code>、<code>if</code>、<code>while</code>、<code>function</code> 等。</p><p>区块还可以嵌套，形成层级结构:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  z <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    z <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    z <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>JavaScript 本身对嵌套的层级没有限制，但是过多的嵌套无疑会大大增加看懂代码的难度。遇到这种情况，需要把部分代码抽出来，作为函数来调用，这样可以减少代码的复杂度。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>源码中被 JavaScript 引擎忽略的部分就叫做注释，它的作用是对代码进行解释，供开发人员观看，而 JavaScript 引擎会自动忽略。</p><p>JavaScript 提供两种注释的写法:</p><ul><li><p>以 <code>//</code> 开头直到行末的字符被视为行注释:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 这是一行注释</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这也是注释</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>用 <code>/*...*/</code> 把多行字符包裹起来，把一大 “块” 视为一个注释:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* 从这里开始是块注释\n仍然是注释\n仍然是注释\n注释结束 */</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><p>由于历史遗留问题<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>，JavaScript 可以兼容 HTML 代码的注释。不过请不要使用此做法。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>使用 HTML 代码的注释</p><p>由于历史上 JavaScript 可以兼容 HTML 代码的注释，所以 <code>&lt;!--</code> 和 <code>--&gt;</code> 也被视为合法的单行注释。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token operator">--</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码中，只有 <code>x = 1</code> 会执行，其他的部分都被注释掉了。</p><p>需要注意的是，<code>--&gt;</code> 只有在行首，才会被当成单行注释，否则会当作正常的运算。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">countdown</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">countdown</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码中，<code>n --&gt; 0</code> 实际上会当作 <code>n-- &gt; 0</code>，因此输出 2、1、0。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',33),o={},c=(0,s(82831).Z)(o,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e.kq)(" more "),t],64)}]])},82831:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},55995:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-24519f9d",path:"/code/language/js/guide/grammar.html",title:"基本语法",lang:"zh-CN",frontmatter:{title:"基本语法",icon:"quote",date:"2019-09-14T00:00:00.000Z",category:["JavaScript"],tag:["快速上手"],summary:"本章简单介绍 JavaScript 中语句，区块和注释的概念。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/guide/grammar.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"基本语法"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-06T04:04:43.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"快速上手"}],["meta",{property:"article:published_time",content:"2019-09-14T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-06T04:04:43.000Z"}]]},excerpt:"<p>本章简单介绍 JavaScript 中语句，区块和注释的概念。</p>\n",headers:[{level:2,title:"语句",slug:"语句",children:[]},{level:2,title:"区块",slug:"区块",children:[]},{level:2,title:"注释",slug:"注释",children:[]}],git:{createdTime:1591204114e3,updatedTime:1649217883e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:9}]},readingTime:{minutes:4.13,words:1238},filePathRelative:"code/language/js/guide/grammar.md"}}}]);