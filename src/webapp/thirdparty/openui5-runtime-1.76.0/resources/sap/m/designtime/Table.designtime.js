/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/ChangeHandlerMediator"],function(C){"use strict";var c=function(t){return!!(t&&t._hasTablePersoController&&t._hasTablePersoController());};return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/Table.icon.svg"}},aggregations:{columns:{propagateMetadata:function(e){if(e.isA("sap.m.Column")&&c(e.getParent())){return{actions:null};}},childNames:{singular:"COLUMN_NAME",plural:"COLUMN_NAME_PLURAL"},domRef:":sap-domref .sapMListTblHeader",actions:{move:function(o){return c(o.getParent())?null:"moveTableColumns";},addODataProperty:function(t){var m=C.getAddODataFieldSettings(t);if(m&&!c(t)){return{changeType:"addTableColumn",changeHandlerSettings:m};}}}},items:{domRef:":sap-domref .sapMListItems"},contextMenu:{ignore:true}}};});
