/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Overlay','./library','./OverlayContainerRenderer','sap/ui/dom/jquery/Focusable'],function(O,l,a){"use strict";var b=O.extend("sap.ui.ux3.OverlayContainer",{metadata:{library:"sap.ui.ux3",defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});b.prototype._setFocusLast=function(){var f=this.$("content").lastFocusableDomRef();if(!f&&this.getCloseButtonVisible()){f=this.getDomRef("close");}else if(!f&&this.getOpenButtonVisible()){f=this.getDomRef("openNew");}if(f){f.focus();}};b.prototype._setFocusFirst=function(){if(this.getOpenButtonVisible()){if(this.getDomRef("openNew")){this.getDomRef("openNew").focus();}}else if(this.getCloseButtonVisible()){if(this.getDomRef("close")){this.getDomRef("close").focus();}}else{if(this.$("content").firstFocusableDomRef()){this.$("content").firstFocusableDomRef().focus();}}};return b;});
