/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";return function(){var d=Object.getOwnPropertyDescriptor(Document.prototype,'activeElement');if(!d){L.warning("activeElementFix: Unable to retrieve property descriptor for 'Document.prototype.activeElement'");return;}var g=d.get;if(!g){L.warning("activeElementFix: Unable to retrieve getter of property 'Document.prototype.activeElement'");return;}Object.defineProperty(Document.prototype,'activeElement',{configurable:true,enumerable:true,get:function(){var a=null;try{a=g.call(this);}catch(e){}return(a&&a.nodeType)?a:document.body;}});};});
