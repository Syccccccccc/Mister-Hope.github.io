"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15912],{38931:(e,n,o)=>{o.r(n),o.d(n,{default:()=>$});var t=o(34086);const s=o.p+"assets/img/terminal-global-settings.57f28bc5.png",a=o.p+"assets/img/terminal-profiles.a675c33d.png",l=o.p+"assets/img/terminal-actions.d54e4304.png",r=(0,t._)("p",null,"配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。",-1),i=(0,t._)("p",null,[(0,t.Uk)("可以使用快捷键 "),(0,t._)("code",null,"Ctrl + Shift + *"),(0,t.Uk)(" 来打开对应的配置文件，可使用 "),(0,t._)("code",null,"Ctrl + ,"),(0,t.Uk)(" 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。")],-1),u=(0,t.uE)('<div class="custom-container tip"><p class="custom-container-title">默认设置</p><p>您可以通过按住 Alt 键并点击下拉菜单中的 Settings 按钮打开 defaults.json。该文件由 Terminal 自动生成，展示了 Windows Terminal 所有默认设置及其值。更改此文件是无效的。</p></div><p>settings.json 文件分为四个主要部分:</p><ol><li>全局设置对象，它位于 JSON 文件的顶部。全局设置将影响整个应用程序。</li><li>配置文件设置，由 <code>profiles</code> 对象控制。负责控制每个配置文件。</li><li>配色方案，由 <code>schemes</code> 数组控制。</li><li>自定义操作，由 <code>actions</code> 数组控制</li></ol><h2 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置" aria-hidden="true">#</a> 全局设置</h2><p>全局设置会将影响整个终端窗口。</p>',5),c=(0,t.Uk)("关于详细的配置项，请见 "),d={href:"https://aka.ms/terminal-global-settings",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("全局设置"),m=(0,t.Uk)("。"),q=(0,t.uE)('<p><img src="'+s+'" alt="全局设置"></p><h3 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件" aria-hidden="true">#</a> 默认配置文件</h3><p>默认配置文件为 Windows PowerShell。您可以通过在 settings.json 文件中将 <code>defaultProfile</code> 设置为首选配置文件的名称或 GUID 来更改默认配置文件。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;defaultProfile&quot;: &quot;PowerShell&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置文件设置" tabindex="-1"><a class="header-anchor" href="#配置文件设置" aria-hidden="true">#</a> 配置文件设置</h2><p><code>profiles</code> 对象描述配置文件。它分为两个部分: <code>defaults</code> 和 <code>list</code>。</p><ul><li><p><code>defaults</code> 对象中的配置文件会应用于列表中的所有项目。</p></li><li><p><code>list</code> 包含代表配置文件的每个配置文件对象，这些是出现在 Windows Terminal 下拉菜单中的项目。应用于 <code>list</code> 中各个配置文件的设置会覆盖 <code>defaults</code> 部分中应用的设置。</p></li></ul>',7),b=(0,t.Uk)("关于详细的配置项，请见 "),h={href:"https://aka.ms/terminal-profile-settings",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("配置文件设置"),f=(0,t.Uk)("。"),k=(0,t.uE)('<p><img src="'+a+'" alt="配置文件设置"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><p>您可以在 <code>defaults</code> 中设置 <code>fontFace</code> 控制终端的字体。</p></li><li><p>您可以在 Powershell 配置文件中添加 <code>commandline</code> 为 <code>&lt;PowerShell 地址&gt; -nologo</code> 来去除 powershell 启动时的 logo 显示。(默认地址为: <code>C:/Program Files/PowerShell/7/pwsh.exe</code>)</p></li><li><p>您可以通过设置 <code>backgroundImage</code> 自定义背景图片，通过 <code>backgroundImageOpacity</code> 自定义背景透明度，通过 <code>useAcrylic</code> 开启或关闭毛玻璃效果。</p></li></ul></div><h3 id="新增配置文件" tabindex="-1"><a class="header-anchor" href="#新增配置文件" aria-hidden="true">#</a> 新增配置文件</h3><p>Windows Terminal 会自动为 PowerShell 和 WSL 分发版创建配置文件。</p><p>您也可以手动添加新的配置文件: 只需生成一个新的 <code>guid</code>，提供一个 <code>name</code>，并为 <code>commandline</code> 属性提供可执行程序。</p>',5),v={class:"custom-container info"},_=(0,t._)("p",{class:"custom-container-title"},"WSL",-1),w=(0,t.Uk)("您可以通过 "),C={href:"https://www.microsoft.com/zh-cn/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("Microsoft 应用商店"),j=(0,t.Uk)(" 安装 Ubuntu。之后便可以在 terminal 上运行 Ubuntu WSL 环境。"),y=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>您不能从动态生成的配置文件中复制 <code>source</code> 属性，否则 Windows Terminal 会忽略此配置文件。您必须使用 <code>commandline</code> 替换 <code>source</code> 并提供可执行程序，以便复制一个动态生成的配置文件。</p></div><h2 id="配色方案" tabindex="-1"><a class="header-anchor" href="#配色方案" aria-hidden="true">#</a> 配色方案</h2><p>您可以在 <code>schemes</code> 数组中配置自定义配色方案。它们是使用以下格式写入的:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{\n  &quot;name&quot;: &quot;Campbell&quot;,\n\n  &quot;cursorColor&quot;: &quot;#FFFFFF&quot;,\n  &quot;selectionBackground&quot;: &quot;#FFFFFF&quot;,\n\n  &quot;background&quot;: &quot;#0C0C0C&quot;,\n  &quot;foreground&quot;: &quot;#CCCCCC&quot;,\n\n  &quot;black&quot;: &quot;#0C0C0C&quot;,\n  &quot;blue&quot;: &quot;#0037DA&quot;,\n  &quot;cyan&quot;: &quot;#3A96DD&quot;,\n  &quot;green&quot;: &quot;#13A10E&quot;,\n  &quot;purple&quot;: &quot;#881798&quot;,\n  &quot;red&quot;: &quot;#C50F1F&quot;,\n  &quot;white&quot;: &quot;#CCCCCC&quot;,\n  &quot;yellow&quot;: &quot;#C19C00&quot;,\n  &quot;brightBlack&quot;: &quot;#767676&quot;,\n  &quot;brightBlue&quot;: &quot;#3B78FF&quot;,\n  &quot;brightCyan&quot;: &quot;#61D6D6&quot;,\n  &quot;brightGreen&quot;: &quot;#16C60C&quot;,\n  &quot;brightPurple&quot;: &quot;#B4009E&quot;,\n  &quot;brightRed&quot;: &quot;#E74856&quot;,\n  &quot;brightWhite&quot;: &quot;#F2F2F2&quot;,\n  &quot;brightYellow&quot;: &quot;#F9F1A5&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',4),W=(0,t.Uk)("关于详细的配置项，请见 "),F={href:"https://aka.ms/terminal-color-schemes",target:"_blank",rel:"noopener noreferrer"},x=(0,t.Uk)("配置文件设置"),T=(0,t.Uk)("。"),S=(0,t.uE)('<h3 id="自带的配色方案" tabindex="-1"><a class="header-anchor" href="#自带的配色方案" aria-hidden="true">#</a> 自带的配色方案</h3><p>Windows Terminal 在 defaults.json 文件中包含了一些配色方案。如果要在一个命令行配置文件中设置配色方案，请添加 <code>colorScheme</code> 属性，并将配色方案的 <code>name</code> 作为值。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;colorScheme&quot;: &quot;COLOR SCHEME NAME&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>',3),E=(0,t.Uk)("查看各配色方案效果，请见 "),P={href:"https://aka.ms/terminal-color-schemes#included-color-schemes",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Uk)("包含的配色方案"),D=(0,t.Uk)("。"),Z=(0,t._)("h3",{id:"自定义配色方案",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#自定义配色方案","aria-hidden":"true"},"#"),(0,t.Uk)(" 自定义配色方案")],-1),B=(0,t._)("p",null,"下面提供几个主题色工具:",-1),L={href:"https://terminal.sexy/",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("terminal.sexy"),N={href:"https://windowsterminalthemes.dev/",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("Windows Terminal Themes"),z={href:"https://terminalsplash.com/",target:"_blank",rel:"noopener noreferrer"},H=(0,t.Uk)("TerminalSplash"),I=(0,t.Uk)("，"),R=(0,t._)("h2",{id:"自定义操作",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#自定义操作","aria-hidden":"true"},"#"),(0,t.Uk)(" 自定义操作")],-1),G=(0,t._)("p",null,"您可以在 Windows 终端中创建自定义操作，以控制与终端的交互方式。这些操作将自动添加到命令面板。",-1),Y=(0,t.Uk)("关于详细的配置项，请见 "),J={href:"https://aka.ms/terminal-keybindings",target:"_blank",rel:"noopener noreferrer"},K=(0,t.Uk)("自定义操作设置"),Q=(0,t.Uk)("。"),V=(0,t.uE)('<p><img src="'+l+'" alt="自定义操作"></p><p>自定义操作可以设置为以下格式:</p><ul><li><p>无参数命令</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{ &quot;command&quot;: &quot;命令名称&quot;, &quot;keys&quot;: &quot;快捷键&quot; }\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><details class="custom-block details"><summary>例子</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{ &quot;command&quot;: &quot;closeWindow&quot;, &quot;keys&quot;: &quot;alt+f4&quot; }\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details></li><li><p>有参数命令</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{\n  &quot;command&quot;: { &quot;action&quot;: &quot;commandName&quot;, &quot;argument&quot;: &quot;value&quot; },\n  &quot;keys&quot;: &quot;modifiers+key&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><details class="custom-block details"><summary>例子</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{ &quot;command&quot;: { &quot;action&quot;: &quot;newTab&quot;, &quot;index&quot;: 0 }, &quot;keys&quot;: &quot;ctrl+shift+1&quot; }\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details></li></ul>',3),X={},$=(0,o(82831).Z)(X,[["render",function(e,n){const o=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,i,(0,t.kq)(" more "),u,(0,t._)("p",null,[c,(0,t._)("a",d,[p,(0,t.Wm)(o)]),m]),q,(0,t._)("p",null,[b,(0,t._)("a",h,[g,(0,t.Wm)(o)]),f]),k,(0,t._)("div",v,[_,(0,t._)("p",null,[w,(0,t._)("a",C,[U,(0,t.Wm)(o)]),j])]),y,(0,t._)("p",null,[W,(0,t._)("a",F,[x,(0,t.Wm)(o)]),T]),S,(0,t._)("p",null,[E,(0,t._)("a",P,[A,(0,t.Wm)(o)]),D]),Z,B,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",L,[M,(0,t.Wm)(o)])]),(0,t._)("li",null,[(0,t._)("a",N,[O,(0,t.Wm)(o)])]),(0,t._)("li",null,[(0,t._)("a",z,[H,(0,t.Wm)(o)]),I])]),R,G,(0,t._)("p",null,[Y,(0,t._)("a",J,[K,(0,t.Wm)(o)]),Q]),V],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},1158:(e,n,o)=>{o.r(n),o.d(n,{data:()=>t});const t={key:"v-dd24d6aa",path:"/software/tool/terminal/settings.html",title:"自定义设置",lang:"zh-CN",frontmatter:{title:"自定义设置",icon:"config",date:"2021-01-27T00:00:00.000Z",summary:"配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。\n可以使用快捷键 Ctrl + Shift + * 来打开对应的配置文件，可使用 Ctrl + , 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/software/tool/terminal/settings.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"自定义设置"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2021-01-27T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。</p>\n<p>可以使用快捷键 <code v-pre>Ctrl + Shift + *</code> 来打开对应的配置文件，可使用 <code v-pre>Ctrl + ,</code> 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。</p>\n",headers:[{level:2,title:"全局设置",slug:"全局设置",children:[{level:3,title:"默认配置文件",slug:"默认配置文件",children:[]}]},{level:2,title:"配置文件设置",slug:"配置文件设置",children:[{level:3,title:"新增配置文件",slug:"新增配置文件",children:[]}]},{level:2,title:"配色方案",slug:"配色方案",children:[{level:3,title:"自带的配色方案",slug:"自带的配色方案",children:[]},{level:3,title:"自定义配色方案",slug:"自定义配色方案",children:[]}]},{level:2,title:"自定义操作",slug:"自定义操作",children:[]}],git:{createdTime:1611744401e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:3.97,words:1191},filePathRelative:"software/tool/terminal/settings.md"}}}]);