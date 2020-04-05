/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./OverlayRenderer'],function(R,O){"use strict";var a=R.extend(O);a.renderContent=function(r,c){r.write("<div role='Main' class='sapUiUx3OCContent' id='"+c.getId()+"-content'>");var b=c.getContent();for(var i=0;i<b.length;i++){var d=b[i];r.renderControl(d);}r.write("</div>");};a.addRootClasses=function(r,c){r.addClass("sapUiUx3OC");};a.addOverlayClasses=function(r,c){r.addClass("sapUiUx3OCOverlay");};return a;},true);
