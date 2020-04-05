/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(t){"use strict";var r=/[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,j={};var J=function(c){var E=j[c];if(!E){var C=c.charCodeAt(0);if(C<256){E="\\x"+t(C,2);}else{E="\\u"+t(C,4);}j[c]=E;}return E;};var e=function(s){return s.replace(r,J);};return e;});
