/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var H={};H.render=function(r,c){r.write("<hr");r.writeControlData(c);r.writeAttribute("role","separator");if(c.getWidth()){r.writeAttribute("style","width:"+c.getWidth()+";");}r.addClass("sapUiCommonsHoriDiv");r.addClass(c.getType()=="Page"?"sapUiCommonsHoriDivTypePage":"sapUiCommonsHoriDivTypeArea");switch(c.getHeight()){case"Ruleheight":r.addClass("sapUiCommonsHoriDivHeightR");break;case"Small":r.addClass("sapUiCommonsHoriDivHeightS");break;case"Large":r.addClass("sapUiCommonsHoriDivHeightL");break;default:r.addClass("sapUiCommonsHoriDivHeightM");}r.writeClasses();r.write("/>");};return H;},true);
