/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/Object',"sap/base/Log","sap/ui/thirdparty/jquery"],function(B,L,q){"use strict";return B.extend("sap.ui.test.pipelines.PipelineFactory",{constructor:function(o){this._oOptions=o;},create:function(i){var r=[];if(q.isArray(i)){r=i;}else if(i){r=[i];}else{L.error(this._oOptions.name+" were defined, but they were neither an array nor a single element: "+i);}r=r.map(function(f){var R;if(f[this._oOptions.functionName]){return f;}else if(typeof f=="function"){R={};R[this._oOptions.functionName]=f;return R;}L.error("A "+this._oOptions.name+" was defined, but it is no function and has no '"+this._oOptions.functionName+"' function: "+f);}.bind(this)).filter(function(f){return!!f;});return r;}});});
