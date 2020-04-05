/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(q){"use strict";function n(s,S){S=S||" ";return s.replace(/[\-_]/g," ").trim().replace(/(?!\s)\W/g,"").replace(/\s+/g,S);}var d={normalization:{titleCase:function(S){d._testNormalizationInput(S,"titleCase");return n(S).replace(/\w*/g,function(s){return s.charAt(0).toUpperCase()+s.substr(1).toLowerCase();});},pascalCase:function(s){d._testNormalizationInput(s,"pascalCase");return d.normalization.titleCase(s).split(/\s/).join("");},camelCase:function(S){d._testNormalizationInput(S,"camelCase");return d.normalization.pascalCase(S).replace(/^(\w)/,function(s){return s.toLowerCase();});},hyphenated:function(s){d._testNormalizationInput(s,"hyphenated");return n(s,"-").toLowerCase();},none:function(s){d._testNormalizationInput(s,"none");return s;}},toTable:function(D,N){this._testArrayInput(D,"toTable");var f=this._getNormalizationFunction(N,"toTable");var k=D[0].map(f);return D.slice(1).map(function(r){var g={};for(var i=0;i<k.length;++i){var c=k[i];if(g.hasOwnProperty(c)===false){g[c]=r[i];}else{throw new Error("dataTableUtils.toTable: data table contains duplicate header: | "+c+" |");}}return g;});},toObject:function(D,N){this._testArrayInput(D,"toObject");var f=this._getNormalizationFunction(N,"toObject");this._detectDuplicateKeys(D,f);var r={};D.forEach(function(R){var k=f(R[0]);var v=R.slice(1);if(v.length===1){v=v[0];}else{v=v.reduceRight(function(i,j){var o={};o[f(j)]=i;return o;});}if(!r.hasOwnProperty(k)){r[k]=v;}else{q.extend(r[k],v);}});return r;},_detectDuplicateKeys:function(D,N){var r={};D.forEach(function(R){var k=R.slice(0,(R.length-1)).map(N);for(var i=k.length;i>0;--i){var K=k.slice(0,i).join('-');if(!r[K]){r[K]=R;}else{var o=r[K];var O=o.slice(0,(o.length-1)).map(N);if((o.length!==R.length)||(O.every(function(a,b){return k[b]===a;}))){var s="| "+o.join(" | ")+" |";throw new Error("dataTableUtils.toObject: data table row is being overwritten: "+s);}}}});},_getNormalizationFunction:function(f,F){var e="dataTableUtils."+F+": parameter 'vNorm' must be either a Function or a String with the value 'titleCase', 'pascalCase', 'camelCase', 'hyphenated' or 'none'";switch(q.type(f)){case"string":var N=this.normalization[f];if(N===undefined){throw new Error(e);}return N;case"function":return f;case"undefined":case"null":return this.normalization.none;default:throw new Error(e);}},_testNormalizationInput:function(s,N){if(q.type(s)!=="string"){throw new Error("dataTableUtils.normalization."+N+": parameter 'sString' must be a valid string");}},_testArrayInput:function(A,f){var e="dataTableUtils."+f+": parameter 'aData' must be an Array of Array of Strings";if(q.type(A)!=="array"){throw new Error(e);}if(!A.every(function(a){return(q.type(a)==="array")&&(a.every(function(s){return(q.type(s)==="string");}));})){throw new Error(e);}}};return d;},true);
