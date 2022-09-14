"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[92184],{93321:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var o=n(79389);const a=n.p+"assets/img/cmd.50f44a3c.png",h=[(0,o.uE)('<p>要开始学习 Python 编程，首先就得把 Python 安装到您的电脑里。安装后，您会得到 Python 解释器(就是负责运行 Python 程序的)，一个命令行交互环境，还有一个简单的集成开发环境。本节将指导您如何安装 Python。</p><h2 id="在-mac-上安装-python" tabindex="-1"><a class="header-anchor" href="#在-mac-上安装-python" aria-hidden="true">#</a> 在 Mac 上安装 Python</h2><p>如果您正在使用 Mac，系统是 OS X&gt;=10.9，那么系统自带的 Python 版本是 2.7。要安装最新的 Python 3.9，有两个方法:</p><p>方法一:从 Python 官网下载 Python 3.9 的安装程序，下载后双击运行并安装；</p><p>方法二:如果安装了 Homebrew，直接通过命令 brew install python3 安装即可。</p><h2 id="在-linux-上安装-python" tabindex="-1"><a class="header-anchor" href="#在-linux-上安装-python" aria-hidden="true">#</a> 在 Linux 上安装 Python</h2><p>用 Linux 的人自行安装 Python 3 应该没有问题，否则，请换回 Windows 系统。</p><h2 id="在-windows-上安装-python" tabindex="-1"><a class="header-anchor" href="#在-windows-上安装-python" aria-hidden="true">#</a> 在 Windows 上安装 Python</h2><p>首先，从 Python 的官方网站下载 Python 3.9 对应的 64 位安装程序，然后，运行下载的 exe 安装包。</p><blockquote><p>这年头应该没人用 32 位的系统了吧 😏</p></blockquote><p>特别要注意勾上 <code>Add Python 3.9 to PATH</code>，然后点 “Install Now” 即可完成安装。</p><h2 id="运行-python" tabindex="-1"><a class="header-anchor" href="#运行-python" aria-hidden="true">#</a> 运行 Python</h2><p>安装成功后，打开命令提示符窗口，敲入 <code>python</code> 后，会出现两种情况:</p><p>情况一:</p><p><img src="'+a+'" alt="示意图"></p><p>看到上面的画面，就说明 Python 安装成功!</p><p>您看到提示符 <code>&gt;&gt;&gt;</code> 就表示我们已经在 Python 交互式环境中了，可以输入任何 Python 代码，回车后会立刻得到执行结果。现在，输入 <code>exit()</code> 并回车，就可以退出 Python 交互式环境(直接关掉命令行窗口也可以)。</p><p>情况二:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;python&#39;</span> is not recognized as an internal or external command, operable program or batch file.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是因为 Windows 会根据一个 Path 的环境变量设定的路径去查找 python.exe，如果没找到，就会报错。如果在安装时漏掉了勾选 &quot;Add Python 3.9 to PATH&quot;，那就要手动把 python.exe 所在的路径添加到 Path 中。</p><p>如果您不知道怎么修改环境变量，建议把 Python 安装程序重新运行一遍，务必记得勾上 &quot;Add Python 3.9 to PATH&quot;。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>需要注意的是:</p><ul><li><p>在 Windows 上运行 Python 时，请先启动命令行，然后运行 <code>python</code>。</p></li><li><p>在 Mac 和 Linux 上运行 Python 时，请打开终端，然后运行 <code>python3</code>。</p></li></ul></div>',22)],i={},p=(0,n(61935).Z)(i,[["render",function(t,e){return(0,o.wg)(),(0,o.iD)("div",null,h)}]])},61935:(t,e)=>{e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,o]of e)n[t]=o;return n}},38134:(t,e,n)=>{n.r(e),n.d(e,{data:()=>o});const o=JSON.parse('{"key":"v-2446fd74","path":"/code/language/python/intro/install.html","title":"安装 Python","lang":"zh-CN","frontmatter":{"title":"安装 Python","icon":"install","author":"廖雪峰","date":"2020-05-18T00:00:00.000Z","category":["Python"],"tag":["安装"],"summary":"要开始学习 Python 编程，首先就得把 Python 安装到您的电脑里。安装后，您会得到 Python 解释器(就是负责运行 Python 程序的)，一个命令行交互环境，还有一个简单的集成开发环境。本节将指导您如何安装 Python。 在 Mac 上安装 Python 如果您正在使用 Mac，系统是 OS X>=10.9，那么系统自带的 Python 版","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/intro/install.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"安装 Python"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:published_time","content":"2020-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"在 Mac 上安装 Python","slug":"在-mac-上安装-python","link":"#在-mac-上安装-python","children":[]},{"level":2,"title":"在 Linux 上安装 Python","slug":"在-linux-上安装-python","link":"#在-linux-上安装-python","children":[]},{"level":2,"title":"在 Windows 上安装 Python","slug":"在-windows-上安装-python","link":"#在-windows-上安装-python","children":[]},{"level":2,"title":"运行 Python","slug":"运行-python","link":"#运行-python","children":[]}],"git":{"createdTime":1615876798000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"code/language/python/intro/install.md","localizedDate":"2020年5月18日"}')}}]);