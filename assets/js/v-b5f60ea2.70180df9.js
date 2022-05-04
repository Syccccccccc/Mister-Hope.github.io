"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[29677],{98642:(e,n,s)=>{s.r(n),s.d(n,{default:()=>g});var a=s(34086);const o=(0,a.uE)('<p>您可以做很多事情来个性化 VS Code。</p><ul><li>改变您的主题</li><li>改变您的文件图标</li><li>更改键盘快捷键</li><li>调整设置</li><li>安装扩展</li></ul><h2 id="更改主题" tabindex="-1"><a class="header-anchor" href="#更改主题" aria-hidden="true">#</a> 更改主题</h2><p>键盘快捷键: <code>Ctrl + K Ctrl + T</code></p><p>您可以从 VS Code 扩展市场中安装更多主题。</p><p>此外，您可以安装和更改文件图标主题。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Mr.Hope 个人推荐 <code>One Dark Pro</code> 主题和 <code>Material Icon Theme</code> 文件图标主题。</p><p>您需要从扩展应用应用商店中安装它们。</p></div><h2 id="自定义键盘快捷键" tabindex="-1"><a class="header-anchor" href="#自定义键盘快捷键" aria-hidden="true">#</a> 自定义键盘快捷键</h2><p>键盘快捷键: <code>Ctrl + K Ctrl + S</code></p><p>您可以搜索快捷方式并将自己的键绑定添加到 <code>keybindings.json</code> 文件中。</p>',10),r=(0,a.Uk)("有关更多信息，请参见 "),i=(0,a.Uk)("快捷键键绑定"),t=(0,a.Uk)("。"),l=(0,a.uE)('<h2 id="调整您的设置" tabindex="-1"><a class="header-anchor" href="#调整您的设置" aria-hidden="true">#</a> 调整您的设置</h2><p>默认情况下，VS Code 显示 <strong>设置</strong> 编辑器，您还可以通过使用 <strong>打开设置(JSON)</strong> 命令打开 <code>settings.json</code>。</p><p>键盘快捷键: <code>Ctrl + ,</code></p><p><strong>示例</strong>:</p><ul><li><p>更改各种 UI 元素的字体大小</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>// Main editor\n&quot;editor.fontSize&quot;: 18,\n// Terminal panel\n&quot;terminal.integrated.fontSize&quot;: 14,\n// Output panel\n&quot;[Log]&quot;: {\n    &quot;editor.fontSize&quot;: 15\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>更改缩放等级</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;window.zoomLevel&quot;: 5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>字体连字</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;editor.fontFamily&quot;: &quot;Fira Code&quot;,\n&quot;editor.fontLigatures&quot;: true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这需要安装支持字体连字的字体。FiraCode 是 VS Code 团队中流行的字体。</p><p>Mr.Hope 也强力推荐安装并使用这一字体 (字体详见云文档共享文件)</p></div></li><li><p>自动保存</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;files.autoSave&quot;: &quot;afterDelay&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>您也可以使用 <code>文件 &gt; 自动保存</code> 从顶层菜单切换自动保存。</p></li><li><p>保存时格式化</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;editor.formatOnSave&quot;: true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>粘贴格式</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;editor.formatOnPaste&quot;: true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>更改制表符的大小</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;editor.tabSize&quot;: 4\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>空格或制表符</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;editor.insertSpaces&quot;: true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>渲染空白</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;editor.renderWhitespace&quot;: &quot;all&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>默认情况下，在文本选择中呈现空白字符。</p></li><li><p>忽略文件/文件夹</p><p>从编辑器窗口中删除这些文件/文件夹。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;files.exclude&quot;: {\n    &quot;somefolder/&quot;: true,\n    &quot;somefile&quot;: true\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>从搜索结果中删除这些文件/文件夹。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;search.exclude&quot;: {\n    &quot;someFolder/&quot;: true,\n    &quot;somefile&quot;: true\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><p>以及许多其他定制。</p><h2 id="语言特定的设置" tabindex="-1"><a class="header-anchor" href="#语言特定的设置" aria-hidden="true">#</a> 语言特定的设置</h2>',7),d=(0,a.Uk)("您可以通过语言标识符来确定只需要特定语言的设置的范围。您可以在 "),u={href:"https://code.visualstudio.com/docs/languages/identifiers",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("语言标识符"),c=(0,a.Uk)(" 参考中找到常用语言 ID 的列表。"),m=(0,a.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;[languageid]&quot;: {\n\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>您还可以使用 <strong>配置语言特定的设置</strong> 命令来创建特定于语言的设置。</p></div>',2),b={},g=(0,s(82831).Z)(b,[["render",function(e,n){const s=(0,a.up)("RouterLink"),b=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[r,(0,a.Wm)(s,{to:"/software/vscode/shortcut-key.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%BC%96%E8%BE%91%E5%99%A8"},{default:(0,a.w5)((()=>[i])),_:1}),t]),l,(0,a._)("p",null,[d,(0,a._)("a",u,[p,(0,a.Wm)(b)]),c]),m],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},16462:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-b5f60ea2",path:"/software/vscode/guide/customization.html",title:"个性化",lang:"zh-CN",frontmatter:{title:"个性化",icon:"decorate",category:["VS Code"],tag:["VS Code","软件"],summary:"您可以做很多事情来个性化 VS Code。 改变您的主题; 改变您的文件图标; 更改键盘快捷键; 调整设置; 安装扩展; 更改主题 键盘快捷键: Ctrl + K Ctrl + T 您可以从 VS Code 扩展市场中安装更多主题。 此外，您可以安装和更改文件图标主题。 Mr.Hope 个人推荐 One Dark Pro 主题和 Material Icon ",head:[["meta",{property:"og:url",content:"https://mrhope.site/software/vscode/guide/customization.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"个性化"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"VS Code"}],["meta",{property:"article:tag",content:"软件"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"更改主题",slug:"更改主题",children:[]},{level:2,title:"自定义键盘快捷键",slug:"自定义键盘快捷键",children:[]},{level:2,title:"调整您的设置",slug:"调整您的设置",children:[]},{level:2,title:"语言特定的设置",slug:"语言特定的设置",children:[]}],git:{createdTime:1600444622e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:9}]},readingTime:{minutes:1.92,words:577},filePathRelative:"software/vscode/guide/customization.md"}}}]);