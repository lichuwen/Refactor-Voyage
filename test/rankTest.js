const rankTest = require('ava');
const {voyageRisk, hasChina} = require("../src/rank")

const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
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
