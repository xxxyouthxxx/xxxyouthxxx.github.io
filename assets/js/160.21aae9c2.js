(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{412:function(s,a,t){},624:function(s,a,t){"use strict";t(412)},675:function(s,a,t){"use strict";t.r(a);var v={name:"keyboard-cmpt",props:{active:{type:String,default:""}},data:()=>({fnMode:!1}),computed:{rawKeys(){return this.$slots.default&&this.$slots.default[0].text||this.active},delim(){return this.rawKeys.includes(" + ")?" + ":this.rawKeys.includes("+")?"+":" "},filtered(){const s=this.delim,a=Array(12).fill("").map((a,t)=>["F"+(t+1),`Fn${s}F${t+1}`]);let t=null,v=this.rawKeys;return(t=a.find(s=>v.includes(s[0])))&&(this.fnMode=!0,v=v.replace(t[0],t[1])),v},activeKeys(){return this.filtered.split(this.delim)}},methods:{has(s=""){return s.split("-").find(s=>this.activeKeys.includes(s))?"active":""}}},c=(t(624),t(0)),n=Object(c.a)(v,(function(){var s=this,a=s._self._c;return a("span",{staticClass:"keyboard-cmpt"},[a("span",{staticClass:"raw-keys"},[s._v(s._s(s.rawKeys))]),s._v(" "),a("div",{staticClass:"keyboard"},[a("div",{staticClass:"line"},[a("div",{staticClass:"key",class:s.has("Esc-`"),attrs:{"data-content":"Esc-`"}},[a("span",[s._v("Esc")]),s._v(" "),a("span",[s._v("`")])]),s._v(" "),s.fnMode?[a("div",{staticClass:"key",class:s.has("F1"),attrs:{"data-content":"F1"}},[s._v("F1")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F2"),attrs:{"data-content":"F2"}},[s._v("F2")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F3"),attrs:{"data-content":"F3"}},[s._v("F3")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F4"),attrs:{"data-content":"F4"}},[s._v("F4")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F5"),attrs:{"data-content":"F5"}},[s._v("F5")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F6"),attrs:{"data-content":"F6"}},[s._v("F6")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F7"),attrs:{"data-content":"F7"}},[s._v("F7")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F8"),attrs:{"data-content":"F8"}},[s._v("F8")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F9"),attrs:{"data-content":"F9"}},[s._v("F9")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F10"),attrs:{"data-content":"F10"}},[s._v("F10")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F11"),attrs:{"data-content":"F11"}},[s._v("F11")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F12"),attrs:{"data-content":"F12"}},[s._v("F12")])]:[a("div",{staticClass:"key",class:s.has("!-1"),attrs:{"data-content":"!-1"}},[a("span",[s._v("!")]),s._v(" "),a("span",[s._v("1")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("@-2"),attrs:{"data-content":"@-2"}},[a("span",[s._v("@")]),s._v(" "),a("span",[s._v("2")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("#-3"),attrs:{"data-content":"#-3"}},[a("span",[s._v("#")]),s._v(" "),a("span",[s._v("3")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("$-4"),attrs:{"data-content":"$-4"}},[a("span",[s._v("$")]),s._v(" "),a("span",[s._v("4")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("%-5"),attrs:{"data-content":"%-5"}},[a("span",[s._v("%")]),s._v(" "),a("span",[s._v("5")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("^-6"),attrs:{"data-content":"^-6"}},[a("span",[s._v("^")]),s._v(" "),a("span",[s._v("6")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("&-7"),attrs:{"data-content":"&-7"}},[a("span",[s._v("&")]),s._v(" "),a("span",[s._v("7")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("*-8"),attrs:{"data-content":"*-8"}},[a("span",[s._v("*")]),s._v(" "),a("span",[s._v("8")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("(-9"),attrs:{"data-content":"(-9"}},[a("span",[s._v("(")]),s._v(" "),a("span",[s._v("9")])]),s._v(" "),a("div",{staticClass:"key",class:s.has(")-0"),attrs:{"data-content":")-0"}},[a("span",[s._v(")")]),s._v(" "),a("span",[s._v("0")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("_--"),attrs:{"data-content":"_--"}},[a("span",[s._v("_")]),s._v(" "),a("span",[s._v("-")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("+-="),attrs:{"data-content":"+-="}},[a("span",[s._v("+")]),s._v(" "),a("span",[s._v("=")])])],s._v(" "),a("div",{staticClass:"key",class:s.has("Backspace"),attrs:{"data-content":"Backspace"}},[s._v("Backspace")])],2),s._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"key",class:s.has("Tab"),attrs:{"data-content":"Tab"}},[s._v("Tab")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Q"),attrs:{"data-content":"Q"}},[s._v("Q")]),s._v(" "),a("div",{staticClass:"key",class:s.has("W"),attrs:{"data-content":"W"}},[s._v("W")]),s._v(" "),a("div",{staticClass:"key",class:s.has("E"),attrs:{"data-content":"E"}},[s._v("E")]),s._v(" "),a("div",{staticClass:"key",class:s.has("R"),attrs:{"data-content":"R"}},[s._v("R")]),s._v(" "),a("div",{staticClass:"key",class:s.has("T"),attrs:{"data-content":"T"}},[s._v("T")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Y"),attrs:{"data-content":"Y"}},[s._v("Y")]),s._v(" "),a("div",{staticClass:"key",class:s.has("U"),attrs:{"data-content":"U"}},[s._v("U")]),s._v(" "),a("div",{staticClass:"key",class:s.has("I"),attrs:{"data-content":"I"}},[s._v("I")]),s._v(" "),a("div",{staticClass:"key",class:s.has("O"),attrs:{"data-content":"O"}},[s._v("O")]),s._v(" "),a("div",{staticClass:"key",class:s.has("P"),attrs:{"data-content":"P"}},[s._v("P")]),s._v(" "),a("div",{staticClass:"key",class:s.has("{-["),attrs:{"data-content":"{-["}},[a("span",[s._v("{")]),s._v(" "),a("span",[s._v("[")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("}-]"),attrs:{"data-content":"}-]"}},[a("span",[s._v("}")]),s._v(" "),a("span",[s._v("]")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("|-\\"),attrs:{"data-content":"|-\\"}},[a("span",[s._v("|")]),s._v(" "),a("span",[s._v("\\")])])]),s._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"key",class:s.has("CapsLock"),attrs:{"data-content":"CapsLock"}},[s._v("CapsLock")]),s._v(" "),a("div",{staticClass:"key",class:s.has("A"),attrs:{"data-content":"A"}},[s._v("A")]),s._v(" "),a("div",{staticClass:"key",class:s.has("S"),attrs:{"data-content":"S"}},[s._v("S")]),s._v(" "),a("div",{staticClass:"key",class:s.has("D"),attrs:{"data-content":"D"}},[s._v("D")]),s._v(" "),a("div",{staticClass:"key",class:s.has("F"),attrs:{"data-content":"F"}},[s._v("F")]),s._v(" "),a("div",{staticClass:"key",class:s.has("G"),attrs:{"data-content":"G"}},[s._v("G")]),s._v(" "),a("div",{staticClass:"key",class:s.has("H"),attrs:{"data-content":"H"}},[s._v("H")]),s._v(" "),a("div",{staticClass:"key",class:s.has("J"),attrs:{"data-content":"J"}},[s._v("J")]),s._v(" "),a("div",{staticClass:"key",class:s.has("K"),attrs:{"data-content":"K"}},[s._v("K")]),s._v(" "),a("div",{staticClass:"key",class:s.has("L"),attrs:{"data-content":"L"}},[s._v("L")]),s._v(" "),a("div",{staticClass:"key",class:s.has(":-;"),attrs:{"data-content":":-;"}},[a("span",[s._v(":")]),s._v(" "),a("span",[s._v(";")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("\"-'"),attrs:{"data-content":"\"-'"}},[a("span",[s._v('"')]),s._v(" "),a("span",[s._v("'")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("Enter"),attrs:{"data-content":"Enter"}},[s._v("Enter")])]),s._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"key",class:s.has("Shift"),attrs:{"data-content":"Shift"}},[s._v("Shift")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Z"),attrs:{"data-content":"Z"}},[s._v("Z")]),s._v(" "),a("div",{staticClass:"key",class:s.has("X"),attrs:{"data-content":"X"}},[s._v("X")]),s._v(" "),a("div",{staticClass:"key",class:s.has("C"),attrs:{"data-content":"C"}},[s._v("C")]),s._v(" "),a("div",{staticClass:"key",class:s.has("V"),attrs:{"data-content":"V"}},[s._v("V")]),s._v(" "),a("div",{staticClass:"key",class:s.has("B"),attrs:{"data-content":"B"}},[s._v("B")]),s._v(" "),a("div",{staticClass:"key",class:s.has("N"),attrs:{"data-content":"N"}},[s._v("N")]),s._v(" "),a("div",{staticClass:"key",class:s.has("M"),attrs:{"data-content":"M"}},[s._v("M")]),s._v(" "),a("div",{staticClass:"key",class:s.has(";-,"),attrs:{"data-content":";-,"}},[a("span",[s._v("<")]),s._v(" "),a("span",[s._v(",")])]),s._v(" "),a("div",{staticClass:"key",class:s.has(";-."),attrs:{"data-content":";-."}},[a("span",[s._v(">")]),s._v(" "),a("span",[s._v(".")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("?-/"),attrs:{"data-content":"?-/"}},[a("span",[s._v("?")]),s._v(" "),a("span",[s._v("/")])]),s._v(" "),a("div",{staticClass:"key",class:s.has("Shift"),attrs:{"data-content":"Shift"}},[s._v("Shift")])]),s._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"key",class:s.has("Ctrl"),attrs:{"data-content":"Ctrl"}},[s._v("Ctrl")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Home"),attrs:{"data-content":"Home"}},[s._v("Home")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Alt"),attrs:{"data-content":"Alt"}},[s._v("Alt")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Space"),attrs:{"data-content":"Space"}},[s._v("Space")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Alt"),attrs:{"data-content":"Alt"}},[s._v("Alt")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Home"),attrs:{"data-content":"Home"}},[s._v("Home")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Fn"),attrs:{"data-content":"Fn"}},[s._v("Fn")]),s._v(" "),a("div",{staticClass:"key",class:s.has("Ctrl"),attrs:{"data-content":"Ctrl"}},[s._v("Ctrl")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);