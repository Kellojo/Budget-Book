/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","./library","./ListItemBase","./InputListItemRenderer"],function(c,l,L,I){"use strict";var T=c.TextDirection;var a=L.extend("sap.m.InputListItem",{metadata:{library:"sap.m",properties:{label:{type:"string",group:"Misc",defaultValue:null},labelTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:T.Inherit}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}},designtime:"sap/m/designtime/InputListItem.designtime"}});a.prototype.getContentAnnouncement=function(){var A=this.getLabel();this.getContent().forEach(function(C){A+=L.getAccessibilityText(C)+" ";});return A;};return a;});
