/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Item','sap/ui/core/IconPool'],function(l,I){"use strict";var V=I.extend("sap.m.ViewSettingsCustomTab",{metadata:{library:"sap.m",properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:"sap-icon://competitor"},title:{type:"string",defaultValue:""}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});V.prototype.init=function(){this._aTabContents=[];};V.prototype.exit=function(){this._aTabContents.forEach(function(c,i){c.destroy();delete this._aTabContents[i];},this);};return V;});
