(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(t,e,a){},258:function(t,e,a){"use strict";var r=a(99);a.n(r).a},259:function(t,e,a){"use strict";var r=a(100);a.n(r).a},266:function(t,e,a){"use strict";a.r(e);var r={data:function(){return{timer:null}},mounted:function(){var t=document.getElementsByClassName("word"),e=[],a=0;t[a].style.opacity=1;for(var r=0;r<t.length;r++)i(t[r]);function n(t,e){setTimeout((function(){t[e].className="letter out"}),80*e)}function s(t,e){setTimeout((function(){t[e].className="letter in"}),340+80*e)}function i(t){var a=t.innerHTML;t.innerHTML="";for(var r=[],n=0;n<a.length;n++){var s=document.createElement("span");s.className="letter",s.innerHTML=" "!==a.charAt(n)?a.charAt(n):"&nbsp;",t.appendChild(s),r.push(s)}e.push(r)}this.timer=setInterval((function(){for(var r=e[a],i=a==t.length-1?e[0]:e[a+1],o=0;o<r.length;o++)n(r,o);for(var v=0;v<i.length;v++)i[v].className="letter behind",i[0].parentElement.style.opacity=1,s(i,v);a=a==e.length-1?0:a+1}),3e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},n=(a(258),a(259),a(1)),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"timing"},[a("div",{ref:"word",staticClass:"word"},[t._v("Lu notes")]),t._v(" "),a("div",{ref:"word",staticClass:"word"},[t._v("Lu notes")])]),t._v(" "),a("div",{staticStyle:{"padding-top":"40px","text-align":"center"}},[a("b",[t._v("世路如今已惯")]),a("br"),t._v(" "),a("b",[t._v("此心到处悠然")])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"center"},[a("span",[a("a",{attrs:{href:t.$withBase("/js/")}},[t._v("Js")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/react/")}},[t._v("react")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/vue/")}},[t._v("vue")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/framework/")}},[t._v("framework")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/safety/")}},[t._v("safety")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/prepare/")}},[t._v("prepare")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/fullstack/")}},[t._v("fullstack")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/handrolledcode/")}},[t._v("handrolledcode")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/dataalgorithm/")}},[t._v("dataalgorithm")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/engineering/")}},[t._v("engineering")])]),t._v(" "),a("span",[a("a",{attrs:{href:t.$withBase("/other/")}},[t._v("other")])])]),t._v(" "),a("br"),t._v(" "),a("br")])}),[],!1,null,"569b7c94",null);e.default=s.exports},99:function(t,e,a){}}]);