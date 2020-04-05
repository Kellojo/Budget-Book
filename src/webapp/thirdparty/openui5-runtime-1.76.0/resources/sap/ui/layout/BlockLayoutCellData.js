/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/LayoutData','./library'],function(L,l){"use strict";var B=L.extend("sap.ui.layout.BlockLayoutCellData",{metadata:{library:"sap.ui.layout",properties:{sSize:{type:"int",group:"Appearance",defaultValue:1},mSize:{type:"int",group:"Appearance",defaultValue:1},lSize:{type:"int",group:"Appearance",defaultValue:1},xlSize:{type:"int",group:"Appearance",defaultValue:1}}}});B.prototype.breakRowOnSSize=true;B.prototype.breakRowOnMSize=false;B.prototype.breakRowOnLSize=false;B.prototype.breakRowOnXlSize=false;B.prototype.setSize=function(v){this.setProperty("mSize",v);this.setProperty("lSize",v);this.setProperty("xlSize",v);var r=this.getParent();if(r&&r.getParent()){r.getParent().invalidate();}return this;};return B;});
