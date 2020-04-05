/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher'],function(M){"use strict";return M.extend("sap.ui.test.matchers.Visible",{isMatching:function(c){var d=c.$();var v=false;if(d.length){if(d.is(":hidden")||d.css("visibility")==="hidden"){this._oLogger.debug("Control '"+c+"' is not visible");}else{v=true;}}else{this._oLogger.debug("Control '"+c+"'' is not rendered");}return v;}});});
