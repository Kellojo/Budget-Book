/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var P={apiVersion:2};P.render=function(r,h){var a=h.getAggregation("_actionsToolbar"),n=h.getAggregation("_navigationToolbar");r.openStart("div",h);r.class("sapMPCHead");r.openEnd();if(a){r.renderControl(a);}if(n){r.renderControl(n);}r.close("div");};return P;},true);
