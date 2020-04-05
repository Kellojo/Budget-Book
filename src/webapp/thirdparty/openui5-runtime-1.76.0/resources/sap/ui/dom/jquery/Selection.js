/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(q){"use strict";q.fn.disableSelection=function(){return this.on(("onselectstart"in document.createElement("div")?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault();});};q.fn.enableSelection=function(){return this.off(".ui-disableSelection");};return q;});
