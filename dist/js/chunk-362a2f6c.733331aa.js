(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-362a2f6c"],{1799:function(t,e,c){"use strict";var i=c("7a23"),a={"aria-label":"Page navigation example"},o={class:"pagination justify-content-center"},l=Object(i["i"])("span",{"aria-hidden":"true"},"«",-1),n=Object(i["i"])("span",{"aria-hidden":"true"},"»",-1);function r(t,e,c,r,s,d){return Object(i["u"])(),Object(i["e"])("nav",a,[Object(i["i"])("ul",o,[Object(i["i"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(i["i"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(i["Q"])((function(t){return d.updatePage(c.pages.current_page-1)}),["prevent"]))},[l])],2),(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(c.pages.total_pages,(function(t){return Object(i["u"])(),Object(i["e"])("li",{class:["page-item",{active:t===c.pages.current_page}],key:t},[Object(i["i"])("a",{class:"page-link",href:"#",onClick:Object(i["Q"])((function(e){return d.updatePage(t)}),["prevent"])},Object(i["G"])(t),9,["onClick"])],2)})),128)),Object(i["i"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(i["i"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(i["Q"])((function(t){return d.updatePage(c.pages.current_page+1)}),["prevent"]))},[n])],2)])])}var s={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t)}}};s.render=r;e["a"]=s},a434:function(t,e,c){"use strict";var i=c("23e7"),a=c("23cb"),o=c("a691"),l=c("50c4"),n=c("7b0b"),r=c("65f0"),s=c("8418"),d=c("1dde"),u=d("splice"),b=Math.max,p=Math.min,m=9007199254740991,j="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var c,i,d,u,O,f,h=n(this),g=l(h.length),P=a(t,g),v=arguments.length;if(0===v?c=i=0:1===v?(c=0,i=g-P):(c=v-2,i=p(b(o(e),0),g-P)),g+c-i>m)throw TypeError(j);for(d=r(h,i),u=0;u<i;u++)O=P+u,O in h&&s(d,u,h[O]);if(d.length=i,c<i){for(u=P;u<g-i;u++)O=u+i,f=u+c,O in h?h[f]=h[O]:delete h[f];for(u=g;u>g-i+c;u--)delete h[u-1]}else if(c>i)for(u=g-i;u>P;u--)O=u+i-1,f=u+c-1,O in h?h[f]=h[O]:delete h[f];for(u=0;u<c;u++)h[u+P]=arguments[u+2];return h.length=g-i+c,d}})},e01a:function(t,e,c){"use strict";var i=c("23e7"),a=c("83ab"),o=c("da84"),l=c("5135"),n=c("861d"),r=c("9bf2").f,s=c("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};s(b,d);var p=b.prototype=d.prototype;p.constructor=b;var m=p.toString,j="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;r(p,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=m.call(t);if(l(u,t))return"";var c=j?e.slice(7,-1):e.replace(O,"$1");return""===c?void 0:c}}),i({global:!0,forced:!0},{Symbol:b})}},e6dc:function(t,e,c){"use strict";c.r(e);var i=c("7a23"),a={class:"text-end"},o={class:"table mt-4"},l=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{width:"120"},"分類"),Object(i["i"])("th",null,"產品名稱"),Object(i["i"])("th",{width:"120"},"原價"),Object(i["i"])("th",{width:"120"},"售價"),Object(i["i"])("th",{width:"100"},"是否啟用"),Object(i["i"])("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},r={class:"text-right"},s={key:0,class:"text-success"},d={key:1,class:"text-muted"},u={class:"btn-group"};function b(t,e,c,b,p,m){var j=Object(i["D"])("Loading"),O=Object(i["D"])("Pagination"),f=Object(i["D"])("ProductModal"),h=Object(i["D"])("DeleteModal");return Object(i["u"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(j,{active:p.isLoading},null,8,["active"]),Object(i["i"])("div",a,[Object(i["i"])("button",{class:"btn btn-primary",type:"button",onClick:e[1]||(e[1]=function(t){return m.openModal(!0)})}," 新增一個產品 ")]),Object(i["i"])("table",o,[l,Object(i["i"])("tbody",null,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(p.products,(function(e){return Object(i["u"])(),Object(i["e"])("tr",{key:e.id},[Object(i["i"])("td",null,Object(i["G"])(e.category),1),Object(i["i"])("td",null,Object(i["G"])(e.title),1),Object(i["i"])("td",n,Object(i["G"])(t.$filters.currency(e.origin_price)),1),Object(i["i"])("td",r,Object(i["G"])(t.$filters.currency(e.price)),1),Object(i["i"])("td",null,[e.is_enabled?(Object(i["u"])(),Object(i["e"])("span",s,"啟用")):(Object(i["u"])(),Object(i["e"])("span",d,"未啟用"))]),Object(i["i"])("td",null,[Object(i["i"])("div",u,[Object(i["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return m.openModal(!1,e)}}," 編輯 ",8,["onClick"]),Object(i["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return m.openDeleteModal(e)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(i["i"])(O,{pages:p.pagination,onEmitPages:m.getProducts},null,8,["pages","onEmitPages"]),Object(i["i"])(f,{ref:"productModal",product:p.tempProduct,onUpdateProduct:m.updateProduct},null,8,["product","onUpdateProduct"]),Object(i["i"])(h,{ref:"deleteModal",item:p.tempProduct,onDelItem:m.deleteProduct},null,8,["item","onDelItem"])],64)}var p=c("5530"),m=(c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),j={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},f=Object(i["i"])("div",{class:"modal-header bg-dark text-white"},[Object(i["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(i["i"])("span",null,"新增產品")]),Object(i["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},g={class:"row"},P={class:"col-sm-4"},v={class:"mb-3"},y=Object(i["i"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),k={class:"mb-3"},x=Object(i["i"])("label",{for:"customFile",class:"form-label"},[Object(i["h"])("或 上傳圖片 "),Object(i["i"])("i",{class:"fas fa-spinner fa-spin"})],-1),M={key:0,class:"mt-5"},w={key:0},$={class:"col-sm-8"},U={class:"mb-3"},_=Object(i["i"])("label",{for:"title",class:"form-label"},"標題",-1),C={class:"row gx-2"},S={class:"mb-3 col-md-6"},D=Object(i["i"])("label",{for:"category",class:"form-label"},"分類",-1),V={class:"mb-3 col-md-6"},K=Object(i["i"])("label",{for:"price",class:"form-label"},"單位",-1),L={class:"row gx-2"},F={class:"mb-3 col-md-6"},A=Object(i["i"])("label",{for:"origin_price",class:"form-label"},"原價",-1),G={class:"mb-3 col-md-6"},q=Object(i["i"])("label",{for:"price",class:"form-label"},"售價",-1),I=Object(i["i"])("hr",null,null,-1),N={class:"mb-3"},B=Object(i["i"])("label",{for:"description",class:"form-label"},"產品描述",-1),E={class:"mb-3"},J=Object(i["i"])("label",{for:"content",class:"form-label"},"說明內容",-1),Q={class:"mb-3"},T={class:"form-check"},z=Object(i["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),H=Object(i["i"])("div",{class:"modal-footer"},[Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),Object(i["i"])("button",{type:"submit",class:"btn btn-primary"}," 確認 ")],-1);function R(t,e,c,a,o,l){return Object(i["u"])(),Object(i["e"])("div",m,[Object(i["i"])("div",j,[Object(i["i"])("div",O,[Object(i["i"])("form",{onSubmit:e[12]||(e[12]=function(e){return t.$emit("update-product",o.tempProduct)})},[f,Object(i["i"])("div",h,[Object(i["i"])("div",g,[Object(i["i"])("div",P,[Object(i["i"])("div",v,[y,Object(i["P"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[i["K"],o.tempProduct.imageUrl]])]),Object(i["i"])("div",k,[x,Object(i["i"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[2]||(e[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(i["i"])("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:""},null,8,["src"]),o.tempProduct.images?(Object(i["u"])(),Object(i["e"])("div",M,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(o.tempProduct.images,(function(t,e){return Object(i["u"])(),Object(i["e"])("div",{class:"mb-3 input-group",key:e},[Object(i["P"])(Object(i["i"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(t){return o.tempProduct.images[e]=t},placeholder:"請輸入連結"},null,8,["onUpdate:modelValue"]),[[i["K"],o.tempProduct.images[e]]]),Object(i["i"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return o.tempProduct.images.splice(e,1)}}," 移除 ",8,["onClick"])])})),128)),o.tempProduct.images[o.tempProduct.images.length-1]||!o.tempProduct.images.length?(Object(i["u"])(),Object(i["e"])("div",w,[Object(i["i"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=function(t){return o.tempProduct.images.push("")})}," 新增圖片 ")])):Object(i["f"])("",!0)])):Object(i["f"])("",!0)]),Object(i["i"])("div",$,[Object(i["i"])("div",U,[_,Object(i["P"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[4]||(e[4]=function(t){return o.tempProduct.title=t}),placeholder:"請輸入標題"},null,512),[[i["K"],o.tempProduct.title]])]),Object(i["i"])("div",C,[Object(i["i"])("div",S,[D,Object(i["P"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[5]||(e[5]=function(t){return o.tempProduct.category=t}),required:"",placeholder:"請輸入分類"},null,512),[[i["K"],o.tempProduct.category]])]),Object(i["i"])("div",V,[K,Object(i["P"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[6]||(e[6]=function(t){return o.tempProduct.unit=t}),required:"",placeholder:"請輸入單位"},null,512),[[i["K"],o.tempProduct.unit]])])]),Object(i["i"])("div",L,[Object(i["i"])("div",F,[A,Object(i["P"])(Object(i["i"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[7]||(e[7]=function(t){return o.tempProduct.origin_price=t}),required:"",placeholder:"請輸入原價"},null,512),[[i["K"],o.tempProduct.origin_price,void 0,{number:!0}]])]),Object(i["i"])("div",G,[q,Object(i["P"])(Object(i["i"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[8]||(e[8]=function(t){return o.tempProduct.price=t}),required:"",placeholder:"請輸入售價"},null,512),[[i["K"],o.tempProduct.price,void 0,{number:!0}]])])]),I,Object(i["i"])("div",N,[B,Object(i["P"])(Object(i["i"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[9]||(e[9]=function(t){return o.tempProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[i["K"],o.tempProduct.description]])]),Object(i["i"])("div",E,[J,Object(i["P"])(Object(i["i"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[10]||(e[10]=function(t){return o.tempProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[i["K"],o.tempProduct.content]])]),Object(i["i"])("div",Q,[Object(i["i"])("div",T,[Object(i["P"])(Object(i["i"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[11]||(e[11]=function(t){return o.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[i["J"],o.tempProduct.is_enabled]]),z])])])])]),H],32)])])],512)}var W=c("e0ae"),X={data:function(){return{modal:{},tempProduct:{}}},inject:["isApiSuccess"],props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var i=this.$api+"/admin/upload";this.$http.post(i,c).then((function(e){t.isApiSuccess(e,i)&&(t.tempProduct.imageUrl=e.data.imageUrl)}))}},mixins:[W["a"]]};X.render=R;var Y=X,Z=c("ec05"),tt=c("1799"),et={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:Y,DeleteModal:Z["a"],Pagination:tt["a"]},inject:["pushMessage","isApiSuccess"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=this.$api+"/admin/products/?page=".concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.isLoading=!1,t.isApiSuccess(e,c)&&(t.products=e.data.products,t.pagination=e.data.pagination)}))},openModal:function(t,e){this.tempProduct=t?{}:Object(p["a"])({},e),this.isNew=t,this.$refs.productModal.showModal()},updateProduct:function(t){var e=this;this.tempProduct=t;var c=this.$api+"/admin/product",i="post";this.isNew||(c+="/"+t.id,i="put"),this.$http[i](c,{data:this.tempProduct}).then((function(t){e.getProducts(),e.pushMessage(t,"更新"),e.$refs.productModal.hideModal()}))},openDeleteModal:function(t){this.tempProduct=t;var e=this.$refs.deleteModal;e.showModal()},deleteProduct:function(){var t=this,e=this.$api+"/admin/product/"+this.tempProduct.id;this.$http.delete(e).then((function(e){var c=t.$refs.deleteModal;c.hideModal(),t.getProducts()}))}},created:function(){this.getProducts()}};et.render=b;e["default"]=et}}]);
//# sourceMappingURL=chunk-362a2f6c.733331aa.js.map