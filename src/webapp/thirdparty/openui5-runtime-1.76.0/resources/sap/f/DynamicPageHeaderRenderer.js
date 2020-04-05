/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var D={apiVersion:2};D.render=function(r,d){var o=d._getState(),s="sapFDynamicPageHeader",b=d.getBackgroundDesign();r.openStart("header",d);r.accessibilityState({role:"region"});r.class("sapContrastPlus");r.class(s);if(o.headerHasContent){r.class("sapFDynamicPageHeaderWithContent");}if(o.headerPinnable){r.class("sapFDynamicPageHeaderPinnable");}if(b){r.class(s+b);}r.openEnd();this._renderHeaderContent(r,o);r.renderControl(o.collapseButton);if(o.headerPinnable){r.renderControl(o.pinButton);}r.close("header");};D._renderHeaderContent=function(r,d){if(d.headerHasContent){r.openStart("div");r.class("sapFDynamicPageHeaderContent");r.openEnd();d.content.forEach(r.renderControl,r);r.close("div");}};return D;},true);
