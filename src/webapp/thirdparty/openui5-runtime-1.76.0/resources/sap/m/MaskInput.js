/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./InputBase','./MaskEnabler','./MaskInputRenderer'],function(I,M,a){"use strict";var b=I.extend("sap.m.MaskInput",{metadata:{library:"sap.m",properties:{placeholderSymbol:{type:"string",group:"Misc",defaultValue:"_"},mask:{type:"string",group:"Misc",defaultValue:null}},aggregations:{rules:{type:"sap.m.MaskInputRule",multiple:true,singularName:"rule"}},dnd:{draggable:false,droppable:true}}});M.call(b.prototype);b.prototype._isMaskEnabled=function(){return true;};return b;});
