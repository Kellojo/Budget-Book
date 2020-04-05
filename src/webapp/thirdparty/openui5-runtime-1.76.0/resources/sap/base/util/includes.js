/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/values"],function(v){"use strict";function e(a,b){return a===b||(a!==a&&b!==b);}var I=function(c,V,f){if(typeof f!=='number'){f=0;}if(Array.isArray(c)){if(typeof c.includes==='function'){return c.includes(V,f);}f=f<0?f+c.length:f;f=f<0?0:f;for(var i=f;i<c.length;i++){if(e(c[i],V)){return true;}}return false;}else if(typeof c==='string'){f=f<0?c.length+f:f;if(typeof c.includes==='function'){return c.includes(V,f);}return c.indexOf(V,f)!==-1;}else{return I(v(c),V,f);}};return I;});
