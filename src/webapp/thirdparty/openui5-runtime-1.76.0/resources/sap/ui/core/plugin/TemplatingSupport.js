/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Core','sap/ui/core/tmpl/Template',"sap/base/Log"],function(C,T,L){"use strict";var a=function(){};a.prototype.startPlugin=function(c,o){L.info("Starting TemplatingSupport plugin.");this.oCore=c;sap.ui.template();};a.prototype.stopPlugin=function(){L.info("Stopping TemplatingSupport plugin.");this.oCore=null;};(function(){var t=new a();sap.ui.getCore().registerPlugin(t);}());return a;},true);
