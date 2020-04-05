/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var D={};D.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3DSSV");if(c.getFloating()){if(c.getResponsive()){r.addClass("sapUiUx3DSSVResponsive");}else{r.addClass("sapUiUx3DSSVFloating");}}else{r.addClass("sapUiUx3DSSVSingleRow");}if(c.getHeight()){r.addStyle("height",c.getHeight());r.addClass("sapUiUx3DSSVSA");}r.writeClasses();r.writeStyles();r.write(">");if(c.items){for(var i=0;i<c.items.length;i++){this.renderItem(r,c,c.items[i]);}}r.write("</div>");};D.renderItem=function(r,c,i){r.write("<div");r.addClass("sapUiUx3DSSVItem");if(c.getFloating()){r.addClass("sapUiUx3DSSVFlow");if(c.getItemMinWidth()>0){r.writeAttribute("style","min-width:"+c.getItemMinWidth()+"px");}}if(c.isItemSelected(i)){r.addClass("sapUiUx3DSSVSelected");}r.writeClasses();r.writeElementData(i);r.write(">");r.renderControl(i.getAggregation("_template"));r.write("</div>");};return D;},true);
