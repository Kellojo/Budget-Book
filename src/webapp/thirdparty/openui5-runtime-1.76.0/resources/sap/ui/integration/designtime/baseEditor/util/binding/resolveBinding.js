/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/util/binding/ObjectBinding"],function(O){"use strict";return function(j,m,c,i){var o=new O();c=c||{};i=i||[];i.forEach(function(p){o.addToIgnore(p);});Object.keys(m).forEach(function(k){o.setModel(m[k],k===""?undefined:k);});Object.keys(c).forEach(function(k){o.setBindingContext(c[k],k===""?undefined:k);});o.setObject(j);var r=o.getObject();o.destroy();return r;};});
