/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var I={apiVersion:2};I.PlaceholderPrefix="sap-ui-invisible-";I.createInvisiblePlaceholderId=function(e){return this.PlaceholderPrefix+e.getId();};I.render=function(r,e,t){var p=this.createInvisiblePlaceholderId(e);t=t||"span";r.openStart(t,p);r.attr("data-sap-ui",p);r.attr("aria-hidden","true");r.class("sapUiHiddenPlaceholder");r.openEnd(true);r.close(t);};return I;});
