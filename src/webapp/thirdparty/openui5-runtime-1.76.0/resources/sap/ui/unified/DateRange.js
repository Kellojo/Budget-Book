/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','./library','sap/ui/unified/calendar/CalendarUtils'],function(E,l,C){"use strict";var D=E.extend("sap.ui.unified.DateRange",{metadata:{library:"sap.ui.unified",properties:{startDate:{type:"object",group:"Misc",defaultValue:null},endDate:{type:"object",group:"Misc",defaultValue:null}}}});D.prototype.setStartDate=function(d){if(d){C._checkJSDateObject(d);var y=d.getFullYear();C._checkYearInValidRange(y);}this.setProperty("startDate",d);return this;};D.prototype.setEndDate=function(d){if(d){C._checkJSDateObject(d);var y=d.getFullYear();C._checkYearInValidRange(y);}this.setProperty("endDate",d);return this;};return D;});
