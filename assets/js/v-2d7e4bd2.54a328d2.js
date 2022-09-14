"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10086],{71402:(e,o,c)=>{c.r(o),c.d(o,{default:()=>i});var d=c(79389);const t=(0,d._)("p",null,"本文介绍 Glob 匹配。",-1),l=(0,d.uE)('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Glob 是当您要进行路径匹配时键入的模式。</p><p>在解析一条匹配模式前，Glob 首先将 <code>{}</code> 部分展开为一组匹配模式。<code>{}</code> 内的模式之间使用逗号分隔。</p><p>如 <code>a{/b/c,bcd}</code> 将扩展为 <code>a/b/c</code> 和 <code>abcd</code></p><p><code>{}</code> 可以嵌套，可与其他模式联用。</p><p>Glob 的魔术字符如下:</p><ul><li><p><code>*</code>: 匹配路径部分中的 0 个或多个字符</p></li><li><p><code>?</code>: 匹配单个字符</p></li><li><p><code>[...]</code>: 匹配字符范围。<code>[^...]</code>和 <code>[!...]</code> 表示匹配不在范围内的字符</p><details class="custom-container details"><summary>例子</summary><ul><li><code>[xyz].js</code> 只能匹配 <code>x.js</code>, <code>y.js</code>, <code>z.js</code>，但不会匹配 <code>xy.js</code>, <code>xyz.js</code> 等，因为整个中括号只代表一个字符。其等价于 <code>[x-z].js</code></li><li><code>[!xyz].js</code> 能匹配 <code>a.js</code>, <code>b.js</code>, <code>u.js</code>，但不会匹配 <code>x.js</code>, <code>y.js</code> <code>z.js</code>，<code>ab.js</code> 等。其等价于 <code>[^xyz].js</code> 和 <code>[!x-z].js</code>。</li></ul></details></li><li><p><code>!(pattern|pattern|pattern)</code>: 匹配与提供的任何模式都不匹配的任何内容。</p></li><li><p><code>?(pattern|pattern|pattern)</code>: 匹配 0 或一个内部模式。</p></li><li><p><code>+(pattern|pattern|pattern)</code> 匹配一个或多个内部模式。</p></li><li><p><code>*(a|b|c)</code>: 匹配 0 或多个内部模式。</p></li><li><p><code>@(pattern|pat*|pat?erN)</code>: 匹配恰好一个内部模式。</p></li><li><p><code>**</code>: 如果其在路径部分中单独出现，则匹配路径中的 0 个或多个目录与子目录。请注意它不对 symlinked 目录 (符号链接目录) 进行爬取。</p><details class="custom-container details"><summary>例子</summary><ul><li><code>**</code> 能匹配匹配所有的目录和文件。</li><li><code>**/*.js</code> 能匹配所有的 js 文件。</li><li><code>a/**/b.txt</code> 能匹配目录里任何一个 a 文件夹内的所有 b.txt 文件。</li></ul></details></li></ul><h2 id="开头的文件与文件夹" tabindex="-1"><a class="header-anchor" href="#开头的文件与文件夹" aria-hidden="true">#</a> <code>.</code> 开头的文件与文件夹</h2><p>由于以 <code>.</code> 开头的文件或文件夹在 Unix 中视为隐藏文件或文件夹，故 Glob 不会匹配任何以 <code>.</code> 开头的路径部分，如 <code>.github/dependabot.yml</code> 或 <code>.eslintrc.js</code>。</p><p>如果的确想要匹配 <code>.</code> 开头的文件或文件夹，可以显示标注出来，如 <code>.*.js</code> 可以匹配 <code>.eslintrc.js</code>。</p>',10),a={},i=(0,c(61935).Z)(a,[["render",function(e,o){return(0,d.wg)(),(0,d.iD)("div",null,[t,(0,d.kq)(" more "),l])}]])},61935:(e,o)=>{o.Z=(e,o)=>{const c=e.__vccOpts||e;for(const[e,d]of o)c[e]=d;return c}},62444:(e,o,c)=>{c.r(o),c.d(o,{data:()=>d});const d=JSON.parse('{"key":"v-2d7e4bd2","path":"/code/basic/glob.html","title":"Glob","lang":"zh-CN","frontmatter":{"title":"Glob","icon":"regexp","author":"陈慧玲","date":"2021-02-18T00:00:00.000Z","category":["基础"],"summary":"本文介绍 Glob 匹配。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/basic/glob.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Glob"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"陈慧玲"}],["meta",{"property":"article:published_time","content":"2021-02-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>本文介绍 Glob 匹配。</p>\\n","headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":". 开头的文件与文件夹","slug":"开头的文件与文件夹","link":"#开头的文件与文件夹","children":[]}],"git":{"createdTime":1613636743000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"code/basic/glob.md","localizedDate":"2021年2月18日"}')}}]);