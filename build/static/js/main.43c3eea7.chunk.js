(this["webpackJsonpreact-lottery-generator"]=this["webpackJsonpreact-lottery-generator"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=(a(9),a(3));function m({num:e}){return r.a.createElement("div",{key:e,className:"ball"},e)}function u({title:e,maxBalls:t=6,maxNum:a=40}){var l=Object(n.useState)([]),c=Object(o.a)(l,2),u=c[0],i=c[1];Object(n.useEffect)(()=>{s()},[]);var s=()=>{(()=>{var e=Array(t).fill(a);e=e.map(e=>Math.floor(Math.random()*a)+1),i(e)})()};return r.a.createElement("div",{className:"lottery"},r.a.createElement("h2",null,e),u.map(e=>r.a.createElement(m,{key:e,num:e})),r.a.createElement("button",{onClick:s},"Generate"))}function i(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{key:1,title:"Lottery"}))}var s=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),s)},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.43c3eea7.chunk.js.map