(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{546:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"js-按位运算符及其妙用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-按位运算符及其妙用","aria-hidden":"true"}},[s._v("#")]),s._v(" js 按位运算符及其妙用")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1、-按位与"}},[s._v("1、& 按位与")])]),t("li",[t("a",{attrs:{href:"#_2、-按位或"}},[s._v("2、| 按位或")])]),t("li",[t("a",{attrs:{href:"#_3、-按位异或"}},[s._v("3、^ 按位异或")])]),t("li",[t("a",{attrs:{href:"#_4、-按位非"}},[s._v("4、~ 按位非")])]),t("li",[t("a",{attrs:{href:"#_5、-右移"}},[s._v("5、>> 右移")])]),t("li",[t("a",{attrs:{href:"#_6、-左移"}},[s._v("6、<< 左移")])]),t("li",[t("a",{attrs:{href:"#_7、-无符号右移"}},[s._v("7、>>> 无符号右移")])]),t("li",[t("a",{attrs:{href:"#位运算符在-js-中的妙用"}},[s._v("位运算符在 js 中的妙用")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1、使用-运算符判断一个数的奇偶"}},[s._v("1、使用&运算符判断一个数的奇偶")])]),t("li",[t("a",{attrs:{href:"#_2、使用-，-来取整"}},[s._v("2、使用~~，>>,<<,>>>,|来取整")])]),t("li",[t("a",{attrs:{href:"#_3、使用-来计算乘除"}},[s._v("3、使用<<,>>来计算乘除")])]),t("li",[t("a",{attrs:{href:"#_4、利用-来完成比较两个数是否相等"}},[s._v("4、利用^来完成比较两个数是否相等")])]),t("li",[t("a",{attrs:{href:"#_5、使用-来完成值交换"}},[s._v("5、使用^来完成值交换")])]),t("li",[t("a",{attrs:{href:"#_6、使用-来完成-rgb-值和-16-进制颜色值之间的转换"}},[s._v("6、使用&,>>,|来完成 rgb 值和 16 进制颜色值之间的转换")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"_1、-按位与"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、-按位与","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、& 按位与")]),s._v(" "),t("p",[s._v("&是二元运算符，它以特定的方式的方式组合操作数中对应的位，如果对应的位都为 1，那么结果就是 1， 如果任意一个位是 0 则结果就是 0。")]),s._v(" "),t("p",[s._v("1 & 3 的结果为 1")]),s._v(" "),t("p",[s._v("那我们来看看他是怎么运行的")]),s._v(" "),t("p",[s._v("1 的二进制表示为 0 0 0 0 0 0 1")]),s._v(" "),t("p",[s._v("3 的二进制表示为 0 0 0 0 0 1 1")]),s._v(" "),t("p",[s._v("根据 & 的规则 得到的结果为 0 0 0 0 0 0 0 1,十进制表示就是 1")]),s._v(" "),t("h2",{attrs:{id:"_2、-按位或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、-按位或","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、| 按位或")]),s._v(" "),t("p",[s._v("|运算符跟&的区别在于如果对应的位中任一个操作数为 1 那么结果就是 1。")]),s._v(" "),t("p",[s._v("1 的二进制表示为 0 0 0 0 0 0 1")]),s._v(" "),t("p",[s._v("3 的二进制表示为 0 0 0 0 0 1 1")]),s._v(" "),t("p",[s._v("所以 1 | 3 的结果为 3")]),s._v(" "),t("h2",{attrs:{id:"_3、-按位异或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、-按位异或","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、^ 按位异或")]),s._v(" "),t("p",[s._v("^运算符跟|类似，但有一点不同的是 如果两个操作位都为 1 的话，结果产生 0。")]),s._v(" "),t("p",[s._v("1 的二进制表示为 0 0 0 0 0 0 1")]),s._v(" "),t("p",[s._v("3 的二进制表示为 0 0 0 0 0 1 1")]),s._v(" "),t("p",[s._v("所以 1 ^ 3 的结果为 2")]),s._v(" "),t("h2",{attrs:{id:"_4、-按位非"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、-按位非","aria-hidden":"true"}},[s._v("#")]),s._v(" 4、~ 按位非")]),s._v(" "),t("p",[s._v("~运算符是对位求反，1 变 0,0 变 1，也就是求二进制的反码")]),s._v(" "),t("p",[s._v("1 的二进制表示为 0 0 0 0 0 0 1")]),s._v(" "),t("p",[s._v("所以 ~1 的结果是-2")]),s._v(" "),t("h2",{attrs:{id:"_5、-右移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、-右移","aria-hidden":"true"}},[s._v("#")]),s._v(" 5、>> 右移")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -> 5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("算数右移就是将二进制全部往右移动并去除多余的右边，10 在二进制中表示为 1010 ，右移一位后变成 101 ，转换为十进制也就是 5，所以基本可以把右移看成以下公式 "),t("code",[s._v("int v = a / (2 ^ b)")])]),s._v(" "),t("p",[s._v("右移很好用，比如可以用在二分算法中取中间值")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -> 6")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v(">>")]),s._v(" 运算符使指定值的二进制所有位都右移规定的次数，对于其移动规则只需记住符号位不变，左边补上符号位即按二进制形式把所有的数字向右移动对应的位数，低位移出(舍弃)，高位的空位补符号位，即正数补零，负数补 1。")]),s._v(" "),t("p",[s._v("1 的二进制表示为 0 0 0 0 0 0 1")]),s._v(" "),t("p",[s._v("所以 1>>1 的结果为 0")]),s._v(" "),t("blockquote",[t("p",[s._v("注：x>>1 是位运算中的右移运算，表示右移一位，等同于 x 除以 2 再取整，即 x>>1 == Math.floor(x/2) 。")])]),s._v(" "),t("h2",{attrs:{id:"_6、-左移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、-左移","aria-hidden":"true"}},[s._v("#")]),s._v(" 6、<< 左移")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -> 20")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("左移就是将二进制全部往左移动，"),t("code",[s._v("10")]),s._v(" 在二进制中表示为 "),t("code",[s._v("1010")]),s._v(" ，左移一位后变成 "),t("code",[s._v("10100")]),s._v(" ，转换为十进制也就是 20，所以基本可以把左移看成以下公式 "),t("code",[s._v("a * (2 ^ b)")])]),s._v(" "),t("p",[s._v("<<运算符使指定值的二进制所有位都左移规定的次数，对于其移动规则只需记住丢弃最高位，0 补最低位即按二进制形式把所有的数字向左移动对应的位数，高位移出(舍弃)，低位的空位补零。")]),s._v(" "),t("p",[s._v("1 的二进制表示为 0 0 0 0 0 0 1")]),s._v(" "),t("p",[s._v("所以 1<<1 的结果为 2")]),s._v(" "),t("h2",{attrs:{id:"_7、-无符号右移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、-无符号右移","aria-hidden":"true"}},[s._v("#")]),s._v(" 7、>>> 无符号右移")]),s._v(" "),t("p",[t("code",[s._v(">>>")]),s._v(" 运算符忽略了符号位扩展，0 补最高位，但是只是对 32 位和 64 位的值有意义。")]),s._v(" "),t("h2",{attrs:{id:"位运算符在-js-中的妙用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算符在-js-中的妙用","aria-hidden":"true"}},[s._v("#")]),s._v(" 位运算符在 js 中的妙用")]),s._v(" "),t("h3",{attrs:{id:"_1、使用-运算符判断一个数的奇偶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用-运算符判断一个数的奇偶","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、使用&运算符判断一个数的奇偶")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("偶数 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n奇数 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n那么 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2、使用-，-来取整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用-，-来取整","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、使用~~，>>,<<,>>>,|来取整")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v("不可对负数取整"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n注意："),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 其它的一样\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ~~ 被用作一个更快的替代 Math.floor()")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_3、使用-来计算乘除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用-来计算乘除","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、使用<<,>>来计算乘除")]),s._v(" "),t("p",[s._v("乘法：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("次方"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("次方"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_4、利用-来完成比较两个数是否相等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、利用-来完成比较两个数是否相等","aria-hidden":"true"}},[s._v("#")]),s._v(" 4、利用^来完成比较两个数是否相等")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" 非 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 数 ！"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n所以同一个数……同一个数等于 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("，否则不等于 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_5、使用-来完成值交换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、使用-来完成值交换","aria-hidden":"true"}},[s._v("#")]),s._v(" 5、使用^来完成值交换")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^=")]),s._v(" b\nb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^=")]),s._v(" a\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^=")]),s._v(" b\n\n结果 a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_6、使用-来完成-rgb-值和-16-进制颜色值之间的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、使用-来完成-rgb-值和-16-进制颜色值之间的转换","aria-hidden":"true"}},[s._v("#")]),s._v(" 6、使用&,>>,|来完成 rgb 值和 16 进制颜色值之间的转换")]),s._v(" "),t("p",[s._v("16 进制颜色值转 RGB：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hexToRGB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("hex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    g "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rgb("')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" g "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('")"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("RGB 转 16 进制颜色值：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("RGBToHex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("rgb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rgbArr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rgb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/[^\\d]+/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    color "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rgbArr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rgbArr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" rgbArr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v('运行 hexToRGB("#ffffff")返回"rgb(255,255,255)"')]),s._v(" "),t("p",[s._v('运行 RGBToHex("rgb(255,255,255)")返回"#ffffff"')])])}),[],!1,null,null,null);a.default=e.exports}}]);