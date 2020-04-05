/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/DesignTimeMetadata"],function(D){"use strict";var A=D.extend("sap.ui.dt.AggregationDesignTimeMetadata",{metadata:{library:"sap.ui.dt"}});A.prototype.getLabel=function(e,a){return D.prototype.getLabel.apply(this,arguments)||a;};return A;});
