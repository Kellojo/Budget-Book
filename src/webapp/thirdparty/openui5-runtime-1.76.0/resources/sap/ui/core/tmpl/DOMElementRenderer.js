/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/encodeXML"],function(e){"use strict";var D={};D.render=function(r,E){r.write("<");r.writeEscaped(E.getTag());r.writeControlData(E);E.getAttributes().forEach(function(A){var n=A.getName().toLowerCase();if(n==="class"){var c=A.getValue().split(" ");c.forEach(function(C){var C=C.trim();if(C){r.addClass(e(C));}});}else if(n==="style"){var s=A.getValue().split(";");s.forEach(function(S){var i=S.indexOf(":");if(i!=-1){var k=S.substring(0,i).trim();var v=S.substring(i+1).trim();r.addStyle(e(k),e(v));}});}else{r.writeAttributeEscaped(e(A.getName()),A.getValue());}});r.writeClasses();r.writeStyles();var a=E.getElements(),h=!!E.getText()||a.length>0;if(!h){r.write("/>");}else{r.write(">");if(E.getText()){r.writeEscaped(E.getText());}a.forEach(function(i,c){r.renderControl(c);});r.write("</");r.writeEscaped(E.getTag());r.write(">");}};return D;},true);
