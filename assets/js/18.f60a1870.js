(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{328:function(e,t,n){"use strict";n.r(t);var a=n(19),o=n(60),r={name:"format-example",setup:function(){var e=Object(a.j)("{0} {1}"),t=Object(a.j)([Object(a.j)("hello"),Object(a.j)("world")]);return{inputFormat:e,format:Object(o.k)(e,t),args:t,onChange:function(e,n){t.value[n].value=e.target.value},add:function(){return t.value.push(Object(a.j)("{".concat(t.value.length,"}")))},remove:function(e){return t.value.splice(e,1)}}}},u=n(2),l=Object(u.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"format"}},[n("div",[n("h4",[e._v("Array based example")]),e._v(" "),n("div",[e._v("\n      Format:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputFormat,expression:"inputFormat"}],domProps:{value:e.inputFormat},on:{input:function(t){t.target.composing||(e.inputFormat=t.target.value)}}})]),e._v(" "),n("ul",[e._l(e.args,(function(t,a){return n("li",{key:a},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"a.value"}],domProps:{value:t.value},on:{input:[function(n){n.target.composing||e.$set(t,"value",n.target.value)},function(t){return e.onChange(t,a)}]}}),e._v(" "),n("button",{attrs:{title:"remove"},on:{click:function(t){return e.remove(a)}}},[e._v("x")])])})),e._v(" "),n("li",[n("button",{on:{click:e.add}},[e._v("add +")])])],2)]),e._v(" "),n("p",[n("b",[e._v(e._s(e.format))])])])}),[],!1,null,null,null);t.default=l.exports}}]);