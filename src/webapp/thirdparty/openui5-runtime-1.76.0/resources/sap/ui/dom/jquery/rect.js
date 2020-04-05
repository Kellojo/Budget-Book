/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/getOwnerWindow"],function(q,d){"use strict";var r=function rect(){var D=this.get(0);if(D){if(D.getBoundingClientRect){var c=D.getBoundingClientRect();var R={top:c.top,left:c.left,width:c.right-c.left,height:c.bottom-c.top};var w=d(D);R.left+=q(w).scrollLeft();R.top+=q(w).scrollTop();return R;}else{return{top:10,left:10,width:D.offsetWidth,height:D.offsetHeight};}}return null;};q.fn.rect=r;return q;});
