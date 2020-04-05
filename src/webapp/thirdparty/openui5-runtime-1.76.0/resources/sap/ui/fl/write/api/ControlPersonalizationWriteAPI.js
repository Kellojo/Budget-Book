/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/ControlPersonalizationAPI","sap/ui/fl/Utils"],function(O,U){"use strict";var C={add:function(p){p.changes.forEach(function(P){P.selectorControl=P.selectorElement;});p.controlChanges=p.changes;return O.addPersonalizationChanges(p);},reset:function(p){p.selectors=p.selectors||[];return O.resetChanges(p.selectors,p.changeTypes);},save:function(p){var a=p.selector.appComponent||U.getAppComponentForControl(p.selector);return O.saveChanges(p.changes,a);},buildSelectorFromElementIdAndType:function(p){var a=U.getAppComponentForControl(p.element);if(!a||!p.elementId||!p.elementType){throw new Error("Not enough information given to build selector.");}return{elementId:p.elementId,elementType:p.elementType,appComponent:a,id:p.elementId,controlType:p.elementType};}};return C;},true);
