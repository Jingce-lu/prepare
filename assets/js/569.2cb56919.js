(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{790:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"prepare-html-121-140"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-html-121-140","aria-hidden":"true"}},[t._v("#")]),t._v(" Prepare Html 121-140")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#第121天-请描述下application-cache的更新过程？"}},[t._v("第121天 请描述下application cache的更新过程？")])]),s("li",[s("a",{attrs:{href:"#第122天-说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？"}},[t._v("第122天 说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？")])]),s("li",[s("a",{attrs:{href:"#第123天-使用canvas画出一个矩形"}},[t._v("第123天 使用canvas画出一个矩形")])]),s("li",[s("a",{attrs:{href:"#第124天-html5规范将元素分为哪几个大类？分别说说它们的特点"}},[t._v("第124天 HTML5规范将元素分为哪几个大类？分别说说它们的特点")])]),s("li",[s("a",{attrs:{href:"#第125天-举例说明table怎么合并行和列的？"}},[t._v("第125天 举例说明table怎么合并行和列的？")])]),s("li",[s("a",{attrs:{href:"#第126天-请说说canvas和svg图形的区别是什么？"}},[t._v("第126天 请说说Canvas和SVG图形的区别是什么？")])]),s("li",[s("a",{attrs:{href:"#第127天-html的button中的reset有什么作用？"}},[t._v("第127天 html的button中的reset有什么作用？")])]),s("li",[s("a",{attrs:{href:"#第128天-精灵图和base64如何选择呢？"}},[t._v("第128天 精灵图和base64如何选择呢？")])]),s("li",[s("a",{attrs:{href:"#第129天-请问websql是html5的一个规范吗？"}},[t._v("第129天 请问WebSql是HTML5的一个规范吗？")])]),s("li",[s("a",{attrs:{href:"#第130天-你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？"}},[t._v("第130天 你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？")])]),s("li",[s("a",{attrs:{href:"#第131天-table去除边框的方法有哪些？"}},[t._v("第131天 table去除边框的方法有哪些？")])]),s("li",[s("a",{attrs:{href:"#第132天-触发form表单自动提交的方式有哪些"}},[t._v("第132天 触发form表单自动提交的方式有哪些")])]),s("li",[s("a",{attrs:{href:"#第133天-canvas默认画布的尺寸是多大？怎样设置才能不会变形？"}},[t._v("第133天 canvas默认画布的尺寸是多大？怎样设置才能不会变形？")])]),s("li",[s("a",{attrs:{href:"#第134天-web-worker线程的限制是什么？"}},[t._v("第134天 Web Worker线程的限制是什么？")])]),s("li",[s("a",{attrs:{href:"#第135天-如何刷新浏览器的应用缓存？"}},[t._v("第135天 如何刷新浏览器的应用缓存？")])]),s("li",[s("a",{attrs:{href:"#第136天-html5的服务器-server-sent-event-发送事件有什么应用场景？"}},[t._v("第136天 HTML5的服务器(server-sent event)发送事件有什么应用场景？")])]),s("li",[s("a",{attrs:{href:"#第137天-如何让textarea高度自适应呢？"}},[t._v("第137天 如何让textarea高度自适应呢？")])]),s("li",[s("a",{attrs:{href:"#第138天-请说说应用缓存中的回退和网络分别是什么？"}},[t._v("第138天 请说说应用缓存中的回退和网络分别是什么？")])]),s("li",[s("a",{attrs:{href:"#第139天-如何让textarea标签中的内容原格式输出？"}},[t._v("第139天 如何让textarea标签中的内容原格式输出？")])]),s("li",[s("a",{attrs:{href:"#第140天-说说你对html5的keygen标签的理解，它的作用是什么？"}},[t._v("第140天 说说你对HTML5的keygen标签的理解，它的作用是什么？")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"第121天-请描述下application-cache的更新过程？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第121天-请描述下application-cache的更新过程？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第121天 请描述下application cache的更新过程？")]),t._v(" "),s("p",[t._v("application cache需要一个manifest attribuate来链接cache manifest文件。这个功能可以离线储存，降低page loading时间。这个cache.manifest文件主要包含三个部分：1.cache需要离线储存的内容 2.network只有online才能看见的内容 3. fallback 知道基本概念以后，更新过程主要分为5步：")]),t._v(" "),s("ol",[s("li",[t._v("当浏览器第一次遇到含有manifest attribuate网页，浏览器会根据cache.manifest下载需要储存的内容生成第一版application cache")]),t._v(" "),s("li",[t._v("之后的浏览加载cache里有的话，浏览器会从application cache里拿，而不是从server里拿。同时浏览器还要去跟window.applicationCache检查自己的文件是否为最新的。")]),t._v(" "),s("li",[t._v("如果是最新的，浏览器就会给application cache发送noupdate，更新完毕。")]),t._v(" "),s("li",[t._v("如果不是，会把新版清单里的所有文件通过 applicationCache.add()放入创建一个临时的cache")]),t._v(" "),s("li",[t._v("检索完毕以后会自动放到application cache")])]),t._v(" "),s("h2",{attrs:{id:"第122天-说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第122天-说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第122天 说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？")]),t._v(" "),s("p",[t._v("同：")]),t._v(" "),s("ul",[s("li",[t._v("发送请求的方式")])]),t._v(" "),s("p",[t._v("异：")]),t._v(" "),s("ol",[s("li",[t._v("multipart/form-data 其请求内容格式为Content-Type: multipart/form-data,用来指定请求内容的数据编码格式，一般用来文件上传。")]),t._v(" "),s("li",[t._v("application/x-www-form-urlencoded 是post的默认格式，使用js中URLencode转码方法。")]),t._v(" "),s("li",[t._v("raw 可上传任意格式的文本，可以上传text、json、xml、html等各种文本类型。")]),t._v(" "),s("li",[t._v("binary 等同于Content-Type:application/octet-stream，只可上传二进制数据。")])]),t._v(" "),s("h2",{attrs:{id:"第123天-使用canvas画出一个矩形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第123天-使用canvas画出一个矩形","aria-hidden":"true"}},[t._v("#")]),t._v(" 第123天 使用canvas画出一个矩形")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("300"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("300"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgb(200,0,0)"')]),t._v("\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"第124天-html5规范将元素分为哪几个大类？分别说说它们的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第124天-html5规范将元素分为哪几个大类？分别说说它们的特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 第124天 HTML5规范将元素分为哪几个大类？分别说说它们的特点")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/prepare/html/html191114.png"),alt:"images/prepare/html/html191114.png"}}),t._v(" "),s("h2",{attrs:{id:"第125天-举例说明table怎么合并行和列的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第125天-举例说明table怎么合并行和列的？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第125天 举例说明table怎么合并行和列的？")]),t._v(" "),s("p",[s("code",[t._v("rowspan")]),t._v("属性用在td标签中，用来指定单元格纵向跨越的行数，可以理解为是占了多少位置而不是合并了多少个格子。被占了位置的那一条信息就不用再加同类别td了。")]),t._v(" "),s("h2",{attrs:{id:"第126天-请说说canvas和svg图形的区别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第126天-请说说canvas和svg图形的区别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第126天 请说说Canvas和SVG图形的区别是什么？")]),t._v(" "),s("p",[t._v("Canvas:")]),t._v(" "),s("ul",[s("li",[t._v("依赖分辨率")]),t._v(" "),s("li",[t._v("不支持事件处理器")]),t._v(" "),s("li",[t._v("弱的文本渲染能力")]),t._v(" "),s("li",[t._v("能够以 .png 或 .jpg 格式保存结果图像")]),t._v(" "),s("li",[t._v("最适合图像密集型的游戏，其中的许多对象会被频繁重绘")])]),t._v(" "),s("p",[t._v("SVG:")]),t._v(" "),s("ul",[s("li",[t._v("不依赖分辨率")]),t._v(" "),s("li",[t._v("支持事件处理器")]),t._v(" "),s("li",[t._v("最适合带有大型渲染区域的应用程序（比如谷歌地图）")]),t._v(" "),s("li",[t._v("复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）")]),t._v(" "),s("li",[t._v("不适合游戏应用")])]),t._v(" "),s("h2",{attrs:{id:"第127天-html的button中的reset有什么作用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第127天-html的button中的reset有什么作用？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第127天 html的button中的reset有什么作用？")]),t._v(" "),s("p",[s("code",[t._v('button.type="reset"')]),t._v(" ，重置按钮，即清除表单数据。与form表单配合使用。demo如下：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form_action.asp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  First name: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  Last name: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Submit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("reset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Reset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Reset"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"第128天-精灵图和base64如何选择呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第128天-精灵图和base64如何选择呢？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第128天 精灵图和base64如何选择呢？")]),t._v(" "),s("p",[t._v("精灵图")]),t._v(" "),s("ul",[s("li",[t._v("优点\n"),s("ul",[s("li",[t._v("将多个图像加载请求合并为一个请求")])])]),t._v(" "),s("li",[t._v("弊端\n"),s("ul",[s("li",[t._v("难以维护和更新")]),t._v(" "),s("li",[t._v("增加内存消耗")])])])]),t._v(" "),s("p",[t._v("base64")]),t._v(" "),s("ul",[s("li",[t._v("优点\n"),s("ul",[s("li",[t._v("将多个图像加载请求合并为一个CSS文件请求")]),t._v(" "),s("li",[t._v("轻松更新生成文件")])])]),t._v(" "),s("li",[t._v("弊端\n"),s("ul",[s("li",[t._v("base64编码比原始二进制表示大约大25%")]),t._v(" "),s("li",[t._v("IE6或IE7不支持")])])])]),t._v(" "),s("h2",{attrs:{id:"第129天-请问websql是html5的一个规范吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第129天-请问websql是html5的一个规范吗？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第129天 请问WebSql是HTML5的一个规范吗？")]),t._v(" "),s("p",[t._v("WebSqL 并不是 HTML5 的规范。可以理解为在浏览器中操作一个 Sql 数据库，在移动端上支持程度会比较好，现在已经不在支持。")]),t._v(" "),s("p",[t._v("Web SQL 已经渐渐被废弃了，如果要本地缓存，建议使用 "),s("code",[t._v("IndexedDB")]),t._v(" 替代 Web SQL.")]),t._v(" "),s("h2",{attrs:{id:"第130天-你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第130天-你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第130天 你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？")]),t._v(" "),s("p",[t._v("锚点为 "),s("code",[t._v("HTML")]),t._v(" 文档中的一个特定的位置。比如小节标题、页首、页尾。锚点可以通过 "),s("code",[t._v("a")]),t._v(" 标签来实现。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- href 前一定要加 # 号，这样点击时就会跳转到对应 name 所在的 a 标签位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 锚点的位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("当然，使用 javascript 获取到 DOM 元素之后，也可以根据元素的位置信息，利用 "),s("code",[t._v("scrollTop")]),t._v(" 来进行页面位置的跳转。")]),t._v(" "),s("h2",{attrs:{id:"第131天-table去除边框的方法有哪些？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第131天-table去除边框的方法有哪些？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第131天 table去除边框的方法有哪些？")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("border-style: hidden;")])]),t._v(" "),s("li",[s("code",[t._v("border: 0;")])]),t._v(" "),s("li",[s("code",[t._v("border: hidden;")])]),t._v(" "),s("li",[s("code",[t._v("border-width: 0;")])]),t._v(" "),s("li",[s("code",[t._v("border: transparent;")])])]),t._v(" "),s("h2",{attrs:{id:"第132天-触发form表单自动提交的方式有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第132天-触发form表单自动提交的方式有哪些","aria-hidden":"true"}},[t._v("#")]),t._v(" 第132天 触发form表单自动提交的方式有哪些")]),t._v(" "),s("p",[s("code",[t._v("form")]),t._v(" 本身自带提交表单的方式。在 "),s("code",[t._v("form")]),t._v(" 上可以定义 "),s("code",[t._v("method = get/post")]),t._v("、"),s("code",[t._v("action = url")]),t._v("（get 方法时，action 的 URL 后不能带参数）。通过 "),s("code",[t._v('input type="submit"')]),t._v(" 或者 "),s("code",[t._v('button type="submit"')]),t._v(" 可以触发 "),s("code",[t._v("form")]),t._v(" 的提交事件。利用 JavaScript 也可以调用 "),s("code",[t._v("form")]),t._v(" 对象的 submit() 方法来触发提交事件。")]),t._v(" "),s("p",[t._v("使用 form 提交表单会重新刷新页面，在网速较差的情况下会有白屏的情况。当服务端进行校验时，再返回一个带错误提示的页面给用户也会影响体验。在 Ajax 流行后，利用原生 form 进行提交的情况变少了。")]),t._v(" "),s("h2",{attrs:{id:"第133天-canvas默认画布的尺寸是多大？怎样设置才能不会变形？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第133天-canvas默认画布的尺寸是多大？怎样设置才能不会变形？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第133天 canvas默认画布的尺寸是多大？怎样设置才能不会变形？")]),t._v(" "),s("p",[t._v("默认画布尺寸为300*150 不加单位。")]),t._v(" "),s("p",[t._v("如果直接在css中设置canvas元素的width和height会导致画面变形。")]),t._v(" "),s("p",[t._v("如果不想画面变形可以直接在标签中设置，或者通过js来设置属性的宽高。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("300"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" can "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'500'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'300'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"第134天-web-worker线程的限制是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第134天-web-worker线程的限制是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第134天 Web Worker线程的限制是什么？")]),t._v(" "),s("p",[t._v("（1）同源限制")]),t._v(" "),s("p",[t._v("分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。")]),t._v(" "),s("p",[t._v("（2）DOM 限制")]),t._v(" "),s("p",[t._v("Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。")]),t._v(" "),s("p",[t._v("（3）通信联系")]),t._v(" "),s("p",[t._v("Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。")]),t._v(" "),s("p",[t._v("（4）脚本限制")]),t._v(" "),s("p",[t._v("Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。")]),t._v(" "),s("p",[t._v("（5）文件限制")]),t._v(" "),s("p",[t._v("Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。")]),t._v(" "),s("h2",{attrs:{id:"第135天-如何刷新浏览器的应用缓存？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第135天-如何刷新浏览器的应用缓存？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第135天 如何刷新浏览器的应用缓存？")]),t._v(" "),s("p",[t._v("浏览器缓存可分为强缓存和协商缓存。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("强缓存")]),t._v("指的是设置了expires或者cache-control:max-age的请求，此类缓存在设定的过期时间之前刷新不会再次向浏览器发起请求，直接由客户端决定使用缓存进行页面展示。")]),t._v(" "),s("li",[s("strong",[t._v("协商缓存")]),t._v("指的是未设置强缓存对应字段的缓存，浏览器会向服务器发送请求，并带IF-Modified-Since和IF-None-Match字段，服务器对应的返回字段为Last-Modified或 Etag，如果在etag未更改 或 last-modified 的时间早于IF-Modified-Since 则服务器不返回文件，使用浏览器本地缓存。")])]),t._v(" "),s("p",[t._v("回到问题，如何刷新应用缓存。"),s("br"),t._v("\n当你直接点击浏览器的刷新按钮或者F5刷新时，浏览器会忽略强缓存，必定向服务器发起请求，但是如果服务器返回304则会继续使用本地缓存。"),s("br"),t._v("\n当点击Ctrl+F5 浏览器会忽略一切缓存（cache-control:no-cache），向服务器发起请求，并且一定会使用服务器的返回来渲染页面。")]),t._v(" "),s("h2",{attrs:{id:"第136天-html5的服务器-server-sent-event-发送事件有什么应用场景？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第136天-html5的服务器-server-sent-event-发送事件有什么应用场景？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第136天 HTML5的服务器(server-sent event)发送事件有什么应用场景？")]),t._v(" "),s("p",[t._v("两种服务端推送技术的简单对比:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("SSE")]),t._v(" "),s("th",[t._v("WebSocket")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("服务器到浏览器的单向通信")]),t._v(" "),s("td",[t._v("两端之间的双向实时通信")])]),t._v(" "),s("tr",[s("td",[t._v("不兼容IE")]),t._v(" "),s("td",[t._v("兼容性更好")])]),t._v(" "),s("tr",[s("td",[t._v("协议实现断线重连与消息追踪")]),t._v(" "),s("td",[t._v("不在协议范围内, 需要手动处理")])]),t._v(" "),s("tr",[s("td",[t._v("实现简单, 复用HTTP")]),t._v(" "),s("td",[t._v("独立于Http, 实现较复杂")])])])]),t._v(" "),s("p",[t._v("回到问题, 在客户端请求不影响服务端推送数据或客户端请求以及客户端请求不密集的情况下可以考虑使用SSE代替WebSocket.")]),t._v(" "),s("p",[t._v("具体的应用场景有:")]),t._v(" "),s("ol",[s("li",[t._v("邮箱: 实时获取新邮件")]),t._v(" "),s("li",[t._v("后台性能监控: 实时更新监控数据")]),t._v(" "),s("li",[t._v("天气预报: 实时更新天气信息")])]),t._v(" "),s("h2",{attrs:{id:"第137天-如何让textarea高度自适应呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第137天-如何让textarea高度自适应呢？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第137天 如何让textarea高度自适应呢？")]),t._v(" "),s("p",[t._v("监听 input 事件，元素高度 = 元素可滚动高度")]),t._v(" "),s("p",[t._v("推荐看看 ant-design 和 elementUI 的源码设计即可。")]),t._v(" "),s("p",[t._v("https://github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js#L73")]),t._v(" "),s("p",[t._v("https://github.com/ant-design/ant-design/blob/master/components/input/calculateNodeHeight.tsx#L88")]),t._v(" "),s("h2",{attrs:{id:"第138天-请说说应用缓存中的回退和网络分别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第138天-请说说应用缓存中的回退和网络分别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第138天 请说说应用缓存中的回退和网络分别是什么？")]),t._v(" "),s("p",[t._v("应用缓存中的回退，指在服务器不可访问时，将会显示某文件。")]),t._v(" "),s("p",[t._v("FALLBACK:\n/home/ /homeoffline.html")]),t._v(" "),s("p",[t._v("网络命令描述不需要缓存的文件，例如以下代码中，我们说”home.aspx”永远都不应该被缓存或者离线访问。")]),t._v(" "),s("p",[t._v("NETWORK:\nhome.aspx")]),t._v(" "),s("h2",{attrs:{id:"第139天-如何让textarea标签中的内容原格式输出？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第139天-如何让textarea标签中的内容原格式输出？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第139天 如何让textarea标签中的内容原格式输出？")]),t._v(" "),s("p",[s("code",[t._v("white-space: pre")]),t._v(";可以考虑")]),t._v(" "),s("h2",{attrs:{id:"第140天-说说你对html5的keygen标签的理解，它的作用是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第140天-说说你对html5的keygen标签的理解，它的作用是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 第140天 说说你对HTML5的keygen标签的理解，它的作用是什么？")]),t._v(" "),s("blockquote",[s("p",[t._v("已废弃\n该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。")])]),t._v(" "),s("p",[s("code",[t._v("<keygen>")]),t._v("是为了方便生成密钥材料和提交作为 HTML form 的一部分的公钥.这种机制被用于设计基于 Web 的证书管理系统。按照预想， 元素将用于 HTML 表单与其他的所需信息一起构造一个证书请求，该处理的结果将是一个带有签名的证书。")])])}),[],!1,null,null,null);a.default=e.exports}}]);