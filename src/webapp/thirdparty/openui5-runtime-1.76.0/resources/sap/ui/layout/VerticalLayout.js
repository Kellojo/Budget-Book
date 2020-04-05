/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','sap/ui/core/EnabledPropagator','./library',"./VerticalLayoutRenderer"],function(C,E,l,V){"use strict";var a=C.extend("sap.ui.layout.VerticalLayout",{metadata:{library:"sap.ui.layout",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},enabled:{type:"boolean",group:"Behavior",defaultValue:true}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},dnd:{draggable:false,droppable:true},designtime:"sap/ui/layout/designtime/VerticalLayout.designtime"}});a.prototype.getAccessibilityInfo=function(){return{children:this.getContent()};};E.call(a.prototype);return a;});
