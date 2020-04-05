/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var E={};E.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3Exact");r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.write(">");r.renderControl(c._searchArea);if(c._bDetailsVisible){r.renderControl(c._browser);r.renderControl(c._resultText);r.renderControl(c._resultArea);}r.write("</div>");};return E;},true);
