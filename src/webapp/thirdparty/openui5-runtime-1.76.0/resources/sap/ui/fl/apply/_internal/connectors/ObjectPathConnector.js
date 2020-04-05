/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/apply/connectors/BaseConnector","sap/ui/fl/apply/_internal/StorageUtils","sap/base/util/LoaderExtensions"],function(m,B,S,L){"use strict";var O=m({},B,{layers:[],setJsonPath:function(i){O.jsonPath=i;},loadFlexData:function(p){var P=O.jsonPath||p.path;if(P){return L.loadResource({dataType:"json",url:P,async:true}).then(function(r){return Object.assign(S.getEmptyFlexDataResponse(),r);});}return Promise.resolve();}});return O;},true);
