/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/ToolbarLayoutData','sap/m/library',"sap/base/Log"],function(T,l,L){"use strict";var O=l.OverflowToolbarPriority;var a=T.extend("sap.m.OverflowToolbarLayoutData",{metadata:{properties:{moveToOverflow:{type:"boolean",defaultValue:true,deprecated:true},stayInOverflow:{type:"boolean",defaultValue:false,deprecated:true},priority:{type:"sap.m.OverflowToolbarPriority",group:"Behavior",defaultValue:O.High},group:{type:"int",group:"Behavior",defaultValue:0},closeOverflowOnInteraction:{type:"boolean",group:"Behavior",defaultValue:true}}}});a.prototype.invalidate=function(){var c=this.getPriority(),i=c===O.AlwaysOverflow||c===O.NeverOverflow;if(this.getGroup()&&i){L.error("It is not allowed to set AlwaysOverflow or NeverOverflow to a group items.");}return T.prototype.invalidate.call(this);};return a;});
