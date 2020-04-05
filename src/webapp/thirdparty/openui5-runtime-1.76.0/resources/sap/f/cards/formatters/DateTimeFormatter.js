/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/format/DateFormat","sap/ui/core/date/UniversalDate","sap/f/cards/Utils"],function(D,U,a){"use strict";var d={dateTime:function(v,f,l){var A=a.processFormatArguments(f,l),o=D.getDateTimeInstance(A.formatOptions,A.locale),p=a.parseJsonDateTime(v);var u=new U(p);var F=o.format(u);return F;},date:function(v,f,l){return d.dateTime.apply(this,arguments);}};return d;});
