"use strict";(self["webpackChunkmobilitydcatap_ui"]=self["webpackChunkmobilitydcatap_ui"]||[]).push([[43],{8043:function(t,r,e){e.r(r),e.d(r,{default:function(){return R}});var n=e(86397);function u(t){return"_:"+t.value}var a=u;function o(t,r){return[...t].map((t=>r(t))).join("\n")+"\n"}var i=o;function c(){return""}var s=c;function f(t){return"<"+t.value+">"}var l=f;const p=/["\\\\\n\r]/,d=/["\\\\\n\r]/g,m={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r"};function w(t){return m[t]}function h(t){return p.test(t)?t.replace(d,w):t}function v(t){const r=h(t.value);return"http://www.w3.org/2001/XMLSchema#string"===t.datatype.value?'"'+r+'"':"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"===t.datatype.value?'"'+r+'"@'+t.language:'"'+r+'"^^'+l(t.datatype)}var y=v;function b(t,r){const e=r(t.subject),n=r(t.predicate),u=r(t.object),a=r(t.graph);return`${e} ${n} ${u} ${a?a+" ":""}.`}var g=b;function T(t){return"?"+t.value}var j=T;function k(t){if(!t)return null;if("BlankNode"===t.termType)return a(t);if("DefaultGraph"===t.termType)return s();if("Literal"===t.termType)return y(t);if("NamedNode"===t.termType)return l(t);if("Quad"===t.termType||t.subject&&t.predicate&&t.object&&t.graph)return g(t,k);if("Variable"===t.termType)return j(t);if(t[Symbol.iterator])return i(t,k);throw new Error(`unknown termType ${t.termType}`)}var $=k,S=e(46674),_=e(14088);class A{constructor(t){const r=new _.Transform({objectMode:!0,transform:(t,r,e)=>{e(null,`${$(t)}\n`)}});return t.pipe(r),(0,S.A)(r)}}var x=A;class N extends n.A{constructor(){super(x)}}var R=N},86397:function(t,r){class e{constructor(t,r){this.Impl=t,this.options=r}import(t,r){const e=new this.Impl(t,{...this.options,...r});return t.on("end",(()=>{e.readable||e.emit("end")})),t.on("error",(t=>{e.emit("error",t)})),e}}r.A=e},46674:function(t,r){const e=new Set(["_write","_writableState","writable"]);function n(t){return new Proxy(t,{has(t,r){return!e.has(r)&&Reflect.has(...arguments)},get(t,r){if(e.has(r))return;const n=Reflect.get(...arguments);return n&&"function"===typeof n.bind?n.bind(t):n},set(t,r,n){if(!e.has(r))return Reflect.set(...arguments)}})}r.A=n}}]);
//# sourceMappingURL=43.fb5b896b.js.map