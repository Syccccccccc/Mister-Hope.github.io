"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68159],{14390:(l,e,t)=>{t.r(e),t.d(e,{default:()=>G});var o=t(79389);const r=(0,o._)("p",null,"这里是一些 Comsol 的学习资料整理与学习心得。",-1),n=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"写在前面"),(0,o._)("p",null,"本教程只适用于从未接触过仿真的人员，内容比较基础。"),(0,o._)("p",null,"我本人主要活跃在计算机相关领域，本科专业是物理学，并没有学过系统的工程原理、数值分析、模型建构以及相关的误差分析。COMSOL 是我本科制作毕设的软件，在毕设前，我也使用 COMSOL 构建了几个模型，完成了一些装置的模拟与优化。"),(0,o._)("p",null,"本篇教程，是根据我对 COMSOL 以及有限元仿真的理解书写的，一定会有一些疏漏与理解错误之处，还望大家指出。另外我主要研究过的方向是传热与流体流动，在本教程的举例中，也大多以这两方面为主。对其他的方向与模块，我是不熟悉的。")],-1),a=(0,o.Uk)("软件下载与安装"),s=(0,o.Uk)("有限元分析软件介绍"),m=(0,o.Uk)("快速上手 COMSOL"),i=(0,o.Uk)("几何"),p=(0,o.Uk)("浏览几何"),u=(0,o.Uk)("构建几何"),_=(0,o.Uk)("选择"),c=(0,o.Uk)("材料"),h=(0,o.Uk)("物理场"),f=(0,o.Uk)("网格"),d=(0,o.Uk)("研究"),k=(0,o.Uk)("结果"),g=(0,o.Uk)("APP"),w=(0,o._)("h2",{id:"文档",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),(0,o.Uk)(" 文档")],-1),O={href:"https://mrhope.site/file/comsol/IntroductionToCOMSOLMultiphysics.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},C=(0,o.Uk)("COMSOL 新手指南"),b={href:"https://mrhope.site/file/comsol/App%E5%BC%80%E5%8F%91%E5%99%A8%E7%AE%80%E4%BB%8B.pdf",target:"_blank",rel:"noopener noreferrer"},U=(0,o.Uk)("COMSOL App 开发器简介"),y={href:"https://mrhope.site/file/comsol/ApplicationProgrammingGuide.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},M=(0,o.Uk)("COMSOL Multiphysics 应用程序编程指南"),W={href:"http://cn.comsol.com/multiphysics/",target:"_blank",rel:"noopener noreferrer"},L=(0,o.Uk)("COMSOL 多物理场仿真百科"),S={href:"https://cn.comsol.com/videos",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("COMSOL 视频中心"),E={href:"https://cn.comsol.com/video-training",target:"_blank",rel:"noopener noreferrer"},T=(0,o.Uk)("COMSOL 在线课程回放"),z=(0,o.Uk)(" (应该是在疫情期间限时开放)"),A={href:"https://cn.comsol.com/papers-presentations",target:"_blank",rel:"noopener noreferrer"},Z=(0,o.Uk)("基于 COMSOL 的论文"),N=(0,o._)("h2",{id:"其他杂项",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#其他杂项","aria-hidden":"true"},"#"),(0,o.Uk)(" 其他杂项")],-1),x={href:"https://cn.comsol.com/blogs/how-to-make-boundary-conditions-conditional-in-your-simulation/",target:"_blank",rel:"noopener noreferrer"},B=(0,o.Uk)("如何设置特殊边界条件"),D={href:"https://cn.comsol.com/blogs/how-to-customize-the-comsol-desktop-and-use-keyboard-shortcuts/",target:"_blank",rel:"noopener noreferrer"},P=(0,o.Uk)("如何定制 COMSOL Desktop"),R=(0,o._)("sup",null,"®",-1),H=(0,o.Uk)(" 和使用键盘快捷键"),I={href:"https://cn.comsol.com/blogs/how-to-use-the-find-and-auto-completion-tools-for-faster-model-setup/",target:"_blank",rel:"noopener noreferrer"},q=(0,o.Uk)("使用查找工具和自动完成工具加快建模过程"),F={},G=(0,t(61935).Z)(F,[["render",function(l,e){const t=(0,o.up)("RouterLink"),F=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[r,(0,o.kq)(" more "),n,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/install.html"},{default:(0,o.w5)((()=>[a])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/intro.html"},{default:(0,o.w5)((()=>[s])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/get-started.html"},{default:(0,o.w5)((()=>[m])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/geometry/"},{default:(0,o.w5)((()=>[i])),_:1})]),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/geometry/view.html"},{default:(0,o.w5)((()=>[p])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/geometry/build.html"},{default:(0,o.w5)((()=>[u])),_:1})])])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/select.html"},{default:(0,o.w5)((()=>[_])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/material.html"},{default:(0,o.w5)((()=>[c])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/physic-field.html"},{default:(0,o.w5)((()=>[h])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/mesh/"},{default:(0,o.w5)((()=>[f])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/study.html"},{default:(0,o.w5)((()=>[d])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/result.html"},{default:(0,o.w5)((()=>[k])),_:1})])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o.Wm)(t,{to:"/software/comsol/app.html"},{default:(0,o.w5)((()=>[g])),_:1})])])]),w,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",O,[C,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",b,[U,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",y,[M,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",W,[L,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",S,[v,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",E,[T,(0,o.Wm)(F)]),z])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",A,[Z,(0,o.Wm)(F)])])])]),N,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",x,[B,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",D,[P,R,H,(0,o.Wm)(F)])])]),(0,o._)("li",null,[(0,o._)("p",null,[(0,o._)("a",I,[q,(0,o.Wm)(F)])])])])])}]])},61935:(l,e)=>{e.Z=(l,e)=>{const t=l.__vccOpts||l;for(const[l,o]of e)t[l]=o;return t}},68881:(l,e,t)=>{t.r(e),t.d(e,{data:()=>o});const o=JSON.parse('{"key":"v-1b96b631","path":"/software/comsol/","title":"COMSOL","lang":"zh-CN","frontmatter":{"title":"COMSOL","icon":"app","date":"2020-05-29T00:00:00.000Z","category":["软件"],"tag":["仿真","COMSOL"],"summary":"这里是一些 Comsol 的学习资料整理与学习心得。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/comsol/"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"COMSOL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-07T16:53:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"仿真"}],["meta",{"property":"article:tag","content":"COMSOL"}],["meta",{"property":"article:published_time","content":"2020-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-07T16:53:33.000Z"}]]},"excerpt":"<p>这里是一些 Comsol 的学习资料整理与学习心得。</p>\\n","headers":[{"level":2,"title":"文档","slug":"文档","link":"#文档","children":[]},{"level":2,"title":"其他杂项","slug":"其他杂项","link":"#其他杂项","children":[]}],"git":{"createdTime":1644163298000,"updatedTime":1644252813000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.67,"words":501},"filePathRelative":"software/comsol/README.md","localizedDate":"2020年5月29日"}')}}]);