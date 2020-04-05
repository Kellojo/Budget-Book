/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_OpaLogger"],function(_){"use strict";var h=_.getLogger("sap.ui.test.autowaiter._UIUpdatesWaiter#hasPending");return{hasPending:function(){var u=sap.ui.getCore().getUIDirty();if(u){h.debug("The UI needs rerendering");}return u;}};});
