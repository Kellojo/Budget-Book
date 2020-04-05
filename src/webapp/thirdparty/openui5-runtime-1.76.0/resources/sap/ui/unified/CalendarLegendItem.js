/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','./library'],function(E,l){"use strict";var C=l.CalendarDayType;var a=E.extend("sap.ui.unified.CalendarLegendItem",{metadata:{library:"sap.ui.unified",properties:{text:{type:"string",group:"Misc",defaultValue:null},type:{type:"sap.ui.unified.CalendarDayType",group:"Appearance",defaultValue:C.None},color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null}}}});return a;});
