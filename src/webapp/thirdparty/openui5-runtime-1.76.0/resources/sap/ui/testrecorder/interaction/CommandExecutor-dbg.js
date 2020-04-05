/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/testrecorder/interaction/Commands",
	"sap/ui/testrecorder/interaction/Highlight",
	"sap/ui/testrecorder/interaction/Press",
	"sap/ui/testrecorder/interaction/EnterText"
], function (Commands, Highlight, Press, EnterText) {
	"use strict";

	return {
		execute: function (sCommand, mData) {
			switch (sCommand) {
				case "HIGHLIGHT":
					Highlight.execute(mData.domElementId);
					break;
				case "PRESS":
					Press.execute(mData.domElementId);
					break;
				case "ENTER_TEXT":
					EnterText.execute(mData.domElementId);
					break;
				default:
					throw new Error("Command " + sCommand + " is not known! Known commands are: " + Object.keys(Commands));
			}
		}
	};
});
