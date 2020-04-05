/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var S=F.extend("sap.ui.rta.command.Split",{metadata:{library:"sap.ui.rta",properties:{newElementIds:{type:"string[]"},source:{type:"any"},parentElement:{type:"any"}},associations:{},events:{}}});S.prototype._getChangeSpecificData=function(){var s={newElementIds:this.getNewElementIds(),sourceControlId:this.getSource().getId(),changeType:this.getChangeType(),parentId:this.getParentElement().getId()};return s;};return S;});
