/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./SinglePlanningCalendarView'],function(l,S){"use strict";var a=S.extend("sap.m.SinglePlanningCalendarDayView",{metadata:{library:"sap.m"}});a.prototype.getEntityCount=function(){return 1;};a.prototype.getScrollEntityCount=function(){return 1;};a.prototype.calculateStartDate=function(s){return s;};return a;});
