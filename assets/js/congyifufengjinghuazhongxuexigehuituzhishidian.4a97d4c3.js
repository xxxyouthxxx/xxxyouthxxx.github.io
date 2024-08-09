(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{737:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"🔥-从一幅-css-风景画中学习-2-个绘图知识点"}},[a._v("🔥 从一幅 CSS 风景画中学习 2 个绘图知识点")]),a._v(" "),t("nav",{staticClass:"table-of-contents"},[t("ol",[t("li",[t("a",{attrs:{href:"#从一幅-css-风景画中学习-2-个绘图知识点"}},[a._v("🔥 从一幅 CSS 风景画中学习 2 个绘图知识点")]),t("ol",[t("li",[t("a",{attrs:{href:"#分析"}},[a._v("分析")]),t("ol",[t("li",[t("a",{attrs:{href:"#多重阴影"}},[a._v("多重阴影")])]),t("li",[t("a",{attrs:{href:"#多重背景"}},[a._v("多重背景")])])])]),t("li",[t("a",{attrs:{href:"#一些细节补充"}},[a._v("一些细节补充")]),t("ol",[t("li",[t("a",{attrs:{href:"#水面纹理的消失"}},[a._v("水面纹理的消失")])]),t("li",[t("a",{attrs:{href:"#太阳及其炫光"}},[a._v("太阳及其炫光")])])])]),t("li",[t("a",{attrs:{href:"#图像分解"}},[a._v("图像分解")])]),t("li",[t("a",{attrs:{href:"#后语"}},[a._v("后语")]),t("ol",[t("li",[t("a",{attrs:{href:"#阅读更多"}},[a._v("阅读更多")])])])])])])])]),t("p",[a._v("最近 CodePen 流行的一张用纯 CSS 绘制的风景画令人印象深刻：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/browser_c5Q2Z8gnR9.jpg",alt:"",loading:"lazy"}}),t("figcaption",[a._v("An Evening in Southwold")])]),a._v(" "),t("p",[a._v("天空的眩光，水面反射，精细的房屋细节相当惊艳，下面我们大致说一说这张图片中的一些技术细节。图画的源码地址在文末。")]),a._v(" "),t("h2",{attrs:{id:"分析"}},[a._v("分析")]),a._v(" "),t("p",[a._v("观察图像，结合源码 HTML 的二级节点可以知道，整个画面大致由天空、阳光、房屋、海岸、海面、水面的栏杆、水中的太阳组成。通过观察可以发现画面上有许多重复的元素，比如水面的横线、远处房屋的窗户。猜测作者使用了重复的元素来构成图形。类似以往我们在其他项目见过一些 非 Canvas、非 SVG 作画，它们不外乎都是使用节点进行定位，然后再使用 CSS 样式绘制，最后组合成一张图片。")]),a._v(" "),t("p",[a._v("我们可以使用这两种比较便捷的方法，查看指定元素：")]),a._v(" "),t("ul",[t("li",[a._v("通过 "),t("keyboard",[a._v("Ctrl + Shift + C")]),a._v(" 我们可以快速定位到相关元素。")],1),a._v(" "),t("li",[a._v("把相关节点的透明度设为 0，或者调整其背景颜色，查看它在画面中的表现。")])]),a._v(" "),t("h3",{attrs:{id:"多重阴影"}},[a._v("多重阴影")]),a._v(" "),t("p",[a._v("先从看面横线开始。定位到该元素的节点。取消其 "),t("code",[a._v("transform")]),a._v(" 属性。能看出它是由两种颜色的、多组长度的圆角矩形组成的，如下图：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/browser_a5aNdMBsJV.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("sea line")])]),a._v(" "),t("p",[a._v("再定位父元素的 "),t("code",[a._v("::before")]),a._v(" 及 "),t("code",[a._v("::after")]),a._v(" 伪元素，查看控制台的样式面板，可以知道横线是由 box-shadow 属性绘制的，如下图：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/browser_79GatmjU32.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("sea line box-shadow")])]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("box-shadow")]),a._v(" 画图其实是常见操作了，主要是利用其两点特性：")]),a._v(" "),t("p",[a._v("*可以通过逗号分隔实现多组输入（比如某些场景下 DIV 多边框就是这么做的）\n*可以精准的控制其大小、位移、颜色等属性")]),a._v(" "),t("p",[a._v("有一点要注意，节点的形状决定了其阴影的形状。也就是说，如果你的节点是方形，那么 Box-Shadow 就是方形，这是一个"),t("a",{attrs:{href:"https://css-tricks.com/the-shapes-of-css/#space-invader",target:"_blank",rel:"noopener noreferrer"}},[a._v("示例")]),a._v("。")]),a._v(" "),t("p",[a._v("大致总结一下，使用父元素进行形变和定位，然后通过父元素的 "),t("code",[a._v("::after")]),a._v(" "),t("code",[a._v("::before")]),a._v(" 两种伪元素的 box-shadow 绘制两种不同颜色的线条，这就是海面横线的绘制思路。其实其它图案也是这种定位+样式的思路画出来的，我们以这栋房屋举例：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/2020-03-19-14-20-58.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("房屋")])]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/h6yxZsWcU3.gif",alt:"",loading:"lazy"}}),t("figcaption",[a._v("房屋")])]),a._v(" "),t("ul",[t("li",[a._v("屋顶：父元素 "),t("code",[a._v("border-bottom")]),a._v(" + 父元素 "),t("code",[a._v("::before")])]),a._v(" "),t("li",[a._v("窗户: 父元素 "),t("code",[a._v("::after")])])]),a._v(" "),t("p",[a._v("这幅画中其它图形基本上用的都是这种思路，就在此略过了。")]),a._v(" "),t("h3",{attrs:{id:"多重背景"}},[a._v("多重背景")]),a._v(" "),t("p",[a._v("现在我们看到水面纹理（也就是水面那些点点），它是使用 "),t("code",[a._v("background-image")]),a._v(" 属性进行绘制的：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/browser_0pEYpYHqlu.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("sea line box-shadow")])]),a._v(" "),t("p",[a._v("通过 "),t("code",[a._v("background-repeat")]),a._v(" 属性可以创建出重复的背景图案。而在这幅图片中，点与点在竖向排列是有偏移的，所以看起来像是斜着排列。达到这种效果只需要通过逗号分隔来给 "),t("code",[a._v("background-image")]),a._v(" 设置多重背景就可以了，同时，"),t("code",[a._v("background-size")]),a._v(" 也可以由逗号分隔开，分别设置每一个背景的偏移量。下段代码是一个示例：")]),a._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[a._v(".example")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("background-image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("background-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1rem 1rem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("background-position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" .5rem .5rem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("background-image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("radial-gradient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("red 20%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rgba")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("radial-gradient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("red 20%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rgba")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("结果如下：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/2020-03-19-09-31-44.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("结果")])]),a._v(" "),t("p",[a._v("通过结合 "),t("code",[a._v("background-image")]),a._v("、"),t("code",[a._v("blend-mode")]),a._v("、渐变等各种可玩的东西，能创造出超多漂亮图案，如"),t("a",{attrs:{href:"https://codepen.io/yuanchuan/pen/yxwbXP?__cf_chl_jschl_tk__=21a7d3862a10890a1d5f1a760a8ed1a18fdac246-1584579867-0-Ad4vsPq-O265YtPPTvBmhnofuY1Z3_zrj9Uhu6ajpiBLm2iYEOYRwiRcsj9l84ZRgF7NAXtddCL7Y3kiQUXHJO2s-eaSl4PIaUogKxEcP4XRuIBEEOkwpKPiuBHkeJ3N4v4LxYauBpNC5ug8glJyfpAsMiLraRlOG0ao96kD4YJPIpkK1pfkov2_pZxO6AEAUusYfJi5vuE5rKpro_W1h4lMf02dNjIz-fLO7d_xm5sGwUQ0l98BnBns9jQpaBQFghxatbDily_m67z3R36z8G9mRIhcYFkTf6q1r-El-cMseQ9YdMT7q7XoYG6zjBQ4Tu_aB0RD3WJHg5MT0YlVaWwrmFXbmOHOVr9cm1W2fPs1",target:"_blank",rel:"noopener noreferrer"}},[a._v("示例")])]),a._v(" "),t("h2",{attrs:{id:"一些细节补充"}},[a._v("一些细节补充")]),a._v(" "),t("h3",{attrs:{id:"水面纹理的消失"}},[a._v("水面纹理的消失")]),a._v(" "),t("p",[a._v("细心的同学应该发现了，水面纹理在接近太阳倒影的地方，看起来像逐渐消失了一样：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/2020-03-19-14-08-01.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("逐渐消失")])]),a._v(" "),t("p",[a._v("这是因为接近太阳倒影的地方，作者加了一层颜色与水面纹理颜色相同的渐变。如果我们去掉这层渐变，就会发现“逐渐消失”其实是一种错觉，水面纹理一直存在：")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/2020-03-19-14-12-32.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("错觉")])]),a._v(" "),t("h3",{attrs:{id:"太阳及其炫光"}},[a._v("太阳及其炫光")]),a._v(" "),t("figure",{attrs:{"data-type":"image"}},[t("img",{attrs:{src:"https://mgear-image.oss-cn-shanghai.aliyuncs.com/image/200319/2020-03-19-15-39-43.png",alt:"",loading:"lazy"}}),t("figcaption",[a._v("太阳及其炫光")])]),a._v(" "),t("p",[a._v("有一个需要注意的细节是，太阳本身在 z 轴的位置与房屋相比要离我们远一些，而太阳的炫光却展示在了房屋前面。这是一个 DOM 节点位置的特殊处理。")]),a._v(" "),t("p",[a._v("相关代码细节就大致如此了，谁代我问问作者的手是在哪儿买的呀？")]),a._v(" "),t("h2",{attrs:{id:"图像分解"}},[a._v("图像分解")]),a._v(" "),t("h2",{attrs:{id:"后语"}},[a._v("后语")]),a._v(" "),t("p",[a._v("源码地址在此："),t("a",{attrs:{href:"https://codepen.io/ivorjetski/full/xxGYWQG?__cf_chl_jschl_tk__=a55cdb17c4b42febf3974e3c08ccaf375a8fc0af-1584572770-0-AdnTpQP5NZBuJK9o0_3xUC8CWeSlBn_m1ERY9QtqJCkrIkveuPApkn1jbadFP6sizNQxJ0VC-dumoTdvuurOYcBbsuM1DeEhG8oOcGbiuImN3Ytw4OOQcrh1DKODcRkf9cohcDWJZsxZRU_-ktJqw5HSke7HUINtpnMlDgg23n3SOSHUb7q7XufBhcv-yjiQbwnsc8Qo2o9D83ra-NcQSGvFctMWplTy0koFTRzzvtehPFsqqwdqNBEQBM-maBK3-h8z8_wJ0aftUwGJ2x5HunldM_lYtA92o8KrgcX2GcXWbjslZbKKIYeV6VmhxHCUBjernlYATOVOHTZWMl3MNhRakl7wK1h7a0IxEoplnPpo",target:"_blank",rel:"noopener noreferrer"}},[a._v("源码地址")])]),a._v(" "),t("h3",{attrs:{id:"阅读更多"}},[a._v("阅读更多")]),a._v(" "),t("p",[a._v("脑洞再大一些：")]),a._v(" "),t("ul",[t("li",[a._v("当节点只占一个像素的时候，我们就可以通过多重阴影可以画出任何图像了... 咳咳... 性能杀手，见这位老哥的示例："),t("a",{attrs:{href:"https://github.com/Jiasm/box-shadow-image-generator",target:"_blank",rel:"noopener noreferrer"}},[a._v("box-shadow-image-generator")])]),a._v(" "),t("li",[a._v("在使用节点定位+样式绘制的思路中，如果有规律的组合节点及其样式，也就是说如果将重用的思想发挥到极致的话... 也有这种项目："),t("a",{attrs:{href:"https://css-doodle.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS-doodle")])])]),a._v(" "),t("p",[t("ruby",[a._v("帅气的程序哥哥，漂亮的设计姐姐们，点个赞再走呗 "),t("strong",[a._v("o("),t("em",[a._v("￣ ▽ ￣")]),a._v(")o")]),a._v(" "),t("rt",[a._v("明示点赞")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);