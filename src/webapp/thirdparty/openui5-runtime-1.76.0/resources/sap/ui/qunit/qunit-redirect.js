/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(){"use strict";if(!parent.jsUnitTestSuite){var s=document.getElementsByTagName("script"),b=null,t,o=window.location.origin?window.location.origin:(window.location.protocol+"//"+window.location.host),T=window.location.href.substr(o.length);for(var i=0;i<s.length;i++){var S=s[i];var a=S.getAttribute("src");if(a){var B=a.match(/(.*)resources\/sap\/ui\/qunit\/qunit-redirect\.js$/i);if(B&&B.length>1){b=B[1];t=S.getAttribute("data-test-timeout");break;}}}if(b===null){throw new Error("qunit-redirect.js: The script tag seems to be malformed!");}window.location=b+"test-resources/sap/ui/qunit/testrunner.html?testpage="+encodeURIComponent(T)+"&autostart=true"+(t?"&test-timeout="+encodeURIComponent(t):"");}})();
