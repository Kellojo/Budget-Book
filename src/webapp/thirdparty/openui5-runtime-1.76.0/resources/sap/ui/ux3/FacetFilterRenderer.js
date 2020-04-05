/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(l){"use strict";var V=l.VisibleItemCountMode;var F={};F.render=function(r,c){var f=(c.getVisibleItemCountMode()===V.Auto);r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3FacetFilter");r.writeClasses();if(f){r.writeAttribute("style","height:100%");}r.write(">");var L=c.getLists();if(L){for(var i=0;i<L.length;i++){L[i].sWidth=100/L.length+"%";L[i].bFullHeight=f;r.renderControl(L[i]);}}r.write("</div>");};return F;},true);
