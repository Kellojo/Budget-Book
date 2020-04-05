/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(q){"use strict";var h=function(e){var t=q.prop(e,"tabIndex");return t!=null&&t>=0&&(!q.attr(e,"disabled")||q.attr(e,"tabindex"));};q.fn.hasTabIndex=function(){return h(this.get(0));};return q;});
