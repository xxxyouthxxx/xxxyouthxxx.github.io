(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{400:function(t,e,s){},609:function(t,e,s){"use strict";s(400)},656:function(t,e,s){"use strict";s.r(e);var i={data:()=>({preset:[1,42,85,175,266],$ele:null,tick:null,deg:85,lock:!0}),mounted(){this.listen()},beforeDestroy(){window.clearInterval(this.tick)},methods:{listen(){this.$ele=this.$refs.con,this.tick=window.setInterval(()=>{!this.lock&&this.setDegree((this.deg+=.1,this.deg%=360))},1e3/60)},setDegree(t){this.$ele.style.setProperty("--deg",t+"deg")},setDegreeAndLock(t){this.lock=!0,this.setDegree(t)}}},l=(s(609),s(0)),a=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",{ref:"con",staticClass:"con"},[e("Compare",[e("div",{staticClass:"circle-con",attrs:{slot:"left"},slot:"left"},[e("div",{staticClass:"title"},[t._v("No AA")])]),t._v(" "),e("div",{staticClass:"circle-con antialiasing",attrs:{slot:"right"},slot:"right"},[e("div",{staticClass:"title"},[t._v("Pixel-Offset AA")])])]),t._v(" "),e("div",{staticClass:"deg"},[e("div",{staticClass:"deg"},[t._v("Auto rotate: "+t._s(t.deg.toFixed(1))+" Degree / Lock: "+t._s(t.lock?"true":"false"))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lock,expression:"lock"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.lock)?t._i(t.lock,null)>-1:t.lock},on:{change:function(e){var s=t.lock,i=e.target,l=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.lock=s.concat([null])):a>-1&&(t.lock=s.slice(0,a).concat(s.slice(a+1)))}else t.lock=l}}}),t._v(" Lock /\n        "),e("span",[t._v("Set degree to ...")]),t._v(" "),t._l(this.preset,(function(s){return[e("button",{on:{click:()=>t.setDegreeAndLock(s)}},[t._v(t._s(s))])]}))],2),t._v(" "),e("Compare",[e("div",{staticClass:"repeat-con",attrs:{slot:"left"},slot:"left"},[e("div",{staticClass:"title"},[t._v("No AA")])]),t._v(" "),e("div",{staticClass:"repeat-con antialiasing",attrs:{slot:"right"},slot:"right"},[e("div",{staticClass:"title"},[t._v("Pixel-Offset AA")])])]),t._v(" "),e("br"),t._v(" "),e("Compare",[e("div",{staticClass:"no-antialiasing-rect",attrs:{slot:"left"},slot:"left"},[e("div",{staticClass:"title"},[t._v("No AA")])]),t._v(" "),e("div",{staticClass:"antialiasing-rect",attrs:{slot:"right"},slot:"right"},[e("div",{staticClass:"title"},[t._v("Pixel-Offset AA")])])])],1)}),[],!1,null,"234a344c",null);e.default=a.exports}}]);