sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "kellojo/m/library"
], function (ManagedObject, JSONModel, Config, library) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.PreferenceManager", {
        metadata: {
            properties: {
                
            },

            events: {
                preferenceChange: {
                    parameters: {
                        preferences: {
                            type: "object"
                        }
                    }
                }
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    SchemaProto.PREFERENCES = {
        theme: {
            defaultValue: library.Theme.Auto,
        },
        currency: {
            defaultValue: Config.DEFAULT_CURRENCY,
        },
        lastViewedReleaseNotes: {
            defaultValue: null,
        },
    };
    SchemaProto.PREFERENCE_KEYS = Object.keys(SchemaProto.PREFERENCES);

    
    SchemaProto.onInit = function() {
        this.m_oPreferenceModel = new JSONModel({});
        this.getOwnerComponent().setModel(this.m_oPreferenceModel, "Preferences");
        this.getOwnerComponent().getThemeManager().attachThemeChange(oEvent => {
            this.setPreference("/theme", oEvent.getParameter("theme"));
        });
        
    };

    // -------------------------------------
    // Events
    // -------------------------------------

    /**
     * Fetches the preferences from the firestore or localstorage
     * @private
     */
    SchemaProto.fetchPreferences = async function() {
        let oPreferences = {};

        if (this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            let oUserCollection = await this._getPreferencesFirestoreDocument().get(),
                oUserData = oUserCollection.data();

            if (!!oUserData) {
                oPreferences = oUserData.preferences;
            }
        } else {
            this.PREFERENCE_KEYS.forEach(sKey => {
                oPreferences[sKey] = localStorage.getItem(`preferences_${sKey}`);
            });
        }

        if (!oPreferences) {
            oPreferences = {};
        }

        // assign default values
        this.PREFERENCE_KEYS.forEach(sKey => {
            oPreferences[sKey] = oPreferences[sKey] || this.PREFERENCES[sKey].defaultValue;
        });

        this.m_oPreferenceModel.setData(oPreferences);
        this.m_oPreferenceModel.refresh(true);

        this.firePreferenceChange({
            preferences: this.m_oPreferenceModel.getData(),
        });
    }

    SchemaProto.updatePreferences = async function() {
        const oPreferences = this.m_oPreferenceModel.getData();

        if (this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            await this._getPreferencesFirestoreDocument().set({
                preferences: oPreferences,
            });
        }

        this.PREFERENCE_KEYS.forEach(sKey => {
            localStorage.setItem(`preferences_${sKey}`, this.getPreference(`/${sKey}`));
        });

        this.firePreferenceChange({
            preferences: oPreferences,
        });
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