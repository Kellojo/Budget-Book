/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/ui/integration/designtime/baseEditor/util/isValidBindingString"],function(B,i){"use strict";var a=B.extend("sap.ui.integration.designtime.baseEditor.propertyEditor.booleanEditor.BooleanEditor",{xmlFragment:"sap.ui.integration.designtime.baseEditor.propertyEditor.booleanEditor.BooleanEditor",_onChange:function(){var I=this._validate();if(I!==null){this.setValue(I);}},_validate:function(){var c=this.getContent();var s=c.getSelectedKey();var v=c.getValue();if(v&&!s&&!i(v,false)){c.setValueState("Error");c.setValueStateText(this.getI18nProperty("BASE_EDITOR.BOOLEAN.INVALID_BINDING_OR_BOOLEAN"));return null;}c.setValueState("None");if(s){return s==="true";}return v;},renderer:B.getMetadata().getRenderer().render});return a;});
