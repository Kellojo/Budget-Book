/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/model/ClientTreeBinding',"sap/base/util/each"],function(C,e){"use strict";var X=C.extend("sap.ui.model.xml.XMLTreeBinding");X.prototype.getNodeContexts=function(c,s,l){if(!s){s=0;}if(!l){l=this.oModel.iSizeLimit;}var a=c.getPath();if(!a.endsWith("/")){a=a+"/";}if(!a.startsWith("/")){a="/"+a;}var b=[],n={},t=this,N=this.oModel._getObject(c.getPath()),d,o;e(N[0].childNodes,function(f,g){if(g.nodeType==1){if(n[g.nodeName]==undefined){n[g.nodeName]=0;}else{n[g.nodeName]++;}d=a+g.nodeName+"/"+n[g.nodeName];o=t.oModel.getContext(d);if(t.oCombinedFilter&&!t.bIsFiltering){if(t.filterInfo.aFilteredContexts&&t.filterInfo.aFilteredContexts.indexOf(o)!=-1){b.push(o);}}else{b.push(o);}}});this._applySorter(b);this._setLengthCache(a,b.length);return b.slice(s,s+l);};return X;});
