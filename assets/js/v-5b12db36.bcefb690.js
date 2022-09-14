"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[67505],{80307:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var r=i(79389);const a=[(0,r.uE)('<h2 id="小程序启动" tabindex="-1"><a class="header-anchor" href="#小程序启动" aria-hidden="true">#</a> 小程序启动</h2><p>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。</p><ul><li>热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；</li><li>冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。</li></ul><p>小程序没有重启的概念。</p><h2 id="前台-后台状态" tabindex="-1"><a class="header-anchor" href="#前台-后台状态" aria-hidden="true">#</a> 前台/后台状态</h2><p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了<strong>后台</strong>状态；</p><p>当用户再次进入微信或再次打开小程序，小程序又会从后台进入<strong>前台</strong>。</p><h2 id="小程序销毁" tabindex="-1"><a class="header-anchor" href="#小程序销毁" aria-hidden="true">#</a> 小程序销毁</h2><p>需要注意的是: 只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。</p><ul><li>当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后(目前是 5 分钟)小程序会被微信主动销毁。</li><li>当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。 <ul><li>在 iOS 上，当微信客户端在一定时间间隔内(目前是 5 秒)连续收到两次及以上系统内存告警时，会主动进行小程序的销毁，并提示用户 「该小程序可能导致微信响应变慢被终止」。</li><li>建议小程序在必要时使用 <code>wx.onMemoryWarning</code> 监听内存告警事件，进行必要的内存清理。</li></ul></li></ul>',10)],l={},n=(0,i(61935).Z)(l,[["render",function(e,t){return(0,r.wg)(),(0,r.iD)("div",null,a)}]])},61935:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,r]of t)i[e]=r;return i}},32275:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-5b12db36","path":"/code/mini-app/guide/service/run.html","title":"小程序运行机制","lang":"zh-CN","frontmatter":{"title":"小程序运行机制","icon":"play","category":["小程序"],"summary":"小程序启动 小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；; 冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。; 小程序没有重启的概念。 前台/后台状","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/mini-app/guide/service/run.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"小程序运行机制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2020-11-08T17:35:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2020-11-08T17:35:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"小程序启动","slug":"小程序启动","link":"#小程序启动","children":[]},{"level":2,"title":"前台/后台状态","slug":"前台-后台状态","link":"#前台-后台状态","children":[]},{"level":2,"title":"小程序销毁","slug":"小程序销毁","link":"#小程序销毁","children":[]}],"git":{"createdTime":1604856934000,"updatedTime":1604856934000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"code/mini-app/guide/service/run.md","localizedDate":"2020年11月8日"}')}}]);