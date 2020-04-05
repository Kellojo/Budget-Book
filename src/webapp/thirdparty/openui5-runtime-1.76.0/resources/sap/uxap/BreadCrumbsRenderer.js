/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var B={};B.render=function(r,c){r.openStart("div",c).class("sapUxAPBreadCrumbs").attr("role","navigation").attr("aria-labelledby",c._getAriaLabelledBy().getId()).openEnd();this._renderOverflowSelect(r,c);if(!c._bOnPhone){this._renderBreadcrumbTrail(r,c);}r.close("div");};B._renderBreadcrumbTrail=function(r,c){var l=c.getLinks(),C=c.getCurrentLocation(),t=c._getTubeIcon(),s=c.getShowCurrentLocation();r.openStart("ul",c.getId()+"-breadcrumbs").openEnd();l.forEach(function(L){r.openStart("li").openEnd();r.renderControl(L);r.renderControl(t);r.close("li");});if(s){r.openStart("li").openEnd();r.renderControl(C);r.close("li");}r.close("ul");};B._renderOverflowSelect=function(r,c){var t=c._getTubeIcon();r.openStart("div",c.getId()+"-select");r.class("sapUiHidden");r.openEnd();r.openStart("span").class("sapUxAPBreadCrumbsDots").openEnd().text("...").close("span");r.renderControl(t);r.renderControl(c._getOverflowSelect());r.close("div");};return B;},true);
