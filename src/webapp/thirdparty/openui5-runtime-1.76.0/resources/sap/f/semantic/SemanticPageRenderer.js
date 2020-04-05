/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,s){r.openStart("div",s);r.class("sapFSemanticPage");r.openEnd();r.renderControl(s._getPage());r.close("div");};return S;},true);
