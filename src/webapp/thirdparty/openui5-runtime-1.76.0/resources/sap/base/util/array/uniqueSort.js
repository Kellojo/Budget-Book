/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/assert'],function(a){"use strict";var u=function(A){a(A instanceof Array,"uniqueSort: input parameter must be an Array");var l=A.length;if(l>1){A.sort();var j=0;for(var i=1;i<l;i++){if(A[i]!==A[j]){A[++j]=A[i];}}if(++j<l){A.splice(j,l-j);}}return A;};return u;});
