// function doctorize(firstName) {
//   return `Dr. $(firstName})`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

/*eslint-disable*/
// Arrow Function
// are anon function
const inchesToCM = inches => inches * 2.54;

// funtion add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b=3) => total = a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 2
//   }
//   return baby;
// }

const makeABaby =  (first, last) => ({ name: `${first} ${last}`, age: 2 });

// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const eric = {
  name: 'Eric Fuller',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Eric';
  },
  // Shorthand Method
  yellHi() {
  console.log('Hey Ericcc');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hii erriicc I a mouse');
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!');
}

button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(function() {
  console.log('done time to eat')
}, 1000);