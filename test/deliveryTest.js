const deliveryTest = require('ava')
const {deliveryDate} = require('../src/delivery');

let isRush = true;
const today = new Date();
let plusDay = new Date();
const plusDays = new Date();

let anOrder = {
    "deliveryState": 'MA',
    "placedOn": {
        "plusDays": function (deliveryTime) {
            plusDays.setDate(today.getDate() + deliveryTime);
            return plusDays.toLocaleDateString();
        }
    }
}

deliveryTest('delivery deliveryDate-case1. Order MA and rush is true', t => {
    plusDay.setDate(today.getDate() + 2);
    const except = plusDay.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})

deliveryTest('delivery deliveryDate-case2. Order NY and rush is true', t => {
    anOrder.deliveryState = 'NY';
    plusDay.setDate(today.getDate() + 3);
    const except = plusDay.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})

deliveryTest('delivery deliveryDate-case3. Order CW and rush is true', t => {
    anOrder.deliveryState = 'CW'
    plusDay.setDate(today.getDate() + 4);
    const except = plusDay.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})

