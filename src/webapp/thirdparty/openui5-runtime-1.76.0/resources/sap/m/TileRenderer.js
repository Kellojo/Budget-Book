/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var T={};T.render=function(r,c){var t,v;r.write("<div tabindex=\"0\"");r.writeControlData(c);r.addClass("sapMTile");r.addClass("sapMPointer");r.writeClasses();if(c._invisible){r.addStyle("visibility","hidden");r.writeStyles();}var s=c.getTooltip_AsString();if(s){r.writeAttributeEscaped("title",s);}if(c.getParent()instanceof sap.m.TileContainer){t=c.getParent();v=t._getVisibleTiles();r.writeAccessibilityState(c,{role:"option",posinset:t._indexOfVisibleTile(c,v)+1,setsize:v.length});}r.write(">");if(c.getRemovable()){r.write("<div id=\""+c.getId()+"-remove\" class=\"sapMTCRemove\"></div>");}else{r.write("<div id=\""+c.getId()+"-remove\" class=\"sapMTCNoRemove\"></div>");}r.write("<div class=\"sapMTileContent\">");this._renderContent(r,c);r.write("</div></div>");};T._renderContent=function(r,c){};return T;},true);
