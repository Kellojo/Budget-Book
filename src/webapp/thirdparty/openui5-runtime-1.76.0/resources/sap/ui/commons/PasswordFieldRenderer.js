/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./TextFieldRenderer','sap/ui/core/Renderer','sap/ui/Device'],function(T,R,D){"use strict";var P=R.extend(T);P.renderInnerAttributes=function(r,p){if(D.support.input.placeholder||p.getValue()||!p.getPlaceholder()){r.writeAttribute('type','password');}};P.renderTextFieldEnabled=function(r,p){if(!p.getEnabled()&&!p.getEditable()){r.writeAttribute('readonly','readonly');r.writeAttribute('tabindex','-1');}else{r.writeAttribute('tabindex','0');}};P.setEnabled=function(p,e){var t=p.$();if(e){if(p.getEditable()){t.removeClass('sapUiTfDsbl').addClass('sapUiTfStd');t.removeAttr('readonly').attr('tabindex','0');}else{t.removeClass('sapUiTfDsbl').addClass('sapUiTfRo');t.attr('tabindex','0');}}else{if(p.getEditable()){t.removeClass('sapUiTfStd').addClass('sapUiTfDsbl');t.attr('readonly','readonly').attr('tabindex','-1');}else{t.removeClass('sapUiTfRo').addClass('sapUiTfDsbl');t.attr('tabindex','-1');}}};return P;},true);
