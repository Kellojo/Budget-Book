/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/search/OpenSearchProvider'],function(l,O){"use strict";var S=O.extend("sap.ui.commons.SearchProvider",{metadata:{deprecated:true,library:"sap.ui.commons"}});S.prototype._doSuggest=function(s,a){this.suggest(a,function(v,b){if(s&&s.suggest){s.suggest(v,b);}});};return S;});
