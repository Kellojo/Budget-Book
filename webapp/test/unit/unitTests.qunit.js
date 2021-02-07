/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "com/budgetBook/test/unit/model/transactionReccurrence.qunit"
    ], function () {
        QUnit.start();
    });
});