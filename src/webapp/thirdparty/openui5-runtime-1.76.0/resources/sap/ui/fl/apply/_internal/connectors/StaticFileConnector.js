/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/apply/connectors/BaseConnector","sap/base/Log","sap/base/util/LoaderExtensions"],function(m,B,L,a){"use strict";function _(r,b){var s=r.replace(/\./g,"/")+"/changes/"+b+".json";var c=!!sap.ui.loader._.getModuleState(s);var C=sap.ui.getCore().getConfiguration();if(c||C.getDebug()||C.getComponentPreload()==="off"){try{return a.loadResource(s);}catch(e){if(e.name.includes("SyntaxError")){L.error(e);}L.warning("flexibility did not find a "+b+".json for the application: "+r);}}}var S=m({},B,{loadFlexData:function(p){var c=p.componentName;if(!c){c=p.reference.replace(/.Component/g,"");}var f=_(c,"flexibility-bundle");if(f){f.changes=f.changes.concat(f.compVariants);delete f.compVariants;return Promise.resolve(f);}var C=_(c,"changes-bundle");if(C){return Promise.resolve({changes:C});}return Promise.resolve();}});return S;},true);
