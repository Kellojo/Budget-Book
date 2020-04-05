/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ComboBoxRenderer','sap/ui/core/Renderer','sap/ui/core/library'],function(C,R,c){"use strict";var V=c.ValueState;var A=R.extend(C);A.renderExpander=function(r,o){if(!o.__sARIATXT){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");o.__sARIATXT=a.getText("AUTOCOMPLETE_ARIA_SUGGEST");}r.write("<span id=\"",o.getId(),"-ariaLbl\" style=\"display:none;\">",o.__sARIATXT,"</span>");};A.renderOuterAttributes=function(r,o){r.addClass("sapUiTfAutoComp");C.renderOuterAttributes.apply(this,arguments);};A.renderComboARIAInfo=function(r,o){var p={role:"textbox",owns:o.getId()+"-input "+o._getListBox().getId()};if(!o.getEnabled()){p["disabled"]=true;}r.writeAccessibilityState(null,p);};A.renderARIAInfo=function(r,o){var p={autocomplete:"list",live:"polite",relevant:"all",setsize:o._getListBox().getItems().length};if(o.getValueState()==V.Error){p["invalid"]=true;}r.writeAccessibilityState(o,p);};return A;},true);
