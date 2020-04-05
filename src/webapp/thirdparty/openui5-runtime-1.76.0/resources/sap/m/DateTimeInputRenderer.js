/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var D={};D.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMDTI");var w=c.getWidth();if(w){r.addStyle("width",w);}r.writeStyles();r.writeClasses();r.write(">");var p=c.getAggregation("_picker");if(p){r.renderControl(p);}r.write("</div>");};return D;},true);
