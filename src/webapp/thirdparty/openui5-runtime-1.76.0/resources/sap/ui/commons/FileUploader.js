/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/Log','./library','sap/ui/unified/FileUploader','./FileUploaderRenderer','sap/ui/core/Core'],function(L,l,U,F,C){"use strict";var a=U.extend("sap.ui.commons.FileUploader",{metadata:{deprecated:true,library:"sap.ui.commons"}});try{sap.ui.getCore().loadLibrary("sap.ui.unified");}catch(e){L.error("The control 'sap.ui.commons.FileUploader' needs library 'sap.ui.unified'.");throw(e);}return a;});
