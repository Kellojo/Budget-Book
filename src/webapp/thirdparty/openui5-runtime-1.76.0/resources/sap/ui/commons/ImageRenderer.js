/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var I={};I.render=function(r,i){r.write("<img");r.writeControlData(i);r.writeAttributeEscaped("src",i.getSrc()||sap.ui.require.toUrl('sap/ui/commons/img/1x1.gif'));r.addClass("sapUiImg");if(i.hasListeners("press")){r.addClass("sapUiImgWithHandler");}if(!i.getSrc()){r.addClass("sapUiImgNoSource");}r.writeClasses();var t=i.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}var u=i.getUseMap();if(u){if(!(u.startsWith("#"))){u="#"+u;}r.writeAttributeEscaped("usemap",u);}var m=0;if((i.getDecorative()&&(!u))){m=-1;r.writeAttribute("role","presentation");r.write(" alt=''");}else{if(i.getAlt()){r.writeAttributeEscaped("alt",i.getAlt()||t);}else if(t){r.writeAttributeEscaped("alt",t);}}r.writeAttribute("tabindex",m);var a="";if(i.getWidth()&&i.getWidth()!=''){a+="width:"+i.getWidth()+";";}if(i.getHeight()&&i.getHeight()!=''){a+="height:"+i.getHeight()+";";}if(a!=""){r.writeAttribute("style",a);}r.write("/>");};return I;},true);
