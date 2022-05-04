"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[62906],{17594:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const l=(0,n(34086).uE)('<p>前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢?</p><p>简单来说，Linux 命令的执行过程分为如下 4 个步骤。</p><ol><li><p>判断路径</p><p>判断用户是否以绝对路径或相对路径的方式输入命令(如 <code>/bin/ls</code>)，如果是的话直接执行。</p></li><li><p>检查别名</p><p>Linux 系统会检查用户输入的命令是否为 “别名命令”。要知道，通过 alias 命令是可以给现有命令自定义别名的，即用一个自定义的命令名称来替换原本的命令名称。</p><p>例如，我们经常使用的 <code>rm</code> 命令，其实就是 <code>rm -i</code> 这个整体的别名:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code>[root@localhost ~]# alias rm\nalias rm=&#39;rm -i&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这使得当使用 rm 命令删除指定文件时，Linux 系统会要求我们再次确认是否执行删除操作。例如:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code>[root@localhost ~]# rm a.txt &lt;-- 假定当前目录中已经存在 a.txt 文件\nrm: remove regular file &#39;a.txt&#39;? y  &lt;-- 手动输入 y，即确定删除\n[root@localhost ~]#\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这里可以使用 <code>unalias</code> 命令，将 Linux 系统设置的 <code>rm</code> 别名删除掉，执行命令如下:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code>[root@localhost ~]# alias rm\nalias rm=&#39;rm -i&#39;\n[root@localhost ~]# unalias rm\n[root@localhost ~]# rm a.txt\n[root@localhost ~]#  &lt;--直接删除，不再询问\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>判断是内部命令还是外部命令</p><p>Linux 命令行解释器 (又称为 Shell) 会判断用户输入的命令是内部命令还是外部命令。其中，内部命令指的是解释器内部的命令，会被直接执行；而用户通常输入的命令都是外部命令，这些命令交给步骤四继续处理。 内部命令由 Shell 自带，会随着系统启动，可以直接从内存中读取；而外部命令仅是在系统中有对应的可执行文件，执行时需要读取该文件。</p><p>判断一个命令属于内部命令还是外部命令，可以使用 <code>type</code> 命令实现。例如:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code>[root@localhost ~]# type pwd\npwd is a shell builtin  &lt;-- pwd是内部命令\n[root@localhost ~]# type top\ntop is /usr/bin/top  &lt;-- top是外部命令\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>查找外部命令对应的可执行文件</p><p>当用户执行的是外部命令时，系统会在指定的多个路径中查找该命令的可执行文件，而定义这些路径的变量，就称为 PATH 环境变量，其作用就是告诉 Shell 待执行命令的可执行文件可能存放的位置，也就是说，Shell 会在 PATH 变量包含的多个路径中逐个查找，直到找到为止(如果找不到，Shell 会提供用户“找不到此命令”)。</p></li></ol>',3),a={},i=(0,n(82831).Z)(a,[["render",function(e,s){return l}]])},82831:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,l]of s)n[e]=l;return n}},35517:(e,s,n)=>{n.r(s),n.d(s,{data:()=>l});const l={key:"v-0859f348",path:"/linux/command/excu.html",title:"命令执行",lang:"zh-CN",frontmatter:{title:"命令执行",icon:"play",date:"2019-11-20T00:00:00.000Z",category:["Linux"],summary:"前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢? 简单来说，Linux 命令的执行过程分为如下 4 个步骤。 1. 判断路径 判断用户是否以绝对路径或相对路径的方式输入命令(如 /bin/ls)，如果是的话直接执行。 1. 检查别名 Linux 系统会检查用户",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/command/excu.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"命令执行"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-11-20T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:2.33,words:698},filePathRelative:"linux/command/excu.md"}}}]);