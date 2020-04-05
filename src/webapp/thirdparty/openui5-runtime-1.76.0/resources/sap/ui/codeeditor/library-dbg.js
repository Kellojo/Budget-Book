/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Initialization Code and shared classes of library sap.ui.codeeditor.
 */
sap.ui.define(['sap/ui/core/Core', 'sap/ui/core/library'],
	function(Core) {
	"use strict";


	/**
	 * UI5 library: sap.ui.codeeditor.
	 *
	 * @namespace
	 * @name sap.ui.codeeditor
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "sap.ui.codeeditor",
		dependencies : ["sap.ui.core"],
		types: [],
		interfaces: [],
		controls: [
			"sap.ui.codeeditor.CodeEditor"
		],
		elements: [],
		noLibraryCSS: false,
		version: "1.76.0"
	});


	return sap.ui.codeeditor;

});
