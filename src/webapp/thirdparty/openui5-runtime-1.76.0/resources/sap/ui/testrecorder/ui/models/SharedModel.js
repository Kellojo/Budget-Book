/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/resource/ResourceModel","sap/ui/model/json/JSONModel","sap/ui/testrecorder/Dialects"],function(R,J,D){"use strict";var i=new R({bundleName:"sap.ui.core.messagebundle"});var m=new J({iFrameTitle:i.getProperty("TestRecorder.TitleBar.Title"),dialects:[{key:D.RAW,label:i.getProperty("TestRecorder.Inspect.Snippet.Dialect.Raw")},{key:D.OPA5,label:i.getProperty("TestRecorder.Inspect.Snippet.Dialect.OPA5")},{key:D.UIVERI5,label:i.getProperty("TestRecorder.Inspect.Snippet.Dialect.UIVeri5")}],selectedDialect:D.UIVERI5,settings:{preferViewId:false,formatAsPOMethod:true,multipleSnippets:false}});return m;});
