/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,c){var i=c._getInput(),w=c.getWidth(),e=c.getEnabled(),E=c.getEditable(),v=c.getValueState();r.openStart("div",c);if(e&&E){r.attr("tabindex","-1");}r.style("width",w);r.class("sapMStepInput");r.class("sapMStepInput-CTX");!e&&r.class("sapMStepInputReadOnly");!E&&r.class("sapMStepInputNotEditable");if(v==="Error"||v==="Warning"){r.class("sapMStepInput"+v);}r.openEnd();r.renderControl(i);r.close("div");};return S;},true);
