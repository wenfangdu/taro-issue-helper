(function(t){function e(e){for(var s,o,a=e[0],u=e[1],l=e[2],d=0,p=[];d<a.length;d++)o=a[d],i[o]&&p.push(i[o][0]),i[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/taro-issue-helper/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00b3":function(t,e,n){var s={"./en/index.js":"5cb2","./index.js":"f1ed","./zh-cn/index.js":"bf3c"};function i(t){var e=r(t);return n(e)}function r(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="00b3"},"25d7":function(t,e){t.exports="描述一下你期望这个新功能的 API 是如何使用的，并提供一些代码示例。请用 [Markdown](https://help.github.com/cn/github/writing-on-github/basic-writing-and-formatting-syntax) 格式化你的代码片段。\n"},"2a4f":function(t,e){t.exports="所谓『重现』，就是一段可以运行并展示一个 bug 如何发生的代码。\n\n##### 文字是不够的\n\n如果你遇到一个问题，但是只提供了一些文字描述，我们是不可能修复这个 bug 的。首先，文字在描述技术问题时的表达难度和不精确性；其次，问题的真实原因有很多可能，它完全有可能是一个你根本没有提及的因素导致的。重现是唯一能够可靠地让我们理解问题本质的方式。\n\n##### 重现必须是可运行的\n\n**截图和视频不是重现**。它们仅仅证明了 bug 的存在，但却不能提供关于 bug 是如何发生的信息。只有可运行的代码提供了完整的上下文，并让我们可以进行真正的 debug 而不是空想和猜测。当然，在提供的重现的前提下，视频或是 gif 动画可以帮助解释一些比较难用文字描述的交互行为。\n\n##### 重现应当尽量精简\n\n有些用户会直接给我们一整个项目的代码，然后希望我们帮忙找出问题所在。此类请求我们通常不予接受，因为：\n\n- 你对你的项目的代码结构可能已经非常熟悉，但我们并不是。阅读、运行、分析一个完全陌生的项目是极其耗费时间和精力的。\n\n- 由于涉及了大量业务代码，问题可能是你的代码错误，而不是 Taro 的 bug 所导致的。\n\n一个最小化的重现意味着它精确地定位了 bug 本身 - 它应当只包含能够触发 bug 的**最少量**的代码。你应当尽可能地剔除任何跟该 bug 无关的部分。\n\n##### 如何提供一个重现\n\n我们建议使用 Taro CLI 的 `taro init` 来搭建一个新项目，推送到 GitHub 并提供仓库的链接。\n"},3043:function(t,e){t.exports="请提供一个能够重现你的问题的 GitHub 仓库。\n\n[什么是*最小化重现*，为什么这是必需的？](#why-repro)\n"},3599:function(t,e,n){},"36df":function(t,e,n){},4864:function(t,e,n){},"4e46":function(t,e){t.exports="Run the following command in your project's folder in terminal:\n\n`vue info`\n\nCopy and paste the output of the command in the section above.\n"},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("c93e"),i=(n("cadf"),n("551c"),n("097d"),n("2b0e")),r=n("8afe"),o=(n("ac6a"),n("386d"),n("0e54")),a=n.n(o),u=n("f1ed"),l=n("4328"),c=n.n(l),d=function(t){t.mixin({beforeCreate:function(){if(this.$root===this){this.$locales=u["default"];var e=c.a.parse(window.location.search.slice(1));t.util.defineReactive(this,"$lang",e&&e.lang||"zh-cn")}}});var e=function(t,e){return'[i18n content not found for { lang: "'.concat(t,'", id: "').concat(e,'" }')};function n(){var t=this;Object(r["a"])(this.$el.querySelectorAll("a")).forEach(function(e){e.setAttribute("tabindex","-1");var n=e.getAttribute("href");n&&("#"!==n.charAt(0)?e.setAttribute("target","_blank"):e.addEventListener("click",function(){t.$emit("click-modal")}))})}t.prototype.i18n=function(t){var n=this.$root,s=n.$locales,i=n.$lang,r=s[i];return r[t]||e(i,t)},t.component("i18n",{props:["id"],render:function(t){var n=this.$root,s=n.$locales,i=n.$lang,r=s[i],o=r[this.id];return t("div",{domProps:{innerHTML:o?a()(o.trim()):'<div style="color:red">'.concat(e(i,this.id),"</div>")}})},mounted:n,updated:n})},p=n("39f8"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("AppHeader",{attrs:{lang:t.$lang},on:{"change-lang":t.setLang}}),n("div",{staticClass:"container"},[n("form",{staticClass:"main-form",on:{submit:function(e){return e.preventDefault(),t.generate(e)}}},[n("FormIntro"),n("div",{staticClass:"common-fields vue-ui-grid col-2 default-gap"},[n("VueFormField",{staticClass:"first-row",attrs:{title:t.i18n("target-title")}},[n("VueSelect",{attrs:{required:""},model:{value:t.target,callback:function(e){t.target=e},expression:"target"}},t._l(t.targets,function(t){return n("VueSelectButton",{key:t.id,attrs:{value:t.id,label:t.name}})}))],1),n("VueFormField",{staticClass:"first-row",attrs:{title:t.i18n("type-title")}},[n("VueGroup",{staticClass:"extend",model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.types,function(e){return n("VueGroupButton",{key:e.id,attrs:{value:e.id}},[t._v("\n              "+t._s(e.name)+"\n            ")])}))],1),n("VueFormField",{staticClass:"span-2",attrs:{title:t.i18n("title-title")}},[n("VueInput",{staticClass:"info",attrs:{required:"",autofocus:""},on:{blur:t.findIssues},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("i18n",{attrs:{slot:"subtitle",id:"title-title-subtitle"},on:{"click-modal":function(e){t.titleShow=!0}},slot:"subtitle"}),n("template",{slot:"subtitle"},[t.issues.length?n("div",{staticClass:"similar-issues"},[t._v("\n              "+t._s(t.i18n("similar-issues"))+":\n\n              "),n("ul",t._l(t.issues,function(e){return n("li",{key:e.id},[n("a",{staticClass:"issue",attrs:{href:e.html_url,target:"_blank",rel:"noreferrer",tabindex:"-1"}},[t._v("\n                    "+t._s(e.title)+"\n                  ")])])})),t.showIssueToggleControl?n("p",[t.showingAllIssues?n("span",{attrs:{role:"button"},on:{click:function(e){t.showingAllIssues=!1}}},[t._v("\n                  "+t._s(t.i18n("show-less"))+"\n                ")]):n("span",{attrs:{role:"button"},on:{click:function(e){t.showingAllIssues=!0}}},[t._v("\n                  "+t._s(t.i18n("show-more"))+"\n                ")])]):t._e()]):t._e()])],2)],1),n("keep-alive",[n(t.type,{ref:"content",tag:"component",attrs:{repo:t.repo,target:t.target}})],1),n("div",{staticClass:"form-actions"},[n("VueButton",{staticClass:"big",attrs:{type:"submit",label:t.i18n("preview")}})],1)],1),t.show?n("VueModal",{ref:"htmlModal",staticClass:"medium",attrs:{title:t.i18n("preview-title")},on:{close:function(e){t.show=!1}}},[n("div",{staticClass:"default-body",domProps:{innerHTML:t._s(t.generated.html)}}),n("div",{staticClass:"actions",attrs:{slot:"footer"},slot:"footer"},[n("VueButton",{staticClass:"big",attrs:{label:t.i18n("create")},on:{click:function(e){t.create()}}})],1)]):t._e(),t.titleShow?n("VueModal",{staticClass:"medium",attrs:{title:t.i18n("simple-clear-title")},on:{close:function(e){t.titleShow=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"simple-clear-modal"}})],1)]):t._e()],1),t._m(0)],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"app-footer"},[n("p",[t._v("…")]),n("small",[t._v("\n      Inspired by \n      "),n("a",{attrs:{href:"https://github.com/vuejs/vue-issue-helper"}},[t._v("Vue Issue Helper ")]),t._v("\n      ·\n      Check out source on "),n("a",{attrs:{href:"https://github.com/nervjs/taro-issue-helper"}},[t._v("GitHub")])])])}],m=n("ddc3"),b=[{id:"weapp",name:"微信小程序"},{id:"alipay",name:"支付宝小程序"},{id:"swan",name:"百度小程序"},{id:"tt",name:"字节跳动小程序"},{id:"qq",name:"QQ 小程序"},{id:"jd",name:"京东小程序"},{id:"quickapp",name:"快应用"},{id:"rn",name:"React Native"},{id:"h5",name:"H5"},{id:"dd",name:"钉钉小程序"},{id:"qy",name:"企业微信小程序"},{id:"feishu",name:"飞书小程序"},{id:"kwai",name:"快手小程序"},{id:"iot",name:"支付宝 IOT 小程序"},{id:"harmony",name:"鸿蒙"}],v=(n("a481"),n("b54a"),n("f904")),g=n.n(v);function w(t){var e="".concat(t,"\n\n\x3c!-- generated by taro-issues. 请勿修改或删除此行注释 --\x3e");g()(e);var n=new a.a.Renderer({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),s=n.link;return n.link=function(t,e,i){var r=s.call(n,t,e,i);return r.replace(/^<a /,'<a target="_blank" rel="nofollow" ')},{markdown:e,html:a()(t,{renderer:n})}}function y(){return c.a.parse(window.location.search.slice(1))}function x(){}var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-intro"},[n("i18n",{staticClass:"intro bg-faded",attrs:{id:"intro"},on:{"click-modal":function(e){t.show=!0}}}),t.show?n("VueModal",{staticClass:"medium",attrs:{title:t.i18n("intro-modal-title")},on:{close:function(e){t.show=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"intro-modal"}})],1)]):t._e()],1)},_=[],C={watch:{show:function(){}},methods:{checkModal:function(t){this.show=window.location.hash==="#".concat(t)}}},I={mixins:[C],data:function(){return{show:!1}},created:function(){this.checkModal("why-strict")}},j=I,V=(n("b778"),n("2877")),A=Object(V["a"])(j,k,_,!1,null,"b0df61a4",null);A.options.__file="FormIntro.vue";var S=A.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"app-header"},[n("div",{staticClass:"container"},[n("span",{staticClass:"brand",staticStyle:{color:"white"},attrs:{href:"#"}},[n("img",{staticClass:"logo",attrs:{src:"https://taro-docs.jd.com/taro/img/logo-taro.png",alt:"Taro's logo",height:"24"}}),t._v("\n      Issue Helper\n    ")])])])}],O={props:["lang"]},$=O,F=(n("954a"),Object(V["a"])($,T,q,!1,null,"48dab28a",null));F.options.__file="AppHeader.vue";var E=F.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bug-report",staticStyle:{margin:"0"}},[n("div",{staticClass:"vue-ui-grid col-2 default-gap"},[n("VueFormField",{attrs:{title:t.i18n("version-title"),subtitle:t.i18n("version-subtitle")}},[n("VueTypeAhead",{staticClass:"info",attrs:{suggestions:t.suggestions,loading:t.loadingVersion,"show-all":"","show-max":"150","restrict-choice":"",required:""},model:{value:t.attrs.version,callback:function(e){t.$set(t.attrs,"version",e)},expression:"attrs.version"}})],1),n("VueFormField",{attrs:{title:t.i18n("framework-title")}},[n("VueSelect",{attrs:{required:"",disabled:!t.isTaroNext},model:{value:t.framework,callback:function(e){t.framework=e},expression:"framework"}},t._l(t.frameworks,function(t){return n("VueSelectButton",{key:t,attrs:{value:t,label:t}})}))],1),n("VueFormField",{attrs:{title:t.i18n("repro-title")}},[n("VueInput",{staticClass:"info",attrs:{disabled:t.reproNotAvailable,required:""},model:{value:t.attrs.reproduction,callback:function(e){t.$set(t.attrs,"reproduction",e)},expression:"attrs.reproduction"}}),n("template",{slot:"subtitle"},[n("i18n",{attrs:{id:"repro-subtitle"},on:{"click-modal":function(e){t.show=!0}}}),n("VueSwitch",{staticClass:"info",model:{value:t.reproNotAvailable,callback:function(e){t.reproNotAvailable=e},expression:"reproNotAvailable"}},[n("i18n",{attrs:{id:"cli-no-repro"}})],1)],1),t.wrongRepoinfo?n("div",{staticClass:"subtitle vue-ui-text danger"},[n("div",{staticClass:"vue-ui-icon",staticStyle:{"vertical-align":"middle",margin:"-2px 5px 0 0"}},[n("svg",[n("use",{attrs:{"xlink:href":"#ic_error_24px"}})])]),n("span",{staticStyle:{"font-size":"14px"}},[t._v("请填写准确的仓库地址")])]):t._e()],2),"h5"===t.targetType?n("VueFormField",{attrs:{title:t.i18n("browser-and-os-title")}},[n("VueInput",{staticClass:"info",attrs:{required:""},model:{value:t.attrs.browserAndOS,callback:function(e){t.$set(t.attrs,"browserAndOS",e)},expression:"attrs.browserAndOS"}}),n("i18n",{attrs:{slot:"subtitle",id:"browser-and-os-subtitle"},slot:"subtitle"})],1):t._e(),"mini"===t.targetType?n("VueFormField",{attrs:{title:t.i18n("mini-version")}},[n("VueInput",{staticClass:"info",attrs:{required:""},model:{value:t.attrs.miniVersion,callback:function(e){t.$set(t.attrs,"miniVersion",e)},expression:"attrs.miniVersion"}}),n("i18n",{attrs:{slot:"subtitle",id:"mini-version-subtitle"},slot:"subtitle"})],1):t._e(),n("VueFormField",{staticClass:"span-2",attrs:{title:t.i18n("steps-title")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4",required:""},model:{value:t.attrs.steps,callback:function(e){t.$set(t.attrs,"steps",e)},expression:"attrs.steps"}}),n("i18n",{attrs:{slot:"subtitle",id:"steps-subtitle"},slot:"subtitle"})],1),n("VueFormField",{attrs:{title:t.i18n("expected-title")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4",required:""},model:{value:t.attrs.expected,callback:function(e){t.$set(t.attrs,"expected",e)},expression:"attrs.expected"}})],1),n("VueFormField",{attrs:{title:t.i18n("actual-title")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4",required:""},model:{value:t.attrs.actual,callback:function(e){t.$set(t.attrs,"actual",e)},expression:"attrs.actual"}})],1),n("VueFormField",{staticClass:"span-2",attrs:{title:t.i18n("cli-envinfo-title")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4",required:""},model:{value:t.attrs.cliEnvInfo,callback:function(e){t.$set(t.attrs,"cliEnvInfo",e)},expression:"attrs.cliEnvInfo"}}),n("i18n",{attrs:{slot:"subtitle",id:"cli-envinfo-subtitle"},slot:"subtitle"}),t.wrongCLIinfo?n("div",{staticClass:"subtitle vue-ui-text danger"},[n("div",{staticClass:"vue-ui-icon",staticStyle:{"vertical-align":"middle",margin:"-2px 5px 0 0"}},[n("svg",[n("use",{attrs:{"xlink:href":"#ic_error_24px"}})])]),n("span",{staticStyle:{"font-size":"14px"}},[t._v("请补充准确的环境信息")])]):t._e()],1),n("VueFormField",{staticClass:"span-2",attrs:{title:t.i18n("extra-title"),subtitle:t.i18n("extra-subtitle")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4"},model:{value:t.attrs.extra,callback:function(e){t.$set(t.attrs,"extra",e)},expression:"attrs.extra"}})],1)],1),t.show?n("VueModal",{staticClass:"medium",attrs:{title:t.i18n("repro-modal-title")},on:{close:function(e){t.show=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"repro-modal"}})],1)]):t._e()],1)},R=[],P=(n("6762"),n("2fdb"),n("96cf"),n("3040")),H=(n("7f7f"),n("7514"),n("55dd"),/^(http(s)?:\/\/([^\/]+?\/){2}|git@[^:]+:[^\/]+?\/).*?.git$/),M={props:["repo","target"],mixins:[C],data:function(){return{show:!1,attrs:{version:"",reproduction:"",steps:"",expected:"",actual:"",extra:"",browserAndOS:"",nodeAndOS:"",cliEnvInfo:"",miniVersion:"",rnVersion:""},framework:"React",frameworks:["React","Nerv","Vue 2","Vue 3"],versions:[],loadingVersion:!1,reproNotAvailable:!1}},computed:{suggestions:function(){return this.versions.slice().sort(function(t,e){return Object(m["gt"])(t.value,e.value)?-1:1})},isTaroNext:function(){return this.attrs.version&&Object(m["valid"])(this.attrs.version)&&Object(m["gte"])(this.attrs.version,"3.0.0-alpha.0")},wrongRepoinfo:function(){var t=this.attrs.reproduction;if(!t)return!1;if("git@github.com:NervJS/taro.git"===t||/^https:\/\/github\.com\/NervJS\/taro/.test(t))return!0;var e=H.test(t)||/^https:\/\/gist\.github\.com/.test(t);return!e},wrongCLIinfo:function(){var t=this.attrs.cliEnvInfo;return t&&-1===t.indexOf("environment info:")},isCLI:function(){return"vuejs/vue-cli"===this.repo},doesNotSupportVueInfo:function(){return this.attrs.version&&Object(m["lt"])(this.attrs.version,"3.2.0")},targetType:function(){var t=["weapp","alipay","swan","tt","qq","jd","quickapp"];return-1!==t.indexOf(this.target)?"mini":"h5"===this.target?"h5":"rn"===this.target?"rn":""}},watch:{repo:function(){this.versions=[],this.attrs.version="",this.fetchVersions()}},created:function(){this.fetchVersions(),this.checkModal("why-repro")},methods:{getTarget:function(){var t=this,e=b.find(function(e){return e.id===t.target});return e?e.name:"未找到平台，请手动修改。"},fetchVersions:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){var e,n,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingVersion=!0,e=this.repo,t.next=4,fetch("https://gitee.com/api/v5/repos/o2team/Taro/tags",{headers:{"Access-Control-Allow-Origin":"*"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(s=t.sent,this.repo===e){t.next=10;break}return t.abrupt("return");case 10:if(s&&s instanceof Array){t.next=12;break}return t.abrupt("return",!1);case 12:i=s.map(function(t){return{value:/^v/.test(t.name)?t.name.substr(1):t.name}}).filter(function(t){return Object(m["satisfies"])(t.value,">=1.2.0")&&!t.value.includes("experimental")}),this.versions=this.versions.concat(i),this.loadingVersion=!1,this.suggestions.length&&(this.attrs.version=this.suggestions[0].value);case 16:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),generate:function(){if(this.wrongCLIinfo||this.wrongRepoinfo)return!1;var t=this.attrs,e=t.reproduction,n=t.steps,s=t.expected,i=t.actual,r=t.extra,o=t.browserAndOS,a=t.cliEnvInfo,u=t.miniVersion;return w("\n\x3c!-- 请不要删除自动生成的 Issue 标签 --\x3e\n\x3c!-- 请不要删除自动生成的 Issue 标签 --\x3e\n### 相关平台\n".concat(this.getTarget(),"\n\n").concat(e?"### 复现仓库\n[".concat(e,"](").concat(e,")"):"","\n").concat(o?"**浏览器版本: ".concat(o,"**"):"").concat(u?"**小程序基础库: ".concat(u,"**"):"","\n","**使用框架: ".concat(this.isTaroNext?this.framework:"React","**"),"\n\n### 复现步骤\n").concat(n,"\n\n### 期望结果\n").concat(s,"\n\n### 实际结果\n").concat(i,"\n\n").concat(a?"### 环境信息\n```\n".concat(a,"\n```\n"):"","\n\n").concat(r?"---\n### 补充信息\n".concat(r):"","\n  ").trim())}}},L=M,G=Object(V["a"])(L,N,R,!1,null,null,null);G.options.__file="BugReport.vue";var B=G.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature-request"},[n("div",{staticClass:"vue-ui-grid col-1 default-gap"},[n("VueFormField",{attrs:{title:t.i18n("rationale-title")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4",required:""},model:{value:t.attrs.rationale,callback:function(e){t.$set(t.attrs,"rationale",e)},expression:"attrs.rationale"}}),n("i18n",{attrs:{slot:"subtitle",id:"rationale-subtitle"},slot:"subtitle"})],1),n("VueFormField",{attrs:{title:t.i18n("proposal-title")}},[n("VueInput",{staticClass:"info",attrs:{type:"textarea",rows:"4",required:""},model:{value:t.attrs.proposal,callback:function(e){t.$set(t.attrs,"proposal",e)},expression:"attrs.proposal"}}),n("i18n",{attrs:{slot:"subtitle",id:"proposal-subtitle"},slot:"subtitle"})],1)],1)])},z=[],J={data:function(){return{attrs:{rationale:"",proposal:""}}},methods:{generate:function(){var t=this.attrs,e=t.rationale,n=t.proposal;return w("\n### 这个特性解决了什么问题？\n".concat(e,"\n\n### 这个 API 长什么样？\n").concat(n,"\n  ").trim())}}},D=J,U=Object(V["a"])(D,W,z,!1,null,null,null);U.options.__file="FeatureRequest.vue";var Q=U.exports,Y=(n("456d"),n("bc3a")),K=n.n(Y),X="https://api.github.com/search/issues";function Z(t){return Array.isArray(t)?t:[t]}var tt=5,et={data:function(){return{_issues:[],showingAllIssues:!1}},computed:{issues:{get:function(){var t=this.$data._issues;return this.showingAllIssues?t:t.slice(0,tt)},set:function(t){this.$data._issues=t}},showIssueToggleControl:function(){return this.$data._issues.length>tt}},methods:{fetchIssues:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(e,n){var s,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=Object.keys(n).map(function(t){return Z(n[t]).map(function(e){return"".concat(t,":").concat(e)}).join(" ")}).join(" ")+" "+e,t.prev=1,t.next=4,K.a.get(X,{params:{q:s}});case 4:i=t.sent,r=i.items,this.$data._issues=r||[],t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](1);case 11:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,n){return t.apply(this,arguments)}}()}};function nt(t){switch(t){case"Vue 2":return"vue2";case"Vue 3":return"vue3";case"Nerv":return"nerv";default:return"react"}}var st={name:"App",mixins:[et],components:{FormIntro:S,AppHeader:E,BugReport:B,FeatureRequest:Q},data(){return{title:"",generated:{markdown:"",html:""},show:!1,preview:!1,repo:"nervjs/taro",target:"weapp",type:"bug-report",targets:b,versions:{},titleShow:!1}},computed:{types(){return this.$lang&&[{id:"bug-report",name:this.i18n("bug-report")},{id:"feature-request",name:this.i18n("feature-request")}]}},watch:{repo(t){x({repo:t})},type(t){x({type:t})},target(){}},created(){const{repo:t,type:e}=y();this.repo=t||"nervjs/taro",this.type=e||"bug-report",this.checkSimpleTitle()},methods:{checkSimpleTitle(){this.titleShow="#simple-clear-title"===window.location.hash},setLang(t){this.$lang=t,x({lang:t})},findIssues(){this.issues=[],this.title&&this.fetchIssues(this.title,{is:"issue",repo:this.repo})},generate(){const t=this.$refs.content.generate();t&&(this.generated=t,this.show=!0)},create(){const t=encodeURIComponent(this.title).replace(/%2B/gi,"+"),e=encodeURIComponent(this.generated.markdown).replace(/%2B/gi,"+"),n=this.$refs.content,s=encodeURIComponent("\x3c!--labels="+("feature-request"===this.type?"enhancement":["T-"+this.target,"V-"+Object(m["major"])(n.attrs.version),"F-"+nt(n.framework)].join(","))+"--\x3e");window.open(`https://github.com/${this.repo}/issues/new?title=${t}&body=${e}${s}`)}}},it=st,rt=(n("cb34"),n("c65d"),Object(V["a"])(it,h,f,!1,null,"bb255e46",null));rt.options.__file="App.vue";var ot=rt.exports;i["a"].use(d),i["a"].use(p["a"]),window.addEventListener("dragover",function(t){t.preventDefault()}),window.addEventListener("drop",function(t){t.preventDefault(),alert(at.i18n("drop-warn"))});var at=new i["a"](Object(s["a"])({el:"#app"},ot))},"5cb2":function(t,e,n){"use strict";n.r(e),e["default"]={_label:"EN",intro:n("d3d1"),"intro-modal-title":"The reason behind our strict issue policy","intro-modal":n("b7e5"),"repo-title":"I am opening an issue for","repo-subtitle":"Please make sure to file the issue at appropriate repo.","type-title":"This is a","title-title":"Issue title","version-title":"Version","version-subtitle":"Check if the issue is reproducible with the latest stable version of Vue.","repro-title":"Link to minimal reproduction","repro-subtitle":n("bf5d"),"repro-modal-title":"About Reproductions","repro-modal":n("811c"),"cli-repro-subtitle":n("e4e3"),"cli-no-repro":"If your issue cannot be reproduced with code, check here.","node-and-os-title":"Node, npm/yarn and OS info","node-and-os-subtitle":"Please specify node.js version, npm or yarn version, OS name & version. Example: Node 10.7.0 / yarn 1.7.0 / Windows 10","cli-envinfo-title":"Environment Info","cli-envinfo-subtitle":n("4e46"),"browser-and-os-title":"Browser and OS info","browser-and-os-subtitle":"Please specify browser name & version, OS name & version. Example: Chrome 62 / Windows 10","steps-title":"Steps to reproduce","steps-subtitle":n("9c53"),"expected-title":"What is expected?","actual-title":"What is actually happening?","extra-title":"Any additional comments? (optional)","extra-subtitle":"e.g. some background/context of how you ran into this bug.","rationale-title":"What problem does this feature solve?","rationale-subtitle":n("b4f5"),"proposal-title":"What does the proposed API look like?","proposal-subtitle":n("910f"),preview:"Preview","preview-title":"Issue Preview",create:"Create","bug-report":"Bug Report","feature-request":"Feature Request","similar-issues":"Similar issues","show-more":"Show more","show-less":"Show less","drop-warn":"Unfortunately, image drop/uploading is not supported due to GitHub API limitations. However, you can create the issue first (which will take you to GitHub) and then drop the images needed."}},"66f0":function(t,e){t.exports="打开重现后，我们需要执行哪些操作才能让 bug 出现？简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在。\n\n支持使用 [Markdown](https://help.github.com/cn/github/writing-on-github/basic-writing-and-formatting-syntax) 语法，**代码片段请使用 \\`\\`\\` 包裹**，代码格式混乱的 Issue 很可能被直接关闭。\n"},"6eb7":function(t,e){t.exports="请使用简洁明确的语言描述你遇到的问题。[*什么是简洁明确的标题？*](#simple-clear-title)\n"},"811c":function(t,e){t.exports="A bug reproduction is a piece of code that can run and demonstrate how a bug can happen.\n\n##### Text is not enough\n\nIt's impossible to fix a bug from mere text descriptions. First, it's very difficult to precisely describe a technical problem while keeping it easy to follow; Second, the real cause may very well be something that you forgot to even mention. A reproduction is the only way that can reliably help us understand what is going on, so please provide one.\n\n##### A repro must be runnable\n\nScreenshots or videos are **NOT** reproductions! They only show that the bug exists, but do not provide enough information on why it happens. Only runnable code provides the most complete context and allows us to properly debug the scenario. That said, in some cases videos/gifs can help explain interaction issues that are hard to describe in text.\n\n##### A repro should be minimal\n\nSome users would give us a link to a real project and hope we can help them figure out what is wrong. We generally do not accept such requests because:\n\n- You are already familiar with your codebase, but we are not. It is extremely time-consuming to hunt a bug in a big and unfamiliar codebase.\n\n- The problematic behavior may very well be caused by your code rather than by a bug in Vue.\n\nA **minimal** reproduction means it demonstrates the bug, and the bug only. It should only contain the bare minimum amount of code that can reliably cause the bug. Try your best to get rid of anything that aren't directly related to the problem.\n\n##### How to create a repro\n\nUnless your bug can only be reproduced with a built setup, we prefer reproductions made with online coding services like [JSFiddle](https://jsfiddle.net/chrisvfritz/50wL7mdz/), [JSBin](https://jsbin.com) or [Codepen](https://codepen.io). If your bug involves a build setup, you can create a project using [vue-cli](https://github.com/vuejs/vue-cli) and provide the link to a GitHub repository.\n"},"8e38":function(t,e,n){},"910f":function(t,e){t.exports="Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use [Markdown](https://guides.github.com/features/mastering-markdown/) to format your code blocks.\n"},"954a":function(t,e,n){"use strict";var s=n("8e38"),i=n.n(s);i.a},"962d":function(t,e){t.exports="维护开源项目，尤其是流行的项目，是[非常辛苦的工作](https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/)。我们每天都在收到越来越多的问题， bug 报告，功能需求和 Pull Requests。\n\n作为一个完全免费使用的开源项目，Taro 的维护人手是有限的。这意味着想要让项目长期的可持续发展，我们必须：\n\n1. 给予更具体的工作更高的优先级（比如 bug 的修复和新功能的开发）；\n2. 提高 issue 处理的效率。\n\n针对 (1)，我们决定将 GitHub issue 列表严格地限制用于有具体目标和内容的工作。问题和讨论应当发送到更适合它们的场合。\n\n针对 (2)，我们发现影响 issue 处理效率的最大因素是用户在开 issue 时没有提供足够的信息。这导致我们需要花费大量的时间去跟用户来回沟通，只为了获得一些基本信息好让我们对 issue 进行真正的分析。这正是我们开发这个 app 的理由：我们要确保每个新 issue 都提供了必需的信息，这样能节省维护者和开发者双方的时间。\n\n最重要的是，请明白一件事：开源项目的用户和维护者之间并不是甲方和乙方的关系，issue 也不是客服。在开 issue 的时候，请抱着一种『一起合作来解决这个问题』的心态，不要期待我们单方面地为你服务。\n"},"995c":function(t,e){t.exports='请提供一个 GitHub 或其它代码托管平台仓库的链接。\n\n[什么是*最小化重现*，为什么这是必需的？](#why-repro)\n\n<span class="vue-text danger">请不要乱填一个链接，那只会让你的 issue 被直接关闭。</span>\n'},"9c53":function(t,e){t.exports="What do we need to do after opening your repro in order to make the bug happen? Clear and concise reproduction instructions are important for us to be\nable to triage your issue in a timely manner. Note that you can use\n[Markdown](https://guides.github.com/features/mastering-markdown/) to format lists and code.\n"},b4f5:function(t,e){t.exports="Explain your use case, context, and rationale behind this feature request. More importantly, what is the **end user experience** you are trying to build that led to the need for this feature?\n\nAn important design goal of Vue is keeping the API surface small and straightforward. In general, we only consider adding new features that solve a problem that cannot be easily dealt with using existing APIs (i.e. not just an alternative way of doing things that can already be done). The problem should also be common enough to justify the addition.\n"},b55d:function(t,e){t.exports="\n## 在你开始之前……\n\n首先，Taro 的 issue 列表只接受 bug 报告或是新功能请求 (feature requests)。如果你开的 issue 不符合规定，它将会被**立刻关闭**。<br>[为什么要这么严格？](#why-strict)\n\n对于使用中遇到的问题，请使用以下资源：\n\n- 仔细阅读文档（[Taro 3.x 版](https://taro-docs.jd.com/taro/docs/README), [Taro 2.x 版](https://taro-docs.jd.com/taro/docs/2.x/README), [Taro 1.x 版](https://taro-docs.jd.com/taro/docs/1.x/README)）\n- 查看更新日志新版本是否解决了你的问题（[Taro 3.x](https://github.com/NervJS/taro/releases)，[Taro 2.x](https://github.com/NervJS/taro/blob/2.x/CHANGELOG.md)）\n- 到 [官方论坛](https://taro-club.jd.com/) 提问\n\n最后，在开 issue 前，可以先搜索一下以往的旧 issue —— 你遇到的问题可能已经有人提了，也可能已经在最新版本中被修正。注意：如果你发现一个已经关闭的旧 issue 在最新版本中仍然存在，请不要在旧 issue 下面留言，而应该用下面的表单开一个新的 issue。\n"},b778:function(t,e,n){"use strict";var s=n("4864"),i=n.n(s);i.a},b7e5:function(t,e){t.exports="Maintaining open source projects, especially popular ones, is [hard work](https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/). As Vue's user base has grown, we are getting more and more usage questions, bug reports, feature requests and pull requests every single day.\n\nAs a free and open source project, Vue also has limited maintainer bandwidth. That means the only way to ensure the project's sustainability is to:\n\n1. Prioritize more concrete work (bug fixes and new features);\n2. Improve issue triaging efficiency.\n\nFor (1), we have decided to use the GitHub issue lists exclusively for work that has well-defined, actionable goals. Questions and open ended discussions should be posted to mediums that are better suited for them.\n\nFor (2), we have found that issues that do not provide proper information upfront usually results in terribly inefficient back-and-forth communication just to extract the basic information needed for actual triaging. This is exactly why we have created this app: to ensure that every issue is created with the necessary information, and to save time on both sides.\n"},bf3c:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");e["default"]={_label:"中文",intro:n("b55d"),"intro-modal-title":"为什么要有这么严格的 issue 规定","intro-modal":n("962d"),"repo-title":"相关库","repo-subtitle":"请确保将 issue 发往相关的仓库。","target-title":"相关平台","type-title":"这是一个","title-title":"Issue 标题","title-title-subtitle":n("6eb7"),"version-title":"版本","version-subtitle":"请检查问题是否存在于 Taro 的最新版本中。","repro-title":"重现链接","repro-subtitle":n("995c"),"repro-modal-title":"关于重现","repro-modal":n("2a4f"),"cli-repro-subtitle":n("3043"),"cli-no-repro":"如果你的问题无法用代码重现，点选这里。","framework-title":"使用框架","node-and-os-title":"Node.js、npm/yarn 以及操作系统信息","node-and-os-subtitle":"请写明 Node.js 版本、npm/yarn 的版本、操作系统的名称以及版本，例如: Node 10.7.0 / yarn 1.7.0 / Windows 10","cli-envinfo-title":"环境信息","cli-envinfo-subtitle":n("e79f"),"browser-and-os-title":"浏览器版本","browser-and-os-subtitle":"请写明浏览器版本，例如: Chrome 62、Safari 10","mini-version":"小程序基础库版本","mini-version-subtitle":"你可以在小程序开发者工具的「详情」中找到小程序基础库版本。","steps-title":"重现步骤","steps-subtitle":n("66f0"),"expected-title":"期望的结果是什么？","actual-title":"实际的结果是什么？","extra-title":"补充说明（可选）","extra-subtitle":"比如：遇到这个 bug 的业务场景、上下文。或者根据你的研究，问题可能出在什么地方？","rationale-title":"这个功能解决了什么问题？","rationale-subtitle":n("bfdf"),"proposal-title":"你期望的 API 是怎样的？","proposal-subtitle":n("25d7"),"simple-clear-title":"简洁明确的标题","simple-clear-modal":n("c091"),preview:"预览","preview-title":"预览",create:"创建 Issue","bug-report":"错误报告","feature-request":"功能要求","similar-issues":"类似的 issue","show-more":"展开","show-less":"收起","drop-warn":"由于 GitHub API 的限制，这里不支持图片拖拽上传功能。但是你可以先创建 issue，然后在 GitHub 的界面中上传需要的图片。"}},bf5d:function(t,e){t.exports='If the reproduction does not need a build setup, please provide a link to a [JSFiddle](https://jsfiddle.net/chrisvfritz/50wL7mdz/), [JSBin](https://jsbin.com/) or [CodePen](https://codepen.io). If it requires a build setup, you can use [CodeSandbox](https://codesandbox.io/s/vue) or provide a GitHub repo.\n\n[What is a *minimal reproduction*, and why is it required?](#why-repro)\n\n<span class="vue-text danger">Please do not just fill in a random link. We will close your issue if you do that.</span>\n'},bfdf:function(t,e){t.exports="请尽可能详尽地说明这个需求的用例和场景。"},c091:function(t,e){t.exports="一个简洁明确的标题能至少满足两个需求：\n\n1. 开发者能够通过标题或搜索**关键词**找到同类问题\n2. 项目的维护者能够通过标题快速定位问题\n\n和多数大型开源项目一样，Taro 有多位维护者，每个人负责的模块或擅长解决的问题各不相同。在标题把问题描述得更清晰有助于相关维护者更快地打开 Issue 解决问题。同时，许多开发者（包括正在提 Issue 的你）也需要搜索相关 Issue，帮助他人的同时也是在帮助自己。\n\n好的 Issue 标题长得像这样：\n\n> Taro Next 中 Current.router 获取的数据有误\n\n> onLongPress 和 onLongTap 都指向了已废弃的 bindlongtap 事件\n\n坏的 Issue 标题长得像这样：\n\n> 使用 Taro 报错\n\n> 这个问题怎么办？领导正在催，再不搞定就要被开除了，在线等很急"},c65d:function(t,e,n){"use strict";var s=n("3599"),i=n.n(s);i.a},cb34:function(t,e,n){"use strict";var s=n("36df"),i=n.n(s);i.a},d3d1:function(t,e){t.exports="## Before You Start...\n\nThe issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, **it will be closed immediately**.<br>[Why are we so strict about this?](#why-strict)\n\nFor usage questions, please use the following resources:\n\n- Read the [docs](https://vuejs.org/guide/)\n- Watch [video tutorials](https://laracasts.com/series/learn-vue-2-step-by-step)\n- Ask on the [forums](https://forum.vuejs.org/)\n- Ask on the [chat](https://chat.vuejs.org)\n- Look for / ask questions on [Stack Overflow](https://stackoverflow.com/questions/ask?tags=vue.js)\n\nAlso try to search for your issue - it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.\n"},e4e3:function(t,e){t.exports="Please provide link to a GitHub repository that can reproduce the issue.\n\n[What is a *minimal reproduction*, and why is it required?](#why-repro)\n"},e79f:function(t,e){t.exports="请使用终端命令行，在项目根目录中运行以下命令：\n\n`taro info`\n\n并将运行结果复制粘贴到上面的输入框中。\n"},f1ed:function(t,e,n){"use strict";n.r(e);n("4917"),n("ac6a");var s=n("00b3"),i={};s.keys().forEach(function(t){var e=t.match(/^\.\/([\w-_$]+)\/index\.js$/);if(e){var n=e[1];i[n]=s(t).default}}),e["default"]=i}});
//# sourceMappingURL=app.7f9388a8.js.map