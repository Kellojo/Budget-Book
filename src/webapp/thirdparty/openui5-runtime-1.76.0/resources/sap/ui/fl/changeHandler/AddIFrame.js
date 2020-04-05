/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/common/revertAddedControls","sap/ui/fl/changeHandler/common/getTargetAggregationIndex","sap/ui/fl/changeHandler/common/createIFrame"],function(r,g,c){"use strict";var A={};A.applyChange=function(C,o,p){var m=p.modifier;var a=C.getDefinition();var v=p.view;var s=a.content.targetAggregation;var b=m.findAggregation(o,s);if(!b){throw new Error("The given Aggregation is not available in the given control: "+m.getId(o));}var i=g(C,o,p);var I=c(C,p,a.content.selector);m.insertAggregation(o,s,I,i,v);C.setRevertData([m.getId(I)]);};A.revertChange=r;A.completeChangeContent=function(C,s,p){var o=C.getDefinition();var m=p.modifier;var a=p.appComponent;["targetAggregation","baseId","url"].forEach(function(R){if(!Object.prototype.hasOwnProperty.call(s.content,R)){throw new Error("Attribute missing from the change specific content '"+R+"'");}});o.content=Object.assign(o.content||{},s.content);o.content.selector=m.getSelector(o.content.baseId,a);};return A;},true);
