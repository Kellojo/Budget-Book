/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Element','./library',"sap/base/assert"],function(E,l,a){"use strict";var I=l.IndicationColor;var b={};var t=null;var e=function(){if(!t){t={};var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core");t[I.Indication01]=r.getText("INDICATION_STATE_INDICATION01");t[I.Indication02]=r.getText("INDICATION_STATE_INDICATION02");t[I.Indication03]=r.getText("INDICATION_STATE_INDICATION03");t[I.Indication04]=r.getText("INDICATION_STATE_INDICATION04");t[I.Indication05]=r.getText("INDICATION_STATE_INDICATION05");t[I.Indication06]=r.getText("INDICATION_STATE_INDICATION06");t[I.Indication07]=r.getText("INDICATION_STATE_INDICATION07");t[I.Indication08]=r.getText("INDICATION_STATE_INDICATION08");}};b.getAdditionalText=function(v){var i=null;if(v&&v.getValueState){i=v.getIndicationColor();}else if(I[v]){i=v;}if(i){e();return t[i];}return null;};return b;},true);
