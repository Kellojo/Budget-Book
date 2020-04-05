/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/RuntimeAuthoring","sap/ui/core/Element","sap/ui/fl/write/api/FeaturesAPI","sap/ui/fl/Layer","sap/ui/fl/Utils","sap/ui/core/UIComponent","sap/base/Log"],function(R,E,F,L,a,U,b){"use strict";function s(p){if(!(p.rootControl instanceof E)&&!(p.rootControl instanceof U)){return Promise.reject(new Error("An invalid root control was passed"));}return F.isKeyUser().then(function(i){if(!i){throw new Error("Key user rights have not been granted to the current user");}var r=new R({rootControl:a.getAppComponentForControl(p.rootControl),flexSettings:{developerMode:false,layer:L.CUSTOMER},validateAppVersion:true});r.attachEvent("stop",function(){r.destroy();});return r.start();}).catch(function(e){b.error("UI Adaptation could not be started",e.message);throw e;});}return s;});
