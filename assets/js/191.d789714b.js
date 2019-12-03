(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{369:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack相关","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack相关")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#webpack%E7%9B%B8%E5%85%B3"}},[t._v("webpack相关")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E6%89%93%E5%8C%85%E4%BD%93%E7%A7%AF-%E4%BC%98%E5%8C%96%E6%80%9D%E8%B7%AF"}},[t._v("打包体积 优化思路")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%89%93%E5%8C%85%E6%95%88%E7%8E%87"}},[t._v("打包效率")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#loader-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AAloader"}},[t._v("Loader 编写一个loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#plugins"}},[t._v("plugins")])])])])]),t._v(" "),a("h2",{attrs:{id:"打包体积-优化思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包体积-优化思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包体积 优化思路")]),t._v(" "),a("ol",[a("li",[t._v("提取第三方库或通过引用外部文件的方式引入第三方库")]),t._v(" "),a("li",[t._v("代码压缩插件UglifyJsPlugin")]),t._v(" "),a("li",[t._v("服务器启用gzip压缩")]),t._v(" "),a("li",[t._v("按需加载资源文件 require.ensure")]),t._v(" "),a("li",[t._v("优化devtool中的source-map")]),t._v(" "),a("li",[t._v("剥离css文件，单独打包")]),t._v(" "),a("li",[t._v("去除不必要插件，通常就是开发环境与生产环境用同一套配置文件导致")])]),t._v(" "),a("h2",{attrs:{id:"打包效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包效率","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包效率")]),t._v(" "),a("ol",[a("li",[t._v("开发环境采用增量构建，启用热更新")]),t._v(" "),a("li",[t._v("开发环境不做无意义的工作如提取css计算文件hash等")]),t._v(" "),a("li",[t._v("配置devtool")]),t._v(" "),a("li",[t._v("选择合适的loader")]),t._v(" "),a("li",[t._v("个别loader开启cache 如babel-loader")]),t._v(" "),a("li",[t._v("第三方库采用引入方式")]),t._v(" "),a("li",[t._v("提取公共代码")]),t._v(" "),a("li",[t._v("优化构建时的搜索路径 指明需要构建目录及不需要构建目录")]),t._v(" "),a("li",[t._v("模块化引入需要的部分")])]),t._v(" "),a("h2",{attrs:{id:"loader-编写一个loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-编写一个loader","aria-hidden":"true"}},[t._v("#")]),t._v(" Loader 编写一个loader")]),t._v(" "),a("p",[t._v("loader就是一个node模块，它输出了一个函数。当某种资源需要用这个loader转换时，这个函数会被调用。并且，这个函数可以通过提供给它的this上下文访问Loader API。")]),t._v(" "),a("p",[t._v("reverse-txt-loader")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reverse-txt-loader")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//src是原文件内容（abcde），下面对内容进行处理，这里是反转")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回JavaScript源码，必须是String或者Buffer")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("module.exports = '")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.txt$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/reverse-txt-loader'")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),a("p",[t._v("使用范围更广，通常只需要require()然后添加到plugins数组中，且需要new一个")])])}),[],!1,null,null,null);s.default=e.exports}}]);