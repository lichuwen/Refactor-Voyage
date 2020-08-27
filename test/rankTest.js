const rankTest = require('ava');
const {voyageRisk} = require("../src/rank")

const voyage = {
  zone: 'west-indies',
  length: 10,
};
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
