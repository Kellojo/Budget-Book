/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ComboBoxBaseRenderer','sap/ui/core/Renderer'],function(C,R){"use strict";var a=R.extend(C);a.apiVersion=2;a.CSS_CLASS_COMBOBOX="sapMComboBox";a.addOuterClasses=function(r,c){C.addOuterClasses.apply(this,arguments);r.class(a.CSS_CLASS_COMBOBOX);};a.addInnerClasses=function(r,c){C.addInnerClasses.apply(this,arguments);r.class(a.CSS_CLASS_COMBOBOX+"Inner");};a.addButtonClasses=function(r,c){C.addButtonClasses.apply(this,arguments);r.class(a.CSS_CLASS_COMBOBOX+"Arrow");};a.addPlaceholderClasses=function(r,c){C.addPlaceholderClasses.apply(this,arguments);r.class(a.CSS_CLASS_COMBOBOX+"Placeholder");};return a;},true);
