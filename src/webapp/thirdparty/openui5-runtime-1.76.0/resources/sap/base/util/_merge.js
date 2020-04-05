/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./isPlainObject"],function(a){"use strict";var t=Object.create(null);var m=function(){
/*
		 * The code in this function is taken from jQuery 2.2.3 "jQuery.extend" and got modified.
		 *
		 * jQuery JavaScript Library v2.2.3
		 * http://jquery.com/
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 */
var s,c,b,n,o,d,e=arguments[2]||{},i=3,l=arguments.length,f=arguments[0]||false,g=arguments[1]?undefined:t;if(typeof e!=="object"&&typeof e!=="function"){e={};}for(;i<l;i++){if((o=arguments[i])!=null){for(n in o){s=e[n];b=o[n];if(n==="__proto__"||e===b){continue;}if(f&&b&&(a(b)||(c=Array.isArray(b)))){if(c){c=false;d=s&&Array.isArray(s)?s:[];}else{d=s&&a(s)?s:{};}e[n]=m(f,arguments[1],d,b);}else if(b!==g){e[n]=b;}}}}return e;};return m;});
