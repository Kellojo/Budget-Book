/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListItemBaseRenderer','sap/ui/core/Renderer'],function(L,R){"use strict";var F=R.extend(L);F.renderLIContent=function(r,c){r.write("<div");if(c.getParent()&&c.getParent().getWordWrap()){r.addClass("sapMFFLITitleWrap");}else{r.addClass("sapMFFLITitle");}r.writeClasses();r.write(">");r.writeEscaped(c.getText());r.write("</div>");};return F;},true);
