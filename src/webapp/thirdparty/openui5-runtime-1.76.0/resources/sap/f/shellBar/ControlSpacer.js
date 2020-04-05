/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','sap/f/shellBar/ControlSpacerRenderer'],function(C,a){"use strict";var b=C.extend("sap.f.shellBar.ControlSpacer",{metadata:{library:"sap.f",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:''}}},renderer:a});b.prototype.setWidth=function(w){if(this.$().length){this.$().width(w);}return this.setProperty("width",w,true);};return b;});
