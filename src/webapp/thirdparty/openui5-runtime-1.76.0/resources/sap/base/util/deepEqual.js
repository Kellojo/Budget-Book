/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";var e=function(a,b,m,c,d){if(typeof m=="boolean"){c=m;m=undefined;}if(!d){d=0;}if(!m){m=10;}if(d>m){L.warning("deepEqual comparison exceeded maximum recursion depth of "+m+". Treating values as unequal");return false;}if(a===b){return true;}var I=(typeof a==="number"&&typeof b==="number"&&isNaN(a)&&isNaN(b));if(I){return true;}if(Array.isArray(a)&&Array.isArray(b)){if(!c&&a.length!==b.length){return false;}if(a.length>b.length){return false;}for(var i=0;i<a.length;i++){if(!e(a[i],b[i],m,c,d+1)){return false;}}return true;}if(typeof a=="object"&&typeof b=="object"){if(!a||!b){return false;}if(a.constructor!==b.constructor){return false;}if(!c&&Object.keys(a).length!==Object.keys(b).length){return false;}if(a instanceof Node){return a.isEqualNode(b);}if(a instanceof Date){return a.valueOf()===b.valueOf();}for(var i in a){if(!e(a[i],b[i],m,c,d+1)){return false;}}return true;}return false;};return e;});
