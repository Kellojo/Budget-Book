/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/LayoutData","sap/ui/layout/library"],function(L){"use strict";var R=L.extend("sap.ui.layout.cssgrid.ResponsiveColumnItemLayoutData",{metadata:{library:"sap.ui.layout",interfaces:["sap.ui.layout.cssgrid.IGridItemLayoutData"],properties:{columns:{type:"int",group:"Misc",defaultValue:1},rows:{type:"int",group:"Misc",defaultValue:1}}}});R.prototype.setItemStyles=function(i){i.style.setProperty('grid-row','span '+this.getRows());i.style.setProperty('grid-column','span '+this.getColumns());};return R;});
