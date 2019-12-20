(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{537:function(e,v,s){"use strict";s.r(v);var t=s(1),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,s=e._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"js面试题（vue）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js面试题（vue）","aria-hidden":"true"}},[e._v("#")]),e._v(" js面试题（vue）")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#js%E9%9D%A2%E8%AF%95%E9%A2%98vue"}},[e._v("js面试题（vue）")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-%E8%AF%B7%E8%AF%A6%E7%BB%86%E8%AF%B4%E4%B8%8B%E4%BD%A0%E5%AF%B9vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E7%90%86%E8%A7%A3"}},[e._v("1. 请详细说下你对vue生命周期的理解")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#2-vue-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE"}},[e._v("2. vue 生命周期图")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#3-%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9vue%E7%9A%84%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8E%9F%E7%90%86%E7%9A%84%E7%90%86%E8%A7%A3"}},[e._v("3. 谈谈你对vue的双向数据绑定的原理的理解")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#4-%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9vue%E7%BB%84%E4%BB%B6%E9%97%B4%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92"}},[e._v("4. 谈谈你对vue组件间数据传递")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#5-vue%E9%87%8C%E9%9D%A2%E7%88%B6%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E5%AD%90%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F"}},[e._v("5. vue里面父组件如何修改子组件样式")])])])])]),e._v(" "),s("h2",{attrs:{id:"_1-请详细说下你对vue生命周期的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-请详细说下你对vue生命周期的理解","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. 请详细说下你对vue生命周期的理解")]),e._v(" "),s("p",[e._v("vue的生命周期总共分为8个阶段：创建前/后，载入前/后，更新前/后，销毁前/后。")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("创建前/后：在beforeCreate阶段，vue实例的挂载元素"),s("code",[e._v("$el")]),e._v("和数据对象data都为undefined，还未初始化。在created阶段,vue实例的数据对象data有了，"),s("code",[e._v("$el")]),e._v("还没有。")])]),e._v(" "),s("li",[s("p",[e._v("载入前/后：在beforeMount阶段，vue实例的"),s("code",[e._v("$el")]),e._v("和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。")])]),e._v(" "),s("li",[s("p",[e._v("更新前/后：当data变化时，会触发beforeUpdate和updated方法。")])]),e._v(" "),s("li",[s("p",[e._v("销毁前/后：在执行destoryed方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。")])])]),e._v(" "),s("h2",{attrs:{id:"_2-vue-生命周期图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-生命周期图","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. vue 生命周期图")]),e._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:e.$withBase("/images/prepare/zonghe/0128vue1.png"),alt:"images/prepare/zonghe/0128vue1.png"}})]),e._v(" "),s("p",[e._v("实例代码：\n")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:e.$withBase("/images/prepare/zonghe/0128vue2.png"),alt:"images/prepare/zonghe/0128vue2.png"}})]),s("p"),e._v(" "),s("h2",{attrs:{id:"_3-谈谈你对vue的双向数据绑定的原理的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-谈谈你对vue的双向数据绑定的原理的理解","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. 谈谈你对vue的双向数据绑定的原理的理解")]),e._v(" "),s("p",[e._v("vue是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter,getter，在数据变动时发布消息给订阅者，触发相应的监听回调。")]),e._v(" "),s("p",[e._v("具体步骤：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("第一步：通过Observer提供的接口，对需要observe的数据对象进行递归遍历，给对象的每个属性、子属性对象的属性，都加上setter和getter（都绑定了一个专用的 "),s("code",[e._v("Dep")]),e._v("对象，这里的状态对象主要指组件当中的"),s("code",[e._v("data")]),e._v("属性）。"),s("br"),e._v("\n这样的话，给这个对象的某个值赋值，就会触发setter,那么就能监听到了数据变化。")])]),e._v(" "),s("li",[s("p",[e._v("第二步：compile解析模版指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。")])]),e._v(" "),s("li",[s("p",[e._v("第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是：")]),e._v(" "),s("ol",[s("li",[e._v("在自身实例化时往属性订阅器(dep)里面添加自己")]),e._v(" "),s("li",[e._v("自身必须有一个update()方法")]),e._v(" "),s("li",[e._v("待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。")])])]),e._v(" "),s("li",[s("p",[e._v("第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模版指令，最终利用Watcher搭起Observer和Compiler之间的通信桥梁，达到数据变化->视图更新；视图交互变化(input)->数据model变更的双向绑定效果。")])])]),e._v(" "),s("h2",{attrs:{id:"_4-谈谈你对vue组件间数据传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-谈谈你对vue组件间数据传递","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. 谈谈你对vue组件间数据传递")]),e._v(" "),s("ol",[s("li",[e._v("通过 props 的方式向子组件传递（父子组件）")]),e._v(" "),s("li",[e._v("vuex进行状态管理（父子组件和非父子组件）")]),e._v(" "),s("li",[e._v("非父子组件的通信传递 "),s("code",[e._v("Vue Event Bus($emit)")]),e._v("，使用Vue的实例，实现事件的监听和发布，实现组件之间数据的传递。")]),e._v(" "),s("li",[s("code",[e._v("inheritAttrs")]),e._v(" + "),s("code",[e._v("$attrs")]),e._v(" + "),s("code",[e._v("$listeners")])])]),e._v(" "),s("h2",{attrs:{id:"_5-vue里面父组件如何修改子组件样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue里面父组件如何修改子组件样式","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. vue里面父组件如何修改子组件样式")]),e._v(" "),s("blockquote",[s("p",[e._v("在使用 vue 的开发中，我们有时会引用外部组件，包括UI组件。"),s("br"),e._v("\n当 "),s("code",[e._v("<style>")]),e._v(" 标签有 "),s("code",[e._v("scoped")]),e._v(" 属性时，它的css只作用于当前组件中的元素。但是在父组件中添加了 "),s("code",[e._v("scoped")]),e._v(" 之后，父组件的样式将不会渗透到子组件中，所以在父组件中书写子组件的样式是无效的。")])]),e._v(" "),s("p",[e._v("解决方案:")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("去掉scoped")]),s("br"),e._v("\n在父组件的 "),s("code",[e._v("<style>")]),e._v(" 中去掉 "),s("code",[e._v("scoped")]),e._v(" 后，父组件中可以书写子组件的样式，但是需要注意避免污染了全局样式。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("混用本地和全局样式")]),s("br"),e._v("\n可以在同一个组件中同时使用有作用域和无作用域的样式：")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[e._v("<style>\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ...全局样式...*/")]),e._v("\n</style>\n\n<style scoped>\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ...本地样式... */")]),e._v("\n</style>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("使用深度作用选择器")]),s("br"),e._v("\n如果你希望 "),s("code",[e._v("scoped")]),e._v(" 样式中的一个选择器能够作用得 “"),s("strong",[e._v("更深")]),e._v("“，例如影响子组件，你可以使用 "),s("code",[e._v(">>>")]),e._v(" 操作符：")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("<style>\n.parent >>> .child")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ... */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n</style>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("有些像"),s("code",[e._v("SASS")]),e._v("之类的预处理器无法正确解析 "),s("code",[e._v(">>>")]),e._v(" 。这种情况下你可以用 "),s("code",[e._v("/deep/")]),e._v(" 操作符取而代之，"),s("code",[e._v("deep")]),e._v(" 是 "),s("code",[e._v(">>>")]),e._v(" 的别名，同样可以正常工作。")])])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("需要额外补充的是：")]),e._v(" "),s("ol",[s("li",[e._v("通过 v-html 创建的 DOM 内容不受作用域内的样式影响，但是你仍然可以通过深度作用选择器来为他们设置样式")]),e._v(" "),s("li",[e._v("CSS 作用域不能代替 class")]),e._v(" "),s("li",[e._v("在递归组件中小心使用后代选择器")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);