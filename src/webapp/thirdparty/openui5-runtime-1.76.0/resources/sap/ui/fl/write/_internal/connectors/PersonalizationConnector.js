/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/write/_internal/connectors/BackendConnector","sap/ui/fl/apply/_internal/connectors/PersonalizationConnector"],function(m,B,A){"use strict";var P="/flex/personalization";var a="/v1";var F={isProductiveSystem:true};var b=m({},B,{layers:A.layers,ROUTES:{CHANGES:P+a+"/changes/",TOKEN:P+a+"/actions/getcsrftoken"},loadFeatures:function(){return Promise.resolve(F);}});b.applyConnector=A;return b;},true);
