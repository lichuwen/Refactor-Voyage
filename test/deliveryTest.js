const deliveryTest = require('ava')
const {deliveryDate} = require('../src/delivery');

let isRush = true;
let today = new Date();
let plusDays = new Date();
let singlePlusDay = new Date();

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
    singlePlusDay.setDate(today.getDate() + 2);
    const except = singlePlusDay.toLocaleDateString();
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
    singlePlusDay.setDate(today.getDate() + 3);
    const except = singlePlusDay.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})

deliveryTest('delivery deliveryDate-case3. Order CW and rush is true', t => {
    anOrder = {
        "deliveryState": 'CW',
        "placedOn": {
            "plusDays": function (deliveryTime) {
                plusDays.setDate(today.getDate() + deliveryTime);
                return plusDays.toLocaleDateString();
            }
        }
    }
    singlePlusDay.setDate(today.getDate() + 4);
    const except = singlePlusDay.toLocaleDateString();
    const result = deliveryDate(anOrder, isRush);
    t.is(result, except);
})

// deliveryTest('delivery deliveryDate-case4. Order MA and rush is false', t => {
//     isRush = false;
//     plusDays.setDate(today.getDate() + 4);
//     const except = plusDays.toLocaleDateString();
//     const result = deliveryDate(anOrder, isRush);
//     t.is(result, except);
// })