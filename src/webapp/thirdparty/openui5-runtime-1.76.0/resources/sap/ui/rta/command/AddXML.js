/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var A=F.extend("sap.ui.rta.command.AddXML",{metadata:{library:"sap.ui.rta",properties:{fragment:{type:"string",group:"content"},fragmentPath:{type:"string",group:"content"},targetAggregation:{type:"string",group:"content"},index:{type:"int",group:"content"},changeType:{type:"string",defaultValue:"addXML"}},associations:{},events:{}}});A.prototype.bindProperty=function(n,b){if(n==="fragment"){return this.setFragment(b.bindingString);}return F.prototype.bindProperty.apply(this,arguments);};A.prototype._applyChange=function(c){var m={};m[c.getModuleName()]=this.getFragment();sap.ui.require.preload(m);return F.prototype._applyChange.apply(this,arguments);};return A;},true);
