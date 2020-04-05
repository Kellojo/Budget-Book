/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./SelectRenderer'],function(R,S){"use strict";var A=R.extend(S);A.ACTION_SELECT_CSS_CLASS="sapMActionSelect";A.apiVersion=2;A.addClass=function(r,a){r.class(A.ACTION_SELECT_CSS_CLASS);};return A;},true);
