/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/URI',"sap/ui/thirdparty/jquery"],function(U,q){"use strict";var u=new U().search(true);var f=["false",undefined].indexOf(u.opaFrameIEStackTrace)<0;function r(){var e=new Error();var s="No stack trace available";if(e.stack){s=e.stack;}else if(f){try{throw e;}catch(c){s=c.stack;}}return s.replace(/^Error\s/,"");}function a(c){return c.toString().replace(/\"/g,'\'');}function b(A){try{return Array.prototype.map.call(A,c).join("; ");}catch(e){return"'"+A+"'";}function c(d){if(q.isFunction(d)){return"'"+a(d)+"'";}if(q.isArray(d)){var v=Array.prototype.map.call(d,c);return"["+v.join(", ")+"]";}if(q.isPlainObject(d)){return JSON.stringify(d);}return"'"+d.toString()+"'";}}return{resolveStackTrace:r,functionToString:a,argumentsToString:b};},true);
