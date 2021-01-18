sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast"
], function (ManagedObject, JSONModel, Config, MessageToast) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.PreferenceManager", {
        metadata: {
            properties: {
                
            },

            events: {

            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {
        this.m_oPreferenceModel = new JSONModel({});
        this.getOwnerComponent().setModel(this.m_oPreferenceModel, "Preferences");
        
    };

    // -------------------------------------
    // Events
    // -------------------------------------

    /**
     * 
     * @private
     */
    SchemaProto.fetchPreferences = async function() {
        var oPreferences = null;

        if (this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            let oUserCollection = await this._getPreferencesFirestoreDocument().get(),
                oUserData = oUserCollection.data();
                oPreferences = oUserData.preferences;
        } else {
            oPreferences = {
                currency: localStorage.getItem("preferences_currency"),
                darkMode: localStorage.getItem("preferences_darkMode"),
            }
        }

        // assign default values
        oPreferences.darkMode = oPreferences.darkMode || false;
        oPreferences.currency = oPreferences.currency || Config.DEFAULT_CURRENCY;

        this.m_oPreferenceModel.setData(oPreferences);
        this.m_oPreferenceModel.refresh(true);
    }

    SchemaProto.updatePreferences = async function() {
        if (this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            await this._getPreferencesFirestoreDocument().set({
                preferences: this.m_oPreferenceModel.getData()
            });
        } else {
            localStorage.setItem("preferences_darkMode", this.m_oPreferenceModel.getPreference("/darkMode"));
            localStorage.setItem("preferences_currency", this.m_oPreferenceModel.getPreference("/currency"));
        }
    }

    /**
     * Get's the firebase collection, where the users preferences are located in
     * @returns {firebase.collection}
     * @private
     */
    SchemaProto._getPreferencesFirestoreDocument = function() {
        return this.getOwnerComponent().getFirebaseManager().getFireStore()
            .collection("transactions")
            .doc(firebase.auth().currentUser.uid);
    }



    /**
     * Set's a property from the preference model
     * @param {string} sProperty 
     * @param {any} value
     * @public
     */
    SchemaProto.setPreference = function(sProperty, value) {
        this.m_oPreferenceModel.setProperty(sProperty, value);
        this.updatePreferences();
    }


    /**
     * Get's a property from the preference model
     * @param {string} sProperty 
     * @returns {any}
     * @public
     */
    SchemaProto.getPreference = function(sProperty) {
        return this.m_oPreferenceModel.getProperty(sProperty);
    }


    return oSchema;
});