(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{560:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"移动端前端适配方案（总结）-面试重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端前端适配方案（总结）-面试重点","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动端前端适配方案（总结） -- 面试重点")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#首先，谈一下目前为止出现的一些关于移动端适配的技术方案："}},[t._v("首先，谈一下目前为止出现的一些关于移动端适配的技术方案：")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-media-queries"}},[t._v("1.Media Queries")])]),a("li",[a("a",{attrs:{href:"#_2-flex-弹性布局"}},[t._v("2.Flex 弹性布局")])]),a("li",[a("a",{attrs:{href:"#_3-rem-viewport-缩放"}},[t._v("3.rem + viewport 缩放")])]),a("li",[a("a",{attrs:{href:"#_4、rem-实现"}},[t._v("4、rem 实现")])])])]),a("li",[a("a",{attrs:{href:"#_1-像素边框高清"}},[t._v("1 像素边框高清")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-淘宝实现方式"}},[t._v("1.淘宝实现方式")])]),a("li",[a("a",{attrs:{href:"#box-shadow"}},[t._v("box-shadow")])]),a("li",[a("a",{attrs:{href:"#_2-图片实现"}},[t._v("2.图片实现")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"首先，谈一下目前为止出现的一些关于移动端适配的技术方案："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先，谈一下目前为止出现的一些关于移动端适配的技术方案：","aria-hidden":"true"}},[t._v("#")]),t._v(" 首先，谈一下目前为止出现的一些关于移动端适配的技术方案：")]),t._v(" "),a("ol",[a("li",[t._v("通过媒体查询的方式即 CSS3 的 meida queries")]),t._v(" "),a("li",[t._v("以天猫首页为代表的 flex 弹性布局")]),t._v(" "),a("li",[t._v("以淘宝首页为代表的 rem+viewport 缩放")]),t._v(" "),a("li",[t._v("rem 方式")])]),t._v(" "),a("h3",{attrs:{id:"_1-media-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-media-queries","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.Media Queries")]),t._v(" "),a("p",[a("code",[t._v("meida queries")]),t._v(" 的方式可以说是我早期采用的布局方式，它主要是通过查询设备的宽度来执行不同的 "),a("code",[t._v("css")]),t._v(" 代码，最终达到界面的配置。核心语法是：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*当屏幕尺寸小于600px时，应用下面的CSS样式*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*你的css代码*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("优点")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("media query")]),t._v("可以做到设备像素比的判断，方法简单，成本低，特别是对移动和 PC 维护同一套代码的时候。目前像"),a("code",[t._v("Bootstrap")]),t._v("等框架使用这种方式布局")]),t._v(" "),a("li",[t._v("图片便于修改，只需修改 css 文件")]),t._v(" "),a("li",[t._v("调整屏幕宽度的时候不用刷新页面即可响应式展示")])]),t._v(" "),a("p",[a("strong",[t._v("缺点")])]),t._v(" "),a("ul",[a("li",[t._v("代码量比较大，维护不方便")]),t._v(" "),a("li",[t._v("为了兼顾大屏幕或高清设备，会造成其他设备资源浪费，特别是加载图片资源")]),t._v(" "),a("li",[t._v("为了兼顾移动端和 PC 端各自响应式的展示效果，难免会损失各自特有的交互方式")])]),t._v(" "),a("h3",{attrs:{id:"_2-flex-弹性布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-弹性布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.Flex 弹性布局")]),t._v(" "),a("p",[t._v("以天猫的实现方式进行说明："),a("br"),t._v("\n它的 viewport 是固定的："),a("code",[t._v('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">')])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/prepare/mobile/19120701.png"),alt:"prepare/mobile/19120701.png"}}),t._v(" "),a("p",[t._v("高度定死，宽度自适应，元素都采用"),a("code",[t._v("px")]),t._v("做单位。")]),t._v(" "),a("p",[t._v("随着屏幕宽度变化，页面也会跟着变化，效果就和 PC 页面的流体布局差不多，在哪个宽度需要调整的时候使用响应式布局调调就行（比如网易新闻），这样就实现了『适配』。")]),t._v(" "),a("h3",{attrs:{id:"_3-rem-viewport-缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-rem-viewport-缩放","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.rem + viewport 缩放")]),t._v(" "),a("p",[t._v("这也是淘宝使用的方案，根据屏幕宽度设定 "),a("code",[t._v("rem")]),t._v(" 值，需要适配的元素都使用 "),a("code",[t._v("rem")]),t._v(" 为单位，不需要适配的元素还是使用 "),a("code",[t._v("px")]),t._v(" 为单位。（1em = 16px）")]),t._v(" "),a("p",[t._v("PS：rem "),a("br"),t._v("\nrem 是 CSS3 新增的一个相对单位（root em，根 em），这个单位引起了广泛关注。这个单位与 em 有什么区别呢？"),a("br"),t._v("\n区别在于使用 rem 为元素设定字体大小时，仍然是相对大小，但相对的只是 HTML 根元素。这个单位可谓集相对大小和绝对\n大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁\n反应。"),a("br"),t._v("\n目前，除了 IE8 及更早版本外，所有浏览器均已支持"),a("code",[t._v("rem")]),t._v("。对于不支持它的浏览器，应对方法也很简单，就是多写一\n个绝对单位的声明。这些浏览器会忽略用 rem 设定的字体大小。比如："),a("code",[t._v("p{font-size:14px;font-size:0.875rem;}")])]),t._v(" "),a("p",[t._v("(推荐一个单位转换的工具：http://pxtoem.com/)")]),t._v(" "),a("p",[a("strong",[t._v("实现原理")])]),t._v(" "),a("p",[t._v("根据"),a("code",[t._v("rem")]),t._v("将页面放大"),a("code",[t._v("dpr")]),t._v("倍, 然后"),a("code",[t._v("viewport")]),t._v("设置为"),a("code",[t._v("1/dpr")]),t._v(".")]),t._v(" "),a("p",[t._v("如 iphone6 plus 的 dpr 为 3, 则页面整体放大 3 倍, 1px(css 单位)在 plus 下默认为 3px(物理像素)\n然后"),a("code",[t._v("viewport")]),t._v("设置为 1/3, 这样页面整体缩回原始大小. 从而实现高清。")]),t._v(" "),a("p",[t._v("这样整个网页在设备内显示时的页面宽度就会等于设备逻辑像素大小，也就是"),a("code",[t._v("device-width")]),t._v("。"),a("br"),t._v("\n这个"),a("code",[t._v("device-width")]),t._v("的计算公式为："),a("code",[t._v("设备的物理分辨率/(devicePixelRatio * scale)")]),t._v("，\n在 scale 为 1 的情况下，"),a("code",[t._v("device-width = 设备的物理分辨率/devicePixelRatio")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"_4、rem-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、rem-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、rem 实现")]),t._v(" "),a("p",[t._v("比如说“魅族”移动端的实现方式，"),a("code",[t._v("viewport")]),t._v("也是固定的：\n"),a("code",[t._v('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">')]),t._v("。")]),t._v(" "),a("p",[t._v("通过以下代码来控制"),a("code",[t._v("rem")]),t._v("基准值(设计稿以 720px 宽度量取实际尺寸)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置基准值的极限值")]),t._v("\n    g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data-dpr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br")])]),a("p",[a("code",[t._v("css")]),t._v("通过"),a("code",[t._v("sass")]),t._v("预编译，设置量取的"),a("code",[t._v("px")]),t._v("值转化"),a("code",[t._v("rem")]),t._v("的变量"),a("code",[t._v("$px: (1/100)+rem;")])]),t._v(" "),a("h2",{attrs:{id:"_1-像素边框高清"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-像素边框高清","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 像素边框高清")]),t._v(" "),a("h3",{attrs:{id:"_1-淘宝实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-淘宝实现方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.淘宝实现方式")]),t._v(" "),a("p",[t._v("上面说到的淘宝的实现方式即 "),a("code",[t._v("rem+viewport")]),t._v(" 缩放来实现。")]),t._v(" "),a("p",[a("code",[t._v("transform: scale(0.5)")])]),t._v(" "),a("p",[t._v("CSS 代码：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("缺点")]),t._v("：圆角无法实现，实现 4 条边框比较麻烦，并且只能单独实现，如果嵌套，会对包含的效果产生不想要的效果，所以此方案配合:after 和 before 独立使用较多。")]),t._v(" "),a("h3",{attrs:{id:"box-shadow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-shadow","aria-hidden":"true"}},[t._v("#")]),t._v(" box-shadow")]),t._v(" "),a("p",[t._v("实现方法：")]),t._v(" "),a("p",[t._v("利用 CSS 对阴影处理的方式实现 0.5px 的效果。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 1px 1px -1px "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("优点")]),t._v("：基本所有场景都能满足，包含圆角的 button，单条，多条线。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("颜色不好处理， 黑色 rgba(0,0,0,1) 最深的情况了。有阴影出现，不好用。")]),t._v(" "),a("li",[t._v("大量使用 box-shadow 可能会导致性能瓶颈。")]),t._v(" "),a("li",[t._v("四条边框实现效果不理想。")])]),t._v(" "),a("h3",{attrs:{id:"_2-图片实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-图片实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.图片实现")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("background-image")]),t._v(" 实现 1px 有两种方式: 渐变 "),a("code",[t._v("linear-gradient")]),t._v(" 或直接使用图片(base64)。")]),t._v(" "),a("p",[a("code",[t._v("渐变 linear-gradient (50%有颜色，50%透明)")])]),t._v(" "),a("p",[t._v("单条线：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #000 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" top left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no-repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("多线条：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #000 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #000 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        transparent 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        #000 50%\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #000 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100% 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100% 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1px 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1px 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no-repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" top left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("优点:")]),t._v(" "),a("ul",[a("li",[t._v("可以设置单条,多条边框")]),t._v(" "),a("li",[t._v("可以设置颜色")])]),t._v(" "),a("p",[t._v("缺点:")]),t._v(" "),a("ul",[a("li",[t._v("大量使用渐变可能导致性能瓶颈")]),t._v(" "),a("li",[t._v("代码量大")]),t._v(" "),a("li",[t._v("多背景图片有兼容性问题")])])])}),[],!1,null,null,null);s.default=e.exports}}]);