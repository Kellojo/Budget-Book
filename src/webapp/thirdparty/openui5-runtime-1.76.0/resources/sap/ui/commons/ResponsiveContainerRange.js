/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Element'],function(l,E){"use strict";var R=E.extend("sap.ui.commons.ResponsiveContainerRange",{metadata:{library:"sap.ui.commons",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},key:{type:"string",group:"Misc",defaultValue:''}},associations:{content:{type:"sap.ui.core.Control",multiple:false}}}});return R;});
