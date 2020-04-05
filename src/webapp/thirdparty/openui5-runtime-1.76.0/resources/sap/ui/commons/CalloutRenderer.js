/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./CalloutBaseRenderer','sap/ui/core/Renderer'],function(C,R){"use strict";var a=R.extend(C);a.renderContent=function(r,c){var b=c.getContent();for(var i=0;i<b.length;i++){r.renderControl(b[i]);}};a.addRootClasses=function(r,c){r.addClass("sapUiClt");};a.addContentClasses=function(r,c){r.addClass("sapUiCltCont");};a.addArrowClasses=function(r,c){r.addClass("sapUiCltArr");};return a;},true);
