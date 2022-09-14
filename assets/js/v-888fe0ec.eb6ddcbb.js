"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[77829],{6148:(a,n,s)=>{s.r(n),s.d(n,{default:()=>c});var t=s(79389);const p=(0,t._)("p",null,"无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。",-1),e=(0,t._)("p",null,"路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。",-1),l=(0,t.uE)('<h2 id="物理路径" tabindex="-1"><a class="header-anchor" href="#物理路径" aria-hidden="true">#</a> 物理路径</h2><p>物理路径的英文全称是: Physical path，它就是指硬盘上文件的路径，比如下面的文件位置表示方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>d:\\wwwroot\\html\\a.html\nd:\\wwwroot\\html\\photo\\b.html\nd:\\wwwroot\\html\\photo\\c.html\nd:\\wwwroot\\html\\photo\\ours\\d.html\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>D:</code> 与 <code>d:</code> 均可。盘符不分大小写。</p></blockquote><p>一般来说物理路径可用于访问本地文件，即不通过 WEB 服务器(如: 本地调试)等的情况下。</p><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h2><p>相对路径的英文全称是 Relative Path，我们可以从以下三个方面来了解它的用法 (以“物理路径”中的位置情况为例):</p><ul><li><p>如何表示同级目录的文件</p><p>b.html 和 c.html 在同一个文件夹下，如果 b.html 需要链接到 c.html，可以在 b.html 中这样写:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同目录下文件间互相链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码中的 <code>./</code> 代表同级目录。</p><p><code>./</code>是相对路径，也可以省略不写，省略不写，即直接以文件夹或文件名称开头的路径也是相对路径。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>同目录下文件间互相链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何表示上级目录的文件</p><p>a.html 是 b.html 和 c.html 的上级目录中的文件，如果 b.html 或 c.html 链接到 a.html，可以在 b.html 或 c.html 中这样写:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到上级目录中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码中的 <code>../</code> 代表一级上级目录(间隔一个目录)。</p><p>需要注意的是: “<code>../../</code>”代表二级上级目录(间隔两个目录)，比如 a.html 是 d.html 的前两级目录，同时 d.html 需要链接到 a.html，可以在 d.html 中这样写:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到上级目录的上级目录中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何表示子目录的文件</p><p>b.html 和 c.html 是 a.html 的子目录中的文件，如果需要在 a.html 中链接到 b.html， 可以在 a.html 中这样写:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到子目录(photo)中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n如果需要在a.html中链接到d.html，可以在a.html中这样写\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到子目录(photo/ourd/)中的文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径" aria-hidden="true">#</a> 绝对路径</h2><p>绝对路径的英文全称是 Absolute Path，它就是带有网址的路径。比如您有一个域名 www.deerol.com，其域名指向 d:\\wwwroot，那么上面的四个文件就可以这么表示:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到a.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到b.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到c.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.deerol.com/html/photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到d.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根目录" tabindex="-1"><a class="header-anchor" href="#根目录" aria-hidden="true">#</a> 根目录</h2><p>根目录的英文全称是 Root directory，去掉绝对路径前面的域名就是根目录，所以它可以理解为是网站的最上层目录。它的表示方法如下:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/a.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到a.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/b.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到b.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/c.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到c.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/html/photo/ours/d.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链接到d.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器上，根目录即代表网站主页所在的目录。网站服务器一般只能访问网站主页所在文件夹内的文件与文件夹。</p>',15),o={},c=(0,s(61935).Z)(o,[["render",function(a,n){return(0,t.wg)(),(0,t.iD)("div",null,[p,e,(0,t.kq)(" more "),l])}]])},61935:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}},51671:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-888fe0ec","path":"/code/basic/path.html","title":"路径","lang":"zh-CN","frontmatter":{"title":"路径","icon":"navigation","date":"2019-09-20T00:00:00.000Z","category":["基础"],"summary":"无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。\\n路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/basic/path.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"路径"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。</p>\\n<p>路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。</p>\\n","headers":[{"level":2,"title":"物理路径","slug":"物理路径","link":"#物理路径","children":[]},{"level":2,"title":"相对路径","slug":"相对路径","link":"#相对路径","children":[]},{"level":2,"title":"绝对路径","slug":"绝对路径","link":"#绝对路径","children":[]},{"level":2,"title":"根目录","slug":"根目录","link":"#根目录","children":[]}],"git":{"createdTime":1604856355000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6}]},"readingTime":{"minutes":2.98,"words":895},"filePathRelative":"code/basic/path.md","localizedDate":"2019年9月20日"}')}}]);