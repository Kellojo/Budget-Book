/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var P={apiVersion:2};P.render=function(r,c){var n=c._getNextButton(),p=c._getPreviousButton();r.openStart("div",c);r.class("sapMPagingButton");r.openEnd();r.renderControl(p);r.renderControl(n);r.close("div");};return P;},true);
