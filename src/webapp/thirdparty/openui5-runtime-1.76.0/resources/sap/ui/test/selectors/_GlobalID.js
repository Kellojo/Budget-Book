/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/base/ManagedObjectMetadata"],function(_,M){"use strict";var a=_.extend("sap.ui.test.selectors._GlobalID",{_generate:function(c){var C=c.getId();if(M.isGeneratedId(C)){this._oLogger.debug("Control ID "+C+" is generated");}else{this._oLogger.debug("Control ID "+C+" is not generated");return{id:C,skipBasic:true};}}});return a;});
