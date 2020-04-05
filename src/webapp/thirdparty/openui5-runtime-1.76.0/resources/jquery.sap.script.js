/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/base/util/uid','sap/base/strings/hash','sap/base/util/array/uniqueSort','sap/base/util/deepEqual','sap/base/util/each','sap/base/util/array/diff','sap/base/util/JSTokenizer','sap/base/util/merge','sap/base/util/UriParameters'],function(q,u,h,a,d,e,b,J,m,U){"use strict";q.sap.uid=u;q.sap.hashCode=h;q.sap.unique=a;q.sap.equal=d;q.sap.each=e;q.sap.arraySymbolDiff=b;q.sap._createJSTokenizer=function(){return new J();};q.sap.parseJS=J.parseJS;q.sap.extend=function(){var c=arguments,f=false;if(typeof arguments[0]==="boolean"){f=arguments[0];c=Array.prototype.slice.call(arguments,1);}if(f){return m.apply(this,c);}else{
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
var g,n,o,t=arguments[0]||{},i=1,l=arguments.length;if(typeof t!=="object"&&typeof t!=="function"){t={};}for(;i<l;i++){o=arguments[i];for(n in o){g=o[n];if(t===g){continue;}t[n]=g;}}return t;}};q.sap.getUriParameters=function getUriParameters(s){return U.fromURL(s||window.location.href);};q.sap.delayedCall=function delayedCall(D,o,c,p){return setTimeout(function(){if(q.type(c)=="string"){c=o[c];}c.apply(o,p||[]);},D);};q.sap.clearDelayedCall=function clearDelayedCall(D){clearTimeout(D);return this;};q.sap.intervalCall=function intervalCall(i,o,c,p){return setInterval(function(){if(q.type(c)=="string"){c=o[c];}c.apply(o,p||[]);},i);};q.sap.clearIntervalCall=function clearIntervalCall(i){clearInterval(i);return this;};q.sap.forIn=e;q.sap.arrayDiff=function(o,n,c,f){c=c||function(v,V){return d(v,V);};var O=[];var N=[];var M=[];for(var i=0;i<n.length;i++){var g=n[i];var F=0;var t;if(f&&c(o[i],g)){F=1;t=i;}else{for(var j=0;j<o.length;j++){if(c(o[j],g)){F++;t=j;if(f||F>1){break;}}}}if(F==1){var k={oldIndex:t,newIndex:i};if(M[t]){delete O[t];delete N[M[t].newIndex];}else{N[i]={data:n[i],row:t};O[t]={data:o[t],row:i};M[t]=k;}}}for(var i=0;i<n.length-1;i++){if(N[i]&&!N[i+1]&&N[i].row+1<o.length&&!O[N[i].row+1]&&c(o[N[i].row+1],n[i+1])){N[i+1]={data:n[i+1],row:N[i].row+1};O[N[i].row+1]={data:O[N[i].row+1],row:i+1};}}for(var i=n.length-1;i>0;i--){if(N[i]&&!N[i-1]&&N[i].row>0&&!O[N[i].row-1]&&c(o[N[i].row-1],n[i-1])){N[i-1]={data:n[i-1],row:N[i].row-1};O[N[i].row-1]={data:O[N[i].row-1],row:i-1};}}var D=[];if(n.length==0){for(var i=0;i<o.length;i++){D.push({index:0,type:'delete'});}}else{var l=0;if(!O[0]){for(var i=0;i<o.length&&!O[i];i++){D.push({index:0,type:'delete'});l=i+1;}}for(var i=0;i<n.length;i++){if(!N[i]||N[i].row>l){D.push({index:i,type:'insert'});}else{l=N[i].row+1;for(var j=N[i].row+1;j<o.length&&(!O[j]||O[j].row<i);j++){D.push({index:i+1,type:'delete'});l=j+1;}}}}return D;};return q;});
