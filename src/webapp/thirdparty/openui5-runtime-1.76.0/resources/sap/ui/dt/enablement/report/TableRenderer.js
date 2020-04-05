/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var T={};T.render=function(r,t){r.addClass("sapUiDtTableReport");r.write("<div");r.writeControlData(t);r.writeStyles();r.writeClasses();r.write(">");r.renderControl(t._getTable());r.write("</div>");};return T;});
