/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./SinglePlanningCalendarView','sap/ui/unified/calendar/CalendarUtils','sap/ui/unified/calendar/CalendarDate'],function(l,S,C,a){"use strict";var b=S.extend("sap.m.SinglePlanningCalendarMonthView",{metadata:{library:"sap.m"}});b.prototype.getEntityCount=function(){return 1;};b.prototype.getScrollEntityCount=function(s,o){var n=a.fromLocalJSDate(s),m=s.getMonth()+o,i=o>0?1:-1;n.setMonth(m);while((m+12)%12!==n.getMonth()){n.setDate(n.getDate()-i);}return Math.abs(C._daysBetween(n,a.fromLocalJSDate(s)));};b.prototype.calculateStartDate=function(s){return C.getFirstDateOfMonth(s).getJSDate();};return b;});
