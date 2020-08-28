function getDate() {
  const today = new Date();
  const dueDate = new Date();
  dueDate.setDate(today.getDate());
  return dueDate.toLocaleDateString();
}

function calOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function printOwing (invoice) {

  let result = "";
  result += `***********************\n`;
  result += `**** Customer Owes ****\n`;
  result += `***********************\n`;

  // calculate outstanding
  let outstanding = calOutstanding(invoice);

  // print details
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${getDate().toLocaleString()}`;
  return result;
}

module.exports = {printOwing};
