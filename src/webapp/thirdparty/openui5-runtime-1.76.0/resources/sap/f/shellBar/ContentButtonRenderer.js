/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/ButtonRenderer",'sap/ui/core/Renderer'],function(B,R){"use strict";var C=R.extend(B);C.writeImgHtml=function(r,c){var a=c.getAvatar();if(a){r.renderControl(a);}};return C;},true);
