/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./SplitContainerRenderer','sap/ui/core/Renderer','sap/m/library'],function(S,R,l){"use strict";var B=l.BackgroundHelper;var a={apiVersion:2};var a=R.extend(S);a.renderAttributes=function(r,c){B.addBackgroundColorStyles(r,c.getBackgroundColor(),c.getBackgroundImage());};a.renderBeforeContent=function(r,c){B.renderBackgroundImageTag(r,c,"sapMSplitContainerBG",c.getBackgroundImage(),c.getBackgroundRepeat(),c.getBackgroundOpacity());};return a;},true);
