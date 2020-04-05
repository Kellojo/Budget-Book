/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/layout/cssgrid/GridLayoutBase"],function(G){"use strict";var C={};C.render=function(r,c){r.write("<div");r.addClass("sapUiLayoutCSSGrid");r.writeControlData(c);if(c.getWidth()){r.addStyle("width",c.getWidth());}c.getGridLayoutConfiguration().renderSingleGridLayout(r);r.writeStyles();r.writeClasses();r.write(">");c.getItems().forEach(function(i){if(c._wrapItemsWithDiv){r.write("<div");r.addClass("sapUiLayoutCSSGridItemWrapper");r.writeClasses();r.write(">");}r.renderControl(i);if(c._wrapItemsWithDiv){r.write("</div>");}});r.write("</div>");};return C;});
