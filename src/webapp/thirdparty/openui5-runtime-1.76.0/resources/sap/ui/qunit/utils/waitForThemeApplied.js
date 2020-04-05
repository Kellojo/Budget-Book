/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var w=function(){if(typeof sap==="undefined"||!sap.ui||typeof sap.ui.getCore!=="function"){return Promise.reject(new Error("UI5 Core must be loaded and booted before using the sap/ui/qunit/utils/waitForThemeApplied module"));}return new Promise(function(r){var c=sap.ui.getCore();if(c.isThemeApplied()){r();}else{var t=function(){r();c.detachThemeChanged(t);};c.attachThemeChanged(t);}});};return w;});
