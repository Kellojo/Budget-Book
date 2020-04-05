/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(t){"use strict";var r=/[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g;var c=function(C){var i=C.charCodeAt(0);if(C.length===1){return"\\"+t(i);}else{return"\\"+t(i)+" "+C.substr(1);}};var e=function(s){return s.replace(r,c);};return e;});
