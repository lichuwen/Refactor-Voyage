const deliveryTest = require('ava')
const {deliveryDate} = require('../src/delivery');

let today = new Date();
let plusDays = new Date();

const anOrder = {
    "deliveryState": 'MA',
    "placedOn": {
        "plusDays": function (deliveryTime) {
            plusDays.setDate(today.getDate() + deliveryTime);
            return plusDays.toLocaleDateString();
        }
    }
}
const isRush = true;

deliveryTest('delivery deliveryDate-case1. Order MA and rush is true', t => {
    plusDays.setDate(today.getDate() + 2);
    const except = plusDays.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})

deliveryTest('delivery deliveryDate-case2. Order NY and rush is true', t => {
    const anOrder = {
        "deliveryState": 'NY',
        "placedOn": {
            "plusDays": function (deliveryTime) {
                plusDays.setDate(today.getDate() + deliveryTime);
                return plusDays.toLocaleDateString();
            }
        }
    }
    plusDays.setDate(today.getDate() + 3);
    const except = plusDays.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})