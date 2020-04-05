/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var N={apiVersion:2};N.render=function(r,c){var a,g=c.getItems(),e=c.getExpanded(),v=[],h=false;g.forEach(function(b){if(b.getVisible()){v.push(b);if(b.getIcon()){h=true;}}});r.openStart("ul",c);var w=c.getWidth();if(w&&e){r.style("width",w);}r.class("sapTntNavLI");if(!e){r.class("sapTntNavLICollapsed");}if(!h){r.class("sapTntNavLINoIcons");}a=!e||c.hasStyleClass("sapTntNavLIPopup")?'menubar':'tree';r.attr("role",a);r.openEnd();v.forEach(function(b){b.render(r,c);});r.close("ul");};return N;},true);
