/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./CalendarDateIntervalRenderer'],function(R,C){"use strict";var a=R.extend(C);a.apiVersion=2;a.addAttributes=function(r,c){C.addAttributes.apply(this,arguments);r.class("sapUiCalOneMonthInt");};return a;},true);
