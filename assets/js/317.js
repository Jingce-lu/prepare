(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{456:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一次性搞懂js中的原型与原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一次性搞懂js中的原型与原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 一次性搞懂js中的原型与原型链")]),t._v(" "),a("h2",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/prepare/js/jsproto.jpg"),alt:"prepare/js/jsproto.jpg"}}),t._v(" "),a("p",[t._v("每个对象都有 "),a("code",[t._v("__proto__")]),t._v(" 属性，指向了创建该对象的构造函数的原型。其实这个 属性指向了 "),a("code",[t._v("[[prototype]]")]),t._v("，但是 "),a("code",[t._v("[[prototype]]")]),t._v(" 是内部属性，我们并不能访问到， 所以使用 "),a("em",[t._v("proto")]),t._v(" 来访问。 对象可以通过 "),a("code",[t._v("__proto__")]),t._v(" 来寻找不属于该对象的属性，"),a("code",[t._v("__proto__")]),t._v(" 将对象连接起 来组成了原型链。")]),t._v(" "),a("p",[t._v("一个对象除了自身的显示属性外还隐含一个_proto_属性，这个属性指向创建该对象的构造函数的原型。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例对象：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("谈到继承时，JavaScript 只有一种结构：对象")]),t._v(" "),a("p",[t._v("每个函数都有 "),a("code",[t._v("prototype")]),t._v(" 属性，除了 "),a("code",[t._v("Function.prototype.bind()")]),t._v("，该属性指向原型。")]),t._v(" "),a("h2",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype","aria-hidden":"true"}},[t._v("#")]),t._v(" prototype")]),t._v(" "),a("blockquote",[a("p",[t._v('每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。')])]),t._v(" "),a("p",[t._v("每个函数对象都有一个属性prototype(函数对象特有属性)，这个属性是一个引用，指向一个对象，这个对象的作用就是包含所有实例共享的属性和方法。我们把这个对象就叫做原型对象，也叫"),a("strong",[t._v("显式原型")]),t._v("。")]),t._v(" "),a("p",[t._v("函数的 "),a("code",[t._v("prototype")]),t._v(" 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 "),a("code",[t._v("f1 的原型")]),t._v("。"),a("code",[t._v("prototype")]),t._v("带有"),a("code",[t._v("__proto__")]),t._v("和"),a("code",[t._v("constructor")])]),t._v(" "),a("h2",{attrs:{id:"proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proto","aria-hidden":"true"}},[t._v("#")]),t._v(" proto")]),t._v(" "),a("blockquote",[a("p",[t._v("每一个JavaScript对象(除了 null )都具有的一个属性，叫"),a("code",[t._v("__proto__")]),t._v("，这个属性会指向了"),a("strong",[t._v("创建该对象的构造函数")]),t._v("的原型。")])]),t._v(" "),a("p",[t._v("每个对象都有一个属性"),a("code",[t._v("__proto__")]),t._v("，也可称为"),a("strong",[t._v("隐式原型")]),t._v("，对象的隐式原型指向创建该对象的构造函数的原型(prototype)。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_proto_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("blockquote",[a("p",[t._v("每个原型都有一个 constructor 属性指向关联的构造函数")])]),t._v(" "),a("p",[t._v("函数的原型对象有一个constructor属性，这个属性是一个引用，用于指向原构造函数。")]),t._v(" "),a("p",[t._v("由于实例对象可以继承原型对象的属性，所以实例对象也拥有constructor属性，同样指向原型对象对应的构造函数。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constructor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("原型链是一种机制，指的是js中，每个对象都有一个属性"),a("code",[t._v("__proto__")]),t._v("，"),a("strong",[t._v("指向它的构造函数的原型对象")]),t._v("。原型对象也是一个对象，因此也有"),a("code",[t._v("__proto__")]),t._v("属性指向原型对象的原型对象，这样一层层向上直到对象的原型对象为空（Object的原型对象Object.prototpye的属性__proto__为null）。")]),t._v(" "),a("p",[t._v("JS在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做"),a("code",[t._v("__proto__")]),t._v("的内置属性，用于指向创建它的函数对象的原型对象"),a("code",[t._v("prototype")]),t._v("。以上面的例子为例：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("同样Foo.prototype也有proto属性")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Object.prototype对象也有proto属性，但它比较特殊，为null")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我们把这个有"),a("code",[t._v("proto")]),t._v("串起来的直到"),a("code",[t._v("Object.prototype.proto")]),t._v("为null的链叫做原型链。原型链的形成是真正是靠"),a("code",[t._v("proto")]),t._v(" 而非"),a("code",[t._v("prototype")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[t._v("每个构造函数都有一个原型对象 "),a("code",[t._v("Foo.prototype")])]),t._v(" "),a("li",[t._v("原型对象都包含一个指向构造函数的指针 "),a("code",[t._v("Foo.prototype.constructor === Foo")])]),t._v(" "),a("li",[t._v("实例都包含一个指向原型对象的内部指针 "),a("code",[t._v("fo.__proto__ === Foo.prototype")])])]),t._v(" "),a("br"),t._v(" "),a("ol",[a("li",[t._v("每个对象都有一个"),a("code",[t._v("__proto__")]),t._v("属性，指向创建它的构造函数的原型对象。"),a("br"),t._v(" "),a("strong",[t._v("作用")]),t._v("：构成原型链，用于实现基于原型的继承。")]),t._v(" "),a("li",[t._v("函数除了有"),a("code",[t._v("__proto__")]),t._v("属性，还有一个"),a("code",[t._v("prototype")]),t._v("属性，用来指向函数的原型对象。\n作用：用于实现基于原型的继承和属性共享。"),a("br"),t._v("\n因此，你会在很多地方见到有类似这样的写法："),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hello")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),t._v("上边代码表示，所有Person创建的实例对象都可以共享hello方法。")]),t._v(" "),a("li",[t._v("构造函数的原型对象有属性"),a("code",[t._v("constructor")]),t._v("，指向构造函数本身。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/prepare/know/js02.png"),alt:"prepare/know/js02.png"}})])}),[],!1,null,null,null);s.default=e.exports}}]);