/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/base/util/ObjectPath','sap/ui/dom/jquery/control'],function(q,O){"use strict";function f(c){return c.getUIArea().getInterface();}function u(){return sap.ui.getCore().getUIArea(this.id)!=null;}function a(){return sap.ui.getCore().getUIArea(this.id);}q.fn.root=function(r){if(r){sap.ui.getCore().setRoot(this.get(0),r);return this;}var c=this.control();if(c.length>0){return c.map(f);}var U=this.uiarea();if(U.length>0){return U;}this.each(function(){sap.ui.getCore().createUIArea(this);});return this;};q.fn.uiarea=function(i){var U=this.slice("[id]").filter(u).map(a).get();return typeof(i)==="number"?U[i]:U;};q.fn.sapui=function(c,i,C){return this.each(function(){var o=null;if(this){if(c.indexOf(".")==-1){c="sap.ui.commons."+c;}var b=O.get(c);if(b){if(typeof C=='object'&&typeof C.press=='function'){C.press=q.proxy(C.press,this);}o=new(b)(i,C);o.placeAt(this);}}});};return q;});
