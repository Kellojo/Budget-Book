/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/base/ManagedObjectMetadata"],function(_,M){"use strict";var a=_.extend("sap.ui.test.selectors._ViewID",{_generate:function(c){var C=c.getId();var v=this._getControlView(c);var r;if(v){var V=v.getId();var s=v.getViewName();var b;var d=V+"--";var i=C.indexOf(d);if(i>-1){b=C.substring(i+d.length);if(b.indexOf("-")===-1&&!b.match(/[0-9]$/)){this._oLogger.debug("Control with ID "+C+" has view-relative ID "+b);r={id:b,skipBasic:true};if(M.isGeneratedId(V)){this._oLogger.debug("Control "+c+" has view with viewName "+s);r.viewName=s;}else{this._oLogger.debug("Control "+c+" has view with stable ID "+V);r.viewId=V;}}}}else{this._oLogger.debug("Control "+c+" does not belong to a view");}return r;}});return a;});
