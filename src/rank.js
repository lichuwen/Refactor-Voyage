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


function judgeHistoryLength(history, len) {
  return history.length > len;
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

function calProfitByIsChina(voyage, history) {
  let result = 3;
  result += judgeHistoryLength(history, 10) ? judgeVoyageLength(voyage, 12) ? 2 : 1 : 0;
  result -= judgeVoyageLength(voyage, 18) ? 1 : 0;
  return result;
}


function calProfitByNotChina(voyage, history) {
  let result = 0;
  result += judgeHistoryLength(history, 8) ? 1 : 0;
  result -= judgeVoyageLength(voyage, 14) ? 1 : 0;
  return result;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (hasZone(voyage)) {
    result += 1;
  }
  result += isChinaHistory(voyage, history) ? calProfitByIsChina(voyage, history) : calProfitByNotChina(voyage, history);
  return result;
}

function createData(voyage, history) {
  return {
    profit: voyageProfitFactor(voyage, history),
    risk: voyageRisk(voyage),
    historyRisk: captainHistoryRisk(voyage, history)
  };
}

function calRating(data) {
  return data.profit * 3 > (data.risk + data.historyRisk * 2);
}

function rating(voyage, history) {
  return calRating(createData(voyage, history)) ? 'A' : 'B';
}

module.exports = {
  voyageRisk,
  hasChina,
  captainHistoryRisk,
  voyageProfitFactor,
  rating
};
