/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/date/UniversalDateUtils","sap/base/Log"],function(U,L){"use strict";var D={start:function(t,v){var r=this._getRange(t,v);if(!r){return null;}return r[0];},end:function(t,v){var r=this._getRange(t,v);if(!r){return null;}return r[1];},_getRange:function(t,v){var g=U.ranges[t];if(!g){L.error("The requested date range type '"+t+"' is not found","sap.ui.integration.widgets.Card");return null;}return g(v);}};return D;});
