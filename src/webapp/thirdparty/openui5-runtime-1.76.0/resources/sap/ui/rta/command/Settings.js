/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var S=F.extend("sap.ui.rta.command.Settings",{metadata:{library:"sap.ui.rta",properties:{content:{type:"any",group:"content"}},associations:{},events:{}}});S.prototype.execute=function(){if(this.getElement()){return F.prototype.execute.apply(this,arguments);}return Promise.resolve();};S.prototype.undo=function(){if(this.getElement()){return F.prototype.undo.apply(this,arguments);}return Promise.resolve();};return S;});
