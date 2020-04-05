/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var G={};G._mInstanceStyles={};G.setItemHeight=function(i,m){var c="#"+i+".sapUiLayoutCSSGridBoxLayoutFlattenHeight ul "+".sapMLIB:not(.sapMGHLI),.sapUiDnDGridIndicator"+"{ height: "+m+"px; }";if(this._mInstanceStyles[i]!==c){this._mInstanceStyles[i]=c;this._reapplyStyles();}};G._getStyleHelper=function(){var h=document.getElementById("sapUiLayoutCSSGridGridBoxLayoutStyleHelper");if(!h){h=document.createElement("style");h.id="sapUiLayoutCSSGridGridBoxLayoutStyleHelper";h.type="text/css";document.getElementsByTagName("head")[0].appendChild(h);}return h;};G._reapplyStyles=function(){var s="",h=this._getStyleHelper();for(var k in this._mInstanceStyles){s+=this._mInstanceStyles[k]+"\n";}h.innerHTML=s;};return G;});
