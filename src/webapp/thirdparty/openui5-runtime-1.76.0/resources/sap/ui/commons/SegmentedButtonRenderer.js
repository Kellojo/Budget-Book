/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={};S.render=function(r,c){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons"),t=a.getText("SEGMENTEDBUTTON_ARIA_SELECT");r.write("<span");r.writeControlData(c);r.addClass("sapUiSegmentedButton");r.writeClasses();r.write(">");r.write('<span id="'+c.getId()+'-radiogroup"');r.writeAccessibilityState(c,{role:"radiogroup",disabled:!c.getEnabled()});if(c.getEnabled()){r.writeAttribute("tabindex","0");}else{r.writeAttribute("tabindex","-1");}r.write(">");this.renderButtons(r,c);r.write("</span>");r.write('<span id="'+c.getId()+'-label" style="visibility: hidden; display: none;">');r.writeEscaped(t);r.write('</span>');r.write("</span>");};S.renderButtons=function(r,c){c.getButtons().forEach(function(b){r.renderControl(b);});};return S;},true);
