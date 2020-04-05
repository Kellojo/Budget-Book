/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/test/_OpaLogger"],function(E,_){"use strict";var h=_.getLogger("sap.ui.test.autowaiter._navigationContainerWaiter#hasPending");function a(){var n=sap.ui.require("sap/m/NavContainer");if(!n){return false;}function i(c){return c instanceof n;}return E.registry.filter(i).some(function(N){if(N._bNavigating){h.debug("The NavContainer "+N+" is currently navigating");}return N._bNavigating;});}return{hasPending:a};});
