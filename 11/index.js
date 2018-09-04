const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));







// function someFunction() {
//   return (name) => {
//     console.log("Hello " + name)
//   }
// }

// console.log(someOtherFunction)

// let val = someFunction()

// console.log(val)


// val("Alec")

// returning functions from other functions is the basis for the concept of closure
// closure is relatively specific to javascript, however the concept does appear in any language that has "functional programming" capabilities

// the languages that don't have closure are typically object oriented like java

// What exactly is closure?
// closure is when an inner function has access to a variable or value from an outer function, after the outer function has finished executing



// function createCounter(functionName) {
//   let counter = 0

//   function executeCounter(resetCounter) {
//     if (resetCounter){
//       console.log(`the counter for ${functionName} has been reset`)
//       counter = 0;
//     }
//     counter++
//     console.log(`The function ${functionName} has ran ${counter} times`)
//   }

//   return executeCounter
// }


// let counterFunction = createCounter("FunctionOne")
// let anotherCounter = createCounter("FunctionTwo")

// console.log(counterFunction)
// counterFunction()
// counterFunction()

// anotherCounter()

// counterFunction()
// counterFunction(true)
// counterFunction()




// function multiplicationFactory(productValue) {
//   const fn = n => n * productValue
//   return fn
// }


// let timesTwo = multiplicationFactory(2)

// console.log(timesTwo(10))

// let timesThree = multiplicationFactory(3)


// let timesFive = multiplicationFactory(5)

// console.log(timesFive(4))
// console.log(multiplicationFactory(5)(4))

// javascript has no private variables
// so in javascript we can use closure to emulate the idea of a private variable


// function createBank() {
//   let members = {}
//   function signUp(username, password) {
//     if (members[username]){
//       console.log(`${username} is already a member`)
//       return;
//     }
//     members[username] = {
//       balance: 0,
//       password: password,
//       isSignedIn: true
//     }
//     console.log(`${username} has logged in`)
//   }

//   function signIn(username, password) {
//     if (!members[username]) {
//       console.log('This user does not exist')
//       return
//     }
//     if (members[username].password !== password) {
//       console.log('Password incorrect')
//       return
//     }
//     if (members[username].password === password) {
//       if (members[username].isSignedIn){
//         console.log(`${username} is already signed in`)
//       }
//       members[username].isSignedIn = true
//       return members[username]
//     }
//   }

//   function signOut (username){
//     members[username].isSignedIn = false
//   }

//   function deposit(username, value) {
//     if (!members[username]){
//       console.log(`${username} does not exist`)
//       return
//     }
//     if (!members[username].isSignedIn){
//       console.log(`${username} is not signed in`)
//       return
//     }
//     members[username].balance += value
//     console.log(`${username} has deposited ${value} dollars successfully, and now has a balance of $${members[username].balance}.`)
//   }

//   return {signUp, signIn, signOut, deposit}
// }


// let myBank = createBank()

// myBank.signUp("alecfriedman", "superstrongpassword")

// myBank.signIn("alecfriedman", "superstrongpassword")
// // myBank.signOut("alecfriedman")

// myBank.deposit("alecfriedman", 500)

// myBank.deposit("alecfriedman", 5000)







// Bonus array methods:

// filter
// filter is an array method that allows us to "filter" the elements of an array with a filter function
// (elem, [index]) => boolean
// if filter returns true for an element in our array, the element is kept
// if filter returns false, the element is removed from our array
// filter does not mutate our array, it creates a new array

// let anArray = [1, 2, 3, 4, 5, 6]

// anArray.filter(n => n % 2 === 0)

// console.log(anArray)

// .every
// every element passes our test
// .some
// At least one element passes our test
// (elem, [index]) => boolean

// let anArray = [1,2,4,6]

// console.log(anArray.some(n => n % 2 === 1))


// let some = anArray.some(n => n % 2 === 1)

// console.log(some)


// reduce is the last one











