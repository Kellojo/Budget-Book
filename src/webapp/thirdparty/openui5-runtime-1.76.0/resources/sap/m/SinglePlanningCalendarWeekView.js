/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./SinglePlanningCalendarView','sap/ui/unified/calendar/CalendarDate','sap/ui/unified/calendar/CalendarUtils'],function(l,S,C,a){"use strict";var b=S.extend("sap.m.SinglePlanningCalendarWeekView",{metadata:{library:"sap.m"}});b.prototype.getEntityCount=function(){return 7;};b.prototype.getScrollEntityCount=function(){return 7;};b.prototype.calculateStartDate=function(s){var c=C.fromLocalJSDate(s),o=a._getFirstDateOfWeek(c);return o.toLocalJSDate();};return b;});
