sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
], function (ManagedObject, JSONModel, Config) {
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
        this.m_oUserModel = new JSONModel({
            isLoggedIn: false,
            user: undefined
        });
        this.getOwnerComponent().setModel(this.m_oUserModel, "User");

        firebase.initializeApp(Config.FIREBASE);
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
        this.setFireStore(firebase.firestore());
    };

    // -------------------------------------
    // Events
    // -------------------------------------

    SchemaProto.onAuthStateChanged = function(oUser) {
        this.m_oUserModel.setProperty("/isLoggedIn", !!oUser);
        this.m_oUserModel.setProperty("/user", oUser);
        this.setIsLoggedIn(!!oUser);

        this.fireAuthStateChanged();
        if (this.getIsLoggedIn()) {
            this.fireUserSignedIn();
        }
    }



    // -------------------------------------
    // User
    // -------------------------------------

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

    SchemaProto.signOut = function () {
        firebase.auth().signOut();
    };

    SchemaProto.sendPasswordResetEmail = function (mParameters) {
        firebase.auth().sendPasswordResetEmail(mParameters.email).then(function () {
            if (typeof mParameters.success === "function") {
                mParameters.success();
            }
        }).catch(this.getOwnerComponent().getRestClient()._generateErrorHandler(mParameters.error));
    };



    return oSchema;
});