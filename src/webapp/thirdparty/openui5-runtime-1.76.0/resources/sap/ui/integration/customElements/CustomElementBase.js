/*!
* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/Log","sap/ui/integration/util/Utils","sap/base/strings/hyphenate","sap/base/strings/camelize","sap/ui/integration/thirdparty/customElements","sap/ui/integration/thirdparty/customEvent"],function(L,U,h,c,a,b){"use strict";function C(){if(this.constructor===C){throw new TypeError('Abstract class "CustomElementBase" cannot be instantiated directly.');}return Reflect.construct(HTMLElement,[],this.constructor);}C.prototype=Object.create(HTMLElement.prototype);C.prototype.constructor=C;C.prototype.connectedCallback=function(){this._init();this._upgradeAllProperties();this._oControlInstance.placeAt(this.firstElementChild);this._attachEventListeners();};C.prototype.disconnectedCallback=function(){if(this._oControlInstance){this._oControlInstance.destroy();delete this._oControlInstance;}if(this.firstElementChild){this.removeChild(this.firstElementChild);}};C.prototype.attributeChangedCallback=function(A,o,n){this._init();var s=c(A);if(U.isJson(n)){n=JSON.parse(n);}if(this._mAllProperties[s]){this._mAllProperties[s].set(this._oControlInstance,n);}else if(this._mAllAssociations[s]){var e=document.getElementById(n);if(e instanceof C){n=document.getElementById(n)._getControl();}this._mAllAssociations[s].set(this._oControlInstance,n);}};C.prototype._init=function(){if(!this._oControlInstance){this._oControlInstance=new this._ControlClass();}if(!this.firstElementChild){var u=document.createElement("div");this.appendChild(u);}};C.prototype._getControl=function(){this._init();return this._oControlInstance;};C.prototype._attachEventListeners=function(){Object.keys(this._oMetadata.getEvents()).map(function(e){this._oControlInstance.attachEvent(e,function(E){this.dispatchEvent(new CustomEvent(e,{detail:E,bubbles:true}));},this);}.bind(this));};C.prototype._upgradeAllProperties=function(){this._aAllProperties.forEach(this._upgradeProperty.bind(this));};C.prototype._upgradeProperty=function(p){if(this[p]){var v=this[p];delete this[p];this[p]=v;}};C.generateAccessors=function(p,P){P.forEach(function(s){Object.defineProperty(p,s,{get:function(){return this.getAttribute(h(s));},set:function(v){if(typeof v==="object"){v=JSON.stringify(v);}return this.setAttribute(h(s),v);}});});};C.define=function(s,d,D){C.awaitDependencies(D).then(function(){window.customElements.define(s,d);});};C.awaitDependencies=function(d){var p=d.map(function(s){return window.customElements.whenDefined(s);});return Promise.all(p);};C.extend=function(d,s){function e(){return C.apply(this,arguments);}e.prototype=Object.create(C.prototype);e.prototype.constructor=e;var p=e.prototype,k="";p._ControlClass=d;p._oMetadata=d.getMetadata();p._mAllAssociations=p._oMetadata.getAllAssociations();p._mAllProperties=p._oMetadata.getAllProperties();p._aAllProperties=[];for(k in p._mAllProperties){if(s&&s.privateProperties&&s.privateProperties.indexOf(k)!==-1){continue;}p._aAllProperties.push(k);}for(k in p._mAllAssociations){p._aAllProperties.push(k);}Object.defineProperty(e,"observedAttributes",{get:function(){var A=p._aAllProperties.map(h);return A;}});C.generateAccessors(p,p._aAllProperties);return e;};return C;});
