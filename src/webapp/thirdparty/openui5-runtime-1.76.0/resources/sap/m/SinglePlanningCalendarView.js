/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/base/Log','sap/ui/core/Element'],function(l,L,E){"use strict";var S=E.extend("sap.m.SinglePlanningCalendarView",{metadata:{library:"sap.m",properties:{key:{type:"string",group:"Data"},title:{type:"string",group:"Appereance"}}}});S.prototype.getEntityCount=function(){L.warning("This method should be implemented in one of the inherited classes.",this);};S.prototype.getScrollEntityCount=function(){L.warning("This method should be implemented in one of the inherited classes.",this);};S.prototype.calculateStartDate=function(d){L.warning("This method should be implemented in one of the inherited classes.",this);};return S;});
