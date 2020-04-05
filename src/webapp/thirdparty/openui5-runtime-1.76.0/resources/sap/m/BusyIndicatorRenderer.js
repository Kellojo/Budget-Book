/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var B={apiVersion:2};B.render=function(r,b){var t=b.getTooltip_AsString();r.openStart("div",b).class("sapMBusyIndicator");r.style("font-size",b.getSize());r.accessibilityState(b);if(t){r.attr("title",t);}r.openEnd();if(b.getCustomIcon()){r.renderControl(b._iconImage);}else{r.openStart("div",b.getId()+"-busy-area");r.class("sapMBusyIndicatorBusyArea").openEnd().close("div");}if(b._busyLabel){r.renderControl(b._busyLabel);}r.close("div");};return B;},true);
