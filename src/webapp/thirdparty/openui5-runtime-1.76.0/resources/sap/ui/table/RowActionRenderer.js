/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/table/Row'],function(R){"use strict";var a={apiVersion:2};a.render=function(r,A){r.openStart("div",A);r.class("sapUiTableAction");if(!(A.getParent()instanceof R)){r.style("display","none");}if(!A.getVisible()){r.class("sapUiTableActionHidden");}var t=A.getTooltip_AsString();if(t){r.attr("title",t);}r.openEnd();var i=A.getAggregation("_icons");r.renderControl(i[0]);r.renderControl(i[1]);r.close("div");};return a;},true);
