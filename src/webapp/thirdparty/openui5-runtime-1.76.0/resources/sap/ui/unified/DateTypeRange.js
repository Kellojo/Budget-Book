/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./DateRange','./library'],function(D,l){"use strict";var C=l.CalendarDayType;var a=D.extend("sap.ui.unified.DateTypeRange",{metadata:{library:"sap.ui.unified",properties:{type:{type:"sap.ui.unified.CalendarDayType",group:"Appearance",defaultValue:C.Type01},color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null}}}});return a;});
