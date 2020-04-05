/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/flexState/ManifestUtils","sap/ui/fl/write/_internal/CompatibilityConnector","sap/ui/fl/Utils"],function(M,C,U){"use strict";return{loadFlexData:function(p){var c={name:p.reference,appVersion:U.getAppVersionFromManifest(p.manifest)||U.DEFAULT_APP_VERSION};var P={appName:M.getBaseComponentNameFromManifest(p.manifest),cacheKey:M.getCacheKeyFromAsyncHints(p.asyncHints,p.reference),siteId:U.getSiteIdByComponentData(p.componentData),appDescriptor:p.manifest.getRawJson?p.manifest.getRawJson():p.manifest,draftLayer:p.draftLayer,partialFlexData:p.partialFlexData};return C.loadChanges(c,P);}};});
