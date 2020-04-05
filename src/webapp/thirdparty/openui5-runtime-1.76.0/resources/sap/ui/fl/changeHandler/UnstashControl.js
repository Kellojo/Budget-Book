/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var U={};U.applyChange=function(c,C,p){var m=c.getContent();var M=p.modifier;var s=false;c.setRevertData({originalValue:p.modifier.getStashed(C)});var u=M.setStashed(C,s,p.appComponent)||C;if(m.parentAggregationName){var t=m.parentAggregationName;var T=M.getParent(u);M.removeAggregation(T,t,u);M.insertAggregation(T,t,u,m.index,p.view);}return u;};U.revertChange=function(c,C,p){var r=c.getRevertData();if(r){p.modifier.setStashed(C,r.originalValue);c.resetRevertData();}else{L.error("Attempt to revert an unapplied change.");return false;}return true;};U.completeChangeContent=function(c,s){var C=c.getDefinition();if(s.content){C.content=s.content;}};U.getCondenserInfo=function(){return{classificationType:sap.ui.fl.ClassificationType.Reverse,uniqueKey:"stashed"};};return U;},true);
