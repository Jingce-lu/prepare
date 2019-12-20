(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{589:function(t,e,v){"use strict";v.r(e);var s=v(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"仿饿了么外卖项目better-scroll插件的实战"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#仿饿了么外卖项目better-scroll插件的实战","aria-hidden":"true"}},[t._v("#")]),t._v(" 仿饿了么外卖项目better-scroll插件的实战")]),t._v(" "),v("p",[v("code",[t._v("better-scroll")]),t._v(" 是一款重点解决移动端各种滚动场景需求的插件，并且可以很好的和 Vue 配合使用")]),t._v(" "),v("p",[t._v("首先来总结一下当下项目需要通过这个插件解决的需求：")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120701.png"),alt:"vue/19120701.png"}}),t._v(" "),v("ol",[v("li",[t._v("左边商品种类列表可以滚动，右侧当前种类的商品详情也可以滚动")]),t._v(" "),v("li",[t._v("右侧上下滚动的时候左侧对应的种类也会高亮")]),t._v(" "),v("li",[t._v("点击左侧的种类的时候右侧会快速滑动至对应的商品")])]),t._v(" "),v("p",[t._v("首先安装better-scroll")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120702.png"),alt:"vue/19120702.png"}}),t._v(" "),v("p",[t._v("在项目中引入")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120703.png"),alt:"vue/19120703.png"}}),t._v(" "),v("p",[t._v("实例化bscroll的方法如下：")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120704.png"),alt:"vue/19120704.png"}}),t._v(" "),v("p",[t._v("在这个构造函数中第一个传通过类名获取的DOM对象，第二个则是传递一个配置参数对象，因此在VUE中我们需要获取到DOM对象")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120705.png"),alt:"vue/19120705.png"}}),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120706.png"),alt:"vue/19120706.png"}}),t._v(" "),v("p",[t._v("在vue的methods中实例化")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120707.png"),alt:"vue/19120707.png"}}),t._v(" "),v("p",[t._v("右侧的商品列表部分我们不光要实例化这个滚动组件，还需要监听他的滚动回调")]),t._v(" "),v("p",[t._v("在data中储存一个scrollY变量方便全局使用，同样实例化的这个foodscroll对象也需要存放到data中")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120708.png"),alt:"vue/19120708.png"}}),t._v(" "),v("p",[t._v("实例化foodscroll对象并赋值给data中的foodScroll")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120709.png"),alt:"vue/19120709.png"}}),t._v(" "),v("p",[t._v("在获取到数据的时候并且当DOM已经完全渲染时调用这个两个方法实例化滚动")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120710.png"),alt:"vue/19120710.png"}}),t._v(" "),v("p",[t._v("到这里第一步也完成了，测试一下效果，可以打印出右侧滚动的Y距")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120711.png"),alt:"vue/19120711.png"}}),t._v(" "),v("p",[t._v("接下来还需知道右侧每个商品种类的高度，以及总的高度")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120712.png"),alt:"vue/19120712.png"}}),t._v(" "),v("p",[t._v("同样在data中定义这个数组")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120713.png"),alt:"vue/19120713.png"}}),t._v(" "),v("p",[t._v("把每一项的高度都推送到数组中存储起来")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120714.png"),alt:"vue/19120714.png"}}),t._v(" "),v("p",[t._v("接下来就可以利用这个数组和之前获取到scrolly来获取当前的索引，使用计算属性方法，通过对比两个商品类目之间的距离是否在滚动范围内来返回不同的索引值")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120715.png"),alt:"vue/19120715.png"}}),t._v(" "),v("p",[t._v("绑定这个class")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120716.png"),alt:"vue/19120716.png"}}),t._v(" "),v("p",[t._v("到此第二步也完成了，现在右边滑动的时候左边也会在相应的区块添加当前样式")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120717.png"),alt:"vue/19120717.png"}}),t._v(" "),v("p",[t._v("最后一步点击左侧区块右边跳转：")]),t._v(" "),v("p",[t._v("很简单，在左侧每个列表中添加一个点击事件，把当前索引传递进去")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120718.png"),alt:"vue/19120718.png"}}),t._v(" "),v("p",[t._v("在这个方法中获取到右侧的列表，再调用这个插件对应的接口即可")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/images/vue/19120719.png"),alt:"vue/19120719.png"}})])}),[],!1,null,null,null);e.default=a.exports}}]);