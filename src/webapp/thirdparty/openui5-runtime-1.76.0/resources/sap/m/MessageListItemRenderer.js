/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./StandardListItemRenderer","sap/ui/core/Renderer"],function(S,R){"use strict";var M=R.extend(S);M.apiVersion=2;M.renderTitle=function(r,c){if(c.getActiveTitle()){r.renderControl(c.getLink());r.renderControl(c.getLinkAriaDescribedBy());}else{S.renderTitle.apply(this,arguments);}};return M;},true);
