"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[28712],{76016:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var o=n(79389);const h=(0,o._)("p",null,[(0,o.Uk)("当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以 "),(0,o._)("code",null,".py"),(0,o.Uk)(" 为扩展名的文本文件。要运行代码，就需要 Python 解释器去执行 "),(0,o._)("code",null,".py"),(0,o.Uk)(" 文件。")],-1),r=(0,o.uE)('<p>由于整个 Python 语言从规范到解释器都是开源的，所以理论上，只要水平够高，任何人都可以编写 Python 解释器来执行 Python 代码(当然难度很大)。事实上，确实存在多种 Python 解释器。</p><h2 id="cpython" tabindex="-1"><a class="header-anchor" href="#cpython" aria-hidden="true">#</a> CPython</h2><p>当我们从 Python 官方网站下载并安装好 Python 3.x 后，我们就直接获得了一个官方版本的解释器:CPython。这个解释器是用 C 语言开发的，所以叫 CPython。在命令行下运行 python 就是启动 CPython 解释器。</p><p>CPython 是使用最广的 Python 解释器。教程的所有代码也都在 CPython 下执行。</p><h2 id="ipython" tabindex="-1"><a class="header-anchor" href="#ipython" aria-hidden="true">#</a> IPython</h2><p>IPython 是基于 CPython 之上的一个交互式解释器，也就是说，IPython 只是在交互方式上有所增强，但是执行 Python 代码的功能和 CPython 是完全一样的。好比很多国产浏览器虽然外观不同，但内核其实都是调用了辣鸡 IE。</p><p>CPython 用 <code>&gt;&gt;&gt;</code> 作为提示符，而 IPython 用 <code>In [序号]:</code> 作为提示符。</p><h2 id="pypy" tabindex="-1"><a class="header-anchor" href="#pypy" aria-hidden="true">#</a> PyPy</h2>',8),y=(0,o.Uk)("PyPy 是另一个 Python 解释器，它的目标是执行速度。PyPy 采用 "),a={href:"https://zh.wikipedia.org/wiki/Just-in-time_compilation",target:"_blank",rel:"noopener noreferrer"},i=(0,o.Uk)("JIT"),p=(0,o.Uk)(" 技术，对 Python 代码进行动态编译(注意不是解释)，所以可以显著提高 Python 代码的执行速度。"),l=(0,o.Uk)("绝大部分 Python 代码都可以在 PyPy 下运行，但是 PyPy 和 CPython 有一些是不同的，这就导致相同的 Python 代码在两种解释器下执行可能会有不同的结果。如果您的代码要放到 PyPy 下执行，就需要了解 "),c={href:"https://doc.pypy.org/en/latest/cpython_differences.html",target:"_blank",rel:"noopener noreferrer"},P=(0,o.Uk)("PyPy 和 CPython 的不同点"),d=(0,o.Uk)("。"),s=(0,o.uE)('<h2 id="jython" tabindex="-1"><a class="header-anchor" href="#jython" aria-hidden="true">#</a> Jython</h2><p>Jython 是运行在 Java 平台上的 Python 解释器，可以直接把 Python 代码编译成 Java 字节码执行。</p><h2 id="ironpython" tabindex="-1"><a class="header-anchor" href="#ironpython" aria-hidden="true">#</a> IronPython</h2><p>IronPython 和 Jython 类似，只不过 IronPython 是运行在微软.Net 平台上的 Python 解释器，可以直接把 Python 代码编译成.Net 的字节码。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Python 的解释器很多，但使用最广泛的还是 CPython。如果要和 Java 或.Net 平台交互，最好的办法不是用 Jython 或 IronPython，而是通过网络调用来交互，确保各程序之间的独立性。</p><p>本教程的所有代码只确保在 CPython 3.x 版本下运行。请务必在本地安装 CPython(也就是从 Python 官方网站下载的安装程序)。</p>',7),m={},u=(0,n(61935).Z)(m,[["render",function(t,e){const n=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[h,(0,o.kq)(" more "),r,(0,o._)("p",null,[y,(0,o._)("a",a,[i,(0,o.Wm)(n)]),p]),(0,o._)("p",null,[l,(0,o._)("a",c,[P,(0,o.Wm)(n)]),d]),s])}]])},61935:(t,e)=>{e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,o]of e)n[t]=o;return n}},1241:(t,e,n)=>{n.r(e),n.d(e,{data:()=>o});const o=JSON.parse('{"key":"v-4a2b6072","path":"/code/language/python/intro/interpreter.html","title":"Python 解释器","lang":"zh-CN","frontmatter":{"title":"Python 解释器","icon":"back-stage","author":"廖雪峰","date":"2020-05-19T00:00:00.000Z","category":["Python"],"summary":"当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以 .py 为扩展名的文本文件。要运行代码，就需要 Python 解释器去执行 .py 文件。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/intro/interpreter.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Python 解释器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以 <code v-pre>.py</code> 为扩展名的文本文件。要运行代码，就需要 Python 解释器去执行 <code v-pre>.py</code> 文件。</p>\\n","headers":[{"level":2,"title":"CPython","slug":"cpython","link":"#cpython","children":[]},{"level":2,"title":"IPython","slug":"ipython","link":"#ipython","children":[]},{"level":2,"title":"PyPy","slug":"pypy","link":"#pypy","children":[]},{"level":2,"title":"Jython","slug":"jython","link":"#jython","children":[]},{"level":2,"title":"IronPython","slug":"ironpython","link":"#ironpython","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1615876798000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.2,"words":660},"filePathRelative":"code/language/python/intro/interpreter.md","localizedDate":"2020年5月19日"}')}}]);