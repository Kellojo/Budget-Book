/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var B={TableUtils:null,metadataLoaded:function(t){var b=t.getBinding("rows");var m=b?b.getModel():null;var r=null;var R=null;var p=new Promise(function(a,c){r=a;R=c;});if(!m){R();return p;}if(m.metadataLoaded){m.metadataLoaded().then(function(){r();});}else if(m.attachMetadataLoaded){if(m.oMetadata&&m.oMetadata.isLoaded()){r();}else{m.attachMetadataLoaded(function(){r();});}}return p;}};return B;},true);
