webpackJsonp([0],{"5Ccg":function(t,n){t.exports=[{text:"Consensus",path:"consensus.m4a",mime:"audio/mp4",color:null},{text:"Discuss",path:"talkAmongstYourselves.m4a",mime:"audio/mp4",color:null},{text:"Sell Me",path:"sell.m4a",mime:"audio/mp4",color:null},{text:"Explain Yourself",path:"explainYourself.m4a",mime:"audio/mp4",color:null},{text:"Do You Concur?",path:"doYouConcur.m4a",mime:"audio/mp4",color:null},{text:"I Object!",path:"iObject.m4a",mime:"audio/mp4",color:null},{text:"I Strenuously Object",path:"strenuouslyObject.m4a",mime:"audio/mp4",color:null}]},NHnr:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("7+uW"),u=o("k9Ku"),r={name:"Sound",computed:{text:function(){return this.sound.text},color:function(){return this.sound.color},textColor:function(){return"white"},isActive:function(){return this.hoverState}},data:function(){return{hoverState:!1}},methods:{updateHoverState:function(t){this.hoverState=t},playAudio:function(){new u.Howl({src:["static/clips/"+this.sound.path]}).play()}},props:["sound"]},i={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"sound",class:{active:t.isActive},style:{backgroundColor:t.color,color:t.textColor},on:{click:function(n){t.playAudio()},mouseenter:function(n){t.updateHoverState(!0)},mouseleave:function(n){t.updateHoverState(!1)}}},[t._v("\n  "+t._s(t.text)+"\n")])},staticRenderFns:[]};var s=o("VU/8")(r,i,!1,function(t){o("li1o")},null,null).exports,a=o("5Ccg"),l=o.n(a),c=["#D72638","#3F88C5","#F49D37","#140F2D","#393E41","#012622","#0A2463"],d=[];function p(){var t,n=c.filter(function(t){return!d.includes(t)}),o=(t=n)[Math.floor(Math.random()*t.length)];return d.push(o),o}var m={name:"SoundList",components:{Sound:s},data:function(){return{soundList:l.a.map(function(t){var n=t;return null==n.color&&(n.color=p()),n})}}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"sound-list"},[n("h1",[this._v("Sound Board")]),this._v(" "),n("div",{staticClass:"sounds"},this._l(this.soundList,function(t){return n("Sound",{key:t.text,attrs:{sound:t}})}))])},staticRenderFns:[]};var h={name:"App",components:{SoundList:o("VU/8")(m,f,!1,function(t){o("SdD2")},null,null).exports}},v={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("SoundList")],1)},staticRenderFns:[]};var x=o("VU/8")(h,v,!1,function(t){o("UnMq")},null,null).exports;e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:x},template:"<App/>"})},SdD2:function(t,n){},UnMq:function(t,n){},li1o:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.655dbc957805734c4e90.js.map