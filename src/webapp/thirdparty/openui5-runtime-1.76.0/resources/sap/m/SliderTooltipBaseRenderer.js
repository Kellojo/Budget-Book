/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";var S={apiVersion:2};S.CSS_CLASS="sapMSliderTooltip";S.render=function(r,c){r.openStart("div",c).openEnd();this.renderTooltipContent(r,c);r.close("div");};S.renderTooltipContent=function(r,c){};return S;},true);
