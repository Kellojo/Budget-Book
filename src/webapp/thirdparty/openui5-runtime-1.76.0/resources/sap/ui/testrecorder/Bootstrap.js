/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{init:function(s,d){sap.ui.require(["sap/ui/testrecorder/Recorder"],function(R){if(s[0].toLowerCase()==="true"||s[0].toLowerCase()==="silent"){R.start(s);}});}};});
