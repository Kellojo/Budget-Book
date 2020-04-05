/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/mvc/View"],function(L,V){"use strict";return{_getObjectWithGlobalId:function(o){function c(){o.viewName=o.name;delete o.name;return V._legacyCreate(o);}var v,s=o.name,i;this._checkName(s,"View");i=this._oCache.view[s];v=i&&i[o.id];if(v){return v;}if(this._oComponent){v=this._oComponent.runAsOwner(c);}else{v=c();}i=this._oCache.view[s];if(!i){i=this._oCache.view[s]={};i[undefined]=v;}if(o.id!==undefined){i[o.id]=v;}this.fireCreated({object:v,type:"View",options:o});return v;},_getViewWithGlobalId:function(o){if(o&&!o.name){o.name=o.viewName;}return this._getObjectWithGlobalId(o);}};});
