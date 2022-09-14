"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[28903],{79283:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var e=s(79389);const t=(0,e.uE)('<h3 id="元素特性" tabindex="-1"><a class="header-anchor" href="#元素特性" aria-hidden="true">#</a> 元素特性</h3><ul><li><p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p></li><li><p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p></li><li><p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p></li></ul><h3 id="摆放特性" tabindex="-1"><a class="header-anchor" href="#摆放特性" aria-hidden="true">#</a> 摆放特性</h3><p>正常布局流(在布局介绍里提到过)是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的书写顺序(默认值: <code>horizontal-tb</code>)的块流动方向(block flow direction)放置。</p><p>每个块级元素会在上一个元素下面另起一行，它们会被设置好的 <code>margin</code> 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。</p><p>内联元素的表现有所不同: 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容(或者被包裹的)被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。</p><p>如果两个相邻的元素都设置了 <code>margin</code> 并且两个 <code>margin</code> 有重叠，那么更大的设置会被保留，小的则会消失。这被称为外边距叠加。</p>',7),o=(0,e._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,e._)("pre",{class:"language-html"},[(0,e._)("code",null,[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("h1")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("Basic document flow"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("h1")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  I am a basic block level element. My adjacent block level elements sit on new\n  lines below me.\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  By default we span 100% of the width of our parent element, and we are as tall\n  as our child content. Our total width and height is our content + padding +\n  border width/height.\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  We are separated by our margins. Because of margin collapsing, we are\n  separated by the width of one of our margins, not both.\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  inline elements "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("span")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("like this one"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("span")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)(" and "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("span")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("this one"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("span")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)(" sit on\n  the same line as one another, and adjacent text nodes, if there is space on\n  the same line. Overflowing inline elements will\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("span")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("wrap onto a new line if possible (like this one containing text)"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("span")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)(",\n  or just go on to a new line if not, much like this image will do:\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("img")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"src"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("https://mdn.mozillademos.org/files/13360/long.jpg"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"/>")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("p")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"})])],-1),l=(0,e._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,e._)("pre",{class:"language-css"},[(0,e._)("code",null,[(0,e._)("span",{class:"token selector"},"p"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},"background"),(0,e._)("span",{class:"token punctuation"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"rgba"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("255"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" 84"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" 104"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" 0.3"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},"border"),(0,e._)("span",{class:"token punctuation"},":"),(0,e.Uk)(" 2px solid "),(0,e._)("span",{class:"token function"},"rgb"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("255"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" 84"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" 104"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},"padding"),(0,e._)("span",{class:"token punctuation"},":"),(0,e.Uk)(" 10px"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},"margin"),(0,e._)("span",{class:"token punctuation"},":"),(0,e.Uk)(" 10px"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token selector"},"span"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},"background"),(0,e._)("span",{class:"token punctuation"},":"),(0,e.Uk)(" white"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},"border"),(0,e._)("span",{class:"token punctuation"},":"),(0,e.Uk)(" 1px solid black"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"}),(0,e._)("div",{class:"line-number"})])],-1),c={},i=(0,s(61935).Z)(c,[["render",function(n,a){const s=(0,e.up)("CodeDemo");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.Wm)(s,{id:"code-demo-3eee66cb",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E4%BE%8B%E5%AD%90",code:"%7B%22html%22%3A%22%3Ch1%3EBasic%20document%20flow%3C%2Fh1%3E%5Cn%5Cn%3Cp%3E%5Cn%20%20I%20am%20a%20basic%20block%20level%20element.%20My%20adjacent%20block%20level%20elements%20sit%20on%20new%5Cn%20%20lines%20below%20me.%5Cn%3C%2Fp%3E%5Cn%5Cn%3Cp%3E%5Cn%20%20By%20default%20we%20span%20100%25%20of%20the%20width%20of%20our%20parent%20element%2C%20and%20we%20are%20as%20tall%5Cn%20%20as%20our%20child%20content.%20Our%20total%20width%20and%20height%20is%20our%20content%20%2B%20padding%20%2B%5Cn%20%20border%20width%2Fheight.%5Cn%3C%2Fp%3E%5Cn%5Cn%3Cp%3E%5Cn%20%20We%20are%20separated%20by%20our%20margins.%20Because%20of%20margin%20collapsing%2C%20we%20are%5Cn%20%20separated%20by%20the%20width%20of%20one%20of%20our%20margins%2C%20not%20both.%5Cn%3C%2Fp%3E%5Cn%5Cn%3Cp%3E%5Cn%20%20inline%20elements%20%3Cspan%3Elike%20this%20one%3C%2Fspan%3E%20and%20%3Cspan%3Ethis%20one%3C%2Fspan%3E%20sit%20on%5Cn%20%20the%20same%20line%20as%20one%20another%2C%20and%20adjacent%20text%20nodes%2C%20if%20there%20is%20space%20on%5Cn%20%20the%20same%20line.%20Overflowing%20inline%20elements%20will%5Cn%20%20%3Cspan%3Ewrap%20onto%20a%20new%20line%20if%20possible%20(like%20this%20one%20containing%20text)%3C%2Fspan%3E%2C%5Cn%20%20or%20just%20go%20on%20to%20a%20new%20line%20if%20not%2C%20much%20like%20this%20image%20will%20do%3A%5Cn%20%20%3Cimg%20src%3D%5C%22https%3A%2F%2Fmdn.mozillademos.org%2Ffiles%2F13360%2Flong.jpg%5C%22%20%2F%3E%5Cn%3C%2Fp%3E%5Cn%22%2C%22css%22%3A%22p%20%7B%5Cn%20%20background%3A%20rgba(255%2C%2084%2C%20104%2C%200.3)%3B%5Cn%20%20border%3A%202px%20solid%20rgb(255%2C%2084%2C%20104)%3B%5Cn%20%20padding%3A%2010px%3B%5Cn%20%20margin%3A%2010px%3B%5Cn%7D%5Cn%5Cnspan%20%7B%5Cn%20%20background%3A%20white%3B%5Cn%20%20border%3A%201px%20solid%20black%3B%5Cn%7D%5Cn%22%7D"},{default:(0,e.w5)((()=>[o,l])),_:1})])}]])},61935:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},85603:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-846c5f62","path":"/code/website/css/layout/flow.html","title":"正常布局流","lang":"zh-CN","frontmatter":{"title":"正常布局流","icon":"flow","date":"2019-09-06T00:00:00.000Z","category":["CSS"],"summary":"元素特性 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。; 内联元素的 width height 与内容一致。您无法设置内联元素的 width height。; 如果您想控制内联元素的尺寸，您需要为元素设置 display: block; 或 display: inline-block。inline-block 混合了 inline ","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/website/css/layout/flow.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"正常布局流"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-18T14:17:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-18T14:17:40.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"元素特性","slug":"元素特性","link":"#元素特性","children":[]},{"level":3,"title":"摆放特性","slug":"摆放特性","link":"#摆放特性","children":[]}],"git":{"createdTime":1605690660000,"updatedTime":1652883460000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.91,"words":573},"filePathRelative":"code/website/css/layout/flow.md","localizedDate":"2019年9月6日"}')}}]);