/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/Configuration","sap/f/shellBar/CoPilotRenderer"],function(C,a,b){"use strict";var c=C.extend("sap.f.shellBar.CoPilot",{metadata:{library:"sap.f",events:{press:{}}},renderer:b});c.prototype.ontap=function(e){e.setMarked();this.firePress({});};c.prototype.getAnimation=function(){return sap.ui.getCore().getConfiguration().getAnimationMode()!==a.AnimationMode.none;};return c;});
