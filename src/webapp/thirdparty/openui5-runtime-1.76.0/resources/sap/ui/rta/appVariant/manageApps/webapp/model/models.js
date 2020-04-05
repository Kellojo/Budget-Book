/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/json/JSONModel"],function(J){"use strict";return{createModel:function(d){var m=new J(d);m.setDefaultBindingMode("OneWay");return m;}};});
