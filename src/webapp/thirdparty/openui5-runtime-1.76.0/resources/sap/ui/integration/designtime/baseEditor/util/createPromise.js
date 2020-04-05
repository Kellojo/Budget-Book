/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";return function(f){var c=false;var C;var a;var b;var p=new Promise(function(r,R){f(function(){if(!c){r.apply(this,arguments);}else if(a){a.apply(this,arguments);}},function(){if(!c){R.apply(this,arguments);}else if(b){b.apply(this,arguments);}});});return{promise:p,cancel:function(){c=true;if(!C){C=new Promise(function(r,R){a=r;b=R;});}return C;}};};});
