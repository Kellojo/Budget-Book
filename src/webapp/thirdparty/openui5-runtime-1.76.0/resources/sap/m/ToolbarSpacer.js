/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Control','./ToolbarSpacerRenderer',"sap/base/Log"],function(l,C,T,L){"use strict";var a=C.extend("sap.m.ToolbarSpacer",{metadata:{library:"sap.m",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:''}}}});a.prototype.setLayoutData=function(o){if(o&&o.isA("sap.m.ToolbarLayoutData")){L.warning("sap.m.ToolbarLayoutData should not be set in the layoutData aggregation of sap.m.ToolbarSpacer");return this;}return this.setAggregation("layoutData",o);};return a;});
