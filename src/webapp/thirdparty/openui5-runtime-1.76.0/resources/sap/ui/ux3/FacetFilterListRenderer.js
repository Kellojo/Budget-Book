/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F={};F.render=function(r,c){r.write("<div ");r.writeControlData(c);r.addClass("sapUiUx3FFLst");r.writeClasses();r.writeAttribute("style","width:"+c.sWidth);r.write(">");r.write("<header id=\""+c.getId()+"-head\"  class=\"sapUiUx3FFLstHead\"");if(c.getTooltip_AsString()){r.writeAttributeEscaped("title",c.getTooltip_AsString());}r.write(">");r.write("<h3 id=\""+c.getId()+"-head-txt\"  class=\"sapUiUx3FFLstHeadTxt\">");if(c.getTitle()){r.writeEscaped(c.getTitle());}r.write("</h3>");r.write("</header>");r.renderControl(c._oListBox);r.write("</div>");};return F;},true);
