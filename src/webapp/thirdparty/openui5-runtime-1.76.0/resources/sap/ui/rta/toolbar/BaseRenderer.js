/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/m/HBoxRenderer"],function(R,H){"use strict";var B=R.extend.call(H,'sap.ui.rta.toolbar.BaseRenderer');B.render=function(r,c){r.addClass('sapUiRtaToolbar');r.addClass("color_"+c.getColor());c.type&&r.addClass("type_"+c.type);var z=c.getZIndex();z&&r.addStyle("z-index",z);H.render(r,c);};return B;});
