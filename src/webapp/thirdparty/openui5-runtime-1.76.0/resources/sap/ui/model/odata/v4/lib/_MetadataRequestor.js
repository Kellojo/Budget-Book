/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_Helper","./_V2MetadataConverter","./_V4MetadataConverter","sap/base/Log","sap/ui/thirdparty/jquery"],function(_,a,b,L,q){"use strict";return{create:function(h,o,Q){var u={},s=_.buildQuery(Q);return{read:function(U,A,p){var P;function c(j){var C=o==="4.0"||A?b:a,d=j.$XML;delete j.$XML;return Object.assign(new C().convertXMLMetadata(d,U),j);}if(U in u){if(p){throw new Error("Must not prefetch twice: "+U);}P=u[U].then(c);delete u[U];}else{P=new Promise(function(r,R){q.ajax(A?U:U+s,{method:"GET",headers:h}).then(function(d,t,j){var D=j.getResponseHeader("Date"),e=j.getResponseHeader("ETag"),J={$XML:d},l=j.getResponseHeader("Last-Modified");if(D){J.$Date=D;}if(e){J.$ETag=e;}if(l){J.$LastModified=l;}r(J);},function(j,t,e){var E=_.createError(j,"Could not load metadata");L.error("GET "+U,E.message,"sap.ui.model.odata.v4.lib._MetadataRequestor");R(E);});});if(p){u[U]=P;}else{P=P.then(c);}}return P;}};}};},false);
