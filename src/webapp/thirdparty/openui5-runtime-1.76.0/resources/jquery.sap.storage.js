/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/base/assert','sap/ui/util/Storage'],function(q,a,S){"use strict";var s={};q.sap.storage=function(o,i){if(!o){o=S.Type.session;}if(typeof(o)==="string"&&S.Type[o]){var k=o;if(i&&i!="state.key_"){k=o+"_"+i;}return s[k]||(s[k]=new S(o,i));}a(o instanceof Object&&o.clear&&o.setItem&&o.getItem&&o.removeItem,"storage: duck typing the storage");return new S(o,i);};q.sap.storage.Storage=S;q.sap.storage.Type=S.Type;Object.assign(q.sap.storage,S);return q;});
