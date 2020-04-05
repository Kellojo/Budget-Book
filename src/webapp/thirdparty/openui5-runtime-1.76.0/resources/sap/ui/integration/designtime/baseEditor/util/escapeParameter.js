/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/isPlainObject"],function(i){"use strict";return function(a,p){var A=Array.from(a);var s=typeof A[0]!=="string"&&A[0]!==undefined?0:1;if(i(A[s])){var S=Object.assign({},A[s]);if(i(S[p])){S[p]=Object.assign({},S[p],{ui5object:true});A[s]=S;}}return A;};});
