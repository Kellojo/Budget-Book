/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Binding'],function(B){"use strict";var C=B.extend("sap.ui.model.ContextBinding",{constructor:function(m,p,c,P,e){B.call(this,m,p,c,P,e);this.oElementContext=null;this.bInitial=true;},metadata:{publicMethods:["getElementContext"]}});C.prototype.checkUpdate=function(f){};C.prototype.getBoundContext=function(){return this.oElementContext;};C.prototype.checkDataState=function(p){var d=this.getDataState(),r=this.oModel?this.oModel.resolve(this.sPath,this.oContext):null,t=this;function f(){t.fireEvent("AggregatedDataStateChange",{dataState:d});d.changed(false);t._sDataStateTimout=null;}if(!p||r&&r in p){if(r){d.setModelMessages(this.oModel.getMessagesByPath(r));}if(d&&d.changed()){if(this.mEventRegistry["DataStateChange"]){this.fireEvent("DataStateChange",{dataState:d});}if(this.bIsBeingDestroyed){f();}else if(this.mEventRegistry["AggregatedDataStateChange"]){if(!this._sDataStateTimout){this._sDataStateTimout=setTimeout(f,0);}}}}};return C;});
