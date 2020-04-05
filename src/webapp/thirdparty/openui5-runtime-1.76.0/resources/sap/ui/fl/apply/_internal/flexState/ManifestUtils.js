/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(U){"use strict";function a(c){if(c&&c.indexOf(".Component")<0){c+=".Component";}return c;}var M={getFlexReference:function(p){var m=p.manifest;var c=p.componentData;if(c.startupParameters){if(Array.isArray(c.startupParameters["sap-app-id"])){return c.startupParameters["sap-app-id"][0];}}var s=m.getEntry?m.getEntry("sap.ui5"):m["sap.ui5"];if(s){if(s.appVariantId){return s.appVariantId;}if(s.componentName){return a(s.componentName);}}return a(U.getAppIdFromManifest(m));},getCacheKeyFromAsyncHints:function(A,r){if(A&&A.requests&&Array.isArray(A.requests)){var f;A.requests.some(function(o){if(o.name==="sap.ui.fl.changes"&&o.reference===r){f=o;}});if(f){return f.cachebusterToken||"<NO CHANGES>";}}},getBaseComponentNameFromManifest:function(m){var s=m.getEntry?m.getEntry("sap.ui5"):m["sap.ui5"];return s&&s.componentName||U.getAppIdFromManifest(m);}};return M;},true);
