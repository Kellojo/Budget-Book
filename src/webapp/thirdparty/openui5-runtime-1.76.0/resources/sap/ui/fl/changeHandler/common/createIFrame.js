/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/util/IFrame"],function(){"use strict";return function(c,p,s){var m=p.modifier;var C=c.getDefinition();var v=p.view;var o=p.appComponent;var i={_settings:{}};["url","width","height"].forEach(function(a){var V=C.content[a];i[a]=V;i._settings[a]=V;});var I=m.createControl("sap.ui.fl.util.IFrame",o,v,s,i,false);return I;};});
