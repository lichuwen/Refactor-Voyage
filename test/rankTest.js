const rankTest = require('ava');
const {voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating} = require("../src/rank")

const voyage = {
  zone: 'china',
  length: 20,
};
const history = [
  {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'east-indies',
    profit: -2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  },
  {
    zone: 'east-indies',
    profit: 2,
  }
];

rankTest('rank voyageRisk-case1. voyage length more than 4 and less than 8', t => {
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };

  const result = voyageRisk(voyage);
  const expect = 3;
  t.is(result, expect);
});

rankTest('rank voyageRisk-case2. voyage length more than 8 and not include zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };

  const result = voyageRisk(voyage);
  const expect = 4;
  t.is(result, expect);
});

rankTest('rank voyageRisk-case3. voyage length more than 8 and include zone', t => {
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };

  const result = voyageRisk(voyage);
  const expect = 8;
  t.is(result, expect);
});

rankTest('rank hasChina-case1. history zone has no china', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];

  const result = hasChina(history);
  const expect = false;
  t.is(result, expect);
});

rankTest('rank hasChina-case2. history zone has china', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'china',
      profit: 5,
    }
  ];

  const result = hasChina(history);
  const expect = true;
  t.is(result, expect);
});

rankTest('rank captainHistoryRisk-case1. history length less than 5 and zone is china and history has china', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: -2,
    },
    {
      zone: 'china',
      profit: -2,
    }
  ];

  const result = captainHistoryRisk(voyage, history);
  const expect = 5;
  t.is(result, expect);
});

rankTest('rank captainHistoryRisk-case2. history length more than 5 and zone is china and history has china', t => {
  const result = captainHistoryRisk(voyage, history);
  const expect = 1;
  t.is(result, expect);
});

rankTest('rank captainHistoryRisk-case3. history length less than 5 and zone is not china', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: -2,
    }
  ];

  const result = captainHistoryRisk(voyage, history);
  const expect = 6;
  t.is(result, expect);
});

rankTest('rank voyageProfitFactor-case1. history length more than 18 and zone is china', t => {
  const result = voyageProfitFactor(voyage, history);
  const expect = 7;
  t.is(result, expect);
});

rankTest('rank voyageProfitFactor-case2. history length more than 18 and zone is not china', t => {
  const voyage = {
    zone: 'east-indies',
    length: 20,
  };
  const result = voyageProfitFactor(voyage, history);
  const expect = 3;
  t.is(result, expect);
});

rankTest('rank rating-case1. Rating is B', t => {
  const result = rating(voyage, history);
  const expect = 'B';
  t.is(result, expect);
});

rankTest('rank rating-case2. Rating is A', t => {
  const voyage = {
    zone: 'east-indies',
    length: 1,
  };
  const result = rating(voyage, history);
  const expect = 'A';
  t.is(result, expect);
});
