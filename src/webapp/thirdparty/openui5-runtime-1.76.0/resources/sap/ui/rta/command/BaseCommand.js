/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject"],function(M){"use strict";var B=M.extend("sap.ui.rta.command.BaseCommand",{metadata:{library:"sap.ui.rta",properties:{name:{type:"string"},runtimeOnly:{type:"boolean"}},associations:{element:{type:"sap.ui.core.Element"}},events:{}}});B.prototype.getElement=function(){var i=this.getAssociation("element");return sap.ui.getCore().byId(i);};B.prototype.prepare=function(){return true;};B.prototype.execute=function(){return Promise.resolve();};B.prototype.getVariantChange=function(){return this._oVariantChange;};B.prototype.undo=function(){return Promise.resolve();};B.prototype.isEnabled=function(){return true;};return B;});
