webpackJsonp([1],{"/g/1":function(t,e){},"41Qd":function(t,e){},"9M+g":function(t,e){},DEQr:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n=r("sCSS"),s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"menu"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/"}}},[t._v("Welcome")]),t._v(" "),r("router-link",{staticClass:"link",attrs:{to:{path:"/about"}}},[t._v("About this research")]),t._v(" "),r("router-link",{staticClass:"link",attrs:{to:{path:"/companies"}}},[t._v("Companies")]),t._v(" "),r("router-link",{staticClass:"link",attrs:{to:{path:"/programmes"}}},[t._v("Programmes")])],1),t._v(" "),r("div",{staticClass:"content"},[r("router-view")],1),t._v(" "),r("div",{staticClass:"footer"},[t._v("Footer")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",[this._v("Antimicrobial Resistance Register")])])}]};var i=r("VU/8")({name:"App"},s,!1,function(t){r("RVIQ")},null,null).exports,o=r("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title-head"},[this._v("Welcome")])])}]};var m=r("VU/8")({name:"About"},c,!1,function(t){r("41Qd")},"data-v-510dfea0",null).exports,v=r("mtWM"),u=r.n(v),_={name:"Companies",data:function(){return{companies:[],errors:[]}},created:function(){var t=this;u.a.get("https://odi-amr.herokuapp.com/api/companies").then(function(e){t.companies=e.data.companies}).catch(function(e){t.errors.push(e)})}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title-head"},[t._v("Companies")]),t._v(" "),t._l(t.companies,function(e){return r("div",[r("div",{staticClass:"box"},[r("h2",[r("a",{attrs:{href:"/programmes/"+e.url}},[t._v(t._s(e.name))])]),t._v(" "),r("h4",[t._v("Programmes")]),t._v(" "),t._l(e.programmes,function(e){return r("ul",[r("li",[t._v(t._s(e))])])}),t._v(" "),r("h4",[t._v("Antimicrobials")]),t._v(" "),t._l(e.antimicrobials,function(e){return r("ul",[r("li",[t._v(t._s(e))])])})],2)])})],2)},staticRenderFns:[]};var h=r("VU/8")(_,l,!1,function(t){r("Sfir")},"data-v-cfe8991c",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title-head"},[this._v("About")])])}]};var d=r("VU/8")({name:"About"},p,!1,function(t){r("/g/1")},"data-v-084edecd",null).exports,f=function(){return u.a.get("https://odi-amr.herokuapp.com/api/programmes")},g={name:"Programme",data:function(){return{programmes:[],errors:[]}},created:function(){var t=this;f().then(function(e){t.programmes=e.data.programmes}).catch(function(e){t.errors.push(e)})}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.programmes,function(e){return r("div",[r("div",{staticClass:"box"},[r("h3",[t._v(t._s(e.name))]),t._v(" "),r("small",[t._v(t._s(e.programmeName))]),t._v(" "),r("p",[r("strong",[t._v("Years active: ")]),t._v(" "+t._s(e.yearsActive))]),t._v(" "),r("p",[t._v(t._s(e.primaryObjective))]),t._v(" "),r("h4",[t._v("Dataset")]),t._v(" "),r("p",[r("strong",[t._v("Storage: ")]),t._v(t._s(e.dataset.stored))]),t._v(" "),r("p",[r("strong",[t._v("Format: ")]),t._v(t._s(e.dataset.format))]),r("strong",[t._v("Responsibility: ")]),t._v(t._s(e.dataset.datasetAccessResponsible)),r("p"),t._v(" "),r("h4",[t._v("Methodology")]),t._v(" "),r("p",[r("strong",[t._v("Active: ")]),t._v(t._s(e.methodology.activeSurveillance))])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title-head"},[this._v("Programmes: "),e("strong",{staticStyle:{color:"red"}},[this._v("IN DEVELOPMENT")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticStyle:{color:"red","text-align":"left"}},[this._v("Data shown below is not exhaustive"),e("br"),this._v("Programmes will have individual pages"),e("br"),this._v("Data source can be found "),e("a",{attrs:{href:"https://odi-amr.herokuapp.com/api/programmes"}},[this._v("here")])])}]};var C=r("VU/8")(g,b,!1,function(t){r("DEQr")},"data-v-019ceb3a",null).exports,E={name:"Programme",data:function(){return{programmes:[],errors:[]}},created:function(){var t=this;f().then(function(e){t.programmes=e.data.programmes}).catch(function(e){t.errors.push(e)})}},A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title-head"},[this._v("Programme")])])}]};var k=r("VU/8")(E,A,!1,function(t){r("h4/J")},"data-v-f5420298",null).exports;a.a.use(o.a);var R=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:d},{path:"/companies",name:"Companies",component:h},{path:"/programmes",name:"Programmes",component:C},{path:"/programmes/:programme",name:"Programme",component:k}]});r("Jmt5"),r("9M+g");a.a.use(n.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:R,components:{App:i},template:"<App/>"})},RVIQ:function(t,e){},Sfir:function(t,e){},"h4/J":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.be5c1c01a31723ed7cc3.js.map