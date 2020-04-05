/*
 * ! OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/apply/_internal/connectors/ObjectStorageConnector"],function(m,O){"use strict";var M={_itemsStoredAsObjects:true,_items:{},setItem:function(k,v){M._items[k]=v;},removeItem:function(k){delete M._items[k];},clear:function(){M._items={};},getItem:function(k){return M._items[k];},getItems:function(){return M._items;}};var J=m({},O,{oStorage:M});return J;},true);
