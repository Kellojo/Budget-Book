/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./OverlayRenderer'],function(R,O){"use strict";var T=R.extend(O);T.renderContent=function(r,c){r.write("<div role='Main' class='sapUiUx3TIContent' id='"+c.getId()+"-content'>");r.renderControl(c._oThingViewer);r.write("</div>");};T.addRootClasses=function(r,c){r.addClass("sapUiUx3TI");};T.addOverlayClasses=function(r,c){r.addClass("sapUiUx3TIOverlay");};return T;},true);
