/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/encodeXML"],function(e){"use strict";var E={};E.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiUx3ExactBrwsr");r.writeClasses();r.writeAttribute("role","region");if(c.getShowHeader()){r.writeAttribute("aria-labelledby",c.getId()+"-hdtitle");}if(c.getFollowUpControl()){r.writeAttribute("aria-controls",c.getFollowUpControl());}var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.write(">");if(c.getShowHeader()){r.write("<div class=\"sapUiUx3ExactBrwsrHd\"><h2 id=\""+c.getId()+"-hdtitle\">");r.write(e(c.getHeaderTitle()));r.write("</h2><div class=\"sapUiUx3ExactBrwsrHdTool\" role=\"toolbar\">");if(c.getEnableSave()){r.renderControl(c._saveButton);}if(c.getEnableReset()){r.renderControl(c._resetButton);}r.write("</div></div>");}r.renderControl(c._rootList);r.write("</div>");};return E;},true);
