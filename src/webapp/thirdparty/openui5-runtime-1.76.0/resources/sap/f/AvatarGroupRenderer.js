/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/library"],function(l){"use strict";var A={apiVersion:2};A.render=function(r,a){var s="sapFAvatarGroup",g=a.getGroupType(),b=s+g,I=a.getItems(),S=a._shouldShowMoreButton();r.openStart("div",a).class(s).class(b).class(s+a.getAvatarDisplaySize());if(S){r.class("sapFAvatarGroupShowMore");}if(a._bAutoWidth){r.style("width","auto");}if(g==="Group"){r.attr("role","button");}r.openEnd();for(var i=0;i<a._iAvatarsToShow;i++){r.renderControl(I[i]);}if(S){r.renderControl(a._oShowMoreButton);}r.close("div");};return A;},true);
