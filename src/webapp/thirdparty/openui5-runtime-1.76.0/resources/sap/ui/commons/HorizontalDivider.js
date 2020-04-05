/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Control','./HorizontalDividerRenderer'],function(l,C,H){"use strict";var a=l.HorizontalDividerHeight;var b=l.HorizontalDividerType;var c=C.extend("sap.ui.commons.HorizontalDivider",{metadata:{library:"sap.ui.commons",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:'100%'},type:{type:"sap.ui.commons.HorizontalDividerType",group:"Appearance",defaultValue:b.Area},height:{type:"sap.ui.commons.HorizontalDividerHeight",group:"Appearance",defaultValue:a.Medium}}}});return c;});
