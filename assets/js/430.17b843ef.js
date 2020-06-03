(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{589:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lint-staged如何做到只lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged如何做到只lint-staged","aria-hidden":"true"}},[t._v("#")]),t._v(" lint-staged如何做到只lint staged?")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("lint-staged针对暂存的git文件运行linters并且不要让 💩 进入你的代码库！")]),t._v(" "),a("p",[t._v("lint-staged在执行检查前会保存当前文件状态，然后清除掉修改，再执行lint任务，执行完毕再恢复。")]),t._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("流程大致分为四部分：")]),t._v(" "),a("ul",[a("li",[t._v("Stashing changes")]),t._v(" "),a("li",[t._v("Running linters")]),t._v(" "),a("li",[t._v("Updating stash")]),t._v(" "),a("li",[t._v("Restoring local changes")])]),t._v(" "),a("h3",{attrs:{id:"保留案发现场并清除干扰（stashing-changes-）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保留案发现场并清除干扰（stashing-changes-）","aria-hidden":"true"}},[t._v("#")]),t._v(" 保留案发现场并清除干扰（Stashing changes...）")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" write-tree "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到 indexTree")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" write-tree "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到 workingCopyTree")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" read-tree "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$indexTree")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout-index -af "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除文件修改（未暂存的test2.js被清除）")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("根据以上操作步骤得知，lint-staged通过tree对象来保存暂存区目录和工作区目录，并清除掉工作区修改文件")]),t._v(" "),a("h3",{attrs:{id:"执行代码检查任务（running-linters-）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行代码检查任务（running-linters-）","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行代码检查任务（Running linters...）")]),t._v(" "),a("p",[t._v('按照配置的命令走，比如配置了 "*.js": "eslint"')]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eslint test2.js test.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"更新（updating-stash-）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新（updating-stash-）","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新（Updating stash...）")]),t._v(" "),a("p",[t._v("上一步（Running linters）如果有检查到错误，直接跳过走下一步（Restoring local changes）")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" write-tree "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到 formattedIndexTree")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里需要特别声明一下，")]),t._v(" "),a("p",[t._v("如果上一步（Running linters）未检测到错误，那么这里得到的"),a("code",[t._v("formattedIndexTree")]),t._v(" 会和第一步的"),a("code",[t._v("indexTree")]),t._v("一样，如果检测到错误并将修复后文件添加到暂存区，如配置命令是"),a("code",[t._v("eslint --fix")]),t._v(" , "),a("code",[t._v("git add")]),t._v("的话，那么代码被修复过，"),a("code",[t._v("formattedIndexTree")]),t._v(" 与"),a("code",[t._v("indexTree")]),t._v("不同")]),t._v(" "),a("h3",{attrs:{id:"恢复案发现场（restoring-local-changes-）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复案发现场（restoring-local-changes-）","aria-hidden":"true"}},[t._v("#")]),t._v(" 恢复案发现场（Restoring local changes...）")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" read-tree "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workingCopyTree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先恢复工作区内容，对应第一步的git add .")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout-index -af "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除工作区修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" read-tree "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$formattedIndexTree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复暂存区内容 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" apply "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$patch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果修复了代码，也应用到工作区")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("归根结底，都是git对象的操作。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/docs/git-read-tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-read-tree"),a("OutboundLink")],1),t._v(" - Reads tree information into the index")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/docs/git-write-tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-write-tree"),a("OutboundLink")],1),t._v(" - Create a tree object from the current index")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/docs/git-checkout-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-checkout-index"),a("OutboundLink")],1),t._v(" - Copy files from the index to the working tree")])])])}),[],!1,null,null,null);e.default=n.exports}}]);