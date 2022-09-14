"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[41255],{92126:(e,n,s)=>{s.r(n),s.d(n,{default:()=>m});var t=s(79389);const a=(0,t._)("p",null,"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。",-1),r=(0,t.uE)('<h2 id="什么是类型推论" tabindex="-1"><a class="header-anchor" href="#什么是类型推论" aria-hidden="true">#</a> 什么是类型推论</h2><p>以下代码虽然没有指定类型，但是会在编译的时候报错:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，它等价于:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p><p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',9),p={href:"http://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("Type Inference"),i=(0,t.Uk)("("),c={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("中文版"),d=(0,t.Uk)(")"),u={},m=(0,s(61935).Z)(u,[["render",function(e,n){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[a,(0,t.kq)(" more "),r,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",p,[o,(0,t.Wm)(s)]),i,(0,t._)("a",c,[l,(0,t.Wm)(s)]),d])])])}]])},61935:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,t]of n)s[e]=t;return s}},71558:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-697acf65","path":"/code/language/typescript/basics/type-inference.html","title":"类型推论","lang":"zh-CN","frontmatter":{"title":"类型推论","icon":"extend","category":["TypeScript"],"summary":"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/typescript/basics/type-inference.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"类型推论"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2020-06-03T17:08:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2020-06-03T17:08:34.000Z"}]]},"excerpt":"<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。</p>\\n","headers":[{"level":2,"title":"什么是类型推论","slug":"什么是类型推论","link":"#什么是类型推论","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1591204114000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"code/language/typescript/basics/type-inference.md","localizedDate":"2020年6月3日"}')}}]);