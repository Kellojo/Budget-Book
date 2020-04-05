/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Element','./library',"sap/base/assert"],function(E,l,a){"use strict";var V=l.ValueState;var b={};var t=null;var e=function(){if(!t){t={};var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core");t[V.Error]=r.getText("VALUE_STATE_ERROR");t[V.Warning]=r.getText("VALUE_STATE_WARNING");t[V.Success]=r.getText("VALUE_STATE_SUCCESS");t[V.Information]=r.getText("VALUE_STATE_INFORMATION");}};b.enrichTooltip=function(o,T){a(o instanceof E,"oElement must be an Element");if(!T&&o.getTooltip()){return undefined;}var s=b.getAdditionalText(o);if(s){return(T?T+" - ":"")+s;}return T;};b.getAdditionalText=function(v){var s=null;if(v&&v.getValueState){s=v.getValueState();}else if(V[v]){s=v;}if(s&&(s!=V.None)){e();return t[s];}return null;};b.formatValueState=function(s){switch(s){case 1:return V.Warning;case 2:return V.Success;case 3:return V.Error;case 4:return V.Information;default:return V.None;}};return b;},true);
