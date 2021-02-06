sap.ui.define([
    "com/budgetBook/manager/PlannedTransactionsManager",
    "kellojo/m/library"
], function (PlannedTransactionsManager, library) {
    "use strict";

    QUnit.module("Transaction Recurrence functions", {
        beforeEach: function () {
            
        },
        afterEach: function () {
            
        }
    });

    QUnit.test("RRULE library is loaded", function (assert) {
        assert.ok(!!rrule);
    });


    QUnit.test("Should return months in sequential order", function (assert) {

        // Arrange
        const oPlannedTransactionManager = new PlannedTransactionsManager();

        // System under test
        assert.ok(!!rrule);

        let i = 0;
        const aMonthIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const oRule = oPlannedTransactionManager.constructRRule(new Date("01.01.2020"), library.TransactionreccurrenceType.MONTHLY);
        const aReccurrences = oRule.between(new Date("12.31.2020"), new Date("01.01.2100"));

        aReccurrences.forEach(oDate => {
            const iExpectedMonth = aMonthIndexes[i % 12];
            assert.strictEqual(oDate.getMonth(), iExpectedMonth);
            i++;
        });
    });

    QUnit.test("Should return years in sequential order", function (assert) {

        // Arrange
        const oPlannedTransactionManager = new PlannedTransactionsManager();
        const oStartDate = new Date();
        const oEndDate = new Date(new Date().setFullYear(oStartDate.getFullYear() + 1000));

        // System under test
        assert.ok(!!rrule);

        let iYear = oStartDate.getFullYear() + 1;
        const oRule = oPlannedTransactionManager.constructRRule(oStartDate, library.TransactionreccurrenceType.YEARLY);
        const aReccurrences = oRule.between(oStartDate, oEndDate);

        aReccurrences.forEach(oDate => {
            assert.strictEqual(oDate.getFullYear(), iYear);
            iYear++;
        });
    });

    QUnit.test("Should return days in sequential order", function (assert) {

        // Arrange
        const oPlannedTransactionManager = new PlannedTransactionsManager();
        const oStartDate = new Date();
        const oEndDate = new Date(new Date().setFullYear(oStartDate.getFullYear() + 10));
        let oExpectedDate = new Date();
        oExpectedDate.setDate(oExpectedDate.getDate() + 1);

        // System under test
        assert.ok(!!rrule);

        const oRule = oPlannedTransactionManager.constructRRule(oStartDate, library.TransactionreccurrenceType.DAILY);
        const aReccurrences = oRule.between(oStartDate, oEndDate);

        aReccurrences.forEach(oDate => {
            assert.strictEqual(oDate.getUTCDate(), oExpectedDate.getUTCDate());
            oExpectedDate.setDate(oExpectedDate.getDate() + 1);
        });
    });

    QUnit.test("Should return weeks in sequential order", function (assert) {

        // Arrange
        const oPlannedTransactionManager = new PlannedTransactionsManager();
        const oStartDate = new Date();
        const oEndDate = new Date(new Date().setFullYear(oStartDate.getFullYear() + 25));
        let oExpectedDate = new Date();
        oExpectedDate.setDate(oExpectedDate.getDate() + 7);

        // System under test
        assert.ok(!!rrule);

        const oRule = oPlannedTransactionManager.constructRRule(oStartDate, library.TransactionreccurrenceType.WEEKLY);
        const aReccurrences = oRule.between(oStartDate, oEndDate);

        aReccurrences.forEach(oDate => {
            assert.strictEqual(oDate.getUTCDate(), oExpectedDate.getUTCDate());

            oExpectedDate.setDate(oExpectedDate.getDate() + 7);
        });
    });

});