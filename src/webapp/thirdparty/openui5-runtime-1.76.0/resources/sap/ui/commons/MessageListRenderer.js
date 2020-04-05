/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var M={};M.render=function(r,c){r.write('<ul class="sapUiMsgList"');r.writeControlData(c);r.write(">");for(var i=c.aMessages.length-1;i>=0;i--){r.write('<li class="sapUiMsgListLi">');r.renderControl(c.aMessages[i]);r.write("</li>");}r.write("</ul>");};return M;},true);
