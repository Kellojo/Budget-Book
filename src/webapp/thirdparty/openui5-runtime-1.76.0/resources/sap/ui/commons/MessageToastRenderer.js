/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var M={};M.render=function(r,c){r.write('<div class="'+c.getClasses()+'"');r.writeControlData(c);r.write('>');r.write('<div class="sapUiMsgToastMsg sapUiShd">');if(c.oMessage){r.renderControl(c.oMessage);}else{var m=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons").getText("MSGTOAST_MULTI_MSGS");r.write('<div class="sapUiMsg" tabindex="0"><span class="sapUiMsgTxt">'+m+'</span></div>');}r.write("</div>");r.write('<div id="'+c.getId()+'Arrow" class="sapUiMsgToastArrow"></div>');r.write("</div>");};return M;},true);
