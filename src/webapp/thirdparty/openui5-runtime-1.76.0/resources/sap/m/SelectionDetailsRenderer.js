/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','sap/m/ButtonRenderer'],function(R,B){"use strict";var S=R.extend(B);S.render=function(r,c){var b=c.getAggregation("_button");r.write("<div");r.writeControlData(c);r.write(">");r.renderControl(b);r.write("</div>");};return S;},true);
