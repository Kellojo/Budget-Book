/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";var S={apiVersion:2},C={MAIN_CLASS:"sapMSliderTooltipContainer"};S.render=function(r,c){var t=c.getAssociatedTooltipsAsControls();r.openStart("div",c).style("width",c.getWidth()).openEnd();r.openStart("div").attr("id",c.getId()+"-container").style("left","0%").style("right","0%").class(C.MAIN_CLASS);if(!c.getEnabled()){r.class(C.MAIN_CLASS+"Disabled");}r.openEnd();if(t&&t.length){t.forEach(function(T){r.renderControl(T);});}r.close("div").close("div");};return S;},true);
