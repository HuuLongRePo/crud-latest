(function(){"use strict";var e={748:function(e,t,o){var i=o(963),r=o(252);function n(e,t,o,i,n,a){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(a.layout),null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1}))])}var a=o(577);const c={class:"field"},u=(0,r._)("label",{for:"name"},"Name",-1),d={class:"field"},l=(0,r._)("label",{for:"price"},"Price",-1),s={class:"field"},p=(0,r._)("label",{for:"description"},"Description",-1);function h(e,t,o,i,n,h){const m=(0,r.up)("AppButton"),f=(0,r.up)("DataColumn"),v=(0,r.up)("DataTable"),g=(0,r.up)("InputText"),y=(0,r.up)("AppTextarea"),P=(0,r.up)("ProductDialog"),b=(0,r.up)("ConfirmDialog");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(m,{label:"Create",onClick:t[0]||(t[0]=e=>h.createProduct())}),(0,r.Wm)(v,{value:n.products,responsiveLayout:"scroll"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{field:"name",header:"Name"}),(0,r.Wm)(f,{field:"price",header:"Price"}),(0,r.Wm)(f,{field:"description",header:"Description"}),(0,r.Wm)(f,{exportable:!1,style:{"min-width":"8rem"}},{body:(0,r.w5)((e=>[(0,r.Wm)(m,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t=>h.editProduct(e.data)},null,8,["onClick"]),(0,r.Wm)(m,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:t=>h.confirmDeleteProduct(e.data)},null,8,["onClick"])])),_:1})])),_:1},8,["value"]),(0,r.Wm)(P,{modal:!0,header:n.changeheader,visible:n.displaydialog,"onUpdate:visible":h.hideHandler},{footer:(0,r.w5)((()=>[(0,r.Wm)(m,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[4]||(t[4]=e=>h.hideDialog())}),(0,r.Wm)(m,{label:"Yes",icon:"pi pi-check",autofocus:"",onClick:t[5]||(t[5]=e=>h.runFunction())})])),default:(0,r.w5)((()=>[(0,r._)("form",{action:"",class:(0,a.C_)(n.showForm)},[(0,r._)("div",c,[u,(0,r.Wm)(g,{id:"name",required:"true",modelValue:n.product.name,"onUpdate:modelValue":t[1]||(t[1]=e=>n.product.name=e),autofocus:""},null,8,["modelValue"])]),(0,r._)("div",d,[l,(0,r.Wm)(g,{id:"price",required:"true",modelValue:n.product.price,"onUpdate:modelValue":t[2]||(t[2]=e=>n.product.price=e),mode:"currency",currency:"VND",locale:"vi-VN",autofocus:""},null,8,["modelValue"])]),(0,r._)("div",s,[p,(0,r.Wm)(y,{id:"description",modelValue:n.product.description,"onUpdate:modelValue":t[3]||(t[3]=e=>n.product.description=e),required:"true",rows:"3",cols:"25"},null,8,["modelValue"])])],2)])),_:1},8,["header","visible","onUpdate:visible"]),(0,r.Wm)(b)])}var m={data(){return{products:[],product:{},changeheader:"",displaydialog:!1,isEdit:!1,showForm:!1,displayDeleteDialog:!1,linkFetch:"https://6387123fe399d2e473f396a3.mockapi.io/api/v1/products",ProductUpdate:{}}},created(){},mounted(){this.fetchProduct()},methods:{hideHandler(e){e||(this.displaydialog=!1)},fetchProduct(){fetch(this.linkFetch).then((e=>e.json())).then((e=>this.products=e)).catch((e=>{console.error(e)})),console.log(this.products)},createProduct(){this.product={},this.isEdit=!1,this.changeheader="Create Product",this.displaydialog=!0},hideDialog(){this.displaydialog=!1},async createProductAPI(){await fetch(this.linkFetch,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(this.product)}).catch((e=>{console.error(e)})),await this.hideDialog(),await this.fetchProduct()},async updateProductAPI(e){await fetch(`${this.linkFetch}/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(this.product)}).catch((e=>{console.error(e)})),await this.hideDialog(),await this.fetchProduct()},async deleteProductAPI(e){await fetch(`${this.linkFetch}/${e.id}`,{method:"DELETE"}).catch((e=>{console.error(e)})),await this.fetchProduct()},runFunction(){this.isEdit?this.updateProductAPI(this.product):this.createProductAPI()},confirmDeleteProduct(e){console.log(e.id),this.displayDeleteDialog=!0,this.$confirm.require({message:"Are you sure you want to proceed?",header:"Confirm Delete Product",icon:"pi pi-exclamation-triangle",accept:()=>{this.deleteProductAPI(e)},reject:()=>{},onShow:()=>{},onHide:()=>{}})},editProduct(e){this.product=Object.assign({},e),this.displaydialog=!0,this.changeheader="Edit Product",this.isEdit=!0}}},f=o(744);const v=(0,f.Z)(m,[["render",h]]);var g=v;function y(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.WI)(e.$slots,"default")])}var P={name:"LayoutUser",components:{}};const b=(0,f.Z)(P,[["render",y]]);var w=b;const D="User";var k={name:"App",components:{ProductManager:g,LayoutUser:w},computed:{layout(){return"Layout"+(this.$route.meta.layout||D)}}};const C=(0,f.Z)(k,[["render",n]]);var W=C,O=o(897),T=o(247),_=o(325),U=o(456),j=o(76),A=o(958),F=o(491),Z=o(475),x=o(201);const V=[{path:"/",name:"ProductManager",component:g,meta:{layout:"User"}}],E=(0,x.p7)({history:(0,x.PO)("/crud-latest/"),routes:V});var I=E,L=o(25);const N=(0,i.ri)(W);N.use(Z.Z),N.use(I),N.use(L.Z),N.component("DataTable",O.Z),N.component("AppButton",_.Z),N.component("DataColumn",T.Z),N.component("ProductDialog",U.Z),N.component("InputText",j.Z),N.component("AppTextarea",A.Z),N.component("ConfirmDialog",F.Z),N.mount("#app")}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,i,r,n){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],n=e[l][2];for(var c=!0,u=0;u<i.length;u++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[u])}))?i.splice(u--,1):(c=!1,n<a&&(a=n));if(c){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[i,r,n]}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,n,a=i[0],c=i[1],u=i[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(u)var l=u(o)}for(t&&t(i);d<a.length;d++)n=a[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(l)},i=self["webpackChunkcrud_latest"]=self["webpackChunkcrud_latest"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(748)}));i=o.O(i)})();
//# sourceMappingURL=app.72c9a344.js.map