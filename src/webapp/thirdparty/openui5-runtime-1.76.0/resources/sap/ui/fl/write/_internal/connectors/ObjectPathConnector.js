/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/write/connectors/BaseConnector","sap/ui/fl/apply/_internal/connectors/ObjectPathConnector","sap/base/util/LoaderExtensions"],function(m,B,A,L){"use strict";return m({},B,{layers:A.layers,loadFeatures:function(p){var P=A.jsonPath||p.path;if(P){return L.loadResource({dataType:"json",url:P,async:true}).then(function(f,r){r.componentClassName=f;return r.settings||{};}.bind(null,p.flexReference));}return Promise.resolve({});}});},true);
