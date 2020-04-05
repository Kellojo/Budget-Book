/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var A=F.extend("sap.ui.rta.command.AddIFrame",{metadata:{library:"sap.ui.rta",properties:{baseId:{type:"string",group:"content"},targetAggregation:{type:"string",group:"content"},index:{type:"int",group:"content"},url:{type:"string",group:"content"},width:{type:"string",group:"content"},height:{type:"string",group:"content"},changeType:{type:"string",defaultValue:"addIFrame"}},associations:{},events:{}}});A.prototype.applySettings=function(s){var S={};Object.keys(s).filter(function(b){return b!=="url";}).forEach(function(b){S[b]=s[b];});var a=[].slice.call(arguments);a[0]=S;F.prototype.applySettings.apply(this,a);this.setUrl(s.url);};A.prototype._getChangeSpecificData=function(){var c=F.prototype._getChangeSpecificData.call(this);var C=c.changeType;delete c.changeType;return{changeType:C,content:c};};return A;},true);
