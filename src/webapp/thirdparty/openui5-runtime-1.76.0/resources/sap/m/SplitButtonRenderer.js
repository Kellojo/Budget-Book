/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/core/InvisibleText"],function(l,I){"use strict";var B=l.ButtonType;var S={};S.CSS_CLASS="sapMSB";S.render=function(r,b){var w=b.getWidth(),t=b.getType(),e=b.getEnabled(),T=b.getTitleAttributeValue();r.write("<div");r.writeControlData(b);r.addClass(S.CSS_CLASS);if(b.getIcon()){r.addClass(S.CSS_CLASS+"HasIcon");}if(t===B.Accept||t===B.Reject||t===B.Emphasized||t===B.Transparent){r.addClass(S.CSS_CLASS+t);}r.writeClasses();this.writeAriaAttributes(r,b);r.writeAttribute("tabindex",e?"0":"-1");if(T){r.writeAttributeEscaped("title",T);}if(w!=""||w.toLowerCase()==="auto"){r.addStyle("width",w);r.writeStyles();}r.write(">");r.write("<div");r.addClass("sapMSBInner");if(!e){r.addClass("sapMSBInnerDisabled");}r.writeClasses();r.write(">");r.renderControl(b._getTextButton());r.renderControl(b._getArrowButton());r.write("</div>");r.write("</div>");};S.writeAriaAttributes=function(r,b){var a={};this.writeAriaRole(b,a);this.writeAriaLabelledBy(b,a);r.writeAccessibilityState(b,a);};S.writeAriaRole=function(b,a){a["role"]="group";};S.writeAriaLabelledBy=function(b,a){var A="",o=b.getButtonTypeAriaLabelId();if(b.getText()){A+=b._getTextButton().getId()+"-content";A+=" ";}if(o){A+=o;A+=" ";}A+=I.getStaticId("sap.m","SPLIT_BUTTON_DESCRIPTION");A+=" "+I.getStaticId("sap.m","SPLIT_BUTTON_KEYBOARD_HINT");a["labelledby"]={value:A,append:true};};return S;},true);
