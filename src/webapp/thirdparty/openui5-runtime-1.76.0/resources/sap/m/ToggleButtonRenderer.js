/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ButtonRenderer','sap/ui/core/Renderer'],function(B,R){"use strict";var T=R.extend(B);T.apiVersion=2;T.renderAccessibilityAttributes=function(r,t,a){a["pressed"]=t.getPressed();};T.renderButtonAttributes=function(r,t){if(t.getPressed()&&!t._isUnstyled()){r.class("sapMToggleBtnPressed");}};return T;},true);
