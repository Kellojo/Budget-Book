/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var M=F.extend("sap.ui.rta.command.Move",{metadata:{library:"sap.ui.rta",properties:{movedElements:{type:"any[]"},target:{type:"any"},source:{type:"any"}},associations:{},events:{}}});M.prototype._getChangeSpecificData=function(){var s=this.getSource();var t=this.getTarget();if(s.parent){s.id=s.parent.getId();delete s.parent;}if(t.parent){t.id=t.parent.getId();delete t.parent;}var S={changeType:this.getChangeType(),source:s,target:t,movedElements:[]};this.getMovedElements().forEach(function(m){S.movedElements.push({id:m.id||(m.element&&m.element.getId()),sourceIndex:m.sourceIndex,targetIndex:m.targetIndex});});return S;};return M;});
