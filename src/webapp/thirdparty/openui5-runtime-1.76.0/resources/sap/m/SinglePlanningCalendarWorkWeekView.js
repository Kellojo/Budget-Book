/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./SinglePlanningCalendarView','sap/ui/unified/calendar/CalendarDate','sap/ui/unified/calendar/CalendarUtils','sap/ui/core/LocaleData'],function(l,S,C,a,L){"use strict";var b=S.extend("sap.m.SinglePlanningCalendarWorkWeekView",{metadata:{library:"sap.m"}});b.prototype.getEntityCount=function(){return 5;};b.prototype.getScrollEntityCount=function(){return 7;};b.prototype.calculateStartDate=function(s){var c=C.fromLocalJSDate(s),o=a._getFirstDateOfWeek(c),d=this._getFormatSettingsLocaleData();if(o.getDay()===d.getWeekendEnd()){o.setDate(o.getDate()+1);}return o.toLocalJSDate();};b.prototype._getFormatSettingsLocaleData=function(){return L.getInstance(sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale());};return b;});
