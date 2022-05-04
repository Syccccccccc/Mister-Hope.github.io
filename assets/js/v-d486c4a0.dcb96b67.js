"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[70503],{14756:(n,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s=(0,a(34086).uE)('<h1 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h1><p>JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。</p><p>ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。</p><h2 id="柯里化" tabindex="-1"><a class="header-anchor" href="#柯里化" aria-hidden="true">#</a> 柯里化</h2><p>柯里化(currying)指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数(unary)。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function add(a, b) {\n  return a + b;\n}\n\nadd(1, 1); // 2\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面代码中，函数 <code>add</code> 接受两个参数 <code>a</code> 和 <code>b</code>。</p><p>柯里化就是将上面的函数拆分成两个函数，每个函数都只接受一个参数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function add(a) {\n  return function (b) {\n    return a + b;\n  };\n}\n// 或者采用箭头函数写法\nconst add = (x) =&gt; (y) =&gt; x + y;\n\nconst f = add(1);\nf(1); // 2\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面代码中，函数 <code>add</code> 只接受一个参数 <code>a</code>，返回一个函数 <code>f</code>。函数 <code>f</code> 也只接受一个参数 <code>b</code>。</p><h2 id="函数合成" tabindex="-1"><a class="header-anchor" href="#函数合成" aria-hidden="true">#</a> 函数合成</h2><p>函数合成(function composition)指的是，将多个函数合成一个函数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const compose = (f) =&gt; (g) =&gt; (x) =&gt; f(g(x));\n\nconst f = compose((x) =&gt; x * 4)((x) =&gt; x + 3);\nf(2); // 20\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面代码中，<code>compose</code> 就是一个函数合成器，用于将两个函数合成一个函数。</p><p>可以发现，柯里化与函数合成有着密切的联系。前者用于将一个函数拆成多个函数，后者用于将多个函数合并成一个函数。</p><h2 id="参数倒置" tabindex="-1"><a class="header-anchor" href="#参数倒置" aria-hidden="true">#</a> 参数倒置</h2><p>参数倒置(flip)指的是改变函数前两个参数的顺序。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let divide = (a, b) =&gt; a / b;\nlet flip = f.flip(divide);\n\nflip(10, 5); // 0.5\nflip(1, 10); // 10\n\nlet three = (a, b, c) =&gt; [a, b, c];\nlet flip = f.flip(three);\nflip(1, 2, 3); // =&gt; [2, 1, 3]\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面代码中，如果按照正常的参数顺序，10 除以 5 等于 2。但是，参数倒置以后得到的新函数，结果就是 5 除以 10，结果得到 0.5。如果原函数有 3 个参数，则只颠倒前两个参数的位置。</p><p>参数倒置的代码非常简单。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let f = {};\nf.flip =\n  (fn) =&gt;\n  (a, b, ...args) =&gt;\n    fn(b, a, ...args.reverse());\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="执行边界" tabindex="-1"><a class="header-anchor" href="#执行边界" aria-hidden="true">#</a> 执行边界</h2><p>执行边界(until)指的是函数执行到满足条件为止。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let condition = (x) =&gt; x &gt; 100;\nlet inc = (x) =&gt; x + 1;\nlet until = f.until(condition, inc);\n\nuntil(0); // 101\n\ncondition = (x) =&gt; x === 5;\nuntil = f.until(condition, inc);\n\nuntil(3); // 5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面代码中，第一段的条件是执行到 <code>x</code> 大于 100 为止，所以 <code>x</code> 初值为 0 时，会一直执行到 101。第二段的条件是执行到等于 5 为止，所以 <code>x</code> 最后的值是 5。</p><p>执行边界的实现如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let f = {};\nf.until =\n  (condition, f) =&gt;\n  (...args) =&gt; {\n    let r = f.apply(null, args);\n    return condition(r) ? r : f.until(condition, f)(r);\n  };\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码的关键就是，如果满足条件就返回结果，否则不断递归执行。</p><h2 id="队列操作" tabindex="-1"><a class="header-anchor" href="#队列操作" aria-hidden="true">#</a> 队列操作</h2><p>队列(list)操作包括以下几种。</p><ul><li><code>head</code>: 取出队列的第一个非空成员。</li><li><code>last</code>: 取出有限队列的最后一个非空成员。</li><li><code>tail</code>: 取出除了“队列头”以外的其他非空成员。</li><li><code>init</code>: 取出除了“队列尾”以外的其他非空成员。</li></ul><p>下面是例子。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>f.head(5, 27, 3, 1); // 5\nf.last(5, 27, 3, 1); // 1\nf.tail(5, 27, 3, 1); // [27, 3, 1]\nf.init(5, 27, 3, 1); // [5, 27, 3]\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这些方法的实现如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let f = {};\nf.head = (...xs) =&gt; xs[0];\nf.last = (...xs) =&gt; xs.slice(-1);\nf.tail = (...xs) =&gt; Array.prototype.slice.call(xs, 1);\nf.init = (...xs) =&gt; xs.slice(0, -1);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="合并操作" tabindex="-1"><a class="header-anchor" href="#合并操作" aria-hidden="true">#</a> 合并操作</h2><p>合并操作分为 <code>concat</code> 和 <code>concatMap</code> 两种。前者就是将多个数组合成一个，后者则是先处理一下参数，然后再将处理结果合成一个数组。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>f.concat([5], [27], [3]); // [5, 27, 3]\nf.concatMap((x) =&gt; &quot;hi &quot; + x, 1, [[2]], 3); // [&#39;hi 1&#39;, &#39;hi 2&#39;, &#39;hi 3&#39;]\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这两种方法的实现代码如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let f = {};\nf.concat = (...xs) =&gt; xs.reduce((a, b) =&gt; a.concat(b));\nf.concatMap = (f, ...xs) =&gt; f.concat(xs.map(f));\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="配对操作" tabindex="-1"><a class="header-anchor" href="#配对操作" aria-hidden="true">#</a> 配对操作</h2><p>配对操作分为 <code>zip</code> 和 <code>zipWith</code> 两种方法。<code>zip</code> 操作将两个队列的成员，一一配对，合成一个新的队列。如果两个队列不等长，较长的那个队列多出来的成员，会被忽略。<code>zipWith</code> 操作的第一个参数是一个函数，然后会将后面的队列成员一一配对，输入该函数，返回值就组成一个新的队列。</p><p>下面是例子。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let a = [0, 1, 2];\nlet b = [3, 4, 5];\nlet c = [6, 7, 8];\n\nf.zip(a, b); // [[0, 3], [1, 4], [2, 5]]\nf.zipWith((a, b) =&gt; a + b, a, b, c); // [9, 12, 15]\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面代码中，<code>zipWith</code> 方法的第一个参数是一个求和函数，它将后面三个队列的成员，一一配对进行相加。</p><p>这两个方法的实现如下。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let f = {};\n\nf.zip = (...xs) =&gt; {\n  let r = [];\n  let nple = [];\n  let length = Math.min.apply(\n    null,\n    xs.map((x) =&gt; x.length)\n  );\n\n  for (let i = 0; i &lt; length; i++) {\n    xs.forEach((x) =&gt; nple.push(x[i]));\n\n    r.push(nple);\n    nple = [];\n  }\n\n  return r;\n};\n\nf.zipWith = (op, ...xs) =&gt; f.zip.apply(null, xs).map((x) =&gt; x.reduce(op));\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',47),r={},l=(0,a(82831).Z)(r,[["render",function(n,e){return s}]])},82831:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},4661:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-d486c4a0",path:"/code/language/js/es6/fp.html",title:"函数式编程",lang:"zh-CN",frontmatter:{icon:"shell",author:"阮一峰",date:"2019-10-21T00:00:00.000Z",category:["JavaScript"],copyright:'此部分博客采用 <a href="http://creativecommons.org/licenses/by-nc/4.0/" rel="noopener noreferrer" target="_blank">“保持署名—非商用”创意共享4.0许可证</a>',summary:"函数式编程 JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。 ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/es6/fp.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"函数式编程"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"阮一峰"}],["meta",{property:"article:published_time",content:"2019-10-21T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:"",headers:[{level:2,title:"柯里化",slug:"柯里化",children:[]},{level:2,title:"函数合成",slug:"函数合成",children:[]},{level:2,title:"参数倒置",slug:"参数倒置",children:[]},{level:2,title:"执行边界",slug:"执行边界",children:[]},{level:2,title:"队列操作",slug:"队列操作",children:[]},{level:2,title:"合并操作",slug:"合并操作",children:[]},{level:2,title:"配对操作",slug:"配对操作",children:[]}],git:{createdTime:1591204114e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:4.21,words:1263},filePathRelative:"code/language/js/es6/fp.md"}}}]);