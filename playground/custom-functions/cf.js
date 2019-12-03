// Function Definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log(billAmount, taxRate);
  // this is the function body
  const total = billAmount + (billAmount * taxRate + billAmount * tipRate);
  return total;
}

// Function call, or **run**
const ericTotal = 500;
const ericTaxRate = 0.3;
// const myTotal = calculateBill(ericTotal, ericTaxRate);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('eric');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
