/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./TileRenderer','sap/ui/core/Renderer'],function(T,R){"use strict";var C=R.extend(T);C.render=function(r,c){var t,v;r.write("<div tabindex=\"0\"");r.writeControlData(c);r.addClass("sapMCustomTile");r.writeClasses();if(c._invisible){r.addStyle("visibility","hidden");r.writeStyles();}if(c.getParent()instanceof sap.m.TileContainer){t=c.getParent();v=t._getVisibleTiles();r.writeAccessibilityState(c,{role:"option",posinset:t._indexOfVisibleTile(c,v)+1,setsize:v.length});}r.write(">");r.write("<div id=\""+c.getId()+"-remove\" class=\"sapMTCRemove\"></div>");r.write("<div class=\"sapMCustomTileContent\">");this._renderContent(r,c);r.write("</div></div>");};C._renderContent=function(r,t){r.renderControl(t.getContent());};return C;},true);
