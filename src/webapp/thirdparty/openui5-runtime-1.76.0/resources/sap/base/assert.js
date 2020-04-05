/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Log"],function(L){"use strict";var a=function(r,m){if(!r){var M=typeof m==="function"?m():m;if(console&&console.assert){console.assert(r,M);}else{L.debug("[Assertions] "+M);}}};return a;});
