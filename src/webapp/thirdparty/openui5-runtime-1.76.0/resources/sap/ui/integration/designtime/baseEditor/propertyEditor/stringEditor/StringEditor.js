/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/ui/integration/designtime/baseEditor/util/isValidBindingString"],function(B,i){"use strict";var S=B.extend("sap.ui.integration.designtime.baseEditor.propertyEditor.stringEditor.StringEditor",{xmlFragment:"sap.ui.integration.designtime.baseEditor.propertyEditor.stringEditor.StringEditor",renderer:B.getMetadata().getRenderer().render});S.prototype.setValue=function(v){if(v!=null){v=v.toString();}B.prototype.setValue.call(this,v);};S.prototype._onLiveChange=function(){var I=this.getContent();if(this._validate()){this.setValue(I.getValue());}};S.prototype._validate=function(){var I=this.getContent();var v=I.getValue();if(!i(v)){I.setValueState("Error");I.setValueStateText(this.getI18nProperty("BASE_EDITOR.STRING.INVALID_BINDING"));return false;}else{I.setValueState("None");return true;}};return S;});
