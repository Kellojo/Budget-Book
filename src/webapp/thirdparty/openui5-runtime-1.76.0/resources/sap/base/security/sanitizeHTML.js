/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/security/URLWhitelist","sap/ui/thirdparty/caja-html-sanitizer"],function(a,U){"use strict";var s=function(h,o){a(window.html&&window.html.sanitize,"Sanitizer should have been loaded");o=o||{uriRewriter:function(u){if(U.validate(u)){return u;}}};var t=o.tagPolicy||window.html.makeTagPolicy(o.uriRewriter,o.tokenPolicy);return window.html.sanitizeWithPolicy(h,t);};return s;});
