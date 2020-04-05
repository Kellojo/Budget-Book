/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/uxap/library"],function(l){"use strict";return{name:{singular:function(){return sap.ui.getCore().getLibraryResourceBundle("sap.uxap").getText("SECTION_CONTROL_NAME");},plural:function(){return sap.ui.getCore().getLibraryResourceBundle("sap.uxap").getText("SECTION_CONTROL_NAME_PLURAL");}},select:function(o){var O=o.getParent();O.setSelectedSection(o);},palette:{group:"CONTAINER",icons:{svg:"sap/uxap/designtime/ObjectPageSection.icon.svg"}},actions:{remove:{changeType:"stashControl"},reveal:{changeType:"unstashControl",getLabel:function(c){var s=c.getSubSections();if(s.length===1&&s[0].getTitle().trim()!==""){return s[0].getTitle();}return c.getTitle();}},rename:function(){return{changeType:"rename",domRef:".sapUxAPObjectPageSectionTitle",isEnabled:function(e){return e.$("title").get(0)!=undefined;}};}},aggregations:{subSections:{domRef:":sap-domref .sapUxAPObjectPageSectionContainer",actions:{move:{changeType:"moveControls"}}}}};});
