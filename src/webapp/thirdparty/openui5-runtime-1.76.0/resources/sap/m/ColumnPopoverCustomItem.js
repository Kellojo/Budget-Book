/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ColumnPopoverItem','sap/m/ToggleButton'],function(C,T){"use strict";var a=C.extend("sap.m.ColumnPopoverCustomItem",{library:"sap.m",metadata:{properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null}},aggregations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}},events:{beforeShowContent:{}}}});a.prototype._createButton=function(i,c){var p=c.getAggregation("_popover");var o=this.getContent();if(o){o.setVisible(false);this._sContentId=o.sId;}p.addContent(o);var t=this;return new T(i,{icon:this.getIcon(),type:"Transparent",tooltip:this.getText(),visible:this.getVisible(),press:function(){if(c._oShownCustomContent){c._oShownCustomContent.setVisible(false);}if(this.getPressed()){c._cleanSelection(this);t.fireBeforeShowContent();if(o){o.setVisible(true);c._oShownCustomContent=o;}}else if(o){o.setVisible(false);c._oShownCustomContent=null;}}});};return a;});
