sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/core/delegate/ScrollEnablement",
    "sap/m/Text",
    "sap/m/Label",
    "sap/m/ListGrowingDirection"
], function (Control, ScrollEnablement, Text, Label, ListGrowingDirection) {
        return Control.extend("kellojo.m.Page", {
            metadata: {
                properties: {
                    title: {
                        type: "string",
                        defaultValue: ""
                    },
                    subTitle: {
                        type: "string",
                        defaultValue: ""
                    },
                    showHeader: {
                        type: "boolean",
                        defaultValue: true
                    },
                    condensed: {
                        type: "boolean",
                        defaultValue: false
                    }
                },

                aggregations: {
                    content: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    },

                    mainAction: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    },

                    actions: {
                        type: "sap.ui.core.Control",
                        multiple: true
                    }
                },

                events: {
                    scrollToLoad: {}
                },

                defaultAggregation: "content"
            },

            init: function() {
                this.attachBrowserEvent("scroll", this.onScroll.bind(this));
                this.m_oTitle = new Text({
                    text: this.getTitle()
                }).addStyleClass("kellojoM-page-header-title-text");

                this.m_oSubTitle = new Label({
                    text: this.getSubTitle()
                }).addStyleClass("kellojoM-page-header-subtitletitle-text");

                this.setCondensed(this.getCondensed());

                window.addEventListener("resize", this.getHeaderHeight.bind(this));
            },

            exit: function() {
                window.removeEventListener("resize", this.getHeaderHeight.bind(this));
            },

            onBeforeRendering: function () {
                if (this._oScroller) {
                    this._oScroller.destroy();
                    this._oScroller = null;
                } else {
                    this._oScroller = new ScrollEnablement(this, null, {
                        scrollContainerId: this.getId(),
                        horizontal: false,
                        vertical: true
                    });
                    this._oScroller.setGrowingList(this.fireScrollToLoad.bind(this), ListGrowingDirection.Downwards);
                }
    
                if (this._headerTitle) {
                    this._headerTitle.setLevel(this.getTitleLevel());
                }
            },

            onAfterRendering: function() {
                this.getHeaderHeight();
            },

            onScroll: function() {
                var iScrollTop = this.getDomRef().scrollTop;
                this.toggleStyleClass("kellojoM-page-flg-scrollStarted", iScrollTop > 16);
            },

            // ---------------------------
            // Getters & Setters
            // ---------------------------

            setTitle: function(sTitle, bSuppressInvalidate) {
                this.m_oTitle.setText(sTitle);
                this.m_oSubTitle.rerender();
            },
            setSubTitle: function(sSubTitle, bSuppressInvalidate) {
                this.m_oSubTitle.setText(sSubTitle);
                this.m_oSubTitle.rerender();
            },

            setCondensed: function(bValue, bSuppressInvalidate) {
                this.setProperty("condensed", bValue);
                this.toggleStyleClass("kellojoM-page-flg-condensed", bValue);
                return this;
            },

            /**
             * Gets the outer height of the page header & also updates the css variable for it
             * @returns {number}
             * @public 
             */
            getHeaderHeight: function() {
                var oDomRef = this.getDomRef();
                if (oDomRef) {
                    var oPageHeader = jQuery(oDomRef).find(".kellojoM-page-header");
                    if (oPageHeader) {
                        var iHeaderHeight = oPageHeader.innerHeight();
                        oDomRef.style.setProperty('--kellojoM-page-header-height', iHeaderHeight + "px");
                        return iHeaderHeight;
                    }
                }

                return 0;
            },


            // ---------------------------
            // Renderer
            // ---------------------------

            renderer: function (oRm, oControl) {

                oRm.write("<div");
                oRm.writeControlData(oControl);
                oRm.addClass("kellojoM-page");
                oRm.writeClasses(oControl);
                oRm.write(">");

                
                if (oControl.getShowHeader()) {
                    oRm.write("<div class='kellojoM-page-header'>");
                        oRm.write("<div class='kellojoM-page-header-title'>");
                            oRm.renderControl(oControl.m_oTitle);
                            oRm.renderControl(oControl.m_oSubTitle);
                        oRm.write("</div>");

                        oRm.write("<div class='kellojoM-page-header-mainAction'>");
                        var aContent = oControl.getMainAction();
                        aContent.forEach(oItem => {
                            oRm.renderControl(oItem);
                        });
                        oRm.write("</div>");

                        oRm.write("<div class='kellojoM-page-header-Actions'>");
                        var aRight = oControl.getActions();
                        aRight.forEach(oItem => {
                            oRm.renderControl(oItem);
                        });
                        oRm.write("</div>");
                    oRm.write("</div>");
                }

                    oRm.write("<div class='kellojoM-page-content'>");
                    var aContent = oControl.getContent();
                    aContent.forEach(oItem => {
                        oRm.renderControl(oItem);
                    });
                    oRm.write("</div>");



                oRm.write("</div>");
            }
        });
    }
);