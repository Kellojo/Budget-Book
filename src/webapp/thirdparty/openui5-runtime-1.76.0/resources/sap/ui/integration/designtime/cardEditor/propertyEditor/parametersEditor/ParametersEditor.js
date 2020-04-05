/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/mapEditor/MapEditor","sap/base/util/includes"],function(M,i){"use strict";var P=M.extend("sap.ui.integration.designtime.cardEditor.propertyEditor.parametersEditor.ParametersEditor",{formatInputValue:function(v){return v;},formatOutputValue:function(v){return v;},_isValidItem:function(I,o){var t=o.type;var v=o.value;var a=this._getAllowedTypes();return(t&&a.indexOf(t)>=0||typeof v==="string"&&i(a,"string"));},renderer:M.getMetadata().getRenderer().render});return P;});
