/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge"],function(m){"use strict";var s={};function _(r,t){var f=r.reduce(function(f,R){if(R[t]){return f.concat(R[t]);}return f;},[]);var c=[];return f.filter(function(C){var F=C.fileName;var d=c.indexOf(F)!==-1;if(d){return false;}c.push(F);return true;});}function a(r){return r.reduce(function(u,R){return m({},u,R.ui2personalization);},{});}function b(r){return r.reduce(function(c,R){return R.cacheKey?c+=R.cacheKey:c;},"")||null;}s.merge=function(r){return{appDescriptorChanges:_(r,"appDescriptorChanges"),changes:_(r,"changes"),ui2personalization:a(r),variants:_(r,"variants"),variantChanges:_(r,"variantChanges"),variantDependentControlChanges:_(r,"variantDependentControlChanges"),variantManagementChanges:_(r,"variantManagementChanges"),cacheKey:b(r)};};return s;});
