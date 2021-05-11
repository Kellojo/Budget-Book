sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast"
], function (ManagedObject, JSONModel, Config, MessageToast) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.FirebaseManager", {
        metadata: {
            properties: {
                isLoggedIn: {
                    type: "boolean"
                },
                fireStore: {
                    type: "object"
                }
            },

            events: {
                userSignedIn: {

                },
                authStateChanged: {

                }
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {
        this.m_aQueryListeners = [];

        this.m_oUserModel = new JSONModel({
            isLoggedIn: false,
            user: undefined,
            userInitials: "",
        });
        this.getOwnerComponent().setModel(this.m_oUserModel, "User");

        firebase.initializeApp(Config.FIREBASE);
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
        this.setFireStore(firebase.firestore());

        this.getOwnerComponent().attachUnload(this.cancelAllSubscriptions, this);
        this.getOwnerComponent().attachShow(this.restoreAllSubscriptions, this);
        this.getOwnerComponent().attachHide(this.cancelAllSubscriptions, this);
    };

    // -------------------------------------
    // Events
    // -------------------------------------

    SchemaProto.onAuthStateChanged = function(oUser) {
        this.m_oUserModel.setProperty("/isLoggedIn", !!oUser);
        this.m_oUserModel.setProperty("/user", oUser);

        var sInitials = "";
        if (!!oUser) {
            sInitials = oUser.email.substr(0, 2).toUpperCase();
        }
        this.m_oUserModel.setProperty("/userInitials", sInitials);
        this.setIsLoggedIn(!!oUser);

        this.fireAuthStateChanged();
        if (this.getIsLoggedIn()) {
            this.fireUserSignedIn();
        }
    }



    // -------------------------------------
    // User
    // -------------------------------------

    /**
     * Get's the email of the current user
     * @returns {string}
     * @public
     */
    SchemaProto.getEmail = function() {
        return this.m_oUserModel.getProperty("/user/email");
    }

    SchemaProto.login = function(oParams) {
        firebase.auth().signInWithEmailAndPassword(oParams.email, oParams.password)
            .then(oParams.success)
            .catch(oParams.error)
            .finally(oParams.complete);
    };

    SchemaProto.signUp = function(oParams) {
         firebase.auth().createUserWithEmailAndPassword(oParams.email, oParams.password)
            .then(oParams.success)
            .catch(oParams.error)
            .finally(oParams.complete);
    };

    SchemaProto.sendPasswordForgottenEmail = function(oParams) {
        firebase.auth().sendPasswordResetEmail(oParams.email)
            .then(oParams.success)
            .catch(oParams.error)
            .finally(oParams.complete);
    }

    SchemaProto.signOut = function () {
        firebase.auth().signOut();
        MessageToast.show(this.getOwnerComponent().getResourceBundle().getText("signOutSuccess"));
    };

    SchemaProto.sendPasswordResetEmail = function (mParameters) {
        firebase.auth().sendPasswordResetEmail(mParameters.email).then(function () {
            if (typeof mParameters.success === "function") {
                mParameters.success();
            }
        }).catch(this.getOwnerComponent().getRestClient()._generateErrorHandler(mParameters.error));
    };

    // -------------------------------------
    // Subscriptions to queries
    // -------------------------------------

    /**
     * Listens to a query for changes
     * @param {firestore.Document || firestore.Collection} oDocOrCollection 
     * @param {function} fnListener 
     * @returns {function} method to suspend the listener
     * @public
     */
    SchemaProto.subscribeToChanges = function(oDocOrCollection, fnListener) {
        const fnUnsubscribe = oDocOrCollection.onSnapshot(fnListener);
        this.m_aQueryListeners.push({
            unsubscribe: fnUnsubscribe,
            docOrCollection: oDocOrCollection,
            listener: fnListener,
        });
        return fnUnsubscribe;
    }

    /**
     * Unsubscribes from all firestore subscriptions
     */
    SchemaProto.cancelAllSubscriptions = function() {
        this.m_aQueryListeners.forEach(oInfo => {
            if (oInfo && typeof oInfo.unsubscribe === "function") {
                oInfo.unsubscribe();
                oInfo.unsubscribe = null;
            }
        });
    }

    /**
     * Restores all subscriptions
     */
    SchemaProto.restoreAllSubscriptions = function() {
        const aListeners = this.m_aQueryListeners;
        this.m_aQueryListeners = [];
        aListeners.forEach(oInfo => {
            this.subscribeToChanges(oInfo.docOrCollection, oInfo.listener);
        });
    }



    return oSchema;
});