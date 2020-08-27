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

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  // console.log(result);
  return result;
}

module.exports = {printOwing};
