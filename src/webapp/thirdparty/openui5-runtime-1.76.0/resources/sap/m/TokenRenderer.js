/*!

* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.

*/
sap.ui.define(["sap/ui/core/library","sap/ui/core/InvisibleText"],function(c,I){"use strict";var T=c.TextDirection;var a={apiVersion:2};a.render=function(r,C){var t=C._getTooltip(C,C.getEditable()&&C.getProperty("editableParent")),A=[],o={role:"option"};r.openStart("div",C).attr("tabindex","-1").class("sapMToken");if(C.getSelected()){r.class("sapMTokenSelected");}if(!C.getEditable()){r.class("sapMTokenReadOnly");}if(t){r.attr("title",t);}A.push(I.getStaticId("sap.m","TOKEN_ARIA_LABEL"));if(C.getEditable()&&C.getProperty("editableParent")){A.push(I.getStaticId("sap.m","TOKEN_ARIA_DELETABLE"));}if(C.getSelected()){A.push(I.getStaticId("sap.m","TOKEN_ARIA_SELECTED"));}o.describedby={value:A.join(" "),append:true};r.accessibilityState(C,o);r.openEnd();a._renderInnerControl(r,C);if(C.getEditable()){r.renderControl(C._deleteIcon);}r.close("div");};a._renderInnerControl=function(r,C){var t=C.getTextDirection();r.openStart("span").class("sapMTokenText");if(t!==T.Inherit){r.attr("dir",t.toLowerCase());}r.openEnd();var b=C.getText();if(b){r.text(b);}r.close("span");};return a;},true);
