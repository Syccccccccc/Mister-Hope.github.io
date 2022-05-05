"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[28288],{69482:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});const n=(0,a(34086).uE)('<h1 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h1><p><code>export</code> 命令用于向子 Shell 输出变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">hotellogs</span><span class="token operator">=</span><span class="token string">&quot;/workspace/hotel-api/storage/logs&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后执行下面的命令，新建一个子 Shell。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span>\n<span class="token builtin class-name">cd</span> hotellogs\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面命令的执行结果会进入 <code>hotellogs</code> 变量指向的目录。</p><p><code>export</code> 命令还可以显示所有环境变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span>\n<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/zsh\n<span class="token assign-left variable">AWS_HOME</span><span class="token operator">=</span>/Users/adnanadnan/.aws\n<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8\n<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span>en_US.UTF-8\n<span class="token assign-left variable">LESS</span><span class="token operator">=</span>-R\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果想查看单个变量，使用 <code>echo $VARIABLE_NAME</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>\n/usr/bin/zsh\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',10),t={},o=(0,a(82831).Z)(t,[["render",function(e,s){return n}]])},82831:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}},37273:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-d9533216",path:"/linux/bash/archives/commands/export.html",title:"export",lang:"zh-CN",frontmatter:{summary:"export export 命令用于向子 Shell 输出变量。 然后执行下面的命令，新建一个子 Shell。 上面命令的执行结果会进入 hotellogs 变量指向的目录。 export 命令还可以显示所有环境变量。 如果想查看单个变量，使用 echo $VARIABLE_NAME。",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/commands/export.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"export"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-27T06:58:54.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-27T06:58:54.000Z"}]]},excerpt:"",headers:[],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:.37,words:110},filePathRelative:"linux/bash/archives/commands/export.md"}}}]);