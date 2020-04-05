/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/write/_internal/appVariant/AppVariantFactory"],function(A){"use strict";var D={};D.createNew=function(p){return D.createAppVariant(p);};D.createAppVariant=function(p){return A.prepareCreate(p);};D.createForExisting=function(i){return A.prepareUpdate({id:i});};D.createDeletion=function(i){return A.prepareDelete({id:i});};return D;},true);
