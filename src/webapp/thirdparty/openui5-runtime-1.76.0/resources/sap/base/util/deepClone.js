/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./isPlainObject"],function(a){"use strict";var d=function(s,m){if(!m){m=10;}return c(s,0,m);};function c(s,f,m){if(f>m){throw new TypeError("The structure depth of the source exceeds the maximum depth ("+m+")");}if(s==null){return s;}else if(s instanceof Date){return new Date(s);}else if(Array.isArray(s)){return b(s,f,m);}else if(typeof s==="object"){return e(s,f,m);}else{return s;}}function b(s,f,m){var C=[];for(var i=0;i<s.length;i++){C.push(c(s[i],f+1,m));}return C;}function e(s,f,m){if(!a(s)){throw new TypeError("Cloning is only supported for plain objects");}var C={};for(var k in s){if(k==="__proto__"){continue;}C[k]=c(s[k],f+1,m);}return C;}return d;});
