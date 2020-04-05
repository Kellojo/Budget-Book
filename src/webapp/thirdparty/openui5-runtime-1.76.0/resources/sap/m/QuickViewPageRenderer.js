/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var Q={};Q.render=function(r,q){var p=q.getPageContent();r.write("<div");r.addClass("sapMQuickViewPage");r.writeControlData(q);r.writeClasses();r.write(">");if(p.header){r.renderControl(p.header);}r.renderControl(p.form);r.write("</div>");};return Q;},true);
