const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



// Arrays are a lie.

// const someArray = [];

// someArray.isAnObject = true;

// console.log(someArray);

// const whatEvenIsAnArray = {
//   0: 'hi',
//   1: 'bye',
//   2: 'hello again mark',
//   length: 3,
// };
// The only difference is the missing methods... pop, push, etc.

// What is the difference?
// 'Indexes' can be named anything
// Order -> This doesnt seem to have order


// for (let i = 0; i < whatEvenIsAnArray.length; ++i) {
//   console.log(whatEvenIsAnArray[i]);
// }

// const someArray = [1, 2, 3];

// someArray.isAnObject = true;

// someArray.myStuff = function () {
//   console.log(this);
// }

// someArray.myStuff();

// Arrays are just a type of object.
// I can do, whatever I want with an array.
// Period.

// Why?
// Why are we allowed to do such weird things to an array?
// If arrays are lies, then what are they?

// Objects

// What are they?
// Store key: value pairs
// Why have both?
// Primarily used to store methods

// Objects are unordered collections of key-value pairs

// const someArray = [1, 2, 3];

// console.log(someArray[0]);
// console.log(someArray[1]);

// 'indexes'

// Indexes are actually just a key.

// Arrays are truly just objects, but they come with some important rules that apply to them:
/*
1. When we add a value to an array, it is KEYED at the next number after the most recent values key.
2. It does everything in the world to keep its property (e.g. key) LENGTH up to date
*/

// delete someArray[2];

// c(someArray);
// c(someArray.length);

// Why use both?
// Javascript is a language that really likes you to be comfortorable. In many older languages, you would have to implement arrays yourself and they even went by a different name: doubly linked lists
// I promise youll learn about those

// In JS, the makers of JS, implemented a pseudo complex object that has some built in methods. Those methods we now know for the most part e.g. push, pop, slice, etc.
// When we use those methods, they are acting on the object that was created in two important ways: adding/removing values from the object, and updating the length accordingly. 

// Constructor -> is how we define initalizing a value in JS (dont freaking worry about it)
// const someArray = [1, 2, 3];
/*
  const someArrayActuallyEquals = {
    0: 1,
    1: 2,
    3: 3,
    length: 3,
    push: () => {},
    ...
  }
*/

// It clearly cant be prepared for everything, and I kind of demonstrated that... Remember:

// const someArray = [1, 2, 3];

// delete someArray[1];

// c(someArray);
// c(someArray.length);

// There is no 'hook' for delete. When delete happens, it just happens, and arrays cant react to it.

// The only time and way an object can respond or do anything, is if we use a method. (thats a function)

// .push
// .pop
// or something that the array can use to figure out what its next values and keys are going to be.

// Arrays are just objects. Theyre very fancy objects, that some very smart people made for you, but lets not lose sight of the fact that they are objects.

// Objects can apparentely do a lot.

// Objects are the most versatile type in any programming language.
// If arrays are just one type of object, what are the others?
/*
functions are objects
dates are objects
the window is an object
the browser is an object
*/

// Bassically anything that does anything worthwhile is an object.

// For most of you objects have probably just been this:

// const someObj = {
//   cat: 'meow',
// };

// What a great object!

// "I cant use a for loop on an object."
// Even without iteration, objects are tremendously powerful.

// That trick where you made iteration work... how?

// const someIterableObject = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 3,
//   // push: () => { /* update length + 1, add the extra key at that number */ }
// }

// console.log(someIterableObject['length']);

// .length
// the keys themselves
// All a for loop does for us, is dynamically change i to be the keys we need to get the values
// for (let i = 0; i < someIterableObject.length; ++i) {
//   // If we know that arrays are just objects, with certain keys, then are for loops something made for arrays? Or can they work on anything?
//   // For loops dont care. We just need to provide them a condition. Here the condition is: "start at 0, go until 3, adding 1 each time"

//   // Im actually getting the value.
//   // Bracket notation.
//   // Why would i ever === 'length'?
//   // i will only ever be 0 - 2
//   const currentValue = someIterableObject[i];

//   console.log(currentValue);
// }

// Objects are only as powerful as our design allows.

// const someKeys = ['key1', 'key2', 'key3', 'wrong key'];

// const someObject = {
//   key1: 'key1',
//   key2: 'key2',
//   key3: 'key3',
// };

// for (let i = 0; i < someKeys.length; ++i) {
//   const theKey = someKeys[i];
//   console.log('Current key in array: ', theKey);
//   const valueFromObj = someObject[theKey];
//   console.log('Value in obj: ', valueFromObj);
// }

// Key literally means 'key' like to a door. It is how we unlock the values within an object.
// Arrays are a trick, where we know what each key is going to be - so we use that to our advantage - to make looping over them easier, and to make accessing their values very easy.

// const nutsObject = {
//   'akjsbdakjwbdlavwldb,aebkajhbf,abrfjlabr,g': 'secret',
// }

// c(nutsObject['akjsbdakjwbdlavwldb,aebkajhbf,abrfjlabr,g']);

// Bracket notation is used in two cases: when we have to pass a variable in as a key, or when the key is an illegal character.

// Dot notation - you know dot notation:

// const someArray = [1];
// // .length -> that is dot notation.
// someArray.length;
// // [0] -> is bracket notation.
// someArray[0];

// // Brackets can accomplish everything dot notation can, the reverse is not true.

// const someObj = {
//   0: 1,
// };

