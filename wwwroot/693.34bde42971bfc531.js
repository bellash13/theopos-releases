"use strict";(self.webpackChunktheopos=self.webpackChunktheopos||[]).push([[693],{5693:(bt,m,u)=>{u.r(m),u.d(m,{ChartOfAccountsModule:()=>xt});var l=u(9808),a=u(9150),t=u(1223);let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chart-of-accounts"]],decls:7,vars:0,consts:[["routerLink","/accounting/coa/list"],["routerLink","/accounting/coa/create"]],template:function(n,o){1&n&&(t._UZ(0,"router-outlet")(1,"hr"),t.TgZ(2,"a",0),t._uU(3,"Liste des comptes"),t.qZA(),t._uU(4,"|"),t.TgZ(5,"a",1),t._uU(6,"Cr\xe9er un compte"),t.qZA())},dependencies:[a.lC,a.yS]}),e})();var p=u(2291),Z=u(4327),g=u(2290),C=u(1230),s=u(2382);function v(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"a",3)(2,"strong"),t._uU(3),t.qZA(),t._uU(4),t.qZA(),t.BQk()),2&e){const n=c.$implicit;t.xp6(1),t.MGl("routerLink","/accounting/coa/",n.accountId,""),t.Q6J("title",n.description),t.xp6(2),t.Oqu(n.accountId),t.xp6(1),t.hij(" ",n.name," ")}}function A(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,v,5,4,"ng-container",2),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.accounts)}}function x(e,c){1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2,"D\xe9bit"),t.qZA(),t.BQk())}function b(e,c){1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2,"Cr\xe9dit"),t.qZA(),t.BQk())}const T=function(e){return{"bg-black text-white":e}};function U(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"tr",11),t._UZ(2,"td"),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.YNc(8,x,3,0,"ng-container",0),t.YNc(9,b,3,0,"ng-container",0),t.qZA(),t.TgZ(10,"td")(11,"a",12),t._uU(12,"Afficher"),t.qZA()()(),t.BQk()),2&e){const n=c.$implicit;t.xp6(1),t.Q6J("ngClass",t.VKq(6,T,!n.isActive)),t.xp6(3),t.Oqu(n.accountId),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.Q6J("ngIf",n.isDebit),t.xp6(1),t.Q6J("ngIf",n.isCredit),t.xp6(2),t.MGl("routerLink","/accounting/coa/",n.accountId,"")}}function q(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"table",4)(2,"thead")(3,"tr"),t._UZ(4,"th"),t.TgZ(5,"th"),t._uU(6,"Num\xe9ro"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Libell\xe9"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"th")(12,"a",5),t._UZ(13,"i",6),t.qZA()()()(),t.TgZ(14,"tbody"),t.YNc(15,U,13,8,"ng-container",2),t.qZA()(),t.TgZ(16,"div",7)(17,"div",8)(18,"button",9),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.openImport())}),t._UZ(19,"i",10),t._uU(20," Importer "),t.qZA()()(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(15),t.Q6J("ngForOf",n.accounts)}}function y(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",17),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.previous())}),t._UZ(2,"i",18),t.qZA(),t.BQk()}}function I(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",19),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.next())}),t._UZ(2,"i",20),t.qZA(),t.BQk()}}function k(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"div",13)(2,"div",14)(3,"div",15),t.YNc(4,y,3,0,"ng-container",0),t.qZA(),t.TgZ(5,"div",16),t.YNc(6,I,3,0,"ng-container",0),t.qZA()()(),t.BQk()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngIf",n.pageIndex>0),t.xp6(2),t.Q6J("ngIf",n.accounts.length>=n.pageSize)}}function Q(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",21)(2,"table",4)(3,"thead")(4,"tr"),t._UZ(5,"th"),t.TgZ(6,"th"),t._uU(7,"Num\xe9ro de compte"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Nom"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"D\xe9signation"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Type"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Statut"),t.qZA()(),t.TgZ(16,"tr"),t._UZ(17,"th"),t.TgZ(18,"th"),t._uU(19,"AccountId"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Name"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Description"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Type"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"isClosed"),t.qZA()()()(),t.TgZ(28,"div",22)(29,"div",23)(30,"div",24),t._uU(31," Vous pouvez charger votre liste des comptes ici. "),t.qZA(),t.TgZ(32,"div",25)(33,"label",26),t._uU(34,"Charger liste des compte"),t.qZA(),t.TgZ(35,"input",27),t.NdJ("change",function(i){t.CHM(n);const r=t.oxw();return t.KtG(r.upload(i))}),t.qZA()()(),t._UZ(36,"div",23),t.TgZ(37,"div",23)(38,"div",24),t._uU(39," Vous pouvez t\xe9l\xe9charger un mod\xe8le pour remplir sur un logiciel tableur. "),t.qZA(),t.TgZ(40,"div",28)(41,"div",29)(42,"label",26),t._uU(43,"Nombre des lignes"),t.qZA(),t.TgZ(44,"input",30),t.NdJ("ngModelChange",function(i){t.CHM(n);const r=t.oxw();return t.KtG(r.countAccounts=i)}),t.qZA()(),t.TgZ(45,"div",31)(46,"button",32),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.download(0,1))}),t._UZ(47,"i",33),t._uU(48," T\xe9l\xe9charger "),t.qZA()()()()(),t.TgZ(49,"div",34)(50,"button",35),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.openList())}),t._uU(51,"Retourner"),t.qZA()()(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(44),t.Q6J("ngModel",n.countAccounts)}}let w=(()=>{class e{constructor(n,o,i){this.accountsServ=n,this.toastr=o,this.modalService=i,this.accounts=[],this.viewMode="table",this.subs=[],this.pageIndex=0,this.pageSize=20,this.countAccounts=1}ngOnInit(){this.loadAccounts()}ngOnDestroy(){this.subs.forEach(n=>{n&&n.unsubscribe()})}loadAccounts(){this.accountsServ.index(void 0,!1,"",this.pageIndex,this.pageSize,"").subscribe(n=>{this.accounts=n})}next(){this.pageIndex+=1,this.loadAccounts()}previous(){this.pageIndex=this.pageIndex>0?this.pageIndex-1:this.pageIndex,this.loadAccounts()}onAccountCreated(n){const o=new p.V;o.init(n),this.accounts.push(o),this.createAccountModal.close()}openList(){this.viewMode="list"}openImport(){this.viewMode="import"}upload(n){const o=n.target;if(o.files&&o.files.length>0){const i=o.files[0];this.accountsServ.bulkCreate({data:i,fileName:i.name}).subscribe(d=>{this.toastr.success("Action effectu\xe9e avec succ\xe8s."),this.openList()})}}download(n=0,o=12){this.accountsServ.download(n,this.countAccounts,"csv").subscribe(i=>{(0,Z.saveAs)(i.data,i.fileName||"account-template.csv")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.H$),t.Y36(g._W),t.Y36(C.FF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-list"]],decls:4,vars:4,consts:[[4,"ngIf"],[1,"list-group","mb-3"],[4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink","title"],[1,"table"],["routerLink","/accounting/coa/create",1,"btn","btn-sm","btn-outline-success"],[1,"fa","fa-plus"],[1,"card","card-body","mt-1","mb-1","pe-2"],[1,"text-end"],["title","Importer compte",1,"btn","btn-sm","border","btn-light",3,"click"],[1,"fa","fa-file-excel-o"],[3,"ngClass"],[3,"routerLink"],[1,"card","card-body"],[1,"row"],[1,"col"],[1,"col","text-end"],["type","button","title","Pr\xe9c\xe9dent",1,"btn","btn-light",3,"click"],[1,"fa","fa-arrow-left"],["type","button","title","Suivant",1,"btn","btn-light",3,"click"],[1,"fa","fa-arrow-right"],[1,"text-center"],[1,"row","pt-4","text-center"],[1,"col-md-4"],[1,"alert","alert-info"],[1,"my-2"],["for",""],["type","file",1,"form-control",3,"change"],[1,"row","my-2"],[1,"col-md-6"],["type","number",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"col-md-6","pt-3"],["type","button","title","T\xe9l\xe9charger mod\xe8le",1,"btn","btn-sm","btn-light",3,"click"],[1,"fa","fa-file-csv"],[1,"mt-2"],["type","submit",1,"btn","btn-sm","btn-outline-secondary","ms-2","border-secondary",3,"click"]],template:function(n,o){1&n&&(t.YNc(0,A,3,1,"ng-container",0),t.YNc(1,q,21,1,"ng-container",0),t.YNc(2,k,7,2,"ng-container",0),t.YNc(3,Q,52,1,"ng-container",0)),2&n&&(t.Q6J("ngIf","list"===o.viewMode),t.xp6(1),t.Q6J("ngIf","table"===o.viewMode),t.xp6(1),t.Q6J("ngIf",o.pageIndex>0||o.accounts.length>=o.pageSize),t.xp6(1),t.Q6J("ngIf","import"===o.viewMode))},dependencies:[l.mk,l.sg,l.O5,a.yS,a.Od,s.Fj,s.wV,s.JJ,s.On]}),e})();var _=u(1697);function O(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"a",17)(2,"strong"),t._uU(3),t.qZA(),t._uU(4),t.qZA(),t.BQk()),2&e){const n=c.$implicit;t.xp6(1),t.MGl("routerLink","/accounting/coa/",n.accountId,""),t.Q6J("title",n.description),t.xp6(2),t.Oqu(n.accountId),t.xp6(1),t.hij(" ",n.name," ")}}function J(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"a",18),t._UZ(2,"i",19),t.qZA(),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.MGl("routerLink","/accounting/coa/",n.currentAccount.idParent||"","/")}}function N(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"h4"),t.YNc(2,J,3,1,"ng-container",16),t._uU(3),t.qZA(),t._UZ(4,"hr"),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",n.currentAccount.idParent),t.xp6(1),t.AsE("",n.currentAccount.accountId," ",n.currentAccount.description,"")}}function L(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"div",20)(2,"a",21),t._UZ(3,"i",19),t._uU(4," Compte parent "),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.MGl("routerLink","/accounting/coa/",n.currentAccount.idParent||"","/")}}const B=function(e){return["/accounting","coa",e,"overview"]},S=function(){return["/accounting","coa","create"]},F=function(e){return["/accounting","coa",e,"gl"]},Y=function(e){return["/accounting","coa",e,"balance"]},E=function(e){return["/accounting","coa",e,"edit"]},D=function(e){return["/accounting","coa",e,"delete"]};let M=(()=>{class e{constructor(n,o,i,r){this.coaSession=n,this.accountsServ=o,this.route=i,this.router=r,this.pageIndex=0,this.pageCount=20,this.siblings=[]}ngOnInit(){this.sessionify(),this.querify()}querify(){this.route.paramMap.subscribe(n=>{const o=parseInt(n.get("id")||"");this.coaSession.loadAccount(+o)})}sessionify(){this.coaSession.account$.subscribe(n=>{this.currentAccount=n,this.loadSibling()})}loadSibling(){var n;this.accountsServ.index((null===(n=this.currentAccount)||void 0===n?void 0:n.idParent)||void 0).subscribe(o=>{this.siblings=o})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.N),t.Y36(p.H$),t.Y36(a.gz),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-details"]],decls:35,vars:20,consts:[[1,"row"],[1,"col-md-3"],[1,"list-group","mb-3"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"nav","nav-tabs"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],["aria-hidden","true",1,"fa","fa-eye"],["aria-hidden","true",1,"fa","fa-plus"],["aria-hidden","true",1,"fa","fa-database"],["aria-hidden","true",1,"fa","fa-bar-chart"],["aria-hidden","true",1,"fa","fa-pencil"],["routerLinkActive","active",1,"nav-link","text-danger",3,"routerLink"],["aria-hidden","true",1,"fa","fa-trash"],[1,"mt-4","mb-4"],[4,"ngIf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink","title"],["title"," Compte parent",1,"btn","btn-sm","btn-light","me-2",3,"routerLink"],[1,"fa","fa-arrow-left"],[1,"pt-2","pb-3","text-end"],[1,"btn","btn-sm","btn-light",3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,O,5,4,"ng-container",3),t.qZA()(),t.TgZ(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._UZ(8,"i",8),t._uU(9," Aper\xe7ue "),t.qZA()(),t.TgZ(10,"li",6)(11,"a",7),t._UZ(12,"i",9),t._uU(13," Ajouter "),t.qZA()(),t.TgZ(14,"li",6)(15,"a",7),t._UZ(16,"i",10),t._uU(17," Extraits "),t.qZA()(),t.TgZ(18,"li",6)(19,"a",7),t._UZ(20,"i",11),t._uU(21," Soldes "),t.qZA()(),t.TgZ(22,"li",6)(23,"a",7),t._UZ(24,"i",12),t._uU(25," Modifier "),t.qZA()(),t.TgZ(26,"li",6)(27,"a",13),t._UZ(28,"i",14),t._uU(29," Supprimer "),t.qZA()()(),t.TgZ(30,"div",15),t.YNc(31,N,5,3,"ng-container",16),t._UZ(32,"router-outlet")(33,"hr"),t.YNc(34,L,5,1,"ng-container",16),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngForOf",o.siblings),t.xp6(4),t.Q6J("routerLink",t.VKq(9,B,null==o.currentAccount?null:o.currentAccount.accountId)),t.xp6(4),t.Q6J("routerLink",t.DdM(11,S)),t.xp6(4),t.Q6J("routerLink",t.VKq(12,F,null==o.currentAccount?null:o.currentAccount.accountId)),t.xp6(4),t.Q6J("routerLink",t.VKq(14,Y,null==o.currentAccount?null:o.currentAccount.accountId)),t.xp6(4),t.Q6J("routerLink",t.VKq(16,E,null==o.currentAccount?null:o.currentAccount.accountId)),t.xp6(4),t.Q6J("routerLink",t.VKq(18,D,null==o.currentAccount?null:o.currentAccount.accountId)),t.xp6(4),t.Q6J("ngIf",o.currentAccount),t.xp6(3),t.Q6J("ngIf",o.currentAccount&&o.currentAccount.idParent))},dependencies:[l.sg,l.O5,a.lC,a.yS,a.Od]}),e})();function j(e,c){1&e&&(t.ynx(0),t.TgZ(1,"div",1)(2,"em"),t._uU(3,"Aucun sous-compte..."),t.qZA()(),t.BQk())}function G(e,c){1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2,"D\xe9bit"),t.qZA(),t.BQk())}function $(e,c){1&e&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2,"Cr\xe9dit"),t.qZA(),t.BQk())}const P=function(e){return{"bg-black text-white":e}};function V(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"tr",6),t._UZ(2,"td"),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.YNc(8,G,3,0,"ng-container",0),t.YNc(9,$,3,0,"ng-container",0),t.qZA(),t.TgZ(10,"td")(11,"a",7),t._uU(12,"Afficher"),t.qZA()()(),t.BQk()),2&e){const n=c.$implicit;t.xp6(1),t.Q6J("ngClass",t.VKq(6,P,!n.isActive)),t.xp6(3),t.Oqu(n.accountId),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.Q6J("ngIf",n.isDebit),t.xp6(1),t.Q6J("ngIf",n.isCredit),t.xp6(2),t.MGl("routerLink","/accounting/coa/",n.accountId,"")}}function z(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"table",2)(2,"thead")(3,"tr"),t._UZ(4,"th"),t.TgZ(5,"th"),t._uU(6,"Num\xe9ro"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Libell\xe9"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"th")(12,"a",3),t._UZ(13,"i",4),t.qZA()()()(),t.TgZ(14,"tbody"),t.YNc(15,V,13,8,"ng-container",5),t.qZA()(),t.BQk()),2&e){const n=t.oxw(2);t.xp6(15),t.Q6J("ngForOf",n.currentAccount.children)}}function H(e,c){if(1&e&&(t.ynx(0),t.YNc(1,j,4,0,"ng-container",0),t.YNc(2,z,16,1,"ng-container",0),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!(null!=n.currentAccount.children&&n.currentAccount.children.length)),t.xp6(1),t.Q6J("ngIf",null==n.currentAccount.children?null:n.currentAccount.children.length)}}let K=(()=>{class e{constructor(n,o,i,r){this.coaSession=n,this.accountsServ=o,this.route=i,this.router=r,this.pageIndex=0,this.pageCount=20,this.siblings=[]}ngOnInit(){this.sessionify()}sessionify(){this.coaSession.account$.subscribe(n=>{this.currentAccount=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.N),t.Y36(p.H$),t.Y36(a.gz),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-overview"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"text-center","pt-4","pb-4"],[1,"table"],["routerLink","/accounting/coa/create",1,"btn","btn-sm","btn-outline-success"],[1,"fa","fa-plus"],[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"routerLink"]],template:function(n,o){1&n&&t.YNc(0,H,3,2,"ng-container",0),2&n&&t.Q6J("ngIf",o.currentAccount)},dependencies:[l.mk,l.sg,l.O5,a.yS]}),e})();function X(e,c){1&e&&(t.TgZ(0,"div",24),t._uU(1,"Le code est requis. "),t.qZA())}function R(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,X,2,0,"div",21),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.accountForm.controls.accountId.errors.required)}}function W(e,c){1&e&&(t.TgZ(0,"div",24),t._uU(1,"Nom requis."),t.qZA())}function tt(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,W,2,0,"div",21),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.accountForm.controls.name.errors.required)}}function nt(e,c){1&e&&(t.TgZ(0,"div",24),t._uU(1," Valeur invalide "),t.qZA())}function et(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.saveAccount())}),t.TgZ(2,"div")(3,"div",3)(4,"label",4),t._uU(5,"Code"),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"input",6),t.YNc(8,R,2,1,"div",1),t.qZA()(),t.TgZ(9,"div",3)(10,"label",7),t._uU(11,"Code parent"),t.qZA(),t.TgZ(12,"div",5),t._UZ(13,"input",8),t.qZA()(),t.TgZ(14,"div",3)(15,"label",9),t._uU(16,"Nom"),t.qZA(),t.TgZ(17,"div",5),t._UZ(18,"input",10),t.YNc(19,tt,2,1,"div",1),t.qZA()(),t.TgZ(20,"div",3)(21,"label",11),t._uU(22,"Description"),t.qZA(),t.TgZ(23,"div",5),t._UZ(24,"input",12),t.qZA()(),t.TgZ(25,"div",3)(26,"label",13),t._uU(27,"Type"),t.qZA(),t.TgZ(28,"div",5)(29,"div",14),t._UZ(30,"input",15),t.TgZ(31,"label",16),t._uU(32,"D\xe9bit"),t.qZA()(),t.TgZ(33,"div",14),t._UZ(34,"input",17),t.TgZ(35,"label",18),t._uU(36,"Cr\xe9dit"),t.qZA()()()(),t.TgZ(37,"div",3)(38,"label",19),t._uU(39,"Statut"),t.qZA(),t.TgZ(40,"div",5)(41,"div")(42,"label"),t._UZ(43,"input",20),t._uU(44),t.qZA()(),t.YNc(45,nt,2,0,"div",21),t.qZA()(),t.TgZ(46,"div",3)(47,"div",22)(48,"button",23),t._uU(49,"Sauvegarder"),t.qZA()()()()(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("formGroup",n.accountForm),t.xp6(7),t.Q6J("ngIf",n.accountForm.controls.accountId.invalid&&(n.accountForm.controls.accountId.dirty||n.accountForm.controls.accountId.touched)),t.xp6(11),t.Q6J("ngIf",n.accountForm.controls.name.invalid&&(n.accountForm.controls.name.dirty||n.accountForm.controls.name.touched)),t.xp6(25),t.hij(" ",n.accountForm.controls.isActive.value?"Actif":"Inactif",""),t.xp6(1),t.Q6J("ngIf",n.accountForm.controls.isActive.invalid&&(n.accountForm.controls.isActive.dirty||n.accountForm.controls.isActive.touched)),t.xp6(3),t.Q6J("disabled",n.accountForm.invalid)}}let f=(()=>{class e{constructor(n,o,i,r,d){this.accountService=n,this.coaSession=o,this.formBuilder=i,this.router=r,this.toastr=d,this.viewMode="edit",this.subs=[]}ngOnInit(){this.sessionify()}ngOnDestroy(){this.subs.forEach(n=>{n&&n.unsubscribe()})}ngAfterViewInit(){}sessionify(){const n=this.coaSession.account$.subscribe(o=>{this.account=o,this.buildForm()});this.subs.push(n)}buildForm(){var n;const o=new p.V;o.init(this.account),"create"===this.viewMode&&(o.idParent=null===(n=this.account)||void 0===n?void 0:n.accountId,o.accountId&&this.toastr.warning("Le compte parent a \xe9t\xe9 s\xe9lectionn\xe9 automatiquement, veuillez changer le num\xe9ro du compte!")),this.accountForm=this.formBuilder.group({accountId:[(null==o?void 0:o.accountId)||void 0,[s.kI.required]],idParent:[(null==o?void 0:o.idParent)||null,[]],name:[(null==o?void 0:o.name)||"",[s.kI.required,s.kI.maxLength(30)]],description:[(null==o?void 0:o.description)||"",[s.kI.maxLength(100)]],isDebit:[(null==o?void 0:o.isDebit)||!1],isCredit:[(null==o?void 0:o.isCredit)||!1],isActive:[(null==o?void 0:o.isActive)||!1]})}saveAccount(){const n=this.accountForm.value,o=new p.V;o.init(n),o.idParent||(o.idParent=null),"create"===this.viewMode&&this.accountService.create(o).subscribe(i=>{this.toastr.success("Action effectu\xe9e avec succ\xe8s"),this.accountForm.reset(),this.router.navigateByUrl(`/accounting/coa/${i.idParent}`)}),"edit"===this.viewMode&&this.accountService.edit(o.accountId,o).subscribe(i=>{this.toastr.success("Action effectu\xe9e avec succ\xe8s"),this.router.navigateByUrl(`/accounting/coa/${i.idParent}`)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.H$),t.Y36(_.N),t.Y36(s.qu),t.Y36(a.F0),t.Y36(g._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-edit"]],inputs:{viewMode:"viewMode"},decls:2,vars:1,consts:[[1,"card-card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","mt-2","row"],["for","accountId",1,"col-md-4","text-end"],[1,"col-md-8"],["type","text","id","accountId","formControlName","accountId",1,"form-control","form-control-sm"],["for","idParent",1,"col-md-4","text-end"],["type","text","id","idParent","formControlName","idParent",1,"form-control","form-control-sm"],["for","name",1,"col-md-4","text-end"],["type","text","id","name","formControlName","name",1,"form-control","form-control-sm"],["for","description",1,"col-md-4","text-end"],["type","text","id","description","formControlName","description",1,"form-control","form-control-sm"],[1,"col-md-4","text-end"],[1,"form-check","form-check-inline"],["type","checkbox","id","isDebit","formControlName","isDebit",1,"form-check-input"],["for","isDebit",1,"form-check-label"],["type","checkbox","id","isCredit","formControlName","isCredit",1,"form-check-input"],["for","isCredit",1,"form-check-label"],["for","isActive",1,"col-md-4","text-end"],["type","checkbox","id","isActive","formControlName","isActive",1,"me-2"],["class","text-danger",4,"ngIf"],[1,"offset-md-4","col-md-8"],["type","submit",1,"btn","btn-sm","btn-success",3,"disabled"],[1,"text-danger"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,et,50,6,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",o.accountForm))},dependencies:[l.O5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.sg,s.u]}),e})();function ot(e,c){1&e&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2,"D\xe9bit"),t.qZA(),t.BQk())}function ct(e,c){1&e&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2,"Cr\xe9dit"),t.qZA(),t.BQk())}let it=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-type"]],inputs:{isDebit:"isDebit",isCredit:"isCredit"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(n,o){1&n&&(t.YNc(0,ot,3,0,"ng-container",0),t._uU(1,"-\n"),t.YNc(2,ct,3,0,"ng-container",0)),2&n&&(t.Q6J("ngIf",o.isDebit),t.xp6(2),t.Q6J("ngIf",o.isCredit))},dependencies:[l.O5]}),e})();function rt(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"dl",6)(2,"dt",7),t._uU(3,"Libell\xe9"),t.qZA(),t.TgZ(4,"dd",7),t._uU(5),t.qZA(),t.TgZ(6,"dt",7),t._uU(7,"D\xe9signation"),t.qZA(),t.TgZ(8,"dd",7),t._uU(9),t.qZA(),t.TgZ(10,"dt",7),t._uU(11,"Identifiant"),t.qZA(),t.TgZ(12,"dd",7),t._uU(13),t.qZA(),t.TgZ(14,"dt",7),t._uU(15,"Type"),t.qZA(),t.TgZ(16,"dd",7),t._UZ(17,"app-coa-type",8),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(5),t.Oqu(n.currentAccount.description),t.xp6(4),t.Oqu(n.currentAccount.description),t.xp6(4),t.Oqu(n.currentAccount.accountId),t.xp6(4),t.Q6J("isDebit",n.currentAccount.isDebit)("isCredit",n.currentAccount.isCredit)}}let at=(()=>{class e{constructor(n,o,i,r){this.coaSession=n,this.accountsServ=o,this.router=i,this.toastr=r,this.subs=[]}ngOnInit(){const n=this.coaSession.account$.subscribe(o=>{this.currentAccount=o});this.subs.push(n)}ngOnDestroy(){this.subs.forEach(n=>{n&&n.unsubscribe()})}deleteAccount(){var n;if(!this.currentAccount)return void this.toastr.error("Aucun compte \xe0 supprimer");const o=this.currentAccount.idParent;this.accountsServ.delete((null===(n=this.currentAccount)||void 0===n?void 0:n.accountId)||0).subscribe(i=>{this.toastr.success("Compte supprim\xe9 avec succ\xe8s."),this.onDeleted(o)})}onDeleted(n){this.router.navigateByUrl(`/accounting/coa/${n||""}`)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.N),t.Y36(p.H$),t.Y36(a.F0),t.Y36(g._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-delete"]],decls:9,vars:2,consts:[[1,"alert","alert-danger"],[4,"ngIf"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"fa","fa-time"],[1,"btn","btn-sm","btn-outline-secondary",3,"routerLink"],[1,"fa","fa-arrow-left"],[1,"row"],[1,"col-md-6"],[3,"isDebit","isCredit"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._uU(1," Voulez-vous vraiment supprimer ceci?\n"),t.qZA(),t.YNc(2,rt,18,5,"ng-container",1),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.deleteAccount()}),t._UZ(4,"i",3),t._uU(5," Supprimer\n"),t.qZA(),t.TgZ(6,"a",4),t._UZ(7,"i",5),t._uU(8," Annuler\n"),t.qZA()),2&n&&(t.xp6(2),t.Q6J("ngIf",o.currentAccount),t.xp6(4),t.MGl("routerLink","/accounting/coa/",null==o.currentAccount?null:o.currentAccount.accountId,"/"))},dependencies:[l.O5,a.yS,it]}),e})();var ut=u(7418),st=u(5439),lt=u(2826),dt=u(9356);function pt(e,c){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.currentCurrency.code)}}function _t(e,c){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"momentDate"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,n.lastUpdate,n.settings.momentDateHourFormat))}}function gt(e,c){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Oqu(n.currentCurrency.symbol)}}function mt(e,c){if(1&e&&(t.TgZ(0,"tr")(1,"td",0),t._uU(2),t.qZA(),t.TgZ(3,"td",0)(4,"a",10),t._uU(5),t.qZA()(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td",0),t._uU(9),t.qZA(),t.TgZ(10,"td",0),t._uU(11),t.qZA(),t.TgZ(12,"td",0),t._uU(13),t.qZA(),t.TgZ(14,"td",0),t._uU(15),t.qZA(),t.TgZ(16,"td",0),t._uU(17),t.qZA(),t.TgZ(18,"td",0),t._uU(19),t.qZA(),t.TgZ(20,"td",0),t._uU(21),t.YNc(22,gt,2,1,"ng-container",1),t.qZA()()),2&e){const n=c.$implicit,o=c.index,i=t.oxw(2);t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.MGl("routerLink","/accounting/coa/",n.idAccount,"/balance"),t.xp6(1),t.Oqu(n.idAccount),t.xp6(2),t.hij(" ",null==n.account?null:n.account.name," "),t.xp6(2),t.hij(" ",n.openingDebit," "),t.xp6(2),t.hij(" ",n.openingCredit," "),t.xp6(2),t.hij(" ",n.periodDebit," "),t.xp6(2),t.hij(" ",n.periodCredit," "),t.xp6(2),t.hij(" ",n.closingDebit," "),t.xp6(2),t.hij(" ",n.closingCredit," "),t.xp6(2),t.hij(" ",n.finalBalance," "),t.xp6(1),t.Q6J("ngIf",i.currentCurrency)}}function ft(e,c){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Oqu(n.currentCurrency.symbol)}}function ht(e,c){if(1&e&&(t.TgZ(0,"tr"),t._UZ(1,"td",0),t.TgZ(2,"th",0),t._uU(3),t.qZA(),t.TgZ(4,"th"),t._uU(5),t.qZA(),t.TgZ(6,"th",0),t._uU(7),t.qZA(),t.TgZ(8,"th",0),t._uU(9),t.qZA(),t.TgZ(10,"th",0),t._uU(11),t.qZA(),t.TgZ(12,"th",0),t._uU(13),t.qZA(),t.TgZ(14,"th",0),t._uU(15),t.qZA(),t.TgZ(16,"th",0),t._uU(17),t.qZA(),t.TgZ(18,"th",0),t._uU(19),t.TgZ(20,"strong"),t.YNc(21,ft,2,1,"ng-container",1),t.qZA()()()),2&e){const n=c.$implicit,o=t.oxw(2);t.xp6(3),t.hij(" ",n.idAccount," "),t.xp6(2),t.hij(" ",null==n.account?null:n.account.name," "),t.xp6(2),t.hij(" ",n.openingDebit," "),t.xp6(2),t.hij(" ",n.openingCredit," "),t.xp6(2),t.hij(" ",n.periodDebit," "),t.xp6(2),t.hij(" ",n.periodCredit," "),t.xp6(2),t.hij(" ",n.closingDebit," "),t.xp6(2),t.hij(" ",n.closingCredit," "),t.xp6(2),t.hij(" ",n.finalBalance," "),t.xp6(2),t.Q6J("ngIf",o.currentCurrency)}}function Zt(e,c){if(1&e&&(t.ynx(0),t.YNc(1,mt,23,12,"tr",9),t.TgZ(2,"tfoot"),t.YNc(3,ht,22,10,"tr",9),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.accountBalances.childrenBalances),t.xp6(2),t.Q6J("ngForOf",n.accountBalances.balances)}}const Ct=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"",component:h,children:[{path:"list",component:w},{path:"create",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-create"]],decls:1,vars:1,consts:[[3,"viewMode"]],template:function(n,o){1&n&&t._UZ(0,"app-coa-edit",0),2&n&&t.Q6J("viewMode","create")},dependencies:[f]}),e})()},{path:":id",component:M,children:[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:K},{path:"edit",component:f},{path:"delete",component:at},{path:"balance",component:(()=>{class e{constructor(n,o,i,r){this.accountingSession=n,this.coaSession=o,this.accountsServ=i,this.toastr=r,this.subs=[],this.settings=ut.X}ngOnInit(){this.sessionify()}ngOnDestroy(){this.subs.forEach(n=>{n&&n.unsubscribe()})}sessionify(){const n=this.accountingSession.center$.subscribe(d=>{this.currentCenter=d,this.loadBalances()});this.subs.push(n);const o=this.accountingSession.currency$.subscribe(d=>{this.currentCurrency=d,this.loadBalances()});this.subs.push(o);const i=this.accountingSession.period$.subscribe(d=>{this.currentPeriod=d,this.loadBalances()});this.subs.push(i);const r=this.coaSession.account$.subscribe(d=>{this.currentAccount=d,this.loadBalances()});this.subs.push(r)}loadBalances(n){var o,i;this.currentPeriod?this.currentCurrency?this.currentAccount?this.accountsServ.balances(this.currentAccount.accountId,this.currentPeriod.periodId,null===(o=this.currentCurrency)||void 0===o?void 0:o.currencyId,null===(i=this.currentCenter)||void 0===i?void 0:i.centerId).subscribe(r=>{this.accountBalances=r,this.lastUpdate=st().local()}):n&&this.toastr.error("Veuillez d'abord s\xe9lectionner un compte."):n&&this.toastr.error("Veuillez d'abord s\xe9lectionner la d\xe9vise."):n&&this.toastr.error("Veuillez d'abord s\xe9lectionner l'exercice.")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(lt.e),t.Y36(_.N),t.Y36(p.H$),t.Y36(g._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-balance"]],decls:44,vars:3,consts:[[1,"text-end"],[4,"ngIf"],[1,"table-responsive"],[1,"table","table-hover","table-striped","table-bordered"],[1,"border-bottom-0","border-top-0"],["rowspan","2","valign","middle"],["colspan","2"],["type","button","title","Recharger",1,"btn","btn-sm","btn-light","border-info",3,"click"],[1,"fa","fa-refresh"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"p",0)(1,"em"),t._uU(2,"Soldes "),t.YNc(3,pt,2,1,"ng-container",1),t._uU(4,": "),t.YNc(5,_t,3,4,"ng-container",1),t.qZA()(),t.TgZ(6,"div",2)(7,"table",3)(8,"thead",4)(9,"tr")(10,"th",5),t._uU(11," # "),t.qZA(),t.TgZ(12,"th",6),t._uU(13," Compte "),t.qZA(),t.TgZ(14,"th",6),t._uU(15," Ouverture "),t.qZA(),t.TgZ(16,"th",6),t._uU(17," Mouvements "),t.qZA(),t.TgZ(18,"th",6),t._uU(19," Cloture "),t.qZA(),t.TgZ(20,"th")(21,"button",7),t.NdJ("click",function(){return o.loadBalances(!0)}),t.TgZ(22,"span"),t._UZ(23,"i",8),t.qZA()()()(),t.TgZ(24,"tr")(25,"th"),t._uU(26," Compte "),t.qZA(),t.TgZ(27,"th"),t._uU(28," D\xe9signation "),t.qZA(),t.TgZ(29,"th"),t._uU(30," D\xe9bit "),t.qZA(),t.TgZ(31,"th"),t._uU(32," Cr\xe9dit "),t.qZA(),t.TgZ(33,"th"),t._uU(34," D\xe9bit "),t.qZA(),t.TgZ(35,"th"),t._uU(36," Cr\xe9dit "),t.qZA(),t.TgZ(37,"th"),t._uU(38," D\xe9bit "),t.qZA(),t.TgZ(39,"th"),t._uU(40," Cr\xe9dit "),t.qZA(),t.TgZ(41,"th"),t._uU(42," Solde "),t.qZA()()(),t.YNc(43,Zt,4,2,"ng-container",1),t.qZA()()),2&n&&(t.xp6(3),t.Q6J("ngIf",o.currentCurrency),t.xp6(2),t.Q6J("ngIf",o.lastUpdate),t.xp6(38),t.Q6J("ngIf",o.accountBalances))},dependencies:[l.sg,l.O5,a.yS,dt.v]}),e})()},{path:"gl",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-coa-gl"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"coa-gl works!"),t.qZA())}}),e})()}]}]}];let vt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(Ct),a.Bz]}),e})();var At=u(2611);let xt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,vt,At.m]}),e})()}}]);