/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Element','sap/ui/core/StashedControlSupport',"sap/base/assert"],function(l,E,S,a){"use strict";var L=E.extend("sap.uxap.ObjectPageLazyLoader",{metadata:{library:"sap.uxap",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},defaultAggregation:"content"}});S.mixInto(L);L.prototype.setParent=function(p){if(!(p===null||p instanceof sap.uxap.ObjectPageSubSection)){a(false,"setParent(): oParent must be an instance of sap.uxap.ObjectPageSubSection or null");}return E.prototype.setParent.apply(this,arguments);};return L;});
