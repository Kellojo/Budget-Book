/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";return function(m){return new Promise(function(r,R){var M=sap.ui.getCore().getLoadedLibraries().hasOwnProperty('sap.m');if(M){sap.ui.require(['sap/m/MessageBox'],function(a){a.confirm(m,{actions:[a.Action.YES,a.Action.NO],onClose:function(A){if(A===a.Action.YES){r();}else{R();}}});},R);}else{var c=window.confirm(m);if(c){r();}else{R();}}});};});
