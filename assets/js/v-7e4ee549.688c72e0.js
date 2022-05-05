"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[71455],{7496:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(34086);const p=(0,e._)("p",null,"布尔运算符用于将表达式转为布尔值，一共包含四个运算符。",-1),o=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Uk)("取反运算符: "),(0,e._)("code",null,"!")]),(0,e._)("li",null,[(0,e.Uk)("且运算符: "),(0,e._)("code",null,"&&")]),(0,e._)("li",null,[(0,e.Uk)("或运算符: "),(0,e._)("code",null,"||")]),(0,e._)("li",null,[(0,e.Uk)("三元运算符: "),(0,e._)("code",null,"?:")])],-1),t=(0,e.uE)('<h2 id="取反运算符" tabindex="-1"><a class="header-anchor" href="#取反运算符" aria-hidden="true">#</a> 取反运算符 <code>!</code></h2><p>取反运算符是一个感叹号，用于将布尔值变为相反值，即 <code>true</code> 变成 <code>false</code>，<code>false</code> 变成 <code>true</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对于非布尔值，取反运算符会将其转为布尔值。可以这样记忆，以下六个值取反后为 <code>true</code>，其他值都为 <code>false</code>。</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>false</code></li><li><code>0</code></li><li><code>NaN</code></li><li>空字符串(<code>&#39;&#39;</code>)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token operator">!</span><span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token operator">!</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token operator">!</span><span class="token number">54</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token operator">!</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token operator">!</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面代码中，不管什么类型的值，经过取反运算后，都变成了布尔值。</p><p>如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与 <code>Boolean</code> 函数的作用相同。这是一种常用的类型转换的写法。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token operator">!</span>x<span class="token punctuation">;</span>\n<span class="token comment">// 等同于</span>\n<span class="token function">Boolean</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面代码中，不管 <code>x</code> 是什么类型的值，经过两次取反运算后，变成了与 <code>Boolean</code> 函数结果相同的布尔值。所以，两次取反就是将一个值转为布尔值的简便写法。</p><h2 id="且运算符" tabindex="-1"><a class="header-anchor" href="#且运算符" aria-hidden="true">#</a> 且运算符 <code>&amp;&amp;</code></h2><p>且运算符(<code>&amp;&amp;</code>)往往用于多个表达式的求值。</p><p>它的运算规则是: 如果第一个运算子的布尔值为 <code>true</code>，则返回第二个运算子的值(注意是值，不是布尔值)；如果第一个运算子的布尔值为 <code>false</code>，则直接返回第一个运算子的值，且不再对第二个运算子求值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;t&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>\n<span class="token string">&quot;t&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;f&quot;</span>\n<span class="token string">&quot;t&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n<span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>\n<span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>\n\n<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token number">1</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>\nx<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面代码的最后一个例子，由于且运算符的第一个运算子的布尔值为 <code>false</code>，则直接返回它的值 <code>0</code>，而不再对第二个运算子求值，所以变量 <code>x</code> 的值没变。</p><p>这种跳过第二个运算子的机制，被称为“短路”。有些程序员喜欢用它取代 <code>if</code> 结构，比如下面是一段 <code>if</code> 结构的代码，就可以用且运算符改写。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 等价于</span>\n\ni <span class="token operator">&amp;&amp;</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码的两种写法是等价的，但是后一种不容易看出目的，也不容易除错，建议谨慎使用。</p><p>且运算符可以多个连用，这时返回第一个布尔值为 <code>false</code> 的表达式的值。如果所有表达式的布尔值都为 <code>true</code>，则返回最后一个表达式的值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token comment">// &#39;&#39;</span>\n\n<span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token comment">// 3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面代码中，例一里面，第一个布尔值为 <code>false</code> 的表达式为第三个表达式，所以得到一个空字符串。例二里面，所有表达式的布尔值都是 <code>true</code>，所有返回最后一个表达式的值 <code>3</code>。</p><h2 id="或运算符" tabindex="-1"><a class="header-anchor" href="#或运算符" aria-hidden="true">#</a> 或运算符 <code>||</code></h2><p>或运算符(<code>||</code>)也用于多个表达式的求值。它的运算规则是: 如果第一个运算子的布尔值为 <code>true</code>，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为 <code>false</code>，则返回第二个运算子的值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;t&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;t&quot;</span>\n<span class="token string">&quot;t&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;t&quot;</span>\n<span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;f&quot;</span>\n<span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>短路规则对这个运算符也适用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token boolean">true</span> <span class="token operator">||</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nx<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码中，或运算符的第一个运算子为 <code>true</code>，所以直接返回 <code>true</code>，不再运行第二个运算子。所以，<code>x</code> 的值没有改变。这种只通过第一个表达式的值，控制是否运行第二个表达式的机制，就称为“短路”(short-cut)。</p><p>或运算符可以多个连用，这时返回第一个布尔值为 <code>true</code> 的表达式的值。如果所有表达式都为 <code>false</code>，则返回最后一个表达式的值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token number">4</span> <span class="token operator">||</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token comment">// 4</span>\n\n<span class="token boolean">false</span> <span class="token operator">||</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// &#39;&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面代码中，例一里面，第一个布尔值为 <code>true</code> 的表达式是第四个表达式，所以得到数值 4。例二里面，所有表达式的布尔值都为 <code>false</code>，所以返回最后一个表达式的值。</p><p>或运算符常用于为一个变量设置默认值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">saveText</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  text <span class="token operator">=</span> text <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 或者写成</span>\n<span class="token function">saveText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码表示，如果函数调用时，没有提供参数，则该参数默认设置为空字符串。</p><h2 id="三元条件运算符" tabindex="-1"><a class="header-anchor" href="#三元条件运算符" aria-hidden="true">#</a> <code>? :</code> 三元条件运算符</h2><p>三元条件运算符由问号(<code>?</code>)和冒号(<code>:</code>)组成，分隔三个表达式。它是 JavaScript 语言唯一一个需要三个运算子的运算符。如果第一个表达式的布尔值为 <code>true</code>，则返回第二个表达式的值，否则返回第三个表达式的值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;t&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>\n<span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;world&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码的 <code>t</code> 和 <code>0</code> 的布尔值分别为 <code>true</code> 和 <code>false</code>，所以分别返回第二个和第三个表达式的值。</p><p>通常来说，三元条件表达式与 <code>if...else</code> 语句具有同样表达效果，前者可以表达的，后者也能表达。但是两者具有一个重大差别，<code>if...else</code> 是语句，没有返回值；三元条件表达式是表达式，具有返回值。所以，在需要返回值的场合，只能使用三元条件表达式，而不能使用 <code>if..else</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">?</span> <span class="token string">&quot;T&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码中，<code>console.log</code> 方法的参数必须是一个表达式，这时就只能使用三元条件表达式。如果要用 <code>if...else</code> 语句，就必须改变整个代码写法了。</p>',40),c={},l=(0,a(82831).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,o,(0,e.kq)(" more "),t],64)}]])},82831:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},4451:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-7e4ee549",path:"/code/language/js/operators/boolean.html",title:"布尔运算符",lang:"zh-CN",frontmatter:{title:"布尔运算符",icon:"boolean",date:"2019-09-28T00:00:00.000Z",category:["JavaScript"],summary:"布尔运算符用于将表达式转为布尔值，一共包含四个运算符。\n\n取反运算符: !\n且运算符: &amp;&amp;\n或运算符: ||\n三元运算符: ?:\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/operators/boolean.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"布尔运算符"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-09-28T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>布尔运算符用于将表达式转为布尔值，一共包含四个运算符。</p>\n<ul>\n<li>取反运算符: <code v-pre>!</code></li>\n<li>且运算符: <code v-pre>&amp;&amp;</code></li>\n<li>或运算符: <code v-pre>||</code></li>\n<li>三元运算符: <code v-pre>?:</code></li>\n</ul>\n",headers:[{level:2,title:"取反运算符 !",slug:"取反运算符",children:[]},{level:2,title:"且运算符 &&",slug:"且运算符",children:[]},{level:2,title:"或运算符 ||",slug:"或运算符",children:[]},{level:2,title:"? : 三元条件运算符",slug:"三元条件运算符",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:4.6,words:1381},filePathRelative:"code/language/js/operators/boolean.md"}}}]);