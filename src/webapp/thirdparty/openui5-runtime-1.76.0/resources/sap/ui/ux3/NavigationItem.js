/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Item','./library'],function(I,l){"use strict";var N=I.extend("sap.ui.ux3.NavigationItem",{metadata:{library:"sap.ui.ux3",properties:{visible:{type:"boolean",group:"Appearance",defaultValue:true},href:{type:"sap.ui.core.URI",group:"Behavior",defaultValue:null}},defaultAggregation:"subItems",aggregations:{subItems:{type:"sap.ui.ux3.NavigationItem",multiple:true,singularName:"subItem"}}}});return N;});
