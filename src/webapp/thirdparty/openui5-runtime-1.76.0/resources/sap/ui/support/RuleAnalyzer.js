/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/Bootstrap","sap/ui/support/supportRules/Main","sap/ui/support/supportRules/RuleSetLoader"],function(B,M,R){"use strict";var a={analyze:function(e,p,m){var l=new Promise(function(r){B.initSupportRules(["true","silent"],{onReady:function(){r();}});});return l.then(function(){if(R._bRulesCreated){return M.analyze(e,p,m);}return R._oMainPromise.then(function(){return M.analyze(e,p,m);});});},getLastAnalysisHistory:function(){return M.getLastAnalysisHistory();},getAnalysisHistory:function(){return M.getAnalysisHistory();},getFormattedAnalysisHistory:function(f){return M.getFormattedAnalysisHistory(f);},addRule:function(r){return M.addRule(r);}};return a;});
