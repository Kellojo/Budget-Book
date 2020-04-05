/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return function(c,C,p){var m=p.modifier;var o=c.getDefinition();var a=o.content.targetAggregation;var i=o.content.index;if(i===undefined){var A=m.getAggregation(C,a);i=A.length;}return i;};});
