/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var R=F.extend("sap.ui.rta.command.Remove",{metadata:{library:"sap.ui.rta",properties:{removedElement:{type:"any"}},associations:{},events:{}}});R.prototype._getChangeSpecificData=function(){var e=this.getRemovedElement()||this.getElement();var s={changeType:this.getChangeType(),removedElement:{id:e.getId()}};return s;};return R;});
