/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/fl/support/apps/uiFlexibilityDiagnostics/helper/Extractor"],function(C,E){"use strict";return C.extend("sap.ui.fl.support.diagnostics.Flexibility",{refreshApps:function(){this.getView().getViewData().plugin.onRefresh();},extractAppData:function(e){var s=e.getSource();var b=s.getBindingContext("flexApps");var d=b.getProperty("data");E.createDownloadFile(d);}});});
