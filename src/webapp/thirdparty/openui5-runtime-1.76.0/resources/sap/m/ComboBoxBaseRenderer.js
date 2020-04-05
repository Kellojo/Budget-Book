/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ComboBoxTextFieldRenderer','sap/ui/core/Renderer','sap/ui/core/Core'],function(C,R,a){"use strict";var b=R.extend(C);b.apiVersion=2;b.CSS_CLASS_COMBOBOXBASE="sapMComboBoxBase";b.getAccessibilityState=function(c){var A=C.getAccessibilityState.call(this,c),l=c._getList();if(l){A.controls=l.getId();}return A;};b.addOuterClasses=function(r,c){C.addOuterClasses.apply(this,arguments);var d=b.CSS_CLASS_COMBOBOXBASE;r.class(d);if(!c.getEnabled()){r.class(d+"Disabled");}if(!c.getEditable()){r.class(d+"Readonly");}};b.addButtonClasses=function(r,c){C.addButtonClasses.apply(this,arguments);r.class(b.CSS_CLASS_COMBOBOXBASE+"Arrow");};return b;},true);
