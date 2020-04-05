//@ui5-bundle sap/ui/integration/library-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/integration/Extension',['sap/ui/core/Element'],function(E){"use strict";
var a=E.extend("sap.ui.integration.Extension",{metadata:{library:"sap.ui.integration",properties:{actions:{type:"array"}},events:{action:{allowPreventDefault:true,parameters:{card:{type:"sap.ui.core.Control"},actionConfig:{type:'object'},actionSource:{type:"sap.ui.core.Control"},parameters:{type:"object"},type:{type:"sap.ui.integration.CardActionType"}}}}}});
return a;});
sap.ui.predefine('sap/ui/integration/Host',['sap/ui/thirdparty/jquery','./Extension'],function(q,E){"use strict";
var H=E.extend("sap.ui.integration.Host",{metadata:{library:"sap.ui.integration",properties:{resolveDestination:{type:"function",invalidate:false,parameters:{destinationName:{type:"string"}}}},events:{}}});
H.prototype.getDestination=function(d){var r=this.getResolveDestination(),R;if(!r||!q.isFunction(r)){return Promise.reject("Could not resolve destination '"+d+"'. There is no 'resolveDestination' callback function configured in the host.");}R=r(d);if(!R){return Promise.reject("Destination '"+d+"' not found.");}if(R instanceof Promise){return R;}return Promise.resolve(R);};
return H;});
sap.ui.predefine('sap/ui/integration/Widget',["sap/ui/thirdparty/jquery","sap/ui/core/Control","sap/ui/integration/util/Manifest","sap/base/Log","sap/ui/integration/WidgetRenderer","sap/base/util/LoaderExtensions","sap/ui/core/ComponentContainer"],function(q,C,W,L,a,b,c){"use strict";var M={APP_TYPE:"/sap.app/type",PARAMS:"/sap.widget/configuration/parameters"};
var d=C.extend("sap.ui.integration.Widget",{
metadata:{library:"sap.ui.integration",properties:{manifest:{type:"any",defaultValue:""},parameters:{type:"object",defaultValue:null},baseUrl:{type:"string",defaultValue:""},manifestChanges:{type:"array"}},aggregations:{_content:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{action:{parameters:{actionSource:{type:"sap.ui.core.Control"},manifestParameters:{type:"object"},parameters:{type:"object"}}},manifestReady:{parameters:{}}}},
renderer:a
});
d.prototype.init=function(){this.setBusyIndicatorDelay(0);};
d.prototype.onBeforeRendering=function(){if(this._bApplyManifest){this._bApplyManifest=false;var m=this.getManifest();if(!m){this.destroyManifest();}else{this.createManifest(m,this.getBaseUrl());}}};
d.prototype.exit=function(){this.destroyManifest();};
d.prototype.destroyManifest=function(){if(this._oWidgetManifest){this._oWidgetManifest.destroy();this._oWidgetManifest=null;}this.destroyAggregation("_content");};
d.prototype.setManifest=function(v){this.setProperty("manifest",v);this._bApplyManifest=true;return this;};
d.prototype.setManifestChanges=function(v){if(!Array.isArray(v)){L.error("The value for manifestChanges must be an array. The given value is: "+v,"sap.ui.integration.Widget");return this;}this.setProperty("manifestChanges",v);this._bApplyManifest=true;return this;};
d.prototype.setParameters=function(v){this.setProperty("parameters",v);this._bApplyManifest=true;return this;};
d.prototype.getManifest=function(){var v=this.getProperty("manifest");if(v&&typeof v==="object"){return q.extend(true,{},v);}return v;};
d.prototype.createManifest=function(m,B){var o={};if(typeof m==="string"){o.manifestUrl=m;m=null;}o.processI18n=false;this.setBusy(true);this._oWidgetManifest=new W("sap.widget",m,B,this.getManifestChanges());return this._oWidgetManifest.load(o).then(function(){this.fireManifestReady();this._applyManifest();}.bind(this)).catch(this._applyManifest.bind(this));};
d.prototype.getParameters=function(){var v=this.getProperty("parameters");if(v&&typeof v==="object"){return q.extend(true,{},v);}return v;};
d.prototype._applyManifest=function(){var p=this.getParameters(),A=this._oWidgetManifest.get(M.APP_TYPE);if(A&&A!=="widget"){L.error("sap.app/type entry in manifest is not 'widget'");}this._registerManifestModulePath();this._oWidgetManifest.processParameters(p);return this._createComponent(this._oWidgetManifest.getJson(),this.getBaseUrl());};
d.prototype._registerManifestModulePath=function(){if(!this._oWidgetManifest){return;}var A=this._oWidgetManifest.get("/sap.app/id");if(A){b.registerResourcePath(A.replace(/\./g,"/"),this._oWidgetManifest.getUrl());}else{L.error("Widget sap.app/id entry in the manifest is mandatory");}};
d.prototype._createComponent=function(m,B){var o={manifest:m};if(B){o.url=B;o.altManifestUrl=B;}return sap.ui.core.Component.load(o).then(function(e){var f=new c({component:e().getId()});f.attachEvent("action",function(E){var p=E.getParameter("parameters");this.fireEvent("action",{actionSource:E.getParameter("actionSource"),manifestParameters:p,parameters:p});}.bind(this));this.setAggregation("_content",f);this.setBusy(false);this.fireEvent("_ready");}.bind(this));};
d.prototype.loadDesigntime=function(){if(!this._oWidgetManifest){return Promise.reject("Manifest not yet available");}var A=this._oWidgetManifest.get("/sap.app/id");if(!A){return Promise.reject("App id not maintained");}var m=A.replace(/\./g,"/");return new Promise(function(r,e){var s=m+"/"+(this._oWidgetManifest.get("/sap.widget/designtime")||"designtime/Widget.designtime");if(s){sap.ui.require([s,"sap/base/util/deepClone"],function(D,f){r({designtime:D,manifest:f(this._oWidgetManifest.oJson,30)});}.bind(this),function(){e({error:s+" not found"});});}else{e();}}.bind(this));};
return d;});
sap.ui.predefine('sap/ui/integration/WidgetComponent',["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(U,J){"use strict";
var W=U.extend("sap.ui.integration.WidgetComponent");
W.prototype.init=function(){var r=U.prototype.init.apply(this,arguments);this._applyWidgetModel();return r;};
W.prototype._applyWidgetModel=function(){var m=new J();m.setData(this.getManifestEntry("sap.widget")||{});this.setModel(m,"sap.widget");};
W.prototype.fireAction=function(p){this.oContainer.getParent().fireAction(p);};
W.prototype.getWidgetConfiguration=function(p){return this.getModel("sap.widget").getProperty(p||"/");};
W.prototype.update=function(){};
return W;});
sap.ui.predefine('sap/ui/integration/WidgetRenderer',[],function(){"use strict";var W={},r=sap.ui.getCore().getLibraryResourceBundle("sap.f");
W.render=function(R,w){var c=w.getAggregation("_content");R.write("<div");R.writeElementData(w);R.writeClasses();R.writeAccessibilityState(w,{role:"region",roledescription:{value:r.getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});R.write(">");if(c){R.renderControl(c);}R.write("</div>");};
return W;});
sap.ui.predefine('sap/ui/integration/controls/ActionsToolbar',["sap/ui/thirdparty/jquery","sap/ui/core/Core",'sap/ui/core/Control',"sap/m/library","sap/m/Button","sap/m/ActionSheet","sap/ui/integration/util/CardActions","./ActionsToolbarRenderer"],function(q,C,a,l,B,A,b){"use strict";var c=l.ButtonType;
function s(o,p,v,e){return new Promise(function(r){var R;if(q.isFunction(v)){R=v(e);if(R instanceof Promise){R.then(function(f){o.setProperty(p,f);r();});return;}}else{R=v;}o.setProperty(p,R);r();});}
var d=a.extend("sap.ui.integration.controls.ActionsToolbar",{metadata:{library:"sap.ui.integration",properties:{},aggregations:{_toolbar:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}}});
d.prototype._open=function(){this._refreshButtons().then(function(){this._oActionSheet.openBy(this._getToolbar());}.bind(this));};
d.prototype._createActionButton=function(h,o,m){return new B({icon:m.icon,text:m.text,tooltip:m.tooltip,type:m.buttonType,press:function(e){b.fireAction({card:o,host:h,action:m,parameters:m.parameters,source:e.getSource(),url:m.url});}});};
d.prototype._getToolbar=function(){var t=this.getAggregation('_toolbar');if(!t){t=new B({icon:'sap-icon://overflow',type:c.Transparent,press:function(e){this._open();}.bind(this)});this.setAggregation('_toolbar',t);}return t;};
d.prototype.initializeContent=function(h,o){var t=this,e,f=[],g;this._oCard=o;this._aActions=g=h.getActions();if(!g||!g.length){return false;}g.forEach(function(i){e=t._createActionButton(h,o,i);f.push(e);});if(this._oActionSheet){this._oActionSheet.destroy();}this._oActionSheet=new A({buttons:f});return true;};
d.prototype._refreshButtons=function(){var e=this._aActions,o=this._oCard,f=this._oActionSheet.getButtons(),m,g,i,p=[];for(i=0;i<e.length;i++){m=e[i];g=f[i];p.push(s(g,'enabled',m.enabled,o));p.push(s(g,'visible',m.visible,o));}return Promise.all(p);};
d.prototype.exit=function(){this._oCard=null;this._aActions=null;if(this._oActionSheet){this._oActionSheet.destroy();this._oActionSheet=null;}};
return d;});
sap.ui.predefine('sap/ui/integration/controls/ActionsToolbarRenderer',['sap/ui/core/Renderer'],function(R){"use strict";var A={apiVersion:2};
A.render=function(r,c){r.openStart("div",c);r.class("sapUIActionsToolbar");r.openEnd();r.renderControl(c._getToolbar());r.close("div");};
return A;},true);
sap.ui.predefine('sap/ui/integration/customElements/CustomElementBase',["sap/base/Log","sap/ui/integration/util/Utils","sap/base/strings/hyphenate","sap/base/strings/camelize","sap/ui/integration/thirdparty/customElements","sap/ui/integration/thirdparty/customEvent"],function(L,U,h,c,a,b){"use strict";
function C(){if(this.constructor===C){throw new TypeError('Abstract class "CustomElementBase" cannot be instantiated directly.');}return Reflect.construct(HTMLElement,[],this.constructor);}
C.prototype=Object.create(HTMLElement.prototype);C.prototype.constructor=C;
C.prototype.connectedCallback=function(){this._init();this._upgradeAllProperties();this._oControlInstance.placeAt(this.firstElementChild);this._attachEventListeners();};
C.prototype.disconnectedCallback=function(){if(this._oControlInstance){this._oControlInstance.destroy();delete this._oControlInstance;}if(this.firstElementChild){this.removeChild(this.firstElementChild);}};
C.prototype.attributeChangedCallback=function(A,o,n){this._init();var s=c(A);if(U.isJson(n)){n=JSON.parse(n);}if(this._mAllProperties[s]){this._mAllProperties[s].set(this._oControlInstance,n);}else if(this._mAllAssociations[s]){var e=document.getElementById(n);if(e instanceof C){n=document.getElementById(n)._getControl();}this._mAllAssociations[s].set(this._oControlInstance,n);}};
C.prototype._init=function(){if(!this._oControlInstance){this._oControlInstance=new this._ControlClass();}if(!this.firstElementChild){var u=document.createElement("div");this.appendChild(u);}};
C.prototype._getControl=function(){this._init();return this._oControlInstance;};
C.prototype._attachEventListeners=function(){Object.keys(this._oMetadata.getEvents()).map(function(e){this._oControlInstance.attachEvent(e,function(E){this.dispatchEvent(new CustomEvent(e,{detail:E,bubbles:true}));},this);}.bind(this));};
C.prototype._upgradeAllProperties=function(){this._aAllProperties.forEach(this._upgradeProperty.bind(this));};
C.prototype._upgradeProperty=function(p){if(this[p]){var v=this[p];delete this[p];this[p]=v;}};
C.generateAccessors=function(p,P){P.forEach(function(s){Object.defineProperty(p,s,{get:function(){return this.getAttribute(h(s));},set:function(v){if(typeof v==="object"){v=JSON.stringify(v);}return this.setAttribute(h(s),v);}});});};
C.define=function(s,d,D){C.awaitDependencies(D).then(function(){window.customElements.define(s,d);});};
C.awaitDependencies=function(d){var p=d.map(function(s){return window.customElements.whenDefined(s);});return Promise.all(p);};
C.extend=function(d,s){function e(){return C.apply(this,arguments);}e.prototype=Object.create(C.prototype);e.prototype.constructor=e;var p=e.prototype,k="";p._ControlClass=d;p._oMetadata=d.getMetadata();p._mAllAssociations=p._oMetadata.getAllAssociations();p._mAllProperties=p._oMetadata.getAllProperties();p._aAllProperties=[];for(k in p._mAllProperties){if(s&&s.privateProperties&&s.privateProperties.indexOf(k)!==-1){continue;}p._aAllProperties.push(k);}for(k in p._mAllAssociations){p._aAllProperties.push(k);}Object.defineProperty(e,"observedAttributes",{get:function(){var A=p._aAllProperties.map(h);return A;}});C.generateAccessors(p,p._aAllProperties);return e;};
return C;});
sap.ui.predefine('sap/ui/integration/host/HostConfiguration',['sap/ui/core/Control',"sap/ui/integration/host/HostConfigurationCompiler"],function(C,H){"use strict";
var a=C.extend("sap.ui.integration.host.HostConfiguration",{
metadata:{library:"sap.ui.integration",properties:{config:{type:"any"},css:{type:"string"}},events:{cssChanged:{}}},
renderer:function(r,c){r.write("<style ");r.writeElementData(c);r.write(">");r.write(c._getCssText()||"");r.write("</style>");}
});
a.prototype.setConfig=function(v,s){this._sCssText=null;return this.setProperty("config",v,s);};
a.prototype.setCss=function(v,s){this._sCssText=null;return this.setProperty("css",v,s);};
a.prototype.onBeforeRendering=function(){if(!this._sCssText){if(this.getCss()){this._applyCss();}else{this._applyConfig();}}};
a.prototype._applyCss=function(){var c=this.getCss();H.loadResource(c,"text").then(function(s){this._sCssText=s;this.invalidate();}.bind(this)).catch(function(){});};
a.prototype._applyConfig=function(){var v=this.getConfig();if(typeof v==="string"){H.loadResource(v,"json").then(function(v){this._oConfig=v;this.invalidate();}.bind(this)).catch(function(){});}else if(typeof v==="object"&&!Array.isArray(v)){this._oConfig=v;this.invalidate();}};
a.prototype._getCssText=function(){var c=this._oConfig;if(!c&&!this.getCss()){return"";}if(this._sCssText){return this._sCssText;}var s=this.getId().replace(/-/g,"_").replace(/\./g,"_").replace(/\,/g,"_");this._sCssText=H.generateCssText(this._oConfig,s);this.fireCssChanged({cssText:this._sCssText});return this._sCssText;};
a.prototype.generateJSONSettings=function(t){return H.generateJSONSettings(this._oConfig,t);};
return a;});
sap.ui.predefine('sap/ui/integration/host/HostConfigurationCompiler',["sap/ui/thirdparty/less","sap/base/Log"],function(L,a){"use strict";var p=jQuery.sap.loadResource("sap/ui/integration/host/HostConfigurationMap.json",{dataType:"json"}),l=jQuery.sap.loadResource("sap/ui/integration/host/HostConfiguration.less",{dataType:"text"});
function b(u,t){return new Promise(function(r,e){jQuery.ajax({url:u,async:true,dataType:t,success:function(j){r(j);},error:function(){e();}});});}
function _(n,P){if(!P){return n;}var e=P.split("/"),i=0;if(!e[0]){n=n;i++;}while(n&&e[i]){n=n[e[i]];i++;}return n;}
function g(C,s){var m=p.less,P=[];for(var n in m){var M=m[n],v=_(C,M.path),u=M.unit;if(v){P.push(n+":"+v+(u?u:""));}else{P.push(n+": /*null*/");}}var r=l.replace(/\#hostConfigName/g,"."+s);r=r.replace(/\/\* HOSTCONFIG PARAMETERS \*\//,P.join(";\n")+";");var o=new L.Parser(),S="";o.parse(r,function(e,R){try{S=R.toCSS();}catch(f){S=" ";}});return S;}
function c(C,N){function e(C,v){var r=null;if(v.path){r=_(C,v.path);if(v.unit){v.unit=r+v.unit;}}else if(v.value){r=v.value;}else if(Array.isArray(v)){r=[];for(var i=0;i<v.length;i++){r.push(e(C,v[i]));}}return r;}var m=p[N],s={};for(var n in m){var M=m[n],o=n.split("/"),f=s;if(M){for(var i=0;i<o.length-1;i++){if(f[o[i]]===undefined){f[o[i]]={};}f=f[o[i]];}f[o[o.length-1]]=e(C,M);}}return s;}
function d(C,o){return b(C,"json").then(function(o){return g(o,o);});}
return{loadResource:b,generateCssText:g,generateCssTextAsync:d,generateJSONSettings:c};});
sap.ui.predefine('sap/ui/integration/library',["sap/ui/base/DataType","sap/ui/Global","sap/ui/core/library","sap/m/library","sap/f/library"],function(D){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.integration",version:"1.76.0",dependencies:["sap.ui.core","sap.f","sap.m"],types:["sap.ui.integration.CardActionType","sap.ui.integration.CardDataMode"],controls:["sap.ui.integration.widgets.Card","sap.ui.integration.Widget","sap.ui.integration.host.HostConfiguration"],elements:["sap.ui.integration.Host","sap.ui.integration.Extension"],customElements:{"card":"sap/ui/integration/customElements/CustomElementCard","widget":"sap/ui/integration/customElements/CustomElementWidget","host-configuration":"sap/ui/integration/customElements/CustomElementHostConfiguration"}});var t=sap.ui.integration;t.CardActionType={Navigation:"Navigation",Submit:"Submit",Custom:'Custom'};t.CardDataMode={Active:"Active",Inactive:"Inactive"};return t;});
sap.ui.predefine('sap/ui/integration/services/Data',['./Service'],function(S){"use strict";var D=S.extend();
D.prototype.attachDataChanged=function(d,p){};
D.prototype.detachDataChanged=function(d){};
D.prototype.getData=function(i){return Promise.resolve(false);};
return D;});
sap.ui.predefine('sap/ui/integration/services/Navigation',['./Service'],function(S){"use strict";var N=S.extend();
N.prototype.navigate=function(c){};
S.prototype.enabled=function(c){return Promise.resolve(false);};
return N;});
sap.ui.predefine('sap/ui/integration/services/Service',[],function(){"use strict";var S=function(){};
S.extend=function(C){if(!C){var t=this;C=function(){t.apply(this,arguments);};}C.prototype=Object.create(this.prototype);C.prototype.constructor=C;C.extend=this.extend.bind(C);return C;};
S.prototype.getInterface=function(){return this;};
return S;});
sap.ui.predefine('sap/ui/integration/util/CardActions',["sap/m/library","sap/f/library","sap/ui/integration/library","sap/ui/base/ManagedObject","sap/base/Log","sap/f/cards/BindingResolver"],function(l,L,a,M,b,B){"use strict";
function _(s){if(s&&typeof s==="object"){return s.name;}return s;}
var A=L.cards.AreaType,C=a.CardActionType,c=l.ListType;
var d=M.extend("sap.ui.integration.util.CardActions",{metadata:{library:"sap.ui.integration",properties:{card:{type:"object"},areaType:{type:"sap.f.cards.AreaType",defaultValue:A.None}}}});
d.prototype.exit=function(){this._oAreaControl=null;};
d.prototype.attach=function(i,o){this._oAreaControl=o;if(!i.actions){this._fireActionReady();return;}var e=i.actions[0];if(e&&e.type){this._attachAction(i,e);}else{this._fireActionReady();}};
d.prototype._setItemTemplateTypeFormatter=function(o){var t=this,e=t._oAreaControl,i=e._oItemTemplate;var f=M.bindingParser("{path:''}");f.formatter=function(v){var g=this.getBindingContext(),m=this.getModel(),p,P;if(g){p=g.getPath();}P=B.resolveValue(o.parameters,m,p);if(v.__resolved){if(!v.__enabled||v.__enabled==="false"){return c.Inactive;}return c.Navigation;}if(!v.__promise){v.__promise=true;e._oServiceManager.getService(_(o.service)).then(function(n){if(n){n.enabled({parameters:P}).then(function(E){v.__resolved=true;v.__enabled=E;e.getModel().checkUpdate(true);}).catch(function(){v.__resolved=true;v.__enabled=false;});}else{v.__resolved=true;v.__enabled=false;}});}return c.Inactive;};i.bindProperty("type",f);};
d.prototype._setSingleActionEnabledState=function(i,o){var e=this._oAreaControl,f=e.getBindingContext(),p,m=e.getModel(),P;if(f){P=f.getPath();}p=B.resolveValue(o.parameters,m,P);return new Promise(function(r){e._oServiceManager.getService(_(o.service)).then(function(n){if(n){n.enabled({parameters:p}).then(function(E){r(E);}).catch(function(){r(false);});}else{r(false);}}).catch(function(){r(false);});});};
d.prototype._setItemTemplateEnabledState=function(o){var e,t,i=this._oAreaControl._oItemTemplate;if(typeof o.enabled==="object"){e=o.enabled;e.formatter=function(v){if(!v||v==="false"){return c.Inactive;}return c.Navigation;};}if(e){i.bindProperty("type",e);}else{t=(o.enabled===false||o.enabled==="false")?c.Inactive:c.Navigation;i.setProperty("type",t);}};
d.prototype._addClickableClass=function(){this._oAreaControl.addStyleClass("sapFCardClickable");};
d.prototype._fireActionReady=function(){var h=this.getAreaType()===A.Header;var e=h?"_actionHeaderReady":"_actionContentReady";this._oAreaControl.fireEvent(e);};
d.prototype._handleServiceAction=function(s,o){var f=s.getBindingContext(),m=s.getModel(),p;if(f){p=f.getPath();}this._oAreaControl._oServiceManager.getService(_(o.service)).then(function(S){if(S){S.navigate({parameters:B.resolveValue(o.parameters,m,p)});}}).catch(function(e){b.error("Navigation service unavailable",e);}).finally(function(){this._processAction(s,o,m,p);}.bind(this));};
d.prototype._handleAction=function(s,o){var e=s.getBindingContext(),m=s.getModel(),p;if(e){p=e.getPath();}this._processAction(s,o,m,p);};
d.prototype._attachPressEvent=function(o,e,s){if(s){this._addClickableClass();}o.attachPress(function(E){var S=E.getSource();if(e.service){this._handleServiceAction(S,e);}else{this._handleAction(S,e);}}.bind(this));};
d.prototype._attachAction=function(i,o){var e=this.getAreaType()===A.ContentItem?this._oAreaControl._oItemTemplate:this._oAreaControl,f=true,s=this.getAreaType(),S=s===A.Header||s===A.Content,g=s===A.ContentItem,h=true;if(o.service){if(this.getAreaType()===A.ContentItem){this._setItemTemplateTypeFormatter(o);}f=false;}else if(g){this._setItemTemplateEnabledState(o);f=false;}if(S&&o.service){this._setSingleActionEnabledState(i,o).then(function(E){if(E){this._attachPressEvent(e,o,S);}this._fireActionReady();}.bind(this));}else{if(f){h=o.enabled!==false&&o.enabled!=="false";}if(h){this._attachPressEvent(e,o,S);}this._fireActionReady();}};
d.prototype._processAction=function(s,o,m,p){var h=this._getHostInstance(),e=this.getCard(),u=o.url;if(u){u=B.resolveValue(u,m,p);}d.fireAction({card:e,host:h,action:o,parameters:B.resolveValue(o.parameters,m,p),source:s,url:u});};
d.prototype._getHostInstance=function(){var o=this.getCard();if(o){return o.getHostInstance();}return null;};
d.prototype.fireAction=function(s,t,p){var h=this._getHostInstance(),o=this.getCard();d.fireAction({card:o,host:h,action:{type:t},parameters:p,source:s});};
d.fireAction=function(m){var h=m.host,o=m.card,e=m.action,p=m.parameters||{},f={type:e.type,card:o,actionSource:m.source,manifestParameters:p,parameters:p},g=o.fireAction(f);if(!g){return false;}if(h){g=h.fireAction(f);}if(g){d._doPredefinedAction(m);}return g;};
d._doPredefinedAction=function(m){var o=m.action,f,u;switch(o.type){case C.Navigation:u=m.url;if(u){window.open(u,o.target||"_blank");}break;case C.Custom:f=o.action;if(f&&jQuery.isFunction(f)){f(m.card,m.source);}break;}};
return d;});
sap.ui.predefine('sap/ui/integration/util/CardMerger',["sap/base/util/merge"],function(m){"use strict";var C={mergeCardDelta:function(M,c){var i=m({},M);c.forEach(function(o){var a={"sap.card":o.content};m(i,a);});return i;}};return C;});
sap.ui.predefine('sap/ui/integration/util/ContentFactory',["sap/ui/core/Core","sap/ui/base/Object","sap/f/cards/BindingHelper","./CardActions"],function(C,B,a,b){"use strict";
var c=B.extend("sap.ui.integration.util.ContentFactory",{
metadata:{library:"sap.ui.integration"},
constructor:function(o){B.call(this);this._oCard=o;}
});
c.prototype.create=function(t,o,s,d,A){var e=this._oCard;return new Promise(function(r,f){var g=function(h){var i=new h(),j=new b({card:e});i._sAppId=A;i.setServiceManager(s);i.setDataProviderFactory(d);i.setActions(j);if(t.toLowerCase()!=="adaptivecard"){i.setConfiguration(a.createBindingInfos(o),t);}else{i.setConfiguration(o);}r(i);};try{switch(t.toLowerCase()){case"list":sap.ui.require(["sap/f/cards/ListContent"],g);break;case"calendar":sap.ui.require(["sap/f/cards/CalendarContent"],g);break;case"table":sap.ui.require(["sap/f/cards/TableContent"],g);break;case"object":sap.ui.require(["sap/f/cards/ObjectContent"],g);break;case"analytical":C.loadLibrary("sap.viz",{async:true}).then(function(){sap.ui.require(["sap/f/cards/AnalyticalContent"],g);}).catch(function(){f("Analytical content type is not available with this distribution.");});break;case"analyticscloud":sap.ui.require(["sap/f/cards/AnalyticsCloudContent"],g);break;case"timeline":C.loadLibrary("sap.suite.ui.commons",{async:true}).then(function(){sap.ui.require(["sap/f/cards/TimelineContent"],g);}).catch(function(){f("Timeline content type is not available with this distribution.");});break;case"component":sap.ui.require(["sap/f/cards/ComponentContent"],g);break;case"adaptivecard":sap.ui.require(["sap/f/cards/AdaptiveContent"],g);break;default:f(t.toUpperCase()+" content type is not supported.");}}catch(E){f(E);}});};
return c;});
sap.ui.predefine('sap/ui/integration/util/Destinations',["sap/ui/base/Object","sap/base/Log"],function(B,L){"use strict";var r=/\{\{destinations.([^\}]+)/;
var D=B.extend("sap.ui.integration.util.Destinations",{
metadata:{library:"sap.ui.integration"},
constructor:function(h,m){B.call(this);this._oHost=h;this._oManifest=m;}
});
D.prototype.setHost=function(h){this._oHost=h;};
D.prototype.process=function(c){var u=c.url,C;if(!u||typeof u!=="string"){return Promise.resolve(c);}if(!this._hasDestination(u)){return Promise.resolve(c);}C=jQuery.extend(true,{},c);return this._processString(u).then(function(p){C.url=p;return C;});};
D.prototype._hasDestination=function(s){return!!s.match(r);};
D.prototype._processString=function(s){var m=s.match(r),k,n;if(!m){return Promise.resolve(s);}k=m[1];n=this._getName(k);if(!n){return Promise.reject("Can not resolve destination '"+k+"'. Problem with configuration in the manifest.");}if(!this._oHost){return Promise.reject("Can not resolve destination '"+k+"'. There is no 'host' specified.");}return this._oHost.getDestination(n).then(function(u){return this._replaceUrl(s,k,u);}.bind(this));};
D.prototype._replaceUrl=function(s,k,u){var S=u.trim().replace(/\/$/,"");return s.replace("{{destinations."+k+"}}",S);};
D.prototype._getName=function(k){var c=this._oManifest.get("/sap.card/configuration/destinations/"+k),n;if(!c){L.error("Config for destination '"+k+"' was not found in manifest.");return;}n=c.name;if(!n){L.error("Configuration for destination '"+k+"' is missing a 'name'.");return;}return c.name;};
return D;});
sap.ui.predefine('sap/ui/integration/util/HeaderFactory',["sap/ui/thirdparty/jquery","sap/f/library","sap/ui/base/Object","sap/f/cards/BindingHelper","sap/f/cards/NumericHeader","sap/f/cards/Header","sap/f/cards/NumericSideIndicator","sap/f/cards/IconFormatter","sap/base/strings/formatMessage","sap/ui/integration/controls/ActionsToolbar","./CardActions"],function(q,l,B,a,N,H,b,I,f,A,C){"use strict";var c=l.cards.AreaType;
function d(F,h){if(F.parts&&F.translationKey&&F.parts.length===2){var o={parts:[F.translationKey,F.parts[0].toString(),F.parts[1].toString()],formatter:function(t,p,P){var s=p||F.parts[0];var g=P||F.parts[1];if(Array.isArray(p)){s=p.length;}if(Array.isArray(P)){g=P.length;}var i=parseFloat(s)||0;var j=parseFloat(g)||0;return f(t,[i,j]);}};h.bindProperty("statusText",o);}}
var e=B.extend("sap.ui.integration.util.HeaderFactory",{
metadata:{library:"sap.ui.integration"},
constructor:function(o){B.call(this);this._oCard=o;}
});
e.prototype.create=function(m){if(!m){return null;}var h,o=this._oCard,s=o._oServiceManager,D=o._oDataProviderFactory,g=o._sAppId,i=new C({card:o,areaType:c.Header}),S={title:m.title,subtitle:m.subTitle},j;if(m.status&&typeof m.status.text==="string"){S.statusText=m.status.text;}switch(m.type){case"Numeric":q.extend(S,{unitOfMeasurement:m.unitOfMeasurement,details:m.details,sideIndicators:m.sideIndicators});if(m.mainIndicator){S.number=m.mainIndicator.number;S.scale=m.mainIndicator.unit;S.trend=m.mainIndicator.trend;S.state=m.mainIndicator.state;}S=a.createBindingInfos(S);if(m.sideIndicators){S.sideIndicators=S.sideIndicators.map(function(k){return new b(k);});}h=new N(S);break;default:if(m.icon){S.iconSrc=m.icon.src;S.iconDisplayShape=m.icon.shape;S.iconInitials=m.icon.text;}S=a.createBindingInfos(S);if(S.iconSrc){S.iconSrc=a.formattedProperty(S.iconSrc,function(v){return I.formatSrc(v,g);});}h=new H(S);break;}if(m.status&&m.status.text&&m.status.text.format){if(m.status.text.format.translationKey){o._loadDefaultTranslations();}d(m.status.text.format,h);}h._sAppId=g;h.setServiceManager(s);h.setDataProviderFactory(D);h._setData(m.data);h._setAccessibilityAttributes(m);i.attach(m,h);h._oActions=i;j=this._createActionsToolbar();if(j){h.setToolbar(j);}return h;};
e.prototype._createActionsToolbar=function(){var o=this._oCard,h=o.getHostInstance(),g,i;if(!h){return null;}g=new A();i=g.initializeContent(h,o);if(i){return g;}return null;};
return e;});
sap.ui.predefine('sap/ui/integration/util/Manifest',["sap/ui/base/Object","sap/ui/core/Manifest","sap/base/util/deepClone","sap/base/util/isPlainObject","sap/base/Log","./ParameterMap","sap/ui/integration/util/CardMerger"],function(B,C,d,a,L,P,b){"use strict";var M="/{SECTION}/configuration/parameters",c="/{SECTION}",A="/sap.app/dataSources";
var e=B.extend("sap.ui.integration.util.Manifest",{constructor:function(s,m,i,j){B.call(this);this._aChanges=j;this.PARAMETERS=M.replace("{SECTION}",s);this.CONFIGURATION=c.replace("{SECTION}",s);if(m){var o={},l;o.process=false;if(i){o.baseUrl=i;this._sBaseUrl=i;}else{L.warning("If no base URL is provided when the manifest is an object static resources cannot be loaded.");}if(this._aChanges){l=b.mergeCardDelta(m,this._aChanges);}else{l=m;}this._oManifest=new C(l,o);this.oJson=this._oManifest.getRawJson();}}});
e.prototype.getJson=function(){return this._unfreeze(this.oJson);};
e.prototype.get=function(s){return this._unfreeze(k(this.oJson,s));};
e.prototype.getUrl=function(){return this._oManifest.resolveUri("./","manifest");};
e.prototype.getResourceBundle=function(){return this.oResourceBundle;};
e.prototype._unfreeze=function(v){if(typeof v==="object"){return JSON.parse(JSON.stringify(v));}return v;};
e.prototype.destroy=function(){this.oJson=null;this.oResourceBundle=null;if(this._oManifest){this._oManifest.destroy();}};
e.prototype.load=function(s){if(!s||!s.manifestUrl){if(s&&s.processI18n===false){this.processManifest();return new Promise(function(i){i();});}if(this._sBaseUrl&&this._oManifest){return this.loadI18n().then(function(){this.processManifest();}.bind(this));}else{if(this._oManifest){this.processManifest();}return new Promise(function(i){i();});}}return C.load({manifestUrl:s.manifestUrl,async:true,processJson:function(m){if(this._aChanges){return b.mergeCardDelta(m,this._aChanges);}return m;}.bind(this)}).then(function(m){this._oManifest=m;this.oJson=this._oManifest.getRawJson();if(s&&s.processI18n===false){this.processManifest();return new Promise(function(i){i();});}return this.loadI18n().then(function(){this.processManifest();}.bind(this));}.bind(this));};
e.prototype.loadI18n=function(){return this._oManifest._loadI18n(true).then(function(o){this.oResourceBundle=o;}.bind(this));};
e.prototype.processManifest=function(o){var i=0,m=15,u=jQuery.extend(true,{},this._oManifest.getRawJson()),D=this.get(A);p(u,this.oResourceBundle,i,m,o,D);f(u);this.oJson=u;};
function f(o){if(o&&typeof o==='object'&&!Object.isFrozen(o)){Object.freeze(o);for(var K in o){if(o.hasOwnProperty(K)){f(o[K]);}}}}
function g(v){return(typeof v==="string")&&v.indexOf("{{")===0&&v.indexOf("}}")===v.length-2;}
function h(v){return(typeof v==="string")&&(v.indexOf("{{parameters.")>-1||v.indexOf("{{dataSources")>-1);}
e._processPlaceholder=function(s,o,D){var i=P.processPredefinedParameter(s),v,j;if(o){for(var l in o){v=o[l].value;j="{{parameters."+l;i=r(i,v,j);}}if(D){i=r(i,D,"{{dataSources");}return i;};
function r(s,v,i){if(a(v)){for(var j in v){s=r(s,v[j],i+"."+j);}}else if(s.includes(i+"}}")){s=s.replace(new RegExp(i+"}}",'g'),v);}return s;}
function p(o,R,i,m,j,D){if(i===m){return;}if(Array.isArray(o)){o.forEach(function(I,l,n){if(typeof I==="object"){p(I,R,i+1,m,j,D);}else if(h(I,o,j)){n[l]=e._processPlaceholder(I,j,D);}else if(g(I)&&R){n[l]=R.getText(I.substring(2,I.length-2));}},this);}else{for(var s in o){if(typeof o[s]==="object"){p(o[s],R,i+1,m,j,D);}else if(h(o[s],o,j)){o[s]=e._processPlaceholder(o[s],j,D);}else if(g(o[s])&&R){o[s]=R.getText(o[s].substring(2,o[s].length-2));}}}}
function k(o,s){if(o&&s&&typeof s==="string"&&s[0]==="/"){var j=s.substring(1).split("/"),m;for(var i=0,l=j.length;i<l;i++){m=j[i];o=o.hasOwnProperty(m)?o[m]:undefined;if(o===null||typeof o!=="object"){if(i+1<l&&o!==undefined){o=undefined;}break;}}return o;}return o&&o[s];}
e.prototype.processParameters=function(o){if(!this._oManifest){return;}var m=this.get(this.PARAMETERS);if(o&&!m){L.error("If parameters property is set, parameters should be described in the manifest");return;}var i=this._syncParameters(o,m);this.processManifest(i);};
e.prototype._syncParameters=function(o,m){if(!o){return m;}var l=d(m,20,20),n=Object.getOwnPropertyNames(o),q=Object.getOwnPropertyNames(l);for(var i=0;i<q.length;i++){for(var j=0;j<n.length;j++){if(q[i]===n[j]){l[q[i]].value=o[n[j]];}}}return l;};
return e;},true);
sap.ui.predefine('sap/ui/integration/util/ParameterMap',['sap/ui/core/Core'],function(C){"use strict";var P={};var p={"{{parameters.NOW_ISO}}":g,"{{parameters.TODAY_ISO}}":a,"{{parameters.LOCALE}}":b};
function g(){return new Date().toISOString();}
function a(){return new Date().toISOString().slice(0,10);}
function b(){return C.getConfiguration().getLocale().toString();}
P.processPredefinedParameter=function(s){var r;Object.keys(p).forEach(function(e){r=new RegExp(e,'g');if(s.indexOf(e)>-1){s=s.replace(r,p[e]());}});return s;};
return P;});
sap.ui.predefine('sap/ui/integration/util/ServiceManager',["sap/ui/base/EventProvider","sap/base/Log"],function(E,L){"use strict";
var S=E.extend("sap.ui.integration.util.ServiceManager",{
metadata:{library:"sap.ui.integration"},
constructor:function(s,o){if(!s){throw new Error("Missing manifest services reference!");}if(!o){throw new Error("Missing context object");}this._mServiceFactoryReferences=s;this._mServices={};this._oServiceContext=o;this._initAllServices();}
});
S.prototype._initAllServices=function(){for(var s in this._mServiceFactoryReferences){this._initService(s);}};
S.prototype._initService=function(n){var s=this._mServices[n]||{};s.promise=S._getService(this._oServiceContext,n,this._mServiceFactoryReferences).then(function(o){s.instance=o;}).catch(function(e){L.error(e.message);});this._mServices[n]=s;};
S.prototype.getService=function(s){var e="Invalid service";return new Promise(function(r,R){if(!s||!this._mServices[s]||!Object.keys(this._mServices[s])){R(e);return;}this._mServices[s].promise.then(function(){if(this._mServices[s].instance){r(this._mServices[s].instance);}else{R(e);}}.bind(this)).catch(R);}.bind(this));};
S.prototype.destroy=function(){this._mServices=null;};
S._getService=function(i,n,s){return new Promise(function(r,R){var o,f;if(i.bIsDestroyed){R(new Error("Service "+n+" could not be loaded as the requestor "+i.getMetadata().getName()+" was destroyed."));return;}if(!s){R(new Error("No Services declared"));return;}else{o=s[n];}if(!o||!o.factoryName){R(new Error("No Service '"+n+"' declared or factoryName missing"));return;}else{f=o.factoryName;}sap.ui.require(["sap/ui/core/service/ServiceFactoryRegistry"],function(a){var b=a.get(f);if(b){b.createInstance({scopeObject:i,scopeType:"component",settings:o.settings||{}}).then(function(c){if(c.getInterface){r(c.getInterface());}else{r(c);}}).catch(R);}else{var e=new Error("ServiceFactory '"+f+"' for Service '"+n+"' not found in ServiceFactoryRegistry");e._optional=o.optional;R(e);}});});};
return S;});
sap.ui.predefine('sap/ui/integration/util/Utils',[],function(){"use strict";var U={};
U.isJson=function(t){if(typeof t!=="string"){return false;}try{JSON.parse(t);return true;}catch(e){return false;}};
return U;});
sap.ui.predefine('sap/ui/integration/widgets/Card',["sap/ui/thirdparty/jquery","sap/ui/core/Core","sap/ui/core/Control","sap/ui/integration/util/Manifest","sap/ui/integration/util/ServiceManager","sap/base/Log","sap/f/cards/DataProviderFactory","sap/f/cards/BaseContent","sap/m/HBox","sap/m/VBox","sap/ui/core/Icon","sap/m/Text","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel","sap/base/util/LoaderExtensions","sap/f/CardRenderer","sap/f/library","sap/ui/integration/library","sap/ui/core/InvisibleText","sap/ui/integration/util/Destinations","sap/f/cards/loading/LoadingProvider","sap/ui/integration/util/HeaderFactory","sap/ui/integration/util/ContentFactory"],function(q,C,a,b,S,L,D,B,H,V,I,T,J,R,c,d,l,e,f,g,h,i,j){"use strict";var M={TYPE:"/sap.card/type",DATA:"/sap.card/data",HEADER:"/sap.card/header",HEADER_POSITION:"/sap.card/headerPosition",CONTENT:"/sap.card/content",SERVICES:"/sap.ui5/services",APP_TYPE:"/sap.app/type",PARAMS:"/sap.card/configuration/parameters"};var k=l.cards.HeaderPosition;var m=e.CardDataMode;
var n=a.extend("sap.ui.integration.widgets.Card",{
metadata:{library:"sap.ui.integration",interfaces:["sap.f.ICard"],properties:{manifest:{type:"any",defaultValue:""},parameters:{type:"object",defaultValue:null},width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:"auto"},dataMode:{type:"sap.ui.integration.CardDataMode",group:"Behavior",defaultValue:m.Active},baseUrl:{type:"sap.ui.core.URI",defaultValue:null},manifestChanges:{type:"object[]"}},aggregations:{_header:{type:"sap.f.cards.IHeader",multiple:false,visibility:"hidden"},_content:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{action:{allowPreventDefault:true,parameters:{actionSource:{type:"sap.ui.core.Control"},manifestParameters:{type:"object"},parameters:{type:"object"},type:{type:"sap.ui.integration.CardActionType"}}},manifestReady:{parameters:{}}},associations:{hostConfigurationId:{},host:{}}},
renderer:d
});
n.prototype.init=function(){this._ariaText=new f({id:this.getId()+"-ariaText"});this._oRb=C.getLibraryResourceBundle("sap.f");this.setModel(new J(),"parameters");this._busyStates=new Map();};
n.prototype._initReadyState=function(){this._aReadyPromises=[];this._awaitEvent("_headerReady");this._awaitEvent("_contentReady");this._awaitEvent("_cardReady");Promise.all(this._aReadyPromises).then(function(){this._bReady=true;this.fireEvent("_ready");}.bind(this));};
n.prototype._clearReadyState=function(){this._bReady=false;this._aReadyPromises=[];};
n.prototype.onBeforeRendering=function(){var s=this.getHostConfigurationId();if(this.getDataMode()!==m.Active){return;}if(s){this.addStyleClass(s.replace(/-/g,"_"));}if(this._bApplyManifest){this._bApplyManifest=false;var v=this.getManifest();this._clearReadyState();this._initReadyState();if(!v){this.destroyManifest();}else{this.createManifest(v,this.getBaseUrl());}}};
n.prototype.setManifest=function(v){this.setProperty("manifest",v);this._bApplyManifest=true;return this;};
n.prototype.setManifestChanges=function(v){this.setProperty("manifestChanges",v);this._bApplyManifest=true;return this;};
n.prototype.setParameters=function(v){this.setProperty("parameters",v);this._bApplyManifest=true;return this;};
n.prototype.setHost=function(v){this.setAssociation("host",v);if(this._oDestinations){this._oDestinations.setHost(this.getHostInstance());}return this;};
n.prototype.createManifest=function(v,s){var o={};if(typeof v==="string"){o.manifestUrl=v;v=null;}this._oCardManifest=new b("sap.card",v,s,this.getManifestChanges());this._oCardManifest.load(o).then(function(){this.fireManifestReady();this._applyManifest();}.bind(this)).catch(this._applyManifest.bind(this));};
n.prototype._applyManifest=function(){var p=this.getParameters(),o=this._oCardManifest;this._registerManifestModulePath();if(o&&o.getResourceBundle()){this._enhanceI18nModel(o.getResourceBundle());}o.processParameters(p);this._applyManifestSettings();};
n.prototype._loadDefaultTranslations=function(){var r=C.getLibraryResourceBundle("sap.ui.integration");this._enhanceI18nModel(r);};
n.prototype._enhanceI18nModel=function(r){var o=this.getModel("i18n");if(o){o.enhance(r);return;}o=new R({bundle:r});this.setModel(o,"i18n");};
n.prototype._awaitEvent=function(E){this._aReadyPromises.push(new Promise(function(r){this.attachEventOnce(E,function(){r();});}.bind(this)));};
n.prototype.isReady=function(){return this._bReady;};
n.prototype.refresh=function(){if(this.getDataMode()===m.Active){this._clearReadyState();this._initReadyState();this.destroyManifest();this._bApplyManifest=true;this.invalidate();}};
n.prototype.exit=function(){this.destroyManifest();this._busyStates=null;this._oRb=null;if(this._ariaText){this._ariaText.destroy();this._ariaText=null;}};
n.prototype.destroyManifest=function(){if(this._oCardManifest){this._oCardManifest.destroy();this._oCardManifest=null;}if(this._oServiceManager){this._oServiceManager.destroy();this._oServiceManager=null;}if(this._oDataProviderFactory){this._oDataProviderFactory.destroy();this._oDataProviderFactory=null;this._oDataProvider=null;}if(this._oLoadingProvider){this._oLoadingProvider.destroy();this._oLoadingProvider=null;}if(this._oTemporaryContent){this._oTemporaryContent.destroy();this._oTemporaryContent=null;}if(this._oDestinations){this._oDestinations.destroy();this._oDestinations=null;}this.destroyAggregation("_header");this.destroyAggregation("_content");this._aReadyPromises=null;this._busyStates.clear();};
n.prototype._registerManifestModulePath=function(){if(!this._oCardManifest){return;}this._sAppId=this._oCardManifest.get("/sap.app/id");if(this._sAppId){c.registerResourcePath(this._sAppId.replace(/\./g,"/"),this._oCardManifest.getUrl());}else{L.error("Card sap.app/id entry in the manifest is mandatory");}};
n.prototype.getManifest=function(){var v=this.getProperty("manifest");if(v&&typeof v==="object"){return q.extend(true,{},v);}return v;};
n.prototype.getParameters=function(){var v=this.getProperty("parameters");if(v&&typeof v==="object"){return q.extend(true,{},v);}return v;};
n.prototype.getManifestWithMergedChanges=function(){if(!this._oCardManifest||!this._oCardManifest._oManifest){L.error("The manifest is not ready. Consider using the 'manifestReady' event.","sap.ui.integration.widgets.Card");return{};}return q.extend(true,{},this._oCardManifest._oManifest.getRawJson());};
n.prototype._applyManifestSettings=function(){var A=this._oCardManifest.get(M.APP_TYPE);if(A&&A!=="card"){L.error("sap.app/type entry in manifest is not 'card'");}if(this._oDataProviderFactory){this._oDataProviderFactory.destroy();}this._oDestinations=new g(this.getHostInstance(),this._oCardManifest);this._oDataProviderFactory=new D(this._oDestinations);this._oLoadingProvider=new h();this._applyServiceManifestSettings();this._applyDataManifestSettings();this._applyHeaderManifestSettings();this._applyContentManifestSettings();};
n.prototype._applyDataManifestSettings=function(){var o=this._oCardManifest.get(M.DATA);if(!o){this.fireEvent("_cardReady");return;}if(this._oDataProvider){this._oDataProvider.destroy();}this._oDataProvider=this._oDataProviderFactory.create(o,this._oServiceManager);this._oLoadingProvider.createLoadingState(this._oDataProvider);if(this._oDataProvider){this.setModel(new J());this._oDataProvider.attachDataChanged(function(E){this.getModel().setData(E.getParameter("data"));if(this._createContentPromise){this._createContentPromise.then(function(p){p.onDataChanged();});}}.bind(this));this._oDataProvider.attachError(function(E){this._handleError("Data service unavailable. "+E.getParameter("message"));}.bind(this));this._oDataProvider.triggerDataUpdate().then(function(){this.fireEvent("_cardReady");this._handleCardLoading();}.bind(this));}};
n.prototype._handleCardLoading=function(){var o=this.getCardContent();if(o&&!o.hasStyleClass("sapFCardErrorContent")&&o._oLoadingPlaceholder){o._oLoadingPlaceholder.destroy();}if(this._oLoadingProvider){this._oLoadingProvider.removeHeaderPlaceholder(this.getCardHeader());}this._oLoadingProvider.setLoading(false);};
n.prototype._applyServiceManifestSettings=function(){var s=this._oCardManifest.get(M.SERVICES);if(!s){return;}if(!this._oServiceManager){this._oServiceManager=new S(s,this);}};
n.prototype.getCardHeader=function(){return this.getAggregation("_header");};
n.prototype.getCardHeaderPosition=function(){if(!this._oCardManifest){return"Top";}return this._oCardManifest.get(M.HEADER_POSITION)||k.Top;};
n.prototype.getCardContent=function(){return this.getAggregation("_content");};
n.prototype._applyHeaderManifestSettings=function(){var o=this.createHeader();if(!o){this.fireEvent("_headerReady");return;}this.destroyAggregation("_header");this.setAggregation("_header",o);if(o.isReady()){this.fireEvent("_headerReady");}else{o.attachEvent("_ready",function(){this.fireEvent("_headerReady");}.bind(this));}};
n.prototype.getHostInstance=function(){var s=this.getHost();if(!s){return null;}return C.byId(s);};
n.prototype._applyContentManifestSettings=function(){var s=this._oCardManifest.get(M.TYPE),o=this.getContentManifest(),A=s+" "+this._oRb.getText("ARIA_ROLEDESCRIPTION_CARD");this._ariaText.setText(A);if(!o){this.fireEvent("_contentReady");return;}this._setTemporaryContent(s,o);this._createContentPromise=this.createContent(s,o,this._oServiceManager,this._oDataProviderFactory,this._sAppId).then(function(p){this._setCardContent(p);return p;}.bind(this));this._createContentPromise.catch(function(E){this._handleError(E);}.bind(this));};
n.prototype.createHeader=function(){var o=this._oCardManifest.get(M.HEADER),p=new i(this);return p.create(o);};
n.prototype.getContentManifest=function(){var s=this._oCardManifest.get(M.TYPE),o=s&&s.toLowerCase()==="component",p=this._oCardManifest.get(M.CONTENT),r=!!p;if(r&&!s){L.error("Card type property is mandatory!");return null;}if(!r&&!o){return null;}if(!p&&o){p=this._oCardManifest.getJson();}return p;};
n.prototype.createContent=function(t,o,s,p,A){var r=new j(this);return r.create(t,o,s,p,A);};
n.prototype.onAfterRendering=function(){var s;if(this._oCardManifest&&this._oCardManifest.get(M.TYPE)){s=this._oCardManifest.get(M.TYPE).toLowerCase();}if(s==="analytical"){this.$().addClass("sapFCardAnalytical");}};
n.prototype._setCardContent=function(o){o.attachEvent("_error",function(E){this._handleError(E.getParameter("logMessage"),E.getParameter("displayMessage"));}.bind(this));var p=this.getAggregation("_content");if(p&&p!==this._oTemporaryContent){p.destroy();}this.setAggregation("_content",o);if(o.isReady()){this.fireEvent("_contentReady");}else{o.attachEvent("_ready",function(){this.fireEvent("_contentReady");}.bind(this));}};
n.prototype._setTemporaryContent=function(s,o){var t=this._getTemporaryContent(s,o),p=this.getAggregation("_content");if(p&&p!==t){p.destroy();}this.setAggregation("_content",t);};
n.prototype._handleError=function(s,o){L.error(s);this.fireEvent("_error",{message:s});var p="Unable to load the data.",E=o||p,P=this.getAggregation("_content");var r=new H({justifyContent:"Center",alignItems:"Center",items:[new I({src:"sap-icon://message-error",size:"1rem"}).addStyleClass("sapUiTinyMargin"),new T({text:E})]}).addStyleClass("sapFCardErrorContent");if(P&&!P.hasStyleClass("sapFCardErrorContent")){P.destroy();this.fireEvent("_contentReady");}r.addEventDelegate({onAfterRendering:function(){if(!this._oCardManifest){return;}var t=this._oCardManifest.get(M.TYPE)+"Content",u=this._oCardManifest.get(M.CONTENT),v=B.getMinHeight(t,u,r);if(this.getHeight()==="auto"){r.$().css({"min-height":v});}}},this);this.setAggregation("_content",r);};
n.prototype._getTemporaryContent=function(s,o){if(!this._oTemporaryContent&&this._oLoadingProvider){this._oTemporaryContent=this._oLoadingProvider.createContentPlaceholder(o,s);this._oTemporaryContent.addEventDelegate({onAfterRendering:function(){if(!this._oCardManifest){return;}var t=this._oCardManifest.get(M.TYPE)+"Content",p=this._oCardManifest.get(M.CONTENT),r=B.getMinHeight(t,p,this._oTemporaryContent);if(this.getHeight()==="auto"){this._oTemporaryContent.$().css({"min-height":r});}}},this);}return this._oTemporaryContent;};
n.prototype.setDataMode=function(s){if(this._oDataProviderFactory&&s===m.Inactive){this._oDataProviderFactory.destroy();this._oDataProviderFactory=null;}this.setProperty("dataMode",s,true);if(this.getProperty("dataMode")===m.Active){this.refresh();}return this;};
n.prototype.loadDesigntime=function(){if(!this._oCardManifest){return Promise.reject("Manifest not yet available");}var A=this._oCardManifest.get("/sap.app/id");if(!A){return Promise.reject("App id not maintained");}var s=A.replace(/\./g,"/");return new Promise(function(r,o){var p=s+"/"+(this._oCardManifest.get("/sap.card/designtime")||"designtime/Card.designtime");if(p){sap.ui.require([p,"sap/base/util/deepClone"],function(t,u){r({designtime:t,manifest:u(this._oCardManifest._oManifest.getRawJson(),30)});}.bind(this),function(){o({error:p+" not found"});});}else{o();}}.bind(this));};
n.prototype.isLoading=function(){return this._oLoadingProvider?this._oLoadingProvider.getLoadingState():false;};
return n;});
sap.ui.require.preload({
	"sap/ui/integration/manifest.json":'{"_version":"1.9.0","sap.app":{"id":"sap.ui.integration","type":"library","embeds":[],"applicationVersion":{"version":"1.76.0"},"title":"SAPUI5 library with integration-related controls.","description":"SAPUI5 library with integration-related controls.","ach":"CA-UI5-CTR","resources":"resources.json","offline":true,"openSourceComponents":[{"name":"webcomponentsjs","packagedWithMySelf":true,"version":"0.0.0"},{"name":"custom-event-polyfill","packagedWithMySelf":true,"version":"0.0.0"},{"name":"adaptive-cards","packagedWithMySelf":true,"version":"0.0.0"},{"name":"ui5-web-components","packagedWithMySelf":true,"version":"0.0.0"},{"name":"ajv","packagedWithMySelf":true,"version":"0.0.0"}]},"sap.ui":{"technology":"UI5","supportedThemes":["base"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.76","libs":{"sap.ui.core":{"minVersion":"1.76.0"},"sap.f":{"minVersion":"1.76.0"}}},"library":{"i18n":"messagebundle.properties","content":{"controls":["sap.ui.integration.widgets.Card","sap.ui.integration.Widget","sap.ui.integration.host.HostConfiguration"],"elements":["sap.ui.integration.Host","sap.ui.integration.Extension"],"types":["sap.ui.integration.CardActionType","sap.ui.integration.CardDataMode"]}}}}',
	"sap/ui/integration/customElements/CustomElementCard.js":function(){sap.ui.require(["sap/ui/integration/widgets/Card","sap/ui/integration/customElements/CustomElementBase","sap/ui/integration/customElements/CustomElementHostConfiguration"],function(C,a){"use strict";var b=a.extend(C,{privateProperties:["width","height"]});b.prototype.refresh=function(){this._getControl().refresh();};b.prototype.loadDesigntime=function(){return this._getControl().loadDesigntime();};var d=["ui-integration-host-configuration"];a.define("ui-integration-card",b,d);});
},
	"sap/ui/integration/customElements/CustomElementHostConfiguration.js":function(){sap.ui.require(["sap/ui/integration/customElements/CustomElementBase","sap/ui/integration/host/HostConfiguration"],function(C,H){"use strict";var a=C.extend(H);C.define("ui-integration-host-configuration",a,[]);});
},
	"sap/ui/integration/customElements/CustomElementWidget.js":function(){sap.ui.require(["sap/ui/integration/customElements/CustomElementBase","sap/ui/integration/Widget"],function(C,W){"use strict";var a=C.extend(W);a.prototype.loadDesigntime=function(){return this._getControl().loadDesigntime();};C.define("ui-integration-widget",a,[]);});
},
	"sap/ui/integration/library-bootstrap.js":function(){(function(w){"use strict";var c;var s=document.currentScript||document.querySelector("script[src*='/sap-ui-integration.js']");
function b(){if(w.sap&&w.sap.ui&&w.sap.ui.getCore){c=w.sap.ui.getCore();return a();}w.sap.ui.require(['sap/ui/core/Core'],function(C){C.boot();c=C;C.attachInit(function(){a();});});}
function r(l){var L=c.getLoadedLibraries()[l];var t=Object.keys(L.customElements),T=s.getAttribute("tags");if(T){t=T.split(",");}w.sap.ui.require(t.map(function(o,i){return L.customElements[t[i]];}));}
function a(){c.loadLibraries(["sap/ui/integration"],{async:true}).then(function(){r("sap.ui.integration");});}
b();})(window);
},
	"sap/ui/integration/sap-ui-integration-config.js":function(){window["sap-ui-config"]=window["sap-ui-config"]||{};window["sap-ui-config"].bindingSyntax="complex";window["sap-ui-config"].compatVersion="edge";window["sap-ui-config"].async=true;window["sap-ui-config"]["xx-waitForTheme"]=true;
},
	"sap/ui/integration/sap-ui-integration-define-nojQuery.js":function(){(function(){"use strict";sap["ui"].define("sap/ui/thirdparty/jquery",function(){return jQuery;});sap["ui"].define("sap/ui/thirdparty/jqueryui/jquery-ui-position",function(){return jQuery;});})();
}
},"sap/ui/integration/library-preload"
);
//# sourceMappingURL=library-preload.js.map