/*!
* OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.require(["sap/ui/integration/customElements/CustomElementBase","sap/ui/integration/Widget"],function(C,W){"use strict";var a=C.extend(W);a.prototype.loadDesigntime=function(){return this._getControl().loadDesigntime();};C.define("ui-integration-widget",a,[]);});
