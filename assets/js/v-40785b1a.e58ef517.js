"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4264],{25683:(s,n,a)=>{a.r(n),a.d(n,{default:()=>l});var e=a(79389);const t=[(0,e.uE)('<h1 id="开发软件" tabindex="-1"><a class="header-anchor" href="#开发软件" aria-hidden="true">#</a> 开发软件</h1><h2 id="安装-vs-code" tabindex="-1"><a class="header-anchor" href="#安装-vs-code" aria-hidden="true">#</a> 安装 VS Code</h2><ul><li><p>使用 snap</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> code\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">&gt;</span> packages.microsoft.gpg\n<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> <span class="token number">644</span> packages.microsoft.gpg /usr/share/keyrings/\n<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main&quot; &gt; /etc/apt/sources.list.d/vscode.list&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后正常安装:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> code <span class="token comment"># or code-insiders</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>可能还需要安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libx11-xcb1 libasound2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="remote-插件安装" tabindex="-1"><a class="header-anchor" href="#remote-插件安装" aria-hidden="true">#</a> remote 插件安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>code --install-extension ms-vscode-remote.vscode-remote-extensionpack\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Linux 上可能需要重新链接终端，命令才可用。</p><p>测试命令，输入 <code>nvm</code> 即安装成功:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> nvm\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm use <span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git" aria-hidden="true">#</a> 安装 Git</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update\n\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://dl.yarnpkg.com/debian/ stable main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试是否安装成功:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token parameter variable">--version</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',22)],i={},l=(0,a(61935).Z)(i,[["render",function(s,n){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},61935:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},35996:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-40785b1a","path":"/linux/ubuntu/debug.html","title":"开发软件","lang":"zh-CN","frontmatter":{"icon":"debug","date":"2019-11-21T00:00:00.000Z","category":["Linux"],"summary":"开发软件 安装 VS Code 使用 snap; 在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。; 然后正常安装: 可能还需要安装 remote 插件安装 nvm 在 Linux 上可能需要重新链接终端，命令才可用。 测试命令，输入 nvm 即安装成功: 安装命令: 切换命令: 安装 Git yarn 测试是否安装成功:","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/ubuntu/debug.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"开发软件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"安装 VS Code","slug":"安装-vs-code","link":"#安装-vs-code","children":[{"level":3,"title":"remote 插件安装","slug":"remote-插件安装","link":"#remote-插件安装","children":[]}]},{"level":2,"title":"nvm","slug":"nvm","link":"#nvm","children":[]},{"level":2,"title":"安装 Git","slug":"安装-git","link":"#安装-git","children":[]},{"level":2,"title":"yarn","slug":"yarn","link":"#yarn","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"linux/ubuntu/debug.md","localizedDate":"2019年11月21日"}')}}]);