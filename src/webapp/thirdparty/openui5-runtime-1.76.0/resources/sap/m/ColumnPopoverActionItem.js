/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ColumnPopoverItem','sap/m/Button'],function(C,B){"use strict";var a=C.extend("sap.m.ColumnPopoverActionItem",{library:"sap.m",metadata:{properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null}},events:{press:{}}}});a.prototype._createButton=function(i,c){return new B(i,{icon:this.getIcon(),type:"Transparent",tooltip:this.getText(),visible:this.getVisible(),press:[function(e){if(c._oShownCustomContent){c._oShownCustomContent.setVisible(false);c._oShownCustomContent=null;c._cleanSelection(this);}this.firePress();},this]});};return a;});
