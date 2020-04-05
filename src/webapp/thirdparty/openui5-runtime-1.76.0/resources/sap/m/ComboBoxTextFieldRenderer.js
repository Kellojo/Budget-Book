/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./InputBaseRenderer','sap/ui/core/Renderer','sap/ui/core/LabelEnablement','sap/ui/Device'],function(I,R,L,D){"use strict";var C=R.extend(I);C.apiVersion=2;C.CSS_CLASS_COMBOBOXTEXTFIELD="sapMComboBoxTextField";C.writeInnerAttributes=function(r,c){r.attr("role","combobox");r.attr("aria-haspopup","listbox");r.attr("aria-autocomplete","both");r.attr("aria-expanded","false");r.attr("autocomplete","off");r.attr("autocorrect","off");r.attr("autocapitalize","off");r.attr("type","text");};C.getAriaRole=function(){};C.getAriaDescribedBy=function(c){var a=I.getAriaDescribedBy.apply(this,arguments);if(D.browser.msie){return(a||"")+" "+c.oInvisibleText.getId();}return a;};C.addOuterStyles=function(r,c){r.style("max-width",c.getMaxWidth());};return C;},true);
