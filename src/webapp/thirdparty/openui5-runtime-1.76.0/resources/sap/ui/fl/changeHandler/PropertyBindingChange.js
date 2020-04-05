/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var P={};P.applyChange=function(c,C,p){var d=c.getDefinition();var s=d.content.property;var v=d.content.newBinding;var m=p.modifier;var o=m.getPropertyBindingOrProperty(C,s);c.setRevertData({originalValue:o});m.setPropertyBinding(C,s,v);};P.revertChange=function(c,C,p){var r=c.getRevertData();if(r){var d=c.getDefinition();var s=d.content.property;var v=r.originalValue;var m=p.modifier;m.setPropertyBindingOrProperty(C,s,v);c.resetRevertData();}else{L.error("Attempt to revert an unapplied change.");return false;}return true;};P.completeChangeContent=function(c,s){var C=c.getDefinition();if(!s.content){throw new Error("oSpecificChangeInfo attribute required");}C.content=s.content;};P.getCondenserInfo=function(c){return{classificationType:sap.ui.fl.ClassificationType.LastOneWins,uniqueKey:c.getContent().property};};return P;},true);
