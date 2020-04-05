/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";function _(r,d,v){if(v!==""||v.toLowerCase()==="auto"){r.style(d,v);}}var I={apiVersion:2};I.render=function(r,i){r.openStart("iframe",i);_(r,"width",i.getWidth());_(r,"height",i.getHeight());r.style("display","block");r.style("border","none");r.attr("src",i.getUrl());r.openEnd();r.close("iframe");};return I;},true);
