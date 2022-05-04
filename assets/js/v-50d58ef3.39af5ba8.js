"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1857],{93043:(e,a,n)=>{n.r(a),n.d(a,{default:()=>u});var s=n(34086);const t=(0,s._)("p",null,[(0,s.Uk)("在 JavaScript 中，"),(0,s._)("code",null,"Date"),(0,s.Uk)(" 对象用来表示日期和时间。")],-1),l=(0,s.uE)('<p>要获取系统当前时间，用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const now = new Date();\n\nnow; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)\nnow.getFullYear(); // 2015, 年份\nnow.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月\nnow.getDate(); // 24, 表示24号\nnow.getDay(); // 3, 表示星期三\nnow.getHours(); // 19, 24小时制\nnow.getMinutes(); // 49, 分钟\nnow.getSeconds(); // 22, 秒\nnow.getMilliseconds(); // 875, 毫秒数\nnow.getTime(); // 1435146562875, 以number形式表示的时间戳\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>注意，当前时间是浏览器从本机操作系统获取的时间，所以不一定准确，因为用户可以把当前时间设定为任何值。</p><p>如果要创建一个指定日期和时间的 <code>Date</code> 对象，可以用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const d = new Date(2015, 5, 19, 20, 15, 30, 123);\n\nd; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),r=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"提示"),(0,s._)("p",null,[(0,s.Uk)("您可能观察到了一个非常非常坑爹的地方，就是 JavaScript 的月份范围用整数表示是 "),(0,s._)("span",{class:"katex"},[(0,s._)("span",{class:"katex-mathml"},[(0,s._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,s._)("semantics",null,[(0,s._)("mrow",null,[(0,s._)("mn",null,"0"),(0,s._)("mo",null,"−"),(0,s._)("mn",null,"11")]),(0,s._)("annotation",{encoding:"application/x-tex"},"0 - 11")])])]),(0,s._)("span",{class:"katex-html","aria-hidden":"true"},[(0,s._)("span",{class:"base"},[(0,s._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,s._)("span",{class:"mord"},"0"),(0,s._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,s._)("span",{class:"mbin"},"−"),(0,s._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,s._)("span",{class:"base"},[(0,s._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,s._)("span",{class:"mord"},"11")])])]),(0,s.Uk)("，"),(0,s._)("code",null,"0"),(0,s.Uk)(" 表示一月，"),(0,s._)("code",null,"1"),(0,s.Uk)(" 表示二月…….")]),(0,s._)("p",null,[(0,s.Uk)("JavaScript 的 Date 对象月份值从 0 开始，牢记 "),(0,s._)("code",null,"0"),(0,s.Uk)(" = 1 月，"),(0,s._)("code",null,"1"),(0,s.Uk)(" = 2 月，"),(0,s._)("code",null,"2"),(0,s.Uk)(" = 3 月，……，"),(0,s._)("code",null,"11"),(0,s.Uk)(" = 12 月。")])],-1),c=(0,s.uE)('<p>第二种创建一个指定日期和时间的方法是解析一个符合 ISO 8601 格式的字符串:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const d = Date.parse(&quot;2015-06-24T19:49:22.875+08:00&quot;);\n\nd; // 1435146562875\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>但它返回的不是 <code>Date</code> 对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个 <code>Date</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const d = new Date(1435146562875);\n\nd; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)\nd.getMonth(); // 5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',4),p=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"提示"),(0,s._)("p",null,[(0,s.Uk)("使用 "),(0,s._)("code",null,"Date.parse()"),(0,s.Uk)(" 时传入的字符串使用实际月份 "),(0,s._)("code",null,"01~12"),(0,s.Uk)("，转换为 Date 对象后 "),(0,s._)("code",null,"getMonth()"),(0,s.Uk)(" 获取的月份值为 "),(0,s._)("span",{class:"katex"},[(0,s._)("span",{class:"katex-mathml"},[(0,s._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,s._)("semantics",null,[(0,s._)("mrow",null,[(0,s._)("mn",null,"0"),(0,s._)("mo",null,"−"),(0,s._)("mn",null,"11")]),(0,s._)("annotation",{encoding:"application/x-tex"},"0 - 11")])])]),(0,s._)("span",{class:"katex-html","aria-hidden":"true"},[(0,s._)("span",{class:"base"},[(0,s._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,s._)("span",{class:"mord"},"0"),(0,s._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,s._)("span",{class:"mbin"},"−"),(0,s._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,s._)("span",{class:"base"},[(0,s._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,s._)("span",{class:"mord"},"11")])])]),(0,s.Uk)("。")])],-1),i=(0,s.uE)('<h2 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h2><p>Date 对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的 UTC 时间:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const d = new Date(1435146562875);\n\nd.toLocaleString(); // &#39;2015/6/24 下午7:49:22&#39;，本地时间(北京时区+8:00)，显示的字符串与操作系统设定的格式有关\nd.toUTCString(); // &#39;Wed, 24 Jun 2015 11:49:22 GMT&#39;，UTC时间，与本地时间相差8小时\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>那么在 JavaScript 中如何进行时区转换呢? 实际上，只要我们传递的是一个 number 类型的时间戳，我们就不用关心时区转换。任何浏览器都可以把一个时间戳正确转换为本地时间。</p><p>时间戳是个什么东西? 时间戳是一个自增的整数，它表示从 1970 年 1 月 1 日 零时整的 GMT 时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准确的，那么世界上无论哪个时区的电脑，它们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确地表示一个时刻，并且与时区无关。</p><p>所以，我们只需要传递时间戳，或者把时间戳从数据库里读出来，再让 JavaScript 自动转换为当地时间就可以了。</p><p>要获取当前时间戳，可以用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;use strict&quot;;\n\nif (Date.now) console.log(Date.now());\n// 老版本 IE 没有 now() 方法\nelse console.log(new Date().getTime());\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',8),o={},u=(0,n(82831).Z)(o,[["render",function(e,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s.kq)(" more "),l,r,c,p,i],64)}]])},82831:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}},10698:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-50d58ef3",path:"/code/language/js/object/date.html",title:"Date",lang:"zh-CN",frontmatter:{title:"Date",icon:"date",date:"2019-10-11T00:00:00.000Z",category:["JavaScript"],summary:"在 JavaScript 中，Date 对象用来表示日期和时间。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/object/date.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"Date"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-10-11T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>在 JavaScript 中，<code v-pre>Date</code> 对象用来表示日期和时间。</p>\n",headers:[{level:2,title:"时区",slug:"时区",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:2.61,words:782},filePathRelative:"code/language/js/object/date.md"}}}]);