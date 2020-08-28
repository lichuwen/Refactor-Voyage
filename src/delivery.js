function deliveryDate (anOrder, isRush) {
  const MASSACHUSETTS = 'MA';
  const CONNECTICUT = 'CT';

  const NEW_YORK = 'NY';
  const NEW_HAMPSHIRE = 'NH';
  const MAINE = 'ME';
  if (isRush) {
    let deliveryTime;
    if ([
      MASSACHUSETTS,
      CONNECTICUT,
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 1;
    }
    else if ([
      NEW_YORK,
      NEW_HAMPSHIRE,
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
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