// Bracket Notation forcibly coerces whatever you put it into a string, AND all keys in objects are forcibly coerced into strings.

// const someObj = {
//   'function (){}': 1,
// };

// console.log(someObj[function(){}]);

// Iteration

// Anytime I teach anything, we should be asking ourselves: "What value does this provide?"
// Objects what are they providing?

// Performance
const someArray = ['Bob Ross', 'Janae Hamilton', 'Xifung Jin'];

const someObj = {
  Bob: 'Ross',
  Janae: 'Hamilton',
  Xifung: 'Jin',
}

// I want you to given a first name, find the last name.

// Performance
// Time Comlexity -> O(n) where O is the function call and n is the number of units of time

// What if the array was 1 million length?
const arrayFindLastName = (searchName) => {
  // We have to do a task, as many times as there are elements in the array.
  // for a given array, this task will take its length in units of time
  // O(length) -> 3 units of time
  // This operates slower per length
  for (let i = 0; i < someArray.length; ++i) {
    const currentFullName = someArray[i];

    // -> split actually has a for loop inside of it, so per elem, we run another loop looking for spaces, which will always be 2 per elem so now it is O(n === length * 2)
    const splitName = currentFullName.split(' ');
    const firstName = splitName[0];

    if (firstName === searchName) return splitName[1];
  }
}

// console.log(arrayFindLastName('Xifung'));

// Easy
// Short
// Dictionary
const objectFindLastName = (searchName) => {
  // We only ever do 1 thing. Period.
  // O(1) -> it takes 1 unit of time regardless of complexity.
  // No matter the size of the collection, this operates at the same cost.
  return someObj[searchName];
}

// console.log(objectFindLastName('Xifung'));

// A: You should not code caring about performance. It takes massive difficult problems to ever need to think about it, and a common curse of programmers is something called 'pre-optimization' e.g. thinking about performance before solving a problem. Always solve a problem the ugly way, then if time allows, and effort as well, feel free to take a pass at optimizing.

// B: There was a different cost to the object...
// Human cost. I had to design that object.
// So keep in mind that the tradeoff here was I do more work for my computer to do less.

// Dictionary - A dictionary is a mapping done by a human of keys that are things we can quickly access later. Think: "Rea; Dictionary" -> I know a word, but i dont know its meaning, I can grab a dictionary and quickly look up the word, and discover the rest.

// Hash Table
// Hash Table is an ADT (thats a fancy comp sci term for object that makes things faster for certain operations) that helps us both store values uniquely, and then retrieve them at incredibly fast speeds - further it can often help us 'uglify' and 'salt' data.

// A User Database

const userDatabase = {};

// Given any string we want to be able return a nonsense string of another sort
// Given the same string twice, we always return the same nonsense string
const hash = (aStr) => {
  let hashedStr = '';

  for (let i = 0; i < aStr.length; ++i) {
    const currentChar = aStr[i];
    const currentCharCode = currentChar.charCodeAt(0).toString();

    hashedStr += currentCharCode;
  }

  return hashedStr;
}

// Nieve Approach (were going to take a second pass after we implement)
const signup = (email, password) => {
  email = hash(email);
  password = hash(password);

  if (userDatabase[email] === undefined) {
    userDatabase[email] = {
      password: password,
      loggedIn: false,
    };
    console.log(`Account created for ${email}!`);
  } else {
    console.log('Email address already has a user account, please sign up with another email.');
  }
}

// signup('eliot@hotmail.com', 'pass123');

const login = (email, password) => {
  email = hash(email);
  password = hash(password);

  if (userDatabase[email] && userDatabase[email].password === password) {
    userDatabase[email].loggedIn = true;
    console.log(`${email} successfully logged in!`);
  } else if (userDatabase[email]) {
    console.log('Wrong password!');
  } else {
    console.log(`No user exists for email ${email}.`);
  }
}

const logout = (email) => {
  email = hash(email);

  if (userDatabase[email]) {
    userDatabase[email].loggedIn = false;
    console.log('Successfully logged out!');
  } else {
    console.log(`How are you logged in, you dont even exist on the site.`);
  }
}

// login('eliot@hotmail.com', 'pass123');

// console.log(userDatabase);

// logout('eliot@hotmail.com');

// console.log(userDatabase);


// I want to iterate through an object.

// For (in) loops.

// for (let key in anotherObj) {
//   console.log('key: ', key);
//   const value = anotherObj[key];
//   console.log('value: ', value);
// }

// The Object methods.

const anotherObj = {
  a: 1,
  b: 2,
  c: 3,
}

// Object.keys
// This is a method, that returns an array of the keys inside an object.
// const anotherObjKeys = Object.keys(anotherObj);
// console.log(anotherObjKeys);
// // We get to continue using for loops as we have been. As something that iterates over an array.

// for (let i = 0; i < anotherObjKeys.length; ++i) {
//   const currentKey = anotherObjKeys[i];
//   const currentValue = anotherObj[currentKey];

//   console.log(`${currentKey}: ${currentValue}`);
// }

// Object.values -> It creates an array of just the values of an object.
// Super cool, people love it, the only time it hurts is if the problem we are solving requires us to remember what key a value came from. We CANNOT backtrack from a value to a key. Only from a key to a value.
const anotherObjValues = Object.values(anotherObj);
// console.log(anotherObjValues);







// When objects are used appropriately how powerful they can be.
// I avoided methods today, because thats for tomorrow - but theyre only going to make objects even more powerful.









