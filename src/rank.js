const voyageZone = [
  'china',
  'east-indies',
];

function hasZone(voyage) {
  return voyageZone.includes(voyage.zone);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function judgeVoyageLength(voyage, len) {
  return voyage.length > len;
}

function isChinaHistory(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function voyageRisk(voyage) {
  let result = 1;
  result += judgeVoyageLength(voyage, 4) ? judgeVoyageLength(voyage, 8) ? hasZone(voyage) ? voyage.length - 2 : voyage.length - 6 : 2 : 0;
  return result;
}

function captainHistoryRisk(voyage, history) {
  let result = 1 + history.filter(v => v.profit < 0).length;
  result += history.length < 5 ? 4 : 0;
  result -= isChinaHistory(voyage, history) ? 2 : 0;
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') {
    result += 1;
  }
  if (voyage.zone === 'east-indies') {
    result += 1;
  }
  if (isChinaHistory(voyage, history)) {
    result += 3;
    if (history.length > 10) {
      result += 1;
    }
    if (voyage.length > 12) {
      result += 1;
    }
    if (voyage.length > 18) {
      result -= 1;
    }
  } else {
    if (history.length > 8) {
      result += 1;
    }
    if (voyage.length > 14) {
      result -= 1;
    }
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  } else {
    return 'B';
  }
}

module.exports = {
  voyageRisk,
  hasChina,
  captainHistoryRisk,
  voyageProfitFactor,
  rating
};
