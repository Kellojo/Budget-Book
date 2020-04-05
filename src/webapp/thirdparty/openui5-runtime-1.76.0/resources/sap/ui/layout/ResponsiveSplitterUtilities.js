/*!
* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define([],function(){"use strict";var R={};R.visitPanes=function(p,c){var P,o;if(!p){return;}P=p.getPanes();for(var i=0;i<P.length;i++){o=P[i];if(o instanceof sap.ui.layout.SplitPane){c(o);}else{R.visitPanes(o,c);}}};R.splitterInterval=function(f,t,p){this.iFrom=f;this.iTo=t;this.iPagesCount=0;var m=[],P=[m];R.visitPanes(p,function(a){var w=a.getRequiredParentWidth();var b={demandPane:a.getDemandPane()};if(w<=f){m.push(b);}else{P.push(b);}});if(m.length==0){P.splice(0,1);}this.iPagesCount=P.length;this.aPages=P;};return R;},true);
