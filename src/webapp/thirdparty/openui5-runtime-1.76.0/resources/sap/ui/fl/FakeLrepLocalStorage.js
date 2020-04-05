/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/FakeLrepConnectorLocalStorage"],function(F){"use strict";return{deleteChanges:function(){return F.forTesting.synchronous.clearAll();}};},true);
