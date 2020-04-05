/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(t){"use strict";var r=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,a=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,h={"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;"};var H=function(c){var E=h[c];if(!E){if(a.test(c)){E="&#xfffd;";}else{E="&#x"+t(c.charCodeAt(0))+";";}h[c]=E;}return E;};var e=function(s){return s.replace(r,H);};return e;});
