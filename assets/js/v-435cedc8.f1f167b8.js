"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2412],{93505:(n,e,a)=>{a.r(e),a.d(e,{default:()=>F});var s=a(99170);const t=(0,s._)("p",null,"在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。",-1),o=(0,s._)("p",null,"如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。",-1),i=(0,s.Uk)("如果您正在使用 Windows，请参考 "),l=(0,s.Uk)("安装 Python"),p=(0,s.Uk)(" 一节的内容，确保安装时勾选了 "),r=(0,s._)("code",null,"pip",-1),c=(0,s.Uk)(" 和 "),d=(0,s._)("code",null,"Add python.exe to Path",-1),u=(0,s.Uk)("。"),m=(0,s._)("p",null,"在命令提示符窗口下尝试运行 pip，如果 Windows 提示未找到命令，可以重新运行安装程序添加 pip。",-1),h=(0,s._)("div",{class:"custom-container warning"},[(0,s._)("p",{class:"custom-container-title"},"注意"),(0,s._)("p",null,"Mac 或 Linux 上有可能并存 Python 3.x 和 Python 2.x，因此对应的 pip 命令是 pip3。")],-1),g=(0,s._)("p",null,"例如，我们要安装一个第三方库——Python Imaging Library，这是 Python 下非常强大的处理图像的工具库。不过，PIL 目前只支持到 Python 2.7，并且有年头没有更新了，因此，基于 PIL 的 Pillow 项目开发非常活跃，并且支持最新的 Python 3。",-1),v=(0,s.Uk)("一般来说，第三方库都会在 Python 官方的 <pypi.python.org> 网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者 pypi 上搜索，比如 Pillow 的名称叫 "),y={href:"https://pypi.python.org/pypi/Pillow/",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("Pillow"),b=(0,s.Uk)("，因此，安装 Pillow 的命令就是:"),P=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> Pillow\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>耐心等待下载并安装后，就可以使用 Pillow 了。</p><h2 id="安装常用模块" tabindex="-1"><a class="header-anchor" href="#安装常用模块" aria-hidden="true">#</a> 安装常用模块</h2>',3),w=(0,s.Uk)("在使用 Python 时，我们经常需要用到很多第三方库，例如，上面提到的 Pillow，以及 MySQL 驱动程序，Web 框架 Flask，科学计算 Numpy 等。用 pip 一个一个安装费时费力，还需要考虑兼容性。我们推荐直接使用 "),_={href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("Anaconda"),x=(0,s.Uk)("，这是一个基于 Python 的数据处理和科学计算平台，它已经内置了许多非常有用的第三方库，我们装上 Anaconda，就相当于把数十个第三方模块自动安装好了，非常简单易用。"),U=(0,s.Uk)("可以从 "),A={href:"https://www.anaconda.com/download/",target:"_blank",rel:"noopener noreferrer"},L=(0,s.Uk)("Anaconda 官网"),T=(0,s.Uk)(" 下载 GUI 安装包，安装包有 500~600M，所以需要耐心等待下载。下载后直接安装，Anaconda 会把系统 Path 中的 python 指向自己自带的 Python，并且，Anaconda 安装的第三方模块会安装在 Anaconda 自己的路径下，不影响系统已安装的 Python 目录。"),W=(0,s.uE)('<p>安装好 Anaconda 后，重新打开命令行窗口，输入 python，可以看到 Anaconda 的信息:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐\n│Command Prompt - python                           - □ x │\n├────────────────────────────────────────────────────────┤\n│Microsoft Windows [Version 10.0.0]                      │\n│(c) 2015 Microsoft Corporation. All rights reserved.    │\n│                                                        │\n│C:\\&gt; python                                             │\n│Python 3.9.2 |Anaconda, Inc.| ... on win32              │\n│Type &quot;help&quot;, ... for more information.                  │\n│&gt;&gt;&gt; import numpy                                        │\n│&gt;&gt;&gt; _                                                   │\n│                                                        │\n│                                                        │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试直接 <code>import numpy</code> 等已安装的第三方模块。</p><h2 id="模块搜索路径" tabindex="-1"><a class="header-anchor" href="#模块搜索路径" aria-hidden="true">#</a> 模块搜索路径</h2><p>当我们试图加载一个模块时，Python 会在指定的路径下搜索对应的.py 文件，如果找不到，就会报错:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> mymodule\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nImportError: No module named mymodule\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，Python 解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在 sys 模块的 path 变量中:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> sys\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sys.path\n<span class="token punctuation">[</span><span class="token string">&#39;&#39;</span>, <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.9/lib/python36.zip&#39;</span>, <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9&#39;</span>, <span class="token punctuation">..</span>., <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages&#39;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要添加自己的搜索目录，有两种方法:</p><p>一是直接修改 <code>sys.path</code>，添加要搜索的目录:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> sys\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sys.path.append<span class="token punctuation">(</span><span class="token string">&#39;/Users/michael/my_py_scripts&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法是在运行时修改，运行结束后失效。</p>',12),M=(0,s.Uk)("第二种方法是设置环境变量 "),C=(0,s._)("code",null,"PYTHONPATH",-1),I=(0,s.Uk)("，该环境变量的内容会被自动添加到模块搜索路径中。设置方式与 "),H=(0,s.Uk)("设置 Path 环境变量"),Z=(0,s.Uk)(" 类似。注意只需要添加您自己的搜索路径，Python 自己本身的搜索路径不受影响。"),z={},F=(0,a(78732).Z)(z,[["render",function(n,e){const a=(0,s.up)("RouterLink"),z=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,o,(0,s._)("p",null,[i,(0,s.Wm)(a,{to:"/code/language/python/intro/install.html"},{default:(0,s.w5)((()=>[l])),_:1}),p,r,c,d,u]),m,h,g,(0,s._)("p",null,[v,(0,s._)("a",y,[k,(0,s.Wm)(z)]),b]),P,(0,s._)("p",null,[w,(0,s._)("a",_,[f,(0,s.Wm)(z)]),x]),(0,s._)("p",null,[U,(0,s._)("a",A,[L,(0,s.Wm)(z)]),T]),W,(0,s._)("p",null,[M,C,I,(0,s.Wm)(a,{to:"/code/windows/add-path.html"},{default:(0,s.w5)((()=>[H])),_:1}),Z])],64)}]])},78732:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},95238:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-435cedc8",path:"/code/language/python/module/install.html",title:"安装第三方模块",lang:"zh-CN",frontmatter:{title:"安装第三方模块",icon:"install",author:"廖雪峰",date:"2021-03-27T00:00:00.000Z",category:["Python"],summary:"在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。 如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。 如果您正在使用 Windows，请参考 安装 Python 一节的内容，确保安装时勾选了 pip 和 Add python.exe to Path。 在命令提示符窗口下尝试运行 pip，如果 Window",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/python/module/install.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"安装第三方模块"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:published_time",content:"2021-03-27T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"安装常用模块",slug:"安装常用模块",children:[]},{level:2,title:"模块搜索路径",slug:"模块搜索路径",children:[]}],git:{createdTime:1616944982e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2},{name:"Mister-Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:3.05,words:914},filePathRelative:"code/language/python/module/install.md"}}}]);