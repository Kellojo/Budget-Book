/*!
* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.require(["sap/ui/integration/widgets/Card","sap/ui/integration/customElements/CustomElementBase","sap/ui/integration/customElements/CustomElementHostConfiguration"],function(C,a){"use strict";var b=a.extend(C,{privateProperties:["width","height"]});b.prototype.refresh=function(){this._getControl().refresh();};b.prototype.loadDesigntime=function(){return this._getControl().loadDesigntime();};var d=["ui-integration-host-configuration"];a.define("ui-integration-card",b,d);});
