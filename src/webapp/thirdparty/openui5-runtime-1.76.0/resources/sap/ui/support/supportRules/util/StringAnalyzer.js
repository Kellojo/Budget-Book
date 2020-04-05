/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={calculateLevenshteinDistance:function(w,W){var l=w.length;var L=W.length;if(l===0){return L;}if(L===0){return l;}var m=new Array(L+1);var i;for(i=0;i<=L;i++){m[i]=new Array(l+1);m[i][0]=i;}var I;for(I=0;I<=l;I++){m[0][I]=I;}var a=0;var b;var c;for(b=1;b<=L;b++){for(c=1;c<=l;c++){var d=m[b-1][c]+1;var e=m[b][c-1]+1;var s=m[b-1][c-1];if(w[c]!==W[b]){s+=1;}a=Math.min(d,e,s);m[b][c]=a;}}return a;}};return S;},false);
