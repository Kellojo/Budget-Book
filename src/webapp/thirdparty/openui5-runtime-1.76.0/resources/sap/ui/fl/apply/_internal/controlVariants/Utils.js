/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var V={DEFAULT_AUTHOR:"SAP",VARIANT_TECHNICAL_PARAMETER:"sap-ui-fl-control-variant-id",compareVariants:function(v,o){if(v.content.content.title.toLowerCase()<o.content.content.title.toLowerCase()){return-1;}else if(v.content.content.title.toLowerCase()>o.content.content.title.toLowerCase()){return 1;}return 0;},getIndexToSortVariant:function(v,o){var s=v.length;v.some(function(e,i){if(V.compareVariants(o,e)<0){s=i;return true;}});return s;}};return V;});
