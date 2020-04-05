/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @typedef {object} EventListener
 */
sap.ui.define([
	"sap/ui/support/supportRules/WindowCommunicationBus",
	"sap/ui/support/supportRules/WCBConfig"
], function (CommunicationBus, CommunicationBusConfig) {
	"use strict";

	var oRecorderCommunicationBus;

	var RecorderCommunicationBus = CommunicationBus.extend("sap.ui.testrecorder.CommunicationBus", {
		constructor: function () {
			if (!oRecorderCommunicationBus) {
				var oConfig = new CommunicationBusConfig({
					modulePath: "sap/ui/test",
					receivingWindow: "testRecorder",
					uriParams: {
						origin: "sap-ui-testrecorder-origin",
						frameId: "sap-ui-testrecorder-frame-identifier"
					}
				});
				CommunicationBus.call(this, oConfig);
			} else {
				return oRecorderCommunicationBus;
			}
		}
	});

	oRecorderCommunicationBus = new RecorderCommunicationBus();

	return oRecorderCommunicationBus;
}, true);
