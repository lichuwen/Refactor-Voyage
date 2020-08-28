function getDate() {
  const today = new Date();
  const dueDate = new Date();
  dueDate.setDate(today.getDate());
  return dueDate.toLocaleDateString();
}

function printOwing (invoice) {
  let outstanding = 0;
  let result = "";
  result += `***********************\n`;
  result += `**** Customer Owes ****\n`;
  result += `***********************\n`;

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // print details
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${getDate()}`;
  return result;
}

module.exports = {printOwing};
