/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ComboBoxBaseRenderer','./ComboBoxTextFieldRenderer','sap/ui/core/Renderer','sap/ui/Device'],function(C,a,R,D){"use strict";var M=R.extend(C);M.apiVersion=2;M.CSS_CLASS_MULTICOMBOBOX="sapMMultiComboBox";M.addOuterClasses=function(r,c){C.addOuterClasses.apply(this,arguments);r.class(M.CSS_CLASS_MULTICOMBOBOX);if(c._hasTokens()){r.class("sapMMultiComboBoxHasToken");}};M.getAriaDescribedBy=function(c){var A=a.getAriaDescribedBy.apply(this,arguments),i=c._oTokenizer&&c._oTokenizer.getTokensInfoId();return(A||"")+" "+i;};M.prependInnerContent=function(r,c){r.renderControl(c._oTokenizer);};return M;},true);
