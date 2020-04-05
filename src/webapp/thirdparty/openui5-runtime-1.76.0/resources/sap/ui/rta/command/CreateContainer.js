/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var C=F.extend("sap.ui.rta.command.CreateContainer",{metadata:{library:"sap.ui.rta",properties:{index:{type:"int",group:"content"},newControlId:{type:"string",group:"content"},label:{type:"string"},parentId:{type:"string",group:"content"}},associations:{},events:{}}});C.prototype._getChangeSpecificData=function(){var s=F.prototype._getChangeSpecificData.apply(this);s.newLabel=this.getLabel();return s;};return C;});
