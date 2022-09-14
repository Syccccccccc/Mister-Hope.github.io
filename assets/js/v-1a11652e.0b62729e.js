"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10469],{88218:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var n=a(79389);const l=(0,n._)("p",null,"用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。",-1),o=(0,n.uE)('<h2 id="环境变量-ps1" tabindex="-1"><a class="header-anchor" href="#环境变量-ps1" aria-hidden="true">#</a> 环境变量 PS1</h2><p>命令提示符通常是美元符号 <code>$</code>，对于根用户则是井号 <code>#</code>。这个符号是环境变量 <code>PS1</code> 决定的，执行下面的命令，可以看到当前命令提示符的定义。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PS1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bash 允许用户自定义命令提示符，只要改写这个变量即可。改写后 的 <code>PS1</code>，可以放在用户的 Bash 配置文件 <code>.bashrc</code> 里面，以后新建 Bash 对话时，新的提示符就会生效。要在当前窗口看到修改后的提示符，可以执行下面的命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令提示符的定义，可以包含特殊的转义字符，表示特定内容。</p><ul><li><code>\\a</code>: 响铃，计算机发出一记声音。</li><li><code>\\d</code>: 以星期、月、日格式表示当前日期，例如“Mon May 26”。</li><li><code>\\h</code>: 本机的主机名。</li><li><code>\\H</code>: 完整的主机名。</li><li><code>\\j</code>: 运行在当前 Shell 会话的工作数。</li><li><code>\\l</code>: 当前终端设备名。</li><li><code>\\n</code>: 一个换行符。</li><li><code>\\r</code>: 一个回车符。</li><li><code>\\s</code>: Shell 的名称。</li><li><code>\\t</code>: 24 小时制的 <code>hours:minutes:seconds</code> 格式表示当前时间。</li><li><code>\\T</code>: 12 小时制的当前时间。</li><li><code>\\@</code>: 12 小时制的 <code>AM/PM</code> 格式表示当前时间。</li><li><code>\\A</code>: 24 小时制的 <code>hours:minutes</code> 表示当前时间。</li><li><code>\\u</code>: 当前用户名。</li><li><code>\\v</code>: Shell 的版本号。</li><li><code>\\V</code>: Shell 的版本号和发布号。</li><li><code>\\w</code>: 当前的工作路径。</li><li><code>\\W</code>: 当前目录名。</li><li><code>\\!</code>: 当前命令在命令历史中的编号。</li><li><code>\\#</code>: 当前 shell 会话中的命令数。</li><li><code>\\$</code>: 普通用户显示为 <code>$</code> 字符，根用户显示为 <code>#</code> 字符。</li><li><code>\\[</code>: 非打印字符序列的开始标志。</li><li><code>\\]</code>: 非打印字符序列的结束标志。</li></ul><p>举例来说，<code>[\\u@\\h \\W]\\$</code> 这个提示符定义，显示出来就是 <code>[user@host ~]$</code> (具体的显示内容取决于您的系统)。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>user@host ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PS1</span>\n<span class="token punctuation">[</span><span class="token punctuation">\\</span>u@<span class="token punctuation">\\</span>h <span class="token punctuation">\\</span>W<span class="token punctuation">]</span><span class="token punctuation">\\</span>$\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>改写 <code>PS1</code> 变量，就可以改变这个命令提示符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&quot;\\A \\h \\$ &quot;</span>\n<span class="token number">17</span>:33 <span class="token function">host</span> $\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>$</code> 后面最好跟一个空格，这样的话，用户的输入与提示符就不会连在一起。</p><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2><p>默认情况下，命令提示符是显示终端预定义的颜色。Bash 允许自定义提示符颜色。</p><p>使用下面的代码，可以设定其后文本的颜色。</p><ul><li><code>\\033[0;30m</code>: 黑色</li><li><code>\\033[1;30m</code>: 深灰色</li><li><code>\\033[0;31m</code>: 红色</li><li><code>\\033[1;31m</code>: 浅红色</li><li><code>\\033[0;32m</code>: 绿色</li><li><code>\\033[1;32m</code>: 浅绿色</li><li><code>\\033[0;33m</code>: 棕色</li><li><code>\\033[1;33m</code>: 黄色</li><li><code>\\033[0;34m</code>: 蓝色</li><li><code>\\033[1;34m</code>: 浅蓝色</li><li><code>\\033[0;35m</code>: 粉红</li><li><code>\\033[1;35m</code>: 浅粉色</li><li><code>\\033[0;36m</code>: 青色</li><li><code>\\033[1;36m</code>: 浅青色</li><li><code>\\033[0;37m</code>: 浅灰色</li><li><code>\\033[1;37m</code>: 白色</li></ul><p>举例来说，如果要将提示符设为红色，可以将 <code>PS1</code> 设成下面的代码。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\033[0;31m\\]&lt;\\u@\\h \\W&gt;\\$&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，上面这样设置以后，用户在提示符后面输入的文本也是红色的。为了解决这个问题， 可以在结尾添加另一个特殊代码 <code>\\[\\033[00m\\]</code>，表示将其后的文本恢复到默认颜色。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\033[0;31m\\]&lt;\\u@\\h \\W&gt;\\$\\[\\033[00m\\]&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了设置前景颜色，Bash 还允许设置背景颜色。</p><ul><li><code>\\033[0;40m</code>: 蓝色</li><li><code>\\033[1;44m</code>: 黑色</li><li><code>\\033[0;41m</code>: 红色</li><li><code>\\033[1;45m</code>: 粉红</li><li><code>\\033[0;42m</code>: 绿色</li><li><code>\\033[1;46m</code>: 青色</li><li><code>\\033[0;43m</code>: 棕色</li><li><code>\\033[1;47m</code>: 浅灰色</li></ul><p>下面是一个带有红色背景的提示符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\033[0;41m\\]&lt;\\u@\\h \\W&gt;\\$\\[\\033[0m\\] &#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="环境变量-ps2-ps3-ps4" tabindex="-1"><a class="header-anchor" href="#环境变量-ps2-ps3-ps4" aria-hidden="true">#</a> 环境变量 PS2，PS3，PS4</h2><p>除了 <code>PS1</code>，Bash 还提供了提示符相关的另外三个环境变量。</p><p>环境变量 <code>PS2</code> 是命令行折行输入时系统的提示符，默认为 <code>&gt;</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello\n&gt; world&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，输入 <code>hello</code> 以后按下回车键，系统会提示继续输入。这时，第二行显示的提示符就是 <code>PS2</code> 定义的 <code>&gt;</code>。</p><p>环境变量 <code>PS3</code> 是使用 <code>select</code> 命令时，系统输入菜单的提示符。</p><p>环境变量 <code>PS4</code> 默认为 <code>+</code>。它是使用 Bash 的 <code>-x</code> 参数执行脚本时，每一行命令在执行前都会先打印出来，并且在行首出现的那个提示符。</p><p>比如下面是脚本 <code>test.sh</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>-x</code> 参数执行这个脚本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> <span class="token parameter variable">-x</span> test.sh\n+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello world&#39;</span>\nhello world\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，输出的第一行前面有一个 <code>+</code>，这就是变量 <code>PS4</code> 定义的。</p>',36),c={},i=(0,a(61935).Z)(c,[["render",function(e,s){return(0,n.wg)(),(0,n.iD)("div",null,[l,(0,n.kq)(" more "),o])}]])},61935:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}},42933:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n=JSON.parse('{"key":"v-1a11652e","path":"/linux/bash/prompt.html","title":"命令提示符","lang":"zh-CN","frontmatter":{"title":"命令提示符","icon":"shell","author":"阮一峰","category":["Linux"],"tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","summary":"用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/bash/prompt.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"命令提示符"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"excerpt":"<p>用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。</p>\\n","headers":[{"level":2,"title":"环境变量 PS1","slug":"环境变量-ps1","link":"#环境变量-ps1","children":[]},{"level":2,"title":"颜色","slug":"颜色","link":"#颜色","children":[]},{"level":2,"title":"环境变量 PS2，PS3，PS4","slug":"环境变量-ps2-ps3-ps4","link":"#环境变量-ps2-ps3-ps4","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6}]},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"linux/bash/prompt.md","localizedDate":"2020年6月3日"}')}}]);