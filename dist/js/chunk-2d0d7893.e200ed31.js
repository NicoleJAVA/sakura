(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7893"],{"76db":function(t,e,c){"use strict";c.r(e);var i=c("7a23"),n={class:"container container-custom-width"},s={class:"row mt-4"},a={class:"col-md-7"},o={class:"col"},l={class:"ratio-wrap",style:{"--w":"276","--h":"230"}},r={class:"col"},u={class:"break-line-4"},d={class:"col"},b={key:0,class:"text-decoration-line-through text-deleted\n              fs-6 fw-300 text-center"},j={class:"fs-6 fw-300 text-subtitle text-center"},O=Object(i["i"])("span",{class:"text-primary"},"NTD",-1),p={class:"col d-flex align-items-center"},h={class:"cart-item-num text-center"},g={class:"d-flex"},f=Object(i["i"])("i",{class:"bi bi-dash"},null,-1),m=Object(i["i"])("i",{class:"bi bi-plus"},null,-1),v={class:"row mt-4"},y={class:"col-md-5"},C={class:""},k={class:"table align-middle"},x=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th"),Object(i["i"])("th",null,"品名"),Object(i["i"])("th",{style:{width:"150px"}},"數量"),Object(i["i"])("th",null,"單價")])],-1),$=Object(i["i"])("i",{class:"bi bi-x"},null,-1),w={key:0,class:"text-success"},I={class:"input-group input-group-sm"},_={class:"input-group-text"},G={class:"text-end"},L={key:0,class:"text-success"},q=Object(i["i"])("td",{colspan:"3",class:"text-end"},"總計",-1),T={class:"text-end"},P={key:0},U=Object(i["i"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),A={class:"text-end text-success"},F={class:"input-group mb-3 input-group-sm"},M={class:"input-group-append"},B={class:""},D={class:""},R={class:"row"},S={class:"col-md-7"},V={class:"table align-middle"},J=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",null,"圖片"),Object(i["i"])("th",null,"商品名稱"),Object(i["i"])("th",null,"價格"),Object(i["i"])("th")])],-1),K={style:{width:"200px"}},N={href:"#",class:"text-dark"},z={key:0,class:"h5"},E={key:1,class:"h6"},H={key:2,class:"h5"},Q={class:"btn-group btn-group-sm"},W=Object(i["i"])("div",{class:"spinner-border spinner-border-sm text-danger",role:"status"},null,-1);function X(t,e,c,X,Y,Z){var tt=Object(i["D"])("Loading");return Object(i["u"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(tt,{active:Y.isLoading},null,8,["active"]),Object(i["i"])("div",n,[Object(i["i"])("div",s,[Object(i["i"])("ul",a,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(Y.cart.carts,(function(e){return Object(i["u"])(),Object(i["e"])("li",{key:e.id,class:"row align-items-center my-3"},[Object(i["i"])("div",o,[Object(i["i"])("div",l,[Object(i["i"])("img",{class:"ratio",alt:"image of the product",src:e.product.imageUrl},null,8,["src"])])]),Object(i["i"])("div",r,[Object(i["i"])("div",u,Object(i["G"])(e.product.title),1)]),Object(i["i"])("div",d,[e.product.price!==e.product.origin_price?(Object(i["u"])(),Object(i["e"])("div",b," NTD $ "+Object(i["G"])(t.$filters.currency(e.product.origin_price)),1)):Object(i["f"])("",!0),Object(i["i"])("div",j,[O,Object(i["h"])(" $ "+Object(i["G"])(t.$filters.currency(e.product.price)),1)])]),Object(i["i"])("div",p,[Object(i["i"])("div",h,Object(i["G"])(e.qty),1),Object(i["i"])("div",g,[Object(i["i"])("button",{class:"left-rounded fs-4 fw-light btn btn-outline-primary py-0 btn-link",disabled:e.qty<=1,onClick:function(t){return Z.updateCart(e,e.qty-1)}},[f],8,["disabled","onClick"]),Object(i["i"])("button",{class:"right-rounded fs-4 fw-light btn btn-outline-primary py-0 btn-link",onClick:function(t){return Z.updateCart(e,e.qty+1)}},[m],8,["onClick"])])])])})),128))])]),Object(i["i"])("div",v,[Object(i["i"])("div",y,[Object(i["i"])("div",C,[Object(i["i"])("table",k,[x,Object(i["i"])("tbody",null,[Y.cart.carts?(Object(i["u"])(!0),Object(i["e"])(i["a"],{key:0},Object(i["B"])(Y.cart.carts,(function(e){return Object(i["u"])(),Object(i["e"])("tr",{key:e.id},[Object(i["i"])("td",null,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:Y.status.loadingItem===e.id,onClick:function(t){return Z.removeCartItem(e.id)}},[$],8,["disabled","onClick"])]),Object(i["i"])("td",null,[Object(i["h"])(Object(i["G"])(e.product.title)+" ",1),e.coupon?(Object(i["u"])(),Object(i["e"])("div",w," 已套用優惠券 ")):Object(i["f"])("",!0)]),Object(i["i"])("td",null,[Object(i["i"])("div",I,[Object(i["P"])(Object(i["i"])("input",{type:"number",class:"form-control",disabled:Y.status.loadingItem===e.id,onChange:function(t){return Z.updateCart(e,e.qty)},min:"1","onUpdate:modelValue":function(t){return e.qty=t}},null,40,["disabled","onChange","onUpdate:modelValue"]),[[i["K"],e.qty,void 0,{number:!0}]]),Object(i["i"])("div",_," / "+Object(i["G"])(e.product.unit),1)])]),Object(i["i"])("td",G,[Y.cart.final_total!==Y.cart.total?(Object(i["u"])(),Object(i["e"])("small",L,"折扣價：")):Object(i["f"])("",!0),Object(i["h"])(" "+Object(i["G"])(t.$filters.currency(e.final_total)),1)])])})),128)):Object(i["f"])("",!0)]),Object(i["i"])("tfoot",null,[Object(i["i"])("tr",null,[q,Object(i["i"])("td",T,Object(i["G"])(t.$filters.currency(Y.cart.total)),1)]),Y.cart.final_total!==Y.cart.total?(Object(i["u"])(),Object(i["e"])("tr",P,[U,Object(i["i"])("td",A,Object(i["G"])(t.$filters.currency(Y.cart.final_total)),1)])):Object(i["f"])("",!0)])]),Object(i["i"])("div",F,[Object(i["P"])(Object(i["i"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return Y.coupon_code=t}),placeholder:"請輸入優惠碼"},null,512),[[i["K"],Y.coupon_code]]),Object(i["i"])("div",M,[Object(i["i"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[2]||(e[2]=function(){return Z.addCouponCode&&Z.addCouponCode.apply(Z,arguments)})}," 套用優惠碼 ")])])])])]),Object(i["i"])("div",B,[Object(i["i"])("div",D,[Object(i["i"])("div",{class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return Z.goToForm&&Z.goToForm.apply(Z,arguments)})},"前往結帳")])]),Object(i["i"])("div",R,[Object(i["i"])("div",S,[Object(i["i"])("table",V,[J,Object(i["i"])("tbody",null,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(Y.products,(function(t){return Object(i["u"])(),Object(i["e"])("tr",{key:t.id},[Object(i["i"])("td",K,[Object(i["i"])("div",{style:[{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}]},null,4)]),Object(i["i"])("td",null,[Object(i["i"])("a",N,Object(i["G"])(t.title),1)]),Object(i["i"])("td",null,[t.price?Object(i["f"])("",!0):(Object(i["u"])(),Object(i["e"])("div",z,Object(i["G"])(t.origin_price)+" 元 ",1)),t.price?(Object(i["u"])(),Object(i["e"])("del",E,"原價 "+Object(i["G"])(t.origin_price)+" 元",1)):Object(i["f"])("",!0),t.price?(Object(i["u"])(),Object(i["e"])("div",H," 現在只要 "+Object(i["G"])(t.price)+" 元 ",1)):Object(i["f"])("",!0)]),Object(i["i"])("td",null,[Object(i["i"])("div",Q,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return Z.getProduct(t.id)}}," 查看更多 ",8,["onClick"]),Object(i["i"])("button",{type:"button",class:"btn btn-outline-danger position-relative",disabled:Y.status.loadingItem===t.id,onClick:function(e){return Z.addToCart(t.id)}},[Object(i["i"])("div",{class:{invisible:Y.status.loadingItem===t.id}}," 加到購物車 ",2),Object(i["i"])("div",{class:["position-absolute w-100",{invisible:Y.status.loadingItem!==t.id}],style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},[W],2)],8,["disabled","onClick"])])])])})),128))])])])])])],64)}var Y={data:function(){return{products:[],product:{},isLoading:!1,status:{loadingItem:""},cart:{},coupon_code:""}},inject:["pushMessage","isApiSuccess"],methods:{updateCart:function(t,e){var c=this,i=this.$api+"/cart/".concat(t.id);this.isLoading=!0,this.status.loadingItem=t.id;var n={product_id:t.product_id,qty:e};this.$http.put(i,{data:n}).then((function(t){c.isLoading=!1,c.status.loadingItem="",c.isApiSuccess(t,i)&&c.getCart()})).catch((function(t){console.error("Failed to update cart. ",t)}))},addToCart:function(t){var e=this;this.status.loadingItem=t;var c=this.$api+"/cart",i={product_id:t,qty:1};this.$http.post(c,{data:i}).then((function(t){e.pushMessage(t,"加入購物車"),e.status.loadingItem="",e.getCart()})).catch((function(t){console.error("Add to cart error: ",t)}))},addCouponCode:function(){var t=this,e=this.$api+"/coupon",c={code:this.coupon_code};this.isLoading=!0,this.$http.post(e,{data:c}).then((function(e){t.getCart(),t.pushMessage(e,"套用優惠券"),t.isLoading=!1}))},removeCartItem:function(t){var e=this,c=this.$api+"/cart/"+t;this.status.loadingItem=t,this.isLoading=!0,this.$http.delete(c).then((function(t){e.status.loadingItem="",e.isLoading=!1,e.getCart(),e.pushMessage(t,"刪除購物車品項")}))},getProducts:function(){var t=this,e=this.$api+"/products/all";this.isLoading=!0,this.$http.get(e).then((function(e){t.isLoading=!1,t.products=e.data.products}))},getCart:function(){var t=this,e=this.$api+"/cart";this.isLoading=!0,this.$http.get(e).then((function(c){t.isLoading=!1,t.isApiSuccess(c,e)&&(t.cart=c.data.data,console.log("測試: cart",t.cart))})).catch((function(t){console.error("ERROR! Cannot get cart data: ",t)}))},getProduct:function(t){this.$router.push("/user/product/".concat(t))},goToForm:function(){this.$router.push("/user/form")}},created:function(){this.getProducts(),this.getCart()}};Y.render=X;e["default"]=Y}}]);
//# sourceMappingURL=chunk-2d0d7893.e200ed31.js.map