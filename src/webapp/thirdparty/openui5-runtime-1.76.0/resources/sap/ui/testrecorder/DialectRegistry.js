/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/testrecorder/Dialects"],function(B,D){"use strict";var a=D.UIVERI5;var d=null;var b=B.extend("sap.ui.testrecorder.DialectRegistry",{constructor:function(){if(!d){Object.apply(this,arguments);this.setActiveDialect(a);}else{return d;}}});b.prototype.getActiveDialect=function(){return this._sDialect;};b.prototype.setActiveDialect=function(s){for(var k in D){if(s===D[k]){this._sDialect=s;}}};d=new b();return d;});
