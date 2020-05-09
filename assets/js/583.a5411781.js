(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{798:function(a,t,i){"use strict";i.r(t);var v=i(1),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"javascript的运行机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#javascript的运行机制","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript的运行机制")]),a._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#javascript的执行环境"}},[a._v("JavaScript的执行环境")]),i("ul",[i("li",[i("a",{attrs:{href:"#javascript引擎-javascript-engine"}},[a._v("JavaScript引擎(JavaScript Engine)")])]),i("li",[i("a",{attrs:{href:"#javascript运行时（javascript-runtime）"}},[a._v("JavaScript运行时（JavaScript Runtime）")])]),i("li",[i("a",{attrs:{href:"#可执行代码"}},[a._v("可执行代码")])])])]),i("li",[i("a",{attrs:{href:"#javascript执行"}},[a._v("JavaScript执行")]),i("ul",[i("li",[i("a",{attrs:{href:"#堆"}},[a._v("堆")])]),i("li",[i("a",{attrs:{href:"#调用栈"}},[a._v("调用栈")])]),i("li",[i("a",{attrs:{href:"#执行上下文-execution-context"}},[a._v("执行上下文(execution context)")])]),i("li",[i("a",{attrs:{href:"#执行过程"}},[a._v("执行过程")])])])]),i("li",[i("a",{attrs:{href:"#小结"}},[a._v("小结")]),i("ul",[i("li",[i("a",{attrs:{href:"#this是怎么被绑定的"}},[a._v("this是怎么被绑定的?")])]),i("li",[i("a",{attrs:{href:"#作用域链是怎么形成的？"}},[a._v("作用域链是怎么形成的？")])]),i("li",[i("a",{attrs:{href:"#闭包是怎么形成的？"}},[a._v("闭包是怎么形成的？")])])])])])]),i("p"),a._v(" "),i("p",[a._v("了解JavaScript运行机制有助于我们避免bug，并写出高性能的代码，当然还有一大用处就是有助于我们通过造火箭环节的面试。")]),a._v(" "),i("p",[a._v("具体而言你会搞清楚以下问题：")]),a._v(" "),i("ul",[i("li",[a._v("作用域链本质上是如何产生的")]),a._v(" "),i("li",[a._v("this是如何被绑定的")]),a._v(" "),i("li",[a._v("JavaScript代码到底运行原理是什么")]),a._v(" "),i("li",[a._v("闭包产生的根本原因")])]),a._v(" "),i("p",[a._v("而产生的『后果』是，你可以应对几乎所有的JavaScript作用域、闭包、执行等层面的面试题，还有一个可能的后果，就是面对复杂度不是那么高的代码时，你的脑子中会自己把执行过程像放动画一样过一遍（虽然这个动画也不非常准确）。")]),a._v(" "),i("h2",{attrs:{id:"javascript的执行环境"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#javascript的执行环境","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript的执行环境")]),a._v(" "),i("p",[a._v("在了解JavaScript运行机制之前，我们需要搞清楚几个主要概念，这有助于我们接下来的理解。")]),a._v(" "),i("h3",{attrs:{id:"javascript引擎-javascript-engine"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#javascript引擎-javascript-engine","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript引擎(JavaScript Engine)")]),a._v(" "),i("p",[a._v("赋予一段代码意义的正是JavaScript引擎，目前JavaScript引擎有许多种:")]),a._v(" "),i("ul",[i("li",[a._v("V8 — 开源，由 Google 开发，用 C ++ 编写")]),a._v(" "),i("li",[a._v("Rhino — 由 Mozilla 基金会管理，开源，完全用 Java 开发")]),a._v(" "),i("li",[a._v("SpiderMonkey — 是第一个支持 Netscape Navigator 的 JavaScript 引擎，目前正供 Firefox 使用")]),a._v(" "),i("li",[a._v("JavaScriptCore — 开源，以Nitro形式销售，由苹果为Safari开发")]),a._v(" "),i("li",[a._v("KJS — KDE 的引擎，最初由 Harri Porten 为 KDE 项目中的 Konqueror 网页浏览器开发")]),a._v(" "),i("li",[a._v("Chakra (JScript9) — Internet Explorer")]),a._v(" "),i("li",[a._v("Chakra (JavaScript) — Microsoft Edge")]),a._v(" "),i("li",[a._v("Nashorn, 作为 OpenJDK 的一部分，由 Oracle Java 语言和工具组编写")]),a._v(" "),i("li",[a._v("JerryScript —  物联网的轻量级引擎")])]),a._v(" "),i("p",[a._v("而最为大家熟知的无疑是V8引擎，他用于Chrome浏览器和Node中。")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/27d902eae39383d1e92d05f4be51ce9b.png",alt:"2019-06-19-13-00-37"}})]),a._v(" "),i("p",[a._v("V8引擎由两个主要部件组成:")]),a._v(" "),i("ul",[i("li",[a._v("emory Heap(内存堆) — 内存分配地址的地方")]),a._v(" "),i("li",[a._v("Call Stack(调用堆栈) — 代码执行的地方")])]),a._v(" "),i("h3",{attrs:{id:"javascript运行时（javascript-runtime）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#javascript运行时（javascript-runtime）","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript运行时（JavaScript Runtime）")]),a._v(" "),i("p",[a._v("想让JavaScript真正运作起来，单单靠JavaScript Engine是不够的，JavaScript Engine的工作是"),i("strong",[a._v("编译并执行 JavaScript 代码，完成内存分配、垃圾回收等")]),a._v(",但是缺乏与外部交互的能力。")]),a._v(" "),i("p",[a._v("比如单靠一个V8引擎是无法进行ajax请求、设置定时器、响应事件等操作的，这就需要JavaScript运行时（JavaScript Runtime）的帮助，它为 JavaScript 提供一些对象或机制，使它能够与外界交互。")]),a._v(" "),i("p",[a._v("比如，虽然Chrome和node都是用了V8引擎，但是他们的运行时却不同，比如process、fs浏览器都无法提供。")]),a._v(" "),i("h3",{attrs:{id:"可执行代码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可执行代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 可执行代码")]),a._v(" "),i("p",[a._v("一段JavaScript代码的运行我们可以分为两个阶段:")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("编译阶段：")]),a._v(" "),i("ul",[i("li",[a._v("分词/词法分析（Tokenizing/Lexing）")]),a._v(" "),i("li",[a._v("解析/语法分析（Parsing）")]),a._v(" "),i("li",[a._v("预编译（解释）")])])]),a._v(" "),i("li",[i("p",[a._v("执行阶段")])])]),a._v(" "),i("p",[a._v("本文的重点在于执行阶段。")]),a._v(" "),i("p",[a._v("JavaScript并非简单的一行行解释执行，而是将JavaScript代码分为一块块的可执行代码块进行执行，那么如何划分代码块？")]),a._v(" "),i("p",[a._v("目前有三类代码块：")]),a._v(" "),i("ul",[i("li",[a._v("函数代码块（Function code）")]),a._v(" "),i("li",[a._v("全局代码块（Global code）")]),a._v(" "),i("li",[a._v("eval代码块（Eval code）")])]),a._v(" "),i("h2",{attrs:{id:"javascript执行"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#javascript执行","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript执行")]),a._v(" "),i("p",[a._v("我们先看一个简单的例子：")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/2a165649e1648896c43cd0b5ce9f33d9.png",alt:"2019-06-20-08-15-59"}})]),a._v(" "),i("p",[a._v("看到这个例子思考一下JavaScript应该是如何执行它的？")]),a._v(" "),i("p",[a._v("如果你头脑里没有任何细节的概念，那么接下来的内容就很适用于你了。")]),a._v(" "),i("h3",{attrs:{id:"堆"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#堆","aria-hidden":"true"}},[a._v("#")]),a._v(" 堆")]),a._v(" "),i("p",[a._v("我们之前提到过JavaScript引擎两个重要部分：")]),a._v(" "),i("ul",[i("li",[a._v("emory Heap(内存堆) — 内存分配地址的地方")]),a._v(" "),i("li",[a._v("Call Stack(调用栈) — 代码执行的地方")])]),a._v(" "),i("p",[a._v("而上面的代码声明正是被存放在『堆』中。")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/65c06e0194c7f94e7af45e8fcb30e004.png",alt:"2019-06-20-00-15-33"}})]),a._v(" "),i("p",[a._v("此时虽然变量和函数都被声明了，但是函数还没有执行，我们现在执行"),i("code",[a._v("say")]),a._v("函数。")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/cb4772803d189080a33facfeecd11baa.png",alt:"2019-06-20-08-16-47"}})]),a._v(" "),i("p",[a._v("那么接下来又会发生什么呢？")]),a._v(" "),i("h3",{attrs:{id:"调用栈"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#调用栈","aria-hidden":"true"}},[a._v("#")]),a._v(" 调用栈")]),a._v(" "),i("p",[a._v("调用栈(Call Stack)这个概念对于经常调试JavaScript代码的同学应该不陌生。")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/7e4050faa0d3ed66965ad08bf2fec42e.png",alt:"2019-06-20-00-22-23"}})]),a._v(" "),i("p",[a._v("我们声明的函数与变量被储存在『内存堆』中，而当我们要执行的时候，就必须借助于『调用栈』来解决问题。")]),a._v(" "),i("p",[a._v("如果熟悉数据结构的同学应该知道，栈是一个基础的数据结构，它的特点就是先进后出。")]),a._v(" "),i("p",[a._v("我们仍然看这个例子，当"),i("code",[a._v("say")]),a._v("函数被调用的时候，他会被压入栈底。")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/14c76ec0f423e439cf0df59ad8548f8b.png",alt:"2019-06-20-00-29-02"}})]),a._v(" "),i("p",[a._v("那么是不是将函数压入栈内就结束了？肯定没有这么简单，这里需\n要在引入一个概念，执行上下文(execution context)。")]),a._v(" "),i("h3",{attrs:{id:"执行上下文-execution-context"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-execution-context","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行上下文(execution context)")]),a._v(" "),i("p",[a._v("执行上下文在代码块执行前创建，作为代码块运行的基本执行环境，那么执行上下文分为几种？")]),a._v(" "),i("p",[a._v("前面我们提到过，JavaScript中有三种可执行代码块，当然也对应着三种执行上下文。")]),a._v(" "),i("ul",[i("li",[a._v("全局执行上下文 — 这是基础上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。")]),a._v(" "),i("li",[a._v("函数执行上下文 — 每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建。")]),a._v(" "),i("li",[a._v("Eval 执行上下文 — 执行在 eval 内部的代码也会有它属于自己的执行上下文，除非你想搞黑魔法，不然不要轻易使用它。")])]),a._v(" "),i("p",[a._v("肯定会有人好奇，这个执行上下文到底包含哪些东西呢，他是如何运行的呢？")]),a._v(" "),i("p",[a._v("执行上下文分为两个阶段：")]),a._v(" "),i("ul",[i("li",[a._v("创建阶段")]),a._v(" "),i("li",[a._v("执行阶段")])]),a._v(" "),i("p",[a._v("我们主要讨论创建阶段，执行阶段的主要工作就是分配变量")]),a._v(" "),i("h4",{attrs:{id:"执行上下文的创建阶段"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的创建阶段","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行上下文的创建阶段")]),a._v(" "),i("p",[a._v("执行上下文的创建阶段主要解决以下三点:")]),a._v(" "),i("ul",[i("li",[a._v("决定 this 的指向")]),a._v(" "),i("li",[a._v("创建词法环境(LexicalEnvironment)")]),a._v(" "),i("li",[a._v("创建变量环境(VariableEnvironment)")])]),a._v(" "),i("blockquote",[i("p",[a._v("你可能在一些过时的教材或者文章中见过变量对象（VO）这种说法，它的意思与词法环境类似，但是那是ES3的标准，现在早已经改了，改变的原因讨论如下"),i("a",{attrs:{href:"https://stackoverflow.com/questions/40544709/why-variable-object-was-changed-to-lexical-environment-in-es5",target:"_blank",rel:"noopener noreferrer"}},[a._v("Why variable object was changed to lexical environment in ES5?"),i("OutboundLink")],1),a._v("\n伪代码如下:")])]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/58ff3a1b54232bf835e0eda470404691.png",alt:"2019-06-20-08-17-34"}})]),a._v(" "),i("h5",{attrs:{id:"this指向"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#this指向","aria-hidden":"true"}},[a._v("#")]),a._v(" this指向")]),a._v(" "),i("p",[a._v("我们应该知道this的指向是在代码执行阶段确定的，所谓的『代码执行阶段』正是『执行上下文的创建阶段』。")]),a._v(" "),i("p",[a._v("默认情况下this指向全局对象，比如浏览器中的window.")]),a._v(" "),i("p",[a._v("此外可能存在隐式绑定的情况，比如通过对象调用函数：")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/17ac778f64d12da5c024b4fc310c2578.png",alt:"2019-06-20-08-18-09"}})]),a._v(" "),i("p",[a._v("这个时候this指向对象。")]),a._v(" "),i("p",[a._v("然后就是显示绑定对象（call apply bind）等，最后优先级最高的就是new调用构造函数生成一个对象。")]),a._v(" "),i("h5",{attrs:{id:"词法环境-lexicalenvironment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#词法环境-lexicalenvironment","aria-hidden":"true"}},[a._v("#")]),a._v(" 词法环境(LexicalEnvironment)")]),a._v(" "),i("p",[a._v("词法环境分为三大类：")]),a._v(" "),i("ul",[i("li",[a._v("全局环境：全局环境的外部环境引用是 null，它拥有内建的 Object/Array/等、在环境记录器内的原型函数（关联全局对象，比如 window 对象）还有任何用户定义的全局变量，并且 this的值指向全局对象。")]),a._v(" "),i("li",[a._v("模块环境：包含模块顶级声明的绑定以及模块显式导入的绑定。 模块环境的外部环境是全局环境。")]),a._v(" "),i("li",[a._v("函数环境：函数内部用户定义的变量存储在环境记录器中，外部引用既可以是其它函数的内部词法环境，也可以是全局词法环境")])]),a._v(" "),i("p",[a._v("词法环境本身包括两个部分：")]),a._v(" "),i("ul",[i("li",[a._v("『环境记录器（Environment Record）』是存储变量和函数声明的实际位置")]),a._v(" "),i("li",[a._v("『外部环境的引用（outer Lexical Environment）』指它可以访问其父级词法环境（即作用域）")])]),a._v(" "),i("p",[a._v("对于『环境记录器』而言，它又分为两个主要的环境记录器类型：")]),a._v(" "),i("ul",[i("li",[a._v("声明式环境记录器（DecarativeEnvironmentRecord）：范围包含函数定义，变量声明，try...catch等，此类型对应其范围内包含的声明定义的标识符集")]),a._v(" "),i("li",[a._v("对象式环境记录器（ObjectEnvironmentRecord）：由程序级别的（Program）对象、声明、with语句等创建，与称为其绑定对象的对象相关联，此类型对应于其绑定对象的属性名称的字符串标识符名称集")])]),a._v(" "),i("p",[a._v("比如我们在全局声明一个函数:")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/90c3f805aeba811d2b75097a5b3fba48.png",alt:"2019-06-20-08-18-42"}})]),a._v(" "),i("p",[a._v("那么他的词法环境可以这样表示（下图我们省略了this绑定、变量环境等信息，便于理解）：")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/f2fd3a92e2aa96c5005d525389834a57.png",alt:"2019-06-20-03-49-33"}})]),a._v(" "),i("h5",{attrs:{id:"变量环境-variableenvironment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#变量环境-variableenvironment","aria-hidden":"true"}},[a._v("#")]),a._v(" 变量环境(VariableEnvironment)")]),a._v(" "),i("p",[a._v("变量环境的定义在es5标准和es6标准是略有不同的，我们采用"),i("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement-runtime-semantics-labelledevaluation",target:"_blank",rel:"noopener noreferrer"}},[a._v("es6的标准"),i("OutboundLink")],1)]),a._v(" "),i("p",[a._v("变量环境也是一个词法环境，但不同的是词法环境被用来存储函数声明和变量（let 和 const）绑定，而变量环境只用来存储 var 变量绑定。")]),a._v(" "),i("h3",{attrs:{id:"执行过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#执行过程","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行过程")]),a._v(" "),i("p",[a._v("在了解了这么多概念之后，我们就可以把本节开头的例子再拓展一下：")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/8532b28d02cf78652a370c82a6c2d29a.png",alt:"2019-06-20-08-19-15"}})]),a._v(" "),i("p",[a._v("我们就一步步复盘一下上述代码是如何执行的（不考虑解析、预解释等操作，只考虑执行）:")]),a._v(" "),i("ol",[i("li",[a._v("变量"),i("code",[a._v("name")]),a._v("和函数声明"),i("code",[a._v("say")]),a._v("被白存在堆中。")])]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/e1f42e04400e14c49c32f51327f85789.png",alt:"2019-06-20-05-23-40"}})]),a._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[a._v("创建全局可执行上下文:")])]),a._v(" "),i("p",[a._v("全局上下文的伪代码如下:")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/2fd22918e0c60c3dacf7fdf3c2c28c3b.png",alt:"2019-06-20-08-19-53"}})]),a._v(" "),i("p",[a._v("示意图:")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/ac8d769de3c77bd724b0f98221c3f8d6.png",alt:"2019-06-20-05-48-54"}})]),a._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[a._v("创建函数执行上下文")])]),a._v(" "),i("p",[a._v("say函数的执行上下文伪代码如下:")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/e3dd5ee7ef882c94d27ed55a546779d5.png",alt:"2019-06-20-08-20-53"}})]),a._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[a._v("创建创建say函数体内的函数执行上下文")])]),a._v(" "),i("p",[a._v("play函数的执行上下文伪代码如下")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/885a56c1ebb11cfbc1588d5f51fbaee9.png",alt:"2019-06-20-08-21-45"}})]),a._v(" "),i("p",[a._v("示意图：")]),a._v(" "),i("p",[i("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/0f1701f3b7061942ae24a9357f28bc2e.png",alt:"2019-06-20-06-00-27"}})]),a._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[a._v("开始执行")])]),a._v(" "),i("p",[a._v("将上下文中的变量赋值，然后执行代码，执行完毕栈顶的play函数后弹出，接着执行say函数，完毕后弹出。")]),a._v(" "),i("h2",{attrs:{id:"小结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),i("p",[a._v("我们通过本文了解了相关的JavaScript执行机制，现在可以回答这几个问题了。")]),a._v(" "),i("h3",{attrs:{id:"this是怎么被绑定的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#this是怎么被绑定的","aria-hidden":"true"}},[a._v("#")]),a._v(" this是怎么被绑定的?")]),a._v(" "),i("p",[a._v("在创建可执行上下文的时候，根据代码的执行条件，来判断分别进行默认绑定、隐式绑定、显示绑定等。")]),a._v(" "),i("h3",{attrs:{id:"作用域链是怎么形成的？"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#作用域链是怎么形成的？","aria-hidden":"true"}},[a._v("#")]),a._v(" 作用域链是怎么形成的？")]),a._v(" "),i("p",[a._v("可执行上下文中的词法环境中含有外部词法环境的引用，我们可以通过这个引用获取外部词法环境的变量、声明等，这些引用串联起来一直指向全局的词法环境，因此形成了作用域链。")]),a._v(" "),i("h3",{attrs:{id:"闭包是怎么形成的？"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#闭包是怎么形成的？","aria-hidden":"true"}},[a._v("#")]),a._v(" 闭包是怎么形成的？")]),a._v(" "),i("p",[a._v("可执行上下文中的词法环境中含有外部词法环境的引用，我们可以通过这个引用获取外部词法环境的变量、声明等，因此形成了闭包。")]),a._v(" "),i("p",[a._v("参考")]),a._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement-runtime-semantics-labelledevaluation",target:"_blank",rel:"noopener noreferrer"}},[a._v("ecma标准"),i("OutboundLink")],1)]),a._v(" "),i("li",[i("a",{attrs:{href:"https://www.valentinog.com/blog/engines/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript调用栈到异步"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);