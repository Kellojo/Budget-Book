/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/assert'],function(a){"use strict";function g(){var r=document.documentElement;if(!r){return 16;}return parseFloat(window.getComputedStyle(r).getPropertyValue("font-size"));}var R={fromPx:function(p){a(((typeof p==="string")&&(p!=="")&&!isNaN(parseFloat(p))&&(typeof parseFloat(p)==="number"))||((typeof p==="number")&&!isNaN(p)),'Rem.fromPx: either the "vPx" parameter must be an integer, or a string e.g.: "16px"');return parseFloat(p)/g();},toPx:function(r){a(((typeof r==="string")&&(r!=="")&&!isNaN(parseFloat(r))&&(typeof parseFloat(r)==="number"))||((typeof r==="number")&&!isNaN(r)),'Rem.toPx: either the "vRem" parameter must be an integer, or a string e.g.: "1rem"');return parseFloat(r)*g();}};return R;});
