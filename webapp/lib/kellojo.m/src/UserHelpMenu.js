
sap.ui.define([
    "sap/ui/core/XMLComposite",
    "sap/ui/core/Core",
    "sap/m/StandardListItem"
], function (XMLComposite, Core, StandardListItem) {
    var UserHelpMenu = XMLComposite.extend("kellojo.m.UserHelpMenu", {
        metadata: {
            properties: {
                title: { type: "string" },
                items: { type: "object[]", defaultValue: [] },
                closeButtonVisible: {type: "boolean", defaultValue: false}
            },

            events: {
                close: {}
            }
        },

        fragment: "kellojo.m.fragment.UserHelpMenu"
    });

    var UserHelpMenuProto = UserHelpMenu.prototype;

    UserHelpMenuProto.init = function() {
        this.m_oList = this.byId("idList");
        this.m_oPopover = this.byId("idPopover");
        this.m_oPopover.attachAfterClose(function() {
            this.fireClose();
            this.destroy();
        }.bind(this));
    };

    UserHelpMenuProto.openBy = function(oSourceControl, sPlacement) {
        this.m_oPopover.setPlacement(sPlacement);
        this.m_oPopover.openBy(oSourceControl);
        return this;
    };

    UserHelpMenuProto.close = function() {
        this.m_oPopover.close();
    }

    // --------------------------
    // Getters & Setters
    // --------------------------

    UserHelpMenuProto.getTitle = function() {
        return this.getProperty("title") ||  Core.getLibraryResourceBundle("kellojo.m").getText("userHelpMenuTitle");
    }

    UserHelpMenuProto.setItems = function(aItems) {
        this.setProperty("items", aItems, true);
        this.m_oList.removeAllItems();

        aItems.forEach(function(oItem) {
            var oSItem = new StandardListItem({
                title: oItem.title,
                icon: oItem.icon,
                press: oItem.press,
                type: "Active",
                visible: oItem.visible
            });

            if (oItem.hasSpacer) {
                oSItem.addStyleClass("kellojoMUserHelpMenu-itemSpacer");
            }

            this.m_oList.addItem(oSItem);
        }.bind(this));
    }

    return UserHelpMenu;
});