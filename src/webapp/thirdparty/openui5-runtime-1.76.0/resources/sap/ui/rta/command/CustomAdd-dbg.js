/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"], function(FlexCommand) {
	"use strict";

	/**
	 * CustomAdd Command
	 *
	 * @class
	 * @extends sap.ui.rta.command.FlexCommand
	 * @author SAP SE
	 * @version 1.76.0
	 * @constructor
	 * @private
	 * @since 1.62
	 * @alias sap.ui.rta.command.CustomAdd
	 * @experimental Since 1.62. This class is experimental and provides only limited functionality. Also the API might be changed in future.
	 */
	var CustomAdd = FlexCommand.extend("sap.ui.rta.command.CustomAdd", {
		metadata : {
			library : "sap.ui.rta",
			properties : {
				index : {
					type: "int",
					group: "content"
				},
				addElementInfo: {
					type: "object",
					group: "content"
				},
				aggregationName: {
					type: "string",
					group: "content"
				},
				customItemId: {
					type: "string",
					group: "content"
				}
			}
		}
	});

	return CustomAdd;
});
