/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/ElementUtil"],function(U){"use strict";return{isVisible:function(c){return c.getVisible();},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl",getLabel:function(c){return U.getLabelForElement(c.getHeader());}}}};});
