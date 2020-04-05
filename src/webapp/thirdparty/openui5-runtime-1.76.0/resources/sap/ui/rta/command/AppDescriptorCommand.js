/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/BaseCommand","sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory","sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory"],function(B,D,a){"use strict";var A=B.extend("sap.ui.rta.command.AppDescriptor",{metadata:{library:"sap.ui.rta",properties:{reference:{type:"string"},appComponent:{type:"object"},layer:{type:"string"},changeType:{type:"string"},parameters:{type:"object"},texts:{type:"object"}},events:{}}});A.prototype.needsReload=true;A.prototype.prepare=function(f){this.setLayer(f.layer);return true;};A.prototype.getPreparedChange=function(){return this._oPreparedChange;};A.prototype.createAndStoreChange=function(){return D.createDescriptorInlineChange(this.getChangeType(),this.getParameters(),this.getTexts()).then(function(o){return new a().createNew(this.getReference(),o,this.getLayer(),this.getAppComponent());}.bind(this)).then(function(o){var c=o.store();this._oPreparedChange=c;}.bind(this));};return A;});
