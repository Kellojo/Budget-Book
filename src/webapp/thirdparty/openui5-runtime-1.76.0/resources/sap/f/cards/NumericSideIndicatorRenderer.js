/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var N={};N.render=function(r,c){var b=c.mBindingInfos;r.write("<div");r.writeControlData(c);r.addClass("sapFCardHeaderSideIndicator");if(b.title||b.number||b.unit){r.addClass("sapFCardHeaderItemBinded");}r.writeClasses();r.writeStyles();r.write(">");var t=c.getAggregation("_title");if(t){t.addStyleClass("sapFCardHeaderSITitle");r.renderControl(t);}r.write("<div");r.addClass("sapFCardHeaderSINumber");if(b.title||b.number||b.unit){r.addClass("sapFCardHeaderItemBinded");}r.writeClasses();r.write(">");var n=c.getAggregation("_number");if(n){r.renderControl(n);}var u=c.getAggregation("_unit");if(u){r.renderControl(u);}r.write("</div>");r.write("</div>");};return N;},true);
