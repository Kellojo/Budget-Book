/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/base/security/encodeXML','sap/base/security/encodeJS','sap/base/security/encodeURL','sap/base/security/encodeURLParameters','sap/base/security/encodeCSS','sap/base/security/URLWhitelist','sap/base/security/sanitizeHTML'],function(q,e,a,b,c,d,U,s){"use strict";q.sap.encodeHTML=e;q.sap.encodeXML=e;q.sap.escapeHTML=e;q.sap.encodeJS=a;q.sap.escapeJS=a;q.sap.encodeURL=b;q.sap.encodeURLParameters=c;q.sap.encodeCSS=d;q.sap.clearUrlWhitelist=U.clear;q.sap.addUrlWhitelist=U.add;q.sap.removeUrlWhitelist=function(i){U.delete(U.entries()[i]);};q.sap.getUrlWhitelist=U.entries;q.sap.validateUrl=U.validate;q.sap._sanitizeHTML=s;return q;});
