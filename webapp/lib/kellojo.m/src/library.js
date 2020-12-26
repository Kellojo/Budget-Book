sap.ui.define([
	"sap/ui/core/Core",
	"sap/ui/core/library"
],function(Core, Library) {
	"use strict";

	sap.ui.getCore().initLibrary({
		name : "kellojo.m",
		dependencies : [
			"sap.ui.core"
		],
		types: [],
		interfaces: [],
		controls: [
            "kellojo.m.TableActions",
            "kellojo.m.Wrapper",
            "kellojo.m.LineChart",
            "kellojo.m.ColumnChart",
            "kellojo.m.CurrencyInput",
            "kellojo.m.Currency",
            "kellojo.m.Deleter",
            "kellojo.m.CameraCapture",
            "kellojo.m.NoData",
            "kellojo.m.SortTable",
            "kellojo.m.SortColumn"
        ],
		elements: [],
		version: "1.0.0"
	});

	return kellojo.m;

}, /* bExport= */ false);