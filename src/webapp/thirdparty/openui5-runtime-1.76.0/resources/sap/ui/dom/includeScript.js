/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(a){"use strict";function _(u,A,l,e){var s=document.createElement("script");s.src=u;s.type="text/javascript";if(A&&typeof A==="object"){for(var k in A){if(A[k]!=null){s.setAttribute(k,A[k]);}}}function o(){if(typeof l==="function"){l();}s.removeEventListener('load',o);s.removeEventListener('error',b);}function b(){if(typeof e==="function"){e();}s.removeEventListener('load',o);s.removeEventListener('error',b);}if(typeof l==="function"||typeof e==="function"){s.addEventListener('load',o);s.addEventListener('error',b);}var I=A&&A.id,O=I&&document.getElementById(I);if(O&&O.tagName==="SCRIPT"){O.parentNode.removeChild(O);}document.head.appendChild(s);}var i=function(u,I,l,e){var A;if(typeof u==="string"){A=typeof I==="string"?{id:I}:I;_(u,A,l,e);}else{a(typeof u==='object'&&u.url,"vUrl must be an object and requires a URL");A=Object.assign({},u.attributes);if(u.id){A.id=u.id;}return new Promise(function(r,R){_(u.url,A,r,R);});}};return i;});
