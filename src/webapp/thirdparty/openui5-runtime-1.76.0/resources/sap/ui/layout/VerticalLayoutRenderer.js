/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var V={apiVersion:2};V.render=function(r,v){var a=r;a.openStart("div",v);a.class("sapUiVlt");a.class("sapuiVlt");if(v.getWidth()&&v.getWidth()!=''){a.style("width",v.getWidth());}a.openEnd();var c=v.getContent();for(var i=0;i<c.length;i++){a.openStart("div");a.class("sapUiVltCell");a.class("sapuiVltCell");a.openEnd();a.renderControl(c[i]);a.close("div");}a.close("div");};return V;},true);
