/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/LayoutData'],function(L){"use strict";var G=L.extend("sap.f.GridContainerItemLayoutData",{metadata:{library:"sap.f",properties:{columns:{type:"int",group:"Misc",defaultValue:1},minRows:{type:"int",group:"Misc"},rows:{type:"int",group:"Misc"}}}});G.prototype.hasAutoHeight=function(){return!this.getRows();};G.prototype.getActualRows=function(){return Math.max(this.getRows()||1,this.getMinRows()||1);};return G;});
