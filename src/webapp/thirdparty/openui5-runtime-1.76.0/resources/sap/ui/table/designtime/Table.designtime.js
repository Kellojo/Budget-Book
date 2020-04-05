/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/table/utils/TableUtils'],function(T){"use strict";return{domRef:function(t){if(t._getRowMode().isA("sap.ui.table.rowmodes.AutoRowMode")){return t.$("sapUiTableCnt").get(0);}return t.getDomRef();},aggregations:{columns:{domRef:".sapUiTableCHA"},rows:{ignore:function(t){return T.isNoDataVisible(t);}},hScroll:{ignore:false,domRef:function(t){return t.$("hsb").get(0);}},vScroll:{ignore:false,domRef:function(t){return t.$("vsb").get(0);}}},scrollContainers:[{domRef:function(t){return t.$("sapUiTableCnt").get(0);},aggregations:["rows"]}]};});
