(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f77e497a"],{a3d3:function(t,e,c){"use strict";c.r(e);c("b0c0");var r=c("7a23"),n={class:"my-5 row justify-content-center"},i={class:"table align-middle"},l=Object(r["i"])("thead",null,[Object(r["i"])("th",null,"品名"),Object(r["i"])("th",null,"數量"),Object(r["i"])("th",null,"單價")],-1),b={class:"text-end"},d=Object(r["i"])("td",{colspan:"2",class:"text-end"},"總計",-1),u={class:"text-end"},a={class:"table"},o=Object(r["i"])("th",{width:"100"},"Email",-1),s=Object(r["i"])("th",null,"姓名",-1),O=Object(r["i"])("th",null,"收件人電話",-1),j=Object(r["i"])("th",null,"收件人地址",-1),h=Object(r["i"])("th",null,"付款狀態",-1),p={key:0},f={key:1,class:"text-success"},y={key:0,class:"text-end"},g=Object(r["i"])("button",{class:"btn btn-danger"},"確認付款去",-1);function m(t,e,c,m,v,G){var w=Object(r["D"])("Loading");return Object(r["u"])(),Object(r["e"])(r["a"],null,[Object(r["i"])(w,{active:v.isLoading},null,8,["active"]),Object(r["i"])("div",n,[Object(r["i"])("form",{class:"col-md-6",onSubmit:e[1]||(e[1]=Object(r["Q"])((function(){return G.payOrder&&G.payOrder.apply(G,arguments)}),["prevent"]))},[Object(r["i"])("table",i,[l,Object(r["i"])("tbody",null,[(Object(r["u"])(!0),Object(r["e"])(r["a"],null,Object(r["B"])(v.order.products,(function(t){return Object(r["u"])(),Object(r["e"])("tr",{key:t.id},[Object(r["i"])("td",null,Object(r["G"])(t.product.title),1),Object(r["i"])("td",null,Object(r["G"])(t.qty)+"/"+Object(r["G"])(t.product.unit),1),Object(r["i"])("td",b,Object(r["G"])(t.final_total),1)])})),128))]),Object(r["i"])("tfoot",null,[Object(r["i"])("tr",null,[d,Object(r["i"])("td",u,Object(r["G"])(v.order.total),1)])])]),Object(r["i"])("table",a,[Object(r["i"])("tbody",null,[Object(r["i"])("tr",null,[o,Object(r["i"])("td",null,Object(r["G"])(v.order.user.email),1)]),Object(r["i"])("tr",null,[s,Object(r["i"])("td",null,Object(r["G"])(v.order.user.name),1)]),Object(r["i"])("tr",null,[O,Object(r["i"])("td",null,Object(r["G"])(v.order.user.tel),1)]),Object(r["i"])("tr",null,[j,Object(r["i"])("td",null,Object(r["G"])(v.order.user.address),1)]),Object(r["i"])("tr",null,[h,Object(r["i"])("td",null,[v.order.is_paid?(Object(r["u"])(),Object(r["e"])("span",f,"付款完成")):(Object(r["u"])(),Object(r["e"])("span",p,"尚未付款"))])])])]),!1===v.order.is_paid?(Object(r["u"])(),Object(r["e"])("div",y,[g])):Object(r["f"])("",!0)],32)])],64)}var v={data:function(){return{order:{user:{}},orderId:"",isLoading:!1}},inject:["isApiSuccess"],methods:{getOrder:function(){var t=this,e=this.$api+"/order/"+this.orderId;this.$http.get(e).then((function(c){t.isApiSuccess(c,e)&&(t.order=c.data.order)})).catch((function(t){console.error("Failed to get order: ",t)}))},payOrder:function(){var t=this,e=this.$api+"/pay/"+this.orderId;this.$http.post(e).then((function(e){t.getOrder()})).catch((function(t){console.error("Failed to pay order.",t)}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}};v.render=m;e["default"]=v},b0c0:function(t,e,c){var r=c("83ab"),n=c("9bf2").f,i=Function.prototype,l=i.toString,b=/^\s*function ([^ (]*)/,d="name";r&&!(d in i)&&n(i,d,{configurable:!0,get:function(){try{return l.call(this).match(b)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-f77e497a.92114a3f.js.map