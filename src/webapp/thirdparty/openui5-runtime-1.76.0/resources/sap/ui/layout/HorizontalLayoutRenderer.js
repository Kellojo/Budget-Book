/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var H={apiVersion:2};H.render=function(r,c){var a=r;var n=!c.getAllowWrapping();a.openStart("div",c);a.class("sapUiHLayout");if(n){a.class("sapUiHLayoutNoWrap");}a.openEnd();var C=c.getContent();for(var i=0;i<C.length;i++){if(n){a.openStart("div");a.class("sapUiHLayoutChildWrapper");a.openEnd();}a.renderControl(C[i]);if(n){a.close("div");}}a.close("div");};return H;},true);
