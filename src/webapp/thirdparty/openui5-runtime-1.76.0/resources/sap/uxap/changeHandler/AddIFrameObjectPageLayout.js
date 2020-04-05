/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils","sap/base/Log","sap/ui/fl/changeHandler/AddIFrame","sap/ui/fl/changeHandler/common/getTargetAggregationIndex","sap/ui/fl/changeHandler/common/createIFrame"],function(U,L,B,g,c){"use strict";var A=Object.assign({},B);A.applyChange=function(C,o,p){var m=p.modifier;var a=C.getDefinition();var s=a.content.targetAggregation;if(s!=="sections"){return B.applyChange(C,o,p);}var v=p.view;var b=p.appComponent;var d=a.content.selector;var D=sap.ui.getCore().getLibraryResourceBundle("sap.uxap").getText("SECTION_TITLE_FOR_IFRAME");var O=m.createControl("sap.uxap.ObjectPageSection",b,v,d,{title:D},false);var e=Object.create(d);e.id+="-subSection";var f=m.createControl("sap.uxap.ObjectPageSubSection",b,v,e,{title:D},false);m.insertAggregation(O,"subSections",f,0,v);var i=Object.create(d);i.id+="-iframe";var I=c(C,p,i);m.insertAggregation(f,"blocks",I,0,v);var h=g(C,o,p);m.insertAggregation(o,"sections",O,h,v);C.setRevertData([m.getId(O)]);};return A;},true);
