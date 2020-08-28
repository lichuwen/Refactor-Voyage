const MASSACHUSETTS = 'MA';
const CONNECTICUT = 'CT';
const NEW_YORK = 'NY';
const NEW_HAMPSHIRE = 'NH';
const MAINE = 'ME';

function getStates(state1,state2,state3) {
  return [
    state1,
    state2,
    state3
  ]
}

function getDeliveryTimeByTrue(anOrder) {
  return getStates(MASSACHUSETTS, CONNECTICUT, null).includes(anOrder.deliveryState) ? 1 : (getStates(NEW_YORK, NEW_HAMPSHIRE, null).includes(anOrder.deliveryState)) ? 2 : 3;
}

function getDeliveryTimeByFalse(anOrder) {
  return getStates(MASSACHUSETTS, CONNECTICUT, NEW_YORK).includes(anOrder.deliveryState) ? 2 : getStates(MAINE, NEW_HAMPSHIRE, null).includes(anOrder.deliveryState) ? 3 : 4;
}

function deliveryDate(anOrder) {
  return anOrder.isRush ? anOrder.placedOn.plusDays(1 + getDeliveryTimeByTrue(anOrder)) : anOrder.placedOn.plusDays(2 + getDeliveryTimeByFalse(anOrder));
}

module.exports = {deliveryDate}
