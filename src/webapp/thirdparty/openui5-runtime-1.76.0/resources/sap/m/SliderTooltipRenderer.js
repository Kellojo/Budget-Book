/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";var S={apiVersion:2};S.CSS_CLASS="sapMSliderTooltip";S.render=function(r,c){r.openStart("div",c).class(S.CSS_CLASS);if(!c.getEditable()){r.class(S.CSS_CLASS+"NonEditableWrapper");}if(c.getWidth()){r.style("width",c.getWidth());}r.openEnd();this.renderTooltipElement(r,c);r.close("div");};S.renderTooltipElement=function(r,c){var a=sap.ui.getCore().getConfiguration().getAccessibility();r.openStart("input").class(S.CSS_CLASS+"Input");if(!c.getEditable()){r.class(S.CSS_CLASS+"NonEditable");}if(a){r.accessibilityState(c,{});}r.attr("tabindex","-1").attr("value",c.getValue()).attr("type","number").attr("step",c.getStep()).attr("id",c.getId()+"-input").openEnd().close("input");};return S;},true);
