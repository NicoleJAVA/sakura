(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-865dcad8"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(n(t))}},"0b42":function(t,e,r){var n=r("861d"),i=r("e8b5"),c=r("b622"),o=c("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),c=r("17c2"),o=r("9112");for(var a in i){var u=n[a],f=u&&u.prototype;if(f&&f.forEach!==c)try{o(f,"forEach",c)}catch(s){f.forEach=c}}},"159d":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),i={class:"table mt-4"},c=Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[Object(n["i"])("th",null,"購買時間"),Object(n["i"])("th",null,"Email"),Object(n["i"])("th",null,"購買款項"),Object(n["i"])("th",null,"應付金額"),Object(n["i"])("th",null,"是否付款"),Object(n["i"])("th",null,"編輯")])],-1),o={class:"list-unstyled"},a={class:"text-right"},u={class:"form-check form-switch"},f={key:0},s={key:1},l={class:"btn-group"};function b(t,e,r,b,d,p){var O=Object(n["B"])("Loading"),h=Object(n["B"])("OrderModal"),j=Object(n["B"])("DelModal"),g=Object(n["B"])("Pagination");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(O,{active:d.isLoading},null,8,["active"]),Object(n["i"])("table",i,[c,Object(n["i"])("tbody",null,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(d.orders,(function(e,r){return Object(n["s"])(),Object(n["e"])(n["a"],{key:r},[d.orders.length?(Object(n["s"])(),Object(n["e"])("tr",{key:0,class:{"text-secondary":!e.is_paid}},[Object(n["i"])("td",null,Object(n["E"])(t.$filters.date(e.create_at)),1),Object(n["i"])("td",null,[e.user?(Object(n["s"])(),Object(n["e"])("span",{key:0,textContent:Object(n["E"])(e.user.email)},null,8,["textContent"])):Object(n["f"])("",!0)]),Object(n["i"])("td",null,[Object(n["i"])("ul",o,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(e.products,(function(t,e){return Object(n["s"])(),Object(n["e"])("li",{key:e},Object(n["E"])(t.product.title)+" 數量："+Object(n["E"])(t.qty)+" "+Object(n["E"])(t.product.unit),1)})),128))])]),Object(n["i"])("td",a,Object(n["E"])(e.total),1),Object(n["i"])("td",null,[Object(n["i"])("div",u,[Object(n["L"])(Object(n["i"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(r){return t.updatePaid(e)}},null,40,["id","onUpdate:modelValue","onChange"]),[[n["G"],e.is_paid]]),Object(n["i"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(n["s"])(),Object(n["e"])("span",f,"已付款")):(Object(n["s"])(),Object(n["e"])("span",s,"未付款"))],8,["for"])])]),Object(n["i"])("td",null,[Object(n["i"])("div",l,[Object(n["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return p.openOrderModal(!1,e)}}," 檢視 ",8,["onClick"]),Object(n["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(r){return t.openDelOrderModal(e)}}," 刪除 ",8,["onClick"])])])],2)):Object(n["f"])("",!0)],64)})),128))])]),Object(n["i"])(h,{order:d.tempOrder,ref:"orderModal",onUpdatePaid:t.updatePaid},null,8,["order","onUpdatePaid"]),Object(n["i"])(j,{item:d.tempOrder,ref:"delModal",onDelItem:t.delOrder},null,8,["item","onDelItem"]),Object(n["i"])(g,{pages:d.pagination,onEmitPages:p.getOrders},null,8,["pages","onEmitPages"])],64)}var d=r("5530"),p={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=e;var r=this.$api+"/admin/orders?page=".concat(e);this.isLoading=!0,this.$http.get(r).then((function(e){t.isLoading=!1,t.orders=e.data.orders,t.pagination=e.data.pagination}))},openOrderModal:function(t,e){this.tempOrder=Object(d["a"])({},e),this.isNew=!1;var r=this.$refs.orderModal;r.showModal()}},created:function(){this.getOrders()}};p.render=b;e["default"]=p},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),c=i("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),c=r("2d00"),o=i("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,c=r("1dde"),o=c("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),c=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),i=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,c(0,r)):t[o]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),c=r("d066"),o=r("c430"),a=r("83ab"),u=r("4930"),f=r("d039"),s=r("5135"),l=r("e8b5"),b=r("861d"),d=r("d9b5"),p=r("825a"),O=r("7b0b"),h=r("fc6a"),j=r("a04b"),g=r("577e"),v=r("5c6c"),y=r("7c73"),m=r("df75"),w=r("241c"),P=r("057f"),E=r("7418"),k=r("06cf"),S=r("9bf2"),x=r("d1e7"),D=r("9112"),C=r("6eeb"),M=r("5692"),N=r("f772"),A=r("d012"),L=r("90e3"),B=r("b622"),_=r("e538"),I=r("746f"),J=r("d44e"),U=r("69f3"),$=r("b727").forEach,z=N("hidden"),F="Symbol",T="prototype",V=B("toPrimitive"),q=U.set,G=U.getterFor(F),Q=Object[T],R=i.Symbol,W=c("JSON","stringify"),H=k.f,K=S.f,X=P.f,Y=x.f,Z=M("symbols"),tt=M("op-symbols"),et=M("string-to-symbol-registry"),rt=M("symbol-to-string-registry"),nt=M("wks"),it=i.QObject,ct=!it||!it[T]||!it[T].findChild,ot=a&&f((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(Q,e);n&&delete Q[e],K(t,e,r),n&&t!==Q&&K(Q,e,n)}:K,at=function(t,e){var r=Z[t]=y(R[T]);return q(r,{type:F,tag:t,description:e}),a||(r.description=e),r},ut=function(t,e,r){t===Q&&ut(tt,e,r),p(t);var n=j(e);return p(r),s(Z,n)?(r.enumerable?(s(t,z)&&t[z][n]&&(t[z][n]=!1),r=y(r,{enumerable:v(0,!1)})):(s(t,z)||K(t,z,v(1,{})),t[z][n]=!0),ot(t,n,r)):K(t,n,r)},ft=function(t,e){p(t);var r=h(e),n=m(r).concat(pt(r));return $(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},st=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=j(t),r=Y.call(this,e);return!(this===Q&&s(Z,e)&&!s(tt,e))&&(!(r||!s(this,e)||!s(Z,e)||s(this,z)&&this[z][e])||r)},bt=function(t,e){var r=h(t),n=j(e);if(r!==Q||!s(Z,n)||s(tt,n)){var i=H(r,n);return!i||!s(Z,n)||s(r,z)&&r[z][n]||(i.enumerable=!0),i}},dt=function(t){var e=X(h(t)),r=[];return $(e,(function(t){s(Z,t)||s(A,t)||r.push(t)})),r},pt=function(t){var e=t===Q,r=X(e?tt:h(t)),n=[];return $(r,(function(t){!s(Z,t)||e&&!s(Q,t)||n.push(Z[t])})),n};if(u||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=L(t),r=function(t){this===Q&&r.call(tt,t),s(this,z)&&s(this[z],e)&&(this[z][e]=!1),ot(this,e,v(1,t))};return a&&ct&&ot(Q,e,{configurable:!0,set:r}),at(e,t)},C(R[T],"toString",(function(){return G(this).tag})),C(R,"withoutSetter",(function(t){return at(L(t),t)})),x.f=lt,S.f=ut,k.f=bt,w.f=P.f=dt,E.f=pt,_.f=function(t){return at(B(t),t)},a&&(K(R[T],"description",{configurable:!0,get:function(){return G(this).description}}),o||C(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:R}),$(m(nt),(function(t){I(t)})),n({target:F,stat:!0,forced:!u},{for:function(t){var e=g(t);if(s(et,e))return et[e];var r=R(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!d(t))throw TypeError(t+" is not a symbol");if(s(rt,t))return rt[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(O(t))}}),W){var Ot=!u||f((function(){var t=R();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,r){var n,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(n=e,(b(e)||void 0!==t)&&!d(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!d(e))return e}),i[1]=e,W.apply(null,i)}})}R[T][V]||D(R[T],V,R[T].valueOf),J(R,F),A[z]=!0},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),c=r("df75"),o=r("d039"),a=o((function(){c(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return c(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),c=r("7b0b"),o=r("50c4"),a=r("65f0"),u=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,s=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,O,h,j){for(var g,v,y=c(p),m=i(y),w=n(O,h,3),P=o(m.length),E=0,k=j||a,S=e?k(p,P):r||b?k(p,0):void 0;P>E;E++)if((d||E in m)&&(g=m[E],v=w(g,E,y),t))if(e)S[E]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:u.call(S,g)}else switch(t){case 4:return!1;case 7:u.call(S,g)}return l?-1:f||s?s:S}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),c=r("56ef"),o=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),i=a.f,f=c(n),s={},l=0;while(f.length>l)r=i(n,e=f[l++]),void 0!==r&&u(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),c=r("fc6a"),o=r("06cf").f,a=r("83ab"),u=i((function(){o(1)})),f=!a||u;n({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(c(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-865dcad8.465722d9.js.map