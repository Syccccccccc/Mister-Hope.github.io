"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22507],{65013:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var p=a(34086);const t=(0,p._)("p",null,"如果给定一个 list 或 tuple，我们可以通过 for 循环来遍历这个 list 或 tuple，这种遍历我们称为迭代(Iteration)。",-1),e=(0,p.uE)('<p>在 Python 中，迭代是通过 <code>for ... in</code> 来完成的，而很多语言比如 C 语言，迭代 list 是通过下标完成的，比如 Java 代码:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    n <span class="token operator">=</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以看出，Python 的 for 循环抽象程度要高于 C 的 for 循环，因为 Python 的 for 循环不仅可以用在 list 或 tuple 上，还可以作用在其他可迭代对象上。</p><p>list 这种数据类型虽然有下标，但很多其他数据类型是没有下标的，但是，只要是可迭代对象，无论有无下标，都可以迭代，比如 dict 就可以迭代:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> key <span class="token keyword">in</span> d<span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\na\nc\nb\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>因为 dict 的存储不是按照 list 的方式顺序排列，所以，迭代出的结果顺序很可能不一样。</p><p>默认情况下，dict 迭代的是 key。如果要迭代 value，可以用 <code>for value in d.values()</code>，如果要同时迭代 key 和 value，可以用 for k, v in d.items()。</p><p>由于字符串也是可迭代对象，因此，也可以作用于 for 循环:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> ch <span class="token keyword">in</span> <span class="token string">&#39;ABC&#39;</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nA\nB\nC\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>所以，当我们使用 for 循环时，只要作用于一个可迭代对象，for 循环就可以正常运行，而我们不太关心该对象究竟是 list 还是其他数据类型。</p><p>那么，如何判断一个对象是可迭代对象呢? 方法是通过 collections 模块的 Iterable 类型判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections <span class="token keyword">import</span> Iterable\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span> <span class="token comment"># str是否可迭代</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span> <span class="token comment"># list是否可迭代</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span> <span class="token comment"># 整数是否可迭代</span>\n<span class="token boolean">False</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>最后一个小问题，如果要对 list 实现类似 Java 那样的下标循环怎么办? Python 内置的 <code>enumerate</code> 函数可以把一个 list 变成索引-元素对，这样就可以在 for 循环中同时迭代索引和元素本身:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> i<span class="token punctuation">,</span> value <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token number">0</span> A\n<span class="token number">1</span> B\n<span class="token number">2</span> C\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面的 for 循环里，同时引用了两个变量，在 Python 里是很常见的，比如下面的代码:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> x<span class="token punctuation">,</span> y <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token number">1</span> <span class="token number">1</span>\n<span class="token number">2</span> <span class="token number">4</span>\n<span class="token number">3</span> <span class="token number">9</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>任何可迭代对象都可以作用于 for 循环，包括我们自定义的数据类型，只要符合迭代条件，就可以使用 for 循环。</p>',18),o={},c=(0,a(82831).Z)(o,[["render",function(n,s){return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p.kq)(" more "),e],64)}]])},82831:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},98102:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5fe8612e",path:"/code/language/python/advance/iteration.html",title:"迭代",lang:"zh-CN",frontmatter:{title:"迭代",icon:"refresh",author:"廖雪峰",date:"2020-05-28T00:00:00.000Z",category:["Python"],summary:"如果给定一个 list 或 tuple，我们可以通过 for 循环来遍历这个 list 或 tuple，这种遍历我们称为迭代(Iteration)。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/python/advance/iteration.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"迭代"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:published_time",content:"2020-05-28T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>如果给定一个 list 或 tuple，我们可以通过 for 循环来遍历这个 list 或 tuple，这种遍历我们称为迭代(Iteration)。</p>\n",headers:[{level:2,title:"小结",slug:"小结",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4},{name:"Mister-Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.14,words:642},filePathRelative:"code/language/python/advance/iteration.md"}}}]);