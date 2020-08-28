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

function getDeliveryTime(anOrder) {
  if(getStates(MASSACHUSETTS,CONNECTICUT,null).includes(anOrder.deliveryState)) {
     return 1;
  }
  if(getStates(NEW_YORK,NEW_HAMPSHIRE,null).includes(anOrder.deliveryState)) {
    return 2;
  }
  return 3;
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return anOrder.placedOn.plusDays(1 + getDeliveryTime(anOrder));
  }
  else {
    let deliveryTime;
    if ([
      MASSACHUSETTS,
      CONNECTICUT,
      NEW_YORK,
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if ([
      MAINE,
      NEW_HAMPSHIRE,
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    } else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {deliveryDate}
