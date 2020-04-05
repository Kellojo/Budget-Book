/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var X="XHRInterceptor";var r=Object.create(null);var x=Object.create(null);function c(s){r[s]=Object.create(null);x[s]=window.XMLHttpRequest.prototype[s];window.XMLHttpRequest.prototype[s]=function(){var a=arguments;x[s].apply(this,a);for(var n in r[s]){r[s][n].apply(this,a);}};}var o={register:function(n,s,C){L.debug("Register '"+n+"' for XHR function '"+s+"'",X);if(!r[s]){c(s);}r[s][n]=C;},unregister:function(n,s){var R=delete r[s][n];L.debug("Unregister '"+n+"' for XHR function '"+s+(R?"'":"' failed"),X);return R;},isRegistered:function(n,s){return r[s]&&r[s][n];}};return o;});
