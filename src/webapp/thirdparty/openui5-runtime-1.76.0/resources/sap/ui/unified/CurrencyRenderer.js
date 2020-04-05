/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={apiVersion:2};C.render=function(r,c){var t=c.getTooltip_AsString();r.openStart("div",c);if(t){r.attr("title",t);}r.class("sapUiUfdCurrency");if(c._bRenderNoValClass){r.class("sapUiUfdCurrencyNoVal");}r.openEnd();r.openStart("div");r.class("sapUiUfdCurrencyAlign");r.openEnd();r.openStart("span");r.attr("dir","ltr");r.class("sapUiUfdCurrencyValue");r.openEnd();r.text(c.getFormattedValue());r.close("span");r.openStart("span");r.class("sapUiUfdCurrencyCurrency");r.openEnd();r.text(c._getCurrency());r.close("span");r.close("div");r.close("div");};return C;},true);
