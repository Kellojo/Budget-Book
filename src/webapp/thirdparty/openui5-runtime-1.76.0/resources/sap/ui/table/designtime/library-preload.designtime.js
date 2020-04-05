//@ui5-bundle sap/ui/table/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/table/designtime/AnalyticalTable.designtime',[],function(){"use strict";return{aggregations:{columns:{domRef:".sapUiTableCHA"},hScroll:{ignore:false,domRef:function(e){return e.$("hsb").get(0);}},vScroll:{ignore:false,domRef:function(e){return e.$("vsb").get(0);}}}};});
sap.ui.predefine('sap/ui/table/designtime/Table.designtime',['sap/ui/table/utils/TableUtils'],function(T){"use strict";return{domRef:function(t){if(t._getRowMode().isA("sap.ui.table.rowmodes.AutoRowMode")){return t.$("sapUiTableCnt").get(0);}return t.getDomRef();},aggregations:{columns:{domRef:".sapUiTableCHA"},rows:{ignore:function(t){return T.isNoDataVisible(t);}},hScroll:{ignore:false,domRef:function(t){return t.$("hsb").get(0);}},vScroll:{ignore:false,domRef:function(t){return t.$("vsb").get(0);}}},scrollContainers:[{domRef:function(t){return t.$("sapUiTableCnt").get(0);},aggregations:["rows"]}]};});
sap.ui.predefine('sap/ui/table/designtime/library.designtime',[],function(){"use strict";return{};});
//# sourceMappingURL=library-preload.designtime.js.map