/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/supportRules/ui/external/Highlighter","sap/ui/test/_ControlFinder","sap/ui/testrecorder/Constants","sap/ui/testrecorder/CommunicationBus","sap/ui/testrecorder/CommunicationChannels","sap/ui/testrecorder/interaction/Commands"],function(H,_,c,C,a,b){"use strict";var h=new H(c.HIGHLIGHTER_ID);return{execute:function(d){var r=_._getIdentifiedDOMElementId("#"+d);h.highlight(r);C.publish(a.SELECT_CONTROL_IN_TREE,{rootElementId:r,interactionElementId:d,action:b.PRESS});}};});
