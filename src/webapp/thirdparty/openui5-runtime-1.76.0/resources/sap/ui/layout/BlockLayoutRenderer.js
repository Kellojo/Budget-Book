/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library'],function(l){"use strict";var B=l.BlockRowColorSets;var a={};a.render=function(r,b){this.startLayout(r,b);this.addContent(r,b);this.endLayout(r);};a.startLayout=function(r,b){var c=b.getBackground();b.addStyleClass("sapUiBlockLayoutBackground"+c);r.write("<div");r.writeControlData(b);r.addClass("sapUiBlockLayout");if(b.getKeepFontSize()){r.addClass("sapUiBlockLayoutKeepFontSize");}r.writeStyles();r.writeClasses();r.write(">");};a.addContent=function(r,b){var c=b.getContent(),o=B,t=Object.keys(o).map(function(k){return o[k];}),n=t.length;c.forEach(function(d,i,R){var T=d.getRowColorSet()||t[i%n],C="sapUiBlockLayoutBackground"+T,p=(i&&R[i-1])||null;if(p&&p.hasStyleClass(C)){d.removeStyleClass(C);C+="Inverted";}if(C){d.addStyleClass(C);}r.renderControl(d);});};a.endLayout=function(r){r.write("</div>");};return a;},true);
