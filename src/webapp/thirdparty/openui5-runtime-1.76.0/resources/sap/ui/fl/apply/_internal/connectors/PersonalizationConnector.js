/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/apply/_internal/connectors/BackendConnector","sap/ui/fl/Layer"],function(m,B,L){"use strict";var P="/flex/personalization";var A="/v1";var a=m({},B,{layers:[L.USER],ROUTES:{DATA:P+A+"/data/"}});return a;},true);
