/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/changes/descriptor/DescriptorChangeHandlerRegistration"],function(D){"use strict";var A={applyChanges:function(m,a){var u=Object.assign({},m);a.forEach(function(c){var C=c.getChangeType();var o=D[C];if(o){u=o.applyChange(u,c);}});return u;}};return A;},true);
