/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/unified/ColorPicker',"sap/base/Log"],function(l,U,L){"use strict";var C=U.extend("sap.ui.commons.ColorPicker",{metadata:{deprecated:true,library:"sap.ui.commons"},renderer:"sap.ui.unified.ColorPickerRenderer"});try{sap.ui.getCore().loadLibrary("sap.ui.unified");}catch(e){L.error("The control 'sap.ui.commons.ColorPicker' needs library 'sap.ui.unified'.");throw(e);}return C;});
