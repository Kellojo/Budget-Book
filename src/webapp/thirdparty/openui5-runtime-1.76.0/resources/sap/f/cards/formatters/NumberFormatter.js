/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/format/NumberFormat","sap/f/cards/Utils"],function(N,U){"use strict";var n={currency:function(c,C,f,l){var s=U.processFormatArguments(f,l),o=N.getCurrencyInstance(s.formatOptions,s.locale);return o.format(c,C);},"float":function(f,F,l){var s=U.processFormatArguments(F,l),o=N.getFloatInstance(s.formatOptions,s.locale);return o.format(f);},integer:function(i,f,l){var s=U.processFormatArguments(f,l),I=N.getIntegerInstance(s.formatOptions,s.locale);return I.format(i);},percent:function(p,f,l){var s=U.processFormatArguments(f,l),P=N.getPercentInstance(s.formatOptions,s.locale);return P.format(p);},unit:function(u,s,f,l){var S=U.processFormatArguments(f,l),o=N.getUnitInstance(S.formatOptions,S.locale);return o.format(u,s);}};return n;});
