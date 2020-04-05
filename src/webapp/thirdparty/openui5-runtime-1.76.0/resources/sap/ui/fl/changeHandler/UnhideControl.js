/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var P="visible";var U={};U.applyChange=function(c,C,p){c.setRevertData({originalValue:p.modifier.getProperty(C,P)});p.modifier.setVisible(C,true);return true;};U.revertChange=function(c,C,p){var r=c.getRevertData();if(r){p.modifier.setVisible(C,r.originalValue);c.resetRevertData();}else{L.error("Attempt to revert an unapplied change.");return false;}return true;};U.completeChangeContent=function(){};U.getCondenserInfo=function(){return{classificationType:sap.ui.fl.ClassificationType.Reverse,uniqueKey:P};};return U;},true);
