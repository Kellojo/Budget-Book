/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var M={apiVersion:2};M.CSS_CLASS="sapMMenuBtn";M.render=function(r,m){var w=m.getWidth();r.openStart("div",m);r.class(M.CSS_CLASS).class(M.CSS_CLASS+m.getButtonMode());if(w!=""){r.style("width",w);}r.openEnd();m._ensureBackwardsReference();r.renderControl(m._getButtonControl());r.close("div");};return M;},true);
