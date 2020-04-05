/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./FormLayoutRenderer'],function(R,F){"use strict";var a=R.extend(F);a.getMainClass=function(){return"sapUiFormResGrid";};a.renderContainers=function(r,l,f){var v=f.getVisibleFormContainers();var L=v.length;if(L>0){if(L>1||!l.getSingleContainerFullSize()){r.renderControl(l._mainGrid);}else if(l.mContainers[v[0].getId()][0]){r.renderControl(l.mContainers[v[0].getId()][0]);}else{r.renderControl(l.mContainers[v[0].getId()][1]);}}};return a;},true);
