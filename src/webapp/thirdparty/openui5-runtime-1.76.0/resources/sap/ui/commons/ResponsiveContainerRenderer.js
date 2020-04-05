/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var R=function(){};R.render=function(r,c){var C=c.getAggregation("content");r.write("<div ");r.writeControlData(c);r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");if(C){r.renderControl(C);}r.write("<div ");r.addStyle("width","0px");r.addStyle("height","0px");r.addStyle("overflow","hidden");r.writeStyles();r.write(">");c.getRanges().forEach(function(o){r.write("<div ");r.writeElementData(o);r.addStyle("width",o.getWidth());r.addStyle("height",o.getHeight());r.writeStyles();r.write("></div>");});r.write("</div>");r.write("</div>");};return R;},true);
