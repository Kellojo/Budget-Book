/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){'use strict';var R={validateVersion:function(v){if(!v||typeof v!=='string'){return false;}var a=/^\*$|^\-$|^\d\.\d\d$/;if(v.match(a)){return true;}return false;},validateRuleCollection:function(e,E){if(e&&Array.isArray(e)&&e.length){for(var i=0;i<e.length;i++){if(E.hasOwnProperty(e[i])){continue;}else{return false;}}return true;}return false;},validateId:function(i){var a=/^[a-z][a-zA-Z]+$/;if(!i||typeof i!=='string'){return false;}if(i.match(a)&&this.validateStringLength(i,6,50)){return true;}return false;},validateStringLength:function(s,m,M){return m<=s.length&&s.length<=M;}};return R;},false);
