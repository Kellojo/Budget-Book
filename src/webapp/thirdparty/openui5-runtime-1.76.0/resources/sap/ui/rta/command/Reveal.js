/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var R=F.extend("sap.ui.rta.command.Reveal",{metadata:{library:"sap.ui.rta",properties:{revealedElementId:{type:"string"},directParent:"object"}}});R.prototype._getChangeSpecificData=function(){var s={changeType:this.getChangeType()};if(this.getRevealedElementId()){s.revealedElementId=this.getRevealedElementId();}return s;};return R;});
