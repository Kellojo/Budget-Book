/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Link'],function(L){"use strict";var M={};M.render=function(r,c){r.write('<div class="sapUiMsg" tabindex="0"');r.writeControlData(c);r.write('>');r.write('<div class="sapUiMsgIcon sapUiMsgIcon'+c.getType()+'"></div>');if(typeof c.fnCallBack==="function"){r.write('<span class="sapUiMsgLnk">');if(!c.oLink){c.oLink=new L();var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");c.oLink.setText(a.getText("MSGLIST_DETAILS"));c.oLink.attachPress(function(){c.openDetails();});}r.renderControl(c.oLink);r.write(' - </span>');}r.write('<span class="sapUiMsgTxt">');r.writeEscaped(c.getText());r.write('</span>');r.write('</div>');};return M;},true);
