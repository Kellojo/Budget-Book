/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/FlexControllerFactory","sap/ui/core/Component","sap/ui/fl/registry/ChangeHandlerRegistration","sap/ui/fl/ChangePersistenceFactory","sap/ui/core/mvc/Controller","sap/ui/core/mvc/XMLView","sap/ui/fl/EventHistory","sap/ui/fl/apply/_internal/changes/descriptor/Preprocessor"],function(F,C,a,b,M,X,E,P){"use strict";var R={};function _(){C._fnOnInstanceCreated=F.getChangesAndPropagate;}function c(){a.getChangeHandlersOfLoadedLibsAndRegisterOnNewLoadedLibs();}function d(){C._fnLoadComponentCallback=b._onLoadComponent.bind(b);}function e(){M.registerExtensionProvider("sap.ui.fl.PreprocessorImpl");}function f(){if(X.registerPreprocessor){X.registerPreprocessor("viewxml","sap.ui.fl.XmlPreprocessorImpl",true);}}function g(){E.start();}function h(){C._fnPreprocessManifest=P.preprocessManifest;}R.registerAll=function(){g();c();d();e();_();f();h();};return R;},true);
