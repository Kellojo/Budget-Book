/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseAddXml"],function(B){"use strict";var A={};A.applyChange=function(c,C,p){var o=c.getDefinition();var m={aggregationName:o.content.targetAggregation,index:o.content.index};B.applyChange(c,C,p,m);return true;};A.revertChange=B.revertChange;A.completeChangeContent=function(c,s){var C=c.getDefinition();if(!C.content){C.content={};}if(s.targetAggregation){C.content.targetAggregation=s.targetAggregation;}else{B._throwMissingAttributeError("targetAggregation");}if(s.index!==undefined){C.content.index=s.index;}else{B._throwMissingAttributeError("index");}B.completeChangeContent(c,s,C);};return A;},true);
