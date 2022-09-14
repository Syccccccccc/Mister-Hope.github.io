"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[24961],{80686:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(79389);const i=(0,o._)("p",null,[(0,o.Uk)("在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个 "),(0,o._)("code",null,".py"),(0,o.Uk)(" 文件就称之为一个模块 (Module) 。")],-1),l=(0,o._)("h2",{id:"优点",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#优点","aria-hidden":"true"},"#"),(0,o.Uk)(" 优点")],-1),d=(0,o._)("ol",null,[(0,o._)("li",null,[(0,o._)("p",null,"使用模块大大提高了代码的可维护性。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Python 内置的模块和来自第三方的模块。")]),(0,o._)("li",null,[(0,o._)("p",null,"使用模块可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。但是也要注意，尽量不要与内置函数名字冲突。")])],-1),a={class:"custom-container info"},c=(0,o._)("p",{class:"custom-container-title"},"相关信息",-1),r={href:"http://docs.python.org/3/library/functions.html",target:"_blank",rel:"noopener noreferrer"},p=(0,o.Uk)("Python 的所有内置函数"),s=(0,o.uE)('<h2 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h2><p>为了避免模块名冲突，Python 引入了按目录来组织模块的方法，称为包 (Package) 。</p><p>举个例子，一个 <code>abc.py</code> 的文件就是一个名字叫 abc 的模块，一个 <code>xyz.py</code> 的文件就是一个名字叫 xyz 的模块。</p><p>现在，假设我们的 abc 和 xyz 这两个模块名字与其他模块冲突了，于是我们可以通过包来组织模块，避免冲突。方法是选择一个顶层包名，比如 hopestudio，按照如下目录存放:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hopestudio\n├─ __init__.py\n├─ abc.py\n└─ xyz.py\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入了包以后，只要顶层的包名不与别人冲突，那所有模块都不会与别人冲突。现在，<code>abc.py</code> 模块的名字就变成了 <code>hopestudio.abc</code>，类似的，<code>xyz.py</code> 的模块名变成了 <code>hopestudio.xyz</code>。</p><p>请注意，每一个包目录下面都会有一个 <code>__init__.py</code> 的文件，这个文件是必须存在的，否则，Python 就把这个目录当成普通目录，而不是一个包。<code>__init__.py</code>可以是空文件，也可以有 Python 代码，因为 <code>__init__.py</code> 本身就是一个模块，而它的模块名就是 hopestudio。</p><p>类似的，可以有多级目录，组成多级层次的包结构。比如如下的目录结构:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hopestudio\n ├─ web\n │  ├─ __init__.py\n │  ├─ utils.py\n │  └─ www.py\n ├─ __init__.py\n ├─ abc.py\n └─ utils.py\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件 <code>www.py</code> 的模块名就是 <code>hopestudio.web.www</code>，两个文件 <code>utils.py</code> 的模块名分别是 <code>hopestudio.utils</code> 和 <code>hopestudio.web.utils</code>。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>自己创建模块时要注意命名，不能和 Python 自带的模块名称冲突。例如，系统自带了 sys 模块，自己的模块就不可命名为 <code>sys.py</code>，否则将无法导入系统自带的 sys 模块。</p></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><p>模块是一组 Python 代码的集合，可以使用其他模块，也可以被其他模块使用。</p></li><li><p>创建自己的模块时，要注意:</p><ol><li>模块名要遵循 Python 变量命名规范，不要使用中文、特殊字符；</li><li>模块名不要和系统模块名冲突，最好先查看系统是否已存在该模块，检查方法是在 Python 交互环境执行 <code>import abc</code>，若成功则说明系统存在此模块。</li></ol></li></ul>',13),u={},h=(0,n(61935).Z)(u,[["render",function(e,t){const n=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[i,(0,o.kq)(" more "),l,d,(0,o._)("div",a,[c,(0,o._)("p",null,[(0,o._)("a",r,[p,(0,o.Wm)(n)])])]),s])}]])},61935:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},32554:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-fddb6b2a","path":"/code/language/python/module/intro.html","title":"模块","lang":"zh-CN","frontmatter":{"title":"模块","icon":"info","author":"廖雪峰","date":"2021-03-27T00:00:00.000Z","category":["Python"],"summary":"在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个 .py 文件就称之为一个模块 (Module) 。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/module/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个 <code v-pre>.py</code> 文件就称之为一个模块 (Module) 。</p>\\n","headers":[{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"包","slug":"包","link":"#包","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1616944982000,"updatedTime":1644166018000,"contributors":[{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.8,"words":841},"filePathRelative":"code/language/python/module/intro.md","localizedDate":"2021年3月27日"}')}}]);