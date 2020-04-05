/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(U){"use strict";return function(c,C,p){var m=p.modifier;var o=c.getDefinition();var a=o.content.targetAggregation;var v=p.view||U.getViewForControl(C);var A=p.appComponent;var r=c.getRevertData()||[];var b=r.map(function(R){var s;if(typeof R==="string"){s=R;}else{s=R.id;a=a||R.aggregationName;}return m.bySelector(s,A,v)||v&&v.createId&&m.bySelector(v.createId(s));});b.forEach(function(d){m.removeAggregation(C,a,d);if(d.destroy){d.destroy();}});c.resetRevertData();return true;};});
