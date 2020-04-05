/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/commons/Toolbar','sap/ui/core/Control','./library','./ExactAreaRenderer','sap/ui/core/Element'],function(T,C,l,E,a){"use strict";var b=C.extend("sap.ui.ux3.ExactArea",{metadata:{library:"sap.ui.ux3",properties:{toolbarVisible:{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},toolbarItems:{type:"sap.ui.commons.ToolbarItem",multiple:true,singularName:"toolbarItem"}}}});a.extend("sap.ui.ux3.ExactAreaToolbarTitle",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],properties:{text:{name:"text",type:"string",group:"Appearance",defaultValue:''}}}});return b;});
