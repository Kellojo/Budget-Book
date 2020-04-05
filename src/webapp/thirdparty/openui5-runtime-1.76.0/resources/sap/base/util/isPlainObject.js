/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var c={};var h=c.hasOwnProperty;var t=c.toString;var T=h.toString;var O=T.call(Object);var i=function(o){
/*
		 * The code in this function is taken from jQuery 3.1.1 "jQuery.isPlainObject" and got modified.
		 *
		 * jQuery JavaScript Library v3.1.1
		 * http://jquery.com/
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 */
var p,C;if(!o||t.call(o)!=="[object Object]"){return false;}p=Object.getPrototypeOf(o);if(!p){return true;}C=h.call(p,"constructor")&&p.constructor;return typeof C==="function"&&T.call(C)===O;};return i;});
