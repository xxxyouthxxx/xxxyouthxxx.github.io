(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{663:function(s,t,i){"use strict";i.r(t);i(16);var e={data:()=>({width:0,height:0,padding:50,gap:30,lineGap:3,cols:2,rows:1,rectW:200,offsets:[]}),mounted(){this.width=document.querySelector("h1").offsetWidth,this.height=2*this.padding+(this.rows-1)*this.gap+this.rows*this.rectW},methods:{setup(s){s.createCanvas(this.width,this.height),s.background(233),s.strokeWeight(.3),Array(this.rows).fill("").map((t,i)=>{Array(this.cols).fill("").map((t,e)=>{const h=this.padding+e*(this.gap+this.rectW),f=this.padding+i*(this.gap+this.rectW);s.rect(h,f,this.rectW),this.offsets.push([h,f])})}),this.drawLines(s,[[this.offsets[0],[this.offsets[0][0],this.offsets[0][1]+this.rectW]],[[this.offsets[0][0]+this.rectW,this.offsets[0][1]+this.rectW],[this.offsets[0][0],this.offsets[0][1]+this.rectW]]]),this.drawLines(s,[[[this.offsets[0][0],this.offsets[0][1]+this.rectW],[this.offsets[0][0]+this.rectW,this.offsets[0][1]+this.rectW]],[[this.offsets[0][0]+this.rectW,this.offsets[0][1]],[this.offsets[0][0]+this.rectW,this.offsets[0][1]+this.rectW]]]),this.drawLines(s,[[this.offsets[0],[this.offsets[0][0]+this.rectW,this.offsets[0][1]]],[[this.offsets[0][0],this.offsets[0][1]+this.rectW/2],[this.offsets[0][0]+this.rectW,this.offsets[0][1]+this.rectW/2]]]),this.drawLines(s,[[[this.offsets[0][0],this.offsets[0][1]+this.rectW/2],[this.offsets[0][0],this.offsets[0][1]+this.rectW]],[[this.offsets[0][0]+this.rectW,this.offsets[0][1]+this.rectW/2],[this.offsets[0][0]+this.rectW,this.offsets[0][1]+this.rectW]]]),this.drawLines(s,[[this.offsets[1],[this.offsets[1][0],this.offsets[1][1]+this.rectW]],[this.offsets[1],[this.offsets[1][0]+this.rectW,this.offsets[1][1]]]]),this.drawLines(s,[[[this.offsets[1][0]+this.rectW,this.offsets[1][1]],this.offsets[1]],[[this.offsets[1][0]+this.rectW,this.offsets[1][1]],[this.offsets[1][0]+this.rectW,this.offsets[1][1]+this.rectW]]]),this.drawLines(s,[[this.offsets[1],[this.offsets[1][0]+this.rectW,this.offsets[1][1]]],[[this.offsets[1][0],this.offsets[1][1]+this.rectW/2],[this.offsets[1][0]+this.rectW,this.offsets[1][1]+this.rectW/2]]]),this.drawLines(s,[[[this.offsets[1][0],this.offsets[1][1]+this.rectW/2],[this.offsets[1][0],this.offsets[1][1]+this.rectW]],[[this.offsets[1][0]+this.rectW,this.offsets[1][1]+this.rectW/2],[this.offsets[1][0]+this.rectW,this.offsets[1][1]+this.rectW]]])},drawLines(s,[t,i]){let[e,h]=t,[f,o]=i;e=e.slice(),f=f.slice();const r=this.lineGap,c=this.lineGap;let a=!1,n=0;for(;!a&&n<1e3;){s.line(...e,...f);const t=h[0]-e[0];t&&(e[0]+=r*(t>0?1:-1));const i=h[1]-e[1];i&&(e[1]+=r*(i>0?1:-1));const W=o[0]-f[0];W&&(f[0]+=c*(W>0?1:-1));const d=o[1]-f[1];d&&(f[1]+=c*(d>0?1:-1)),a=Math.abs(h[0]-e[0])<this.lineGap/2&&Math.abs(h[1]-e[1])<this.lineGap/2&&Math.abs(o[0]-f[0])<this.lineGap/2&&Math.abs(o[1]-f[1])<this.lineGap/2,n+=1}}}},h=i(0),f=Object(h.a)(e,(function(){var s=this._self._c;return s("WHRatio",{attrs:{h:this.height+"px"}},[s("ClientOnly",[s("vue-p5",{on:{setup:this.setup}})],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);