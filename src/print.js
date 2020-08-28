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

function getTextResult(invoice) {
  let result = "";
  result += `***********************\n`;
  result += `**** Customer Owes ****\n`;
  result += `***********************\n`;
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${calOutstanding(invoice)}\n`;
  result += `amount: ${getDate().toLocaleString()}`;
  return result;
}

function printOwing (invoice) {
  return getTextResult(invoice);
}

module.exports = {printOwing};
