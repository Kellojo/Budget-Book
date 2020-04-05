/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var S={};S.render=function(r,s){r.addClass("sapUiDtStatisticReport");r.write("<div");r.writeControlData(s);r.writeStyles();r.writeClasses();r.write(">");r.renderControl(s._getForm());r.write("</div>");};return S;});
