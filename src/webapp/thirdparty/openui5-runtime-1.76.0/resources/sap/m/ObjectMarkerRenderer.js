/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var O={apiVersion:2};O.render=function(r,c){r.openStart("span",c);r.class("sapMObjectMarker");r.openEnd();r.renderControl(c._getInnerControl());r.close("span");};return O;},true);
