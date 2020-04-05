/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Sorter',"sap/base/util/each"],function(S,e){"use strict";var c={};c.apply=function(d,s,g,G){var t=this,f=[],C=[],v,o;if(!s||s.length==0){return d;}for(var j=0;j<s.length;j++){o=s[j];C[j]=o.fnCompare||S.defaultComparator;e(d,function(i,r){v=g(r,o.sPath);if(typeof v=="string"){v=v.toLocaleUpperCase();}if(!f[j]){f[j]=[];}if(G){r=G(r);}f[j][r]=v;});}d.sort(function(a,b){if(G){a=G(a);b=G(b);}var h=f[0][a],i=f[0][b];return t._applySortCompare(s,a,b,h,i,f,C,0);});return d;};c._applySortCompare=function(s,a,b,v,d,f,C,D){var o=s[D],g=C[D],r;r=g(v,d);if(o.bDescending){r=-r;}if(r==0&&s[D+1]){v=f[D+1][a];d=f[D+1][b];r=this._applySortCompare(s,a,b,v,d,f,C,D+1);}return r;};return c;});
