/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(t){"use strict";var r=/[\x00-\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,u={};var U=function(c){var E=u[c];if(!E){var C=c.charCodeAt(0);if(C<128){E="%"+t(C,2);}else if(C<2048){E="%"+t((C>>6)|192,2)+"%"+t((C&63)|128,2);}else{E="%"+t((C>>12)|224,2)+"%"+t(((C>>6)&63)|128,2)+"%"+t((C&63)|128,2);}u[c]=E;}return E;};var e=function(s){return s.replace(r,U);};return e;});
