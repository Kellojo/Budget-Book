/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var S={};S.applyChange=function(c,C,p){var s=p.modifier.getStashed(C);var o=p.modifier.findIndexInParentAggregation(C);this.setChangeRevertData(c,s,o);p.modifier.setStashed(C,true);return true;};S.revertChange=function(c,C,p){var r=c.getRevertData();if(r){var u=p.modifier.setStashed(C,r.originalValue,p.appComponent);if(u){var U=p.modifier.findIndexInParentAggregation((u));if(U!==r.originalIndex){var P=p.modifier.getParent(u);var a=p.modifier.getParentAggregationName(u);p.modifier.removeAggregation(P,a,u);p.modifier.insertAggregation(P,a,u,r.originalIndex);}}c.resetRevertData();}else{L.error("Attempt to revert an unapplied change.");return false;}return true;};S.completeChangeContent=function(){};S.setChangeRevertData=function(c,v,o){c.setRevertData({originalValue:v,originalIndex:o});};S.getCondenserInfo=function(){return{classificationType:sap.ui.fl.ClassificationType.Reverse,uniqueKey:"stashed"};};return S;},true);
