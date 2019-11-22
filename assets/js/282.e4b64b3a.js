(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{589:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"node进程管理器pm2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node进程管理器pm2","aria-hidden":"true"}},[s._v("#")]),s._v(" Node进程管理器PM2")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#node%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8pm2"}},[s._v("Node进程管理器PM2")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7%E5%92%8C%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E5%9C%B0%E6%96%B9"}},[s._v("使用技巧和需要注意的地方")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#1%E5%9F%BA%E6%9C%AC%E6%8C%87%E4%BB%A4"}},[s._v("1、基本指令")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#2%E6%9F%A5%E7%9C%8B%E6%9C%8D%E5%8A%A1%E8%BF%9B%E7%A8%8B%E6%95%B0"}},[s._v("2、查看服务进程数")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#3-%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81nginx"}},[s._v("3、 是否需要nginx")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#4fork%E4%B8%8Ecluster%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F"}},[s._v("4、fork与cluster启动模式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#5pm2%E7%9A%84%E7%9B%91%E6%8E%A7"}},[s._v("5、pm2的监控")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#6%E6%97%A5%E5%BF%97%E9%97%AE%E9%A2%98"}},[s._v("6、日志问题")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#7%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95"}},[s._v("7、高级用法")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#8%E7%A8%B3%E5%AE%9A%E8%BF%90%E8%A1%8C%E5%BB%BA%E8%AE%AE"}},[s._v("8、稳定运行建议")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#9%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2"}},[s._v("9、自动化部署")])])])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8pm2%E5%90%AF%E5%8A%A8vue%E9%A1%B9%E7%9B%AE"}},[s._v("使用pm2启动Vue项目")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8%E9%A1%B9%E7%9B%AE"}},[s._v("启动项目")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%B8%B8%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4"}},[s._v("常使用命令:")])])])])])])]),s._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"http://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2官网"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2 github"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"使用技巧和需要注意的地方"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用技巧和需要注意的地方","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用技巧和需要注意的地方")]),s._v(" "),n("p",[n("code",[s._v("PM2")]),s._v("是一个带有"),n("strong",[s._v("负载均衡")]),s._v("功能的"),n("code",[s._v("Node")]),s._v("应用的进程管理器。"),n("code",[s._v("PM2")]),s._v("可以利用服务器上的"),n("strong",[s._v("所有CPU")]),s._v("，并保证进程永远都活着，"),n("strong",[s._v("0秒的重载")]),s._v("，部署管理"),n("strong",[s._v("多个Node项目")]),s._v("。"),n("code",[s._v("PM2")]),s._v("是"),n("code",[s._v("Node")]),s._v("线上部署完美的管理工具。")]),s._v(" "),n("h3",{attrs:{id:"_1、基本指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本指令","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、基本指令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g ： 全局安装。\n\npm2 start app.js ： 启动服务，入口文件是app.js。\n\npm2 start app.js -i "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ： 启动n个进程，名字命名为name。\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" restart  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name or id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ： 重启服务。\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" reload  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name or id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ： 和rastart功能相同，但是可以实现0s的无缝衔接；如果有nginx的使用经验，可以\n对比nginx reload指令。\n\npm2 start app.js --max_memory_restart 1024M ： \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当内存超过1024M时自动重启。 如果工程中有比较棘手的内 存泄露问题，这个算是一个折中方案。")]),s._v("\n\npm2 monit ： 对服务进行监控。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"_2、查看服务进程数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看服务进程数","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、查看服务进程数")]),s._v(" "),n("p",[s._v("至于要启动几个进程，可以通过服务器的内核数进行确定，几个内核就启动几个服务。指令如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看物理CPU个数")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"physical id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看每个物理CPU中core的个数(即核数)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpu cores"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看逻辑CPU的个数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"processor"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("当然可以启动多个端口，一个端口号对应一个服务，这样的话就需要nignx来做负载均衡了。")]),s._v(" "),n("h3",{attrs:{id:"_3、-是否需要nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、-是否需要nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、 是否需要nginx")]),s._v(" "),n("p",[s._v("nginx可以做的事情主要有两个：")]),s._v(" "),n("blockquote",[n("ol",[n("li",[s._v("反向代理，实现简单的负载均衡： 如果有多台服务器或者一台服务器多个端口，可以考虑用nginx。")]),s._v(" "),n("li",[s._v("静态资源缓存：把一些静态资源（如静态页面，js等资源文件）放到nginx里，可以极大的提高服务的性能。")])])]),s._v(" "),n("h3",{attrs:{id:"_4、fork与cluster启动模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、fork与cluster启动模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 4、fork与cluster启动模式")]),s._v(" "),n("p",[s._v("开发环境中多以"),n("code",[s._v("fork")]),s._v("的方式启动，生产环境中多用"),n("code",[s._v("cluster")]),s._v("方式启动"),n("br"),s._v("\n上面的示例图中可以看一“watching”一项，这个项默认是disabled，可以通过如下命令开启")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pm2 start app.js --name m --watch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("建议：这个适合在开发时用，可以省不少时间，生产环境下最好不要用")])]),s._v(" "),n("blockquote",[n("ol",[n("li",[s._v("cluster是fork的派生，cluster支持所有cluster拥有的特性；")]),s._v(" "),n("li",[s._v("fork不支持socket地址端口复用，cluster支持地址端口复用。因为只有node的cluster模块支持socket选项SO_REUSEADDR；")])])]),s._v(" "),n("p",[n("code",[s._v("fork不可以启动多个实例进程，cluster可以启动多个实例。但node的child_process.fork是可以实现启动多个进程的，但是为什么没有实现呢？就个人理解，node多为提供网络服务，启动多个实例需要地址端口复用，此时便可使用cluster模式实现，但fork模式并不支持地址端口复用，多实例进程启动会产生异常错误。但对于常驻任务脚本而言，不需要提供网络服务，此时多进程启动可以实现，同时也提高了任务处理效率。对于上述需求，可以两种方式实现，一是配置app0,app1,app2方式启动多个进程，二是通过应用实例自身调用child_process.fork多进程编程实现；")])]),s._v(" "),n("p",[s._v("fork模式可以应用于其他语言，如php，python，perl，ruby，bash，coffee， 而cluster只能应用于node;")]),s._v(" "),n("p",[s._v("fork不支持定时重启，cluster支持定时重启。定时重启也就是配置中的cron_restart配置项。")]),s._v(" "),n("h3",{attrs:{id:"_5、pm2的监控"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、pm2的监控","aria-hidden":"true"}},[s._v("#")]),s._v(" 5、pm2的监控")]),s._v(" "),n("p",[s._v("pm2的监控有两种方式：")]),s._v(" "),n("ol",[n("li",[n("p",[n("strong",[s._v("cli方式监控")]),s._v("\npm2 monit是专门用来监控的命令，监控项包括cpu与内存"),n("br"),s._v("\n缺点monit展示内容太过粗糙，不够详细")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("pm2 list展示当前所有pm2的管理项目")]),s._v("\n可以查看出每个进程的运行状态。\n如果需要更详细的监控内容，对于cli而言一般都是可以实现的。\n这种监控方式的缺点：")]),s._v(" "),n("blockquote",[n("p",[s._v("a. 不够直观，需要自己去执行命令并分析结果；"),n("br"),s._v("\nb. 不便于多台服务器的应用监控管理；")])])])]),s._v(" "),n("h3",{attrs:{id:"_6、日志问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、日志问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 6、日志问题")]),s._v(" "),n("p",[s._v("日志系统对于任意应用而言，通常都是必不可少的一个辅助功能。pm2的相关文件默认存放于$HOME/.pm2/目录下，其日志主要有两类：")]),s._v(" "),n("ol",[n("li",[s._v("pm2自身的日志，存放于$HOME/.pm2/pm2.log；")]),s._v(" "),n("li",[s._v("pm2所管理的应用的日志，存放于$HOME/.pm2/logs/目录下，标准谁出日志存放于${APP_NAME}_out.log，标准错误日志存放于${APP_NAME}_error.log；")])]),s._v(" "),n("p",[s._v("这里之所以把日志单独说明一下是因为，如果程序开发不严谨，为了调试程序，导致应用产生大量标准输出，使服务器本身记录大量的日志，导致服务磁盘满载问题。一般而言，pm2管理的应用本身都有自己日志系统，所以对于这种不必要的输出内容需禁用日志，重定向到/dev/null。")]),s._v(" "),n("p",[s._v("与crontab比较，也有类似情况，crontab自身日志，与其管理的应用本身的输出。应用脚本输出一定需要重定向到/dev/null，因为该输出内容会以邮件的形式发送给用户，内容存储在邮件文件，会产生意向不到的结果，或会导致脚本压根不被执行；")]),s._v(" "),n("h3",{attrs:{id:"_7、高级用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、高级用法","aria-hidden":"true"}},[s._v("#")]),s._v(" 7、高级用法")]),s._v(" "),n("p",[s._v("pm2支持配置文件启动："),n("br"),s._v("\npm2 ecosystem： 生成配置文件ecosystem.json"),n("br"),s._v("\npm2 startOrRestart /file/path/ecosystem.json : 通过配置文件启动服务")]),s._v(" "),n("p",[s._v("如下是开发时ecosystem.json的内容：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Application configuration section\n   * http://pm2.keymetrics.io/docs/usage/application-declaration/\n   * 多个服务，依次放到apps对应的数组里\n   */")]),s._v("\n  apps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// First application")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nova"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      max_memory_restart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300M"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/nova/app.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      out_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/logs/nova_out.log"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      error_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/logs/nova_error.log"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      instances"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      exec_mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("上述采用cluster模式启动了4个服务进程；如果服务占用的内存超过300M，会自动进行重启。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("配置项\n\nname  应用进程名称；\n\nscript  启动脚本路径；\n\ncwd  应用启动的路径，关于script与cwd的区别举例说明：在/home/polo/目录下运行/data/release/node/\nindex.js，此处script为/data/release/node/index.js，cwd为/home/polo/；\n\nargs  传递给脚本的参数；\n\ninterpreter  指定的脚本解释器；\n\ninterpreter_args  传递给解释器的参数；\n\ninstances  应用启动实例个数，仅在cluster模式有效，默认为fork；\n\nexec_mode  应用启动模式，支持fork和cluster模式；\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v("  监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启；\n\nignore_watch  忽略监听的文件夹，支持正则表达式；\n\nmax_memory_restart  最大内存限制数，超出自动重启；\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("  环境变量，object类型，如"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ID"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"42"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("；\n\nlog_date_format  指定日志日期格式，如YYYY-MM-DD HH:mm:ss；\n\nerror_file  记录标准错误流，"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.pm2/logs/XXXerr.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，代码错误可在此文件查找；\n\nout_file  记录标准输出流，"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.pm2/logs/XXXout.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，如应用打印大量的标准输出，会导致pm2日志过大；\n\nmin_uptime  应用运行少于时间被认为是异常启动；\n\nmax_restarts  最大异常重启次数，即小于min_uptime运行时间重启次数；\n\nautorestart  默认为true, 发生异常的情况下自动重启；\n\ncron_restart  crontab时间格式重启应用，目前只支持cluster模式；\n\nforce  默认false，如果true，可以重复启动一个脚本。pm2不建议这么做；\n\nrestart_delay  异常重启情况下，延时重启时间；\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("h3",{attrs:{id:"_8、稳定运行建议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、稳定运行建议","aria-hidden":"true"}},[s._v("#")]),s._v(" 8、稳定运行建议")]),s._v(" "),n("p",[s._v("PM2是一款非常优秀的Node进程管理工具，它有着丰富的特性：能够充分利用多核CPU且能够负载均衡、能够帮助应用在崩溃后、指定时间(cluster model)和超出最大内存限制等情况下实现自动重启。")]),s._v(" "),n("p",[s._v("个人几点看法保证常驻应用进程稳定运行：")]),s._v(" "),n("ol",[n("li",[s._v("定时重启，应用进程运行时间久了或许总会产生一些意料之外的问题，定时可以规避一些不可测的情况；")]),s._v(" "),n("li",[s._v("最大内存限制，根据观察设定合理内存限制，保证应用异常运行；")]),s._v(" "),n("li",[s._v("合理min_uptime，min_uptime是应用正常启动的最小持续运行时长，超出此时间则被判定为异常启动；")]),s._v(" "),n("li",[s._v("设定异常重启延时restart_delay，对于异常情况导致应用停止，设定异常重启延迟可防止应用在不可测情况下不断重启的导致重启次数过多等问题；")]),s._v(" "),n("li",[s._v("设置异常重启次数，如果应用不断异常重启，并超过一定的限制次数，说明此时的环境长时间处于不可控状态，服务器异常。此时便可停止尝试，发出错误警告通知等。")])]),s._v(" "),n("p",[s._v("关于pm2的使用，主要还是运用于常驻脚本。")]),s._v(" "),n("h3",{attrs:{id:"_9、自动化部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9、自动化部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 9、自动化部署")]),s._v(" "),n("p",[s._v("通过shell脚本实现资源拉取、服务重启、nginx缓存更新等操作，再配合pm2的监控功能，就初步达到了一个后端工程部署的标配了。")]),s._v(" "),n("h2",{attrs:{id:"使用pm2启动vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用pm2启动vue项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用pm2启动Vue项目")]),s._v(" "),n("p",[s._v("主要特性：")]),s._v(" "),n("blockquote",[n("p",[s._v("内建负载均衡（使用Node cluster 集群模块）"),n("br"),s._v("\n后台运行"),n("br"),s._v("\n0秒停机重载，我理解大概意思是维护升级的时候不需要停机."),n("br"),s._v("\n具有Ubuntu和CentOS 的启动脚本"),n("br"),s._v("\n停止不稳定的进程（避免无限循环）"),n("br"),s._v("\n控制台检测"),n("br"),s._v("\n提供 HTTP API\n远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )")])]),s._v(" "),n("h3",{attrs:{id:"启动项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动项目")]),s._v(" "),n("p",[s._v("Vue项目,进入项目目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ pm2 start build/dev-server.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("列出由pm2管理的所有进程信息,还会显示一个进程会被启动多少次，因为没处理的异常。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ pm2 list\n$ pm2 monit "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监视每个node进程的CPU和内存的使用情况")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"常使用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常使用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常使用命令:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ pm2 logs 显示所有进程日志\n$ pm2 stop all 停止所有进程\n$ pm2 restart all 重启所有进程\n$ pm2 reload all "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("秒停机重载进程 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("用于 NETWORKED 进程"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ pm2 stop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 停止指定的进程\n$ pm2 restart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 重启指定的进程\n$ pm2 startup 产生 init 脚本 保持进程活着\n$ pm2 web 运行健壮的 computer API endpoint\n$ pm2 delete "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 杀死指定的进程\n$ pm2 delete all 杀死全部进程 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("用法")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用法")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令行安装 pm2 ")]),s._v("\n$ pm2 start app.js -i "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后台运行pm2，启动4个app.js ")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以把'max' 参数传递给 start")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正确的进程数目依赖于Cpu的核心数目")]),s._v("\n$ pm2 start app.js --name my-api "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名进程")]),s._v("\n$ pm2 list               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程状态")]),s._v("\n$ pm2 monit              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监视所有进程")]),s._v("\n$ pm2 logs               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  显示所有进程日志")]),s._v("\n$ pm2 stop all           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有进程")]),s._v("\n$ pm2 restart all        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启所有进程")]),s._v("\n$ pm2 reload all         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0秒停机重载进程 (用于 NETWORKED 进程)")]),s._v("\n$ pm2 stop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止指定的进程")]),s._v("\n$ pm2 restart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启指定的进程")]),s._v("\n$ pm2 startup            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 产生 init 脚本 保持进程活着")]),s._v("\n$ pm2 web                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行健壮的 computer API endpoint (http://localhost:9615)")]),s._v("\n$ pm2 delete "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死指定的进程")]),s._v("\n$ pm2 delete all         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死全部进程")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行进程的不同方式：")]),s._v("\n$ pm2 start app.js -i max  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据有效CPU数目启动最大进程数目")]),s._v("\n$ pm2 start app.js -i "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动3个进程")]),s._v("\n$ pm2 start app.js -x        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用fork模式启动 app.js 而不是使用 cluster")]),s._v("\n$ pm2 start app.js -x -- -a "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用fork模式启动 app.js 并且传递参数 (-a 23)")]),s._v("\n$ pm2 start app.js --name serverone  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个进程并把它命名为 serverone")]),s._v("\n$ pm2 stop serverone       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 serverone 进程")]),s._v("\n$ pm2 start app.json        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动进程, 在 app.json里设置选项")]),s._v("\n$ pm2 start app.js -i max -- -a "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在--之后给 app.js 传递参数")]),s._v("\n$ pm2 start app.js -i max -e err.log -o out.log  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 并 生成一个配置文件")]),s._v("\n你也可以执行用其他语言编写的app  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" fork 模式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n$ pm2 start my-bash-script.sh    -x --interpreter "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n$ pm2 start my-python-script.py -x --interpreter python\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("秒停机重载:\n这项功能允许你重新载入代码而不用失去请求连接。\n注意：\n仅能用于web应用\n运行于Node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.11")]),s._v(".x版本\n运行于 cluster 模式（默认模式）\n$ pm2 reload all\n\nCoffeeScript:\n$ pm2 start my_app.coffee  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这就是全部")]),s._v("\n\nPM2准备好为产品级服务了吗？\n只需在你的服务器上测试\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/Unitech/pm2.git\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" pm2\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 npm install --dev ，如果devDependencies 没有安装")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("p",[s._v("pm2 list"),n("br"),s._v("\n列出由pm2管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/lu-frontwiki/images/js/node/pm2.jpg",alt:"pm2"}})]),s._v(" "),n("p",[s._v("pm2 monit"),n("br"),s._v("\n监视每个node进程的CPU和内存的使用情况。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/lu-frontwiki/images/js/node/pm21.jpg",alt:"pm2 monit"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);