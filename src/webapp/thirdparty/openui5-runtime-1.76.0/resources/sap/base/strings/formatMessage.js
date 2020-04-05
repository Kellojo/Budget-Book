/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(a){"use strict";var r=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g;var f=function(p,v){a(typeof p==="string"||p instanceof String,"pattern must be string");if(arguments.length>2||(v!=null&&!Array.isArray(v))){v=Array.prototype.slice.call(arguments,1);}v=v||[];return p.replace(r,function($,b,c,d,o){if(b){return"'";}else if(c){return c.replace(/''/g,"'");}else if(d){return String(v[parseInt(d)]);}throw new Error("formatMessage: pattern syntax error at pos. "+o);});};return f;});
