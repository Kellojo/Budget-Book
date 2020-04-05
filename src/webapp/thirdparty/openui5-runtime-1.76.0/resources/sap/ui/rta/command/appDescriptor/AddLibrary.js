/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/AppDescriptorCommand"],function(A){"use strict";var a=A.extend("sap.ui.rta.command.appDescriptor.AddLibrary",{metadata:{library:"sap.ui.rta",events:{}}});a.prototype.init=function(){this.setChangeType("appdescr_ui5_addLibraries");};a.prototype.execute=function(){var p=[];if(this.getParameters().libraries){var l=Object.keys(this.getParameters().libraries);l.forEach(function(L){p.push(sap.ui.getCore().loadLibrary(L,true));});}return Promise.all(p);};return a;},true);
