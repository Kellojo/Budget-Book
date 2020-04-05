/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./InputBaseRenderer'],function(R,I){"use strict";var D=R.extend(I);D.apiVersion=2;D.writeInnerValue=function(r,d){if(d._bValid){r.attr("value",d._formatValue(d.getDateValue()));}else{r.attr("value",d.getValue());}};D.writeInnerAttributes=function(r,d){r.attr("type","text");if(d._bMobile){r.attr("readonly","readonly");}};D.getAriaRole=function(d){return"combobox";};D.getDescribedByAnnouncement=function(d){var b=I.getDescribedByAnnouncement.apply(this,arguments);return sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("DATEPICKER_DATE_TYPE")+" "+b;};D.getAccessibilityState=function(d){var a=I.getAccessibilityState.apply(this,arguments);a["autocomplete"]="none";a["haspopup"]=true;a["expanded"]=false;a["disabled"]=null;if(d._bMobile&&d.getEnabled()&&d.getEditable()){a["readonly"]=false;}return a;};return D;},true);
