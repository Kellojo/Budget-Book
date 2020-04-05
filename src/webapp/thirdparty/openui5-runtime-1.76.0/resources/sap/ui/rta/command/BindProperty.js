/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var B=F.extend("sap.ui.rta.command.BindProperty",{metadata:{library:"sap.ui.rta",properties:{propertyName:{type:"string"},newBinding:{type:"string"},changeType:{type:"string",defaultValue:"propertyBindingChange"}},associations:{},events:{}}});B.prototype.bindProperty=function(n,b){if(n==="newBinding"){return this.setNewBinding(b.bindingString);}return F.prototype.bindProperty.apply(this,arguments);};B.prototype._getChangeSpecificData=function(){var e=this.getElement();var s={changeType:this.getChangeType(),selector:{id:e.getId(),type:e.getMetadata().getName()},content:{property:this.getPropertyName(),newBinding:this.getNewBinding()}};return s;};return B;});
