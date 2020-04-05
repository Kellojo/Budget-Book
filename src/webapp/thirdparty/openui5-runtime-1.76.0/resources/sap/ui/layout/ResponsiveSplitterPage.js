/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control"],function(l,C){"use strict";var R=C.extend("sap.ui.layout.ResponsiveSplitterPage",{metadata:{library:"sap.ui.layout",associations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}}},getContent:function(){return sap.ui.getCore().byId(this.getAssociation("content"));},renderer:function(r,c){r.write("<div");r.addClass("sapUiResponsiveSplitterPage");r.writeControlData(c);r.writeClasses();r.write(">");var a=c.getContent();if(a){r.renderControl(a);}r.write("</div>");}});return R;});
