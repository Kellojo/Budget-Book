/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/commons/ToolbarRenderer","sap/base/security/encodeXML"],function(T,e){"use strict";var E={};E.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3ExactArea");r.writeClasses();r.write(">");if(c.getToolbarVisible()){r.write("<div id=\""+c.getId()+"-tb\" class=\"sapUiTb sapUiTbDesignFlat sapUiTbStandalone\" role=\"toolbar\">");r.write("<div class=\"sapUiTbCont\"><div class=\"sapUiTbInner\">");var t=c.getToolbarItems();for(var i=0;i<t.length;i++){var o=t[i];if(o instanceof sap.ui.commons.ToolbarSeparator){T.renderSeparator(r,o);}else if(o instanceof sap.ui.ux3.ExactAreaToolbarTitle){r.write("<div class=\"sapUiUx3ExactAreaTbTitle\">"+e(o.getText())+"</div>");}else{r.renderControl(o);}}r.write("</div></div></div>");}r.write("<div id=\""+c.getId()+"-ct\" class=\"sapUiUx3ExactAreaCont\">");var C=c.getContent();for(var i=0;i<C.length;i++){r.renderControl(C[i]);}r.write("</div>");r.write("</div>");};return E;},true);
