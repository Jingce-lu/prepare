(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1134:function(t,e,s){"use strict";s.r(e);var v=s(45),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue使用better-scroll-城市组件实现字母联动选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue使用better-scroll-城市组件实现字母联动选择"}},[t._v("#")]),t._v(" Vue使用better-scroll----城市组件实现字母联动选择")]),t._v(" "),s("p",[t._v("在之前通过Better-scroll实现了城市选择页面最基本的功能，接下来把这个页面字母表联动的过程记录一下：")]),t._v(" "),s("p",[t._v("要实现的效果：")]),t._v(" "),s("ol",[s("li",[t._v("点击右侧字母表，页面移动到对应城市字母开头的地方")]),t._v(" "),s("li",[t._v("手指在右侧字母表上滑动，页面也会在对应城市字母开头的地方滑动")])]),t._v(" "),s("p",[t._v("页面列表和页面字母表是两个在City.vue中的兄弟组件，当点击CityAlphabet组件中的字母时，"),s("strong",[t._v("需要把点击到的字母传递到父组件，再由父组件发送给子组件，这样就实现了基本的兄弟组件传值")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207201.png"),alt:"vue/191207201.png"}}),t._v(" "),s("p",[t._v("首先在CityAlphabet组件中给循环出来的每个字母添加一个点击事件")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207202.png"),alt:"vue/191207202.png"}}),t._v(" "),s("p",[t._v("在methods中定义这个事件，把获取到内容发送到父组件")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207203.png"),alt:"vue/191207203.png"}}),t._v(" "),s("p",[t._v("父组件接收到这个事件")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207204.png"),alt:"vue/191207204.png"}}),t._v(" "),s("p",[t._v("父组件添加这个handleLetterChange方法，传递给list子组件")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207205.png"),alt:"vue/191207205.png"}}),t._v(" "),s("p",[t._v("在list组件中接收letter")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207206.png"),alt:"vue/191207206.png"}}),t._v(" "),s("p",[t._v("接下来使用watch监听器，监听每次点击传递过来letter的变化，再使用better-scroll的一个接口滚动到相应区域")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207207.png"),alt:"vue/191207207.png"}}),t._v(" "),s("p",[t._v("(在循环体内给每个循环添加一个ref属性，方便betterscroll去跳转)")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207208.png"),alt:"vue/191207208.png"}}),t._v(" "),s("p",[t._v("到这里基本点击跳转的功能基本实现了")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207209.png"),alt:"vue/191207209.png"}}),t._v(" "),s("p",[t._v("最后要实现右侧字母表滚动的监听：")]),t._v(" "),s("p",[t._v("在字母表组件中添加触摸开始，触摸移动，触摸结束事件")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207210.png"),alt:"vue/191207210.png"}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/vue/191207211.png"),alt:"vue/191207211.png"}})])}),[],!1,null,null,null);e.default=a.exports}}]);