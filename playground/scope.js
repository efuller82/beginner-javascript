// const age = 100;

// function go() {
//   const age = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(hair);
// }

// go();


/* es-lint disable */
// function isCool(name) {
// let cool;
// if(name  === 'eric') {
//   cool = true;
// }
// console.log(cool);
// return cool;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('Rufus');
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  } 
  yell();
}