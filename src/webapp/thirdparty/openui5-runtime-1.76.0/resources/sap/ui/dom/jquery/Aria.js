/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";function a(A,v,p){var s=this.attr(A);if(!s){return this.attr(A,v);}var b=s.split(" ");if(b.indexOf(v)==-1){p?b.unshift(v):b.push(v);this.attr(A,b.join(" "));}return this;}function r(A,v){var s=this.attr(A)||"",b=s.split(" "),i=b.indexOf(v);if(i==-1){return this;}b.splice(i,1);if(b.length){this.attr(A,b.join(" "));}else{this.removeAttr(A);}return this;}q.fn.addAriaLabelledBy=function(i,p){return a.call(this,"aria-labelledby",i,p);};q.fn.removeAriaLabelledBy=function(i){return r.call(this,"aria-labelledby",i);};q.fn.addAriaDescribedBy=function(i,p){return a.call(this,"aria-describedby",i,p);};q.fn.removeAriaDescribedBy=function(i){return r.call(this,"aria-describedby",i);};return q;});
