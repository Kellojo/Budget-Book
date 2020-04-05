/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Locale",'sap/base/util/isPlainObject',"sap/base/Log"],function(L,i,a){"use strict";var U={};U.processFormatArguments=function(f,l){var F=i(f)?f:{},o=typeof f==="string"?new L(f):(l&&new L(l));return{formatOptions:F,locale:o};};var J=1,b=2,c=3;U.parseJsonDateTime=function(d){var r=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/,j;if(typeof d==="string"){j=r.exec(d);}if(j){var R=new Date(parseInt(j[J]));if(j[b]){var m=parseInt(j[c]);if(j[b]==="-"){m=-m;}var C=R.getUTCMinutes();R.setUTCMinutes(C-m);}if(isNaN(R.valueOf())){a.error("Invalid JSON Date format - "+d);}else{d=R;}}return d;};return U;});
