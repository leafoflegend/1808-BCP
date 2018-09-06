const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);







// Iteration
// for loops

// start, end, increment

// Initialization: Where do we start a process?
// Condition: Where do we end a process?
// Update: How do I take something from a start to an end?

//   init     ; cond ; upd
// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }

// Recursion follows all the same rules of iteration. Recursion is an alternative to iteration.
// For loops and recursive functions can IN FACT solve all the same problems. The question is not about 'CAN' its about effort. Recursion is often a much better tool for some problems, and iteration for others. Sometimes, we use them in tandem, when it makes sense for them both to solve a different piece of the puzzle.

const someArr = [
  'hi',
  [1, 2, 'bye'],
  [[[[['another goodbye', [[[['askjbdas']]]]]]]]],
  ['hi there again', ['hi there again again']],
];

// Create a function that finds all the strings in this array.

// const findStrings = (anArr) => {
//   let countOfStrings = 0;

//   for (let i = 0; i < anArr.length; ++i) {
//     const currentElem = anArr[i];

//     if (Array.isArray(currentElem)) {
//       for (let j = 0; j < currentElem.length; ++j) {
//         const currentInnerElem = currentElem[j];

//         if (Array.isArray(currentInnerElem)) {
//           for (let q = 0; q < currentInnerElem.length; ++q) {
//             const currentInnerInnerElem = currentInnerElem[q];

//             if (Array.isArray(currentInnerInnerElem)) {
//               console.log('Were 4 arrays deep, I give up.');
//             } else if (typeof currentInnerInnerElem === 'string') {
//               ++countOfStrings;
//             }
//            }
//         } else if (typeof currentInnerElem === 'string') {
//           ++countOfStrings;
//         }
//       }
//     } else if (typeof currentElem === 'string') {
//       ++countOfStrings;
//     }
//   }

//   return countOfStrings;
// }

// const recursiveFindStrings = someArr => {
//   let stringCount = 0;

//   for (let i = 0; i < someArr.length; ++i) {
//     const currentElem = someArr[i];

//     if (Array.isArray(currentElem)) {
//       stringCount += recursiveFindStrings(currentElem);
//     } else if (typeof currentElem === 'string') {
//       ++stringCount;
//     }
//   }

//   return stringCount;
// }

// console.log(recursiveFindStrings(someArr));

// Recursion alleviates the complexity of dealing with DEPTH.

// Countdown
// Given some number, count from it, down to 1, then say 'liftoff'

// Initialization
// Condition
// Update

// We initalize:  here
// Invocation - We call a function
const countdown = aNum => {
  // We end here
  // Base Case
  if (aNum <= 0) console.log('Liftoff!');
  else {
    // console.log(aNum);
    // We update here
    // Recursive Case
    countdown(aNum - 1);
    // console.log(aNum);
  }
}

// countdown(5);

// Every recursive function needs a base case. A base case, is when a function STOPS CALLING ITSELF.
// In iteration we 'hang'. The computer just keeps working forever and likely crashes our browser.
// In recursion we 'exceed call stack size'.

// What is a call stack?
// Stack -> FILO structure. First in, last out.
// Queue -> Its a line. The first one in, is the first one out. FIFO structure.

// Pancake Stacks

// Recursion is a Stack Structure
// What the heck is that stack made of?

// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }


// const sayHello = () => console.log('Hello!');

// const sayGoodbye = () => console.log('Goodbye!');

// const sayWhatsup = () => console.log('Whatsup?');

// const notMuchU = () => console.log('Not much you?');

// const sayMindlessChatter = () => {
//   sayWhatsup();
//   notMuchU();
//   notMuchU();
// }

// const sayGreetings = () => {
//   sayHello();
//   sayHello();
//   sayMindlessChatter();
//   sayGoodbye();
//   sayGoodbye();
// }

// sayGreetings();

// Functions wait until functions within them finish running to continue.
// Synchronous programming. Code is run top down, left to right, in order.
// Asynchronous programming.

// When a function inside a function ENDS, how does the function know where to continue running from?
// We needed a way to REMEMBER where each FUNCTION was in its EXECUTION.

// const sumAllNums = ceiling => {
//   if (ceiling === 1) return 1;

//   return sumAllNums(ceiling - 1) + ceiling;
// }

// console.log(sumAllNums(5));

// Iteration was made for people. Its the way we think, we think from 0 - a number.
// Recursion was made for computers. They think from a number to 0.

// const iterativeFactorial = (aNum) => {
//   let currentNum = 1;

//   for (let i = aNum; i >= 1; --i) {
//     currentNum *= i;
//   }

//   return currentNum;
// }

// c(iterativeFactorial(0));

// const recursiveFactorial = (aNum) => {
//   if (aNum <= 1) return aNum;

//   return aNum * recursiveFactorial(aNum - 1);
// }

// console.log(recursiveFactorial(3));

// const someArray = [1, 2, 3, 4];

// const addRecursively = (anArr) => {
//   if (anArr.length === 1) return anArr[0];

//   return anArr[0] + addRecursively(anArr.slice(1));
// }

// c(addRecursively(someArray));