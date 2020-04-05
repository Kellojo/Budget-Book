/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./ListBase","./ListRenderer"],function(l,L,a){"use strict";var B=l.BackgroundDesign;var b=L.extend("sap.m.List",{metadata:{library:"sap.m",properties:{backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:B.Solid}}}});return b;});
