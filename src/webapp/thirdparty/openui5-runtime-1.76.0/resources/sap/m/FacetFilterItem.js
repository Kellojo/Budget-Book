/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListItemBase','./library','./FacetFilterItemRenderer'],function(L,l,F){"use strict";var a=L.extend("sap.m.FacetFilterItem",{metadata:{library:"sap.m",properties:{key:{type:"string",group:"Data",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null},count:{type:"int",group:"Misc",defaultValue:null,deprecated:true}}}});a.prototype.setCount=function(c){this.setProperty("count",c);this.setProperty("counter",c);return this;};a.prototype.setCounter=function(c){this.setProperty("count",c);this.setProperty("counter",c);return this;};a.prototype.init=function(){this.attachEvent("_change",this._itemTextChange);L.prototype.init.apply(this);this.addStyleClass("sapMFFLI");};a.prototype.exit=function(){L.prototype.exit.apply(this);this.detachEvent("_change",this._itemTextChange);};a.prototype._itemTextChange=function(e){if(e.getParameter("name")==="text"){this.informList("TextChange",e.getParameter("newValue"));}};return a;});
