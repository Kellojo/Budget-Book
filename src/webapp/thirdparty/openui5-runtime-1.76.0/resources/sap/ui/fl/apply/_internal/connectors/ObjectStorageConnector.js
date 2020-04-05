/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/apply/connectors/BaseConnector","sap/ui/fl/apply/_internal/connectors/ObjectStorageUtils","sap/ui/fl/apply/_internal/StorageUtils"],function(m,B,O,S){"use strict";function l(p){var f=[];return O.forEachObjectInStorage(p,function(F){f.push(F.changeDefinition);}).then(function(){return f;});}var a=m({},B,{oStorage:undefined,layers:["ALL"],loadFlexData:function(p){return l({storage:this.oStorage,reference:p.reference}).then(function(f){var g=S.getGroupedFlexObjects(f);return S.filterAndSortResponses(g);});}});return a;},true);
