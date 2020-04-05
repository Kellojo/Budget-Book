/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./NavContainerRenderer','sap/ui/core/Renderer','sap/m/library'],function(N,R,l){"use strict";var B=l.BackgroundHelper;var A=R.extend(N);A.apiVersion=2;A.renderAttributes=function(r,c){B.addBackgroundColorStyles(r,c.getBackgroundColor(),c.getBackgroundImage());};A.renderBeforeContent=function(r,c){B.renderBackgroundImageTag(r,c,"sapMAppBG",c.getBackgroundImage(),c.getBackgroundRepeat(),c.getBackgroundOpacity());};return A;},true);
