"use strict";(self.webpackChunktheopos=self.webpackChunktheopos||[]).push([[935],{6617:(P,I,l)=>{l.d(I,{s:()=>_t});var b=l(8505),C=l(8372),m=l(1884),f=l(3900),a=l(262),p=l(9646),h=l(2277),u=l(2291),i=l(2382),v=l(5439),Z=l(3194),t=l(1223),U=l(2290),g=l(9808),L=l(5425),J=l(6152);let k=(()=>{class n{transform(e,...o){return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"formArray",type:n,pure:!0}),n})();const Q=["invoiceDialog"],S=["productIdCtrl"],N=["quantityCtrl"];function M(n,s){1&n&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2,"FACTURATION"),t.qZA(),t.BQk())}function Y(n,s){1&n&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2,"RAVITAILLEMENT"),t.qZA(),t.BQk())}const D=function(n){return{"bg-gray":n}};function V(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr",17)(1,"td",18),t._uU(2),t.qZA(),t.TgZ(3,"td",15),t._uU(4),t.qZA(),t.TgZ(5,"td",19)(6,"button",20),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).selectProduct(c)}),t._uU(7," + Ajouter "),t.qZA()()()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.Q6J("ngClass",t.VKq(3,D,o.selectedProduct&&e.productId==o.selectedProduct.productId)),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.priceSell)}}function R(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"table",12)(2,"tr",13)(3,"th",14),t._uU(4,"Produit"),t.qZA(),t.TgZ(5,"th",15),t._uU(6,"Prix"),t.qZA(),t._UZ(7,"th"),t.qZA(),t.YNc(8,V,8,5,"tr",16),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",e.products)}}const j=function(n){return{"border-info":n}};function B(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",22)(2,"div",23),t._UZ(3,"img",24),t.TgZ(4,"div",5)(5,"h6",25),t._uU(6),t.qZA(),t.TgZ(7,"p",26)(8,"button",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).selectProduct(c)}),t._UZ(9,"i",28),t._uU(10," Ajouter"),t.qZA()()()()(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngClass",t.VKq(2,j,o.selectedProduct&&e.productId==o.selectedProduct.productId)),t.xp6(4),t.Oqu(e.name)}}function H(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",0),t.YNc(2,B,11,4,"ng-container",21),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.products)}}function K(n,s){1&n&&(t.ynx(0),t._uU(1,"Client"),t.BQk())}function z(n,s){1&n&&(t.ynx(0),t._uU(1,"Fournisseur:"),t.BQk())}function $(n,s){if(1&n&&(t.TgZ(0,"option",56),t.ALo(1,"toFormControl"),t._uU(2),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(2);let r;t.Q6J("value",e.partnerId)("selected",e.partnerId==(null==(r=t.lcZ(1,3,o.orderForm.get("idPartner")))?null:r.value)),t.xp6(2),t.hij(" ",e.name,"")}}function G(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2),c=t.MAs(18);return r.open(c)}),t._UZ(1,"i",58),t.qZA()}}function W(n,s){1&n&&(t.TgZ(0,"div")(1,"em"),t._uU(2,"Recherche en cours..."),t.qZA()())}function X(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"input",59,60),t.NdJ("selectItem",function(r){return t.CHM(e),t.oxw(2).selectProduct(r.item)}),t.qZA(),t.YNc(3,W,3,0,"div",2),t.qZA()}if(2&n){const e=t.oxw(2),o=t.MAs(20);t.xp6(1),t.ekj("is-invalid",e.productSearchFailed),t.Q6J("ngbTypeahead",e.productSearch)("resultTemplate",o)("inputFormatter",e.productFormatter),t.xp6(2),t.Q6J("ngIf",e.productSearching)}}function tt(n,s){if(1&n&&(t.TgZ(0,"span",65),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.s9C("title",e.selectedProduct.description),t.xp6(1),t.Oqu(e.selectedProduct.name)}}function et(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",61)(1,"button",62),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).unselectProduct()}),t._UZ(2,"i",63),t._uU(3," Changer"),t.qZA(),t.YNc(4,tt,2,2,"span",64),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(4),t.Q6J("ngIf",e.selectedProduct.name)}}function nt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",66)(2,"div",42)(3,"div",40),t._UZ(4,"input",67),t.ALo(5,"toFormControl"),t._UZ(6,"input",68),t.ALo(7,"toFormControl"),t.qZA()(),t.TgZ(8,"div",69)(9,"div",40)(10,"input",70,71),t.NdJ("keyup.enter",function(){return t.CHM(e),t.oxw(2).insertLine()})("keyup.escape",function(){return t.CHM(e),t.oxw(2).unselectProduct()}),t.ALo(12,"toFormControl"),t.qZA()()(),t.TgZ(13,"div",72)(14,"div",40)(15,"strong"),t._uU(16),t.ALo(17,"toFormControl"),t.qZA()()(),t.TgZ(18,"div",69)(19,"div",40)(20,"button",73),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).insertLine()})("keyup.enter",function(){return t.CHM(e),t.oxw(2).insertLine()}),t._uU(21,"Ins\xe9rer"),t.qZA()()()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("formGroup",e.currentLineForm),t.xp6(3),t.Q6J("formControl",t.lcZ(5,8,e.currentLineForm.get("idProduct")))("readOnly",!0),t.xp6(2),t.Q6J("formControl",t.lcZ(7,10,e.currentLineForm.get("price")))("readOnly",e.InOut),t.xp6(4),t.Q6J("formControl",t.lcZ(12,12,e.currentLineForm.get("quantity"))),t.xp6(6),t.Oqu(t.lcZ(17,14,e.currentLineForm.get("total")).value),t.xp6(4),t.Q6J("disabled",e.currentLineForm.invalid)}}function ot(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr",48)(1,"td",49),t._uU(2),t.qZA(),t.TgZ(3,"td",50),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"td",50),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"td",50),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"td")(13,"button",74),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).removeLine(c.value)}),t._uU(14,"x"),t.qZA()()()}if(2&n){const e=s.$implicit;let o,r,c,d;t.xp6(2),t.Oqu((null==(o=e.get("productDescription"))?null:o.value)||(null==(o=e.get("idProduct"))?null:o.value)),t.xp6(2),t.Oqu(t.lcZ(5,4,null==(r=e.get("price"))?null:r.value)),t.xp6(3),t.Oqu(t.lcZ(8,6,null==(c=e.get("quantity"))?null:c.value)),t.xp6(3),t.Oqu(t.lcZ(11,8,null==(d=e.get("total"))?null:d.value))}}function rt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr",48)(1,"td",75)(2,"div",76)(3,"ngb-pagination",77),t.NdJ("pageChange",function(r){return t.CHM(e),t.oxw(2).orderPage=r}),t.ALo(4,"formArray"),t.qZA()()()()}if(2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("page",e.orderPage)("pageSize",e.orderPageSize)("collectionSize",t.lcZ(4,3,e.orderForm.get("invoiceLines")).controls.length)}}function it(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",78)(1,"div",0)(2,"div",79)(3,"button",80),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).cancel()}),t._uU(4,"Annuler"),t.qZA()(),t.TgZ(5,"div",81)(6,"button",82),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).save()}),t._uU(7,"Payer"),t.qZA()()()()}}function ct(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"form",29)(2,"div",30)(3,"div",31)(4,"div",22)(5,"div",32)(6,"label",33),t.YNc(7,K,2,0,"ng-container",2),t.YNc(8,z,2,0,"ng-container",2),t.qZA(),t.TgZ(9,"select",34),t.ALo(10,"toFormControl"),t._UZ(11,"option",35),t.YNc(12,$,3,5,"option",36),t.qZA()()(),t.TgZ(13,"div",37),t.YNc(14,G,2,0,"button",38),t.qZA(),t.TgZ(15,"div",39)(16,"div",40)(17,"label",33),t._uU(18,"Date:"),t.qZA(),t._uU(19),t.ALo(20,"date"),t.ALo(21,"toFormControl"),t.qZA(),t.TgZ(22,"div",40)(23,"label",33),t._uU(24,"Taux du jour:"),t.qZA(),t._uU(25),t.ALo(26,"number"),t.ALo(27,"toFormControl"),t.qZA(),t.TgZ(28,"div",40)(29,"label",33),t._uU(30,"D\xe9vise:"),t.qZA(),t._uU(31),t.ALo(32,"toFormControl"),t.qZA()()()(),t.TgZ(33,"div",41)(34,"div",0)(35,"div",42),t.YNc(36,X,4,6,"div",2),t.YNc(37,et,5,1,"div",43),t.qZA(),t.TgZ(38,"div",44),t.YNc(39,nt,22,16,"ng-container",2),t.qZA()()(),t.TgZ(40,"div",45)(41,"div",46)(42,"table",47)(43,"tr",48)(44,"th",49),t._uU(45,"Produit"),t.qZA(),t.TgZ(46,"th",50),t._uU(47,"Prix"),t.qZA(),t.TgZ(48,"th",50),t._uU(49,"Quantit\xe9"),t.qZA(),t.TgZ(50,"th",50),t._uU(51,"Total"),t.qZA(),t._UZ(52,"th"),t.qZA(),t.YNc(53,ot,15,10,"tr",51),t.ALo(54,"slice"),t.ALo(55,"formArray"),t.YNc(56,rt,5,5,"tr",52),t.ALo(57,"formArray"),t.TgZ(58,"tr",48)(59,"td",53),t._uU(60,"TVA"),t.qZA(),t.TgZ(61,"th",50),t._uU(62),t.ALo(63,"number"),t.qZA(),t._UZ(64,"th"),t.qZA(),t.TgZ(65,"tr",48)(66,"td",54),t._uU(67,"Total \xe0 payer"),t.qZA(),t.TgZ(68,"th",50),t._uU(69),t.ALo(70,"number"),t.ALo(71,"toFormControl"),t.TgZ(72,"strong"),t._uU(73),t.ALo(74,"toFormControl"),t.qZA()(),t._UZ(75,"th"),t.qZA()(),t.YNc(76,it,8,0,"div",55),t.ALo(77,"formArray"),t.qZA()()(),t.BQk()),2&n){const e=t.oxw();let o,r,c,d,x;t.xp6(1),t.Q6J("formGroup",e.orderForm),t.xp6(6),t.Q6J("ngIf",e.InOut),t.xp6(1),t.Q6J("ngIf",!e.InOut),t.xp6(1),t.Q6J("formControl",t.lcZ(10,18,e.orderForm.get("idPartner"))),t.xp6(3),t.Q6J("ngForOf",e.partners),t.xp6(2),t.Q6J("ngIf",e.newInvoice),t.xp6(5),t.hij(" ",t.xi3(20,20,null==(o=t.lcZ(21,23,e.orderForm.get("invoiceDate")))?null:o.value,"dd/MM/yyyy")," "),t.xp6(6),t.hij(" ",t.lcZ(26,25,null==(r=t.lcZ(27,27,e.orderForm.get("rate")))?null:r.value)," "),t.xp6(6),t.hij(" ",null==(c=t.lcZ(32,29,e.orderForm.get("idCurrency")))?null:c.value," "),t.xp6(5),t.Q6J("ngIf",!e.selectedProduct),t.xp6(1),t.Q6J("ngIf",e.selectedProduct),t.xp6(2),t.Q6J("ngIf",e.currentLineForm),t.xp6(14),t.Q6J("ngForOf",t.Dn7(54,31,t.lcZ(55,35,e.orderForm.get("invoiceLines")).controls,(e.orderPage-1)*e.orderPageSize,e.orderPage*e.orderPageSize)),t.xp6(3),t.Q6J("ngIf",t.lcZ(57,37,e.orderForm.get("invoiceLines")).controls.length>e.orderPageSize),t.xp6(6),t.hij("% ",t.lcZ(63,39,"16"),""),t.xp6(7),t.hij("",t.lcZ(70,41,null==(d=t.lcZ(71,43,e.orderForm.get("total")))?null:d.value)," "),t.xp6(4),t.Oqu(null==(x=t.lcZ(74,45,e.orderForm.get("idCurrency")))?null:x.value),t.xp6(3),t.Q6J("ngIf",t.lcZ(77,47,e.orderForm.get("invoiceLines")).controls.length)}}const w=function(n){return{"bg-success text-white":n}};function st(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td",92),t._uU(5),t.qZA(),t.TgZ(6,"td",92),t._uU(7),t.qZA(),t.TgZ(8,"td",93),t._uU(9),t.qZA()(),t.BQk()),2&n){const e=s.$implicit;t.xp6(3),t.Oqu(null==e.product?null:e.product.name),t.xp6(2),t.Oqu(e.qtyPurchase),t.xp6(2),t.Oqu(e.qtyReceived),t.xp6(1),t.Q6J("ngClass",t.VKq(5,w,e.qtyPurchase===e.qtyReceived)),t.xp6(1),t.Oqu((e.qtyPurchase||0)-(e.qtyReceived||0))}}function lt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"th"),t._uU(3,"Article"),t.qZA(),t.TgZ(4,"th",92),t._uU(5,"Qt\xe9 command\xe9e"),t.qZA(),t.TgZ(6,"th",92),t._uU(7,"Qt\xe9 livr\xe9e"),t.qZA(),t.TgZ(8,"th",92),t._uU(9,"Qt\xe9 restante"),t.qZA()(),t.YNc(10,st,10,7,"ng-container",21),t.BQk()),2&n){const e=s.$implicit;t.xp6(10),t.Q6J("ngForOf",e.deliveryLines)}}function ut(n,s){if(1&n&&(t.TgZ(0,"div")(1,"div",89)(2,"dl",0)(3,"dt",22),t._uU(4,"Date"),t.qZA(),t.TgZ(5,"dd",81),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"dt",22),t._uU(9,"Fournisseur"),t.qZA(),t.TgZ(10,"dd",81),t._uU(11),t.qZA(),t.TgZ(12,"dt",22),t._uU(13,"Total facture"),t.qZA(),t.TgZ(14,"dd",81),t._uU(15),t.ALo(16,"number"),t.qZA(),t.TgZ(17,"dt",22),t._uU(18,"Montant pay\xe9"),t.qZA(),t.TgZ(19,"dd",90),t._uU(20),t.ALo(21,"number"),t.TgZ(22,"strong"),t._uU(23),t.qZA()()()(),t.TgZ(24,"div",89)(25,"table",91),t.YNc(26,lt,11,1,"ng-container",21),t.qZA()()()),2&n){const e=t.oxw(2);t.xp6(6),t.Oqu(t.lcZ(7,8,null==e.newInvoice||null==e.newInvoice.invoiceDate?null:e.newInvoice.invoiceDate.toDate())),t.xp6(5),t.Oqu(null==e.newInvoice.partner?null:e.newInvoice.partner.name),t.xp6(4),t.AsE("",t.lcZ(16,10,null==e.newInvoice?null:e.newInvoice.total)," ",e.newInvoice.idCurrency,""),t.xp6(4),t.Q6J("ngClass",t.VKq(14,w,(null==e.newInvoice?null:e.newInvoice.total)===(null==e.newInvoice?null:e.newInvoice.totalPaid))),t.xp6(1),t.hij(" ",t.lcZ(21,12,null==e.newInvoice?null:e.newInvoice.totalPaid)," "),t.xp6(3),t.Oqu(null==e.newInvoice?null:e.newInvoice.idCurrency),t.xp6(3),t.Q6J("ngForOf",e.newInvoice.deliveries)}}function dt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",83)(1,"h4",84),t._uU(2,"Derni\xe8re facture"),t.qZA(),t.TgZ(3,"button",85),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.qZA()(),t.TgZ(4,"div",86),t.YNc(5,ut,27,16,"div",2),t.qZA(),t.TgZ(6,"div",87)(7,"button",88),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Save click")}),t._uU(8,"Imprimer"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.newInvoice)}}function at(n,s){if(1&n&&t._UZ(0,"ngb-highlight",94),2&n){const e=s.result,o=s.term;t.Q6J("result",e.productId+" "+e.name)("term",o)}}let _t=(()=>{class n{constructor(e,o,r,c,d,x){this.partnersServ=e,this.productsServ=o,this.invoiceServ=r,this.fb=c,this.toastr=d,this.modalService=x,this.InOut=!1,this.partners=[],this.productSearching=!1,this.productSearchFailed=!1,this.products=[],this.productView="grid",this.orderPage=1,this.orderPageSize=4,this.persistanceKey="",this.productSearch=_=>_.pipe((0,C.b)(300),(0,m.x)(),(0,b.b)(()=>{this.productSearching=!0}),(0,f.w)(A=>this.productsServ.index(A,0,20).pipe((0,b.b)(y=>{this.productSearchFailed=!1,1===y.length&&this.selectProduct(y[0])}),(0,a.K)(()=>(this.productSearchFailed=!0,(0,p.of)([]))))),(0,b.b)(()=>{this.productSearching=!1})),this.productFormatter=_=>_.itemId}ngAfterViewInit(){this.setFocusForControls()}ngOnInit(){this.getPartners(),this.persistanceKey=this.InOut?"lastSale":"lastPurchase";let e=JSON.parse(sessionStorage.getItem(this.persistanceKey)||"");e&&(this.currentInvoice=new u.mw(e),console.log({lastOrder:e,InOut:this.InOut}))}buildForm(){this.getProducts(),this.currentInvoice||(this.currentInvoice=new u.mw({idCurrency:"CDF",inOut:this.InOut,idPartner:this.partners.length?this.partners[0].partnerId:""})),this.orderForm=this.fb.group({invoiceId:[this.currentInvoice.invoiceId,[]],idPartner:[this.currentInvoice.idPartner,[i.kI.required]],invoiceDate:[this.currentInvoice.invoiceDate||v.utc(new Date),[i.kI.required]],description:[this.currentInvoice.description,[]],rate:[2e3,[]],idCurrency:[this.currentInvoice.idCurrency,[]],inOut:[this.currentInvoice.inOut,[i.kI.required]],total:[0,[]],invoiceLines:this.fb.array([])}),(this.currentInvoice.invoiceLines||[]).forEach(e=>{this.addLine(e,!1)}),this.setOrderTotal(),this.buildLineForm(new u.Fm)}getProducts(){this.productsServ.index().subscribe(e=>{this.products=e})}setOrderTotal(){var e;let o=0;(this.orderForm.get("invoiceLines").value||[]).forEach(r=>{o+=r.total||0}),null===(e=this.orderForm.get("total"))||void 0===e||e.setValue(o)}addLine(e,o=!0){var r,c,d,x,_;let A=!1;const y=this.orderForm.get("invoiceLines");if(y.controls.forEach(q=>{var O;const E=q,pt=null===(O=null==E?void 0:E.get("idProduct"))||void 0===O?void 0:O.value;if(e.idProduct===pt){const F=E.get("quantity"),mt=(null==F?void 0:F.value)+e.quantity;null==F||F.setValue(mt),E.updateValueAndValidity(),A=!0}}),A)return o&&this.toastr.info(`Quantit\xe9 mise \xe0 jour pour ${e.idProduct}`),this.unselectProduct(),void sessionStorage.setItem(this.persistanceKey,JSON.stringify(this.orderForm.value));const T=this.fb.group({discount:[e.discount||0,[]],idProduct:[e.idProduct||"",[i.kI.required]],productDescription:[(null===(r=e.product)||void 0===r?void 0:r.name)||"",[]],idInvoice:[e.idInvoice||"",[]],price:[e.price||0,[i.kI.required,i.kI.min(0)]],quantity:[e.quantity||1,[i.kI.min(0)]],invoiceLineId:[e.invoiceLineId||"",[]],subTotal:[e.subTotal||0,[]],total:[e.total||0,[]]});this.setInvoiceLineTotal(T),null===(c=T.get("quantity"))||void 0===c||c.valueChanges.subscribe(q=>{this.setInvoiceLineTotal(T)}),null===(d=T.get("price"))||void 0===d||d.valueChanges.subscribe(q=>{this.setInvoiceLineTotal(T)}),null===(x=T.get("discount"))||void 0===x||x.valueChanges.subscribe(q=>{this.setInvoiceLineTotal(T)}),null===(_=T.get("total"))||void 0===_||_.valueChanges.subscribe(q=>{this.setOrderTotal()}),y.push(T),this.setOrderTotal(),o&&(this.toastr.info("Article ajout\xe9 \xe0 liste avec succ\xe8s."),sessionStorage.setItem(this.persistanceKey,JSON.stringify(this.orderForm.value))),this.unselectProduct()}setInvoiceLineTotal(e){var o,r,c,d;const y=(null===(o=e.get("price"))||void 0===o?void 0:o.value)*(null===(r=e.get("quantity"))||void 0===r?void 0:r.value)-(null===(c=e.get("discount"))||void 0===c?void 0:c.value);null===(d=e.get("total"))||void 0===d||d.setValue(y)}selectProduct(e){var o,r,c;const d=e.productId===(null===(r=null===(o=this.currentLineForm)||void 0===o?void 0:o.get("idProduct"))||void 0===r?void 0:r.value);if(this.selectedProduct=e,d){const _=null===(c=this.currentLineForm)||void 0===c?void 0:c.get("quantity"),A=((null==_?void 0:_.value)||0)+1;return null==_||_.setValue(A),void this.setFocusForControls()}const x=new u.Fm({idProduct:this.selectedProduct.productId,price:this.selectedProduct.priceSell,quantity:1,product:new u.xs({name:this.selectedProduct.name})});this.buildLineForm(x)}buildLineForm(e){var o,r;this.currentLineForm=this.fb.group({idProduct:[e.idProduct||"",[i.kI.required]],product:this.fb.group({name:null===(o=null==e?void 0:e.product)||void 0===o?void 0:o.name}),discount:[e.discount||0,[]],price:[e.price||0,[i.kI.required,i.kI.min(0)]],quantity:[e.quantity||0,[i.kI.required,i.kI.min(0)]],total:[e.total||0,[i.kI.required,i.kI.min(0)]]}),null===(r=this.currentLineForm.get("quantity"))||void 0===r||r.valueChanges.subscribe(c=>{this.setInvoiceLineTotal(this.currentLineForm)}),this.setInvoiceLineTotal(this.currentLineForm),this.setFocusForControls()}setFocusForControls(){var e;(null===(e=this.currentLineForm)||void 0===e?void 0:e.value.idProduct)?(h.M.removeFocus(this.productIdCtrl),h.M.setFocus(this.quantityCtrl)):(h.M.removeFocus(this.quantityCtrl),setTimeout(()=>{h.M.setFocus(this.productIdCtrl,1)},500))}insertLine(){var e;!this.currentLineForm||!this.isValidLine(null===(e=this.currentLineForm)||void 0===e?void 0:e.value)||this.addLine(this.currentLineForm.value)}isValidLine(e){return!(!e||((null==e?void 0:e.idProduct)?((null==e?void 0:e.quantity)||0)<=0?(this.toastr.error("Quantit\xe9 invalide."),1):((null==e?void 0:e.price)||0)<=0&&(this.toastr.error("Prix invalide."),1):(this.toastr.error("S\xe9lectionner un produit."),1)))}getPartners(){this.partnersServ.index(this.InOut).subscribe(e=>{this.partners=e,this.buildForm()},e=>{this.toastr.error("Aucun client disponible.")})}save(){if(this.orderForm.invalid){const e=h.M.getFormGroupErrors(this.orderForm).join("\n");this.toastr.error("Formulaire invalide.\n\n"+e)}else this.invoiceServ.create(this.orderForm.value).subscribe(e=>{this.toastr.success("Sauvegard\xe9e avec succ\xe8s."),this.newInvoice=e,this.open(this.invoiceDialog),this.buildForm(),sessionStorage.removeItem(this.persistanceKey)},e=>{this.toastr.error("Impossible de sauvegarder")})}cancel(){}pay(){}removeLine(e){var o;const r=this.orderForm.get("invoiceLines");for(var c=r.controls.length-1;c>=0;c--)e.idProduct&&(null===(o=r.controls[c].get("idProduct"))||void 0===o?void 0:o.value)===e.idProduct&&(r.controls.splice(c,1),c--)}open(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(o=>{},o=>{})}getDismissReason(e){return e===Z.If.ESC?"by pressing ESC":e===Z.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}unselectProduct(){this.selectedProduct=null,this.buildLineForm(new u.Fm)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.r6),t.Y36(u.b0),t.Y36(u.GR),t.Y36(i.qu),t.Y36(U._W),t.Y36(Z.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invoices-edit"]],viewQuery:function(e,o){if(1&e&&(t.Gf(Q,5),t.Gf(S,5),t.Gf(N,5)),2&e){let r;t.iGM(r=t.CRH())&&(o.invoiceDialog=r.first),t.iGM(r=t.CRH())&&(o.productIdCtrl=r.first),t.iGM(r=t.CRH())&&(o.quantityCtrl=r.first)}},inputs:{InOut:"InOut"},decls:21,vars:5,consts:[[1,"row"],[1,"col-md-12","text-center"],[4,"ngIf"],[1,"col-md-4","mb-2"],[1,"card"],[1,"card-body","text-center"],[1,"mt-2","mb-4","text-center",3,"dblclick"],["routerLink","/products/0/edit","title","Cr\xe9er produit",1,"btn","btn-outline-success","mt-1","mb-2"],[1,"bx","bx-plus-circle"],[1,"col-md-8","mb-2"],["invoiceDialog",""],["productResultTpl",""],[1,"table","table-striped","table-borderless"],[1,"bg-info","text-white"],[1,"ps-2","pt-2","pb-2"],[1,"text-end","pe-2"],["class","border border-start-0 border-end-0 ps-2 pt-2 pb-2",3,"ngClass",4,"ngFor","ngForOf"],[1,"border","border-start-0","border-end-0","ps-2","pt-2","pb-2",3,"ngClass"],[1,"ps-2","mt-4","mb-4"],[1,"text-end","pe-1"],["type","button",1,"btn","btn-sm","btn-outline-success","pt-1","pb-1",3,"click"],[4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"card","border","mb-1",3,"ngClass"],["ng-src","images/logox300.png","alt","",1,"card-img-top"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-sm","btn-outline-success",3,"click"],[1,"fa","fa-cart"],[3,"formGroup"],[1,"card","card-body","mt-1","mb-1"],[1,"row","mt-1","mb-1"],[1,"form-group","form-group-inline"],["for","",1,"control-label"],["id","",1,"form-control","form-control-sm",3,"formControl"],["value",""],[3,"value","selected",4,"ngFor","ngForOf"],[1,"col-md-2"],["class","btn btn-sm btn-outline-primary","type","button",3,"click",4,"ngIf"],[1,"col-md-4","text-end"],[1,"form-group"],[1,"card","card-body"],[1,"col-md-4"],["style","font-weight: bold",4,"ngIf"],[1,"col-md-8"],[1,"card","mt-2","mb-2"],[1,"card-body"],[1,"table","table-striped"],[1,"border","border-start-0","border-end-0"],[1,"pt-2","pb-2"],[1,"text-end"],["class","border border-start-0 border-end-0",4,"ngFor","ngForOf"],["class","border border-start-0 border-end-0",4,"ngIf"],["colspan","3",1,"pt-2","pb-2"],["colspan","3",1,"pt-2","pb-2","text-end"],["class","mt-2 mb-2",4,"ngIf"],[3,"value","selected"],["type","button",1,"btn","btn-sm","btn-outline-primary",3,"click"],["title","Derni\xe8re facture",1,"bx","bx-calendar"],["type","text","autofocus","","placeholder","Code ou nom du produit...","tabindex","1",1,"form-control","form-control-sm",3,"ngbTypeahead","resultTemplate","inputFormatter","selectItem"],["productIdCtrl",""],[2,"font-weight","bold"],["type","button","title","Changer",1,"btn","btn-sm","btn-outline-warning","me-2","p-1",3,"click"],[1,"i-Edit"],[3,"title",4,"ngIf"],[3,"title"],["ngClass","{disabled: !currentLine}",1,"row",3,"formGroup"],["type","hidden","placeholder","Produit",1,"form-control","form-control-sm","text-end",3,"formControl","readOnly"],["type","number","step","0.0001","placeholder","Prix",1,"form-control","form-control-sm","text-end",3,"formControl","readOnly"],[1,"col-md-3"],["type","number","step","1","placeholder","Quantit\xe9",1,"form-control","form-control-sm","text-end",3,"formControl","keyup.enter","keyup.escape"],["quantityCtrl",""],[1,"col-md-2","text-end"],["type","button",1,"btn","btn-sm","btn-outline-success",3,"disabled","click","keyup.enter"],["type","button",1,"btn","btn-sm","btn-outline-warning","pt-1","pb-1",3,"click"],["colspan","4",1,"pt-2","pb-2"],[1,"text-center"],[3,"page","pageSize","collectionSize","pageChange"],[1,"mt-2","mb-2"],[1,"col-md-6","text-left"],["type","button",1,"btn","btn-danger",3,"click"],[1,"col-md-6","text-end"],["type","button",1,"btn","btn-success",3,"click"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-sm","btn-outline-dark",3,"click"],[1,"card","card-body","mb-2"],[1,"col-md-6","text-end",3,"ngClass"],[1,"table","table-borderless"],[1,"pe-2","text-end"],[1,"pe-2","text-end",3,"ngClass"],[3,"result","term"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,M,3,0,"ng-container",2),t.YNc(3,Y,3,0,"ng-container",2),t.qZA()(),t.TgZ(4,"div",0)(5,"div",3)(6,"div",4)(7,"div",5)(8,"h4",6),t.NdJ("dblclick",function(){return o.productView="list"==o.productView?"grid":"list"}),t._uU(9,"PRODUITS RECENTS"),t.qZA(),t.TgZ(10,"a",7),t._UZ(11,"i",8),t._uU(12," Cr\xe9er produit"),t.qZA(),t.YNc(13,R,9,1,"ng-container",2),t.YNc(14,H,3,1,"ng-container",2),t.qZA()()(),t.TgZ(15,"div",9),t.YNc(16,ct,78,49,"ng-container",2),t.qZA()(),t.YNc(17,dt,9,1,"ng-template",null,10,t.W1O),t.YNc(19,at,1,2,"ng-template",null,11,t.W1O)),2&e&&(t.xp6(2),t.Q6J("ngIf",o.InOut),t.xp6(1),t.Q6J("ngIf",!o.InOut),t.xp6(10),t.Q6J("ngIf","list"==o.productView),t.xp6(1),t.Q6J("ngIf","grid"==o.productView),t.xp6(2),t.Q6J("ngIf",o.orderForm))},directives:[g.O5,L.yS,g.sg,g.mk,i._Y,i.JL,i.sg,i.EJ,i.JJ,i.oH,i.YN,i.Kr,Z.dR,i.Fj,i.wV,Z.N9,Z._h],pipes:[J.h,g.uU,g.JJ,g.OU,k],styles:[""]}),n})()},1920:(P,I,l)=>{l.d(I,{V:()=>h});var b=l(6315),C=l(9808),m=l(5425),f=l(1223);const a=[];let p=(()=>{class u{}return u.\u0275fac=function(v){return new(v||u)},u.\u0275mod=f.oAB({type:u}),u.\u0275inj=f.cJS({imports:[[m.Bz.forChild(a)],m.Bz]}),u})(),h=(()=>{class u{}return u.\u0275fac=function(v){return new(v||u)},u.\u0275mod=f.oAB({type:u}),u.\u0275inj=f.cJS({imports:[[C.ez,p,b.m]]}),u})()},6152:(P,I,l)=>{l.d(I,{h:()=>C});var b=l(1223);let C=(()=>{class m{transform(a,...p){return a}}return m.\u0275fac=function(a){return new(a||m)},m.\u0275pipe=b.Yjl({name:"toFormControl",type:m,pure:!0}),m})()},2277:(P,I,l)=>{l.d(I,{M:()=>b});const b={setFocus:function C(a,p=0){!a||setTimeout(()=>{a.nativeElement.focus()},p)},removeFocus:function m(a,p=0){!a||setTimeout(()=>{a.nativeElement.blur()},p)},getFormGroupErrors:function f(a){const p=[];return Object.keys(a.controls).forEach(h=>{var u;const i=null===(u=a.get(h))||void 0===u?void 0:u.errors;null!=i&&Object.keys(i).forEach(v=>{p.push(h+", "+v+": "+i[v])})}),p}}},8372:(P,I,l)=>{l.d(I,{b:()=>f});var b=l(1566),C=l(4482),m=l(5403);function f(a,p=b.z){return(0,C.e)((h,u)=>{let i=null,v=null,Z=null;const t=()=>{if(i){i.unsubscribe(),i=null;const g=v;v=null,u.next(g)}};function U(){const g=Z+a,L=p.now();if(L<g)return i=this.schedule(void 0,g-L),void u.add(i);t()}h.subscribe((0,m.x)(u,g=>{v=g,Z=p.now(),i||(i=p.schedule(U,a),u.add(i))},()=>{t(),u.complete()},void 0,()=>{v=i=null}))})}}}]);