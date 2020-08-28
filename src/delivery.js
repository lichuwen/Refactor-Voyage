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
  if(getStates(MASSACHUSETTS,CONNECTICUT,null).includes(anOrder.deliveryState)) {
     return 1;
  }
  if(getStates(NEW_YORK,NEW_HAMPSHIRE,null).includes(anOrder.deliveryState)) {
    return 2;
  }
  return 3;
}

function getDeliveryTimeByFalse(anOrder) {
  if(getStates(MASSACHUSETTS,CONNECTICUT,NEW_YORK).includes(anOrder.deliveryState)) {
    return 2;
  }
  if(getStates(MAINE,NEW_HAMPSHIRE,null).includes(anOrder.deliveryState)) {
    return 3;
  }
  return 4;
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return anOrder.placedOn.plusDays(1 + getDeliveryTimeByTrue(anOrder));
  }
  else {
    return anOrder.placedOn.plusDays(2 + getDeliveryTimeByFalse(anOrder));
  }
}

module.exports = {deliveryDate}
