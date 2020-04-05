/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,c){var h=c._getHeader(),g=c._getCurrentGrid();r.openStart("div",c);r.accessibilityState({role:"region",roledescription:c._oRB.getText("SPC_CONTROL_NAME"),labelledby:{value:h.getId()+"-Title "+g.getId()+"-nowMarkerText",append:true}});r.class("sapMSinglePC");r.openEnd();r.renderControl(h);r.renderControl(g);r.close("div");};return S;},true);
