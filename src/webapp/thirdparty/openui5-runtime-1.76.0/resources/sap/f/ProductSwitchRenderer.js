/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(C){"use strict";return{apiVersion:2,render:function(r,c){var R=C.getLibraryResourceBundle("sap.f");r.openStart("div",c);r.attr("role","menu");r.attr("aria-label",R.getText("PRODUCTSWITCH_CONTAINER_LABEL"));r.openEnd();r.renderControl(c._getGridContainer());r.close("div");}};},true);
