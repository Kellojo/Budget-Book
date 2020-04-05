/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,s){var o=s._getSearchField(),c=s._getCancelButton(),a=s._getSearchButton(),i=s.getIsOpen(),p=s.getPhoneMode(),b=s.getWidth();r.openStart("div",s);if(i){r.class("sapFShellBarSearch");}if(p){r.class("sapFShellBarSearchFullWidth");}if(b&&i&&!p){r.style("width",b);}r.openEnd();if(i){r.renderControl(o);}r.renderControl(a);if(i&&p){r.renderControl(c);}r.close("div");};return S;},true);
