/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";var p=function parentByAttribute(a,v){if(this.length>0){if(v){return this.first().parents("["+a+"='"+v+"']").get(0);}else{return this.first().parents("["+a+"]").get(0);}}};q.fn.parentByAttribute=p;return q;});
