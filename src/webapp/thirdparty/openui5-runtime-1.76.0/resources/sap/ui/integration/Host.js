/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery','./Extension'],function(q,E){"use strict";var H=E.extend("sap.ui.integration.Host",{metadata:{library:"sap.ui.integration",properties:{resolveDestination:{type:"function",invalidate:false,parameters:{destinationName:{type:"string"}}}},events:{}}});H.prototype.getDestination=function(d){var r=this.getResolveDestination(),R;if(!r||!q.isFunction(r)){return Promise.reject("Could not resolve destination '"+d+"'. There is no 'resolveDestination' callback function configured in the host.");}R=r(d);if(!R){return Promise.reject("Destination '"+d+"' not found.");}if(R instanceof Promise){return R;}return Promise.resolve(R);};return H;});
