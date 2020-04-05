/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/PlanningCalendarLegendRenderer','sap/ui/core/Renderer'],function(P,R){"use strict";var a=R.extend(P);a.renderItemsHeader=function(r,l){};a.renderAppointmentsItemsHeader=function(r,l){};a.renderAdditionalContent=function(r,l){};a.renderAdditionalItems=function(r,l){var A=l.getAppointmentItems(),v=l.getVisibleLegendItemsCount(),b,i;if(l.getItems().length>=v){b=0;}else if(l.getItems().length+l.getAppointmentItems().length>v){b=v-l.getItems().length;}else{b=l.getAppointmentItems().length;}for(i=0;i<b;i++){this.renderLegendItem(r,"sapUiCalLegDayType"+l._getItemType(A[i],A).slice(4),A[i],["sapUiUnifiedLegendSquareColor","sapMPlanCalLegendAppCircle"]);}if(l.getItems().length+l.getAppointmentItems().length>v){r.renderControl(l._getMoreLabel(l.getItems().length+l.getAppointmentItems().length-v));}};a.defineItemsLength=function(l,c){var v=l.getVisibleLegendItemsCount();if(c>=v){return v;}else{return c;}};return a;},true);
