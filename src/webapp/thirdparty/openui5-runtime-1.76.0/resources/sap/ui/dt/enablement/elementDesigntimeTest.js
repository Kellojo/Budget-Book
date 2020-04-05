/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/enablement/report/QUnitReport","sap/ui/dt/enablement/ElementEnablementTest"],function(Q,E){"use strict";var e=function(p){var o=new E(p);return o.run().then(function(d){var q=new Q({data:d});o.destroy();q.destroy();});};return e;});
