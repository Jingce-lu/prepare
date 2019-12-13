(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{580:function(t,v,e){"use strict";e.r(v);var s=e(1),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"仿饿了么项目，右侧商品组件动画，以及和购物车组件的联动效果，小球掉落效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仿饿了么项目，右侧商品组件动画，以及和购物车组件的联动效果，小球掉落效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 仿饿了么项目，右侧商品组件动画，以及和购物车组件的联动效果，小球掉落效果")]),t._v(" "),e("p",[t._v("要实现这个组件的效果，以及和底部购物车联动的效果")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207301.png"),alt:"vue/191207301.png"}}),t._v(" "),e("p",[t._v("这个组件能获取父组件foods上每个商品的数据，而且点击增加可以增加，点击删除可以删除")]),t._v(" "),e("p",[t._v("新建一个组件叫做cartcontrol，因为每一道菜都应该有这个组件，所以在goods父组件循环遍历goods出的food中把每一项food传递到子组件中去")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207302.png"),alt:"vue/191207302.png"}}),t._v(" "),e("p",[t._v("在这个组件中接收food，是一个对象")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207303.png"),alt:"vue/191207303.png"}}),t._v(" "),e("p",[t._v("写好这个组件的骨架，并且给他添加点击事件，并根据是商品的数量来决定是否显示")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207304.png"),alt:"vue/191207304.png"}}),t._v(" "),e("p",[t._v("编写这个业务组件的逻辑方法还是比较简单的，但是在这其中踩了两个坑")]),t._v(" "),e("p",[t._v("一个是food.count外部传递进来的food中并没有这个字段，所以引用了全局vue中的接口set方法，给其新增一个count字段")]),t._v(" "),e("p",[t._v("另一个是外部的food因为也引用了better-scroll，要使用点击事件要在better-scroll初始化构造函数时候设置click为true")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207305.png"),alt:"vue/191207305.png"}}),t._v(" "),e("p",[t._v("到这里最基本的业务逻辑已经over了，接下来给这个组件增加一些动画，让其不那么生硬")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207306.png"),alt:"vue/191207306.png"}}),t._v(" "),e("p",[t._v("暂时的动画方案是点击增加按钮的时候左侧减号按钮滚动至右边，因为要做这个效果所以得把左边组件给拆分开来")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207307.png"),alt:"vue/191207307.png"}}),t._v(" "),e("p",[t._v("外部做平移动画，内部做滚动动画，在外面给他套上一个transition层来添加过度动画，编写的less如下")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207308.png"),alt:"vue/191207308.png"}}),t._v(" "),e("p",[t._v("到这里就完成了动画的编写，去浏览器上测试一下效果")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207309.gif"),alt:"vue/191207309.gif"}}),t._v(" "),e("p",[t._v("之前我们通过vue.set方法给商品添加了count属性，因此改变的food数据传递到了外部组件，就可以在food组件中使用一个selectFoods方法获取这些被选中的数据")]),t._v(" "),e("p",[t._v("在food组件中新增加一个计算属性，通过双重循环遍历出被选中food的数据：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207310.png"),alt:"vue/191207310.png"}}),t._v(" "),e("p",[t._v("传递到购物车组件中替换掉之前模拟被选择的数据")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207311.png"),alt:"vue/191207311.png"}}),t._v(" "),e("p",[t._v("好啦，到这里这个组件就完成了，并且做到了和底部购物车的联动")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207312.gif"),alt:"vue/191207312.gif"}}),t._v(" "),e("p",[t._v("接下来再完善一下这个组件，给这个点击事件添加一个抛物线动画，点击以后让其能够抛送到购物车中")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207313.png"),alt:"vue/191207313.png"}}),t._v(" "),e("p",[t._v("这个动画比较复杂，因为每个小球的距离顶部的高度都不同，而且用户多次点击，就会有多次飞入的效果")]),t._v(" "),e("p",[t._v("首先是点击添加商品按钮，要给他派发一个事件传递到父组件中去：")]),t._v(" "),e("p",[t._v("在cartcontrol组件的添加方法，通过$emit派发到父组件中去")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207314.png"),alt:"vue/191207314.png"}}),t._v(" "),e("p",[t._v("goods父组件中接收：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207315.png"),alt:"vue/191207315.png"}}),t._v(" "),e("p",[t._v("再获取到购物车的DOM元素：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207316.png"),alt:"vue/191207316.png"}}),t._v(" "),e("p",[t._v("这样就可以在购物车组件中获取到cartcontrol子组件传递过去的数据了")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207317.png"),alt:"vue/191207317.png"}}),t._v(" "),e("p",[t._v("在shopcart中添加一个drop方法：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207318.png"),alt:"vue/191207318.png"}}),t._v(" "),e("p",[t._v("给其定义一个球的数组存放做动画的球，还有一个已经掉落球的数组")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207319.png"),alt:"vue/191207319.png"}}),t._v(" "),e("p",[t._v("小球动画给他三个动画事件钩子")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207320.png"),alt:"vue/191207320.png"}}),t._v(" "),e("p",[t._v("完善drop方法：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207321.png"),alt:"vue/191207321.png"}}),t._v(" "),e("p",[t._v("实现这三个动画钩子")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207322.png"),alt:"vue/191207322.png"}}),t._v(" "),e("p",[t._v("样式如下：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207323.png"),alt:"vue/191207323.png"}}),t._v(" "),e("p",[t._v("在这里就完成了小球掉落的动画效果")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/vue/191207324.gif"),alt:"vue/191207324.gif"}}),t._v(" "),e("p",[t._v("代码已上传至码云：")]),t._v(" "),e("p",[t._v("https://gitee.com/delisteam/ele-app-cart")])])}),[],!1,null,null,null);v.default=a.exports}}]);