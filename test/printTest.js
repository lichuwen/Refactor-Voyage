const printTest = require('ava');
const {printOwing} = require("../src/print")

printTest('print printOwing-case1. ', t => {
    const invoice = {
        "customer": "karen",
        "borderSpacing": [
            {amount: 1},
            {amount: 2}
        ]
    };
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    const result = printOwing(invoice);
    const expect = '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: karen\n' +
        'amount: 3\n' +
        'amount: ' + dueDate.toLocaleDateString();
    t.is(result, expect);
});