"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[90765],{22864:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var s=t(79389);const a=t.p+"assets/img/git3.79e2b114.jpg",i=t.p+"assets/img/git4.c5391b29.jpg",o=(0,s._)("p",null,"Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。",-1),r=(0,s.uE)('<h2 id="工作区-working-directory" tabindex="-1"><a class="header-anchor" href="#工作区-working-directory" aria-hidden="true">#</a> 工作区(Working Directory)</h2><p>就是您在电脑里能看到的目录，比如 learngit 文件夹就是一个工作区:</p><h2 id="版本库-repository" tabindex="-1"><a class="header-anchor" href="#版本库-repository" aria-hidden="true">#</a> 版本库(Repository)</h2><p>工作区有一个隐藏目录.git，这个不算工作区，而是 Git 的版本库。</p><p>Git 的版本库里存了很多东西，其中最重要的就是称为 stage(或者叫 index)的暂存区，还有 Git 为我们自动创建的第一个分支 <code>master</code>，以及指向 master 的一个指针叫 <code>HEAD</code>。</p><p><img src="'+a+'" alt="版本库图例"></p><p>前面讲了我们把文件往 Git 版本库里添加的时候，提交更改，实际上就是把暂存区的所有内容提交到当前分支。我们创建 Git 版本库时，Git 自动为我们创建了唯一一个 <code>master</code> 分支，所以，现在，<code>git commit</code> 就是往 master 分支上提交更改。</p><p>您可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。</p><p>先对 readme.txt 做个修改，比如加上一行内容:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在工作区新增一个 LICENSE 文本文件(内容随便写)。</p><p>先用 <code>git status</code> 查看一下状态:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status\nOn branch master\nChanges not staged <span class="token keyword">for</span> commit:\n  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>\n  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>\n\n    modified:   readme.txt\n\nUntracked files:\n  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>\n\n    LICENSE\n\nno changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 非常清楚地告诉我们，readme.txt 被修改了，而 LICENSE 还从来没有被添加过，所以它的状态是 <code>Untracked</code>。</p><p>现在，使用两次命令 <code>git add</code>，把 readme.txt 和 LICENSE 都添加后，用 <code>git status</code> 再查看一下:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status\nOn branch master\nChanges to be committed:\n  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>\n\n    new file:   LICENSE\n    modified:   readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，暂存区的状态就变成这样了:</p><p><img src="'+i+'" alt="状态示意图"></p><p>所以，<code>git add</code> 命令实际上就是把要提交的所有修改放到暂存区(Stage)，然后，执行 <code>git commit</code> 就可以一次性把暂存区的所有修改提交到分支。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;understand how stage works&quot;</span>\n<span class="token punctuation">[</span>master e43a48b<span class="token punctuation">]</span> understand how stage works\n <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>\n create mode <span class="token number">100644</span> LICENSE\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦提交后，如果您又没有对工作区做任何修改，那么工作区就是“干净”的:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status\nOn branch master\nnothing to commit, working tree clean\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',22),d={},c=(0,t(61935).Z)(d,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.kq)(" more "),r])}]])},61935:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,s]of n)t[e]=s;return t}},9530:(e,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-33492354","path":"/software/git/working-directory.html","title":"工作区和暂存区","lang":"zh-CN","frontmatter":{"title":"工作区和暂存区","icon":"workingDirectory","order":7,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","summary":"Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/git/working-directory.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"工作区和暂存区"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mrhope.site/"}],["meta",{"property":"og:updated_time","content":"2022-09-07T17:18:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"工作区和暂存区"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-09-07T17:18:06.000Z"}]]},"excerpt":"<p>Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。</p>\\n","headers":[{"level":2,"title":"工作区(Working Directory)","slug":"工作区-working-directory","link":"#工作区-working-directory","children":[]},{"level":2,"title":"版本库(Repository)","slug":"版本库-repository","link":"#版本库-repository","children":[]}],"git":{"createdTime":1591291369000,"updatedTime":1662571086000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.22,"words":667},"filePathRelative":"software/git/working-directory.md","localizedDate":"2020年6月4日"}')}}]);