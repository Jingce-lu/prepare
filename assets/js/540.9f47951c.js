(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{901:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-181-200"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-181-200"}},[t._v("#")]),t._v(" React 181-200")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_181-render方法的原理你有了解吗-它返回的数据类型是什么"}},[t._v("181.render方法的原理你有了解吗？它返回的数据类型是什么？")])]),a("li",[a("a",{attrs:{href:"#_182-useeffect和uselayouteffect有什么区别"}},[t._v("182.useEffect和useLayoutEffect有什么区别？")]),a("ul",[a("li",[a("a",{attrs:{href:"#useeffect"}},[t._v("useEffect")])]),a("li",[a("a",{attrs:{href:"#uselayouteffect"}},[t._v("useLayoutEffect")])])])]),a("li",[a("a",{attrs:{href:"#_183-需要把keys设置为全局唯一吗"}},[t._v("183.需要把keys设置为全局唯一吗？")])]),a("li",[a("a",{attrs:{href:"#_184-怎么定时更新一个组件"}},[t._v("184.怎么定时更新一个组件？")])]),a("li",[a("a",{attrs:{href:"#_185-react根据不同的环境打包不同的域名"}},[t._v("185.React根据不同的环境打包不同的域名？")])]),a("li",[a("a",{attrs:{href:"#_186-使用webpack打包react项目-怎么减小生成的js大小"}},[t._v("186.使用webpack打包React项目，怎么减小生成的js大小？")])]),a("li",[a("a",{attrs:{href:"#_187-说说你对react的reconciliation-一致化算法-的理解"}},[t._v("187.说说你对React的reconciliation（一致化算法）的理解")])]),a("li",[a("a",{attrs:{href:"#_188-使用proptypes和flow有什么区别"}},[t._v("188.使用PropTypes和Flow有什么区别？")])]),a("li",[a("a",{attrs:{href:"#_189-constructor和getinitialstate有不同"}},[t._v("189.constructor和getInitialState有不同？")])]),a("li",[a("a",{attrs:{href:"#_190-react-v15中怎么处理错误边界"}},[t._v("190.React v15中怎么处理错误边界？")])]),a("li",[a("a",{attrs:{href:"#_191-react-fiber它的目的是解决什么问题"}},[t._v("191.React Fiber它的目的是解决什么问题？")])]),a("li",[a("a",{attrs:{href:"#_192-react为什么不要直接修改state-如果想修改怎么做"}},[t._v("192.React为什么不要直接修改state？如果想修改怎么做？")])]),a("li",[a("a",{attrs:{href:"#_193-react为什么要搞一个hooks"}},[t._v("193.React为什么要搞一个Hooks？")])]),a("li",[a("a",{attrs:{href:"#_194-react中在哪捕获错误"}},[t._v("194.React中在哪捕获错误？")])]),a("li",[a("a",{attrs:{href:"#_195-说说你对relay的理解"}},[t._v("195.说说你对Relay的理解")])]),a("li",[a("a",{attrs:{href:"#_196-为什么说react中的props是只读的"}},[t._v("196.为什么说React中的props是只读的？")])]),a("li",[a("a",{attrs:{href:"#_197-你有使用过formik库吗-说说它的优缺点"}},[t._v("197.你有使用过formik库吗？说说它的优缺点")])]),a("li",[a("a",{attrs:{href:"#_198-你有了解rxjs是什么吗-它是做什么的"}},[t._v("198.你有了解Rxjs是什么吗？它是做什么的？")])]),a("li",[a("a",{attrs:{href:"#_199-使用react的memo和forwardref包装的组件为什么提示children类型不对"}},[t._v("199.使用React的memo和forwardRef包装的组件为什么提示children类型不对？")])]),a("li",[a("a",{attrs:{href:"#_200-为什么标签里的for要写成htmlfor呢"}},[t._v("200.为什么标签里的for要写成htmlFor呢？")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_181-render方法的原理你有了解吗-它返回的数据类型是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_181-render方法的原理你有了解吗-它返回的数据类型是什么"}},[t._v("#")]),t._v(" 181.render方法的原理你有了解吗？它返回的数据类型是什么？")]),t._v(" "),a("ul",[a("li",[t._v("返回数组"),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("First item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Second item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Third item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("li",[t._v("返回字符串"),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"_182-useeffect和uselayouteffect有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_182-useeffect和uselayouteffect有什么区别"}},[t._v("#")]),t._v(" 182.useEffect和useLayoutEffect有什么区别？")]),t._v(" "),a("h3",{attrs:{id:"useeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),a("p",[t._v("基本上90%的情况下,都应该用这个,这个是在render结束后,你的callback函数执行,但是不会block browser painting,算是某种异步的方式吧,但是class的componentDidMount 和componentDidUpdate是同步的,在render结束后就运行,useEffect在大部分场景下都比class的方式性能更好.")]),t._v(" "),a("h3",{attrs:{id:"uselayouteffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect"}},[t._v("#")]),t._v(" useLayoutEffect")]),t._v(" "),a("p",[t._v("这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制.")]),t._v(" "),a("p",[t._v("可能讲的不是很清楚,看个例子吧")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useLayoutEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useRef "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TweenMax "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gsap/TweenMax"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.less'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Animate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" REl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*下面这段代码的意思是当组件加载完成后,在0秒的时间内,将方块的横坐标位置移到600px的位置*/")]),t._v("\n        TweenMax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("REl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'animate'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"square"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("square"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Animate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h2",{attrs:{id:"_183-需要把keys设置为全局唯一吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_183-需要把keys设置为全局唯一吗"}},[t._v("#")]),t._v(" 183.需要把keys设置为全局唯一吗？")]),t._v(" "),a("p",[t._v("不需要,key是用来进行diff算法的时候进行同层比较,准备的说key只需要在兄弟节点之间唯一,一般情况key选取是后端定义的id.万不得已的时候可以选择index(选择index是万不得已的选择,因为选择了index后,一些操作会改变index的值,违背了唯一不变,在进行diff算法的时候出现问题)")]),t._v(" "),a("h2",{attrs:{id:"_184-怎么定时更新一个组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_184-怎么定时更新一个组件"}},[t._v("#")]),t._v(" 184.怎么定时更新一个组件？")]),t._v(" "),a("p",[t._v("先通过类的方式定义一个Clock的类，然后render函数来表明要在浏览器中显示的内容，使用return返回JSX语法标签。当将返回的元素，通过ReactDOM.render()加载到浏览器中的DOM树中，然后调用钩子函数componentDidMount（），设置一个定时器吗，每隔一秒设置更新一次初始化的state状态。")]),t._v(" "),a("h2",{attrs:{id:"_185-react根据不同的环境打包不同的域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_185-react根据不同的环境打包不同的域名"}},[t._v("#")]),t._v(" 185.React根据不同的环境打包不同的域名？")]),t._v(" "),a("ul",[a("li",[t._v("方案一：每次打包之前更改 axios.defaults.baseURL")]),t._v(" "),a("li",[t._v("方案二：配置相应的build命令")])]),t._v(" "),a("p",[t._v("打开文件，更改"),a("code",[t._v("process.env.NODE_ENV")]),t._v("值\nconfig.js")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" BaseParam "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fetchUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://baidu.com/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"st"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://jianshu.com/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://github.com/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://baidu.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("将config.js引入自定义的axios方法文件内")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" qs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("BaseParam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../unit/config'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("openid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseParam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"_186-使用webpack打包react项目-怎么减小生成的js大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_186-使用webpack打包react项目-怎么减小生成的js大小"}},[t._v("#")]),t._v(" 186.使用webpack打包React项目，怎么减小生成的js大小？")]),t._v(" "),a("ol",[a("li",[t._v("分离出业务代码和第三方库")]),t._v(" "),a("li",[t._v("分离css")]),t._v(" "),a("li",[t._v("清除打包后的文件中的注释, 和copyright信息")]),t._v(" "),a("li",[t._v("引入的React切换到产品版本")]),t._v(" "),a("li",[t._v("js确实混淆压缩了，可是里面含有大量的开源库的copyright信息，可以去掉。")])]),t._v(" "),a("h2",{attrs:{id:"_187-说说你对react的reconciliation-一致化算法-的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_187-说说你对react的reconciliation-一致化算法-的理解"}},[t._v("#")]),t._v(" 187.说说你对React的reconciliation（一致化算法）的理解")]),t._v(" "),a("p",[t._v("它的作用是React用来区分一棵节点树和另一棵节点树的算法，以确定哪些部分需要更改。")]),t._v(" "),a("p",[t._v("Reconciliation是通常被理解为“虚拟DOM”背后的算法。")]),t._v(" "),a("p",[t._v("简单描述就是：当您渲染React应用时，会生成描述该应用的节点树并将其保存在内存中。然后将该节点树刷新到渲染环境 - 例如，在浏览器应用程序的情况下，它会转换为一组DOM操作。当应用程序更新（比如，通过setState）时，会生成一棵新树。对比得到新树与前一棵树的区别，以计算需要更新渲染应用的操作。")]),t._v(" "),a("h2",{attrs:{id:"_188-使用proptypes和flow有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_188-使用proptypes和flow有什么区别"}},[t._v("#")]),t._v(" 188.使用PropTypes和Flow有什么区别？")]),t._v(" "),a("p",[t._v("Flow是一种静态分析工具，它使用语言的超集，允许您为所有代码添加类型注释，并在编译时捕获整个类的错误。")]),t._v(" "),a("p",[t._v("PropTypes是一个基本的类型检查器，已经被修补到React。它不能检查除传递给给定组件的道具类型以外的任何东西。")]),t._v(" "),a("p",[t._v("如果您想为整个项目进行更灵活的类型检查，那么Flow / TypeScript是适当的选择。只要您只将注释类型传递到组件中，则不需要PropTypes。")]),t._v(" "),a("p",[t._v("如果您只想检查支柱类型，那么不要过多地复杂您的代码库的其余部分，并使用更简单的选项。")]),t._v(" "),a("h2",{attrs:{id:"_189-constructor和getinitialstate有不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_189-constructor和getinitialstate有不同"}},[t._v("#")]),t._v(" 189.constructor和getInitialState有不同？")]),t._v(" "),a("p",[t._v("这两种方法使用场景不同，应该在使用ES6 class时在构造函数中初始化状态，并在使用React.createClass时定义getInitialState方法。")]),t._v(" "),a("h2",{attrs:{id:"_190-react-v15中怎么处理错误边界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_190-react-v15中怎么处理错误边界"}},[t._v("#")]),t._v(" 190.React v15中怎么处理错误边界？")]),t._v(" "),a("p",[t._v("在react 15 极其以前的版本中,组件内的UI异常将中断组件内部状态，导致下一次渲染时触发隐藏异常。React并未提供友好的异常捕获和处理方式，一旦发生异常，应用将不能很好的运行。而React 16版本有所改进。")]),t._v(" "),a("h2",{attrs:{id:"_191-react-fiber它的目的是解决什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_191-react-fiber它的目的是解决什么问题"}},[t._v("#")]),t._v(" 191.React Fiber它的目的是解决什么问题？")]),t._v(" "),a("p",[t._v('React Fiber的目标是提升对在动画，布局以及手势方面的友好度。它最重要的特性叫做"增量式/渐进式"渲染：即，将渲染工作分割为多个小块进行，并在各个帧之间传播。')]),t._v(" "),a("p",[t._v("其它关键的特性包括，")]),t._v(" "),a("ol",[a("li",[t._v("拥有了暂停，中止以及当有更新来临的时候重新恢复工作的能力。")]),t._v(" "),a("li",[t._v("不同的能力对于不同类型的更新分配不同的优先级。")]),t._v(" "),a("li",[t._v("新的并发原语。")])]),t._v(" "),a("p",[t._v("异步渲染 ui 的解决方案")]),t._v(" "),a("p",[t._v("Fiber 的解题思路： 将 计算任务 分给成一个个小任务，分批完成，在完成一个小任务后，将控制权还给浏览器，让浏览器利用间隙进行 UI 渲染。")]),t._v(" "),a("h2",{attrs:{id:"_192-react为什么不要直接修改state-如果想修改怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_192-react为什么不要直接修改state-如果想修改怎么做"}},[t._v("#")]),t._v(" 192.React为什么不要直接修改state？如果想修改怎么做？")]),t._v(" "),a("p",[t._v("在react中直接修改state，render函数不会重新执行渲染，应使用setState方法进行修改")]),t._v(" "),a("p",[t._v("在 React的生命周期和合成事件中， React仍然处于他的更新机制中，这时无论调用多少次 setState，都不会立即执行更新，而是将要更新的"),a("code",[t._v("·")]),t._v("存入 "),a("code",[t._v("_pendingStateQueue")]),t._v("，将要更新的组件存入 "),a("code",[t._v("dirtyComponent")]),t._v("。")]),t._v(" "),a("p",[t._v("当上一次更新机制执行完毕，以生命周期为例，所有组件，即最顶层组件 "),a("code",[t._v("didmount")]),t._v("后会将批处理标志设置为 false。这时将取出 "),a("code",[t._v("dirtyComponent")]),t._v("中的组件以及 "),a("code",[t._v("_pendingStateQueue")]),t._v("中的 "),a("code",[t._v("state")]),t._v("进行更新。这样就可以确保组件不会被重新渲染多次。")]),t._v(" "),a("p",[t._v("异步代码和原生事件中")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'调用setState'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"state"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("如上面的代码，当我们在异步代码中调用 "),a("code",[t._v("setState")]),t._v("时，根据 "),a("code",[t._v("JavaScript")]),t._v("的异步机制，会将异步代码先暂存，等所有同步代码执行完毕后在执行，这时 "),a("code",[t._v("React")]),t._v("的批处理机制已经走完，处理标志设被设置为 "),a("code",[t._v("false")]),t._v("，这时再调用 "),a("code",[t._v("setState")]),t._v("即可立即执行更新，拿到更新后的结果。")]),t._v(" "),a("p",[a("strong",[t._v("在原生事件中调用 "),a("code",[t._v("setState")]),t._v("并不会触发 React的批处理机制，所以立即能拿到最新结果")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_193-react为什么要搞一个hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_193-react为什么要搞一个hooks"}},[t._v("#")]),t._v(" 193.React为什么要搞一个Hooks？")]),t._v(" "),a("ol",[a("li",[t._v("代码精简，一切都是fn")]),t._v(" "),a("li",[t._v("共享问题（组件，逻辑等）")]),t._v(" "),a("li",[t._v("class原型指向问题混乱？"),a("a",{attrs:{href:"https://overreacted.io/zh-hans/how-does-react-tell-a-class-from-a-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://overreacted.io/zh-hans/how-does-react-tell-a-class-from-a-function"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_194-react中在哪捕获错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_194-react中在哪捕获错误"}},[t._v("#")]),t._v(" 194.React中在哪捕获错误？")]),t._v(" "),a("p",[t._v("在react 15 极其以前的版本中,组件内的UI异常将中断组件内部状态，导致下一次渲染时触发隐藏异常。React并未提供友好的异常捕获和处理方式，一旦发生异常，应用将不能很好的运行。而React 16版本有所改进。")]),t._v(" "),a("p",[t._v("组件内异常，也就是异常边界组件能够捕获的异常，主要包括：")]),t._v(" "),a("ol",[a("li",[t._v("渲染过程中异常；")]),t._v(" "),a("li",[t._v("生命周期方法中的异常；")]),t._v(" "),a("li",[t._v("子组件树中各组件的constructor构造函数中异常。")])]),t._v(" "),a("p",[t._v("当然异常边界也有一些无法捕获的异常，主要是异步及服务端触发异常：")]),t._v(" "),a("ol",[a("li",[t._v("事件处理器中的异常；")]),t._v(" "),a("li",[t._v("异步任务异常，如setTiemout，ajax请求异常等；")]),t._v(" "),a("li",[t._v("服务端渲染异常；")]),t._v(" "),a("li",[t._v("异常边界组件自身内的异常；")])]),t._v(" "),a("h2",{attrs:{id:"_195-说说你对relay的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_195-说说你对relay的理解"}},[t._v("#")]),t._v(" 195.说说你对Relay的理解")]),t._v(" "),a("p",[t._v("Relay是Facebook发布的一个全新的React数据获取框架。 Relay致力于为所有上述这些数据获取问题提供清晰的解决方案。")]),t._v(" "),a("p",[t._v("描述性 Declarative：这也是React的主要特点之一，对于数据依赖，Relay使用了描述性的代码风格定义， 这非常类似于在React中定义视图层组件的方式。这也是和传统的命令式的数据获取API主要不同的地方。")]),t._v(" "),a("p",[t._v("托管 Colocation：数据依赖的定义始终伴随着组件的定义。这使得能够非常简单的推出UI组件需要渲染哪些数据。 这使得解决项目中的代码问题变得非常简单。只需检查一个文件中包含的React组件定义，就能立刻知道函数所需要的数据是什么。")]),t._v(" "),a("p",[t._v("变种 Mutations：它使得无缝的数据修改称为可能，也就是说React视图层会订阅数据，并且能够会将修改传播到数据持久化层。")]),t._v(" "),a("h2",{attrs:{id:"_196-为什么说react中的props是只读的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_196-为什么说react中的props是只读的"}},[t._v("#")]),t._v(" 196.为什么说React中的props是只读的？")]),t._v(" "),a("p",[t._v("react官方文档中说道，组件无论是使用函数声明还是通过class声明，都绝不能修改自身的props，props 作为组件对外通信的一个接口，为了保证组件像纯函数一样没有响应的副作用，所有的组件都必须像纯函数一样保护它们的props不被修改")]),t._v(" "),a("h2",{attrs:{id:"_197-你有使用过formik库吗-说说它的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_197-你有使用过formik库吗-说说它的优缺点"}},[t._v("#")]),t._v(" 197.你有使用过formik库吗？说说它的优缺点")]),t._v(" "),a("ul",[a("li",[t._v("基本类型示例")]),t._v(" "),a("li",[t._v("同步校验示例")]),t._v(" "),a("li",[t._v("开发自己的输入原型")]),t._v(" "),a("li",[t._v("与react-select联合应用")]),t._v(" "),a("li",[t._v("与Draft.js联合应用")]),t._v(" "),a("li",[t._v("访问React生命周期函数")]),t._v(" "),a("li",[t._v("在React Native开发中的应用")])]),t._v(" "),a("p",[t._v("Formik跟踪表单状态，然后以props方式把此状态还有一些可重用的方法和事件处理器（例如 handleChange，handleBlur和handleSubmit暴露给表单组件。其中，handleChange 和handleBlur工作方式完全一样——都使用name或者id属性来标记要更新的表单字段")]),t._v(" "),a("h2",{attrs:{id:"_198-你有了解rxjs是什么吗-它是做什么的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_198-你有了解rxjs是什么吗-它是做什么的"}},[t._v("#")]),t._v(" 198.你有了解Rxjs是什么吗？它是做什么的？")]),t._v(" "),a("p",[t._v("RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序。它提供了一个核心类型 Observable，附属类型 (Observer、 Schedulers、 Subjects) 和受 [Array#extras] 启发的操作符 (map、filter、reduce、every, 等等)，这些数组操作符可以把异步事件作为集合来处理。")]),t._v(" "),a("h2",{attrs:{id:"_199-使用react的memo和forwardref包装的组件为什么提示children类型不对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_199-使用react的memo和forwardref包装的组件为什么提示children类型不对"}},[t._v("#")]),t._v(" 199.使用React的memo和forwardRef包装的组件为什么提示children类型不对？")]),t._v(" "),a("p",[t._v("过去使用"),a("code",[t._v("Component")]),t._v("、"),a("code",[t._v("FC")]),t._v("等类型定义组件时一般不需要我们定义props里"),a("code",[t._v("children")]),t._v("的类型，因为在上述类型里已经帮你默认加上了 "),a("code",[t._v("{ children?: ReactNode }")]),t._v(" 的定义。但是@types/react的维护者认为这样导致children几乎没有类型约束，组件开发者应该显式地声明children类型。所以对新的API应该都不会自动加上children的定义了，需要开发者手动添加。")]),t._v(" "),a("h2",{attrs:{id:"_200-为什么标签里的for要写成htmlfor呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_200-为什么标签里的for要写成htmlfor呢"}},[t._v("#")]),t._v(" 200.为什么标签里的for要写成htmlFor呢？")]),t._v(" "),a("p",[t._v("因为for是保留字，因此用htmlFor来代替for的使用。")])])}),[],!1,null,null,null);s.default=n.exports}}]);