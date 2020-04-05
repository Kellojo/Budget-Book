/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var W={apiVersion:2};W.render=function(r,s){this.startWizardStep(r,s);this.renderWizardStepTitle(r,s);this.renderContent(r,s);this.endWizardStep(r);};W.startWizardStep=function(r,s){r.openStart("div",s).accessibilityState(s,{labelledby:s._getNumberInvisibleText().getId(),role:"region"}).class("sapMWizardStep").openEnd();};W.renderWizardStepTitle=function(r,s){r.openStart("h3",s.getId()+"-Title").class("sapMWizardStepTitle").openEnd().text(s.getTitle()).close("h3");};W.renderContent=function(r,s){s.getContent().forEach(r.renderControl,r);r.renderControl(s.getAggregation("_nextButton"));};W.endWizardStep=function(r){r.close("div");};return W;},true);
