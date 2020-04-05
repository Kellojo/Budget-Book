/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var B={apiVersion:2};B.render=function(r,c){if(!c.getVisible()){return;}r.openStart("div",c);if(c._getSelectedViewContent()){r.class('sapUxAPBlockBase').class("sapUxAPBlockBase"+c.getMode());}else{var C=c.getMetadata().getName().split(".").pop();r.class(C+c.getMode());}r.openEnd();if(c._getSelectedViewContent()){r.renderControl(c._getSelectedViewContent());}r.close("div");};return B;},true);
