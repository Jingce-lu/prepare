(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{753:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"深入webpack4配置笔记-必备-可选配置-单页-多页配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入webpack4配置笔记-必备-可选配置-单页-多页配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 深入webpack4配置笔记(必备/可选配置 单页/多页配置)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E6%B7%B1%E5%85%A5webpack4%E9%85%8D%E7%BD%AE%E7%AC%94%E8%AE%B0%E5%BF%85%E5%A4%87%E5%8F%AF%E9%80%89%E9%85%8D%E7%BD%AE-%E5%8D%95%E9%A1%B5%E5%A4%9A%E9%A1%B5%E9%85%8D%E7%BD%AE"}},[t._v("深入webpack4配置笔记(必备/可选配置 单页/多页配置)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%BF%85%E5%A4%87%E9%85%8D%E7%BD%AE"}},[t._v("必备配置")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8F%AF%E9%80%89%E9%85%8D%E7%BD%AE"}},[t._v("可选配置")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#webpack%E6%89%93%E5%8C%85%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96"}},[t._v("webpack打包性能优化")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A4%9A%E9%A1%B5%E9%9D%A2%E6%89%93%E5%8C%85%E9%85%8D%E7%BD%AE"}},[t._v("多页面打包配置")])])])])]),t._v(" "),a("h2",{attrs:{id:"必备配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必备配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 必备配置")]),t._v(" "),a("ol",[a("li",[t._v("自动生成html文件，使用 "),a("code",[t._v("html-webpack-plugin")]),t._v(" 插件")]),t._v(" "),a("li",[t._v("重新打包时前删除dist目录，然后再执行打包，使用"),a("code",[t._v("clean-webpack-plugin")]),t._v("插件")]),t._v(" "),a("li",[a("code",[t._v("entry")]),t._v("与"),a("code",[t._v("output")]),t._v("配置，占位符"),a("code",[t._v("[name]")]),t._v("、"),a("code",[t._v("publicPath")]),t._v("(比如配置js文件等资源的cdn地址，使得打包后的html中引入的js地址为cdn地址)")]),t._v(" "),a("li",[t._v("三种提升开发效率的即时打包："),a("code",[t._v("watch")]),t._v("(使用file协议)、"),a("code",[t._v("devServer")]),t._v("开启本地服务器(使用http协议，需安装"),a("code",[t._v("webpack-dev-server")]),t._v("，本地代码修改后实时打包自动更新刷新页面)、自己用node写服务器(使用http协议，不足是本地代码修改后虽然实时打包但页面仍需手动刷新才能看见最新显示)。除此还可以安装"),a("code",[t._v("http-server")]),t._v("包，然后打包项目到dist目录后，再运行"),a("code",[t._v("scripts")]),t._v("命令"),a("code",[t._v('"start": "htt-server dist"')]),t._v("，这样的操作和将项目打包后dist目录丢到服务器上访问类似。")]),t._v(" "),a("li",[t._v("打包静态文件：\n"),a("ul",[a("li",[t._v("图片 png/jpg/gif等静态图片资源 使用 "),a("code",[t._v("file-loader")]),t._v(" 或者 "),a("code",[t._v("url-loader")]),t._v("，推荐使用 "),a("code",[t._v("url-loader")]),t._v("，因为后者可通过 options 进行额外配置")]),t._v(" "),a("li",[t._v("css/scss   按顺序使用"),a("code",[t._v("postcss-loader")]),t._v("(配合"),a("code",[t._v("autoprefixer")]),t._v("插件) / "),a("code",[t._v("sass-loader")]),t._v("(依赖"),a("code",[t._v("node-sass")]),t._v(") / "),a("code",[t._v("css-loader")]),t._v(" / "),a("code",[t._v("style-loader")]),t._v(" 来进行 css3代码前缀自动添加、scss代码转成css代码、插入html页面head的style中")]),t._v(" "),a("li",[t._v("css模块化打包  开启css文件模块化打包，可以在某个js文件中 通过 "),a("code",[t._v('import xxx from "./yyy.scss"')]),t._v(" 文件来进行模块化打包scss文件，在js中可以通过 "),a("code",[t._v("xxx.classSelecter")]),t._v("来引用某个具体的样式选择器进行样式class的添加")]),t._v(" "),a("li",[t._v("字体文件打包  就是使用"),a("code",[t._v("file-loader")]),t._v("把eot/svg等从src目录移到dist目录")])])]),t._v(" "),a("li",[t._v("将ES6/7语法转换为ES5语法，安装"),a("code",[t._v("babel-loader")]),t._v("、"),a("code",[t._v("@babel/core")]),t._v("(babel V7开始为@babel)、配置文件"),a("code",[t._v(".babelrc")]),t._v("中配置"),a("code",[t._v("presets")]),t._v("，它使用"),a("code",[t._v("@babel/preset-env")]),t._v("来将ES6/7语法转译成兼容低版本浏览器的兼容代码。如果要编译Promise、部分原型方法可以使用"),a("code",[t._v("@babel/polyfill")]),t._v("，然后通过入口js文件中"),a("code",[t._v("import @babel/polyfill")]),t._v("即可(这种方法会把所有转译ES6/7高级API的兼容代码一口气全打包出来)，或者可以在"),a("code",[t._v(".babelrc")]),t._v("的"),a("code",[t._v("presets")]),t._v("的"),a("code",[t._v("@babel/preset-env")]),t._v("配置属性对象里添加"),a("code",[t._v('useBuiltIns: "usage"')]),t._v("(这种办法就是按需打包出兼容代码，注意在我当前使用的babelV7版本中此时还需配置corejs版本)。使用"),a("code",[t._v("@babel/polyfill")]),t._v("有个问题，它的兼容代码会污染全局变量，在写普通业务代码项目中没问题，但如果babel用于写组件类库，就需要换个方法来避免污染全局环境：可以使用"),a("code",[t._v("@babel/plugin-transform-runtime")]),t._v("(安装于devDepend)和"),a("code",[t._v("@babel/runtime-corejs2")]),t._v("(安装于depend)，然后在"),a("code",[t._v(".babelrc")]),t._v("中配置"),a("code",[t._v("plugins")]),t._v("，它的原理是通过闭包的形式挂载兼容代码，从而不会污染全局变量。babel是JavaScript的编译器。")]),t._v(" "),a("li",[t._v("代码分割(CodeSplitting)/异步引入模块。通过同步引入的模块进行代码分割时需配置"),a("code",[t._v("optimization.splitChunks")]),t._v("对象配置(配置参数看这里，也可以看"),a("code",[t._v("webpack.common.js")]),t._v("中这部分的配置注释)；通过异步引入的模块(仅"),a("code",[t._v('import("xxx module"))')]),t._v("则只需在添加"),a("code",[t._v("@babel/plugin-syntax-dynamic-import")]),t._v("这个官方插件并在"),a("code",[t._v(".babelrc")]),t._v("文件中的"),a("code",[t._v("plugins")]),t._v("里配置引入该插件就行，这里要注意异步引入"),a("code",[t._v('import("xxx module")')]),t._v("是一个Promise，可以通过调用then方法执行后续逻辑。")]),t._v(" "),a("li",[t._v("css文件的代码分割：安装插件"),a("code",[t._v("mini-css-extract-plugin")]),t._v("，在生产环境对应的配置文件中"),a("code",[t._v('const MiniCssExtractPlugin = require("mini-css-extract-plugin");')]),t._v("引入该插件后，在"),a("code",[t._v("plugins")]),t._v("中启用该插件，同时设置样式文件"),a("code",[t._v("loader")]),t._v("的最后一步由"),a("code",[t._v("style-loader")]),t._v("替换为"),a("code",[t._v("MiniCssExtractPlugin.loader")]),t._v("。这里有个地方要注意，由于该插件尚未支持"),a("code",[t._v("HMR")]),t._v("功能，所以webpack4建议在生产环境中使用该插件，开发环境开启"),a("code",[t._v("HMR")]),t._v("后就无需配置css代码分割了。")]),t._v(" "),a("li",[t._v("css代码的压缩：安装插件"),a("code",[t._v("optimize-css-assets-webpack-plugin")]),t._v("，引入该插件并配置，可以查看官方文档"),a("code",[t._v("DOCUMENTATION -> PLUGINS -> MiniCssExtractPlugin -> Minimizing For Production Analysis")]),t._v("。")]),t._v(" "),a("li",[t._v("设置webpack打包的环境变量，可以安装"),a("code",[t._v("cross-env")]),t._v("模块并在"),a("code",[t._v("scripts")]),t._v("配置项中设置"),a("code",[t._v("cross-env NODE_ENV=production")]),t._v("，如此可在webpack配置文件中获取当前打包环境变量值。")]),t._v(" "),a("li",[t._v("开启Hot Module Replacement 热模块更新(HMR), 需配置webpack.config.js文件中两个地方："),a("code",[t._v("devServer")]),t._v("中配置"),a("code",[t._v("hot")]),t._v("和"),a("code",[t._v("hotOnly")]),t._v("、"),a("code",[t._v("HotModuleReplacementPlugin")]),t._v("插件")]),t._v(" "),a("li",[a("code",[t._v("devtool")]),t._v("配置"),a("code",[t._v("sourceMap")]),t._v("，它是一种映射关系，用于指出源代码中具体出错位置，弄明白"),a("code",[t._v("source-map")]),t._v("、"),a("code",[t._v("inline-source-map")]),t._v("、"),a("code",[t._v("cheap-source-map")]),t._v("等关系，并给出开发环境与生产环境的devtool的sourceMap配置最佳实践(开发环境为"),a("code",[t._v("cheap-module-eval-source-map")]),t._v("，生产环境为"),a("code",[t._v("cheap-module-source-map")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("development")]),t._v("和"),a("code",[t._v("production")]),t._v("模式打包区别，安装第三方模块"),a("code",[t._v("webpack-merge")]),t._v("进行配置文件合并。")]),t._v(" "),a("li",[t._v("懒加载：通过"),a("code",[t._v("import")]),t._v("异步加载模块就是属于一种懒加载，但是到底什么时候加载这个模块，则取决于什么时候真正执行"),a("code",[t._v("import")]),t._v("语句。借助这种方法，可以更快加载页面。异步加载模块采用"),a("code",[t._v("ES Module")]),t._v("的动态加载ES模块的方法："),a("code",[t._v("import()")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("PreLoading")]),t._v("优化："),a("code",[t._v("webpack")]),t._v("推荐前端js更多使用异步加载来提高页面首次加载速度，这从它的"),a("code",[t._v("optimization.splitChunks.chunks")]),t._v("值默认是"),a("code",[t._v("async")]),t._v("就可以看出，即默认配置只分割异步模块代码，这样打包出来的页面首次加载js只会加载同步代码，异步模块代码会等到满足异步触发条件时再另外加载对应的异步js文件，这样能明显提高页面首次加载的速度和所加载js代码的使用率。分割同步模块代码只能是优化缓存提高页面二次加载时的速度，对页面首次加载速度提升并无帮助。所以优化页面首次、多次加载速度需要分割打包异步和同步模块，分别对应优化页面js代码使用率和缓存。查看js代码使用率可以打开chrome浏览器的"),a("code",[t._v("控制台 -> Coverage")]),t._v("，快捷键是"),a("code",[t._v("Ctrl + Shift + P")]),t._v("。写高性能页面时，重点考虑的应是页面代码的使用率，而不是缓存。")]),t._v(" "),a("li",[a("code",[t._v("PreFetching")]),t._v("优化：当通过"),a("code",[t._v("Preloading")]),t._v("优化的页面加载完毕后，此时带宽释放，可以利用这段空闲的带宽来预先加载异步模块文件，如此当用户交互触发异步加载条件时就会有与一次性加载所有模块一样的响应体验，因为此时浏览器中已经有异步模块文件的缓存。比较典型的案例就是页面加载后点击登录展示登录模态框，当页面首次加载时不会加载登录模态框的模块代码，页面加载完毕后利用带宽释放空档提前加载登录模态框的模块代码文件，如此当用户点击登录按钮时，可以直接调用相应的登录模态模块代码。实现方法是使用到魔法注释 "),a("code",[t._v("/* webpackPrefetch: true */")]),t._v("，使用详情可以访问"),a("code",[t._v("webpack")]),t._v("官方文档的"),a("code",[t._v("DOCUMENTATION -> GUIDES -> Code Splitting -> Prefetching/Preloading modules")]),t._v("。所以如果要提高页面加载性能，可以使用"),a("code",[t._v("ES Modules")]),t._v("异步模块加载来进行懒加载，同时添加"),a("code",[t._v("Prefetching")]),t._v("优化，利用页面主逻辑加载完毕后带宽释放空档提前加载异步模块文件，来达到明显提升页面加载速度的目的。")]),t._v(" "),a("li",[t._v("webpack帮浏览器做合理缓存：在"),a("code",[t._v("output.filename")]),t._v("和"),a("code",[t._v("output.chunkFilename")]),t._v("值中添加占位符"),a("code",[t._v("contenthash")]),t._v("，它的意思是当文件内容没变时打包生成文件的hash值不变，如果文件内容变了那么打包生成文件的hash值就会改变。")]),t._v(" "),a("li",[t._v("Shimming预置依赖，指的就是预先配置第三方库垫片，比如"),a("code",[t._v("jQuery")]),t._v("，可以在配置文件"),a("code",[t._v("plugins")]),t._v("数组中添加"),a("code",[t._v('new webpack.ProvidePlugin({ $: "jQuery" })')]),t._v("插件，这样当项目js中用到关键字"),a("code",[t._v("$")]),t._v("时程序就能理解为"),a("code",[t._v("jQuery")]),t._v("对象。")]),t._v(" "),a("li",[a("code",[t._v("Tree shaking")]),t._v(" 作用：在模块引入打包中，引入什么就打包什么，未引入的模块代码就会被忽略掉；或者当一个模块文件中会export多个模块，但只被引入某些个模块，另有部分模块可能未被引用时，Tree Shaking 也会把这个模块文件中的未被引用的模块给摇掉，也就是不打包它们，而只打包该模块文件中被引用的那些模块。注意 Tree Shaking只支持ES Module这种模块引入方法，对其他模块引入方式(如CommonJS/AMD等)不起作用。在开发环境中默认不开启，如需开启需配置"),a("code",[t._v("optimization中的usedExports: true")]),t._v("，同时在package.json中配置"),a("code",[t._v('"sideEffects": false,')]),t._v("，意思是Tree Shaking 对所有模块都进行treeShaking操作，这里也可以将值改为数组，数组项即被用来配置需要忽略treeShaking操作的模块，例如在js页面中引入"),a("code",[t._v('import "@babel/polyfill"')]),t._v("时就可以配置"),a("code",[t._v('"sideEffects": [ "@babel/polyfill" ],')]),t._v("。但现在一般不用这样配置，因为已经在"),a("code",[t._v(".babelrc")]),t._v("中配置了"),a("code",[t._v('"useBuiltIns": "usage"')]),t._v("这样表示默认所有js都已添加"),a("code",[t._v('import "@babel/polyfill"')]),t._v("。所以既然页面js中无需做这样的引入，就不需要添加treeShaking默认忽略列表项。当然如果引入的模块是scss或css之类的样式文件模块，则为防止部分样式代码未被引用导致被treeShaking误忽略打包造成不可控错误，可以进行类似"),a("code",[t._v("sideEffects: [*.css]")]),t._v("的配置。(这样在开发环境中就算是配置好Tree Shaking，但是打包后其实仍会将未引入的模块打包进dist里，只是相比未配置，会多加一句注释表明使用的模块是哪些，其原因是为了开发环境下的调试方便，避免因删除未引入模块代码导致的行数错乱从而误导错误提示行数。)在生产环境中Tree Shaking 默认就已经开启了，所以无需配置optimization中的"),a("code",[t._v("usedExports: true")]),t._v("，但还是需要在package.json中配置"),a("code",[t._v("sideEffects")]),t._v("的忽略列表，这里要注意。")])]),t._v(" "),a("h2",{attrs:{id:"可选配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 可选配置")]),t._v(" "),a("ol",[a("li",[t._v("打包分析，可以查看打包模块之间的关系，官方提供的可以访问webpack-analyse这个地址，它提供用于生成打包分析的JSON文件的命令，还可在该页面获取可视化分析该JSON文件的入口地址。可将"),a("code",[t._v("--profile --json > stats.json")]),t._v("这个命令片段添加至package.json文件的script脚本命令中，例如"),a("code",[t._v('"dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js"')]),t._v("，配置好后运行"),a("code",[t._v("npm run dev-build")]),t._v("命令完成后会在项目根目录生成stats.json文件，这个json文件中会有打包过程的各项信息。可以将这个"),a("code",[t._v("json")]),t._v("文件上传至"),a("code",[t._v("http://webpack.github.com/analyse")]),t._v("查看打包过程信息的可视化展示(注意这个地址说是需要科学上网才能访问，不过我即使科学上网也不能访问？)。如果上面的官方分析工具始终无法访问，也可以使用其他方法，可以访问"),a("code",[t._v("webpack")]),t._v("官方文档的"),a("code",[t._v("DOCUMENTATION -> GUIDES -> Code Splitting -> Bundle Analysis")]),t._v("查看其他分析工具，推荐使用"),a("code",[t._v("Webpack Bundle Analyzer")]),t._v("。")]),t._v(" "),a("li",[t._v("webpack构建项目的js模块文件中的"),a("code",[t._v("this")]),t._v("默认指向模块本身，而不是指向"),a("code",[t._v("window")]),t._v("对象，如果要想将"),a("code",[t._v("this")]),t._v("指向"),a("code",[t._v("window")]),t._v("对象，需要通过"),a("code",[t._v("imports-loader")]),t._v("来解决。")]),t._v(" "),a("li",[t._v("用webpack打包库代码，方法与打包业务代码差不多，只是在"),a("code",[t._v("output")]),t._v("配置中添加"),a("code",[t._v('libraryTarget: "umd"')]),t._v("和"),a("code",[t._v("library: library")]),t._v("，前者作用是为打包后的库添加支持"),a("code",[t._v("ES Module")]),t._v("、"),a("code",[t._v("AMD")]),t._v("、"),a("code",[t._v("CMD")]),t._v("模块引入方式，后者作用是当库代码直接被页面用"),a("code",[t._v("<script />")]),t._v("引入时提供一个名为"),a("code",[t._v("library")]),t._v("的全局变量，可以用于访问库代码中的方法。另外当自身库代码依赖其他第三方库代码时，比如依赖"),a("code",[t._v("lodash")]),t._v("库时，可以在配置文件中添加"),a("code",[t._v('externals: [ "lodash" ]')]),t._v("，这样可以在打包自身库代码时忽略打包"),a("code",[t._v("lodash")]),t._v("的代码，这样就能通过不打包进第三方库代码来减小自身库代码体积，而当他人引用自身库代码时，也只需在其代码中引入lodash库依赖就可以使用我们发布的库了。发布npm库："),a("code",[t._v("npm adduser")]),t._v("和"),a("code",[t._v("npm publish")]),t._v("，注意要修改包管理文件"),a("code",[t._v("package.json")]),t._v("中的"),a("code",[t._v("main")]),t._v("属性值为打包生成的目标文件。")]),t._v(" "),a("li",[t._v("PWA打包配置。webpack打包生成的dist文件通常最后是丢到服务器上供访问，如想在本地体验这种丢服务器上测试可以本地安装"),a("code",[t._v("http-server")]),t._v("，然后当打包完成后再运行"),a("code",[t._v("scripts")]),t._v("命令"),a("code",[t._v('"start": "htt-server dist"')]),t._v("，这样的操作和将项目打包后dist目录丢到服务器上访问类似。PWA指实现当服务器挂掉/断网时浏览器本地可利用缓存继续访问该服务器中的原网页，有更好的用户体验。首先安装"),a("code",[t._v("workbox-webpack-plugin")]),t._v("，在生产环境配置文件中引入(无须用于开发环境)并在"),a("code",[t._v("plugins")]),t._v("中配置该插件。除此以外，还要在入口js中写些业务代码来实现PWA，看下面"),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serviceWorker"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果浏览器支持serviceWorker     ")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service-worker.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service-wroker registed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service-worker register error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[t._v("webpack打包配置TypeScript，首先安装"),a("code",[t._v("npm i -D ts-loader typescript")]),t._v("，然后配置文件中添加"),a("code",[t._v("ts-loader")]),t._v("配置，其次在根目录添加"),a("code",[t._v("tsconfig.json")]),t._v("配置文件进行相应ts配置，了解ts配置可以查看这里。如果在"),a("code",[t._v(".tsx")]),t._v("文件中引入"),a("code",[t._v("lodash")]),t._v("或者"),a("code",[t._v("jquery")]),t._v("这样的第三方库使用，为了仍能使用ts的错误检查警告这个优势(例如ts中对方法参数的校验)，需要安装第三方库对应的typescript类型文件检查包，例如使用"),a("code",[t._v("lodash")]),t._v("需要安装"),a("code",[t._v("@types/lodash")]),t._v("，使用jquery需要安装"),a("code",[t._v("@types/jquery，")]),t._v("如果对于要安装对应类型检查文件包不清楚，可以点击这里进行搜索。")])]),t._v(" "),a("h2",{attrs:{id:"webpack打包性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack打包性能优化")]),t._v(" "),a("p",[t._v("提高webpack打包速度：")]),t._v(" "),a("ol",[a("li",[t._v("升级新的webpack版本、Node和npm版本；")]),t._v(" "),a("li",[t._v("在尽可能少的模块上应用"),a("code",[t._v("loader")]),t._v("(通过"),a("code",[t._v("include")]),t._v("或者"),a("code",[t._v("exclude")]),t._v("去约定只有某些文件夹下的模块被引入时才使用对应loader，从而降低该loader被执行频率，以此更少量执行该loader的转化或编译执行过程)；")]),t._v(" "),a("li",[t._v("尽可能少使用"),a("code",[t._v("plugin")]),t._v("，同时确保"),a("code",[t._v("plugin")]),t._v("的可靠性；")]),t._v(" "),a("li",[a("code",[t._v("resolve")]),t._v("参数合理配置，例如"),a("code",[t._v('resolve: { extensions: [ ".js", ".jsx" ] }')]),t._v("，它作用是当引入文件不写后缀时通过该配置从左到右依次查找对应后缀的文件。不过注意这里需要合理配置，不要滥用，如果添加项太多，会导致打包查找文件时增加性能损耗。约定资源性文件如图片要写后缀"),a("code",[t._v(".png")]),t._v("，而逻辑性的如"),a("code",[t._v("jsx")]),t._v("则加下。")]),t._v(" "),a("li",[t._v("使用"),a("code",[t._v("DllPlugin")]),t._v("提高打包速度：由于第三方模块通常长期不变，所以只在首次打包第三方模块时分析该模块代码，其他时候打包不会分析该第三方模块代码，以此加快打包速度。可以点击这里查看"),a("code",[t._v("DllPlugin")]),t._v("官方配置文档；")]),t._v(" "),a("li",[t._v("控制包文件大小，对于未使用到的包可以通过Tree Shaking或者不引用等方法降低包大小；")]),t._v(" "),a("li",[t._v("多进程打包；")]),t._v(" "),a("li",[t._v("合理使用sourceMap，通常越详细的sourceMap打包的越慢；")]),t._v(" "),a("li",[t._v("结合stats分析打包结果；")]),t._v(" "),a("li",[t._v("开发环境内存编译；")]),t._v(" "),a("li",[t._v("开发环境无用插件剔除；")])]),t._v(" "),a("h2",{attrs:{id:"多页面打包配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多页面打包配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 多页面打包配置")]),t._v(" "),a("p",[t._v("使用webpack4打包多Html页面的配置是在上面基础上，特别的利用"),a("code",[t._v("Html-webpack-plugin")]),t._v("，这里给出一个配置方案仅供参考：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于生成html文件的插件  ")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置入口对象与html-webpack-plugin实例集合，约定对应html的js与html同名以便自动化生成入口对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entries "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存文件入口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放html-webpack-plugin实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pagePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/views"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义存放html页面的文件夹路径，此处值为 F:\\modules\\webapck4\\w4-2\\src\\views")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" paths "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readdirSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pagePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取pagePath路径下的所有文件，此处值为 [ 'about.html', 'index.html', 'list.html', 'main.html' ]")]),t._v("\n  paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("page")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    page "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取文件名（不带后缀），例： [ 'about', 'html' ]，当前page值就为字符串about")]),t._v("\n    pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("views/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".html")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成的html文件的路径（基于出口配置里的path）")]),t._v("\n      template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("src/views/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".html")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参考的html模板文件")]),t._v("\n      chunks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vendors"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manifest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置生成的html引入的公共代码块 引入顺序从右至左")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// favicon: path.resolve(__dirname, 'src/img/favicon.ico'),            // 配置每个html页面的favicon")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("src/js/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".js")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口js文件对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*... 其他配置略 */")]),t._v("\n  plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 展开所有 new HmtlWebpackPlugin 生成页面的配置对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("p",[t._v("目录结构如下：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/enengineering/webpack19121301.png"),alt:"enengineering/webpack19121301.png"}})])}),[],!1,null,null,null);s.default=n.exports}}]);