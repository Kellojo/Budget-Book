/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./DragInfo","./DropInfo","sap/ui/Device","sap/base/Log"],function(D,a,b,L){"use strict";var c=a.extend("sap.ui.core.dnd.DragDropInfo",{metadata:{library:"sap.ui.core",interfaces:["sap.ui.core.dnd.IDragInfo","sap.ui.core.dnd.IDropInfo"],properties:{sourceAggregation:{type:"string",defaultValue:null}},associations:{targetElement:{type:"sap.ui.core.Element",multiple:false}},events:{dragStart:{allowPreventDefault:true},dragEnd:{}}}});c.prototype.isDraggable=D.prototype.isDraggable;c.prototype.fireDragEnd=D.prototype.fireDragEnd;c.prototype.fireDragStart=function(e){if(b.browser.msie){e.originalEvent.dataTransfer.effectAllowed=this.getDropEffect().toLowerCase();}return D.prototype.fireDragStart.apply(this,arguments);};c.prototype.getDropTarget=function(){var t=this.getTargetElement();if(t){return sap.ui.getCore().byId(t);}return this.getParent();};c.prototype.setGroupName=function(){L.error("groupName property must not be set on "+this);return this;};return c;},true);
