/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(L,R){"use strict";var T=R.extend(L);T.apiVersion=2;T.renderLIAttributes=function(r,l){r.class("sapMTreeItemBase");if(!l.isTopLevel()){r.class("sapMTreeItemBaseChildren");}if(l.isLeaf()){r.class("sapMTreeItemBaseLeaf");}else{r.attr("aria-expanded",l.getExpanded());}var i=l._getPadding();if(sap.ui.getCore().getConfiguration().getRTL()){r.style("padding-right",i+"rem");}else{r.style("padding-left",i+"rem");}};T.renderContentFormer=function(r,l){this.renderHighlight(r,l);this.renderExpander(r,l);this.renderMode(r,l,-1);};T.renderExpander=function(r,l){var e=l._getExpanderControl();if(e){r.renderControl(e);}};T.getAriaRole=function(l){return"treeitem";};T.getAccessibilityState=function(l){var a=L.getAccessibilityState.call(this,l);a.level=l.getLevel()+1;if(!l.isLeaf()){a.expanded=l.getExpanded();}return a;};return T;},true);
