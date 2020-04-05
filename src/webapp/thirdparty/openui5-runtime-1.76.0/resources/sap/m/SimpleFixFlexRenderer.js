/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={};S.render=function(r,c){var f=c.getFixContent();r.write('<div');r.addClass('sapUiSimpleFixFlex');r.writeControlData(c);r.writeClasses();r.write('>');if(f){r.renderControl(f.addStyleClass('sapUiSimpleFixFlexFixed'));}this.renderFlexContentContainer(r,c);r.write('</div>');};S.renderFlexContentContainer=function(r,c){var f=c.getFlexContent();r.write('<div');r.writeAttribute("id",c.getId()+"-flexContentContainer");r.addClass('sapUiSimpleFixFlexFlexContentContainer');r.writeClasses();r.write('>');if(f){r.write('<div');r.addClass('sapUiSimpleFixFlexFlexContent');r.writeClasses();r.write('>');f.forEach(function(c){r.renderControl(c);});r.write('</div>');}r.write('</div>');};return S;},true);
