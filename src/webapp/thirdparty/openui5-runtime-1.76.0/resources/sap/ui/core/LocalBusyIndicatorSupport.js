/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Control',"sap/base/Log"],function(C,L){"use strict";var a=function(){if(this===C.prototype){this.setDelay=this.setBusyIndicatorDelay;}else{L.error("Only controls can use the LocalBusyIndicator",this);}};return a;},true);
