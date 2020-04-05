/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";function i(c){var p=c.sParentAggregationName,P=c.getParent();if(P&&p){var b=P.getBindingInfo(p);if(b&&c instanceof b.template.getMetadata().getClass()){return false;}else{return i(P);}}return true;}return i;});
