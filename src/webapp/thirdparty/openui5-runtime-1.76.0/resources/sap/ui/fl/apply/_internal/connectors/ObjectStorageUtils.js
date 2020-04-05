/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F="sap.ui.fl";return{forEachObjectInStorage:function(p,P){var r=p.storage.getItems&&p.storage.getItems()||p.storage;return Promise.resolve(r).then(function(r){var a=Object.keys(r).map(function(k){var i=k.includes(F);if(!i){return;}var s=r[k];var f=p.storage._itemsStoredAsObjects?s:JSON.parse(s);var S=true;if(p.reference){S=f.reference===p.reference||f.reference+".Component"===p.reference;}var b=true;if(p.layer){b=f.layer===p.layer;}if(!S||!b){return;}return P({changeDefinition:f,key:k});});return Promise.all(a);});},getAllFlexObjects:function(p){var f=[];return this.forEachObjectInStorage(p,function(m){f.push(m);}).then(function(){return f;});},createFlexKey:function(i){if(i){return F+"."+i;}},createFlexObjectKey:function(f){return this.createFlexKey(f.fileName);}};});
