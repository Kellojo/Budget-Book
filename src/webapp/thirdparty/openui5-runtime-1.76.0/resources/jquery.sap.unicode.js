/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/Device'],function(q,D){'use strict';var i,N;if(!String.prototype.normalize&&!D.browser.mobile){N=sap.ui.requireSync('sap/base/strings/NormalizePolyfill');N.apply();i=N.isStringNFC;}else{i=function(s){return s.normalize("NFC")===s;};}q.sap.isStringNFC=i;return q;});
