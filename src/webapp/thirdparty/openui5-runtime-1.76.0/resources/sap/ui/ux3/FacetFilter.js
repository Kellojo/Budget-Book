/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','./library','./FacetFilterRenderer'],function(C,l,F){"use strict";var V=l.VisibleItemCountMode;var a=C.extend("sap.ui.ux3.FacetFilter",{metadata:{library:"sap.ui.ux3",properties:{visibleItemCountMode:{type:"sap.ui.ux3.VisibleItemCountMode",group:"Appearance",defaultValue:V.Fixed}},aggregations:{lists:{type:"sap.ui.ux3.FacetFilterList",multiple:true,singularName:"list"}}}});a.prototype.init=function(){this.data("sap-ui-fastnavgroup","true",true);};return a;});
